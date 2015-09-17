<?php
/*
* Plugin Name: Youtube Playlist Gallery
* Description: Create a responsive YouTube gallery from a playlist with a simple shortcode.
* Version: 1.0
* Author: Jack Jamieson
* Author URI: http://jackjamieson.me
*/

// Use shortcode to display YT Gallery and pull in params to populate yt data api.
function gallery_create($atts){
    $atts = shortcode_atts( array(
        'limit' => '6',
        'every' => '3',
        'playlist' => 'x',
        'key' => 'x'
    ), $atts , 'yt_playlist_gal');
?>
<link rel="stylesheet" type="text/css" href="/wp-content/plugins/wpplugin/style.css">
<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
<script>
// load the params from the shortcode and pass themto the gallery js
var playList = <?php echo "\"" . $atts['playlist'] . "\"" ?>;// The backend of the playlist URL
var LIMIT = <?php echo $atts['limit'] ?>;// Limit the number of videos it pulls from a playlist
var EVERY = <?php echo $atts['every'] ?>;// Create a new line every nth video
var key = <?php echo "\"" . $atts['key'] . "\"" ?>;
</script>
<script src="/wp-content/plugins/wpplugin/gallery.js"></script>
<div id="player"></div>
<div id="rows"></div>
<?php
}
add_shortcode('yt_playlist_gal', 'gallery_create');
?>
