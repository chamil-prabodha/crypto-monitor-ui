import React from "react";
import { useContext } from "react"
import { Dimmer, Loader, Header } from "semantic-ui-react";
import CryptoContext from "../currency-monitor/CryptoContext";

const CurrencyPrice = () => {
    const { loading, price } = useContext(CryptoContext);

    return  (
        <React.Fragment>
            {price && <Header size='tiny'>Current unit price is</Header>}
            {price && <Header size='tiny'>{price?.price} {price?.currencySymbol}</Header>}
        </React.Fragment>
    );
};

export default CurrencyPrice;
