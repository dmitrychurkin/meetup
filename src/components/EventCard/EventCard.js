import React from 'react';
import './EventCard.css';

import cardImg from 'assets/card1.jpg';

const EventCard = ({ data }) => {
    const { 
        eventImg = cardImg, 
        attendCount = '123+', 
        eventTitle = 'Your Event Title', 
        eventSubtitle = 'Long subtitle should be truncate if it is long', 
        eventText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged`, 
        eventAuthor = 'Gladys Kanyinda' } = data;

    const text = eventText.length > 300 ? `${eventText.slice(0, 300)}...` : eventText;

    return (
        <div className='EventCard'>
            <div
                style={{
                    backgroundImage: `url(${eventImg})`,
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
                <div className='EventCard__title truncate'>{eventTitle}</div>
                <div className='EventCard__sub truncate'>{eventSubtitle}</div>
                <p className='EventCard__text'>{text}</p>
                <div className='EventCard__author'>{eventAuthor}</div>
            </div>
        </div>
    );
};

export default EventCard;