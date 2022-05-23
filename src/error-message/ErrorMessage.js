import React, { useContext } from "react";
import { Message } from "semantic-ui-react";
import CryptoContext from "../currency-monitor/CryptoContext";

const ErrorMessage = () => {
    const { error, setError } = useContext(CryptoContext);

    return (
        <React.Fragment>
            {error &&
                <Message negative style={{textAlign: 'left'}} onDismiss={() => setError(null)}>
                    <Message.Header>{error?.title || 'There was an error occurred!'}</Message.Header>
                    <p>{error?.error?.message}</p>
                </Message>
            }
        </React.Fragment>
    );
};

export default ErrorMessage;
