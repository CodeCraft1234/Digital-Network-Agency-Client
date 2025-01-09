import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Axios/useAxiosPublic";

const useVentures= () => {
    const AxiosPublic=useAxiosPublic()
    const { refetch, data: ventures=[]}=useQuery({
        queryKey:['ventures'],
        queryFn: async () => {
            const res=await AxiosPublic.get(`/ventures`)
            return res.data
        }
    })
        return [ventures,refetch]

}
export default useVentures;