import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  description: DS.attr('string'),
  measure: DS.attr('string'),
  name: DS.attr('string'),
  price: DS.attr('decimal'),
  productCode: DS.attr('number'),
  weight: DS.attr('decimal')
});

export let ValidationRules = {
  description: {
    descriptionKey: 'models.i-i-s-lecture-example-product.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  measure: {
    descriptionKey: 'models.i-i-s-lecture-example-product.validations.measure.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  name: {
    descriptionKey: 'models.i-i-s-lecture-example-product.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  price: {
    descriptionKey: 'models.i-i-s-lecture-example-product.validations.price.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  productCode: {
    descriptionKey: 'models.i-i-s-lecture-example-product.validations.productCode.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  weight: {
    descriptionKey: 'models.i-i-s-lecture-example-product.validations.weight.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ProductE', 'i-i-s-lecture-example-product', {
    productCode: attr('Product code', { index: 0 }),
    name: attr('Name', { index: 1 }),
    measure: attr('Measure', { index: 2 }),
    description: attr('Description', { index: 3 }),
    price: attr('Price', { index: 4 }),
    weight: attr('Weight', { index: 5 })
  });

  modelClass.defineProjection('ProductL', 'i-i-s-lecture-example-product', {
    productCode: attr('Product code', { index: 0 }),
    name: attr('Name', { index: 1 }),
    measure: attr('Measure', { index: 2 }),
    description: attr('Description', { index: 3 }),
    price: attr('Price', { index: 4 }),
    weight: attr('Weight', { index: 5 })
  });
};
