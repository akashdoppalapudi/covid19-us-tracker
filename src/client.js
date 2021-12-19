import * as sapper from '@sapper/app';
import '../node_modules/bulma/css/bulma.min.css';
import '../static/global.css';

sapper.start({
	target: document.querySelector('#sapper'),
});
