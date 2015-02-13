
# Ajax



// success
// Type: Function( Anything data, String textStatus, jqXHR jqXHR )

// error
// Type: Function( jqXHR jqXHR, String textStatus, String errorThrown )

// complete
// Type: Function( jqXHR jqXHR, String textStatus )

//jqXHR.done(function( data, textStatus, jqXHR ) {});
//jqXHR.fail(function( jqXHR, textStatus, errorThrown ) {});
//jqXHR.always(function( data|jqXHR, textStatus, jqXHR|errorThrown ) { });

    
var nnn = _n.ajax( 'delay.php', {
    data: 't=1&f=test2.txt',
    timeout: 2000,
    success: function ( data, ddd, ccc ) {
        
    },
    error: function ( data, ddd, ccc ) {
        
    },
    complete: function ( data, ddd, ccc ) {
        
    }
} );