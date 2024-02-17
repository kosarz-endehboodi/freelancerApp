import Empty from "../../UI/Empty";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";


export default function proposalTable({ proposals }) {

    if (!proposals.length) return <Empty resoureName="درخواستی" />
    return (
        <Table >
            <Table.Header  >
                
                    <th >#</th>
                    <th>فریلنسر</th>
                    <th>توضیحات</th>
                    <th>زمان تحویل</th>
                    <th>هزینه</th>
                    <th>وضعیت</th>
                    <th>عملیات</th>
               
            </Table.Header>
            <Table.Body>
                {proposals.map((proposal, index) => (
                    <ProposalRow proposal={proposal} index={index} key={proposal._id} />
                ))}
            </Table.Body>

        </Table>
    )
}