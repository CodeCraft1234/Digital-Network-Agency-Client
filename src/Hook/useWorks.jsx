import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Axios/useAxiosPublic";

const useWorks= () => {
    const AxiosPublic=useAxiosPublic()
    const { refetch, data: works=[]}=useQuery({
        queryKey:['works'],
        queryFn: async () => {
            const res=await AxiosPublic.get(`/works`)
            return res.data
        }
    })
        return [works,refetch]

}
export default useWorks;