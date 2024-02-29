import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSEelect";
import useChangeproposalStatus from "./useChangePropsalStatus";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loading from "../../UI/Loading"
const options = [
  {
    label: "رد شده",
    value: 0,
  },
  {
    label: "در انتظار تایید",
    value: 1,
  },
  {
    label: "تایید شده",
    value: 2,
  },
]

function ChangeProposalStatus({ proposalId, onClose }) {
  const { id: projectId } = useParams()
  const { register, handleSubmit } = useForm();
  const { isUpdating, ChangeProposalStatus } = useChangeproposalStatus()
  const queryCLient = useQueryClient()
  const onSubmit = (data) => {
    ChangeProposalStatus({ projectId,id: proposalId, data }, {
      onSuccess: () => {
        onClose();
        queryCLient.invalidateQueries({ queryKey: ["project"].projectId })
      }
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <RHFSelect
          label="تغییر وضعیت"
          name="status"
          register={register}
          required
          options={options}
        />
        <div className="!mt-8">
          {isUpdating ? (
            <Loading />
          ) : (
            <button className="btn btn--primary w-full" type="submit">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
export default ChangeProposalStatus;
