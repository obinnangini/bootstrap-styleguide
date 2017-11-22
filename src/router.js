import Vue from 'vue';
import VueRouter from 'vue-router';

import Landing from './landing/Landing.vue';
import Components from './components/Components.vue';
import Notifications from './components/demos/notifications/Notifications.vue';
import Indicators from './components/demos/indicators/Indicators.vue';
import Navigation from './components/demos/navigation/Navigation.vue';
import Buttons from './components/demos/buttons/Buttons.vue';
import Containers from './components/demos/containers/Containers.vue';
import Forms from './components/demos/forms/Forms.vue';
import Progress from './components/demos/progress/Progress.vue';
import Tables from './components/demos/tables/Tables.vue';
import Typography from './components/demos/typography/Typography.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Landing,
  },
  {
    path: '/components',
    name: 'Components',
    component: Components,
    redirect: '/components/navigation',
    children: [
      { path: 'notifications', name: 'Notifications', component: Notifications },
      { path: 'indicators', component: Indicators },
      { path: 'navigation', component: Navigation },
      { path: 'buttons', component: Buttons },
      { path: 'containers', component: Containers },
      { path: 'forms', component: Forms },
      { path: 'progress', component: Progress },
      { path: 'tables', component: Tables },
      { path: 'typography', component: Typography },
    ],
  },
];

const router = new VueRouter({ // eslint-disable-line no-new
  // Enable Browser History
  // mode: 'history',
  // base: window.location.href,
  routes,
});

export default router;
