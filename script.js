function enabledisable(element) {
  console.log(element.style);
  if (element.style.fill != "rgb(29, 185, 84)") {
    element.style.setProperty("fill", "#1db954");
  } else {
    element.style.setProperty("fill", "#fff");
  }
}


const greeting = document.getElementById("greeting");
const hour = new Date().getHours();
const welcomeTypes = ["Buenos días", "Buenas tardes", "Buenas noches"];
let welcomeText = "";

if (hour < 12) welcomeText = welcomeTypes[0];
else if (hour < 18) welcomeText = welcomeTypes[1];
else welcomeText = welcomeTypes[2];

greeting.innerHTML = welcomeText;


const nav = document.querySelector("#topNav");
const sectionOne = document.querySelector(".fw-bold");
const sectionOneOptions = {};
const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.style.backgroundColor = "black";
    } else {
      nav.style.backgroundColor = "transparent";
    }
  });
},
sectionOneOptions);
sectionOneObserver.observe(sectionOne);
