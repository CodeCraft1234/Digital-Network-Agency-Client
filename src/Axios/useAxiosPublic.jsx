import axios from "axios";

const AxiosPublic=axios.create({
    baseURL:'https://server-omega-cyan.vercel.app'
})
const useAxiosPublic = () => {
    return AxiosPublic
};

export default useAxiosPublic;