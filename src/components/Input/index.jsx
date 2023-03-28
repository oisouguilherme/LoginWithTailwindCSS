export function Input({nome, placeholder, id}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm text-gray-800 mb-1">
        {nome}
      </label>

      <input
        placeholder={placeholder}
        type={id}
        id={id}
        className="w-full p-2 bg-gray-50 border rounded border-gray-300 text-base text-gray-800 placeholder-gray-300 focus:outline-none focus:border-blue-500 transition duration-200 ease-in-out"
      />
    </div>
  );
}
