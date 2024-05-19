import axios from "axios";

// let plantService = {
//   endpoint: "http://localhost:8000/api/v1/crops/",
// };

// plantService.getCrops = () => {
//   const config = {
//     method: "GET",
//     url: `${plantService.endpoint}`,
//     // withCredentials: true,
//     // crossdomain: true,
//     headers: { "Content-Type": "application/json" }
//   }
//   return axios(config);
// }
// export default plantService;


export async function getAllCrops() {
  const response = axios.get('http://localhost:8000/api/v1/crops/', {
    headers: {
      "Content-Type": "application/json"
    }
  })
  return response
}
