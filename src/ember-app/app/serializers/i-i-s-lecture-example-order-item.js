import { Serializer as OrderItemSerializer } from
  '../mixins/regenerated/serializers/i-i-s-lecture-example-order-item';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(OrderItemSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
