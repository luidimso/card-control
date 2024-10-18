import React from 'react';
import '../styles.css';
import { GoPencil } from "@react-icons/all-files/go/GoPencil";

const CardList = ({ cards, setCurrentCard }) => (
  <ul className="card-list">
    {cards.map(card => (
      <li key={card.id} className="card-item">
        <div className='card-header'>
          <img src="/mastercard-logo.svg" alt="image" style={{marginTop:"-15px"}}/>
          <div className='card-infos'>
            <div className='card-info'>
              <p className='card-label'>CVC</p>
              <p className='card-value'>{card.cvc}</p>
            </div>
            <div className='card-info'>
              <p className='card-label'>EXPIRES</p>
              <p className='card-value'>{card.expiry}</p>
            </div>
          </div>
        </div>

        <div className='card-footer'>
          <p className='card-name'>{card.name}</p>
          <div className='card-footer-bottom'>
            <p className='card-number'>**** **** **** {card.number.slice(-4)}</p>
            <GoPencil onClick={() => setCurrentCard(card)} className='icon'/>
          </div>
        </div>
        {/* <button >Edit</button> */}
      </li>
    ))}
  </ul>
);

export default CardList;