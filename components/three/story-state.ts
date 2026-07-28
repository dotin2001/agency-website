"use client";

export type StoryChapter =
  | "hero"
  | "challenge"
  | "transformation"
  | "projects";

type StorySnapshot = Readonly<{
  chapter: StoryChapter;
  hasMountedAnchors: boolean;
}>;

type AnchorRecord = {
  chapter: StoryChapter;
  score: number;
};

const defaultStorySnapshot: StorySnapshot = {
  chapter: "hero",
  hasMountedAnchors: false,
};

const storySubscribers = new Set<() => void>();
const storyAnchorRecords = new Map<string, AnchorRecord>();

let storySnapshot = defaultStorySnapshot;

function notifyStorySubscribers() {
  storySubscribers.forEach((notify) => notify());
}

function commitStorySnapshot(nextStorySnapshot: StorySnapshot) {
  if (
    storySnapshot.chapter === nextStorySnapshot.chapter &&
    storySnapshot.hasMountedAnchors === nextStorySnapshot.hasMountedAnchors
  ) {
    return;
  }

  storySnapshot = nextStorySnapshot;
  notifyStorySubscribers();
}

function recomputeStorySnapshot() {
  if (storyAnchorRecords.size === 0) {
    commitStorySnapshot(defaultStorySnapshot);
    return;
  }

  let bestChapter = storySnapshot.chapter;
  let bestScore = 0;

  storyAnchorRecords.forEach((record) => {
    if (record.score <= bestScore) {
      return;
    }

    bestScore = record.score;
    bestChapter = record.chapter;
  });

  commitStorySnapshot({
    chapter: bestScore > 0 ? bestChapter : storySnapshot.chapter,
    hasMountedAnchors: true,
  });
}

export function registerStoryChapterAnchor(
  id: string,
  chapter: StoryChapter,
) {
  storyAnchorRecords.set(id, {
    chapter,
    score: 0,
  });

  recomputeStorySnapshot();
}

export function updateStoryChapterAnchorScore(id: string, score: number) {
  const currentRecord = storyAnchorRecords.get(id);

  if (!currentRecord) {
    return;
  }

  if (Math.abs(currentRecord.score - score) < 0.01) {
    return;
  }

  storyAnchorRecords.set(id, {
    ...currentRecord,
    score,
  });

  recomputeStorySnapshot();
}

export function unregisterStoryChapterAnchor(id: string) {
  if (!storyAnchorRecords.has(id)) {
    return;
  }

  storyAnchorRecords.delete(id);
  recomputeStorySnapshot();
}

export function subscribeToStorySnapshot(onStoreChange: () => void) {
  storySubscribers.add(onStoreChange);

  return () => {
    storySubscribers.delete(onStoreChange);
  };
}

export function getStorySnapshot() {
  return storySnapshot;
}

export function getServerStorySnapshot() {
  return defaultStorySnapshot;
}
