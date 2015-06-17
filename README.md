# Tracktics Mixpanel Plugin

[Tracktics][tracktics] plugin for providing Mixpanel support.

[![npm Version][npm-badge]][npm]
[![Build Status][build-badge]][build-status]
[![Test Coverage][coverage-badge]][coverage-result]
[![Dependency Status][dep-badge]][dep-status]

## Installation

Install using npm:

    $ npm install tracktics-mixpanel

## Usage

Basic usage that integrates with Mixpanel in a simple jQuery app:

```html
<button id="purchase-button"
        type="button"
        data-tracktics-on="click"
        data-tracktics-event="Signed Up">Sign Up Now!</button>
```

```js
'use strict';

var $ = require('jquery'),
    tracktics = require('tracktics'),
    tracker = tracktics();

// Register the Mixpanel plugin.
tracker.use(require('tracktics-mixpanel')());

$(document).ready(function() {
    // Add event listeners for mouse events on elements that have had
    // data-tracktics-* attributes defined.
    tracker.bind();
});
```

## Declarative Analytics Tracking

tracktics-mixpanel only requires `data-tracktics-event` for event tracking.
Beyond this, any `data-tracktics-*` attributes may be specified to send
additional data to Mixpanel.

## API

### `tracktics-mixpanel()`

```js
var tracktics = require('tracktics'),
    trackticsMixpanel = require('tracktics-mixpanel'),
    tracker = tracktics();

tracker.use(trackticsMixpanel());
```

The main tracktics-mixpanel export, `tracktics-mixpanel` is a factory function
for generating tracktics-mixpanel plugin instances.  Calling this method will
return an object that implements page and event tracking for Mixpanel.

### `#trackPage(url)`

Method for manual page tracking.

### `#trackEvent(action, properties)`

Method for manual event tracking.

## License

MIT

[build-badge]: https://img.shields.io/travis/jimf/tracktics-mixpanel/master.svg
[build-status]: https://travis-ci.org/jimf/tracktics-mixpanel
[npm-badge]: https://img.shields.io/npm/v/tracktics-mixpanel.svg
[npm]: https://www.npmjs.org/package/tracktics-mixpanel
[coverage-badge]: https://img.shields.io/coveralls/jimf/tracktics-mixpanel.svg
[coverage-result]: https://coveralls.io/r/jimf/tracktics-mixpanel
[dep-badge]: https://img.shields.io/david/jimf/tracktics-mixpanel.svg
[dep-status]: https://david-dm.org/jimf/tracktics-mixpanel
[tracktics]: https://github.com/jimf/tracktics
