import { useQuery } from "@tanstack/react-query";
import { getProject } from "../../services/projectService";
import { useParams } from "react-router-dom";

export default function useProject() {
    const { id } = useParams();
    const { data, isLoading } = useQuery({
        queryKey: ["project", id],
        queryFn: () => getProject(id),
       
    });

    //id =>1,2,3
    
    return { isLoading, data }
}