import ProposalTable from "../features/Proposal/ProposalTable";

export default function Proposal() {
    return (
        <>
        <div>
            <h1 className="font-black text-secondary-700 text-xl mb-8">
              پروپوزال های شما  
            </h1>
            <ProposalTable/>
        </div>
       
        </>
    )
}

