import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Axios/useAxiosPublic";

const useTeam= () => {
    const AxiosPublic=useAxiosPublic()
    const { refetch, data: team=[]}=useQuery({
        queryKey:['team'],
        queryFn: async () => {
            const res=await AxiosPublic.get(`/team`)
            return res.data
        }
    })
        console.log(team)
        return [team,refetch]

}
export default useTeam;