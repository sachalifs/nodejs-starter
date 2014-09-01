/**
 * Module dependencies.
 */

var page = require('visionmedia/page.js');
var domify = require('component/domify');
var user = require('../user/user.js');
var empty = require('yields/empty');
var area51 = require('./area51.jade');

/**
 * Define Area51's restricted route
 */

page('/restricted', user.required, function(ctx, next) {
  var container = document.querySelector('section.site-content');

  empty(container)
    .appendChild(domify(area51({
      user: user
    })));
});
