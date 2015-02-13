<?php

$delay = 0;
$allowed_files = array( "test1.txt", "test2.txt" );
      
if ( $_GET[ "d" ] != null ) {
    $delay = intval( $_GET[ "d" ] );
    if ( $delay > 10 ) {
    	$delay = 10;
    }
    if ( $delay < 0 ) {
    	$delay = 0;
    }
}

set_time_limit(0);
sleep( $delay );

if ( in_array( $_GET[ "f" ], $allowed_urls ) {
    echo file_get_contents( $_GET[ "f" ] ); 
}
      
      