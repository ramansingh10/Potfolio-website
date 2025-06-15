document.getElementById("hire-me").addEventListener("click",()=>{
    document.getElementById("contact").scrollIntoView()
});

document.getElementById("resume-btn").addEventListener('click',()=>{
    window.open("../documents/cv.pdf");
});

document.getElementById("mca-marksheet").addEventListener('click',()=>{
    window.open("../documents/mca.pdf");
});

document.getElementById("bca-marksheet").addEventListener('click',()=>{
    window.open("../documents/bca.pdf");
});
document.getElementById("inter-marksheet").addEventListener('click',()=>{
    window.open("../documents/12th.pdf");
});
document.getElementById("matric-marksheet").addEventListener('click',()=>{
    window.open("../documents/10th.pdf");
});
document.getElementById("eduphoenix").addEventListener('click',()=>{
    window.open("../documents/Eduphionix.jpg");
});
document.getElementById("nptel").addEventListener('click',()=>{
    window.open("../documents/dbms.pdf");
});

document.getElementById("snake-game").addEventListener('click',()=>{
    window.open("https://github.com/ramansingh10/snakegame");
});

document.getElementById("spotify-clone").addEventListener('click',()=>{
    window.open("https://github.com/ramansingh10/Spotify-Clone");
});
document.getElementById("aqi").addEventListener('click',()=>{
    window.open("https://github.com/ramansingh10/Air-Quality-Prediction-System");
});

let mode=document.getElementById("darkmode-icon");
mode.addEventListener('click',()=>{
    document.body.classList.toggle("dark-mode");
    document.querySelectorAll('.icon').forEach(img => {
        img.classList.toggle('invert');
    });
    if(document.body.classList.contains("dark-mode")){
        mode.src="svg/moon-solid.svg";
    }else{
        mode.src="svg/sun-solid.svg";
    }
})