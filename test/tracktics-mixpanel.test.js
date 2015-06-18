'use strict';

var trackticsMixpanel = require('..');

require('phantomjs-polyfill');

describe('Tracktics KISSmetrics Plugin', function() {
    var subject;

    beforeEach(function() {
        global.window.mixpanel = jasmine.createSpyObj('mixpanel', ['track']);
        subject = trackticsMixpanel();
    });

    describe('#trackPage()', function() {
        var url;

        beforeEach(function() {
            url = '/some/url';
            subject.trackPage(url);
        });

        it('should call mixpanel.track with expected args', function() {
            expect(global.window.mixpanel.track).toHaveBeenCalledWith('Page Viewed', { page: url });
        });
    });

    describe('#trackEvent()', function() {
        var action, properties;

        beforeEach(function() {
            action = 'click';
            properties = { event: 'Download' };
        });

        describe('when no additional properties are specified', function() {

            beforeEach(function() {
                subject.trackEvent(action, properties);
            });

            it('should call mixpanel.track with expected args', function() {
                expect(global.window.mixpanel.track).toHaveBeenCalledWith(properties.event);
            });
        });

        describe('when additional properties are specified', function() {

            beforeEach(function() {
                properties.plan = 'Pro';
                subject.trackEvent(action, properties);
            });

            it('should call mixpanel.track with expected args', function() {
                expect(global.window.mixpanel.track).toHaveBeenCalledWith(properties.event, { plan: 'Pro' });
            });
        });
    });

    describe('when mixpanel is unavailable', function() {

        beforeEach(function() {
            delete global.window.mixpanel;
        });

        describe('#trackPage()', function() {
            var url;

            beforeEach(function() {
                url = '/some/url';
            });

            it('should not throw', function() {
                expect(subject.trackPage.bind(null, url)).not.toThrow();
            });
        });

        describe('#trackEvent()', function() {
            var action, properties;

            beforeEach(function() {
                action = 'click';
                properties = { event: 'Download' };
            });

            it('should not throw', function() {
                expect(subject.trackEvent.bind(null, action, properties)).not.toThrow();
            });
        });
    });
});
