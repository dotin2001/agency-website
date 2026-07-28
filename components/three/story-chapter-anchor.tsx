"use client";

import { useEffect, useId, useRef } from "react";
import {
  type StoryChapter,
  registerStoryChapterAnchor,
  unregisterStoryChapterAnchor,
  updateStoryChapterAnchorScore,
} from "@/components/three/story-state";

type StoryChapterAnchorProps = Readonly<{
  chapter: StoryChapter;
  className?: string;
}>;

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function StoryChapterAnchor({
  chapter,
  className,
}: StoryChapterAnchorProps) {
  const anchorId = useId();
  const anchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = anchorRef.current;

    registerStoryChapterAnchor(anchorId, chapter);

    if (!node) {
      return () => {
        unregisterStoryChapterAnchor(anchorId);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (!entry?.isIntersecting) {
          updateStoryChapterAnchorScore(anchorId, 0);
          return;
        }

        const viewportHeight = window.innerHeight || 1;
        const anchorCenter =
          entry.boundingClientRect.top + entry.boundingClientRect.height / 2;
        const viewportCenter = viewportHeight / 2;
        const distanceFromCenter = Math.abs(anchorCenter - viewportCenter);
        const centerScore = 1 - Math.min(distanceFromCenter / viewportHeight, 1);
        const score = entry.intersectionRatio * 0.7 + centerScore * 0.3;

        updateStoryChapterAnchorScore(anchorId, score);
      },
      {
        threshold: [0, 0.15, 0.35, 0.55, 0.75, 1],
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      unregisterStoryChapterAnchor(anchorId);
    };
  }, [anchorId, chapter]);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-x-0 top-0 h-[60vh] sm:h-[68vh]",
        className,
      )}
      ref={anchorRef}
    />
  );
}
