function BordersItem({ border }) {
  const { flag: { url_png: flag } = {}, names: { common: name } = {} } = border;
  return (
    <li className="mx-3 flex flex-col items-center justify-center mt-2.5">
      <img
        className="w-20 rounded-xl"
        src={flag || "noFlag.jpg"}
        alt={`flag of ${name}`}
      />
      <h5 className="mt-1 font-semibold">{name}</h5>
    </li>
  );
}

export default BordersItem;
