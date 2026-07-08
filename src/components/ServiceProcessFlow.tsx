type ServiceProcessFlowProps = {
  steps: { title: string; description: string }[];
};

export function ServiceProcessFlow({ steps }: ServiceProcessFlowProps) {
  return (
    <div className="mt-6 rounded-2xl border border-border/60 bg-secondary/40 p-5">
      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        What happens after you click
      </p>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={step.title} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {index + 1}
              </span>
              {index < steps.length - 1 && (
                <span className="mt-1 h-full w-px bg-border" />
              )}
            </div>
            <div className="pb-2">
              <p className="font-medium text-foreground">{step.title}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
