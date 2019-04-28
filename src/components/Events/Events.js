import React from 'react';
import { Paginator } from 'components';
import { EventCardLinked } from 'containers';
import './Events.css';


const Events = ({ events }) => events.map(({ groupTitle, total, batch }) => (
  <div
    key={groupTitle}
    className='Event'>
    <div className='Event__title'>{groupTitle}:</div>
    <div className='Event__cards'>
      {
        batch.map((data, i) => (
          <EventCardLinked
            key={i.toString()}
            {...data}
          />
        ))
      }
    </div>
    <Paginator total={total} />
  </div>
));

Events.defaultProps = {
  events: []
};

export default Events;