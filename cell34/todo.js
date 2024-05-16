 
    function clicked(){
        let name = prompt("Please enter your name:", "");
        if (name == null || name == ''){
          alert("invalid");
          return 
        }
        setCookie(name,"1",365);  
        console.log(name);
        appending(name);
      }
  
      function delete_todo(element){
        if (confirm("confirmation")){
          deleteCookie(element.id);
          element.parentElement.removeChild(element);
        }
      }
  
      function appending(name){
        var todo_div = document.createElement('div');
        todo_div.innerText = name;
        todo_div.setAttribute('onclick', 'delete_todo(this)');
        todo_div.setAttribute('id',name);
        todo_div.style.backgroundColor = "rgb(1, 1, 1, 0.2)";
        todo_div.style.margin = "10px";
        todo_div.style.fontSize = "25px";
        todo_div.style.paddingLeft = "15px";
        todo_div.style.borderRadius = "5px";
        document.getElementById('ft_list').appendChild(todo_div);
      }
  
      function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/; SameSite=Strict";
      }
  
      function getCookie(name) {
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length + 1);
          }
        }
        return "null";
      }
  
      function deleteCookie(name){
        setCookie(name, null, 0);
      }
  
      function check_cookie(){
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(/[=;]/);
        console.log("onload_list",ca)
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c != '1'){
            appending(c);
          }
        }
      }