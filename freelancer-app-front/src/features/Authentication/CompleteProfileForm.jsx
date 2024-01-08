
import TextField from "../../UI/TextField";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../UI/Loading";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import RadioInputGroup from "../../UI/RadioInputGroup";

export default function Completeprofile() {
    const { handleSubmit, register, watch, formState: { errors } } = useForm();
    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [role, setRole] = useState("")
    const navigate = useNavigate();
    const { isPending, error, data, mutateAsync } = useMutation({
        mutationFn: completeProfile,
    })
    const onSubmit = async (data) => {

        try {
            const { message, user } = await mutateAsync(data)
            // console.log(user, message)

            if (user.status !== 2) {
                navigate("/")
                toast("پروفایل شما در انتظار تایید است", { icon: "👏🏼" })
                return;
            }
            if (user.role === "OWNER") return navigate("/owner")
            if (user.role === "FREELANCER") return navigate("/freelancer")

            toast.success(message);
            //role=> push to profile
            //status=>0
            //check user status to push to profile or not
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    return (

        <div className="w-full sm:max-w-sm">
            <div className="space-y-8  pt-10">
                <form className="space-y-8" onSubmit={handleSubmit(onSubmit)} >
                    <TextField
                        label="نام و نام خانوادگی"
                        name="name"
                        register={register}
                        validationSchema={{
                            required: "نام و نام خانوادگی ضروری است"
                        }}
                        errors={errors}
                    />
                    <TextField
                        label="ایمیل"
                        name="email"
                        register={register}
                        validationSchema={{
                            required: "ایمیل ضروری است",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "ایمیل نامعتبر است"
                              }
                        }}
                        errors={errors}
                    />
                    <RadioInputGroup
                        errors={errors}
                        register={register}
                        watch={watch}
                        configs={{
                            name: "role",
                            validationSchema: { required: "انتخاب نقش ضروری است" },
                            options: [{
                                value: "OWNER",
                                label: "کارفرما"
                            },
                            {
                                value: "FREELANCER",
                                label: "فریلنسر"
                            }
                            ]
                        }}
                    />

                    <div>{
                        isPending ? (<Loading />) :
                            (<button className="btn btn--primary">تایید</button>
                            )
                    }</div>

                </form>
            </div>
        </div>

    )
}