
import {Comentario} from "@/types/Comentario";

export default function ListaComentarios({comentarios}: {comentarios: Comentario[]})
{
    return(
        <div className="w-full max-w-lg mx-auto">
            {comentarios.map((comentario) => (
                <div key={comentario.id} className="mb-4 p-4 border border-borda rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 font-[--fonte-titulo]">{comentario.name}</h3>
                    <p className="text-sm text-texto-secundario mb-2 font-[--fonte-texto-geral]">{comentario.email}</p>
                    <p className="text-texto-principal font-[--fonte-texto-geral]">{comentario.body}</p>
                </div>
            ))}
        </div>
    )
}