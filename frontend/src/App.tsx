import "./App.css";
import useUserStore from "./hooks/user";
import { useQuery } from "@tanstack/react-query";
import { UserAPI, UserKeys } from "./api/UserAPI";

function App() {
  const { userName, setUserName } = useUserStore();

  const { data = {}, isLoading } = useQuery({
    queryKey: UserKeys.getUser(12),
    queryFn: () => UserAPI.getUser(),
  });

  return (
    <div>
      {!isLoading &&
        data.map((data: any, index: number) => <p key={index}>{data.name}</p>)}
      <input type="text" onChange={(e) => setUserName(e.target.value)} />
      <textarea className="caret-pink-500"></textarea>
      <p>{userName}</p>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
