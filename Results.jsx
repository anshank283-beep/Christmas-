export default function Results({ results }) {
  return (
    <div className="mt-10 w-full max-w-3xl">
      {results.map((item, index) => (
        <div
          key={index}
          className="bg-gray-800 p-5 rounded-xl mb-4"
        >
          <a
            href={item.url}
            target="_blank"
            className="text-blue-400 text-2xl"
          >
            {item.title}
          </a>

          <p className="mt-2 text-gray-300">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
