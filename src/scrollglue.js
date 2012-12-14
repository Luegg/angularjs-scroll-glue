(function(angular, undefined){
    'use strict';

    function fakeNgModel(initValue){
        initValue = initValue !== undefined ? initValue : true;

        return {
            $setViewValue: function(value){
                this.$viewValue = value;
            },
            $viewValue: initValue
        };
    }

    angular.module('luegg.directives', [])
    .directive('scrollGlue', function(){
        return {
            priority: 1,
            require: ['?ngModel'],
            restrict: 'A',
            link: function(scope, $el, attrs, ctrls){
                var el = $el[0],
                    ngModel = ctrls[0] || fakeNgModel();

                function scrollToBottom(){
                    el.scrollTop = el.scrollHeight;
                }

                function shouldActivateAutoScroll(){
                    return el.scrollTop + el.clientHeight == el.scrollHeight;
                }

                scope.$watch(function(){
                    if(ngModel.$viewValue){
                        scrollToBottom();
                    }
                });

                $el.bind('scroll', function(){
                    ngModel.$setViewValue(shouldActivateAutoScroll());
                    scope.$digest();
                });
            }
        };
    });
}(angular));