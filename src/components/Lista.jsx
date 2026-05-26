export function Lista({ listaCompleta, descripcion }) {
  if (!listaCompleta || listaCompleta.length === 0) {
    return <p>No hay elementos en la lista</p>;
  }

  return (
    <>
      {descripcion && (
        <div className="p-3">
          <p className="italiana-regular cursor-default">{descripcion}</p>
        </div>
      )}
      {listaCompleta.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-3 rounded-md transition-colors duration-300 hover:bg-gray-100 active:bg-blue-300 focus-visible:bg-blue-200 focus-visible:outline-none"
        >
          <p className="font-bold text-base">{item.text}</p>
        </a>
      ))}
    </>
  );
}
