var divcont = document.getElementsByClassName("btn-cont");
var plus_bts = document.querySelectorAll(".plus");
var minus_bts = document.querySelectorAll(".minus");
var deleter = document.querySelectorAll(".delete");
console.log(deleter);
var likee = document.querySelectorAll(".like");

function likke(like) {
  var lik = like.target;
  if (lik.style.color != "red") {
    lik.style.color = "red";
  } else {
    lik.style.color = "#424242";
  }
}
function inc(e) {
  var cible = e.target;
  div = cible.parentElement;
  p = div.querySelector("p");
  var quantity = Number(p.innerHTML);
  quantity++;
  p.innerHTML = quantity;
  var cible = e.target;
  var tr = cible.parentElement.parentElement.parentElement;
  var unit = tr.querySelector(".unitPrice");
  var price = tr.querySelector(".price");

  var montant = quantity * Number(unit.innerHTML);
  price.innerHTML = montant;
  total();
}

function dem(e) {
  var cible = e.target;
  div = cible.parentElement;
  p = div.querySelector("p");
  var quantity = Number(p.innerHTML);

  if (quantity == 0) {
    p.innerHTML = 0;
  } else {
    quantity--;
    p.innerHTML = quantity;
  }
  var cible = e.target;
  var tr = cible.parentElement.parentElement.parentElement;
  var unit = tr.querySelector(".unitPrice");
  var price = tr.querySelector(".price");
  var montant = quantity * Number(unit.innerHTML);
  price.innerHTML = montant;
  total();
}

function total() {
  var pprice = document.getElementsByClassName("price");
  var somme = 0;
  var total = document.getElementById("total");

  for (let i = 0; i < pprice.length; i++) {
    somme = somme + Number(pprice[i].innerHTML);
    console.log(somme);
  }
  total.innerHTML = somme;
}

function deleterow(cl) {
  var click = cl.target;
  console.log(click);
  var tablerow = click.parentElement.parentElement.parentElement.parentElement;
  console.log(tablerow);
  tablerow.remove();
  var price_removed = tablerow.querySelector(".price");
  price_removed.innerHTML = 0;
  total();
}

for (var i = 0; i < plus_bts.length; i++) {
  plus_bts[i].addEventListener("click", inc);
}

for (var j = 0; j < minus_bts.length; j++) {
  minus_bts[j].addEventListener("click", dem);
}

for (let i = 0; i < deleter.length; i++) {
  deleter[i].addEventListener("click", deleterow);
}

for (let i = 0; i < likee.length; i++) {
  likee[i].addEventListener("click", likke);
}
