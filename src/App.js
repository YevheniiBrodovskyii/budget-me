import React, {Fragment} from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import GlobalStyles from './index.css';
import theme from 'utils/theme';

import { LoadingIndicator, Navigation } from 'components';

function App() {
  const {t, i18n} = useTranslation();
  return (
    <Fragment>
      <GlobalStyles/>
      <Router>
        <Navigation items={[
          {content: t('Homepage'), to: '/'},
          {content: t('Budget'), to: '/budget'},
        ]}
        RightElement={(
          <div>
            <button onClick={() => i18n.changeLanguage('pl')}>pl</button>
            <button onClick={() => i18n.changeLanguage('en')}>en</button>
          </div>
        )}
        />
        <Routes>
          <Route exact path='/'>
            Homepage
          </Route>
          <Route path='/budget'>
            Budget page
          </Route>
        </Routes>
      </Router>
    </Fragment>
  );
}

function RootApp() {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<LoadingIndicator/>}>
        <App />
      </React.Suspense>
    </ThemeProvider>
  )
}

export default RootApp;
