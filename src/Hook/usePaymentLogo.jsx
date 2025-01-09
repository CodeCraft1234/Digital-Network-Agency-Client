import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Axios/useAxiosPublic";

const usePaymentLogo= () => {
    const AxiosPublic=useAxiosPublic()
    const { refetch, data: paymentLogo=[]}=useQuery({
        queryKey:['paymentLogo'],
        queryFn: async () => {
            const res=await AxiosPublic.get(`/paymentLogo`)
            return res.data
        }
    })
        return [paymentLogo,refetch]
}

export default usePaymentLogo;