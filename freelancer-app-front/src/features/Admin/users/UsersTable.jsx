import Empty from "../../../UI/Empty";
import Loading from "../../../UI/Loading";
import Table from "../../../ui/Table";
import useUsers from "../useUsers"
import UserRow from "./UserRow";

export default function UsersTable() {

    const { isLoading, users } = useUsers();
    if (isLoading) return <Loading />
    if (!users.length) return <Empty resourceName=" کاربری" />
    return (
        <div>
            <Table>
                <Table.Header>
                    <th>#</th>
                    <th>نام</th>
                    <th>ایمیل</th>
                    <th>شماره موبایل</th>
                    <th>نقش</th>
                    <th>وضعیت</th>
                    <th>عملیات</th>
                </Table.Header>
                <Table.Body>
                    {users.map((user, index) => (
                        <UserRow user={user} index={index} key={user._id} />
                    ))}
                </Table.Body>

            </Table>
        </div>
    )
}