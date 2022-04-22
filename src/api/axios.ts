import baseAxios from "axios";
import { getApiUrl } from "../helpers/getApiUrl";

export const axios = baseAxios.create({
  baseURL: getApiUrl(),
});
