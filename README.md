# angular-scroll-glue [![Build Status](https://travis-ci.org/Luegg/angularjs-scroll-glue.svg?branch=master)](https://travis-ci.org/Luegg/angularjs-scroll-glue)

An AngularJs directive that automatically scrolls to the bottom of an element on changes in its scope.

## Install
### Bower
```bash
$ bower install angular-scroll-glue --save
```

### npm
```bash
$ npm i angularjs-scroll-glue
```

## Usage

1. Insert the script into your HTML:
	```html
	...
	<script src="/components/angular-scroll-glue/src/scrollglue.js"></script>
	...
	```

2. Import the directive into your Angular app:
	```javascript
	// Add `luegg.directives` to your module's dependencies.
	angular.module('yourModule', [
		...,
		'luegg.directives'
	]);
	```

3. Add the directive to your html:
	```html
	<div scroll-glue>
		<!-- Content here will be "scroll-glued" -->
	</div>
	```

The `scroll-glue`attribute glues the content to the bottom by default. You can set other directions with the attribute name, like `scroll-glue-bottom`, `scroll-glue-top`, `scroll-glue-left` or `scroll-glue-right`.

If you assign a variable name to the `scroll-glue` attribute that is present in the scope and it's true, it'll start glued to the glue direction defined in the attribute name:
```javascript
// ...
$scope.glued = true;
// ...
```
```html
<div scroll-glue="glued">
	<!-- Content here will start and will be "scroll-glued" -->
</div>
```


**More information can be found in the [live demo](#live-demo).**

## Live demo
[Demo Plunk](http://plnkr.co/edit/wxTyp7PpyxJOHSlUumVC?p=preview)

## License (MIT)

Copyright (C) 2013 Luegg

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
