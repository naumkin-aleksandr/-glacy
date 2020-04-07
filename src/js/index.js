// import jQuery from "jquery";
// import popper from "popper.js";
// import bootstrap from "bootstrap";



// special offfers
var pageBg = document.querySelector("#wrapper-page");
var specialOffersBtn1 = document.querySelector("#special-offers__btn-1");
var specialOffersBtn2 = document.querySelector("#special-offers__btn-2");
var specialOffersBtn3 = document.querySelector("#special-offers__btn-3");

var specialOffersBox1 = document.querySelector("#special-offers__box-1");
var specialOffersBox2 = document.querySelector("#special-offers__box-2");
var specialOffersBox3 = document.querySelector("#special-offers__box-3");

if (document.querySelector("#special-offers__btn-1")) {
    specialOffersBtn1.addEventListener("click", function (evt) {
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
}

if (document.querySelector("#special-offers__btn-2")) {
    specialOffersBtn2.addEventListener("click", function (evt) {
        evt.preventDefault();
        specialOffersBtn1.classList.remove("special-offers__btn_selected");
        specialOffersBtn2.classList.add("special-offers__btn_selected");
        specialOffersBtn3.classList.remove("special-offers__btn_selected");

        pageBg.classList.remove("wrapper-page_gren", "wrapper-page_brown");
        pageBg.classList.add("wrapper-page_blue");

        pageBg.classList.remove("wrapper-page_gren");
        specialOffersBox1.classList.add("none");
        specialOffersBox2.classList.remove("none");
        specialOffersBox3.classList.add("none");
    });
}

if (document.querySelector("#special-offers__btn-3")) {
    specialOffersBtn3.addEventListener("click", function (evt) {
        evt.preventDefault();
        specialOffersBtn1.classList.remove("special-offers__btn_selected");
        specialOffersBtn2.classList.remove("special-offers__btn_selected");
        specialOffersBtn3.classList.add("special-offers__btn_selected");

        pageBg.classList.add("wrapper-page_brown");
        pageBg.classList.remove("wrapper-page_gren", "wrapper-page_blue");

        specialOffersBox1.classList.add("none");
        specialOffersBox2.classList.add("none");
        specialOffersBox3.classList.remove("none");
    });
}



// feedback
var btnFeedback = document.querySelector("#btn-feedback");
var modalFeedback = document.querySelector("#modal-feedback");
var closeModalFeedback = document.querySelector("#modal-feedback__close");

if (document.querySelector("#btn-feedback")) {
    btnFeedback.addEventListener("click", function (evt) {
        evt.preventDefault();
        modalFeedback.classList.remove("none");
        pageBg.classList.add("wrapper-page_roily");
    });
}

if (document.querySelector("#modal-feedback__close")) {
    closeModalFeedback.addEventListener("click", function (evt) {
        evt.preventDefault();
        modalFeedback.classList.add("none");
        pageBg.classList.remove("wrapper-page_roily");
    });
}




let basketBtn = document.querySelector("#basket");
let shoppingCart = document.querySelector("#shopping-cart");
let shoppingCartClose = document.querySelector("#shopping-cart__close");

let loginOpen = document.querySelector("#login__open");
let loginForm = document.querySelector("#login__form");
let loginClose = document.querySelector("#login__close");

let searchOpen = document.querySelector("#search__open");
let searchForm = document.querySelector("#search__form");
let searchClose = document.querySelector("#search__close");



// shopping cart 
basketBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    shoppingCart.classList.remove("none");
    loginForm.classList.add("none");
    searchForm.classList.add("none");

});

shoppingCartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    shoppingCart.classList.add("none");
});


//login 
loginOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    loginForm.classList.remove("none");
    shoppingCart.classList.add("none");
    searchForm.classList.add("none");
});

loginClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    loginForm.classList.add("none");
});


// search 
searchOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchForm.classList.remove("none");
    shoppingCart.classList.add("none");
    loginForm.classList.add("none");
});

searchClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchForm.classList.add("none");
});