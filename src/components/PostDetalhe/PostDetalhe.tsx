import PostDetalheCard from "./PostDetalheCard";
import { postsMock } from "@/mocks/posts.mock";
import { usersMock } from "@/mocks/users.mock";
export default function PostDetalhe({ postId }: { postId: number }) {

    const post = postsMock.find((post) => post.id === postId);
    const user = usersMock.find((user) => user.id === post?.userId);

    return(
        <>
            <div className="flex justify-center items-center">
                <PostDetalheCard posts={post} user={user} />

            </div>
        </>
    )
}