(function () {
    "use strict";
    
    return {
        
    };
}());

var scrollingInterval;

function moveUp() {
    var content = $(".content");
    var currentPosistion = content.css("top");

    scrollingInterval = setInterval(function() {
        content.css("top", "-=1" );
    }, 25)
}

function moveDown() {
    var content = $(".content");
    var currentPosistion = content.css("top");

    scrollingInterval = setInterval(function() {
        content.css("top", "+=1" );
    }, 25)
}

function moveRight() {
    
    var content = $(".content");
    var currentPosistion = content.css("left");
    
    scrollingInterval = setInterval(function() {
        content.css("left", "+=1" );
    }, 25)
}

function moveLeft() {
    var content = $(".content");
    var currentPosistion = content.css("left");

    scrollingInterval = setInterval(function() {
        content.css("left", "-=1" );
    }, 25)
}

function cancelScrolling() {
    clearInterval(scrollingInterval);
}