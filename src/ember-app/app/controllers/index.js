import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.lecture-example.caption'),
          title: i18n.t('forms.application.sitemap.lecture-example.title'),
          children: [{
            link: 'i-i-s-lecture-example-product-l',
            caption: i18n.t('forms.application.sitemap.lecture-example.i-i-s-lecture-example-product-l.caption'),
            title: i18n.t('forms.application.sitemap.lecture-example.i-i-s-lecture-example-product-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-lecture-example-order-l',
            caption: i18n.t('forms.application.sitemap.lecture-example.i-i-s-lecture-example-order-l.caption'),
            title: i18n.t('forms.application.sitemap.lecture-example.i-i-s-lecture-example-order-l.title'),
            icon: 'address card',
            children: null
          }]
        }
      ]
    };
  }),
})