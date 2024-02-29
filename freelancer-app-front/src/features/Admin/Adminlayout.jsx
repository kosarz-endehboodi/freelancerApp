import CustomNavLink from "../../UI/customNavLink";
import AppLayout from "../../UI/AppLayout";
import { HiCollection, HiHome, HiOutlineViewGrid, HiUser } from "react-icons/hi";
import Sidebar from "../../UI/Sidebar";
export default function AdminLayout() {
    return (
        <div>
            <AppLayout>
                <Sidebar>
                    <CustomNavLink to={'dashboard'}>
                        <HiHome /> <span >داشبورد</span>
                    </CustomNavLink>
                    <CustomNavLink to={'users'}>
                        <HiUser /> <span >کاربران</span>
                    </CustomNavLink>
                    <CustomNavLink to={'projects'}>
                        <HiOutlineViewGrid /><span>پروژه ها</span>
                    </CustomNavLink>
                    <CustomNavLink to={'proposals'}>
                        <HiCollection /><span>درخواست ها</span>
                    </CustomNavLink>

                </Sidebar>
            </AppLayout>
        </div>
    )
}