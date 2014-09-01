/**
 * Module dependencies.
 */

var page = require('visionmedia/page.js');
var domify = require('component/domify');
var empty = require('yields/empty');
var splash = require('./splash.jade');

page('/', function(ctx, next) {
  var container = document.querySelector('section.site-content');

  empty(container)
    .appendChild(domify(splash()));
});