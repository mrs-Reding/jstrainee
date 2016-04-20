window.onload=function() {

  var container = document.getElementById("tabContainer");
  
  var i;

  for (i = 1; i <= 3; i++) {
    attachSheet(i);
  }

  document.getElementById("newTab").onclick = function() {
   attachSheet(i);
   i++;
  }

  var navitem = container.querySelector("#tabs__caption ul li");
  var ident = navitem.id.split("_")[1];
  navitem.parentNode.setAttribute("data-current",ident);
  navitem.setAttribute("class","active");
  document.getElementById("tabs__content" + ident).setAttribute("class", "active");
}

  function attachSheet(index) {
    var container = document.getElementById("tabContainer");
    var tab = generateTab(index);
    tab.onclick = displayPage;
    container.querySelector("#tabs__caption ul").appendChild(tab);
    container.appendChild(generateTableHTML(null, 50, index));

  }

function displayPage() {
  var current = this.parentNode.getAttribute("data-current");
  document.getElementById("tabHeader_" + current).removeAttribute("class");
  document.getElementById("tabs__content" + current).removeAttribute("class");

  var ident = this.id.split("_")[1];
  this.setAttribute("class","active");
  document.getElementById("tabs__content" + ident).setAttribute("class", "active");
  this.parentNode.setAttribute("data-current",ident);
}

function generateTab (index) {
  var tab = document.createElement("li");
  tab.setAttribute("id","tabHeader_"+index);
  tab.innerHTML = "Sheet " + index;

  return tab;
}
