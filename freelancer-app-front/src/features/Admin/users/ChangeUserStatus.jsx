import { useQueryClient } from "@tanstack/react-query";
import Loading from "../../../UI/Loading";
import RHFSelect from "../../../UI/RHFSEelect";
import useChangeUserStatus from "./useChangestatus";
import { useForm } from "react-hook-form";

const options = [
    {
        label: "رد شده",
        value: 0,
    },
    {
        label: "در انتظار تایید",
        value: 1,
    },
    {
        label: "تایید شده",
        value: 2,
    },
]
export default function ChangeUserStatus({ userId, onClose }) {

    const { register, handleSubmit } = useForm();
    const {isUpdating, ChangeUserStatus } = useChangeUserStatus()
    const queryCLient = useQueryClient()

    const onSubmit = (data) => {
        ChangeUserStatus({ userId, data },{
            onSuccess: () => {
                onClose();
                queryCLient.invalidateQueries({ queryKey: ["users"] })
            }
        })
    }


    return (
        <div> user status change


            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <RHFSelect
                        label="تغییر وضعیت"
                        name="status"
                        register={register}
                        required
                        options={options}
                    />
                    <div className="!mt-8">
                        {isUpdating ? (
                            <Loading />
                        ) : (
                            <button className="btn btn--primary w-full" type="submit">
                                تایید
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}