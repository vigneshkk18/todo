interface TodoText {
  text: string;
  completed: boolean;
  inputProps: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

export default function TodoText({ completed, text, inputProps }: TodoText) {
  if (completed)
    return (
      <span className="flex-grow text-[#787598] line-through decoration-2 font-bold">
        {text}
      </span>
    );

  const { className, value, defaultValue, ...props } = inputProps;
  return (
    <input
      value={text}
      className={`${className} flex-grow bg-transparent outline-none border-none font-bold`}
      {...props}
    />
  );
}
