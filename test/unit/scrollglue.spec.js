'use strict';

describe('the scroll glue directive', function(){
    var scope, $compile,
        templates = {
            simple: '<div style="height: 40px; overflow-y: scroll" scroll-glue><div style="height: 100px">hi {{name}}</div></div>'
        };

    beforeEach(module('luegg.directives'));

    beforeEach(inject(function($rootScope, _$compile_){
        scope = $rootScope;
        $compile = _$compile_;
    }));

    afterEach(function(){
        scope.$destroy();
    });

    function compile(template){
        return $compile($(template))(scope).appendTo($('body'));
    }

    it('should scroll to bottom of element on changes', function(){
        var $element = compile(templates.simple),
            element = $element[0];

        scope.name = "World";
        scope.$digest();

        expect(element.scrollTop).toBe(element.scrollHeight - element.clientHeight);
    });
});