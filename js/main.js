var objpeople = [
    { username: "Waffles", password: "Исследователь" },
    { username: "Gesugao", password: "019" },
    { username: "Danya", password: "910" },
];

var codes = "data1"




function getinfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    for(i = 0; i < objpeople.length; i++) {
        if (username == objpeople[i].username && password == objpeople[i].password) {
            console.log(username + " is logged in!")
            window.location.href = 'index.html';
            return
        }
        else {
            console.log("incorrect username or password")
        }
    }
}


function au_getinfo() {
    var au_username = document.getElementById("au_username").value
    var au_password = document.getElementById("au_password").value
    var newuser = {username: au_username, password: au_password}

    for (i = 0;i < objpeople.length; i++) {
        if (au_username == objpeople[i].username) {
            alert("Name is already used!")
            return
        }else if (au_password == objpeople[i].password) {
            alert("Password is already used!")
            return
        }
    }

    objpeople.push(newuser)
    console.log(objpeople)
    window.location.href = 'index.html';
}


function show() {
    var data_get = document.getElementById("data_get").value
    if (data_get == codes) {
        var a = document.createElement('a');
        var linkText = document.createTextNode("ПОЗДРАВЛЯЮ ПЕРЕХОДИ ПО ССЫЛКЕ!!!");
        a.appendChild(linkText);
        a.title = "my title text";
        a.href = "joke.html";
        document.body.appendChild(a);
    }else {
        alert("Wrong code!")
    }
    
}

/*
window.onload = function() {

    var fileInput = document.getElementById('fileInput');
    var fileDisplayArea = document.getElementById('fileDisplayArea');
    fileInput.addEventListener('change', function(e) {
        var file = fileInput.files[0];
        var imageType = /image.*/;

        /*if (file.type.match(imageType)) {
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

