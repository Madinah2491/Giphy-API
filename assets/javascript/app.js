$(document).ready(function(){
//1. an array of strings each index is a button on html
    var topics= ["meditation", "travel", "laughing", "happiness"];

//2. take topics to create buttons 
    //makes buttons clickable// //this signifies the button being clicked
    $(":button").on("click", function() {
        console.log("we got clicked")
        var action = $(this).attr("data-action");
        console.log(action)

        //4. when button is clicked 10 static gifs appear
        $.ajax({
            url: "https://api.giphy.com/v1/gifs/search?q=" + action + "&api_key=CqFL5BMF7KOPEkwnQGLYb4UUAz0rnbKj&limit=10",
            method: "GET"
        }) .then(function(gifs){
            console.log(gifs, "these are our gifs")
            console.log(gifs.data[0].images.preview_gif.url)

            //3. loop that appends a button for each string/index
            for (var i=0; i < gifs.data.length; i++){
            var gifImage = $("<img>");
            //telling the comp. exactly where the info I'm looking for is located within the object in console
            gifImage.attr("src", gifs.data[i].images.preview_gif.url);
            $("#gifs_here").append(gifImage)
            console.log(gifs.data[0].rating)

            //6. under each gif a rating should show provided by giphy api
            var gifRating= $(".rating");
            gifRating.attr("src", gifs.data[i].rating);
            $("#gif_rating").append(gifRating)
            }
        })
    })   
})