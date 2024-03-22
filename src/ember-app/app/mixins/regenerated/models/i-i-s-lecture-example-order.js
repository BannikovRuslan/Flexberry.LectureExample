import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  paymentDay: DS.attr('date'),
  shipmentDate: DS.attr('date'),
  status: DS.attr('i-i-s-lecture-example-order-status'),
  /**
    Non-stored property.

    @property totalSum
  */
  totalSum: DS.attr('decimal'),
  /**
    Method to set non-stored property.
    Please, use code below in model class (outside of this mixin) otherwise it will be replaced during regeneration of models.
    Please, implement 'totalSumCompute' method in model class (outside of this mixin) if you want to compute value of 'totalSum' property.

    @method _totalSumCompute
    @private
    @example
      ```javascript
      _totalSumChanged: on('init', observer('totalSum', function() {
        once(this, '_totalSumCompute');
      }))
      ```
  */
  _totalSumCompute: function() {
    let result = (this.totalSumCompute && typeof this.totalSumCompute === 'function') ? this.totalSumCompute() : null;
    this.set('totalSum', result);
  },
  orderItem: DS.hasMany('i-i-s-lecture-example-order-item', { inverse: 'order', async: false })
});

export let ValidationRules = {
  paymentDay: {
    descriptionKey: 'models.i-i-s-lecture-example-order.validations.paymentDay.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  shipmentDate: {
    descriptionKey: 'models.i-i-s-lecture-example-order.validations.shipmentDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  status: {
    descriptionKey: 'models.i-i-s-lecture-example-order.validations.status.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  totalSum: {
    descriptionKey: 'models.i-i-s-lecture-example-order.validations.totalSum.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  orderItem: {
    descriptionKey: 'models.i-i-s-lecture-example-order.validations.orderItem.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('OrderE', 'i-i-s-lecture-example-order', {
    status: attr('Status', { index: 0 }),
    shipmentDate: attr('Shipment date', { index: 1 }),
    paymentDay: attr('Payment day', { index: 2 }),
    totalSum: attr('Total sum', { index: 3 }),
    orderItem: hasMany('i-i-s-lecture-example-order-item', 'Order item', {
      amount: attr('Amount', { index: 0 }),
      priceWTaxes: attr('Price w taxes', { index: 1 }),
      totalSum: attr('Total sum', { index: 2 }),
      product: belongsTo('i-i-s-lecture-example-product', 'Product', {
        name: attr('Name', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'name' })
    })
  });

  modelClass.defineProjection('OrderL', 'i-i-s-lecture-example-order', {
    status: attr('Status', { index: 0 }),
    shipmentDate: attr('Shipment date', { index: 1 }),
    paymentDay: attr('Payment day', { index: 2 }),
    totalSum: attr('Total sum', { index: 3 })
  });
};
