import CustomNavLink from "../../UI/customNavLink";
import AppLayout from "../../UI/AppLayout";
import Sidebar from "../../UI/Sidebar";
import { HiCollection, HiHome } from "react-icons/hi";
export default function FreelancerLayout(){
    return(
        <AppLayout>
        <Sidebar>
            <CustomNavLink to={'dashboard'}>
                <HiHome /> <span >داشبورد</span>
            </CustomNavLink>
            <CustomNavLink to={'projects'}>
                <HiCollection /><span>پروژه ها</span>
            </CustomNavLink>
            <CustomNavLink to={'proposals'}>
                <HiCollection /><span>درخواست ها</span>
            </CustomNavLink>

        </Sidebar>
    </AppLayout>
)
}
