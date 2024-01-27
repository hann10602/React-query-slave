import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { PostType } from "../types/posts.type";
import { getPosts } from "../apis/posts.api";

const PostList = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(10),
    staleTime: 15 * 1000,
  });

  useEffect(() => {
    if (data) {
      setPosts(data?.data.posts);
    }
  }, [data]);

  if (error) {
    return <pre>{JSON.stringify(error)}</pre>;
  }

  return (
    <div>
      {!posts && isLoading ? (
        <div>Loading...</div>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            {post.id}. {post.title}
          </div>
        ))
      )}
    </div>
  );
};

export default PostList;
