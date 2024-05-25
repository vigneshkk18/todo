export function IconButton({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return (
    <button className={`${className} border-0 outline-0 focus:outline-2 focus:outline-dotted`} {...props}></button>
  );
}
