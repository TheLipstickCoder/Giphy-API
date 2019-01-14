$( document ).ready(function() {

var topics = ["puppy", "kitten", "bunny", "giraffe", "kangaroo", "monkey"]
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchField + "&api_key=gO6R6KmAODAKUaavyQ8cfGhrDjeWD5EI&limit=10";
var searchField = $(".searchField").val().trim();


function createBtn () {
    $("gifResults").empty();
    for (i = 0; i < topics.length; i++) {
        var newBtn = $("<button>");
        newBtn.attr("label", topics[i]);
        newBtn.addClass("btn btn-dark");
        newBtn.addClass("animals"); 
        newBtn.text(topics[i]);
        $(".buttons").append(newBtn);
};
}

//Click events for buttons created in forLoop (assistance from Google, StackOverflow, and prior class activities)
$(".animals").on ("click", function(){
    var searchTerms = $('.searchField').val().trim();
    topics.push(searchTerms);
    var searchBtn = $("<button>");
    searchBtn.attr("label", searchTerms);
    newBtn.addClass("btn btn-dark");
    $(".buttons").append(searchBtn);
});

$(".buttons").on("click", function(){
    event.preventDefault();
    $("gifResults").empty();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchField + "&api_key=gO6R6KmAODAKUaavyQ8cfGhrDjeWD5EI&limit=10";
    var searchField = $(".searchField").val().trim();
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data;
        console.log(response);
        for (var i = 0; i<results.length; i++){
			var gifDiv = $("<div>");
            var gifRating = $("<p>").text("This gif is rated: " + results[i].rating);
            $("gifResults").append(gifDiv);
            gifDiv.append(gifRating);
        };
    });

    createBtn();
    
});

createBtn();

});
//I feel like I am almost there but whenever I click the dynamically created buttons, new blank buttons are added and the gifs are not displayed. 
