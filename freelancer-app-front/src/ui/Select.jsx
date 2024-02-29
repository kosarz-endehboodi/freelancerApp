function Select({ value, onChange, options }) {
  return (
    <select value={value} 
    onChange={onChange}
     className="textField__input py-2 text-xs">
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
export default Select;
