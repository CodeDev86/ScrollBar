$().ready(function () {
    $(".scrollBar.bottomScrollBlock").draggable(
        {
            containment: "parent",
            drag: function(event, ui) {

                var bottomScrollBarContainer = $(".scrollBar.scrollBarBottom");
                var content = $(".content");

                var contentWidth = content.width();
                var bottomScrollBarContainerSize = bottomScrollBarContainer.width();

                var contentRatio = 1 - (bottomScrollBarContainerSize/contentWidth);

                var currentPosistion = content.css("left");
                var positionChange = ui.position.left - lastBottomScrollBarPosition 
                lastBottomScrollBarPosition = ui.position.left;

                content.css("left", "-=" + positionChange * contentRatio);

                $("#contentPosistionTop").text(content.css("top"));
                $("#contentPosistionLeft").text(content.css("left"));
                $("#contentRatioBottom").text(contentRatio.toFixed(2) + "%");

                $("#bottomOffsetTop").text(ui.offset.top.toFixed(2));
                $("#bottomOffsetLeft").text(ui.offset.left.toFixed(2));
                $("#bottomPosistionTop").text(ui.position.top.toFixed(2));
                $("#bottomPosistionLeft").text(ui.position.left.toFixed(2));
            }
        }); 
    $(".scrollBar.rightScrollBlock").draggable(
        {
            containment: "parent",
            drag: function(event, ui) {
                var rightScrollBarContainer = $(".scrollBar.scrollBarRight");
                var content = $(".content");
                var viewPort = $(".viewPort");
                
                var viewPortHeight = viewPort.height();
                var contentHeight = content.height();
                var rightScrollBarContainerSize = rightScrollBarContainer.height();
                
                var contentRatio = (rightScrollBarContainerSize/(contentHeight - viewPortHeight));
                
                var currentPosistion = content.css("left");
                var positionChange = ui.position.top - lastRightScrollBarPosition 
                lastRightScrollBarPosition = ui.position.top;

                content.css("top", "-=" + positionChange * contentRatio);

                $("#contentPosistionTop").text(content.css("top"));
                $("#contentPosistionLeft").text(content.css("left"));
                $("#contentRatioRight").text(contentRatio.toFixed(2) + "%");

                $("#rightOffsetTop").text(ui.offset.top.toFixed(2));
                $("#rightOffsetLeft").text(ui.offset.left.toFixed(2));
                $("#rightPosistionTop").text(ui.position.top.toFixed(2));
                $("#rightPosistionLeft").text(ui.position.left.toFixed(2));
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