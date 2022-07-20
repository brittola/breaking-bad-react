import { Link } from 'react-router-dom';

function Missing() {

    return (
        <main>
            <h1>Página não encontrada</h1>
            <img className="missingImg" src="./assets/walt_jesse_lost.png" alt="Walter White and Jesse Pinkman sitting" />
            <Link className="link" to="/">Voltar para a página inicial</Link>
        </main>
    )

}

export default Missing;