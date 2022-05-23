import React from "react";
import { useState } from "react";
import { Input, Button, Container, Segment, Loader, Dimmer, Grid, Form } from "semantic-ui-react";
import CurrencyList from "../currency-list/CurrencyList";
import { getPrice } from "../currency-price/CurrencyPriceClient";
import CryptoContext from "./CryptoContext";
import CurrencyPrice from "../currency-price/CurrencyPrice";
import ErrorMessage from "../error-message/ErrorMessage";

const CurrencyMonitor = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('');
    const [loading, setLoading] = useState(true);
    const [price, setPrice] = useState(null);
    const [ip, setIp] = useState('');
    const [error, setError] = useState(null);
    console.log(selectedCurrency);

    const getPriceOfCurrency = async(id, ip) => {
        try {
            setLoading(true);
            const price = await getPrice(id, ip);
            setPrice(price);
        } catch(err) {
            console.log(err);
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <CryptoContext.Provider value={{loading, price, error, setLoading, setSelectedCurrency, setError}}>
        <Grid textAlign='center' verticalAlign='middle'>
            <Grid.Column >
                <ErrorMessage />
                <Segment>
                    <Grid.Column style={{ width: '600px'}}>
                        <Grid columns={1}>
                            <Grid.Column>
                                <CurrencyList />
                            </Grid.Column>
                            <Grid.Column>
                                <Input fluid placeholder='IP Address' onChange={(e, data) => setIp(data.value)} />
                            </Grid.Column>
                            <Grid.Column>
                                <Button primary onClick={() => getPriceOfCurrency(selectedCurrency, ip)}>Get Price</Button>
                            </Grid.Column>
                            <Grid.Column>
                                <CurrencyPrice />
                            </Grid.Column>
                        </Grid>
                    </Grid.Column>
                </Segment>
            </Grid.Column>
        </Grid>
        {loading && 
            <Dimmer active>
                <Loader>Loading</Loader>
            </Dimmer>
        }
        </CryptoContext.Provider>
    );
};

export default CurrencyMonitor;
