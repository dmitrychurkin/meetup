import React from 'react';
import { Link } from 'react-router-dom';
import './EventCard.css';

const EventCard = ({
    url, img, attendCount, title, sub, text, author, maxLength, location: { pathname }
}) => (
        <Link
            to={`${pathname}/${url}`}
            className='EventCard'>
            <div
                style={{
                    backgroundImage: `url(${img})`,
                }}
                className='EventCard__img'
            />
            <div className='EventCard__wrap'>
                <div className='EventCard__attend'>
                    <div className='EventCard__attend_wrap'>
                        <span>Attending</span>
                        <div className='EventCard__count'>{attendCount}</div>
                    </div>
                </div>
                <div className='EventCard__title truncate'>{title}</div>
                <div className='EventCard__sub truncate'>{sub}</div>
                <p className='EventCard__text'>{text.length > maxLength ? `${text.slice(0, maxLength)}...` : text}</p>
                <div className='EventCard__author'>{author}</div>
            </div>
        </Link>
    );


EventCard.defaultProps = {
    maxLength: 300
};

export default EventCard;