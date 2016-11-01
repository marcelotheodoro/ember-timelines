import { test } from 'qunit';
import moduleForAcceptance from 'ember-timelines/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | timelines test');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/timeline', 'should redirect automatically');
  });
});


test('should show all days on master timeline', function (assert) {
  visit('/');
  andThen(function () {
    let timelineItems = find('#master-timeline .timeline .timeline-item');
    assert.equal(timelineItems.length, 15, 'should see 15 days');
  });
});

test('should show milestones on master timeline', function (assert) {
  visit('/');
  andThen(function () {
    let timelineItems = find('#master-timeline .timeline .timeline-item .milestone');
    assert.equal(timelineItems.length, 8, 'should see 8 milestones');
    assert.equal($(timelineItems).find('.point').length, 8, 'should see 8 milestone points');
  });
});

test('should show milestones names and dates on master timeline', function (assert) {
  visit('/');
  andThen(function () {
    let timelineItems = find('#master-timeline .timeline .timeline-item .milestone');
    
    assert.equal($(timelineItems[0]).find('.name').text(), "Sprint Planning");
    assert.equal($(timelineItems[1]).find('.name').text(), "Code Review");
    assert.equal($(timelineItems[2]).find('.name').text(), "Process Review");
    assert.equal($(timelineItems[3]).find('.name').text(), "Mgmt Review");
    assert.equal($(timelineItems[4]).find('.name').text(), "UI Review");
    assert.equal($(timelineItems[5]).find('.name').text(), "Architecture Review");
    assert.equal($(timelineItems[6]).find('.name').text(), "Task Breakdown");
    assert.equal($(timelineItems[7]).find('.name').text(), "Poker");

    assert.equal($(timelineItems[0]).find('.date').text(), "2016-03-07");
    assert.equal($(timelineItems[1]).find('.date').text(), "2016-03-08");
    assert.equal($(timelineItems[2]).find('.date').text(), "2016-03-09");
    assert.equal($(timelineItems[3]).find('.date').text(), "2016-03-10");
    assert.equal($(timelineItems[4]).find('.date').text(), "2016-03-14");
    assert.equal($(timelineItems[5]).find('.date').text(), "2016-03-16");
    assert.equal($(timelineItems[6]).find('.date').text(), "2016-03-20");
    assert.equal($(timelineItems[7]).find('.date').text(), "2016-03-21");
  });
});

test('should show timeline handle', function (assert) {
  visit('/');
  andThen(function () {
    let handle = find('#handle .slider-track');
    assert.equal($(handle).find('.slider-track-low').length, 1, 'should see lower handle');
    assert.equal($(handle).find('.slider-track-high').length, 1, 'should see higher handle');
    assert.equal($(handle).find('.slider-selection').length, 1, 'should see selection handle');
  });
});

test('should show spotlight view starting on 60%', function (assert) {
  visit('/');
  andThen(function () {
    let timelineItems = find('#spotlight-view .timeline .timeline-item .milestone');
    assert.equal(timelineItems.length, 3, 'should see 3 milestones');
    assert.equal($(timelineItems).find('.point').length, 3, 'should see 3 milestone points');
  });
});

