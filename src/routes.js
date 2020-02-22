import Overview from './views/Overview/Overview';

const routes = [
  {
    path: '/overview', name: 'Overview', component: Overview, layout: '/dashboard', scope: ['admin'],
  },
];

export default routes;
