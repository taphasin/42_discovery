$(document).ready(function(){

  $('#New').click(function(){
    var name = prompt("Please enter your name:", "");
    if (name == null || name == ''){
      alert("invalid");
      return 
    }
    setCookie(name,"1",365);  
    console.log(name);
    appending(name);
  });

  function appending(name){
    var todo_div = $('<div></div>')
        .text(name)
        .attr('id', name)
        .attr('class',"each_todo")
    $('#ft_list').append(todo_div);
  }

  function setCookie(cname, cvalue, exdays){
    const expDate = new Date();
    expDate.setTime(expDate.getTime() + (exdays*24*60*60*1000));
    $.cookie(cname,cvalue,{ path: '/', expires: expDate })
  }

  $('#ft_list').on('click', '.each_todo', function(){
    console.log("selected");
    if (confirm("confirmation")){
      deleteCookie(this.id);
      $(this).remove();
    }
  });

  function deleteCookie(name){
    setCookie(name, null, 0);
  }

  });
  
  // function getCookie(name) {
  //   let decodedCookie = decodeURIComponent(document.cookie);
  //   let ca = decodedCookie.split(';');
  //   for(let i = 0; i <ca.length; i++) {
  //     let c = ca[i];
  //     while (c.charAt(0) == ' ') {
  //       c = c.substring(1);
  //     }
  //     if (c.indexOf(name) == 0) {
  //       return c.substring(name.length + 1);
  //     }
  //   }
  //   return "null";
  // }

  // $('body').load(function(){
  //   let decodedCookie = decodeURIComponent(document.cookie);
  //   let ca = decodedCookie.split(/[=;]/);
  //   console.log("onload_list",ca)
  //   for(let i = 0; i <ca.length; i++) {
  //     let c = ca[i];
  //     while (c.charAt(0) == ' ') {
  //       c = c.substring(1);
  //     }
  //     if (c != '1'){
  //       appending(c);
  //     }
  //   }
  // });