import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-lecture-example-order-l');
  this.route('i-i-s-lecture-example-order-e',
  { path: 'i-i-s-lecture-example-order-e/:id' });
  this.route('i-i-s-lecture-example-order-e.new',
  { path: 'i-i-s-lecture-example-order-e/new' });
  this.route('i-i-s-lecture-example-product-l');
  this.route('i-i-s-lecture-example-product-e',
  { path: 'i-i-s-lecture-example-product-e/:id' });
  this.route('i-i-s-lecture-example-product-e.new',
  { path: 'i-i-s-lecture-example-product-e/new' });
});

export default Router;
