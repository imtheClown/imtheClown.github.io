let currentTab;
let currentPage;
let burger = document.querySelector(".burger");
let navBar = document.querySelector(".tab-group");
let firstProj = document.querySelector(".first");
let secondProj = document.querySelector(".second");
let thirdProj = document.querySelector(".third");
let leftContainer = document.querySelector(".leftside-container");
let git = document.querySelector(".git");
let twit = document.querySelector(".twi");
let face = document.querySelector(".fac");
let tabs = document.querySelectorAll(".tab");

if(git){
    if(git.addEventListener){
        git.addEventListener("click", ()=>{window.open("https://github.com/imtheclown")});
    }
}
if(twit){
    if(twit.addEventListener){
        twit.addEventListener("click", ()=>{
            window.open("https://twitter.com/cryomumma");
        })
    }
}
if(face){
    if(face.addEventListener){
        face.addEventListener("click", ()=>{
            window.open("https://www.facebook.com/jason.argos.14/");
        })
    }
}

if(window.addEventListener){
    window.addEventListener("load", ()=>{
        let firstTab = document.querySelector(".first-tab");
        let firstPage = document.querySelector(".first-page");
        firstPage.classList.add("page-active");
        firstTab.classList.add("active-tab");
        currentTab = firstTab;
        currentPage = firstPage
    })
}
if(window.addEventListener){
    window.addEventListener("resize", () =>{//add an event listener which triggers everytime the window is resized
        if (burger){//check if burger is not undefined
            let styles = getComputedStyle(burger)
            if(styles){//checks if styles is not undefined
                if(styles.getPropertyValue){//checks if getPropertyvalue is a method of styles
                    if(styles.getPropertyValue("display") === "none"){//checks if burger has display of none
                        if(burger.classList.contains("change")){//if burger has class change, remove it
                            burger.classList.remove("change");
                        }
                        navBar.style.display ="flex";//display the nav bar since the burger is not displayed
                    }
                    else{
                        if(!burger.classList.contains("change")) {//if burger is displayed and does not have a class named change, do not display the navbar
                            navBar.style.display ="none"
                        }
                    }
                }
            }
        }
    })
}

if(firstProj){//execute code if firstProj is not undefined
    if(firstProj.addEventListener){//execute if addEventListener is present
        firstProj.addEventListener("click", () =>{
            window.open("https://github.com/imtheclown/frontend");//opens the link in new tab
        })
    }
}
if(secondProj){//execute code if secondProj is not undefined
    if(secondProj.addEventListener){
        secondProj.addEventListener("click", ()=>{
            window.open("https://github.com/imtheclown/pokemon_console_game", "_blank");//opens link in new tab when
        })
    }
}
if(thirdProj){//execute code if thirdProj is not undefined
    if(thirdProj.addEventListener){
        thirdProj.addEventListener("click", ()=>{
            window.open("https://github.com/imtheclown/CMSC126-SPRINT2", "_blank")
        })
    }
}
if(burger){
    if(burger.addEventListener){
        burger.addEventListener("click", ()=>{
            if(burger.style.display !== "none"){
                burger.classList.toggle("change");
                if(burger.classList.contains("change")){
                    navBar.style.display = "flex";
                }
                else{
                    navBar.style.display = "none";
                }
            }
        })
    }
}


if(tabs){
    tabs = Array.from(tabs)
    if(tabs){
        if(tabs.forEach){
            tabs.forEach(ta =>{
                ta.addEventListener("click", tabSelector)
            })
        }
    }
}
function tabSelector(e){
    if(currentTab){
        if(currentTab.classList){
            currentTab.classList.remove("active-tab");
        }
    }
    if(this){
        if(this.classList){
            this.classList.add("active-tab");
        }
    }
    if(currentPage){
        if(currentPage.classList){
            currentPage.classList.remove("page-active");
        }
    }
    let className = this.classList[1];
    if(className){
        className = className.split("-")[0];
        if(className){
            currentPage = document.querySelector(`.${className}-page`)
            if(currentPage){
                if(currentPage.classList){
                    currentPage.classList.add("page-active");
                    if(this){
                        currentTab = this;
                    }
                }

            }
        }
    }
}