import logo from './logo.svg';
import './App.css';
import CurrencyList from './currency-list/CurrencyList';
import { useEffect, useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Input, Button, Segment, Dimmer, Loader } from 'semantic-ui-react';
import { getPrice } from './currency-price/CurrencyPriceClient';

const App = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [loading, setLoading] = useState(true);
  const [price, setPrice] = useState(null);
  console.log(selectedCurrency);

  const getPriceOfCurrency = async(id, ip) => {
    try {
      setLoading(true);
      const price = await getPrice(id, ip);
      setPrice(price);
    } catch(err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Segment className="Page">
      <CurrencyList onSelect={(selected) => setSelectedCurrency(selected)} onLoading={setLoading} />
      <Input placeholder='IP Address' />
      <Button primary onClick={() => getPriceOfCurrency(selectedCurrency, '165.227.28.86')}>Get Price</Button>
      {price && <p>Current unit price is</p>}
      {price && <p>{price?.price} {price?.currencySymbol}</p>}
      {loading &&
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
      }
      
    </Segment>
  );
}

export default App;
