



// incline pane move in animation
function navPaneAniMoveIn(){
    document.getElementById('inclined01').classList.add("moveIn01");
    console.log('check')
}

// inclined pane move out animation
function navPaneAniMoveOut(){
    document.getElementById('inclined01').classList.remove("moveIn01");
}

// navigation list staggering animation
function loadingAnimation(val) {
    anime({
      targets: ".content_pane ul li",
      translateX: val,
      delay: anime.stagger(100), 
    });
}

// navigation content container move in & move out method
function moveNavigationPane() {
    var pane = document.getElementById('content_pane');
    var paneVal = window.getComputedStyle(pane).getPropertyValue("left") ;
    if (paneVal[0]==="-") {
        document.getElementById('content_pane').classList.add("nav_move_in");
    }else{
        document.getElementById('content_pane').classList.remove("nav_move_in");
    }
}

// navigation collective move in
function moveIn(){
    navPaneAniMoveIn();
    var movingVal = window.innerWidth/5.5;
    moveNavigationPane();
    setTimeout(
        function(){
            loadingAnimation(movingVal);
        },200);
    
}

// navigation collective move out
function moveOut(){
    var movingVal = window.innerWidth/5.5;
    loadingAnimation(-movingVal)
    setTimeout(
        function(){ 
            moveNavigationPane();
        }, 400);
    setTimeout(
        function(){
            navPaneAniMoveOut();
        }, 400);
}