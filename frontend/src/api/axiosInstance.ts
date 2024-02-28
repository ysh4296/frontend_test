import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://localhost:3000",
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    switch (error?.response?.status) {
      case 401:
        try {
          return await tokenRefresh(error);
        } catch (refreshError) {
          /**
           * 리프레쉬 실패 로그인화면으로 돌아갑니다.
           */
          return undefined;
        }
      case 403:
        return undefined;
      case 404:
        return undefined;
      default:
        return Promise.reject(error);
    }
  }
);

const tokenRefresh = async (error: AxiosError) => {
  const originRequest = error?.config ?? { headers: { Authorization: "" } };
  /**
   * 토큰 refresh
   *
   */
  originRequest.headers.Authorization = `Bearer newToken`;
  return axios(originRequest);
};
