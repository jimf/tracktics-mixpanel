'use strict';

/**
 * Main export function. Returns a Mixpanel provider instance.
 *
 * @return {object}
 */
module.exports = function() {

    return {
        name: 'Mixpanel',

        /**
         * Mixpanel page-tracking implementation.
         *
         * @param {string} url URL to track
         */
        trackPage: function trackPage(url) {
            if (!global.window.mixpanel) { return; }
            global.window.mixpanel.track('Page Viewed', { page: url });
        },

        /**
         * Mixpanel event-tracking implementation.
         *
         * {@link http://support.kissmetrics.com/apis/javascript/}
         *
         * @param {string} action The type of interaction (e.g., "click")
         * @param {object} properties
         * @param {object} properties.event Event name
         */
        trackEvent: function trackEvent(action, properties) {
            var mixpanel = global.window.mixpanel,
                props = {},
                hasProps = false;

            if (!mixpanel) { return; }

            Object.keys(properties).forEach(function(key) {
                if (key !== 'event') {
                    props[key] = properties[key];
                    hasProps = true;
                }
            });

            if (hasProps) {
                mixpanel.track(properties.event, props);
            } else {
                mixpanel.track(properties.event);
            }
        }
    };
};
