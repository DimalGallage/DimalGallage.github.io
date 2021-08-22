
function navMove(){
    var topVal = window.innerHeight/100*40;
    if (document.body.scrollTop > topVal || document.documentElement.scrollTop > topVal){
        sideNavMoveIn();
    }
    else{
        sideNavMoveOut();
    } 
}


function sideNavMoveIn(){
    var movingVal = window.innerWidth/15;
    anime({
        targets: '.side_nav_container ul li',
        translateX:movingVal,
        delay: anime.stagger(50, {from: 'center'})
      });
}

function sideNavMoveOut(){
    var movingVal = window.innerWidth/15;
    anime({
        targets: '.side_nav_container ul li',
        translateX:-movingVal,
        delay: anime.stagger(50, {from: 'center'})
      });
}

function check(){
    console.log("check")
}