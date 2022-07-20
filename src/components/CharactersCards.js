function CharactersCards({ characters }) {

    return (
        characters.map((character, index) => {
            return (
                <div key={index} className="characterCard">
                    <img className="characterImg" src={character.img} alt={character.name} />
                    <div className="characterInfos">
                        <h3>{character.name}</h3>
                        <p>Birthday: {character.birthday}</p>
                        <p>Nickname: {character.nickname}</p>
                        <p>Status: {character.status}</p>
                        <p>Portrayed by: {character.portrayed}</p>
                    </div>
                </div>
            )
        })
    )

}

export default CharactersCards;