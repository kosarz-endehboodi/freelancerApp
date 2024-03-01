import {
    HiCollection,
    HiOutlineViewGrid,
    HiUser,
} from "react-icons/hi";
import Stat from "../../UI/Stat";

export default function Stats({ projects, proposals, users }) {

    return (
        <div className="grid grid-cols-1 gap-x-8">
            <Stat
                title="پروژه ها"
                color="orange"
                icon={<HiUser className="w-20 h-20" />}
                value={users}
            />
            <Stat
                title="درخواست ها"
                color="primary"
                icon={<HiOutlineViewGrid className="w-20 h-20" />}
                value={proposals}
            />
            <Stat
                title="پروژه های واگذار شده"
                color="green"
                icon={<HiCollection className="w-20 h-20" />}
                value={projects}
            />
        </div>
    );
}