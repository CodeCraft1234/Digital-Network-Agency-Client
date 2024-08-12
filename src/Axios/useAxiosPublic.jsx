import axios from "axios";

const AxiosPublic=axios.create({
    baseURL:'https://digital-network-agency-server.vercel.app'
})
const useAxiosPublic = () => {
    return AxiosPublic
};

export default useAxiosPublic;