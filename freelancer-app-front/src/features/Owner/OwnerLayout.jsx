import { HiCollection, HiHome } from "react-icons/hi";
import AppLayout from "../../UI/AppLayout";
import Sidebar from "../../UI/Sidebar";
import CustomNavLink from "../../UI/customNavLink";
export default function OwnerLayout() {
    return (
        <AppLayout>
            <Sidebar>

                <CustomNavLink to={'/owner/dashboard'}>
                    <HiHome /> <span >داشبورد</span>
                </CustomNavLink>


                <CustomNavLink to={'/owner/projects'}>
                    <HiCollection /><span>پروژه ها</span>
                </CustomNavLink>


            </Sidebar>
        </AppLayout>
    )
}


//applayout=>owner