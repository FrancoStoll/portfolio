import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export const SectionHeading = ({
  index,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) => {
  return (
    <Reveal className="mb-12 sm:mb-16">
      <div className="flex items-center gap-4">
        <span className="font-mono text-sm font-medium text-primary">{index}</span>
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {eyebrow}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
      </div>
      <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-pretty text-base text-muted-foreground">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
};
