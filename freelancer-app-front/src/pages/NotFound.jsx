import { HiArrowRight } from "react-icons/hi"
import { useNavigate } from "react-router-dom"
import useMoveback from "../hooks/useMoveback"


export default function notfound() {
 const moveBack= useMoveback();
    return (
        <div className="h-screen bg-secondary-0">
        <div className="w-full sm:max-w flex justify-center "  >
            <div >
                <button onClick={moveBack} className=" flex items-center gap-x-2">
                    <HiArrowRight className="w-6 h-6 text-primary-900" />
                    <span>برگشت</span>
                </button>



                <div className="justify-center mx-8 mt-36">
                    <h1 className="text-xl align-middle font-bold text-secondary-700 mb-8  ">
                        صفحه ی مورد نظر یافت نشد!
                    </h1>
                </div >
            </div>
        </div>
        </div>
    )
}