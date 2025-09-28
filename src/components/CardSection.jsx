import React, {useEffect, useState, useRef} from 'react';
import Card from './Card';

const API_BASE_URL = import.meta.env.VITE_API_URL;

function CardSection({ title, endpoint }) {
    const [characters, setCharacters] = useState([]); // состояние для хранения персонажей
    const [isLoading, setIsLoading] = useState(true); //состояние для индикатора загрузки
    const [backButtonVisibility, setBackButtonVisibility] = useState(false); //состояние видимости кнопки "Назад"
    const [forwardButtonVisibility, setForwardButtonVisibility] = useState(true); //состояние видимости кнопки "Вперёд"
    const cardsRowRef = useRef(null)

    function updateButtonVisibility() {
        function getCurrentPosition() {
            const visibleWidth = cardsRowRef.current.clientWidth;
            const wholeWidth = cardsRowRef.current.scrollWidth;
            const currentPosition = cardsRowRef.current.scrollLeft;
            return { visibleWidth, wholeWidth, currentPosition };
        }

        function handleBackButtonVisibility() {
            const positionInfo = getCurrentPosition()
            if (!(positionInfo.currentPosition === 0)) {
                setBackButtonVisibility(true)
            }
            else {
                setBackButtonVisibility(false)
            }
        }

        function handleForwardButtonsVisibility() {
            const positionInfo = getCurrentPosition()
            if (positionInfo.currentPosition + positionInfo.visibleWidth === positionInfo.wholeWidth) {
                setForwardButtonVisibility(false)
            }
            else {
                setForwardButtonVisibility(true)
            }
        }

        handleBackButtonVisibility()
        handleForwardButtonsVisibility()
    }

    function handleClickForward() {
        const cardsRowWidth = cardsRowRef.current.offsetWidth;
        cardsRowRef.current.scrollLeft += cardsRowWidth;
        updateButtonVisibility()
    }

    function handleClickBack() {
        const cardsRowWidth = cardsRowRef.current.offsetWidth;
        cardsRowRef.current.scrollLeft -= cardsRowWidth;
        updateButtonVisibility()
    }

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
        <section className = "cards-section"> 

                {backButtonVisibility && <button className = "scroll-back-button" onClick = {handleClickBack}></button>}

                <header className = "cards-section-header">
                    <h2 className = "cards-header-name">Databank | Andor</h2>
                    <a href = "#" className = "cards-see-all">SEE ALL {'>'}</a>
                </header>
                <div className = "cards-row" ref = {cardsRowRef} onScroll = {updateButtonVisibility}>
                    {characters.map((character) => (
                        <Card
                            key = {character.name}
                            imageSrc = {`${API_BASE_URL}${character.image}`}
                            characterName = {character.name}
                        />
                    ))}
                </div>
                {forwardButtonVisibility && <button className = "scroll-forward-button" onClick = {handleClickForward} ></button>}
                </section>
    );
}

export default CardSection;