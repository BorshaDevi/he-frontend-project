import axios from "axios";

const axiosPublic=axios.create({
    baseURL:"https://backend-project-borshadevi-borshadevis-projects.vercel.app",
})
const useAxiosPublic =()=>{
    return axiosPublic;
}
export default useAxiosPublic;
