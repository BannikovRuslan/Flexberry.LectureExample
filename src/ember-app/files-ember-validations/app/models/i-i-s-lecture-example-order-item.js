import {
  defineNamespace,
  defineProjections,
  Model as OrderItemMixin
} from '../mixins/regenerated/models/i-i-s-lecture-example-order-item';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(OrderItemMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
