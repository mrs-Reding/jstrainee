window.onload=function() {

  var container = document.getElementById("tabContainer");
  
  for (var i = 1; i <= 3; i++) {
    container.appendChild(generateTableHTML(null, 50, i));
  }

  var navitem = container.querySelector("#tabs__caption ul li");
  var ident = navitem.id.split("_")[1];
  navitem.parentNode.setAttribute("data-current",ident);
  navitem.setAttribute("class","active");
  document.getElementById("tabs__content" + ident).setAttribute("class", "active");
  var tabs = container.querySelectorAll("#tabs__caption ul li");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].onclick=displayPage;
  }


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

