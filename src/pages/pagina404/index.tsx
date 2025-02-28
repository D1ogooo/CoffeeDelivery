import { Link } from "react-router-dom";

export function Pagina404() {
  return (
    <>
     <div>
      <h1>404 - Página não encontrada</h1>
      <Link to='/'>
        <p>Voltar para a página inicial</p>
      </Link>
    </div>
    </>
  )
}