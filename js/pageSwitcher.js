class PageSwitcher {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    this.pages = this.container.querySelectorAll('.page');
    this.pages.forEach((page) => page.style.display = 'none');
    this.currentPageIndex = 0;
    
    var startChooser = document.getElementById('startChooser');
    var dbChooser = document.getElementById('dbChooser');
    var geovisorChooser = document.getElementById('geovisorChooser');
    var geovisorCard = document.getElementById('showTarjetOne');
    var aboutChooser = document.getElementById('aboutChooser');
    var aboutCard = document.getElementById('showTarjetThree');
    var dbCard = document.getElementById('showTarjetTwo');
    var vermasButton_geovisor = document.getElementById('ver_mas_geovisor');
    var vermasButton_about = document.getElementById('ver_mas_about');
    var vermasButton_db = document.getElementById('ver_mas_db');
    
    startChooser.addEventListener('click', () => this.switchToPage(0));
    dbChooser.addEventListener('click', () => this.switchToPage(1));
    geovisorChooser.addEventListener('click', () => this.switchToPage(2));
    aboutChooser.addEventListener('click', () => this.switchToPage(3));
    geovisorCard.addEventListener('click', () => this.switchToPage(2));
    aboutCard.addEventListener('click', () => this.switchToPage(3));
    dbCard.addEventListener('click', () => this.switchToPage(1));
    vermasButton_geovisor.addEventListener('click', () => this.switchToPage(2));
    vermasButton_about.addEventListener('click', () => this.switchToPage(3));
    vermasButton_db.addEventListener('click', () => this.switchToPage(1));
  }

  switchToPage(index) {
    this.pages[this.currentPageIndex].style.display = 'none';
    this.currentPageIndex = index;
    this.pages[this.currentPageIndex].style.display = 'block';
  }
}

var pageSwitcher = new PageSwitcher('.root');
