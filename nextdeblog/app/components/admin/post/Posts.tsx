import Post from "../../utils/posts/Post";
import { Post as PostType, User as UserType } from "@prisma/client";
import { getMyPosts } from "@/app/servers/post/getMyPosts";
import LinkAsPageNation from "../../utils/LinkAsPageNation";

interface Props {
  pageNum: number;
}

type PostsWithUser = Array<
  {user: UserType} & PostType
>;

export default async function Posts({pageNum}: Props) {
  const [PostsWithUser, totalPage] = await getMyPosts(pageNum) as [PostsWithUser, number];

  return (
    <>
      {
        PostsWithUser.map((post) => (
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
