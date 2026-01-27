    interface PostCardProps {
    titulo: string;
    conteudo: string;
    autor: string;
}
export default function PostCard({titulo, conteudo, autor}: PostCardProps) {
    return(
        <>
            <section className=" bg-card p-4 rounded-lg border border-borda">
                    <h2 className="text-titulo font-semibold">{titulo}</h2>
                    <p className="text-texto-secundario text-sm mt-1">{conteudo}</p>
                    <span className="text-xs text-acoes-secundaria mt-2 block">{autor}</span>
                </section>
        </>
    )
}