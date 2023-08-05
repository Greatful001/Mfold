const btn = document.getElementById("btn");
const nav = document.getElementById("menu");


const navToggle = (e) => {
    btn.classList.toggle('active');
    nav.classList.toggle('active');
     
//    document.body.classList.toggle('no-scroll')
    if(nav.classList.contains('active')) {
       btn.innerHTML = "CLOSE";
    }
    else {
        btn.innerHTML = "MENU";
    }
} 


btn.addEventListener('click', navToggle)

// navlinks


document.querySelectorAll(".navlinks").forEach(n => n.addEventListener
    ("click", () => {
        btn.classList.remove("active");
        nav.classList.remove("active");
        btn.innerHTML = "MENU";
    }))


    // AOS 
    AOS.init({
       
        offset: 300,
        duration: 1000
    });


