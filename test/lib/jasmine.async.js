(function(global, runs, waitsFor){
    'use strict';

    function async(fn){
        return function(){
            var done = false,
                complete = function(){
                    done = true;
                };

            runs(function(){
                fn(complete);
            });

            waitsFor(function(){
                return done;
            });
        }
    }

    global.async = async;
}(this, runs, waitsFor));