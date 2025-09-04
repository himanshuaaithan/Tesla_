let video = document.querySelector("#videohover")
let menubtn = document.querySelector(".menu")
let menubar = document.querySelector(".menuprt")
let main = document.querySelector(".main")
let cross = document.querySelector(".cross")

video.addEventListener("mouseenter", function () {
    video.play();
})

menubtn.addEventListener("click", function () {

    main.style.display = "none"
    menubar.style.display = "inherit"
})

cross.addEventListener("click", function () {
    main.style.display = "inherit"
    menubar.style.display = "none"
})




