# jquery-simple-touch
A very simple jQuery's plugin for Touch events. I initially developed this plugin to be easily used with Backbone.

## Install
### Bower
`bower install jquery-simple-touch`

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
$slides.on('swipeleft', function (oEvt) {
	console.log('swiping left');
});
</pre>

### Swipe Right
<pre>
$slides.on('swiperight', function (oEvt) {
	console.log('swiping right');
});
</pre>

### Tap
<pre>
$('.slider-paginator li').on('tap', function (oEvt) {
	console.log('tapping');
});
</pre>

### Double Tap
<pre>
$('.slider-paginator li').on('doubletap', function (oEvt) {
	console.log('double tapping');
});
</pre>

### Delegation
<pre>
$('.slider-paginator').on('tap', 'li', function (oEvt) {
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
* Safari iOS 6.1
* Safari iOS 5.1
* Chrome iOS 6.1
* Android Browser 4.2.2
* Android Browser 4.1.2
* Android Browser 4.0.3

## Missing
1. Increment browser testing coverage
1. Improve Examples

