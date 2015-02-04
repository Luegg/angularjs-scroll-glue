
(function(angular, undefined){
    'use strict';
    angular.module('luegg.directives', [])
    .directive('scrollGlue', ['$parse', function($parse){
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

        function oneWayBindingState(getter, scope){
            return {
                getValue: function(){
                    return getter(scope);
                },
                setValue: function(){}
            }
        }

        function twoWayBindingState(getter, setter, scope){
            return {
                getValue: function(){
                    return getter(scope);
                },
                setValue: function(value){
                    if(value !== getter(scope)){
                        scope.$apply(function(){
                            setter(scope, value);
                        });
                    }
                }
            };
        }

        function createActivationState(attr, scope){
            if(attr !== ""){
                var getter = $parse(attr);
                if(getter.assign !== undefined){
                    return twoWayBindingState(getter, getter.assign, scope);
                } else {
                    return oneWayBindingState(getter, scope);
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
                var scrollParent = false;
                var height = 0;
                function scrollToBottom(){
                  if (scrollParent) {
                    if (el.parentElement.scrollHeight > 0) {
                      el.parentElement.scrollTop = height;
                    } else {
                      document.body.scrollTop = height;
                    }
                  } else {
                    el.scrollTop = el.scrollHeight;
                  }
                }

                function onScopeChanges(scope){
                    if(activationState.getValue() && shouldActivateAutoScroll()){
                        scrollToBottom();
                    }
                }

                function shouldActivateAutoScroll(){
                    // + 1 catches off by one errors in chrome
                    var result = el.scrollTop + el.offsetHeight + 1 <= el.scrollHeight;
                    if (!result) {
                      var scrollHeight = el.parentElement.scrollHeight;
                      if (scrollHeight === 0) {
                        scrollHeight = document.body.scrollHeight;
                      }
                      height = scrollHeight - window.innerHeight;
                      result = height !== 0;
                      scrollParent = true;
                    } else {
                      scrollParent = false;
                    }
                    return result;
                }

                function onScroll(){
                    activationState.setValue(shouldActivateAutoScroll());
                }

                scope.$watch(onScopeChanges);
                $el.bind('scroll', onScroll);
            }
        };
    }]);
}(angular));