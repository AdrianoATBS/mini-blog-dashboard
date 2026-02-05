'use client'
import Cabecalho from "@/components/Cabecalho/Cabecalho";
import PostCard from "@/components/PostCard/PostCard";
import { postsMock } from "../mocks/posts.mock";
import { usersMock } from "../mocks/users.mock";
import { useState } from "react";
import Botao from "@/components/Botao/Botao";
export default function Home() {

   const [paginaAtual, setPaginaAtual] = useState(1);
   const postsPorPagina = 9;

   const indiceUltimoPost = paginaAtual * postsPorPagina;
   const indicePrimeiroPost = indiceUltimoPost - postsPorPagina;
   const postsAtuais = postsMock.slice(indicePrimeiroPost, indiceUltimoPost);

   const totalPaginas = Math.ceil(postsMock.length / postsPorPagina);


  return (
     <div >
        <Cabecalho />

      <main className="p-6 ">
        <div className="p-6 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {postsAtuais.map((post) =>
         {
            const user = usersMock.find((user) => user.id === post.userId);
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
         <div className=" flex justify-center items-center gap-6 mt-8">
            <Botao texto="Anterior" onClick={() => setPaginaAtual(paginaAtual - 1)} disabled={paginaAtual === 1} />
            <span className="text-texto-principal text-center">
               Página  
               <span className="text-acoes-secundaria"> {paginaAtual}</span> de {totalPaginas}
               </span>

            <Botao texto="Próxima" onClick={() => setPaginaAtual(paginaAtual + 1)} 
            disabled={paginaAtual === totalPaginas} />
         </div>
      </main>
     </div>
  );
}
