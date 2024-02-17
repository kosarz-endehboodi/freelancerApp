import {
    HiCollection,
    HiCurrencyDollar,
    HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "../../UI/Stat";
import { toPersianNumberWithcomma } from "../../utils/toPersianNumbers";

function Stats({ proposals }) {
    const numOfProposals = proposals;
    const AcceptedProposals = proposals.filter((p) => p.status === 2);

    const balance = proposals.reduce((acc, curr) => acc + curr.price, 0);
  
    return (
      <div className="grid grid-cols-3 gap-x-8">
        <Stat
          title="تعداد درخواست ها"
          color="yellow"
          icon={<HiOutlineViewGrid className="w-20 h-20" />}
          value={numOfProposals.length}
        />
        <Stat
          title="درخواست های تایید شده"
          color="primary"
          icon={<HiCollection className="w-20 h-20" />}
          value={AcceptedProposals.length}
        />
        <Stat
          title="کیف پول"
          color="green"
          icon={<HiCurrencyDollar className="w-20 h-20" />}
          value={toPersianNumberWithcomma(balance)}
        />
      </div>
    );
  }
  export default Stats;
  