import Formulario from "@/components/Formulario/Formulario";
export default function Login(){
    return(
        <>
            <Formulario campos={[
                { name: "email", label: "Email", type: "email", placeholder: "Digite seu email" },
                { name: "password", label: "Senha", type: "password", placeholder: "Digite sua senha" },
            ]}  />
        </>
    )
}