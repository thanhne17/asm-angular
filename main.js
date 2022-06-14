const menu_btn = document.querySelector("#menu");
const drop_down = document.querySelector("#drop-down");
const close_btn = document.querySelector("#close")

menu_btn.onclick = function () {
    drop_down.style.height = "104px";
    menu_btn.classList.toggle("hidden")
}

close_btn.onclick = function () {
    drop_down.style.height = null;
    menu_btn.classList.toggle("hidden")

}

