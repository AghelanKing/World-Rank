function CountryItem({ Specific }) {
  return (
    <li className="flex items-center w-ful justify-between py-4.5 px-3 font-semibold">
      <h5 className="text-[#383c41] dark:text-[#6C727F]">{Specific.label}</h5>
      <h5>{Specific.value}</h5>
    </li>
  );
}

export default CountryItem;
