import React from 'react';

const ImageCard = ({url, imageUrl, description}) => {
  return (
        <div>
            <a href={url} target={'_blank'}>
                <div className="cardFlex">
                    <img src={imageUrl} alt="logo" />
                    <p>{description}</p>
                    
                </div>
            </a>
        </div>
  )};

export default ImageCard;
