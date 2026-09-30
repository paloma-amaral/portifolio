export function Browser({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <div className="device">
      <div className="device-bar" aria-hidden="true">
        <i />
        <i />
        <i />
        <span className="ml-3 h-5 flex-1 rounded-md bg-[var(--bg)] px-3 text-xs leading-5 text-[var(--text-3)]">
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}

export function Phone({ children }: { children: React.ReactNode }) {
  return <div className="phone">{children}</div>;
}
