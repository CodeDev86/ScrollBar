$().ready(function () {
    $(".scrollBar.bottomScrollBlock").draggable(
        {
            containment: "parent",
            drag: function(event, ui) {
                $("#bottomOffsetTop").text(ui.offset.top);
                $("#bottomOffsetLeft").text(ui.offset.left);
                $("#bottomPosistionTop").text(ui.position.top);
                $("#bottomPosistionLeft").text(ui.position.left);

                var content = $(".content");
                var currentPosistion = content.css("left");
                var positionChange = ui.position.left - lastBottomScrollBarPosition 
                lastBottomScrollBarPosition = ui.position.left;

                content.css("left", "+=" + positionChange);
            }
        }); 
    $(".scrollBar.rightScrollBlock").draggable(
        {
            containment: "parent",
            drag: function(event, ui) {
                $("#rightOffsetTop").text(ui.offset.top);
                $("#rightOffsetLeft").text(ui.offset.left);
                $("#rightPosistionTop").text(ui.position.top);
                $("#rightPosistionLeft").text(ui.position.left);

                var content = $(".content");
                var currentPosistion = content.css("left");
                var positionChange = ui.position.top - lastRightScrollBarPosition 
                lastRightScrollBarPosition = ui.position.top;

                content.css("top", "+=" + positionChange);
            }}); 
});

var scrollingInterval;
var lastBottomScrollBarPosition = 0;
var lastRightScrollBarPosition = 0;

function moveUp() {
    var rightScrollBar = $(".scrollBar.rightScrollBlock");
    var content = $(".content");
    var currentPosistion = content.css("top");

    scrollingInterval = setInterval(function() {
        content.css("top", "-=1" );
        rightScrollBar.css("top", "-=1" );
        lastRightScrollBarPosition -= 1;
    }, 25)
}

function moveDown() {
    var rightScrollBar = $(".scrollBar.rightScrollBlock");
    var content = $(".content");
    var currentPosistion = content.css("top");

    scrollingInterval = setInterval(function() {
        content.css("top", "+=1" );
        rightScrollBar.css("top", "+=1" );
        lastRightScrollBarPosition += 1;
    }, 25)
}

function moveRight() {
    var bottomScrollBar = $(".scrollBar.bottomScrollBlock");
    var content = $(".content");
    var currentPosistion = content.css("left");

    scrollingInterval = setInterval(function() {
        content.css("left", "+=1" );
        bottomScrollBar.css("left", "+=1" );
        lastBottomScrollBarPosition += 1;
    }, 25)
}

function moveLeft() {
    var bottomScrollBar = $(".scrollBar.bottomScrollBlock");
    var content = $(".content");
    var currentPosistion = content.css("left");

    scrollingInterval = setInterval(function() {
        content.css("left", "-=1" );
        bottomScrollBar.css("left", "-=1" );
        lastBottomScrollBarPosition -= 1;
    }, 25)
}

function cancelScrolling() {
    clearInterval(scrollingInterval);
}