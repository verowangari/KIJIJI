$(document).ready(function() {
    
    $("#submitForm").click(function(){
        let Name = (document.getElementById("Name").value )
        let Email = (document.getElementById("Email").value )
        let Phone = (document.getElementById("Phone").value )
        let Location = (document.getElementById("Location").value )
        let Bedrooms = (document.getElementById("Bedroom").value )
        let Bathrooms = (document.getElementById("Bathroom").value )
        
        if (Name == '' || Email == '' || Phone == '' || Location == '' || Bedrooms == ''|| Bathrooms == '') {
            alert('Please fill out the required fields');
        } else {
            alert(' Hi ' + Name + '! ' + ' Thank you for contacting us. We shall contact you to schedule a tour!');
        }
    });
});