import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Content, Events, EventDetail, EventNotFound } from 'components';
import { getRegionalPageData, getDetailPageData } from 'util/helpers';
import { navLinks } from 'util/data';

const ContentContainer = ({ history, match: { params: { city, event } } }) => {
  const [regionalPageState, setRegionalPageState] = useState({});
  const [detailPageState, setDetailPageState] = useState({ details: {} });
  const [is404, set404] = useState(false);

  useEffect(() => {
    set404(false);
    getRegionalPageData(city)
      .then(regionalPageData => {
        setRegionalPageState(regionalPageData);
        return regionalPageData;
      }, () => history.replace(`/region/${navLinks[0].link}`))
      .then(regionalPageData => {
        if (typeof event === 'string') {
          return getDetailPageData(event, regionalPageData);
        }
      })
      .then((detailPageData = {}) => {
        setDetailPageState(detailPageData);
      }, () => set404(true));
  }, [history, city, event]);

  return (
    <Switch>
      <Route
        exact
        path='/region/:city'
        render={() => (
          <Content {...regionalPageState}>
            <Events events={regionalPageState.events} />
          </Content>
        )}
      />
      <Route
        path='/region/:city/:event'
        render={() => (
          is404 ?
            (<EventNotFound />)
            :
            (
              <Content
                goBack={() => history.goBack()}
                {...detailPageState}
              >
                <EventDetail {...detailPageState.details} />
              </Content>
            )
        )}
      />
    </Switch>
  );
};

export default ContentContainer;