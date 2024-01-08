export default function confrimDelte({resourceName,onclose,disabled,onConfirm}) {
    return (
        <div>
      <h2 className="font-bold text-base mb-8">
        آیا از حذف پروژه {resourceName} مطمئن هستید؟
      </h2>
      <div className="flex justify-between items-center gap-x-16">
        <button
          disabled={disabled}
          className="btn btn--primary flex-1"
          onClick={onclose}
        >
          لغو
        </button>
        <button
          disabled={disabled}
          className="btn btn--danger py-3 flex-1"
          onClick={onConfirm}
        >
          تایید
        </button>
      </div>
    </div>
    )
}