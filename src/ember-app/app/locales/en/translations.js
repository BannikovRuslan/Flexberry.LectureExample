import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISLectureExampleOrderLForm from './forms/i-i-s-lecture-example-order-l';
import IISLectureExampleProductLForm from './forms/i-i-s-lecture-example-product-l';
import IISLectureExampleOrderEForm from './forms/i-i-s-lecture-example-order-e';
import IISLectureExampleProductEForm from './forms/i-i-s-lecture-example-product-e';
import IISLectureExampleOrderItemModel from './models/i-i-s-lecture-example-order-item';
import IISLectureExampleOrderModel from './models/i-i-s-lecture-example-order';
import IISLectureExampleProductModel from './models/i-i-s-lecture-example-product';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-lecture-example-order-item': IISLectureExampleOrderItemModel,
    'i-i-s-lecture-example-order': IISLectureExampleOrderModel,
    'i-i-s-lecture-example-product': IISLectureExampleProductModel
  },

  'application-name': 'Lecture example',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Lecture example',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Lecture example',
          title: 'Lecture example'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'lecture-example': {
          caption: 'LectureExample',
          title: 'LectureExample',
          'i-i-s-lecture-example-product-l': {
            caption: 'Product',
            title: ''
          },
          'i-i-s-lecture-example-order-l': {
            caption: 'Order',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-lecture-example-order-l': IISLectureExampleOrderLForm,
    'i-i-s-lecture-example-product-l': IISLectureExampleProductLForm,
    'i-i-s-lecture-example-order-e': IISLectureExampleOrderEForm,
    'i-i-s-lecture-example-product-e': IISLectureExampleProductEForm
  },

});

export default translations;
