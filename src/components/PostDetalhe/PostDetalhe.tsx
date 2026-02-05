'use client';
import PostDetalheCard from "./PostDetalheCard";
import { postsMock } from "@/mocks/posts.mock";
import { usersMock } from "@/mocks/users.mock";
import Botão from "@/components/Botao/Botao";
import {useRouter} from "next/navigation";
export default function PostDetalhe({ postId }: { postId: number }) {

    const post = postsMock.find((post) => post.id === postId);
    const user = usersMock.find((user) => user.id === post?.userId);
    const router = useRouter();

    const handleVoltar = () => {
        router.push("/");
    }

    return(
        <>
            <div className="pl-5 pt-6">
                <Botão texto="Voltar" onClick={handleVoltar} />
            </div>
                 
            <div className="flex justify-center items-center">
                <PostDetalheCard posts={post} user={user} />
            </div>
        </>
    )
}