function EpisodesCards({episodes}) {

    return (
        episodes.map(episode => {
            return (
                <div className="episodeCard">
                    <h3>Title: {episode.title}</h3>
                    <p>Season: {episode.season} | Episode: {episode.episode}</p>
                    <p>Air date: {episode.air_date}</p>
                    <h5>Characters:</h5>
                    <ul>
                        {episode.characters.map(character => {
                            return (
                                <li>{character}</li>
                            )
                        })}
                    </ul>
                </div>
            )
        })
    )

}

export default EpisodesCards;