import { Navigate, Route, Routes } from "react-router-dom"
import Auth from "./pages/Auth"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Owner from "./pages/Owner"
import AppLayout from "./UI/AppLayout";
import Projects from "./pages/Projects";
import Project from "./pages/Project";

const queryClient = new QueryClient();
function App() {


  return (

    <>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route path="/owner" element={<AppLayout />} >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<Owner />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<Project />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
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

