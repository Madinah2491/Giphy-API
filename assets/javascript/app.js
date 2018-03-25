//1. create an array of strings called topics
//2. take topics to create buttons 
//3. use a loop that appends a button for rach string
//4. when button is clicked 10 static gifs appear
//5. when gif is clicked it should animate
//6. under each gif a rating should show provided by giphy api
$(document).ready(function(){
//1. an array of strings each index is a button on html
    var topics= ["happiness", "meditation", "travel", "laughing"];

    //makes buttons clickable
    $(":button").on("click", function() {
        console.log("we got clicked")
        var action = $(this).attr("data-action");
        console.log(action)

        $.ajax({
            url: "https://api.giphy.com/v1/gifs/search?q=" + action + "&api_key=CqFL5BMF7KOPEkwnQGLYb4UUAz0rnbKj&limit=10&rating=G",
            method: "GET"
        }) .then(function(gifs){
            console.log(gifs, "these are our gifs")
            console.log(gifs.data[0].images.preview_gif.url)
            for (var i=0; i < gifs.data.length; i++){
            var gifImage = $("<img>");
            gifImage.attr("src", gifs.data[i].images.preview_gif.url);
            $("#gifs_here").append(gifImage)
            }
        })
    })    //this signifies the button being clicked

    

    //})
    // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=CqFL5BMF7KOPEkwnQGLYb4UUAz0rnbKj";

    console.log("hello")
    // var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=" + topics[0] + "&api_key=CqFL5BMF7KOPEkwnQGLYb4UUAz0rnbKj&q=&limit=10&rating=G");
    //     xhr.done(function(data) { console.log("success got data", data); });


    
//     newFunction(xhr)
//     .then(function(response){
//         console.log(xhr)
        
// }

   // var results = response.data;

//loop that appends a button for each string
// for (var i=0; i < topics.length; i++);

// $("#button").append(topics.length)
//     for (var i = 0; i < results.length; i++) {
//     var gifDiv = $("<div class='item'>");
   
//     var rating = results[i].rating;
//         ///rating
//     var p = $("<p>").text("Rating: " + rating);

//     var personImage = $("<img>");
//     Image.attr("src", results[i].images.fixed_height.url);

//     gifDiv.append(p);
//     gifDiv.append(topicsImage);

//     $("#gifs-appear-here").append(gifDiv);
//     }
// }) 

// function newFunction(xhr) {
//     return $.ajax({
//         url: xhr,
//         method: "GET"
//     });
// }
    })