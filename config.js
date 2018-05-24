//Todo: change the url to be an absolute path, queryString parameter must be passed in as an object
//queryString paramater, must be passed in as an object to the service
export const WEATHER_API_LOCATION =
  "api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml";

const myRandomConfig = isDev() ? { place: "dev" } : { place: "prod" };

const myOtherRandomConfig = isProd()
  ? { place: "isProd('GINA!!!!!')" }
  : { place: "vince is a noob" };

const CURRENT_ENV = process.env.NODE_ENV;

function isDev() {
  return CURRENT_ENV === "development";
}

function isProd() {
  return CURRENT_ENV === "production";
}

export default {
  isDev,
  isProd
};
