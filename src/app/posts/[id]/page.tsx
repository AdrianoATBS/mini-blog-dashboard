import PostDetalhe from "@/components/PostDetalhe/PostDetalhe";


export default async function PostPage({params}: {params: Promise<{id: string}>}) 
{
    const {id} = await params;
    const postId = Number(id);

    return(
        <>
            <PostDetalhe postId={postId} />
            
        </>
    )
}