'use client'
import PostCard from "@/components/PostCard/PostCard";
import { useState } from "react";
import Botao from "@/components/Botao/Botao";
import { Post } from "@/types/Post";
import { User } from "@/types/User";
export default function HomeClient({posts, users}: {posts: Post[], users: User[]}) {

   const [paginaAtual, setPaginaAtual] = useState(1);
   const postsPorPagina = 9;

   const indiceUltimoPost = paginaAtual * postsPorPagina;
   const indicePrimeiroPost = indiceUltimoPost - postsPorPagina;
    const postsAtuais = posts.slice(indicePrimeiroPost, indiceUltimoPost);

   const totalPaginas = Math.ceil(posts.length / postsPorPagina);


  return (
     <div >

      <main className="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-10">

         <div className="flex flex-col gap-2">
            <h2 className="titulo-principal">
               Últimos Posts
            </h2>
            <p className="texto-suave">
               Explore os artigos mais recentes publicados na plataforma.
            </p>
         </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {postsAtuais.map((post) =>
         {
            const user = users.find((user) => user.id === post.userId);
            return(
               <PostCard
                  key={post.id}
                  titulo={post.title}
                  conteudo={post.body}
                  autor={user ? user.name : "Autor Desconhecido"}
                  userId={post.userId}
                  postId={post.id}
               />
            )
         })}
         </div>

         <div className=" flex justify-center items-center gap-6 mt-6">

            <Botao texto="Anterior" onClick={() => setPaginaAtual(paginaAtual - 1)} disabled={paginaAtual === 1} />
            <span className="texto-base">
               Página  
               <span className="font-semibold text-acoes-primaria"> {paginaAtual}</span> de {totalPaginas}
               </span>

            <Botao texto="Próxima" onClick={() => setPaginaAtual(paginaAtual + 1)} 
            disabled={paginaAtual === totalPaginas} />
         </div>
      </main>
     </div>
  );
}
