import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import OrderStatusEnum from '../enums/i-i-s-lecture-example-order-status';

export default FlexberryEnum.extend({
  enum: OrderStatusEnum,
  sourceType: 'IIS.LectureExample.OrderStatus'
});
