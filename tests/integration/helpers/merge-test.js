import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | merge', function(hooks) {
  setupRenderingTest(hooks);

  test('empty hash', async function(assert) {
    await render(hbs`{{#each-in (merge) as |key value|}}{{key}}{{value}}{{/each-in}}`);

    assert.equal(this.element.textContent.trim(), '');
  });

  test('hash with key', async function(assert) {
    await render(hbs`{{#each-in (merge a="b") as |key value|}}{{key}}{{value}}{{/each-in}}`);

    assert.equal(this.element.textContent.trim(), 'ab');
  });

  test('merge hashes', async function(assert) {
    this.set('hash', { c: "d" });
    this.set('hash2', { e: "f" });

    await render(hbs`{{#each-in (merge hash hash2 a="b") as |key value|}}{{key}}{{value}}{{/each-in}}`);

    assert.equal(this.element.textContent.trim(), 'cdefab');
  });
});
