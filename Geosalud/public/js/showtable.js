
class showTables {
  constructor() {
    this.ips = document.getElementById("ipsTarjet");
    this.eps = document.getElementById("epsTarjet");
    this.dispensors = document.getElementById("dispensorsTarjet");
    this.services = document.getElementById("servicesTarjet");
    console.log(this.ips, this.eps, this.dispensors, this.services);
  }
  mostrarIps() {
    document.getElementById("ipsTarjet").style.display = "block";
  }
  mostrarEps() {
    document.getElementById("epsTarjet").style.display = "block";
  }
  mostrarDispensors() {
    document.getElementById("dispensorsTarjet").style.display = "block";
  }
  mostrarServicios() {
    document.getElementById("servicesTarjet").style.display = "block";
  }
  agregarBotones() {
    const divs = [this.ips, this.eps, this.dispensors, this.services];
    divs.forEach(div => {
      const closeButton = document.createElement("button");
      closeButton.textContent = "⇱ Volver al Geoportal";
      closeButton.style.backgroundColor = "black";
      closeButton.style.color = "white";
      closeButton.style.border = "none";
      closeButton.style.padding = "10px 20px";
      closeButton.style.borderRadius = "5px";
      closeButton.style.margin = "10px";
      closeButton.style.top = "280px";
      closeButton.style.right = "50px";
      closeButton.style.cursor = "pointer";
      closeButton.style.position = "absolute";
      closeButton.addEventListener("click", () => {
        div.style.display = "none";
      });
      div.appendChild(closeButton);
    });
  }
}

window.showtable = new showTables();
window.showtable.agregarBotones();
