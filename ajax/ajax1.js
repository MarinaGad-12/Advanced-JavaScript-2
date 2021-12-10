var demo = document.getElementById("demo");
var btn = document.getElementById("btn");
var posts = document.getElementById("posts");

function myFunction(id){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          
            
          let data =JSON.parse (this.responseText);
          posts.innerHTML="";
          for (const item of data) {
             posts.innerHTML+="<span> "+item.title+" </span>"+"<br>";
         }
  
          
        }
      };
      let url="https://jsonplaceholder.typicode.com/posts?userId="+id;
      xhr.open("get", url,true);
      xhr.send();
}

function loadDoc() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        
          
        let data =JSON.parse (this.responseText);
       for (const item of data) {
           console.log(item.username);
           demo.innerHTML+="<button onclick='myFunction("+item.id+")'> "+item.username+" </button>"+"&nbsp;";
       }

        
      }
    };
    xhr.open("get", "https://jsonplaceholder.typicode.com/users",true);
    xhr.send();
    
}