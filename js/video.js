
        $(document).ready(function() {
            $("#search-btn").on("click", function(event) {
                event.preventDefault();
                $("#video-container").empty()

                // Get form input
                var q = $("#query").val().trim();

                if (q === "") {
                }
                else {
                // var choice = $(this).attr("#query");
                // Run GET request on API
                $.get(
                    "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=" + q + "&type=v3&key=AIzaSyCUsmzBXNXuFnbpmDJlgjgePx_02YjjwA0",
                    function(data) {
                         $.each(data.items, function(i, item) {
                            // Get output
                            var output = getOutput(item);
                            $("#video-container").append(output);
                            // Log data
                            console.log(data);
                            // Clear results
                            $("#results").html("");
                            });
                    });
                return false;
           } });
        });
        // Build output
        function getOutput(item) {
            var videoId = item.id.videoId;

            var iframe_url = "https://www.youtube.com/embed/" + videoId + "?autoplay=10&autohide=10";
         
            var iframe = $('<iframe/>', {
                'frameborder': '0',
                'src': iframe_url,
                'width': '270px',
                'height': '200px'
            });
            return iframe;
        
        }

