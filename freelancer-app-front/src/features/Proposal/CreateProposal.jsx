import { useForm } from "react-hook-form"
import Loading from "../../UI/Loading";
import TextField from "../../UI/TextField";
import useCreateProposal from "./useCreateProposal";

export default function CreateProposal({ onClose, projectId }) {

    const { handleSubmit, register, formState: { errors }
    } = useForm();

    const { createProposal, isCreating } = useCreateProposal();
    const onSubmit = (data) => {
        console.log(data)
        createProposal({ ...data, projectId }, {
            onSuccess: () => onClose(),
        });
    }
    return (
        <div>
            <form action="" className=" space-y-8" onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="توضیحات "
                    name="description"
                    register={register}
                    required
                    validationSchema={{
                        required: "عنوان ضروری است",
                        minlength: { value: 10, message: "  حداثل 10 کارکتر ضروری است" }
                    }}
                    errors={errors}
                />


                <TextField
                    label="قیمت "
                    name="price"
                    type="number"
                    register={register}
                    required
                    validationSchema={{
                        required: "قیمت ضروری است"
                    }}
                    errors={errors}
                />

                <TextField
                    label="مدت زمان "
                    name="duration"
                    type="number"
                    register={register}
                    required
                    validationSchema={{
                        required: "مدت زمان ضروری است"
                    }}
                    errors={errors}
                />

                <div className="!mt-8">
                    {isCreating ? <Loading /> :
                        <button
                            type="submit"
                            className="btn btn--primary w-full"
                        >تایید
                        </button>
                    }
                </div>

            </form>
        </div>
    )
}