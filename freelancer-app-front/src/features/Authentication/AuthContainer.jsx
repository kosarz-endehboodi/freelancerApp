import SendOTPForm from "./SendOTPForm"
import CheckOTPForm from "./CheckOTPForm"
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getOtp } from "../../services/authService";
import { useForm } from "react-hook-form";


export default function authContainer() {

    const { isPending: isSendingOtp,
        mutateAsync,
        data: otpResponse
    } = useMutation({
        mutationFn: getOtp,
    })

    const sendOtpHandler = async (data) => {
        try {
            const { message } = await mutateAsync(data)
            setStep(2);
            toast.success(message);
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };

    const [step, setStep] = useState(1);
    const { register, handleSubmit, getValues } = useForm();


    const renderstep = () => {
        switch (step) {
            case 1:
                return (<SendOTPForm
                    isSendingOtp={isSendingOtp}
                    onSubmit={handleSubmit(sendOtpHandler)}
                    // onChange={(e) => setPhoneNumber(e.target.value)}
                    // phoneNumber={phoneNumber}
                    // onSubmit={handleSubmit}
                    setStep={setStep}
                    register={register}

                //onSubmit,isSendingOtp,onChange,phoneNumber

                />);

            case 2:
                return (<CheckOTPForm
                    onResendOtp={sendOtpHandler}
                    onBack={() => setStep((s) => s - 1)}
                    // phoneNumber={phoneNumber}
                    phoneNumber={getValues("phoneNumber")}
                    otpResponse={otpResponse}
                />
                );
            default:
                return null;
        }
    }


    return <div className="w-full sm:max-w-sm"> {renderstep()}</div>
    
}