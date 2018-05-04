
//const btnSearch = document.querySelector('.content-container__search-btn');
//btnSearch.addEventListener('click', findMatch);
const searchUrl  = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=15&search=';
const randomUrl = 'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&generator=random&exchars=204&grnnamespace=0%7C828%7C2302&grnlimit=1';
const btnGetRandom = document.querySelector('.content_btn-getArticle');

btnGetRandom.addEventListener('click', searchRandom);

const inInput = document.getElementById("searchInput");
inInput.addEventListener('keyup', searchIt);

function searchIt(e) {
  if(e.keyCode == 13) {
    search();
  }
}

 function searchRandom() {
  window.open('https://en.wikipedia.org/wiki/Special:Random', '_blank');
}

  function search() {
$.ajax({
    url: (searchUrl + encodeURI(inInput.value)),
    jsonp: "callback",
    dataType: "jsonp",
    success: function(resp) {
    console.log(resp);
      $(".results").empty();
      for (var i=0; i<resp[1].length; i++) {
        insertHTML(resp[1][i], resp[2][i], resp[3][i]);
      }
    }
  });
}
function insertHTML(title, excerpt, link) {
  let html = "<li>";
  html += "<a href='" + link + "'>";
  html += "<h2>" + title + "</h2>";
  html += "<p>" + excerpt + "</p></a>";
  $(".results").append(html);
}  
// random https://en.wikipedia.org/wiki/Special:Random
// https://www.mediawiki.org/wiki/API:Main_page main page