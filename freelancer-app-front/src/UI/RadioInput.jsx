
export default function radioInput({ label,
    value, register,
    name, id, checked, validationSchema,
     errors }) {
    return (
        <div className="flex items-center gap-x-2 text-secondary-500">
            <input className="cursor-pointer w-4 h-4  accent-green-950"
                value={value}
                type="radio"
                name={name}
                id={id}
                {...register(name, validationSchema)}
                checked={checked}
            />
            <label htmlFor={id}>{label}</label>
            
        </div>
    )
}