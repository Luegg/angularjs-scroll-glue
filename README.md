# angular-scroll-glue [![Build Status](https://travis-ci.org/Luegg/angularjs-scroll-glue.svg?branch=master)](https://travis-ci.org/Luegg/angularjs-scroll-glue)

An AngularJs directive that automatically scrolls to the bottom of an element on changes in its scope.

## Install
#### Bower
```bash
$ bower install angular-scroll-glue --save
```

## Usage
```javascript
// Add `luegg.directives` to your module's dependencies.
angular.module('yourModule', [
	...,
	'luegg.directives'
]);
```

```html
<div scroll-glue>
	<!-- Content here will be "scroll-glued". -->
</div>

<div scroll-glue="glued">
	<!-- Content here will be "scroll-glued" if the passed expression is truthy. -->
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
