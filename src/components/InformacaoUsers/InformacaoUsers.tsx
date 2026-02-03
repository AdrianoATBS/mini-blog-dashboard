import { UserPerfil } from "../../types/UserPerfil";

export default function InformacaoUsers({ user }: { user: UserPerfil }) {
    return(
        <>
            
            <h1 className="font-[--fonte-titulo] text-xl font-semibold mb-4 pt-2 text-center text-texto-principal">Perfil do Usuário</h1>
            <div className="bg-card p-6 rounded-lg border border-borda">
                <h2 className="text-titulo font-bold text-2xl 
                font-[--fonte-titulo]">{user.name}</h2>
                <p className="text-texto-principal font-[--fonte-texto-geral]">Empresa: {user.company.name}</p>
                <p className="text-texto-principal font-[--fonte-texto-geral]">Site:
                    <span className="text-acoes-primaria  hover:underline hover:decoration-acoes-primaria "> {user.website}</span></p>
                
                <h2 className="text-texto-principal font-[--fonte-texto-geral]">Contatos: </h2>
                <p className="text-texto-secundario font-[--fonte-texto-geral]">Email: {user.email}</p>
                <p className="text-texto-secundario font-[--fonte-texto-geral]">Telefone: {user.phone}</p>
            </div>

        </>
    )
}