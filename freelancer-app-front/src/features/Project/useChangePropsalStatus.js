import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import  { changeProposalStatusApi } from "../../services/proposalService";

export default function useChangeproposalStatus() {
    const queryClient = useQueryClient();

    const { isPending: isUpdating, mutate: ChangeProposalStatus } = useMutation({
        mutationFn: changeProposalStatusApi,
        onSuccess: (data) => {
            toast.success(data.message)
        },
        onError: (err) =>
            toast.error(err?.response?.data?.message),
    })
    return { isUpdating, ChangeProposalStatus }
}
