import { test } from 'qunit';
import moduleForAcceptance from 'ember-timelines/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | timelines test');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/timeline', 'should redirect automatically');
  });
});
