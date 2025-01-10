"use client";

import { CodeIcon } from "@primer/octicons-react";

export default function ListPreview() {
  return (
    <div className="flex items-center gap-2 p-2">
      <div className="flex-shrink-0">
        <CodeIcon size={20} className="text-[var(--color-fg-muted)]" />
      </div>
      <div className="flex flex-col">
        <div className="text-sm font-medium">Core engineering</div>
        <div className="text-xs text-[var(--color-fg-muted)]">@coreeng</div>
      </div>
    </div>
  );
}
