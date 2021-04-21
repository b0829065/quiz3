var dataUrl = "https://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=a3e2b221-75e0-45c1-8f97-75acbd43d613"
var data = $.getJSON(dataUrl); 

data.done( function( msg ) { 
    $.each(msg.result.results, function(i,item) {   
        console.log(msg);  
        $("#contain").html();
        $("#contain").append($("<h2/>").text(item.A_Family));            
        $("#contain").append($("<h3/>").text(item.A_Behavior));  
        $("#contain").append($("<img/>").attr("src", item.A_Pic01_URL)); 
        $("#contain").append($("<img/>").attr("src", item.A_Vedio_URL)); 
    }); 
}); 
data.fail( function( msg ) { 
    console.log(msg);
    $("#contain").html("fail getting data");
});


    // $.each(msg.items,function(i,item){
        //            $("#contain").html();
        //            $("#contain").append($("<img/>").attr("scr",items.media.m));
        //        });
        //    });