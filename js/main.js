var obj
var codes = [
    {
        data_get: "data1",
    },
    {
        data_get: "data2",
    },
    {
        data_get: "data3",
    },
];
var answers = [
    4,
    5,
    6
];
function getinfo() {
    var data_get = document.getElementById("data_get").value
}
window.onload = function() {

    var fileInput = document.getElementById('fileInput');
    var fileDisplayArea = document.getElementById('fileDisplayArea');


    fileInput.addEventListener('change', function(e) {
        var file = fileInput.files[0];
        var imageType = /image.*/;

        if (file.type.match(imageType)) {
            var reader = new FileReader();

            reader.onload = function(e) {
                fileDisplayArea.innerHTML = "";

                var img = new Image();
                img.src = reader.result;

                fileDisplayArea.appendChild(img);
            }

            reader.readAsDataURL(file);	
        } else {
            fileDisplayArea.innerHTML = "File not supported!"
        }
    });

}

/*var storeditem = localStorage.getItem('storeditem')
function save() {
    var Item = document.getElementById("data_get").value;
    localStorage.setItem('storeditem', Item);
    document.getElementById('savedtext')
    if (storeditem == codes[0]) {
        console.log(answers[0]);
    }
    else if (storeditem == codes[1]) {
        console.log(answers[1]);
    }
    else if (Itestoreditemm == codes[2]) {
        console.log(answers[2]);
    }
    else {
        console.log("Wrong");
    }
}*/
/*function answer() {
    var Item = document.getElementById("data_get").value;
    if (Item == codes[0]) {
        console.log(answers[0]);
    }
    else if (Item == codes[1]) {
        console.log(answers[1]);
    }
    else if (Item == codes[2]) {
        console.log(answers[2]);
    }
    else {
        console.log("Wrong");
    }
}
*/
/*
function get() {
    localStorage.getItem('storeditem');
    document.getElementById('openedtext')
}
    */

