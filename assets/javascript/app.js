//Initializations and APIKey
var authKey = "&api_key=5v9cVdgioPZ045t1fSomBty1JeG9ohLp";
var empty = [''];
var limit = 3;
        $('button').on('click', function () {
            var search = $(this).data('name');
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + authKey + "&rating+G&limit=" +limit;
// Creates AJAX call 
$.ajax({
    url: queryURL,
    method: 'GET'
}).done(function (response) {
    var results = response.data;
//Add to page
    for (var i = 0; i < results.length; i++) {
        var p = $('<p/>');
        p.text(results[i].rating);
        var Images = $('<img/>');
        Images.addClass('Img');
        Images.attr('src', results[i].images.fixed_height.url);
        Images.attr('data-still', results[i].images.fixed_height_still.url)            
        Images.attr('data-animate', results[i].images.fixed_height.url);                    

                        var ImgDiv = $('<div/>');
                            ImgDiv.attr('data-state', 'still');
                            ImgDiv.append(p);
                            ImgDiv.append(Images);
                            ImgDiv.prependTo($('#gifs'));
                    };

                    $('.Img').on('click', function () {
                        var state = $(this).attr('data-state');
                            if (state == 'still') {
                                $(this).attr('src', $(this).data('animate'));
                                $(this).attr('data-state', 'animate');
                            } else {
                                $(this).attr('src', $(this).data('still'));
                                $(this).attr('data-state', 'still');
                            }
                        });
                    });
                });
//To add the buttons
    $('#theButton').on('click', function () {
        var ImgButton = $("#gif-input").val();
        var newButton = $("<button/>").addClass("btn btn-info Images").attr('data-name', ImgButton).html(ImgButton);
        $("#Buttons").append(newButton);
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + ImgButton + authKey + "&rating+G&limit=" + limit;


        $.ajax({
            url: queryURL,
            method: 'GET'
        })
            .done(function (response) {
                var results = response.data;
                    for (var i = 0; i < results.length; i++) {
                        var Div = $('<div/>');
                        var p = $('<p/>');
                        p.text(results[i].rating);

                    var newImage = $('<img/>');
                        newImage.addClass('Img2')
                        newImage.attr('src', results[i].images.fixed_height_still.url);
                        newImage.attr('data-still', results[i].images.fixed_height_still.url);
                        newImage.attr('data-animate', results[i].images.fixed_height.url)
                        newImage.attr('data-state', 'still');

                        Div.append(p);
                        Div.append(newImage);
                        Div.prependTo($('#gifs'));
                }

                $('.Img2').on('click', function () {
                    var state = $(this).attr('data-state');
                        if (state == 'still') {
                            $(this).attr('src', $(this).data('animate'));
                            $(this).attr('data-state', 'animate');
                        } else {
                            $(this).attr('src', $(this).data('still'));
                            $(this).attr('data-state', 'still');
                    }
                });
            });
        $("#gif-input").val("");
        return false;
    })