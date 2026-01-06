type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

function Input(props: InputProps) {
  return (
    <input
      className="border-0 bg-white text-gray-800 py-3 px-4 rounded-sm outline-none mb-3 w-full"
      type="text"
      {...props}
    />
  );
}
export default Input;
