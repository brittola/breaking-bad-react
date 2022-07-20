import { useState } from 'react';
import EpisodesCards from './EpisodesCards';

function Episodes() {

    const [episodes, setEpisodes] = useState([]);

    fetch("https://breakingbadapi.com/api/episodes")
        .then(res => res.json())
        .then(json => {
            let filtered = json.filter(episode => episode.series === 'Breaking Bad');
            setEpisodes(filtered);
        })

    return (
        <main>
            <h1>Episodes</h1>
            <section>
                {episodes.length === 0 ? 'Carregando...' : <EpisodesCards episodes={episodes} />}
            </section>
        </main>
    )

}

export default Episodes;