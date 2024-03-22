import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-lecture-example-order', 'Unit | Model | i-i-s-lecture-example-order', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-lecture-example-order-item',
    'model:i-i-s-lecture-example-order',
    'model:i-i-s-lecture-example-product',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
