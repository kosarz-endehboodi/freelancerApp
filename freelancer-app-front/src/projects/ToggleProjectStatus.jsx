import { Switch } from "@headlessui/react"
import { useState } from "react"
import useToggleProject from "./useToggleProject"
import Loading from "../../UI/Loading"
import Toggle from "../../UI/Toggle"


export default function ToggleProjectStatus({ project }) {

    const [enabled, setEnabled] = useState(project.status === "OPEN" ? true : false)

    const { isUpdating, toggleProjectStatus } = useToggleProject()
    const toggleHandler = () => {
        const status = project.status === "OPEN" ? "CLOSED" : "OPEN";
        toggleProjectStatus({ data: { status }, id: project._id }, {
            onSuccess: () => {
                setEnabled((prev) => !prev)
            },
        });

    };
    return (
        <div className="w-[5rem]">
            {
                isUpdating ? (
                    < Loading height={20} width={50} />
                ) : (
                    <Toggle
                        enabled={enabled}
                        label={project.status === "OPEN" ? "باز" : "بسته"}
                        onChange={toggleHandler}
                    />
                )
            }
        </div>
    )
}