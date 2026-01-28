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
        <div key={index}>
          <a
            href={item.url}
            onClick={(e) => {
              e.preventDefault();
              setTimeout(() => {
                window.open(item.url, "_blank");
              }, 200);
            }}
            className="block"
          >
            <div
              className="
              p-3 rounded-md cursor-pointer
              transition-colors duration-300
              hover:bg-gray-100
              active:bg-blue-300
              focus-visible:bg-blue-200
              focus-visible:outline-none
            "
            >
              <p className="font-bold text-base">{item.text}</p>
            </div>
          </a>
        </div>
      ))}
    </>
  );
}
