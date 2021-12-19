import moment from 'moment';

import number from './format.js';

const parseUsStats = (data) => {
	const [usStatsRaw] = data;
	return {
		cases: number(usStatsRaw.positive),
		deaths: number(usStatsRaw.death),
		recovered: number(usStatsRaw.recovered),
		ventilator: number(usStatsRaw.onVentilatorCurrently),
		hospitalized: number(usStatsRaw.hospitalized),
		icu: number(usStatsRaw.inIcuCurrently),
		tested: number(usStatsRaw.totalTestResults),
		updated: moment(usStatsRaw.lastModified).format('LLLL'),
	};
};

export default parseUsStats;
