import axios from "axios";

let plantService = {
  endpoint: "http://localhost:5173/",
};

const plant = () => {
  const config = {
    method: "",
    url: `${plantService.endpoint}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  }
  return axios(config);
}
export default plantService;