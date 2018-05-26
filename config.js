//Todo: change the url to be an absolute path, queryString parameter must be passed in as an object
//queryString paramater, must be passed in as an object to the service
export const WEATHER_API_LOCATION =
	'https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=21dc8127c4113d0d36a388170c2d653a';

const CURRENT_ENV = process.env.NODE_ENV;

function isDev() {
	return CURRENT_ENV === 'development';
}

function isProd() {
	return CURRENT_ENV === 'production';
}

export default {
	isDev,
	isProd
};
