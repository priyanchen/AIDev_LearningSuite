import type { ResourceNode } from '@/content/module-resources';
import type { Locale } from '@/i18n';

function ResourceNodeView({ node, locale }: { node: ResourceNode; locale: Locale }) {
  if (node.kind === 'file') {
    return (
      <a
        href={node.url}
        target="_blank"
        rel="noopener noreferrer"
        title={node.name}
        className="flex items-center gap-2.5 py-1.5 pl-2 -mx-2 rounded-sm text-sm hover:bg-codebg/60 hover:text-accent transition group"
      >
        <span className="text-[8px] tracking-brand uppercase text-muted font-sans font-mono border border-rule px-1 py-0.5 shrink-0 group-hover:border-accent group-hover:text-accent">
          {node.ext}
        </span>
        <span className="flex-1">{node.label[locale]}</span>
        <span className="text-muted text-xs opacity-0 group-hover:opacity-100 transition">↗</span>
      </a>
    );
  }

  return (
    <details className="py-1" open={node.open}>
      <summary className="cursor-pointer py-1.5 small-caps tracking-wide text-sm font-bold hover:text-accent transition select-none">
        {node.label[locale]}
      </summary>
      <div className="pl-4 border-l border-rule ml-1.5 mt-1 grid gap-0.5">
        {node.children.map((child) => (
          <ResourceNodeView key={child.name} node={child} locale={locale} />
        ))}
      </div>
    </details>
  );
}

export default function ResourceTree({ tree, locale }: { tree: ResourceNode[]; locale: Locale }) {
  return (
    <div className="grid gap-1">
      {tree.map((node) => (
        <ResourceNodeView key={node.name} node={node} locale={locale} />
      ))}
    </div>
  );
}
