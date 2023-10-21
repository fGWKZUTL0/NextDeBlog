"use client";

import { useEffect, useState } from "react";
import { getMyPosts } from "@/app/servers/post/getMyPosts";
import { useRecoilState } from "recoil";
import { postsAtom } from "@/app/atoms/postAtom";
import Post from "./Post";

export default function Posts() {
  const [posts, setPosts] = useRecoilState(postsAtom);
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      const postsOrError = await getMyPosts();
      if("error" in postsOrError){
        setError(postsOrError.error);
      }else{
        setPosts(postsOrError);
      }
    }
    fetchPosts();
  }, [setPosts]);

  return (
    <>
      {error && <span className="text-red-600 font-bold">{error}</span>}
      {
        posts.map((post) => (
          <Post key={post.id} post={post} />
        ))
      }
    </> 
  );
}
