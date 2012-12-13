(function(angular, undefined){
    'use strict';

    angular.module('luegg.directives', [])
    .directive('scrollGlue', function(){
        return {
            priority: 1,
            scope: true,
            link: function(scope, $el, attrs){
                var el = $el[0];

                if(attrs.scrollGlueOn === undefined){
                    attrs.$set('scrollGlueOn', 'true');
                }

                function scrollToBottom(){
                    el.scrollTop = el.scrollHeight;
                }

                function shouldActivateAutoScroll(){
                    return el.scrollTop + el.clientHeight == el.scrollHeight
                        ? 'true'
                        : 'false';
                }

                scope.$watch(function(){
                    if(attrs.scrollGlueOn === 'true'){
                        scrollToBottom();
                    }
                });

                el.addEventListener('scroll', function(){
                    attrs.$set('scrollGlueOn', shouldActivateAutoScroll());
                });
            }
        };
    });
}(angular));