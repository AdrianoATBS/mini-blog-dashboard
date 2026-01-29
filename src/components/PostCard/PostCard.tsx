import Link from "next/link";
interface PostCardProps {
    titulo: string;
    conteudo: string;
    autor: string;
    userId: number;
}
export default function PostCard({titulo, conteudo, autor, userId}: PostCardProps) {
    return(
        <>
            <section className=" bg-card p-4 rounded-lg border border-borda">
                    <h2 className="text-titulo font-semibold font-[--fonte-texto-geral]">{titulo}</h2>
                    <p className="text-texto-secundario text-sm mt-1 font-[--fonte-texto-geral]">{conteudo}</p>
                    <Link 
                    href={`/users/${userId}`}
                    
                    className="text-xs text-acoes-secundaria mt-2 block font-[--fonte-texto-geral]">{autor}</Link>
                </section>
        </>
    )
}