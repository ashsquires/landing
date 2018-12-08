var num1 = document.getElementById("webterms");
var num2 = document.getElementById("privterms");
var num3 = document.getElementById("supterms");

num1.addEventListener("click", textshow);
num2.addEventListener("click", textshow);
num3.addEventListener("click", textshow);


function textshow() {
  var which = this.attributes.id.value;
  document.getElementById(which).style.fontWeight = 500;
  if (which === "webterms") {
    document.getElementById("websiteterms").style.display = "inline";
    document.getElementById("policyterms").style.display = "none";
    document.getElementById("privterms").style.fontWeight = 300;
    document.getElementById("supportterms").style.display = "none";
    document.getElementById("supterms").style.fontWeight = 300;
  } else if (which === "privterms") {
    document.getElementById("websiteterms").style.display = "none";
    document.getElementById("webterms").style.fontWeight = 300;
    document.getElementById("policyterms").style.display = "inline";
    document.getElementById("supportterms").style.display = "none";
    document.getElementById("supterms").style.fontWeight = 300;
  } else if (which === "supterms") {
    document.getElementById("websiteterms").style.display = "none";
    document.getElementById("policyterms").style.display = "none";
    document.getElementById("webterms").style.fontWeight = 300;
    document.getElementById("privterms").style.fontWeight = 300;
    document.getElementById("supportterms").style.display = "inline";
  }
}
