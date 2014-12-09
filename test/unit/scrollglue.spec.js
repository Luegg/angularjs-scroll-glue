'use strict';

describe('the scroll glue directive', function(){
    var scope, $compile,
        templates = {
            simple: '<div style="height: 40px; overflow-y: scroll" scroll-glue><div style="height: 100px">hi {{name}}</div></div>',
            always: '<div style="height: 40px; overflow-y: scroll" scroll-glue always-scroll="true"><div style="height: 100px">hi {{name}}</div></div>',
            deactivated: '<div style="height: 40px; overflow-y: scroll" scroll-glue="false"><div style="height: 100px">hi {{name}}</div></div>',
            withBinding: '<div style="height: 40px; overflow-y: scroll" scroll-glue="glued"><div style="height: 100px">hi {{name}}</div></div>',
            withSubPropertyBinding: '<div style="height: 40px; overflow-y: scroll" scroll-glue="prop.glued"><div style="height: 100px">hi {{name}}</div></div>',
        };

    beforeEach(module('luegg.directives'));

    beforeEach(inject(function($rootScope, _$compile_, _$timeout_){
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

    it('should be deactivated if the scrollGlue attribute is set to "false"', function(){
        var $element = compile(templates.deactivated),
            element = $element[0];

        scope.name = "World";
        scope.$digest();

        expect(element.scrollTop).toBe(0);
    });

    it('should always auto scroll if scrollGlue attribute is set to "always"', async(function(done){
        var $element = compile(templates.always),
            element = $element[0];

        scope.$digest();
        element.scrollTop = 0;

        setTimeout(function(){
            scope.name = "World";
            scope.$digest();

            expect(element.scrollTop).toBe(element.scrollHeight - element.clientHeight);

            done();
        }, 10)
    }));

    it('should turn off auto scroll after user scrolled manually', async(function(done){
        var $element = compile(templates.simple),
            element = $element[0];

        scope.$digest();
        element.scrollTop = 0;

        setTimeout(function(){
            scope.name = "World";
            scope.$digest();

            expect(element.scrollTop).toBe(0);

            done();
        }, 10);
    }));

    it('should turn on auto scroll after user scrolled manually to bottom of element', async(function(done){
        var $element = compile(templates.simple),
            element = $element[0];

        scope.$digest();
        element.scrollTop = 0;

        setTimeout(function(){
            scope.$digest();
            expect(element.scrollTop).toBe(0);

            element.scrollTop = element.scrollHeight;
            setTimeout(function(){
                scope.$digest();

                expect(element.scrollTop).toBe(element.scrollHeight - element.clientHeight);

                done();
            });
        });
    }));

    it('should turn off when the bound value is false', function(){
        scope.glued = true;

        var $element = compile(templates.withBinding),
            element = $element[0];

        scope.glued = false;
        scope.$digest();

        expect(element.scrollTop).toBe(0);
    });

    it('should update the bound value', async(function(done){
        scope.glued = true;

        var $element = compile(templates.withBinding),
            element = $element[0];

        scope.$digest();

        element.scrollTop = 0;

        setTimeout(function(){
            expect(scope.glued).toBe(false);
            done();
        });
    }));

    it('should update the bound value in sub properties', async(function(done){
        scope.prop = {
            glued: true
        };

        var $element = compile(templates.withSubPropertyBinding),
            element = $element[0];

        scope.$digest();

        element.scrollTop = 0;

        setTimeout(function(){
            expect(scope.prop.glued).toBe(false);
            done();
        });
    }));
});