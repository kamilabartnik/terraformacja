function check_empty() {
    if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
    alert("Fill All Fields !");
    } else {
    document.getElementById('form').submit();
    alert("Form Submitted Successfully...");
    }
    }
    // //Function To Display Popup
    // function div_show() {
    // document.getElementById('abc').style.display = "block";
    // }
    // //Function to Hide Popup
    // function div_hide(){
    // document.getElementById('abc').style.display = "none";
    // }
     new Vue ({
        el: "popupContact",

        data: {
               place:null,
                 date:null,
                 winner:null,
                 second:null,
                 third:null,
                 forth:null,
                 fifth:null,
                 generation:null,
                 msg:null,
                 value:null,
                 send,
         },
         method: {
             send: function() {
                 this.value = place;
             }
         }

     })
