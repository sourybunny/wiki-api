
// var $=jQuery;
$(document).ready(function(){
  $(".list").hide();


function getSearchTerm(){
  var searchterm=$("#searchterm").val();
  console.log(searchterm);
  if(searchterm){
  getData(searchterm);
}
}
  
function getData(searchterm){
  var url= 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' +searchterm+ '&limit=10&namespace=0&format=json&callback=?';
  $.getJSON(url)
  .done(function(data){
    showData(data);
   
  })
  .fail(function(error){
    console.log("Page Not Found");
  })
}
  
function showData(data){
  $(".list").show();
   $(".list").empty();
   data[1].forEach(function(item,index){
     console.log(item+"-----DATAAA----"+data[2][index]+"---LINKS----"+data[3][index]);
    
     $(".list").append('<li class=box><h3>'+item+'</h3><p>'+data[2][index]+'</p><a href=\"'+data[3][index]+'\" target=_blank>Read More</a></li>');
      // console.log(item);
    });
  if(data[1].length===0){
    $(".list").append('<li class=box>Sorry,there are no results found, try something else!</li>')
  }
  
}

$("#submit").click(getSearchTerm);
$("#searchterm").keypress(function(event) {
  if (event.which == 13) {
     getSearchTerm();
		// $("#searchterm").blur();
  };
});
  
  
});