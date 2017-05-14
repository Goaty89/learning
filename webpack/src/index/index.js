import React from 'react';
import ReactDOM from 'react-dom';

import Root from '../Root';
import routes from '../routes';

import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR
import App from '../components/App';

const render = (appRoutes) => {
    ReactDOM.render(
        <AppContainer>
            <Root routes={appRoutes} />
        </AppContainer>
      ,
      document.getElementById('root')
    );
};

render(routes);

//Hot Module Replacement API
if (module.hot) {
    module.hot.accept('../routes', () => {
        const newRoutes = require('../routes').default;
        render(newRoutes);
    });
}