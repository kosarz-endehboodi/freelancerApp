
import Table from "../../ui/Table";
import { toPersianNumberWithcomma } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/trancateText";
const statusStyle = [
    {
        label: "رد شده",
        className: "badge--danger"
    },
    {
        label: "در انتظار تایید",
        className: "badge--secondary"
    },
    {
        label: " تایید شده",
        className: "badge--success"
    }]

export default function ProposalRow({ proposal, index }) {

    const { status ,description,duration,price} = proposal;


    return (
        <Table.Row>
            <td>{index + 1}</td>
            <td>{truncateText(description, 60)}</td>
            <td>{toPersianNumberWithcomma(duration)}روز</td>
            <td>{toPersianNumberWithcomma(price)}</td>
            <td><span className={`badge ${statusStyle[status].className}`}>
                {statusStyle[status].label}
            </span></td>
        </Table.Row>

    )
}