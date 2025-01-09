import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Axios/useAxiosPublic";

const useEmail = () => {
    const AxiosPublic=useAxiosPublic()
    const { refetch, data: email=[]}=useQuery({
        queryKey:['email'],
        queryFn: async () => {
            const res=await AxiosPublic.get(`/email`)
            return res.data
        }
    })
        return [email,refetch]

};

export default useEmail;