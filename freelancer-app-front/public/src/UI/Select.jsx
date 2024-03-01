
export default function Select({value,onChange,options}) {
return(
    <select 
    
            value={value}
            onChange={onChange}
           
            className="textField-input py-2 p-2  text-xs bg-secondary-0"
        >
            {
                options.map((item) => <option key={item.value} value={item.value}>
                    {item.label}
                </option>)
            }
        </select>
)
}