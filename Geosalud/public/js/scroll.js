
class ScrollToTopButton {
    constructor(buttonId) {
      this.button = document.getElementById(buttonId);
      this.button.onclick = this.scrollToTop.bind(this);
    }
  
    scrollToTop() {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }
  }
  
  var scrollUp = document.getElementById("scrollUp");
  var scrollToTopButton = new ScrollToTopButton(scrollUp.id);
  