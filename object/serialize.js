
( function ( _n, encode ) {
    
    'use strict';

    _n.serialize = function ( obj ) {
        
        var str = [], p;

        for ( p in obj ) {
            if ( obj.hasOwnProperty( p ) ) {
                str.push( encode( p ) + '=' + encode( obj[ p ] ) );
            }
        }

        return str.join( '&' );

    };

} ( window._n = window._n || {},
    encodeURIComponent ) );

/*

_h

_n
_u
_N

*/