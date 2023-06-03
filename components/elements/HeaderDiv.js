export default function HeaderDiv({ children, ...props }) {
  return (
    <div {...props} className={" " + (props?.className ?? "bg-back-main")}>
      <div className="container flex items-center gap-2 max-w-5xl p-4  mx-auto px-5">
        {children}
      </div>
    </div>
  );
}
