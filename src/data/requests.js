import axios from 'axios';
import parseUsStats from './parsers';

const usStats = async () => {
	const response = await axios.get(
		'https://api.covidtracking.com/v1/us/current.json'
	);
	return parseUsStats(response.data);
};

export default usStats;
