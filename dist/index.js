'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PropType = undefined;

var _middleware = require('./middleware');

Object.keys(_middleware).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _middleware[key];
        }
    });
});

var _actions = require('./actions');

Object.keys(_actions).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _actions[key];
        }
    });
});

var _constants = require('./constants');

Object.keys(_constants).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _constants[key];
        }
    });
});

var _reducer = require('./reducer');

Object.keys(_reducer).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _reducer[key];
        }
    });
});

var _selectors = require('./selectors');

Object.keys(_selectors).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _selectors[key];
        }
    });
});

var _react = require('react');

var PropType = _react.PropTypes.shape({
    t: _react.PropTypes.func.isRequired,
    tc: _react.PropTypes.func.isRequired,
    tt: _react.PropTypes.func.isRequired,
    tu: _react.PropTypes.func.isRequired,
    tm: _react.PropTypes.func.isRequired
});

exports.PropType = PropType;