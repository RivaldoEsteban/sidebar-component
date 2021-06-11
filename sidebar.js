const flexbox1 = document.getElementById("flexbox1");
const flexbox2 = document.getElementById("flexbox2");
const flexbox3 = document.getElementById("flexbox3");
const flexbox4 = document.getElementById("flexbox4");
const flexbox5 = document.getElementById("flexbox5");
const flexbox6 = document.getElementById("flexbox6");

flexbox1.addEventListener("click", selectedBox1);
flexbox2.addEventListener("click", selectedBox2);
flexbox3.addEventListener("click", selectedBox3);
flexbox4.addEventListener("click", selectedBox4);
flexbox5.addEventListener("click", selectedBox5);
flexbox6.addEventListener("click", selectedBox6);

function remove() {
  flexbox1.classList.remove("active");
  flexbox2.classList.remove("active");
  flexbox3.classList.remove("active");
  flexbox4.classList.remove("active");
  flexbox5.classList.remove("active");
  flexbox6.classList.remove("active");
}

function selectedBox1() {
  remove();
  flexbox1.classList.add("active");
}
function selectedBox2() {
  remove();
  flexbox2.classList.add("active");
}
function selectedBox3() {
  remove();
  flexbox3.classList.add("active");
}
function selectedBox4() {
  remove();
  flexbox4.classList.add("active");
}
function selectedBox5() {
  remove();
  flexbox5.classList.add("active");
}
function selectedBox6() {
  remove();
  flexbox6.classList.add("active");
}

const logo = document.getElementById("logo");
const txt1 = document.getElementById("txt1");
const txt2 = document.getElementById("txt2");
const txt3 = document.getElementById("txt3");
const txt4 = document.getElementById("txt4");
const txt5 = document.getElementById("txt5");
const txt6 = document.getElementById("txt6");
const subtitle = document.querySelector(".subTitle");

const burgerButton = document.getElementById("burgerButton");
const sidebar = document.querySelector(".sidebar");

burgerButton.addEventListener("click", sidebarHide);

let x = 0;
function sidebarHide() {
  if (x == 0) {
    ocultar();
    x = 1;
  } else {
    x = 0;
    mostar();
  }
}

function ocultar() {
  logo.style.display = "none";
  txt1.style.display = "none";
  txt2.style.display = "none";
  txt3.style.display = "none";
  txt4.style.display = "none";
  txt5.style.display = "none";
  txt6.style.display = "none";
  subtitle.style.display = "none";
  sidebar.style.width = "64px ";
}

function mostar() {
  setTimeout(() => {
    logo.style.display = "block";
    txt1.style.display = "block";
    txt2.style.display = "block";
    txt3.style.display = "block";
    txt4.style.display = "block";
    txt5.style.display = "block";
    txt6.style.display = "block";
    subtitle.style.display = "block";
  }, 300);
  sidebar.style.width = "248px";
}
