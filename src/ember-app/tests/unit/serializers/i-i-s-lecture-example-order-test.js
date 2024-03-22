import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-lecture-example-order', 'Unit | Serializer | i-i-s-lecture-example-order', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-lecture-example-order',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-lecture-example-order-status',

    'model:i-i-s-lecture-example-order-item',
    'model:i-i-s-lecture-example-order',
    'model:i-i-s-lecture-example-product',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
