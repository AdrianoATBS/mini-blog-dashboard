
import PostDetalhe from "@/components/PostDetalhe/PostDetalhe";
import ListaComentarios from "@/components/PostDetalhe/ListaComentario";
import { comentariosMock } from "@/mocks/comentarios.mock";
import Botao from "@/components/Botao/Botao";


export default async function PostPage({params}: {params: Promise<{id: string}>}) 
{
    const {id} = await params;
    const postId = Number(id);
    const comentariosDoPost = comentariosMock.filter((comentario) => comentario.postId === postId);

    

    return(
        <>
            <PostDetalhe postId={postId} />
            <ListaComentarios comentarios={comentariosDoPost} />
            
        </>
    )
}