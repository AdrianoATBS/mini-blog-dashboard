import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Image from "next/image";
import PostCard from "@/components/PostCard/PostCard";
import { postsMock } from "../mocks/posts.mock";
import { usersMock } from "../mocks/users.mock";
export default function Home() {
  return (
     <div >
        <Cabecalho />
      <main className="p-6 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {postsMock.map((post) =>
         {
            const user = usersMock.find((user) => user.id === post.userId);
            return(
               <PostCard
                  key={post.id}
                  titulo={post.title}
                  conteudo={post.body}
                  autor={user ? user.name : "Autor Desconhecido"}
               />
            )
         })}
      </main>
     </div>
  );
}
