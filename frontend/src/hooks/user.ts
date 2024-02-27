import { create } from "zustand"; // create로 zustand를 불러옵니다.

interface TuserStore {
  userName: string;
  setUserName: (value: string) => void;
}

const useUserStore = create<TuserStore>()((set) => ({
  userName: "",
  setUserName: (value) => set(() => ({ userName: value })),
}));

/**
 * 공식 예제 곰 더하기
 */
interface BearState {
  bears: number;
  increase: (by: number) => void;
}

export const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}));

export default useUserStore;
