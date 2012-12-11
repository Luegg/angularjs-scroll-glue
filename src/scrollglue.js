(function(angular){
    'use strict';

    angular.module('luegg.directives', [])
    .directive('scrollGlue', function(){
        return {
            priority: 1,
            scope: true,
            link: function(scope, $el, attrs){
                var el = $el[0],
                    autoScrollOn = true;

                function scrollToBottom(){
                    el.scrollTop = el.scrollHeight;
                }

                function shouldActivateAutoScroll(){
                    return el.scrollTop + el.clientHeight == el.scrollHeight;
                }

                scope.$watch(function(){
                    if(autoScrollOn){
                        scrollToBottom();
                    }
                });

                el.addEventListener('scroll', function(){
                    autoScrollOn = shouldActivateAutoScroll();
                });
            }
        };
    });
}(angular));