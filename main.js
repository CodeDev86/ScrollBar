$().ready(function() {

  calculateScrollBarSize();
  calculateVerticalScrollRatio();
  calculateHorizontalScrollRatio();

  $(".scrollBar.bottomScrollBlock").draggable({
    containment: "parent",
    drag: function(event, ui) {
      var content = $(".content");
      var currentPosistion = content.css("left");
      var positionChange = ui.position.left - lastBottomScrollBarBlockPosition
      lastBottomScrollBarBlockPosition = ui.position.left;

      content.css("left", "-=" + positionChange * horizontalScrollRatio);

      updatePositionReporting(ui);
    }
  });
  $(".scrollBar.rightScrollBlock").draggable({
    containment: "parent",
    drag: function(event, ui) {
      var content = $(".content");
      var currentPosistion = content.css("left");
      var positionChange = ui.position.top - lastRightScrollBarBlockPosition
      lastRightScrollBarBlockPosition = ui.position.top;

      content.css("top", "-=" + positionChange * verticalScrollRatio);

      updatePositionReporting(ui);
    }
  });
});

var scrollingInterval;
var lastBottomScrollBarBlockPosition = 0;
var lastRightScrollBarBlockPosition = 0;
var verticalScrollRatio = 0;
var horizontalScrollRatio = 0;

function moveUp() {
  var rightScrollBar = $(".scrollBar.scrollBarRight");
  var rightScrollBarBlock = $(".scrollBar.rightScrollBlock");
  var content = $(".content");
  var currentPosistion = content.css("top");
  var maxBottomPosition = 0;

  scrollingInterval = setInterval(function() {
    if (lastRightScrollBarBlockPosition > maxBottomPosition) {
      content.css("top", "+=" + 1 * verticalScrollRatio);
      rightScrollBarBlock.css("top", "-=1");
      lastRightScrollBarBlockPosition -= 1;
      updatePositionReporting();
    } else {
      clearInterval(scrollingInterval);
    }
  }, 25)

}

function moveDown() {
  var rightScrollBar = $(".scrollBar.scrollBarRight");
  var rightScrollBarBlock = $(".scrollBar.rightScrollBlock");
  var content = $(".content");
  var currentPosistion = content.css("top");
  var maxBottomPosition = rightScrollBar.height() - rightScrollBarBlock.height();


  scrollingInterval = setInterval(function() {
    if (lastRightScrollBarBlockPosition < maxBottomPosition) {
      content.css("top", "-=" + 1 * verticalScrollRatio);
      rightScrollBarBlock.css("top", "+=1");
      lastRightScrollBarBlockPosition += 1;
      updatePositionReporting();
    } else {
      clearInterval(scrollingInterval);
    }
  }, 25)

  updatePositionReporting();
}

function moveRight() {
  var bottomScrollBar = $(".scrollBar.scrollBarBottom");
  var bottomScrollBarBlock = $(".scrollBar.bottomScrollBlock");
  var content = $(".content");

  var currentPosistion = content.css("left");
  var maxRightPosition = bottomScrollBar.width() - bottomScrollBarBlock.width();

  scrollingInterval = setInterval(function() {
    if (lastBottomScrollBarBlockPosition < maxRightPosition) {
      content.css("left", "-=" + 1 * horizontalScrollRatio);
      bottomScrollBarBlock.css("left", "+=1");
      lastBottomScrollBarBlockPosition += 1;
      updatePositionReporting();
    } else {
      clearInterval(scrollingInterval);
    }
  }, 25)
}

function moveLeft() {
  var bottomScrollBar = $(".scrollBar.scrollBarBottom");
  var bottomScrollBarBlock = $(".scrollBar.bottomScrollBlock");
  var content = $(".content");

  var currentPosistion = content.css("left");
  var maxLeftPosition = 0;

  scrollingInterval = setInterval(function() {
    if (lastBottomScrollBarBlockPosition > maxLeftPosition) {
      content.css("left", "+=" + 1 * horizontalScrollRatio);
      bottomScrollBarBlock.css("left", "-=1");
      lastBottomScrollBarBlockPosition -= 1;
      updatePositionReporting();
    } else {
      clearInterval(scrollingInterval);
    }
  }, 25)
}

function calculateScrollBarSize() {
  var viewPort = $(".viewPort");
  var content = $(".content");
  var rightScrollBar = $(".scrollBar.scrollBarRight");
  var bottomScrollBar = $(".scrollBar.scrollBarBottom");
  var scrollBarArrow = $($(".scrollBar.arrow")[0]);

  var bottomScrollBarWidth = viewPort.width() - (scrollBarArrow.width() * 2);
  var rightScrollBarWidth = viewPort.height() - (scrollBarArrow.height() * 2);

  if (content.width() > viewPort.width()) {
    bottomScrollBar.css("display", "block");
    bottomScrollBar.css("width", bottomScrollBarWidth + "px");
  } else {
    bottomScrollBar.css("display", "none");
  }

  if (content.height() > viewPort.height()) {
    rightScrollBar.css("display", "block");
    rightScrollBar.css("height", rightScrollBarWidth + "px");
  } else {
    rightScrollBar.css("display", "none");
  }
}

function calculateHorizontalScrollRatio() {
  var bottomScrollBarContainer = $(".scrollBar.scrollBarBottom");
  var content = $(".content");
  var viewPort = $(".viewPort");

  var viewPortWidth = viewPort.width();
  var contentWidth = content.width();
  var bottomScrollBarContainerSize = bottomScrollBarContainer.width() - 25;

  horizontalScrollRatio = (contentWidth - viewPortWidth) / bottomScrollBarContainerSize;
}

function calculateVerticalScrollRatio() {
  var rightScrollBarContainer = $(".scrollBar.scrollBarRight");
  var content = $(".content");
  var viewPort = $(".viewPort");

  var viewPortHeight = viewPort.height();
  var contentHeight = content.height();
  var rightScrollBarContainerSize = rightScrollBarContainer.height() - 25;

  verticalScrollRatio = (contentHeight - viewPortHeight) / rightScrollBarContainerSize;
}

function updatePositionReporting(ui){
  var content = $(".content");

  $("#contentPosistionTop").text(content.css("top"));
  $("#contentPosistionLeft").text(content.css("left"));
  $("#contentRatioBottom").text(horizontalScrollRatio.toFixed(2) + "%");

  if(ui) {
    $("#bottomOffsetTop").text(ui.offset.top.toFixed(2));
    $("#bottomOffsetLeft").text(ui.offset.left.toFixed(2));
    $("#bottomPosistionTop").text(ui.position.top.toFixed(2));
    $("#bottomPosistionLeft").text(ui.position.left.toFixed(2));

    $("#rightOffsetTop").text(ui.offset.top.toFixed(2));
    $("#rightOffsetLeft").text(ui.offset.left.toFixed(2));
    $("#rightPosistionTop").text(ui.position.top.toFixed(2));
    $("#rightPosistionLeft").text(ui.position.left.toFixed(2));
  }
}

function cancelScrolling() {
  clearInterval(scrollingInterval);
}
