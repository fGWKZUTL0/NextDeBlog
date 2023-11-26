import Post from "../../utils/posts/Post";
import { Post as PostType, User as UserType } from "@prisma/client";
import { getMyPosts } from "@/app/servers/post/getMyPosts";
import LinkAsPageNation from "../../utils/LinkAsPageNation";

interface Props {
  pageNum: number;
}

type PostsOrError = Array<PostType & {user: UserType}> | { error: string };

export default async function Posts({pageNum}: Props) {
  const [postsOrError, totalPage] = await getMyPosts(pageNum) as [PostsOrError, number];

  return (
    <>
      {
        "error" in postsOrError 
      ? 
        <span className="text-red-600 font-bold">
          {postsOrError.error}
        </span>
      : 
        postsOrError.map((post) => (
          <Post key={post.id} post={post} isAdmin={true} />
        ))
      }
      <div className="mt-6">
        <LinkAsPageNation
          pageNum={pageNum}
          totalPage={totalPage}
        />
      </div>
    </> 
  );
}
