import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../Axios/UseAxiosPublic";
const useService = () => {
    const AxiosPublic=UseAxiosPublic()
    const { refetch, data: service=[]}=useQuery({
        queryKey:['service'],
        queryFn: async () => {
            const res=await AxiosPublic.get(`/service`)
            return res.data
        }
    })
        return [service,refetch]
}
export default useService;