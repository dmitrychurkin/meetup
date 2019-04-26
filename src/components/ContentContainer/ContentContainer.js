import React from 'react';
import { EventCard } from 'components';
import './ContentContainer.css';

const ContentContainer = ({ data }) => (
    <div className='ContentContainer'>
        <div className='ContentContainer__head'>
            <h1 className='ContentContainer__head_title'>san francisco</h1>
        </div>
        <div className='ContentContainer__wrap'>
            <div className='ContentContainer__near'>
                <div className='ContentContainer__near_title'>Discover these events near you:</div>
                <div className='ContentContainer__near_cards'>
                    {
                        Array(4).fill(true).map((_, i) => <EventCard key={i.toString()} data={{}} />)
                    }
                </div>
            </div>
        </div>
    </div>
);

export default ContentContainer;