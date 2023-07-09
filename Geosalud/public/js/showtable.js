
class showTables {
  constructor() {
    this.ips = document.getElementById("ipsTarjet");
    this.eps = document.getElementById("eps");
    this.dispensors = document.getElementById("dispensors");
    this.services = document.getElementById("services");
    console.log(this.ips, this.eps, this.dispensors, this.services);
  }
  mostrarIps() {
    document.getElementById("ipsTarjet").style.visibility = "visible";
  }
  mostrarEps() {
    document.getElementById("eps").style.visibility = "visible";
  }
  mostrarDispensors() {
    document.getElementById("dispensors").style.visibility = "visible";
  }
  mostrarServicios() {
    document.getElementById("services").style.visibility = "visible";
  }
  agregarBotones() {
    const divs = [this.ips, this.eps, this.dispensors, this.services];
    divs.forEach(div => {
      const closeButton = document.createElement("button");
      closeButton.textContent = "⇱ Volver al Geoportal";
      closeButton.addEventListener("click", () => {
        div.style.visibility = "hidden";
      });
      div.appendChild(closeButton);
    });
  }
}

window.showtable = new showTables();
window.showtable.agregarBotones();
