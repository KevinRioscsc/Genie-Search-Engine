import React from 'react';
import './SearchCard.css'

const SearchCard = ({url, title, description}) => {
  return (
    <div className='mid'>
        <a href={url}>
        <div className="card">
            <div className="url">
                <p>{url}</p>
            </div>
            <div className="urlTitle">
                <h2 className='blue'>{title}</h2>
            </div>
            <div className="description">
                <p>{description}</p>
            </div>
        </div>
        </a>
    </div>
  );
};

export default SearchCard;
