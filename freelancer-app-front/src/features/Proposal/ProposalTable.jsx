import Empty from "../../UI/Empty";
import Loading from "../../UI/Loading";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalsRow";
import useProposals from "./useProposals";

export default function ProposalTable() {
    const { isLoading, proposals } = useProposals();
    if (isLoading) return <Loading />;
    
    if (!proposals.length) return <Empty resourceName="پروپوزال " />

    return (
        <Table>
            <Table.Header>
                <th>#</th>
                <th>توضیحات</th>
                <th>زمان تحویل </th>
                <th>هزینه</th>
                <th> وضعیت</th>
            </Table.Header>
            <Table.Body>
                {proposals.map((proposal, index) => (
                    <ProposalRow proposal={proposal} index={index} key={proposal._id} />
                ))}
            </Table.Body>

        </Table>
    )
}