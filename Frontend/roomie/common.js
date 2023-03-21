
var selectedProp;

function loadPropertiesComm(id) {
    $.getJSON('properties.json', function (data) {
        for(var i in data.properties){
            if(data.properties[i]["id"]==id){
                // console.log(data.properties[i]["id"]+" this is thime one")
                selectedProp = data.properties[i];
            }
        }

    })
}

function check(){
    console.log("check11")
}