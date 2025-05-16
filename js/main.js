const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");

toggler.addEventListener("click", (e) => {
  navbar.classList.toggle("nav__expanded");
  console.log(navbar.className);
});

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tap");
  const tabContents = document.querySelectorAll(".tab-content");

  if (tabs.length && tabContents.length) {
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = document.getElementById(tab.dataset.tabTarget);

        if (target) {
          tabs.forEach((t) => t.classList.remove("active"));
          tabContents.forEach((content) => content.classList.remove("active"));

          tab.classList.add("active");
          target.classList.add("active");
        }
      });
    });
  } else {
    console.error("Tabs or contents not found.");
  }
});

const accordionHeaders = document.querySelectorAll(".accordion__header");
const accordion = document.querySelector(".accordion");
accordionHeaders.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.parentElement);
    e.target.parentElement.classList.toggle("accordion__expanded");
  });
});
