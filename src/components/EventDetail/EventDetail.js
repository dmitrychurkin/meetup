import React from 'react';
import { Button } from 'components';
import './EventDetail.css';

const EventDetail = ({
  name, date, location, intro, email, headings
}) => (
    <div className='EventDetail'>
      <h2 className='EventDetail__name'>{name}</h2>
      <h3 className='EventDetail__date'>{date}</h3>
      <div className='EventDetail__location'>{location}</div>
      <h4 className='EventDetail__intro'>{intro}</h4>
      <div className='EventDetail__headings'>
        {
          headings.map(({ title, para = [] }, i) => (
            <div key={i.toString()}>
              <div className='EventDetail__headings_title'>{title}</div>
              {
                para.map((t, i) => (
                  <p
                    key={i.toString()}
                    className='EventDetail__headings_para EventDetail__text'
                  >
                    {t}
                  </p>
                ))
              }
            </div>
          ))
        }
      </div>
      <div className='EventDetail__text'>Contact the organizer:</div>
      <a className='EventDetail__link' href={`mailto:${email}`}>{email}</a>
      <Button className='EventDetail__btn'>register</Button>
    </div>
  );

EventDetail.defaultProps = {
  headings: []
};

export default EventDetail;