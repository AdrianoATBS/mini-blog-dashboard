import { usersMock } from "@/mocks/users.mock";
import {postsMock} from "@/mocks/posts.mock";
import PerfilCabecalho from "@/components/PerfilCabecalho/PerfilCabecalho";
import ListaPostUsuario from "@/components/ListaPostUsuario/ListaPostUsuario";
export default async function UserPage({params}: {params:Promise<{id: string}>}) {
    const {id} = await params;

    console.log("ID da URL", id);
    const user = usersMock.find(user => user.id === Number(id));
    const postsDoUsuario = postsMock.filter(post => post.userId === Number(id));

    if (!user) return <h1>Usuário não encontrado</h1>

    return(
        <>
            <div className="max-w-md w-full pt-8 pl-9 ">
                <PerfilCabecalho user={user} />
            
            </div>
            <div className="flex flex-col justify-center items-center max-w-full w-full pt-8">
                <ListaPostUsuario posts={postsDoUsuario} />
            </div>
        </>
    )
}