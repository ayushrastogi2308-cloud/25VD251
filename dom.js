function result(){
    let inputvalue=document.getElementById("inputdata").value;

    let displayHeading=document.getElementById('text');
    displayHeading.innerHTML=inputvalue;
    displayHeading.style.color="red";
    // change color of body element
    document.getElementsByTagName("body")[0].style.backgroundColor="yellow";


}