import { useQuery } from "@tanstack/react-query";
import { getProject } from "../../services/projectService";
import { useParams } from "react-router-dom";

export  function useProject() {
    const { id } = useParams();
    const { data, isLoading, error } = useQuery({
        queryKey: ["project", id],
        queryFn: () => getProject(id),
        retry: false,
    });

    //id =>1,2,3

    return { isLoading, data, error }
}