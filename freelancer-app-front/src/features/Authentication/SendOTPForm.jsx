import TextField from "../../UI/TextField"
import Loading from "../../UI/Loading"

export default function sendOTPForm({ onSubmit, isSendingOtp, register }) {

    //usequery
    //useMutation

    return (
        <div>
            <form onSubmit={onSubmit} className="space-y-4" >
                <TextField
                    label="شماره موبایل"
                    name="phoneNumber"
                    required
                    register={register}
                // value={value}
                // onChange={onChange} 

                />
                {isSendingOtp ? (<Loading />) : (<button type="submit" className="btn btn--primary w-full"  > ارسال کد تایید </button>)}
            </form>
        </div>
    )
}


