let searchbtn = document.querySelector("#search");
let searchfrm = document.querySelector(".head .search-bar");
searchbtn.onclick = () => {
  searchfrm.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("active");
  searchfrm.classList.remove("active");
};

let menu = document.querySelector(".head .navbar");
// document.querySelector('#bars').onclick()=()=>{

// }
menu.onclick = () => {
  menu.classList.toggle("active");
};





$('.submit').click(function () {
    var Name = $('#yourname').val();
    // var Email = $('#youremail').val();
    // var Message = $('#textarea');

    
    
    if (Email == '') {
        alert('Please make sure you have filled in the form correctly!');
    } else {
        alert(' Hi, ' +Name+', We have received your message. Thank you for contacting us.');
    }
});