import React, { useState } from 'react';
import CardList from './components/CardList';
import CardForm from './components/CardForm';
import './styles.css';

const App = () => {
  const [cards, setCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);

  const addCard = (card) => setCards([...cards, card]);
  const editCard = (updatedCard) => setCards(cards.map(card => card.id === updatedCard.id ? updatedCard : card));

  return (
    <div className="container">
      <h1 className='title'>Your Cards</h1>
      <p className='subtitle'>Add, edit or delete your cardsany time</p>
      <CardList cards={cards} setCurrentCard={setCurrentCard} />
      <button className='btn-add' onClick={() => setCurrentCard({})}>Add new card</button>
      {currentCard && <CardForm card={currentCard} addCard={addCard} editCard={editCard} setCurrentCard={setCurrentCard} />}
    </div>
  );
};

export default App;