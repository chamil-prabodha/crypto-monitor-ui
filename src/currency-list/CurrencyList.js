import useCurrencyListApi from './CurrencyListHook';
import { Dropdown, Grid } from 'semantic-ui-react';
import CryptoContext from '../currency-monitor/CryptoContext';
import { useContext } from 'react';

const CurrencyList = () => {
  const { setSelectedCurrency } = useContext(CryptoContext);
  const { data } = useCurrencyListApi();

  const getCurrencyList = (data) => {
    return data.map(currency => {
      const { id, name } = currency;
      return {
        key: id,
        value: id,
        text: name
      }
    });
  };

  return (
    <Dropdown
      fluid
      placeholder='Select Currency'
      search
      selection
      options={data ? getCurrencyList(data) : []}
      onChange={(e, data) => setSelectedCurrency(data.value)}
    />
  );
};

export default CurrencyList;
