import {
    HiCollection,
    HiCurrencyDollar,
    HiOutlineViewGrid,
  } from "react-icons/hi";
  import Stat from "./Stat";
  
export default function Stats({ projects }) {
    const numOfProjects = projects.length;
    const numofAcceptedProjects = projects.map((p) => p.status === 2).length;
    const numOfProposals = projects.reduce((acc, curr) => curr.proposals.length + acc, 0)

    return (
        <div className="grid grid-cols-1 gap-x-8">
          <Stat
            title="پروژه ها"
            color="primary"
            icon={<HiOutlineViewGrid className="w-20 h-20" />}
            value={numOfProjects}
          />
          <Stat
            title="درخواست ها"
            color="yellow"
            icon={<HiCollection className="w-20 h-20" />}
            value={numOfProposals}
          />
          <Stat
            title="پروژه های واگذار شده"
            color="green"
            icon={<HiCurrencyDollar className="w-20 h-20" />}
            value={numofAcceptedProjects}
          />
        </div>
      );
    }