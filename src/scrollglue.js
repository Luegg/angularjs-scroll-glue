(function(angular, undefined){
    'use strict';

    angular.module('luegg.directives', [])
    .directive('scrollGlue', function(){
        return {
            priority: 1,
            restrict: 'A',
            scope: {
                scrollGlue: "=?"
            },
            link: function(scope, $el){
                var el = $el[0];

                if(scope.scrollGlue === undefined){
                    scope.scrollGlue = true;
                }

                function scrollToBottom(){
                    el.scrollTop = el.scrollHeight;
                }

                function shouldActivateAutoScroll(){
                    // + 1 catches off by one errors in chrome
                    return el.scrollTop + el.clientHeight + 1 >= el.scrollHeight;
                }

                scope.$watch(function(){
                    if(scope.scrollGlue){
                        scrollToBottom();
                    }
                });

                $el.bind('scroll', function(){
                    var activate = shouldActivateAutoScroll();
                    if(activate !== scope.scrollGlue){
                        scope.$apply(function(){ scope.scrollGlue = activate; });
                    }
                });
            }
        };
    });
}(angular));
