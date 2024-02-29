import { axiosInstance } from "./axiosInstance";

export const UserKeys = {
  getInsight: (request: any) => ["Insight", request],
};

export const UserAPI = {
  getUser: async () => {
    try {
      const { data } = await axiosInstance.get<any>(`/api/user`);
      return data;
    } catch (err) {
      console.error("api error: ", err);
    }
  },
};
