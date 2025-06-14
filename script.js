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
//const contain=document.getElementById("pdfContainer");
//    contain.innerHTML = `
//    <embed src="documents/Your_new_CV.pdf" type="application/pdf" width="100%" height="600px" />
//  `;