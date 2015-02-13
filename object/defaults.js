( function ( _n, toString, objClass ) {
    
    'use strict';

    _n.defaults = function ( obj, source ) {
        
        if ( toString.call( obj ) !== objClass ) {
            return obj;
        }

        if ( toString.call( source ) !== objClass ) {
            source = {};
        }
        
        var prop;

        for ( prop in source ) {
            if ( obj[ prop ] === void 0 ) {
                obj[ prop ] = source[ prop ];
            }
        }
    
        return obj;

    };

} ( window._n = window._n || {},
    Object.prototype.toString,
    '[object Object]' ) );