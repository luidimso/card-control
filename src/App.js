import React, { useState } from 'react';
import CardList from './components/CardList';
import CardForm from './components/CardForm';

const App = () => {
  const [cards, setCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);

  const addCard = (card) => setCards([...cards, card]);
  const editCard = (updatedCard) => setCards(cards.map(card => card.id === updatedCard.id ? updatedCard : card));

  return (
    <div className="container">
      <h1>Your Cards</h1>
      <CardList cards={cards} setCurrentCard={setCurrentCard} />
      <button onClick={() => setCurrentCard({})}>Add new card</button>
      {currentCard && <CardForm card={currentCard} addCard={addCard} editCard={editCard} setCurrentCard={setCurrentCard} />}
    </div>
  );
};

export default App;