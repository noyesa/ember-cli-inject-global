import { getOrRegisterGlobal } from 'inject-global/inject-global';
import { module, test } from 'qunit';
import sinon from 'sinon';

module('Unit | Utility | inject-global', function() {
  const registry = new Map();
  const app = {
    hasRegistration: sinon.spy((key) => registry.has(key)),
    register: sinon.spy((key, o) => registry.set(key, o)),
    lookup: sinon.spy((key) => registry.get(key))
  };

  const win = { prop: {} };

  // Replace this with your real tests.
  test('It looks up the global on the window', function(assert) {
    assert.equal(
      getOrRegisterGlobal(app, 'prop', win),
      win.prop,
      'It retrieved "prop" from the window'
    );

    const oldProp = win.prop;
    win.prop = {};
    assert.equal(
      getOrRegisterGlobal(app, 'prop', win),
      oldProp,
      'Returned the old value.'
    );
  });
});
