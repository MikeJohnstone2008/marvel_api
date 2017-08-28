(function(){
  let url = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=71f78dd391154dd45725d3736de42128&hash=e9009f9030599cba0deac8952a0621bf&limit=100"

  function characters(url){

    $.get(url, function(data){
      $("#tblCharacters").html("")
  // let character = data.data.results;
      // console.log(data.data.results)
      for (var i = 0; i <data.data.results.length; i++) {
        $("#tblCharacters").append("<tr><td>" + data.data.results[i].name + "<td><td><img width='100' src='" + data.data.results[i].thumbnail.path + "." + data.data.results[i].thumbnail.extension +"'></td></tr>");

        console.log(data.data.results[i].name)
      }
    })
  }
  $(function (){

    // let chars100_url = url + "&limit=100"



    characters(url);
    // console.log("javascript is linked")

  })
  $("#searchButton").click(function(e){
    let search_url = url + "&nameStartsWith=" + $("#Search").val()
    e.preventDefault();
    characters(search_url)
    console.log("we made it")
  })

// search: http://gateway.marvel.com/v1/public/characters?ts=1&apikey=71f78dd391154dd45725d3736de42128&hash=e9009f9030599cba0deac8952a0621bf&nameStartsWith='Hu'
})()
