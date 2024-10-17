import React from 'react';
import '../styles.css';

const CardList = ({ cards, setCurrentCard }) => (
  <ul className="card-list">
    {cards.map(card => (
      <li key={card.id} className="card-item">
        <h2>{card.name}</h2>
        <p>**** **** **** {card.number.slice(-4)}</p>
        <button onClick={() => setCurrentCard(card)}>Edit</button>
      </li>
    ))}
  </ul>
);

export default CardList;