var prop;
var pageURL;
var urlParams;
var propId;

$(document).ready(function(){
    // loadPropertiesComm();

    $(function(){$("#detail_tabs").tabs();});

    pageURL = window.location.search;
    urlParams = new URLSearchParams(pageURL);
    propId = urlParams.get('id');
    console.log(propId);
    loadPropertiesComm(propId);
    setTimeout(loadData, 500);
    setTimeout(loadImages, 250);
    setTimeout(loadGallery(propId),250)
});


function loadData(){
    console.log(selectedProp);
    $(".listing_desc").html(selectedProp["description"]);
    $("#price_value").html("$"+selectedProp["price"]);
    $("#location_value").html(selectedProp["address"]);
    $("#rooms_value").html(selectedProp["bedrooms"]);
    $("#type_value").html(selectedProp["type"]);
}

function loadImages(){
    // console.log("../"+selectedProp["pictureFolderURL"]+propId+".2.jpg");
    $("#listing_main_image").attr("src","../"+selectedProp["pictureFolderURL"]+propId+".2.jpg");
    $("#sub_image01").attr("src","../"+selectedProp["pictureFolderURL"]+propId+".2.jpg");
    $("#sub_image02").attr("src","../"+selectedProp["pictureFolderURL"]+propId+".3.jpg");
    $("#sub_image03").attr("src","../"+selectedProp["pictureFolderURL"]+propId+".4.jpg");
}

function loadGallery(id){
    var gallery = document.getElementById("gallery");
    gallery.innerHTML="<img src='../images/propImages/"+id+"/prop.jpg' alt='' class='galleryImage img'>";
    for(var i=2;i<=8;i++){
        check();
        var tag = "<img src='../images/propImages/"+id+"/"+id+"."+i+".jpg' alt='' class='galleryImage img'>";
        console.log(tag);
        gallery.innerHTML+=tag;
    }
}

function check(){
    console.log("check11")
}


