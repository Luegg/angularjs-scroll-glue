(function(angular, undefined){
    'use strict';

    angular.module('luegg.directives', [])
    .directive('scrollGlue', function(){
        function unboundState(initValue){
            var activated = initValue;
            return {
                getValue: function(){
                    return activated;
                },
                setValue: function(value){
                    activated = value;
                }
            };
        }

        function oneWayBindingState(attr, scope){
            return {
                getValue: function(){
                    return scope.$eval(attr);
                },
                setValue: function(){}
            }
        }

        function twoWayBindingState(attr, scope){
            return {
                getValue: function(){
                    return scope[attr];
                },
                setValue: function(value){
                    if(value !== scope[attr]){
                        scope.$apply(function(){
                            scope[attr] = value;
                        });
                    }
                }
            };
        }

        function createActivationState(attr, scope){
            if(attr !== ""){
                if(scope[attr] !== undefined){
                    return twoWayBindingState(attr, scope);
                } else {
                    return oneWayBindingState(attr, scope);
                }
            } else {
                return unboundState(true);
            }
        }

        return {
            priority: 1,
            restrict: 'A',
            link: function(scope, $el, attrs){
                var el = $el[0],
                    activationState = createActivationState(attrs.scrollGlue, scope);

                function scrollToBottom(){
                    el.scrollTop = el.scrollHeight;
                }

                function onScopeChanges(scope){
                    if(activationState.getValue()){
                        scrollToBottom();
                    }
                }

                function shouldActivateAutoScroll(){
                    // + 1 catches off by one errors in chrome
                    return el.scrollTop + el.clientHeight + 1 >= el.scrollHeight;
                }

                function onScroll(){
                    activationState.setValue(shouldActivateAutoScroll());
                }

                scope.$watch(onScopeChanges);
                $el.bind('scroll', onScroll);
            }
        };
    });
}(angular));
