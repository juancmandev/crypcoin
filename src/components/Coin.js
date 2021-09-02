import React from 'react';
import '../styles/Coin.css';

const Coin = ({
  name,
  image,
  symbol,
  price,
  marketCap,
  priceChange,
  volume,
}) => {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <picture>
            <img src={image} alt='crypto icon' />
          </picture>
          <h3>{name}</h3>
          <p className='coin-symbol'>{symbol}</p>
        </div>
        <div className='coin-data'>
          <p className='coin-price'>${price}</p>
          <p className='coin-volume'>${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
          )}
          <p className='coin-marketcap'>
            Mkt Cap: ${marketCap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export { Coin };
