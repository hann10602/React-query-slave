import React, { useEffect, useState } from "react";
import { TodoType } from "../types/todos.type";
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../apis/todos.api";

const TodoList = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: () => getTodos(10),
    staleTime: 15 * 1000,
  });

  useEffect(() => {
    if (data) {
      setTodos(data?.data.todos);
    }
  }, [data]);

  if (error) {
    return <pre>{JSON.stringify(error)}</pre>;
  }

  return (
    <div>
      {!todos && isLoading ? (
        <div>Loading...</div>
      ) : (
        todos.map((todo) => (
          <div key={todo.id}>
            {todo.todo} - {todo.completed}
          </div>
        ))
      )}
    </div>
  );
};

export default TodoList;
