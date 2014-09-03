/**
 * Module dependencies.
 */

var page = require('visionmedia~page.js@1.3.7');
var domify = require('domify');
var empty = require('empty');
var splash = require('./splash');

page('/', function(ctx, next) {
  var container = document.querySelector('section.site-content');

  empty(container)
    .appendChild(domify(splash()));
});