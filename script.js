
function displayDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    document.getElementById('date').textContent = date;
    document.getElementById('time').textContent = time;
}

// Call the function once to initialize
window.onload = displayDateTime;

// Update the time every second
setInterval(displayDateTime, 1000);


document.getElementById('fileInput').addEventListener('change', 
    function (event) {
    var file = event.target.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var previewImage = document.getElementById('previewImage');
            previewImage.src = e.target.result;
            previewImage.style.display = 'block';
        }
        reader.readAsDataURL(file);
    }
});

document.getElementById('fileInput2').addEventListener('change', 
    function (event) {
    var file = event.target.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var previewImage = document.getElementById('previewImage2');
            previewImage.src = e.target.result;
            previewImage.style.display = 'block';
        }
        reader.readAsDataURL(file);
    }
});

document.getElementById('fileInput3').addEventListener('change', 
    function (event) {
    var file = event.target.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var previewImage = document.getElementById('previewImage3');
            previewImage.src = e.target.result;
            previewImage.style.display = 'block';
        }
        reader.readAsDataURL(file);
    }
});

// document.addEventListener('DOMContentLoaded', (event) => {
//     var form = document.getElementById('myForm');
    
//     form.addEventListener('submit', function(e) {
//         e.preventDefault(); // Prevent the default form submission

//         // Get form data
//         var formData = new FormData(form);
        
//         // Create a query string from the form data
//         var params = new URLSearchParams();
//         for (var pair of formData.entries()) {
//             params.append(pair[0], pair[1]);
//         }
        
//         // Open a new window and submit the form data
//         var url = 'your-server-endpoint?' + params.toString();
//         var newWindow = window.open(url, '_blank');

//         // Optionally, you can write the form data to the new window
//         if (newWindow) {
//             newWindow.document.write('<p>Form submitted successfully!</p>');
//         }
//     });
// });

// document.addEventListener('DOMContentLoaded', (event) => {
//     var form = document.getElementById('myForm');
    
//     form.addEventListener('submit', function(e) {
//         e.preventDefault(); // Prevent the default form submission

//         // Get form data
//         var formData = new FormData(form);
        
//         // Create a query string from the form data
//         var params = new URLSearchParams();
//         for (var pair of formData.entries()) {
//             params.append(pair[0], pair[1]);
//         }
        
//         // Create a new blank window and submit the form data to it
//         var url = 'your-server-endpoint?' + params.toString();
//         var newWindow = window.open('about:blank', '_blank');
        
//         // Optionally, write the form data to the new window
//         if (newWindow) {
//             newWindow.location.href = url;
//         }
//     });
// });