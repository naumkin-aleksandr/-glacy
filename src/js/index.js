// import jQuery from "jquery";
// import popper from "popper.js";
// import bootstrap from "bootstrap";


var pageBg = document.querySelector("#wrapper-page"); 
var specialOffersBtn1 = document.querySelector("#special-offers__btn-1");
var specialOffersBtn2 = document.querySelector("#special-offers__btn-2");
var specialOffersBtn3 = document.querySelector("#special-offers__btn-3");

var specialOffersBox1 = document.querySelector("#special-offers__box-1");
var specialOffersBox2 = document.querySelector("#special-offers__box-2");
var specialOffersBox3 = document.querySelector("#special-offers__box-3");

specialOffersBtn1.addEventListener("click", function(evt){
    evt.preventDefault();
    specialOffersBtn1.classList.add("special-offers__btn_selected");
    specialOffersBtn2.classList.remove("special-offers__btn_selected");
    specialOffersBtn3.classList.remove("special-offers__btn_selected");

    pageBg.classList.add("wrapper-page_gren");
    pageBg.classList.remove("wrapper-page_blue", "wrapper-page_brown");

    specialOffersBox1.classList.remove("none");
    specialOffersBox2.classList.add("none");
    specialOffersBox3.classList.add("none");
});

specialOffersBtn2.addEventListener("click", function(evt){
    evt.preventDefault();
    specialOffersBtn1.classList.remove("special-offers__btn_selected");
    specialOffersBtn2.classList.add("special-offers__btn_selected");
    specialOffersBtn3.classList.remove("special-offers__btn_selected");

    pageBg.classList.remove("wrapper-page_gren", "wrapper-page_brown" );
    pageBg.classList.add("wrapper-page_blue");

    pageBg.classList.remove("wrapper-page_gren" );
    specialOffersBox1.classList.add("none");
    specialOffersBox2.classList.remove("none");
    specialOffersBox3.classList.add("none");
});

specialOffersBtn3.addEventListener("click", function(evt){
    evt.preventDefault();
    specialOffersBtn1.classList.remove("special-offers__btn_selected");
    specialOffersBtn2.classList.remove("special-offers__btn_selected");
    specialOffersBtn3.classList.add("special-offers__btn_selected");

    pageBg.classList.add("wrapper-page_brown");
    pageBg.classList.remove("wrapper-page_gren", "wrapper-page_blue" );

    specialOffersBox1.classList.add("none");
    specialOffersBox2.classList.add("none");
    specialOffersBox3.classList.remove("none");
});