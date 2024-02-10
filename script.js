let inputBox = document.querySelector("input");
let imgBox = document.querySelector(".img-box");
let img = document.querySelector(".qrImage");

function generateQr() {
    if(inputBox.value === "") {
        alert("Please enter your text or URL")
    }else{
        img.style.display = "block";
        imgBox.style.display = "block";
        img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputBox.value;
    }
    
}