
var backgrounds = ["images/backgroundImage0",
                           "images/backgroundImage1",
                           "images/backgroundImage2",
                           "images/backgroundImage3",
                           "images/backgroundImage4",
                           "images/backgroundImage5",
                           "images/backgroundImage6",
                           "images/backgroundImage7",
                           "images/backgroundImage8",
                           "images/backgroundImage9",
                           "images/backgroundImage10",
                           "images/backgroundImage11", ]
function randomBackgroundImage(){
    var rand = Math.floor((Math.random() * 10) + 1);
    var randToString = rand.toString();
    var filePath = "url('" + "images/backgroundImage" + randToString + ".jpg" + "')";
    var x = document.getElementsByClassName("fullScreen-bg-img");
    x[0].style.backgroundImage = filePath;
}
