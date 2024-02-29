import { axiosInstance } from "./axiosInstance";

export const UserKeys = {
  getUser: (request: any) => [{ scope: "User", request }],
};

export const UserAPI = {
  getUser: async () => {
    try {
      const { data } = await axiosInstance.get<any>(`/users`);
      return data;
    } catch (err) {
      console.error("api error: ", err);
    }
  },
};
