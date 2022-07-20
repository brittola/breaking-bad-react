import { useState } from 'react';
import CharactersCards from './CharactersCards'

function Characters() {

    const [characters, setCharacters] = useState([]);

    fetch('https://breakingbadapi.com/api/characters')
        .then(res => res.json())
        .then(json => {
            let filtered = json.filter(character => character.category === "Breaking Bad");

            setCharacters(filtered);
        });

    return (
        <main>
            <h1>Characters</h1>
            <section>
                {characters.length === 0 ? 'Carregando...' : <CharactersCards characters={characters} />}
            </section>
        </main>
    )

}

export default Characters;