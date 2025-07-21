// Toggle style switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide style switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

// Theme color switch
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

// Theme light and dark mode
const dayNight = document.querySelector(".day-night");
const icon = dayNight.querySelector("i");

dayNight.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
});

window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        icon.classList.add("fa-sun");
        icon.classList.remove("fa-moon");
    } else {
        icon.classList.add("fa-moon");
        icon.classList.remove("fa-sun");
    }
});





// /* ============= toggle style switcher =========== */
// const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
// styleSwitcherToggle.addEventListener("click", () =>
// {
//     document.querySelector(".style-switcher").classList.toggle("open");
// })
// // hide style - switcher on scroll
// window.addEventListener("scroll", () => {
//     if(document.querySelector(".style-switcher").classList.contains("open"))
//     {
//         document.querySelector(".style-switcher").classList.remove("open");
//     }
// })
// /* ============= theme colors =========== */
// const alternateStyles = document.querySelectorAll(".alternate-style");
// function setActiveStyle(color)
// {
//     alternateStyles.forEach((style) => {
//         if(color === style.getAttribute("title"))
//         {
//             style.removeAttribute("disabled");
//         }
//         else
//         {
//             style.setAttribute("disabled","true");
//         }
//     })
// }
// /* ============= theme light and dork mode =========== */
// const dayNight = document.querySelector(".day-night");
// dayNight.addEventListener("click", () => {
//     dayNight.querySelector("i").classList.toggle("fa-sun");
//     dayNight.querySelector("i").classList.toggle("fa-moon");
//     document.body.classList.toggle("dark");
// }) 
// window.addEventListener("load", () => {
//     if(document.body.classList.contains("dark"))
//     {
//         dayNight.querySelector("i").classList.add("fa-sun");
//     }
//     else
//     {
//         dayNight.querySelector("i").classList.add("fa-moon");
//     }
// })