am4core.ready(function () {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  var chart = am4core.create("chartdiv", am4charts.PieChart3D);
  // this creates initial fade-in

  chart.legend = new am4charts.Legend();

  chart.data = [
    {
      country: "PRESALL",
      litres: 45
    },
    {
      country: "Burn",
      litres: 30
    },
    {
      country: "PUBLIC SEll",
      litres: 20
    },
    {
      country: "MARKEting",
      litres: 5
    },


  ];

  var series = chart.series.push(new am4charts.PieSeries3D());
  series.dataFields.value = "litres";
  series.dataFields.category = "country";
  series.labels.template.disabled = true;
  series.ticks.template.disabled = true;

}); // end am4core.ready()

document.addEventListener("DOMContentLoaded", function () {
  const navbarTogglers = document.querySelectorAll(".navbar-toggler");
  const navbarCollapse = document.querySelector(
    "#navbarSupportedContent"
  );
  const closeBtn = document.querySelector(".btn-close");

  navbarTogglers.forEach((toggler) => {
    toggler.addEventListener("click", function () {
      this.classList.toggle("collapsed");
      navbarCollapse.classList.toggle("show");
    });
  });

  closeBtn.addEventListener("click", function () {
    navbarCollapse.classList.remove("show");
  });

  // Close navbar when a link is clicked (for single-page navigation)
  const navLinks = document.querySelectorAll(".navbar-nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 991) {
        navbarCollapse.classList.remove("show");
        navbarTogglers.forEach((toggler) =>
          toggler.classList.remove("collapsed")
        );
      }
    });
  });
});

document.getElementById('copy-button').addEventListener('click', function() {
var contractText = document.getElementById('contract-text').textContent;

var tempInput = document.createElement('input');
tempInput.value = contractText;
document.body.appendChild(tempInput);

tempInput.select();
document.execCommand('copy');

document.body.removeChild(tempInput);

var copyStatus = document.getElementById('copy-button');
copyStatus.textContent = 'copied';

setTimeout(function() {
copyStatus.textContent = 'copy';
}, 2000); 
});

window.Jupiter.init({
  displayMode: "integrated",
  integratedTargetId: "integrated-terminal",
  endpoint: "https://api.mainnet-beta.solana.com",
  strictTokenList: false,
  formProps: {
    fixedInputMint: true,
    fixedOutputMint: true,
    fixedAmount: true,
    initialAmount: "8888888800000",
    initialInputMint: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
    initialOutputMint: "AZsHEMXd36Bj1EMNXhowJajpUXzrKcK57wW4ZGXVa7yR",
  },
});