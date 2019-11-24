var text=document.getElementById("text");
function bold(){
    text.style.fontWeight=text.style.fontWeight=="bold"? "normal" : "bold";
}
function italick(){
    text.style.fontStyle=text.style.fontStyle=="italic"? "normal" : "italic";
}
function underline(){
    text.style.textDecoration=text.style.textDecoration=="underline"? "normal" : "underline";
}
document.getElementById("selectSize").addEventListener("change", function(){
    text.style.fontSize= this.value;
})
