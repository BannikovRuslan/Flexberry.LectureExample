import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Lecture example',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Lecture example',
          title: 'Lecture example'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-lecture-example-order-l': IISLectureExampleOrderLForm,
    'i-i-s-lecture-example-product-l': IISLectureExampleProductLForm,
    'i-i-s-lecture-example-order-e': IISLectureExampleOrderEForm,
    'i-i-s-lecture-example-product-e': IISLectureExampleProductEForm
  },

});

export default translations;
