
// jshint loopfunc: true

// ==|== isArray, isFunction etc ====================================================== //

// isObject is true for plain Objects, not Arrays etc.

( function ( _n, toString, types ) {
    
    'use strict';

    var i, j;

    for ( i = 0, j = types.length; i < j; i += 1 ) {
        ( function ( name ) {
            _n[ 'is' + name ] = function ( obj ) {
                return toString.call( obj ) === '[object ' + name + ']';
            };
        } ( types[ i ] ) );
    }

    _n.isArray = Array.isArray || function ( obj ) {
        return toString.call( obj ) === '[object Array]';
    };

    _n.isElement = function ( obj ) {
        return !!( obj && obj.nodeType === 1 );
    };

} ( window._n = window._n || {}, 
    Object.prototype.toString, 
    [ 'Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Object' ] ) );

// Usage: 
// _n.isFunction( jQuery );
// => true

