class CryptoError extends Error {
    constructor(message, error) {
        super(message);
        this.title = message;
        this.error = error;
    }
}

export default CryptoError;