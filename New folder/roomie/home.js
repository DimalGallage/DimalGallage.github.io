var propertyList=[];
var selectedProperty;
var filterLocation;
var filterType;
var filterPrice;
var filterRoomCount;
var filterDate;
var searchTerm;
var propCount=0;

$(document).ready(function(){
    $(function(){
        $("#date_added").datepicker();
        $(".slider").slider();
        $("#rent,#sale").checkboxradio();
        $("button").button();
    });


    // filter range slider value display
    $("#priceRange").on( "input", function() {
        var value = $("#priceRange").val();
        $("#priceValue").text("$"+value);
    });

        // filter range slider value display
    $("#roomRange").on( "input", function() {
        var value = $("#roomRange").val();
        $("#roomValue").text(value);
    });

    loadProperties();

    // propListComm=propertyList;
    propCountComm=propCount;
});


// method to load all json properties 
function loadProperties() {
    $.getJSON('properties.json', function (data) {
        for(var i in data.properties){
            var componentId = data.properties[i]["id"];
            loadPropertyCards(data.properties[i]);
            propCount++;
        }
        propertyList=data;
    })
}


// method to load all property cards
function loadPropertyCards(property){
        var descriptionPreview = property["description"].substr(0,200);
        document.getElementById("listingCards").innerHTML+= `<div class="listing_container" id="`+property["id"]+`">
            <div class="list_image"></div>
            <div class="list_details">
                <h1>`+property["heading"]+`</h1>
                <img src="" alt="">
                <p class="decription">`+descriptionPreview+"........."+`</p>
                <div class="data_box">
                    <p class="price">Price : <span id="price_value">$`+property["price"]+`.00</span></p>
                    <p class="location">Location : <span id="location_value">`+property["location"]+`</span></p>
                    <p class="rooms">No of bedrooms : <span id="rooms_value">`+property["bedrooms"]+`</span></p>
                    <p class="type">Property type : <span id="type_value">`+property["type"]+`</span></p>
                </div>
                <div class="list_action_group">
                    <button class="add_to_fav">Add to Favourites</button>
                    <a href=`+property["url"]+`><button class="read_more">Read More</button></a>
                    <button class="contact_seller">Contact Seller</button>
                </div>
            </div>
        </div>`;
        var backgroundURL = "url("+property["pictureFolderURL"]+"/prop.jpg) 50% 50% no-repeat";
        var imageLoc = "#"+property["id"]+" .list_image";
        // console.log(imageLoc);
        $(imageLoc).css("background",backgroundURL);
        $(imageLoc).css("background-size","cover");

        dragNdropFavourites();
        addToFavOnclick();
}


// display all hidden property cards
function displayPropertyCards(){
    $(".listing_container").css("display","block")
}

// hide all property cards
function hidePropertycards(){
    $(".listing_container").css("display","none")
}

// get data from the filter form
function getFilterDetails(){
    filterLocation = document.getElementById("location").value;
    filterType = document.getElementById("prop_type").value;
    filterPrice = document.getElementById("priceRange").value;
    filterRoomCount = document.getElementById("roomRange").value;
    filterDate = document.getElementById("date_added").value;
    //console.log(filterDate.getDay());
}

// get the card according to filter data
function getFilterResults(){
    hidePropertycards();
    for(var i in propertyList.properties){
        if((propertyList.properties[i]["location"]==filterLocation) && (propertyList.properties[i]["type"]==filterType) && (propertyList.properties[i]["price"]<=filterPrice) && (propertyList.properties[i]["bedrooms"]<=filterRoomCount) ){
            var propId = propertyList.properties[i]["id"];
            console.log(propId);
            document.getElementById(propId).style.display="flex";
        }
    }
}

// get the search term from input
function getSearchTerm(){
    searchTerm = document.getElementById("productSearch").value;
}

// dispaly properties form search
function displaySearchProps(searchTerm){
    resetHome()
    var resultCount=0;
    document.getElementById("button_container").style.display="none";
    hidePropertycards();
    for(var i in propertyList.properties){
        if(((propertyList.properties[i]["location"]).toLowerCase()==searchTerm.toLowerCase()) || ((propertyList.properties[i]["type"]).toLowerCase()==searchTerm.toLowerCase()) ){
            var propId = propertyList.properties[i]["id"];
            console.log(propId);
            document.getElementById(propId).style.display="flex";
            resultCount++;
        }
    }
    displayEmptyMessage(resultCount);

}

// reset homepage
function resetHome(){
    document.getElementById("button_container").style.display="block";
    document.getElementById("filter_container").style.display="block";
    $("#listing_container_heading").html("Explore Listings");
    $("#emptyMsg").html("");
}

// display the no result message
function displayEmptyMessage(count){
    if(count==0){
        document.getElementById("filter_container").style.display="none";
        $("#listing_container_heading").html("");
        $("#emptyMsg").html("OOPS! We Couldn't find anything with '"+searchTerm+"'");
    }
}


// method executed on filter search
function filterEvent(){
    getFilterDetails();
    getFilterResults();
}

// method executed on search 
function searchEvent(){
    hidePropertycards();
    getSearchTerm();
    displaySearchProps(searchTerm);
}

function check(){
    console.log("check")
}

















