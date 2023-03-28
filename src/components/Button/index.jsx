export function Button({text}) {
  return (
    <div>
      <button className="w-full text-sm bg-blue-500 hover:bg-blue-600 p-2 text-white font-bold rounded">
        {text}
      </button>
    </div>
  );
}
