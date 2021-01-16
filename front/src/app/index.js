import React, { useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { isIOS, isMobile } from 'react-device-detect';
import asyncComponent from 'util/asyncComponent';

const App = ({ match }) => {
  // set default height and overflow for iOS mobile Safari 10+ support.
  useEffect(() => {
    if (isIOS && isMobile) {
      document.body.classList.add('ios-mobile-view-height');
    } else if (document.body.classList.contains('ios-mobile-view-height')) {
      document.body.classList.remove('ios-mobile-view-height');
    }
  }, []);

  return (
    <Switch>
      <Route path={`${match.url}/home`} component={asyncComponent(() => import('./routes/Home'))} />
      <Route component={asyncComponent(() => import('components/Error404'))} />
    </Switch>
  );
};

export default withRouter(App);
