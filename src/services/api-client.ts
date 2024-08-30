import axios from "axios";

const apiClient = axios.create({
  params: {
    key: "f973aad4935740939e4fa06cc58bb0ed",
  },
  baseURL: "https://api.rawg.io/api",
});

export default apiClient;
