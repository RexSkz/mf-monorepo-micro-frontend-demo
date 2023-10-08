import { addRoutes, bootstrap } from 'mainEntry/micro-base';

import { routes } from './routes';

addRoutes(routes);
bootstrap();
