

( function ( _n ) {
    
    'use strict';

    _n.ajax = function ( url, opts ) {

        opts = opts || {};

        var timeout, 
            isTimeout,
            methods,
            emptyFn = function () {},
            xhr = window.XMLHttpRequest ? new XMLHttpRequest() : false;

        if ( !xhr ) {
            return;
        }
            
        opts.success = opts.success || emptyFn; 
        opts.error = opts.error || emptyFn;
        opts.complete = opts.complete || emptyFn;
        
        if ( opts.data && opts.type !== 'POST' ) {
            url += ( ( url.indexOf( '?' ) > -1 ) ? '&' : '?' ) + opts.data;
        }

        xhr.onreadystatechange = function () {
            
            var optsCallback, statusText, args;
            
            if ( xhr.readyState === 4 ) {

                clearTimeout( timeout );

                if ( xhr.status === 200 ) {
                    optsCallback = opts.success;
                    statusText = 'success';
                    args = [ xhr.responseText, statusText, xhr ];
                } else {
                    optsCallback = opts.error;
                    if ( isTimeout ) {
                        statusText = 'timeout';
                    } else {
                        statusText = ( xhr.status === 0 ) ? 'abort' : 'error';
                    }
                    args = [ xhr, statusText, xhr.status ];
                }
                
                optsCallback.apply( methods, args );
                opts.complete.apply( methods, [ xhr, statusText ] );
                
            }
            
        };
   
        if ( opts.timeout ) {
            timeout = setTimeout( function () { 
                isTimeout = true; 
                xhr.abort(); 
            }, opts.timeout );
        }

        if ( opts.type === 'POST' ) {
            xhr.open( 'POST', url, true );
            xhr.setRequestHeader( 'X-Requested-With', 'XMLHttpRequest' );
            xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
            xhr.send( opts.data );
        } else {
            xhr.open( 'GET', url, true );
            xhr.send();
        }

        return xhr;
        
    };


} ( window._n = window._n || {} ) );

