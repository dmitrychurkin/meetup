import React from 'react';
import { withRouter } from 'react-router-dom';
import { EventCard } from 'components';

const EventCardLinked = props => (
  <EventCard
    {...props}
  />
)

export default withRouter(EventCardLinked);