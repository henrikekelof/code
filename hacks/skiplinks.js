
// ==|== Fixing "Skip to content" links =============================================== //
// http://www.nczonline.net/blog/2013/01/15/fixing-skip-to-content-links/

( function ( win ) {

    'use strict';

    function hashChangeHandler() {
        var element = document.getElementById( location.hash.substring( 1 ) );
        if ( element ) {
            if ( !/^(?:a|select|input|button|textarea)$/i.test( element.tagName ) ) {
                element.tabIndex = -1;
            }
            element.focus();
        }
    }

    if ( win.addEventListener ) {
        win.addEventListener( 'hashchange', hashChangeHandler, false );
    } else if ( win.attachEvent ) {
        win.attachEvent( 'onhashchange', hashChangeHandler );
    }

} ( window ) );

