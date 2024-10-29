var data=document.getElementById("div1")
var imgtag=document.createElement("img")
var ptag=document.createElement("p")
var atag=document.createElement("a")
var buttontag=document.createElement("button");

imgtag.setAttribute("src","https://m.media-amazon.com/images/M/MV5BNTU0ZjYxOWItOWViMC00YWVlLWJlMGUtZjc1YWU0NTlhY2ZhXkEyXkFqcGc@._V1_.jpg")
imgtag.style.width="310px";
imgtag.style.height="400px";
imgtag.style.paddingLeft="42.5px"
imgtag.style.paddingTop="35px"
imgtag.style.paddingBottom="35px"

imgtag.addEventListener("mouseover",function(){
  
    imgtag.src="https://m.media-amazon.com/images/M/MV5BZjI4NDk2YjQtNjQ0YS00ODQxLWIwMzctYTJlMzU2OWMzM2QyXkEyXkFqcGc@._V1_QL75_UX1230_.jpg";
})
imgtag.addEventListener("mouseout",function(){
  
    imgtag.src="https://media.ragalahari.com/posters/2023/salaar-poster.jpg";
})


data.style.border="3px  solid grey";
data.style.borderRadius="10px";
data.style.height="670px"
data.style.width="400px"
data.style.padding="15px"
data.style.marginLeft="150px"
data.style.marginTop="10px"

atag.setAttribute("href","https://www.imdb.com/title/tt13927994/");
atag.innerHTML=("IMDB");
atag.style.paddingLeft="10px";

buttontag.innerHTML="Click More";
buttontag.onclick= function(){
    alert("Salaar 2- Shouryanga Parvam   Comming Soon....");
    confirm("IMDB Rating is 7.8")
}
ptag.innerHTML='<b> Salaar: Part1- Ceasefire </b>(: Part 1 Ceasefire) is a 2023 Indian Telugu-language epic action thriller film directed by Prashanth Neel and produced by Vijay Kiragandur under Hombale Films. The film stars <i>Prabhas</i> as the title character <br> The fate of a violently contested kingdom hangs on the fraught bond between two friends-turned-foes in this saga of power, bloodshed and betrayal.'
ptag.addEventListener("mouseover",function(){
    ptag.style.color="pink";
})
ptag.addEventListener("mouseout",function(){
    ptag.style.color="grey";
})

buttontag.addEventListener("mouseover",function(){
    buttontag.style.backgroundColor="orange";
    buttontag.style.border="none";
    buttontag.style.borderRadius="4.5px";
    buttontag.style.color="green";
    buttontag.style.height="30px"
    buttontag.style.width="120px"
})
buttontag.addEventListener("mouseout",function(){
    buttontag.style.color="black";
    buttontag.style.borderRadius="9.5px";

})


data.append(imgtag,ptag,buttontag,atag);





  