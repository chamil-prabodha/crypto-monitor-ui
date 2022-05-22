import useCurrencyListApi from './CurrencyListHook';
import { useEffect, useState } from 'react';
import { Dropdown } from 'semantic-ui-react';

const CurrencyList = ({ onSelect, onLoading }) => {
  const { loading, data, err } = useCurrencyListApi(onLoading);
  const getCurrencyList = (data) => {
    return data.map(currency => {
      const { id, symbol, name } = currency;
      return {
        key: id,
        value: id,
        text: name
      }
    });
  };
  return (
    <Dropdown
      placeholder='Select Currency'
      // fluid
      search
      selection
      options={data ? getCurrencyList(data) : []}
      onChange={(e, data) => onSelect(data.value)}
  />
  );
};

export default CurrencyList;
