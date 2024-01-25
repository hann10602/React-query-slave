import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUsers } from "./apis/users.api";
import { useEffect, useState } from "react";
import { UserType } from "./types/users.type";

function App() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["users", page],
    queryFn: () => getUsers(page, limit),
  });

  const newUsersMutation = useMutation({
    mutationFn: () => {
      return wait(500).then(() => {
        console.log("alo");
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });

  useEffect(() => {
    if (data?.data.users) {
      setUsers(data?.data.users);
    }
  }, [data?.data.users]);

  if (isLoading) return <h1>Loading....</h1>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;

  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          {user.username} - {user.password}
        </div>
      ))}
      <button
        disabled={newUsersMutation.isPending}
        onClick={() => newUsersMutation.mutate("users 3")}
        className={`${
          newUsersMutation.isPending ? "text-gray-400" : ""
        } border border-solid border-gray-300 px-2`}
      >
        Add new
      </button>
    </>
  );
}

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default App;
