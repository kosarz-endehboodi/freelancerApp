import { useSearchParams } from "react-router-dom";

function Filter({ options, filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);
    
    setSearchParams(searchParams);
  }

  return (
    <div className="flex text-xs items-center gap-x-2">
      <span>وضعیت</span>
      <div className="rounded-md border border-secondary-100 bg-secondary-0 flex items-center gap-x-2 p-1 text-xs">
        {options.map((option) => {
          const active = option.value === currentFilter;
          return (
            <button
              key={option.value}
              onClick={() => handleClick(option.value)}
              disabled={option.value === currentFilter}
              className={`whitespace-nowrap rounded-md px-4 py-1 font-bold transition-all duration-300 
              ${
                active
                  ? "!bg-primary-900 text-white"
                  : "bg-secondary-0 text-secondary-800"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default Filter;
