function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let list = document.querySelectorAll(".list");
let itemBox = document.querySelectorAll(".itemBox");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }
    this.classList.add("active");

    let dataFilter = this.getAttribute("data-filter");

    for (let k = 0; k < itemBox.length; k++) {
      itemBox[k].classList.remove("active");
      itemBox[k].classList.add("hide");

      if (
        itemBox[k].getAttribute("data-item") == dataFilter ||
        dataFilter == "all"
      ) {
        itemBox[k].classList.remove("hide");
        itemBox[k].classList.add("active");
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  let exampleBtn = document.getElementById("project-btn");
  exampleBtn.addEventListener("click", () => {
    window.open("https://example.com", "_blank");
  });
});

//scroll to top
document.addEventListener("DOMContentLoaded", function () {
  let mybutton = document.getElementById("arrowup");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.removeAttribute("hidden");
      mybutton.style.opacity = "1";
    } else {
      mybutton.setAttribute("hidden", true);
      mybutton.style.opacity = "0";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // Set up event listener for the button click
  mybutton.addEventListener("click", topFunction);
});
