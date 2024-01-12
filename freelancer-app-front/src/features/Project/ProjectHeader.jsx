import { HiArrowRight } from "react-icons/hi"
import useMoveback from "../../hooks/useMoveback"


export default function projectHeader({ project }) {
    const moveBack = useMoveback()

    return (
        <div className="flex item-center   gap-x-4 mb-8">
            <button onClick={moveBack}>
                <HiArrowRight className="w-5 h-3 text-Secondary-500" />
                <h1 className="font-block text-secondary-700 text-xl"> لیست درخواست های {project.title}</h1>
            </button>
        </div>
    )
}