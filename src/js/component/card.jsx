import React from "react";

//create your first component

const CardList = () => {
  const cardData = [
    {
      id: 1,
      imageUrl: 'https://picsum.photos/500/325?random=1',
      title: 'Soren Kierkegaard',
      content: 'Life is not a problem to be solved, but a reality to be experienced.',
    },
    {
      id: 2,
      imageUrl: 'https://picsum.photos/500/325?random=2',
      title: 'Dalai Lama',
      content: 'Take into account that great love and great achievements involve great risk.',
    },
    {
      id: 3,
      imageUrl: 'https://picsum.photos/500/325?random=3',
      title: 'Lou Holtz',
      content: 'Life is ten per cent what happens to you and ninety per cent how you respond to it.',
    },
    {
      id: 4,
      imageUrl: 'https://picsum.photos/500/325?random=4',
      title: 'Mark Twain',
      content: 'The two most important days in your life are the day you are born and the day you find out why.',
    },
  ];
  return (
    <div className="row card-group">
      {cardData.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

const Card = ({ id, imageUrl, title, content }) => {
  return (
    <div className="col-md-3 mb-3">
      <div className="rounded card border-light-subtle text-center h-100" key={id}>
        <img className="card-img-top img-fluid m-0 p-0 rounded-top" src={imageUrl} alt={`Image for ${title}`} style={{ maxWidth: '100%', maxHeight: '100%' }} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
        </div>
        <div className="card-footer bg-transparent">
          <a href="#" className="btn btn-primary fw-semibold">Find Out More!</a>
        </div>
      </div>
    </div>
  );
};

export default CardList;
