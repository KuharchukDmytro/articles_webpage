import { FC } from 'react'
import './Card.scss';

interface Props {
  author: string;
  title: string;
  imgUrl: string;
  description: string;
  date: string;
}

export const Card: FC<Props> = ({
  author,
  title,
  imgUrl,
  description,
  date,
}) => {
  return (
    <div className='card-item'>
      <img
        src={imgUrl
          ? imgUrl
          : 'https://www.brasscraft.com/wp-content/uploads/2017/01/no-image-available.png'}
        alt={title}
        className='card-item__image'
      />

      <h3 className='card-item__title'>
        {title}
      </h3>

      <p className='card-item__description'>
        {description}
      </p>

      <div className='card-item__bottom-section'>
        <span className="card-item__published-date">
          {new Date(date).toDateString()}
        </span>

        <span className='card-item__author'>
          {`by ${author ? author : 'Unknown'}`}
        </span>
      </div>
    </div>
  );
};
