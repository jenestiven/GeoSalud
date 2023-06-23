
class activeAelement {
  constructor(divId) {
    this.div = document.getElementById(divId);
    this.as = this.div.querySelectorAll('a');
    this.div.addEventListener('click', () => {
      this.as.forEach(a => a.click());
    });
  }
}

const divStartChooser = new activeAelement('startChooser');
const divDbChooser = new activeAelement('dbChooser');
const divGeovisorChooser= new activeAelement('geovisorChooser');
const divAboutChooser = new activeAelement('aboutChooser');

