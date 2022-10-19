const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menuBtn = $(".menu-icon");
const sideMenu = $(".side-menu");
const listItem = $$(".menu-item");
const profile = document.getElementById("profile");
const experience = document.getElementById("experiences-wrap");
const ablility = document.getElementById("abilities-wrap");
menuBtn.onclick = () => {
    sideMenu.classList.toggle("active");
};
listItem.forEach ((item, index) => {
    item.onclick = function() {
        switch (this.innerText) {
            case "PROFILE":          
                window.scrollTo(0, profile.offsetTop)
            break;
            case "EXPERIENCES":          
                window.scrollTo(0, experience.offsetTop)
            break;
            case "ABILITIES":          
                window.scrollTo(0, ablility.offsetTop)
            break;
                
            default:
                break;
        }
    }
})