import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import GlobalStyles from './index.css';
import theme from 'utils/theme';

import { Navigation } from 'components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
   
      <Router>
        <Navigation items={[
          {content: 'Homepage', to: '/'},
          {content: 'Budget', to: '/budget'},
        ]}/>
        <Routes>
          <Route exact path='/'>
            Homepage
          </Route>
          <Route path='/budget'>
            Budget page
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
    
  );
}

export default App;
