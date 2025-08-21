import clsx from "clsx";

export function NeonButton({ children, as = 'button', className = '', ...rest }: any) {
  const Comp: any = as;
  return (
    <Comp
      className={clsx(
        "inline-flex items-center gap-2 rounded-neon px-4 py-2 font-medium",
        "border border-pri/40 text-text",
        "bg-[linear-gradient(180deg,transparent,rgba(255,255,255,.04))]",
        "shadow-[0_0_.6rem_var(--pri)] hover:shadow-[0_0_1.2rem_var(--pri)]",
        "transition-all duration-150",
        className
      )}
      {...rest}
    >
      <span className="text-[color:var(--pri)] drop-shadow-[0_0_.4rem_var(--pri)]">●</span>
      {children}
    </Comp>
  );
}
