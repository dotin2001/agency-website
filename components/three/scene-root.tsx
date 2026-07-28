"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { HeroObject } from "@/components/three/hero-object";
import {
  getServerStorySnapshot,
  getStorySnapshot,
  subscribeToStorySnapshot,
  type StoryChapter,
} from "@/components/three/story-state";

type PointerSnapshot = [number, number];
type VectorTuple = [number, number, number];
type PartScaleTuple = [number, number, number, number];
type PartVectorTuple = [VectorTuple, VectorTuple, VectorTuple, VectorTuple];
type SceneRootProps = {
  isCoarsePointer: boolean;
  isCompactViewport: boolean;
  isPageVisible: boolean;
  prefersReducedMotion: boolean;
};
type ChapterPose = Readonly<{
  ambientObjectPosition: VectorTuple;
  ambientObjectRotation: VectorTuple;
  ambientObjectScale: number;
  cameraDrift: VectorTuple;
  cameraPosition: VectorTuple;
  lookAt: [number, number];
  objectPosition: VectorTuple;
  objectRotation: VectorTuple;
  objectScale: number;
  partPositions: PartVectorTuple;
  partRotations: PartVectorTuple;
  partScales: PartScaleTuple;
  pointerFactor: number;
}>;

const neutralPointer: PointerSnapshot = [0, 0];
const neutralVector: VectorTuple = [0, 0, 0];
const neutralPartVectors: PartVectorTuple = [
  neutralVector,
  neutralVector,
  neutralVector,
  neutralVector,
];
const neutralPartScales: PartScaleTuple = [1, 1, 1, 1];
const cameraDamping = 3.2;
const settleThreshold = 0.0005;
const pointerEpsilon = 0.015;
const scrollEpsilon = 0.002;
const pointerSubscribers = new Set<() => void>();
const scrollSubscribers = new Set<() => void>();

let pointerSnapshot = neutralPointer;
let scrollProgressSnapshot = 0;
let pointerFrameId = 0;
let scrollFrameId = 0;

const desktopChapterPoses: Record<StoryChapter, ChapterPose> = {
  hero: {
    ambientObjectPosition: [0.02, 0.02, 0],
    ambientObjectRotation: [0.01, -0.02, 0.01],
    ambientObjectScale: 1.01,
    cameraDrift: [0.04, -0.02, 0.06],
    cameraPosition: [0.02, -0.02, 3.86],
    lookAt: [0.94, -0.02],
    objectPosition: [0.98, -0.04, 0],
    objectRotation: [0.06, -0.16, 0.02],
    objectScale: 0.92,
    partPositions: neutralPartVectors,
    partRotations: neutralPartVectors,
    partScales: neutralPartScales,
    pointerFactor: 0.34,
  },
  challenge: {
    ambientObjectPosition: [-0.03, 0.04, 0.02],
    ambientObjectRotation: [0.02, -0.03, 0.02],
    ambientObjectScale: 1.02,
    cameraDrift: [0.03, -0.02, 0.05],
    cameraPosition: [-0.18, 0.08, 4.16],
    lookAt: [0.62, -0.02],
    objectPosition: [1.06, -0.08, 0.04],
    objectRotation: [0.18, -0.34, 0.08],
    objectScale: 0.78,
    partPositions: [
      [-0.08, 0.08, 0.02],
      [0.28, 0.22, 0.08],
      [-0.24, -0.16, -0.06],
      [0.22, -0.26, 0.1],
    ],
    partRotations: [
      [0.12, -0.16, 0.08],
      [0.18, 0.22, -0.14],
      [-0.14, -0.18, 0.12],
      [0.16, 0.14, -0.08],
    ],
    partScales: [0.96, 1, 0.94, 0.92],
    pointerFactor: 0.16,
  },
  transformation: {
    ambientObjectPosition: [0.02, 0.03, 0.01],
    ambientObjectRotation: [0.02, -0.03, 0.01],
    ambientObjectScale: 1.015,
    cameraDrift: [0.03, -0.02, 0.04],
    cameraPosition: [0.08, -0.04, 3.96],
    lookAt: [0.94, -0.06],
    objectPosition: [1.02, -0.1, 0.02],
    objectRotation: [0.1, -0.22, 0.04],
    objectScale: 0.86,
    partPositions: [
      [0, 0, 0.02],
      [0.1, 0.2, 0.02],
      [-0.08, -0.14, -0.02],
      [0.04, 0.02, 0],
    ],
    partRotations: [
      [0.04, -0.06, 0.02],
      [0.12, 0.14, -0.06],
      [-0.08, -0.1, 0.05],
      [0.08, 0.06, -0.02],
    ],
    partScales: [1, 0.98, 0.96, 0.98],
    pointerFactor: 0.1,
  },
  projects: {
    ambientObjectPosition: [0.01, 0.01, 0],
    ambientObjectRotation: [0.01, -0.01, 0],
    ambientObjectScale: 1.01,
    cameraDrift: [0.02, -0.01, 0.03],
    cameraPosition: [0.16, -0.06, 4.12],
    lookAt: [1.08, -0.08],
    objectPosition: [1.24, -0.16, 0],
    objectRotation: [0.04, -0.08, 0.02],
    objectScale: 0.74,
    partPositions: [
      [-0.04, 0, 0],
      [0.24, 0.08, 0.04],
      [-0.18, -0.08, -0.04],
      [0.16, -0.18, 0.02],
    ],
    partRotations: [
      [0.02, -0.04, 0],
      [0.08, 0.1, -0.04],
      [-0.06, -0.08, 0.04],
      [0.06, 0.04, -0.02],
    ],
    partScales: [1, 0.98, 0.96, 0.94],
    pointerFactor: 0.06,
  },
};

const compactChapterPoses: Record<"hero" | "projects", ChapterPose> = {
  hero: {
    ambientObjectPosition: neutralVector,
    ambientObjectRotation: neutralVector,
    ambientObjectScale: 1,
    cameraDrift: neutralVector,
    cameraPosition: [0, 0, 4],
    lookAt: [0.82, -0.08],
    objectPosition: [0.94, -0.22, 0],
    objectRotation: [0.06, -0.15, 0.02],
    objectScale: 0.7,
    partPositions: neutralPartVectors,
    partRotations: neutralPartVectors,
    partScales: neutralPartScales,
    pointerFactor: 0,
  },
  projects: {
    ambientObjectPosition: neutralVector,
    ambientObjectRotation: neutralVector,
    ambientObjectScale: 1,
    cameraDrift: neutralVector,
    cameraPosition: [0.04, -0.02, 4.08],
    lookAt: [0.86, -0.08],
    objectPosition: [1.02, -0.22, 0],
    objectRotation: [0.04, -0.08, 0.02],
    objectScale: 0.62,
    partPositions: [
      neutralVector,
      [0.12, 0.04, 0.02],
      [-0.1, -0.04, -0.02],
      [0.08, -0.1, 0.01],
    ],
    partRotations: [
      neutralVector,
      [0.04, 0.05, -0.02],
      [-0.04, -0.05, 0.02],
      [0.04, 0.02, -0.01],
    ],
    partScales: [1, 0.98, 0.96, 0.94],
    pointerFactor: 0,
  },
};

function getCompactChapter(chapter: StoryChapter) {
  return chapter === "projects" || chapter === "transformation"
    ? "projects"
    : "hero";
}

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(Math.max(value, minimum), maximum);
}

function damp(current: number, target: number, delta: number) {
  return current + (target - current) * (1 - Math.exp(-cameraDamping * delta));
}

function notifyPointerSubscribers() {
  if (pointerFrameId !== 0) {
    return;
  }

  pointerFrameId = window.requestAnimationFrame(() => {
    pointerFrameId = 0;
    pointerSubscribers.forEach((notify) => notify());
  });
}

function resetPointerSnapshot() {
  if (pointerSnapshot[0] === 0 && pointerSnapshot[1] === 0) {
    return;
  }

  pointerSnapshot = neutralPointer;
  notifyPointerSubscribers();
}

function handleDocumentVisibilityChange() {
  if (document.visibilityState !== "visible") {
    resetPointerSnapshot();
  }
}

function handleDocumentPointerMove(event: PointerEvent) {
  const width = window.innerWidth || 1;
  const height = window.innerHeight || 1;
  const nextPointerSnapshot: PointerSnapshot = [
    clamp((event.clientX / width) * 2 - 1, -1, 1),
    clamp(-((event.clientY / height) * 2 - 1), -1, 1),
  ];

  if (
    Math.abs(pointerSnapshot[0] - nextPointerSnapshot[0]) < pointerEpsilon &&
    Math.abs(pointerSnapshot[1] - nextPointerSnapshot[1]) < pointerEpsilon
  ) {
    return;
  }

  pointerSnapshot = nextPointerSnapshot;
  notifyPointerSubscribers();
}

function getDocumentScrollProgress() {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return 0;
  }

  const documentElement = document.documentElement;
  const body = document.body;
  const documentHeight = Math.max(
    documentElement.scrollHeight,
    body?.scrollHeight ?? 0,
  );
  const maximumScroll = documentHeight - window.innerHeight;

  if (maximumScroll <= 0) {
    return 0;
  }

  return clamp(window.scrollY / maximumScroll, 0, 1);
}

function updateScrollProgress() {
  if (scrollFrameId !== 0) {
    return;
  }

  scrollFrameId = window.requestAnimationFrame(() => {
    scrollFrameId = 0;

    const nextScrollProgress = getDocumentScrollProgress();

    if (Math.abs(scrollProgressSnapshot - nextScrollProgress) < scrollEpsilon) {
      return;
    }

    scrollProgressSnapshot = nextScrollProgress;
    scrollSubscribers.forEach((notify) => notify());
  });
}

function subscribeToDocumentPointer(onStoreChange: () => void) {
  if (typeof document === "undefined") {
    return () => {};
  }

  pointerSubscribers.add(onStoreChange);

  if (pointerSubscribers.size === 1) {
    document.addEventListener("pointermove", handleDocumentPointerMove, {
      passive: true,
    });
    document.addEventListener("visibilitychange", handleDocumentVisibilityChange);
    window.addEventListener("blur", resetPointerSnapshot);
  }

  return () => {
    pointerSubscribers.delete(onStoreChange);

    if (pointerSubscribers.size === 0) {
      document.removeEventListener("pointermove", handleDocumentPointerMove);
      document.removeEventListener(
        "visibilitychange",
        handleDocumentVisibilityChange,
      );
      window.removeEventListener("blur", resetPointerSnapshot);

      if (pointerFrameId !== 0) {
        window.cancelAnimationFrame(pointerFrameId);
        pointerFrameId = 0;
      }

      resetPointerSnapshot();
    }
  };
}

function subscribeToDocumentScroll(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  scrollSubscribers.add(onStoreChange);
  scrollProgressSnapshot = getDocumentScrollProgress();

  if (scrollSubscribers.size === 1) {
    window.addEventListener("scroll", updateScrollProgress, {
      passive: true,
    });
    window.addEventListener("resize", updateScrollProgress, {
      passive: true,
    });
  }

  return () => {
    scrollSubscribers.delete(onStoreChange);

    if (scrollSubscribers.size === 0) {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);

      if (scrollFrameId !== 0) {
        window.cancelAnimationFrame(scrollFrameId);
        scrollFrameId = 0;
      }
    }
  };
}

function getPointerSnapshot() {
  return pointerSnapshot;
}

function getServerPointerSnapshot() {
  return neutralPointer;
}

function getScrollSnapshot() {
  return scrollProgressSnapshot;
}

function getServerScrollSnapshot() {
  return 0;
}

export function SceneRoot({
  isCoarsePointer,
  isCompactViewport,
  isPageVisible,
  prefersReducedMotion,
}: Readonly<SceneRootProps>) {
  const invalidate = useThree((state) => state.invalidate);
  const storySnapshot = useSyncExternalStore(
    subscribeToStorySnapshot,
    getStorySnapshot,
    getServerStorySnapshot,
  );
  const compactChapter = getCompactChapter(storySnapshot.chapter);
  const activeChapter: StoryChapter = isCompactViewport
    ? compactChapter
    : storySnapshot.chapter;
  const chapterPose = isCompactViewport
    ? compactChapterPoses[compactChapter]
    : desktopChapterPoses[activeChapter];
  const canTrackPointer =
    !isCompactViewport &&
    !isCoarsePointer &&
    !prefersReducedMotion &&
    isPageVisible;
  const canTrackScroll =
    !isCompactViewport &&
    !prefersReducedMotion &&
    isPageVisible &&
    storySnapshot.hasMountedAnchors;
  const isSceneMotionEnabled = !prefersReducedMotion && isPageVisible;
  const subscribeToPointer = useCallback(
    (onStoreChange: () => void) =>
      canTrackPointer
        ? subscribeToDocumentPointer(onStoreChange)
        : () => {},
    [canTrackPointer],
  );
  const getActivePointerSnapshot = useCallback(
    () => (canTrackPointer ? getPointerSnapshot() : neutralPointer),
    [canTrackPointer],
  );
  const subscribeToScroll = useCallback(
    (onStoreChange: () => void) =>
      canTrackScroll
        ? subscribeToDocumentScroll(onStoreChange)
        : () => {},
    [canTrackScroll],
  );
  const getActiveScrollSnapshot = useCallback(
    () => (canTrackScroll ? getScrollSnapshot() : 0),
    [canTrackScroll],
  );
  const [pointerX, pointerY] = useSyncExternalStore(
    subscribeToPointer,
    getActivePointerSnapshot,
    getServerPointerSnapshot,
  );
  const scrollProgress = useSyncExternalStore(
    subscribeToScroll,
    getActiveScrollSnapshot,
    getServerScrollSnapshot,
  );
  const ambientProgress = canTrackScroll ? clamp(scrollProgress, 0, 1) : 0;
  const pointerFactor = chapterPose.pointerFactor;

  useEffect(() => {
    invalidate();
  }, [
    activeChapter,
    invalidate,
    isCompactViewport,
    isCoarsePointer,
    isPageVisible,
    prefersReducedMotion,
    storySnapshot.hasMountedAnchors,
  ]);

  useFrame((state, delta) => {
    const camera = state.camera;
    const targetX =
      chapterPose.cameraPosition[0] +
      chapterPose.cameraDrift[0] * ambientProgress;
    const targetY =
      chapterPose.cameraPosition[1] +
      chapterPose.cameraDrift[1] * ambientProgress;
    const targetZ =
      chapterPose.cameraPosition[2] +
      chapterPose.cameraDrift[2] * ambientProgress;

    if (!isSceneMotionEnabled) {
      camera.position.set(targetX, targetY, targetZ);
      camera.lookAt(chapterPose.lookAt[0], chapterPose.lookAt[1], 0);
      return;
    }

    const dampedDelta = Math.min(delta, 0.08);

    camera.position.set(
      damp(camera.position.x, targetX, dampedDelta),
      damp(camera.position.y, targetY, dampedDelta),
      damp(camera.position.z, targetZ, dampedDelta),
    );
    camera.lookAt(chapterPose.lookAt[0], chapterPose.lookAt[1], 0);

    const isSettled =
      Math.abs(camera.position.x - targetX) < settleThreshold &&
      Math.abs(camera.position.y - targetY) < settleThreshold &&
      Math.abs(camera.position.z - targetZ) < settleThreshold;

    if (!isSettled) {
      state.invalidate();
    }
  });

  return (
    <>
      <ambientLight intensity={0.42} />
      <directionalLight intensity={0.8} position={[3, 4, 5]} />
      <HeroObject
        interactionEnabled={canTrackPointer}
        motionEnabled={isSceneMotionEnabled}
        partPositions={chapterPose.partPositions}
        partRotations={chapterPose.partRotations}
        partScales={chapterPose.partScales}
        position={chapterPose.objectPosition}
        rotation={chapterPose.objectRotation}
        scale={chapterPose.objectScale}
        scrollProgress={ambientProgress}
        scrollTargetPosition={chapterPose.ambientObjectPosition}
        scrollTargetRotation={chapterPose.ambientObjectRotation}
        scrollTargetScale={chapterPose.ambientObjectScale}
        targetPosition={[
          pointerX * 0.05 * pointerFactor,
          pointerY * 0.035 * pointerFactor,
          0,
        ]}
        targetRotation={[
          pointerY * 0.04 * pointerFactor,
          pointerX * 0.065 * pointerFactor,
          -pointerX * 0.02 * pointerFactor,
        ]}
      />
    </>
  );
}
