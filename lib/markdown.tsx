import React from "react";

function formatInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

export function renderMarkdown(markdown: string) {
  const lines = markdown.split("\n");
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length === 0) {
      return;
    }

    elements.push(
      <ul key={`list-${elements.length}`} className="my-5 list-disc space-y-2 pl-6">
        {listItems.map((item, index) => (
          <li key={index}>{formatInline(item)}</li>
        ))}
      </ul>,
    );
    listItems = [];
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushList();
      return;
    }

    if (trimmed.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={index} className="mt-8 font-display text-3xl font-semibold text-ink">
          {formatInline(trimmed.replace("## ", ""))}
        </h2>,
      );
      return;
    }

    if (trimmed.startsWith("- ")) {
      listItems.push(trimmed.replace("- ", ""));
      return;
    }

    flushList();
    elements.push(
      <p key={index} className="my-4 leading-8 text-ink">
        {formatInline(trimmed)}
      </p>,
    );
  });

  flushList();
  return elements;
}
