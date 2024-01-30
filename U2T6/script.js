
 






function mostrar(){
 fetch('https://jsonplaceholder.typicode.com/posts')
 .then((response) => response.json())
 .then((json) => {
    var texto=document.getElementById("muestra");
    for(let i = 0; i< json.length; i++){
        var li = document.createElement("li");
        li.innerHTML=json[i].title;
        texto.appendChild(li);
    }
 });
}