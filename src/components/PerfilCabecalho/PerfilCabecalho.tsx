'use client';
import InformacaoUsers from "../InformacaoUsers/InformacaoUsers";
import { UserPerfil } from "../../types/UserPerfil";
import Botao from "../Botao/Botao";
import {useRouter} from "next/navigation";

export default function PerfilCabecalho({ user }: { user: UserPerfil  }) {
    const router = useRouter();

    const handleVoltar = () => {
        router.push("/");
    }

    return(
        <>
                <Botao texto="Voltar" onClick={handleVoltar} />
                <InformacaoUsers user={user} />
        </>
    )
}