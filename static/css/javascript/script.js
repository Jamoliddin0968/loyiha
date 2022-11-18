/**sayt yuklanguncha chiqib turadigan loader codi */

$(window).on("load", function () {
  $(".loader").fadeOut();
  $("body").removeClass("active");
});

// header qismidagi tilni alishdiradigan btn codi
$(".language").click(function () {
  $(".language-content").slideToggle(100);
});
//sayt scrol bo`lganda choqadigan menu codi

var sticky = $("#menu1").offset().top;
$(window).scroll(function () {
  if (window.pageYOffset > sticky) {
    $("#scroll-menu").addClass("open");
    $(".scrollTop").addClass("active");
  } else {
    $(".scrollTop").removeClass("active");
    $("#scroll-menu").removeClass("open");
  }
});

/** Site stilini o`zgartirish */

var sitemodeCss = document.querySelectorAll(".modesitecss");

function modesite(style) {
  sitemodeCss.forEach(function (stylecss) {
    loadstart();
    setTimeout(function () {
      if (style == stylecss.getAttribute("title")) {
        stylecss.removeAttribute("disabled");
        if (style === "dark") {
          document.querySelector("body").classList.add("dark");
        } else {
          document.querySelector("body").classList.remove("dark");
        }
      } else {
        stylecss.setAttribute("disabled", "true");
      }
    }, 500);
    setTimeout(function () {
      loadend();
      $(".one").css("display", "none");
    }, 1000);
  });
}
/** menu ochish codi */
$(".grid-menu").click(function () {
  $("body").addClass("active");
  $(".full-menu-category").addClass("active");
});
$(".close").click(function () {
  $("body").removeClass("active");
  $(".full-menu-category").removeClass("active");
});

/**Burger orqali menu ni ochish */

$(".burger").click(function () {
  $("body").addClass("active");
  $(".full-menu-category").addClass("active");
});

/**site qo`shimcha content qo`shish codi */
var produck;
$(window).on("load", function () {
  produck = $(".yandexProduct").html();
});

function button() {
  $(".produckloaderbtn").css("display", "block");

  window.setTimeout(function () {
    $(".produckloaderbtn").css("display", "none");
    $(".yandexProduct").append(produck);
  }, 1000);
}
/**vaqt o`zgarishi */

function updateclock() {
  var datas = new Date();
  hr = datas.getHours();
  mn = datas.getMinutes();
  sc = datas.getSeconds();

  hr = 23 - hr;
  mn = 60 - mn;
  sc = 60 - sc;
  /** orqaga sanaydigan vaqtni to`gilash */
  sc == 60 ? (sc = 0) : sc;
  mn == 60 ? (mn = 0) : mn;
  hr == 23 ? (hr = 0) : hr;

  /**vaqt bir honalik bo`lganda uni ikki honalik qilish */
  hr < 10 ? (hr = "0" + hr) : hr;
  mn < 10 ? (mn = "0" + mn) : mn;
  sc < 10 ? (sc = "0" + sc) : sc;

  $(".hour").html(hr);
  $(".minute").html(mn);
  $(".second").html(sc);
}
setInterval(updateclock, 1);

/**sahifa alishtirish */

var homepage, womanpage;
$(window).on("load", function () {
  homepage = $(".Fullcontents").html();
  womanpage = $("#menuAyollarkiyimi").html();
  manpage = $("#Erkaklarkiyimi").html();
  phone = $("#phone").html();
  computer = $("#computerpage").html();
  electronic = $("#electronic").html();
});

/**pagelar alishganda  blur va loaderni holadi*/

function loadstart() {
  $(".one").css("display", "block");
  $(".Fullcontents").css("filter", "blur(20px)");
}
function loadend() {
  $(".Fullcontents").css("filter", "blur(0px)");
}

/** page alishtirish codi */
function pagereplace(pagename) {
  $("body").addClass("active");
  $(".full-menu-category").removeClass("active");
  loadstart();
  setTimeout(function () {
    $(".one").css("display", "none");
    $(".Fullcontents").html(pagename);
    loadend();
  }, 800);
}

/** qoshimch pagelardagi menuni ochish */
var produckwomen, produckman, phones, computers, electronics;
$(window).ready(function () {
  produckwomen = $(".ContentPage").html();
  produckman = $(".ContentPageman").html();
  phones = $("#phonepage").html();
  computers = $("#compyuterpage").html();
  electronics = $("#electronicpage").html();
});

function womenproduck(produckname) {
  $(".produckloaderswomen").css("display", "block");
  window.setTimeout(function () {
    $(".produckloaderswomen").css("display", "none");
    $(".ContentPage").append(produckname);
  }, 1000);
}
