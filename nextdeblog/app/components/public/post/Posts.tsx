import { Post as PostType, User as UserType } from "@prisma/client";
import Post from "../../utils/posts/Post";
import { getPublicPosts } from "@/app/servers/post/getPublicPosts";
import LinkAsPageNation from "../../utils/LinkAsPageNation";

interface Props {
  pageNum: number;
}

type PostsWithUser = Array<
  {user: UserType} & PostType
>;

export default async function Posts({pageNum}: Props) {
  const [PostsWithUser, totalPage] = await getPublicPosts(pageNum) as [PostsWithUser, number];

  return (
    <>
      {
        PostsWithUser.map((post) => (
          <Post key={post.id} post={post} />
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
