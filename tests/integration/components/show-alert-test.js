import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';
import injectFakeGlobal from 'inject-global/test-support/inject-fake-global';

module('Integration | Component | show-alert', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    const alert = sinon.stub();
    injectFakeGlobal(this.owner, 'window', { alert });

    await render(hbs`
      {{#show-alert class="show-alert"}}
        template block text
      {{/show-alert}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');

    await click('.show-alert');
    assert.ok(alert.calledWith('andrew'), 'The alert method was called.');
  });
});
