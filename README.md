# ng-scroll-gluer [![Build Status](https://travis-ci.org/stgogm/ng-scroll-gluer.svg?branch=master)](https://travis-ci.org/stgogm/ng-scroll-gluer)

An AngularJs directive that automatically scrolls to the bottom of an element on changes in its scope.

##Important
This is a fork of [Lukas Wegmann's Angular Scroll Glue](https://github.com/Luegg/angularjs-scroll-glue). I haven't touched the module's functionality, only the module's name.

If you're switching from Lukas' version you must change the directive name from `luegg.directives` to `ngScrollGluer`.

There's also a minified version available in the `dist` folder.

## Install
### Bower
```bash
$ bower install --save ng-scroll-gluer
```

### npm
```bash
$ npm install --save ng-scroll-gluer
```

## Usage
1. Insert the script into your HTML:
	```html
	...
	<script src="/components/ng-scroll-glue/dist/scrollgluer.js"></script>
	...
	```
	Or the minified version for production:
	```html
	...
	<script src="/components/ng-scroll-glue/dist/scrollgluer.min.js"></script>
	...
	```

2. Import the directive into your Angular app:
	```javascript
	/* Add `ngScrollGluer` to your module's dependencies */
	angular.module('App', [
		//...
		'ngScrollGluer'
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

## Example
[Visit example page](https://rawgit.com/stgogm/ng-scroll-gluer/master/example/index.html)
