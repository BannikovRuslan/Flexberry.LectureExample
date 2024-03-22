export default {
  projections: {
    OrderE: {
      status: {
        __caption__: 'Status'
      },
      shipmentDate: {
        __caption__: 'Shipment date'
      },
      paymentDay: {
        __caption__: 'Payment day'
      },
      totalSum: {
        __caption__: 'Total sum'
      },
      orderItem: {
        __caption__: 'Order item',
        amount: {
          __caption__: 'Amount'
        },
        priceWTaxes: {
          __caption__: 'Price w taxes'
        },
        totalSum: {
          __caption__: 'Total sum'
        },
        product: {
          __caption__: 'Product',
          name: {
            __caption__: 'Name'
          }
        }
      }
    },
    OrderL: {
      status: {
        __caption__: 'Status'
      },
      shipmentDate: {
        __caption__: 'Shipment date'
      },
      paymentDay: {
        __caption__: 'Payment day'
      },
      totalSum: {
        __caption__: 'Total sum'
      }
    }
  },
  validations: {
    paymentDay: {
      __caption__: 'Payment day'
    },
    shipmentDate: {
      __caption__: 'Shipment date'
    },
    status: {
      __caption__: 'Status'
    },
    totalSum: {
      __caption__: 'Total sum'
    },
    orderItem: {
      __caption__: 'Order item'
    }
  }
};
