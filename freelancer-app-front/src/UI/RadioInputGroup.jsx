import RadioInput from "./RadioInput";

export default function RadioInputGroup({ register, watch, errors, configs }) {


    const { name, validationSchema = {}, options } = configs;

    return (
        <div>
            <div className="flex flex-wrap items-center gap-x-8 ">
                {options.map((option) => (
                    <RadioInput
                        key={option.value}
                        label={option.label}
                        value={option.value}
                        // onChange={(e) => setRole(e.target.value)}
                        register={register}
                        id={option.value}
                        name={name}
                        watch={watch}
                        validationSchema={validationSchema}
                        errors={errors}
                    />
                ))}
                {errors && errors[name] && (<span className="text-error block text-sm mt-2">
                    {errors[name]?.message}
                </span>)}
            </div>
        </div>
    )
}