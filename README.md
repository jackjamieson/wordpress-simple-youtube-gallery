# wordpress-simple-youtube-gallery
Uses the same code as the SYG but packaged into an easy to use form for WordPress using a shortcode.

### Installation & Use
Download the zip file from the `bin` folder and upload it to WordPress.

Wherever you want the gallery to show up, use the shortcode: `[yt_playlist_gal]`


### Shortcode params

`every`, `limit`, `playlist`, `key`

`playlist` and `key` are required otherwise the gallery will not show up.  The `key` is your YouTube Data API key which can be found from the Google Developers Console.

The playlist ID can be found from the back end of the playlist URL off of YouTube.

`every` corresponds to how many videos you want to display until a line break.  For example if `every="3"` then there will be 3 videos, and then a new row of videos will start which also can have a maximum of 3.  Be aware that the line break can occur before this if the surrounding container is too small.  `every` defaults to 3 if you do not specify.

`limit` is the number of videos from the playlist you want to pull.  `limit` defaults to 6 if you do not specify.

### Complete example

`[yt_playlist_gal limit="10" every="5" playlist="your-playlist-here" key="your-key-here"]`
