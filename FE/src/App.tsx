import { useState } from "react";
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";
import PostList from "./components/PostList";

function App() {
  const [currentPage, setCurrentPage] = useState<"USER" | "TODO" | "POST">(
    "USER"
  );
  // const [users, setUsers] = useState<UserType[]>([]);
  // const [page, setPage] = useState<number>(1);
  // const [limit, setLimit] = useState<number>(10);
  // const queryClient = useQueryClient();

  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["users", page],
  //   queryFn: () => getUsers(page, limit),
  // });

  // const newUsersMutation = useMutation({
  //   mutationFn: () => {
  //     return wait(500).then(() => {
  //       console.log("alo");
  //     });
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["users"]);
  //   },
  // });

  return (
    <div className="p-2 pl-10">
      <div className="pb-5">
        <button
          disabled={currentPage === "USER"}
          onClick={() => setCurrentPage("USER")}
          className={`${
            currentPage === "USER"
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-200"
          } px-3 py-1 rounded-sm`}
        >
          Users
        </button>
        <button
          disabled={currentPage === "TODO"}
          onClick={() => setCurrentPage("TODO")}
          className={`${
            currentPage === "TODO"
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-200"
          } px-3 py-1 rounded-sm`}
        >
          Todos
        </button>
        <button
          disabled={currentPage === "POST"}
          onClick={() => setCurrentPage("POST")}
          className={`${
            currentPage === "POST"
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-200"
          } px-3 py-1 rounded-sm`}
        >
          Posts
        </button>
      </div>
      {currentPage === "USER" && <UserList />}
      {currentPage === "TODO" && <TodoList />}
      {currentPage === "POST" && <PostList />}
    </div>
  );
}

export default App;
