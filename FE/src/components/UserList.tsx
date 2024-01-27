import React, { useEffect, useState } from "react";
import { UserType } from "../types/users.type";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../apis/users.api";

const UserList = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  const { data, error, status, fetchStatus } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(10),
    staleTime: 15 * 1000,
  });

  useEffect(() => {
    console.log(status === "success");
    console.log(fetchStatus === "fetching");
    if (data) {
      setUsers(data?.data.users);
    }
  }, [data]);

  if (error) {
    return <pre>{JSON.stringify(error)}</pre>;
  }

  return (
    <div>
      {!users && isLoading ? (
        <div>Loading...</div>
      ) : (
        users.map((user) => (
          <div key={user.id}>
            {user.username} - {user.password}
          </div>
        ))
      )}
    </div>
  );
};

export default UserList;
