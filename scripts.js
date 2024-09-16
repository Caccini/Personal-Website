$(document).ready(function () {
    $("#fullpage").fullpage({
      autoScrolling: false, // Disable autoScrolling
      fitToSection: false, // Disable automatic fit to section
      scrollBar: true, // Enable scrollbar for natural scrolling
      navigation: true,
      anchors: ["section1", "section2", "section3"],
      onLeave: function (origin, destination, direction) {
        var leavingSection = this;
  
        // Apply a shrinking effect to the section being left
        $(origin.item)
          .find(".section-content")
          .removeClass("active")
          .addClass("inactive");
        // Apply a growing effect to the destination section
        $(destination.item)
          .find(".section-content")
          .removeClass("inactive")
          .addClass("active");
      },
      afterLoad: function (origin, destination, direction) {
        var loadedSection = this;
  
        // Ensure the destination section has the active class
        $(destination.item).find(".section-content").addClass("active");
      },
    });
  
    // Allow scrolling
    $.fn.fullpage.setAllowScrolling(true);
  
    // Add click event listeners to each grid item
    $(".grid-item").click(function () {
      var link = $(this).data("link");
      window.location.href = link;
    });
  });
  
  /* Add this to your existing JavaScript file or script section */
  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const container = document.querySelector(".card-container");
  
    // Keep track of the current highest z-index
    let highestZIndex = 1;
  
    // Distribute cards initially within the container
    cards.forEach((card) => {
      const containerRect = container.getBoundingClientRect();
      card.style.left = `${
        Math.random() * (containerRect.width - card.offsetWidth)
      }px`;
      card.style.top = `${
        Math.random() * (containerRect.height - card.offsetHeight)
      }px`;
  
      card.addEventListener("mousedown", (event) => {
        event.preventDefault();
  
        // Bring the card to the top
        card.style.zIndex = ++highestZIndex;
  
        const cardRect = card.getBoundingClientRect();
        const offsetX = event.clientX - cardRect.left;
        const offsetY = event.clientY - cardRect.top;
  
        function onMouseMove(event) {
          const containerRect = container.getBoundingClientRect();
          let newLeft = event.clientX - offsetX - containerRect.left;
          let newTop = event.clientY - offsetY - containerRect.top;
  
          // Ensure the card stays within the container
          newLeft = Math.max(
            0,
            Math.min(newLeft, containerRect.width - cardRect.width)
          );
          newTop = Math.max(
            0,
            Math.min(newTop, containerRect.height - cardRect.height)
          );
  
          card.style.left = `${newLeft}px`;
          card.style.top = `${newTop}px`;
        }
  
        function onMouseUp() {
          document.removeEventListener("mousemove", onMouseMove);
          document.removeEventListener("mouseup", onMouseUp);
        }
  
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const glimpseCardImages = document.querySelectorAll(
      ".glimpse-card .stacked-image"
    );
    glimpseCardImages.forEach((img) => {
      img.addEventListener("click", () => {
        img.parentElement.appendChild(img);
      });
    });
  });
  
  // scripts.js
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };
  
  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
  
    var that = this;
    var delta = 200 - Math.random() * 100;
  
    if (this.isDeleting) {
      delta /= 2;
    }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function () {
      that.tick();
    }, delta);
  };
  
  window.onload = function () {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #000}";
    document.body.appendChild(css);
  };
  
  // scripts.js
  
  // Function to update cursor position
  document.addEventListener("mousemove", function (e) {
    const cursorElement = document.querySelector(".custom-cursor-element");
    if (cursorElement) {
      cursorElement.style.left = `${e.pageX}px`;
      cursorElement.style.top = `${e.pageY}px`;
    }
  });
  
  