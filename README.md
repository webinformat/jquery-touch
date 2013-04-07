# jquery-simple-touch
A very simple jQuery support for Touch events. I initialy developed this plugin to be easily used with Backbone.

## Usage

### Swipe
<pre>
$slides.on('swipe', function (oEvt, oDir) {
	if (oDir.type === "left") {
		console.log('swiping left');
	} else {
		console.log('swiping right');
	}
});
</pre>

### Swipe Left
<pre>
$slides.on('swipeleft', function (oEvt, oDir) {
	console.log('swiping left');
});
</pre>

### Swipe Right
<pre>
$slides.on('swiperight', function (oEvt, oDir) {
	console.log('swiping right');
});
</pre>

### Tap
<pre>
$('.slider-paginator li').on('tap', function () {
	console.log('tapping');
});
</pre>

### Double Tap
<pre>
$('.slider-paginator').on('doubletap', function () {
	console.log('double tapping');
});
</pre>

### Delegation
<pre>
$('.slider-paginator').on('tap', 'li', function () {
	console.log('tapping');
});
</pre>

### Backbone
<pre>
var MyView = Backbone.View.extend({

	...

	events: {
		'tap .social-posts-nav a': 'selectPost',
		'swipe .posts': 'swipe'
	},

	...

});
</pre>

### AMD Support
<pre>
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

	    // your code here

    });

});
</pre>


## Tested browsers
* iOS 6.1
* iOS 5.1

## Missing
1. Integration with Bower
1. Improve Examples
1. Increment browser testing coverage

