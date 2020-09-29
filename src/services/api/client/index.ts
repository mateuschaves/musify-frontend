import axios from "axios";
import { constants } from "../../../config";
import errorHandler from "./errorHandler";

import { storageHeaders } from "../../../utils";

type ClientProps = {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS";
  data?: object;
};

const instance = axios.create({
  baseURL: constants.BASE_URL,
});

instance.interceptors.request.use(
  async (config) => {
    const altConfig = config;

    const token = storageHeaders.getHeaders();

    Object.assign(altConfig.headers, {
      token: token,
    });
    return altConfig;
  },
  (error) => {
    Promise.reject(error);
  }
);

const client = (options: ClientProps, handleError = true) => {
  const onSuccess = (response: object) => {
    return response;
  };

  const onError = (error: any) => {
    return errorHandler(error, handleError);
  };

  return instance(options).then(onSuccess).catch(onError);
};

export default client;
