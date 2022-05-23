# Crypto-Monitor-UI

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Important Notes!

The following steps were omitted due to time constraints
* Unit tests for the frontend components
* CI/CD for frontend
* Login functionality
* Seeing conversion history of a Crypto currency

The UI lists down the top 100 currencies ordered by market cap value. Loading all the available cryptocurrencies into the UI causes performance issues in UI

## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test` or `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Steps to run the frontend
1. Run `npm install` or `yarn install`
2. Run `npm start` or `yarn start`
3. The server will run on port 3000 by default

### prerequisites
The backend REST api needs to start separately. Please provide the appropriate `REACT_APP_BACKEND_URL` variable in `.env` file
