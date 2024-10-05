// document.querySelector("#red").onclick = function dataColor(){
// document.querySelector("#myText").style.color = "red"
// }
// document.querySelector("#blue").onclick = function dataColor(){
// document.querySelector("#myText").style.color = "blue"
// }
// document.querySelector("#green").onclick = function dataColor(){
// document.querySelector("#myText").style.color = "green"
// }
// document.querySelector("#myText").addEventListener(click,function(){

// })
// document.querySelector("#myText").addEventListener(click,getdate);
// function getdata(){

// }
document.querySelectorAll("button").forEach(function (item) {
    item.onclick = function () {
        document.querySelector("#myText").style.color = item.dataset.color;
    }
})


function taskdata() {
    var myInput = document.querySelector("#list").value;
    var myLi = document.createElement("li")
    var result = document.querySelector("#result");
    if (myInput == "") {
     document.querySelector("#error").setAttribute("class","alert alert-danger")
        document.querySelector("#error").innerHTML = "Enter Your Task"
        return false;
    } else {

        myLi.innerHTML = myInput;
        result.appendChild(myLi);
        document.querySelector("#list").value = "";
        return false;
    }
}





