import { Navigate, Route, Routes } from "react-router-dom"
import Auth from "./pages/Auth"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import { DarkModeProvider } from "./features/Context/DarkmodeContext";
import OwnerLayout from "./features/Owner/OwnerLayout";
import Ownerdashboard from "./pages/OwnerDashboard";
import FreelancerDashboaed from "./pages/FreelancerDashborad";
import Proposal from "./pages/Proposal";
import Submitedproject from "./pages/SubmitedProject";
import FreelancerLayout from "./features/freelancer/FreelancerLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectRoutes from "./UI/ProtectRoutes";
import AdminLayout from "./features/Admin/Adminlayout";
import AdminDashboardUI from "./UI/AdminDashboardUi";


const queryClient = new QueryClient();
function App() {


  return (

    <>
      <DarkModeProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Toaster />
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/complete-profile" element={<CompleteProfile />} />
            <Route path="/owner" element={
              <ProtectRoutes>
                <OwnerLayout />
              </ProtectRoutes>
            } >
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<Ownerdashboard />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/:id" element={<Project />} />
            </Route>
            <Route path="/freelancer" element={
              <ProtectRoutes>
                <FreelancerLayout />
              </ProtectRoutes>}>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<FreelancerDashboaed />} />
              <Route path="proposals" element={<Proposal />} />
              <Route path="projects" element={<Submitedproject />} />

            </Route>

            <Route path="/admin" element={
              <ProtectRoutes>
                <AdminLayout />
              </ProtectRoutes>}>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<AdminDashboardUI />}  />

            </Route>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </QueryClientProvider>
      </DarkModeProvider>
    </>
  )
}

export default App


//Auth
//task 1 :auth user via opt:one time pass 
//1.form =>getOTP -> input+button => phone number=>send OTP
//2. form -> checkOTP --> request (OTP+Phone Number)

//request=>
//1.axios(useState,useeffect)
//2.useFetch (data.loading,error)
//3.react query => redux alternative (remote states),fetch(get),mutate(post)


// feature based >> driven folder structure

//project(components,hook,context...)
//proposal
//authentication
//category
//users



//panels
//admin 
//owner
//freelancer

