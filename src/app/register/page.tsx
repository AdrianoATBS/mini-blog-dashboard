import Formulario from "@/components/Formulario/Formulario";

export default function Register(){
    return(
        <>
            <Formulario campos={[
                { name: "nome", label: "Nome", type: "text", placeholder: "Digite seu nome" },
                { name: "email", label: "Email", type: "email", placeholder: "Digite seu email" },
                { name: "password", label: "Senha", type: "password", placeholder: "Digite sua senha" },
                {name: "confirmarPassword", label: "Confirmar Senha", type: "password", placeholder: "Confirme sua senha" },
            ]}  />
        </>
    )
}