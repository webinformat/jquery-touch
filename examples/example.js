/*global requirejs, require*/
/*jshint browser:true*/

/**
 * @fileoverview Script for jQuery Simple Touch Example
 * @since 2013-03-27
 */

// config requirejs
requirejs.config({
    paths: {
        jquery: 'http://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min',
        touch: '../jquery-simple-touch'
    }
});

require(['jquery', 'touch'], function ($) {

    "use strict";

    $(document).ready(function () {

	    var index = 0,
			$slides = $('.slide'),
			$wrapper = $('.slider-wrapper'),
			w = $slides.width();

	    $slides.on('swipe', function (oEvt, oDir) {
			if (index < $slides.length - 1 && oDir.type === "left") {
				index += 1;
			} else if (index > 0 && oDir.type === "right") {
				index -= 1;
			}
			$wrapper.css('left', -1 * index * w + 'px');
	    });

	    $('.slider-paginator').on('click tap', 'li', function () {
			index = parseInt($(this).attr('data-id'), 10);
			$wrapper.css('left', -1 * index * w + 'px');
	    });

    });

});