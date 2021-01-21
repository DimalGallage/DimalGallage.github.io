var favList = [];

$(document).ready(function(){
    displayFavMenu();
    // $(".listing_container .add_to_fav").click(function() {
    //        var destination = $("#favourite_menu");
    //        var grp = $(this).parent();
    //        var cont = grp.parent();
    //        var id = cont.parent().attr("id");
    //     //    console.log(id);
    //        console.log("check"); 
    //     addToFav(destination,id);
    // });   
});


// method for displaying favourite menu
function displayFavMenu(){
    window.addEventListener('click', function(event){   
        if (document.getElementById("favourite_menu").contains(event.target)){
            $("#favourite_menu").css("right","0vw");
            rotateBtn(90);
        } else{
            $("#favourite_menu").css("right","-20vw");
            rotateBtn(-90);
        }
      });
}

// method to rotate he arrow indication
function rotateBtn(val){
    document.getElementById("favMenuBtn").style.transform="rotateZ("+val+"deg)";
}

// add to fav onclick
function addToFavOnclick() {
    $(".listing_container .add_to_fav").click(function() {
        var destination = $("#favourite_menu");
        var grp = $(this).parent();
        var cont = grp.parent();
        var id = cont.parent().attr("id");
     //    console.log(id);
        console.log("check"); 
     addToFav(destination,id);
 }); 
}

// method to drag and drop listing into the favourite menu
function dragNdropFavourites(){
    $("#listingCards .listing_container").draggable({
        revert:true,
        function() {},
        function() {}
    });

    $("#favourite_menu").droppable({
        drop:function (event,ui) {
            var favMenu = $(this);
            var movingCard = ui.draggable;
            var draggableId = movingCard.attr("id");
            addToFav(favMenu,draggableId);  
        }
    });
    
}


// method to remove items from the favourites by drag and drop
function dragRemove() {
        $("#favourite_menu li").draggable({
        });

        $("body").droppable({
            drop:function (event,ui) {
                var favMenu = $(this);
                var movingCard = ui.draggable;
                var draggableId = movingCard.attr("id");  
                $(movingCard).remove();
                for( var i = 0; i < favList.length; i++){ 
                    if ( favList[i] == draggableId.substring(9) ){ 
                        favList.splice(i, 1);
                        i--; 
                    }
                }
            }
        });
}

// add to favourite method
function addToFav(destination,id) {
    if(!favList.includes(id)){
        favList.push(id);

        var headLine = $("#"+id).find("h1").html();

        $(destination).find("ul").append("<li id='fav_Item_"+id+"' class></li>");
        $("#"+id+" .list_image").clone().appendTo("#fav_Item_"+id);
        $("#fav_Item_"+id).append("<p>"+headLine+"</p>") 
        $("#fav_Item_"+id).append("<button id='remove_button'>✕</button>") 
    
        $(".favourite_menu #remove_button").click(function() {
            removeItem(this);
        });

        dragRemove();
    }
}

// remove from favourite
function removeItem(button) {
    $(button).parent().remove();
    for( var i = 0; i < favList.length; i++){ 
        if ( favList[i] == $(button).parent().attr("id").substring(9) ){ 
            favList.splice(i, 1);
            i--; 
        }
    }
}







