window.onload = function() {
  var startPage = document.getElementById('start_page');
  var otherPages = document.querySelectorAll('.page:not(#start_page)');
  startPage.style.display = 'block';
  for (var i = 0; i < otherPages.length; i++) {
    otherPages[i].style.display = 'none';
  }
}
  