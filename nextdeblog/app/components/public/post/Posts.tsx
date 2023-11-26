"use client";

import { postWithUserAtom } from "@/app/atoms/postAtom";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import Post from "../../utils/posts/Post";
import { getPublicPosts } from "@/app/servers/post/getPublicPosts";

export default function Posts() {
  const [posts, setPosts] = useRecoilState(postWithUserAtom);
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      const postsOrError = await getPublicPosts();
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
      { error && <span className="text-red-600 font-bold">{error}</span> }
      {
        posts.map((post) => (
          <Post key={post.id} post={post} />
        ))
      }
    </> 
  );
}
