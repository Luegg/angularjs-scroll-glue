# angular-scroll-glue [![Build Status](https://travis-ci.org/stgogm/ng-scroll-glue.svg?branch=master)](https://travis-ci.org/stgogm/ng-scroll-glue)

An AngularJs directive that automatically scrolls to the bottom of an element on changes in its scope.

---------------------------

**IMPORTANT**: This is a fork of [Lukas Wegmann's Angular Scroll Glue}(https://github.com/Luegg/angularjs-scroll-glue). I haven't touched the module's functionality, only the module's name.

If you're switching from Lukas' version you must change the directive name from ´luegg.directives´ to ´ngScrollGlue´.

There's also a minified version available on the ´dist´ folder.

---------------------------

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
	<script src="/components/ng-scroll-glue/dist/scrollglue.js"></script>
	...
	```

	Or the minified version for production:
	```html
	...
	<script src="/components/ng-scroll-glue/dist/scrollglue.min.js"></script>
	...
	```

2. Import the directive into your Angular app:
	```javascript
	// Add `luegg.directives` to your module's dependencies.
	angular.module('yourModule', [
		...,
		'ngScrollGlue'
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
