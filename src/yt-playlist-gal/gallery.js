// Don't need to change this or anything below unless you know what you are doing
var playListURL = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=' + playList + '&key=' + key;
var videoURL= 'http://www.youtube.com/embed/';// Will append videos to this link

function run(){
	$.getJSON(playListURL, function(data) {
        console.log(data);
		var list_data="";
		var limit = 0;
		$.each(data.items, function(i, item) {

			//Limit the number of videos to pull in
			if(limit == LIMIT)
			{
				return false;
			}

			var feedTitle = item.snippet.title;

			var videoID = item.snippet.resourceId.videoId;
			var url = videoURL + videoID;
			var thumb = "http://img.youtube.com/vi/"+ videoID +"/mqdefault.jpg";
			list_data += '<div class="vid"><a href="'+ "#player" +'"onclick="newVid(this.title)" title="'+ url +'"><img class="thumb" alt="'+ feedTitle+'" src="'+ thumb +'"/><br>' + feedTitle + '</a></div>';

			// set the initial video to the first video in the playlist
			if(limit == 0)
			{

				document.getElementById('player').innerHTML = '<iframe width="560" height="315" src="' + url + '" frameborder="0" allowfullscreen></iframe>';

			}

			if((limit+1) % EVERY == 0)// every nth video, break the line
				list_data+= '<p>';
			limit++;
		});

		$(list_data).appendTo("#rows");
	});
}

$(document).ready(function() {
run();// Start the script
});

// Load the new video when the thumbnail is clicked
function newVid(url){
	document.getElementById('player').innerHTML = '<iframe width="560" height="315" src="' + url + '" frameborder="0" allowfullscreen></iframe>';
}
