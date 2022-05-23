import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Segment, Grid } from 'semantic-ui-react';
import CurrencyMonitor from './currency-monitor/CurrencyMonitor';

const App = () => {
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <CurrencyMonitor />
    </Grid>
  );
}

export default App;
