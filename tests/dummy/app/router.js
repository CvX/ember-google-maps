import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import { tryInvoke } from '@ember/utils';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,

  didTransition() {
    this._super(...arguments);
    tryInvoke(window, 'scrollTo', [0, 0]);
  }
});

Router.map(function() {
  this.route('index', { path: '/' });

  this.route('docs', function() {
    this.route('about');
    this.route('getting-started');
    this.route('map');
    this.route('events');
    this.route('components');
    this.route('canvas');
    this.route('markers');
    this.route('circles');
    this.route('polylines');
    this.route('info-windows');
    this.route('controls');
    this.route('directions');
    this.route('overlays');
    this.route('complex-ui');
  });

  this.route('examples', function() {
    this.route('sweet-rentals');
  });
});

export default Router;
