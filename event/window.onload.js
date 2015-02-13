
// ==|== Window OnLoad ================================================================ //

( function ( _n, win ) {

    'use strict';

    var loaded = false;

    function exec( fn ) {
        if ( Object.prototype.toString.call( fn ) === '[object Function]' ) {
            fn();
        }
    }

    _n.onload = function ( fn ) {
        var old;
        if ( loaded ) {
            exec( fn );
        } else {
            old = win.onload;
            win.onload = function () {
                exec( old );
                exec( fn );
            };
        }
    };

    _n.onload( function () {
        loaded = true;
    } );

} ( window._n = window._n || {}, 
    window ) );

