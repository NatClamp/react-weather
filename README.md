## React Weather

This is a quick application that allows the user to discover the upcoming weather in cities around the UK, displaying simple line graphs of predicted temperature and precipitation data for the following five days.

## Deployment

The app has been deployed using netlify. You can find it at [nfc-weather.netlify.com](https://nfc-weather.netlify.com)

## Run locally

To run this app locally on your machine, clone this repo.

Use the command `npm i` to install the required dependencies.

You'll need to get yourself an account over at []() and put your API key into a file named `.env` with your API key inside as a variable, just like:

```
export REACT_APP_API_KEY='<PUT YOUR API KEY HERE>'
```

Once ready, use the command `source .env` and then the command `npm start`.

This will open the app up on your localhost port.

### Built With

- [Create-react-app](https://github.com/facebook/create-react-app)
- [React Chart JS2](https://github.com/jerairrest/react-chartjs-2)
- [Axios](https://github.com/axios/axios)
- [Weather API](https://openweathermap.org/api)

### Acknowledgements

- Built as a small project as part of the react module whilst studying at Northcoders, Manchester.
