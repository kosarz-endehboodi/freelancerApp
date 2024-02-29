import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/authService";

export default function useUser() {
    const { data, isLoading } = useQuery({
        queryKey: ["get-user"],
        queryFn: getUser,
        retry: false,
    })
   
    return { isLoading ,data}
}