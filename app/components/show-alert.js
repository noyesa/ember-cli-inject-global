import Component from '@ember/component';
import injectGlobal from 'inject-global/inject-global';

export default Component.extend({
  tagName: 'button',
  window: injectGlobal(),

  click() {
    this.get('window').alert('andrew');
  }
});
