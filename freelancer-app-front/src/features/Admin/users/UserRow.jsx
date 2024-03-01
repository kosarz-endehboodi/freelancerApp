import { useState } from "react";
import Modal from "../../../UI/Modal";
import Table from "../../../ui/Table";
import ChangeUserStatus from "./ChangeUserStatus";

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

export default function UserRow({ user, index }) {

    const { status } = user;
    console.log(user)
    const [open, setOpen] = useState(false)

    return (
        <Table.Row>
            <td>{index + 1}</td>
            <td><p>{user.name}</p></td>
            <td>{user.email}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.role}</td>
            <td>{
                <span className={`badge ${statusStyle[status].className}`}>
                    {statusStyle[status].label}
                </span>
            }</td>
            <td>
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    title="تغییر وضعیت درخواست"
                >
                    <ChangeUserStatus
                        userId={user._id}
                        onClose={() => setOpen(false)}
                    />
                </Modal>
                <button type="submit" onClick={() => setOpen(true)}>
                    تغییر وضعیت
                </button>
            </td>
        </Table.Row>

    )
}
