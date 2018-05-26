//IMPORT ALWAYS AT THE TOP
import { WEATHER_API_LOCATION } from './config';

let unitOfTemperature = 'F';

export function getTemperatures() {
	unitOfTemperature === 'F' ? 'C' : 'F';
	return unitOfTemperature;
}

export default {
	getTemperatures,
	unitOfTemperature
};
