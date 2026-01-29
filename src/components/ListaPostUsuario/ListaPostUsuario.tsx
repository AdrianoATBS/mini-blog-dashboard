type Post = {
    id: number;
    title: string;

}

export default function ListaPostUsuario({ posts }: { posts: Post[] }) {
    return(
        <div>
            <h2 className="text-xl font-semibold mb-4 pt-2 text-center">Posts do usuário</h2>
            <ul className="space-y-1">
                {posts.map(posts => (
                   <p key={posts.id} className="text-texto-secundario font-[--fonte-texto-geral] 
                   truncate">{posts.title}</p>
                ))}
            </ul>
        </div>
    )
}