import React, {useEffect, useState} from 'react';
import Card from './Card';

const API_BASE_URL = 'http://localhost:1488';

function CardSection({ title, endpoint }) {
    const [characters, setCharacters] = useState([]); // состояние для хранения персонажей
    const [isLoading, setIsLoading] = useState(true); //состояние для индикатора загрузки

    useEffect( () => {
        fetch(`${API_BASE_URL}${endpoint}`)
            .then(res => res.json())
            .then(data => {
                setCharacters(data);
                setIsLoading(false);
            });
    }, [endpoint]);

    if (isLoading) {
        return <div>Загрузка...</div>
    }

    return (
        <section className = "cards-section" id = "DATABANK | Andor"> 

                <button className = "scroll-back-button"></button>

                <header className = "cards-section-header">
                    <h2 className = "cards-header-name">Databank | Andor</h2>
                    <a href = "#" className = "cards-see-all">SEE ALL ></a>
                </header>
                <div className = "cards-row">
                    {characters.map((character) => (
                        <Card
                            key = {character.name}
                            imageSrc = {`${API_BASE_URL}${character.image}`}
                            characterName = {character.name}
                        />
                    ))}
                </div>
                <button className = "scroll-forward-button"></button>
                </section>
    );
}

export default CardSection;