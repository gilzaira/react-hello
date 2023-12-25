import React from "react";
import littleCat from '../../img/littleCat.jpg';
//create your first component


const cardData = [
  {
    id: 1,
    imageUrl: 'https://picsum.photos/seed/picsum/50/50',
    title: 'Card 1',
    content: 'This is the content for Card 1.',
  },
  {
    id: 2,
    imageUrl: 'https://example.com/image2.jpg',
    title: 'Card 2',
    content: 'This is the content for Card 2.',
  },
  {
    id: 3,
    imageUrl: 'https://example.com/image3.jpg',
    title: 'Card 3',
    content: 'This is the content for Card 3.',
  },
  {
    id: 4,
    imageUrl: 'https://example.com/image4.jpg',
    title: 'Card 4',
    content: 'This is the content for Card 4.',
  },
];

const Card = () => {
  return (
    <div className="card-group">
      {cardData.map((card) => (
        <div className="card" key={card.id}>
          <img className="card-img-top" src={card.imageUrl} alt={`Image for ${card.title}`} />
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.content}</p>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
