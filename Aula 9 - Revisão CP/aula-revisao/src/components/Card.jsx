export default function Card({ title, description}) {
  return (
    <div className="flex flex-col items-center p-6 w-48 rounded-lg shadow-md bg-white hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-black">{title}</h3>
      <p className="text-sm text-gray-500 text-center">{description}</p>
    </div>
  );
}