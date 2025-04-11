var objpeople = [
    { username: "Waffles", password: "Исследователь" },
    { username: "Аблай", password: "" },
    { username: "Даня", password: "" },
    { username: "Диас", password: "" },
    { username: "Тамур", password: "" },
    { username: "Тимур", password: "" },
    { username: "Паша", password: "" },
    { username: "Алмаз", password: "" },
    { username: "Абзал", password: "" },
    { username: "Тигран", password: "" },
];

var codes = "Свобода, Ты — светлый путь, Тебя искали, в сердцахъ наших. Ты в каждомъ шаге, ты в каждомъ дыханье. Кто жъ тебя возьмётъ, тотъ правдою силен, Тотъ и землю родную отъ страха освободит. В сердцы поколения живи навсегда!"




function getinfo() {
    var username = document.getElementById("username").value

    for(i = 0; i < objpeople.length; i++) {
        if (username == objpeople[0].username) {
            console.log(username + " is logged in!")
            localStorage.setItem('name', username);
            window.location.href = 'html/index.html';
            return
        }else if (username == objpeople[1].username){
            console.log(username + " is logged in!")
            localStorage.setItem('name1', username);
            window.location.href = 'html/login1.html';
        }
        else if (username == objpeople[2].username){
            console.log(username + " is logged in!")
            localStorage.setItem('name2', username);
            window.location.href = 'html/login2.html';
        }
        else if (username == objpeople[3].username){
            console.log(username + " is logged in!")
            localStorage.setItem('name3', username);
            window.location.href = 'html/login3.html';
        }
        else if (username == objpeople[4].username){
            console.log(username + " is logged in!")
            localStorage.setItem('name4', username);
            window.location.href = 'html/login4.html';
        }
        else if (username == objpeople[5].username){
            console.log(username + " is logged in!")
            localStorage.setItem('name5', username);
            window.location.href = 'html/login5.html';
        }
        else if (username == objpeople[6].username){
            console.log(username + " is logged in!")
            localStorage.setItem('name6', username);
            window.location.href = 'html/login6.html';
        }
        else if (username == objpeople[7].username){
            console.log(username + " is logged in!")
            localStorage.setItem('name7', username);
            window.location.href = 'html/login7.html';
        }
        else if (username == objpeople[8].username){
            console.log(username + " is logged in!")
            localStorage.setItem('name8', username);
            window.location.href = 'html/login8.html';
        }
        else if (username == objpeople[9].username){
            console.log(username + " is logged in!")
            localStorage.setItem('name9', username);
            window.location.href = 'html/login9.html';
        }
        else {
            alert("Нет Такого имени, первая буква должна быть заглавной");
            console.log("incorrect username or password")
            return
        }
    }
}
function get_info1 (){
    var password = document.getElementById('password').value;
    localStorage.setItem('work1', password);
    window.location.href = 'index.html';
    return
}
function get_info2 (){
    var password = document.getElementById('password').value;
    localStorage.setItem('work2', password);
    window.location.href = 'index.html';
    return
}
function get_info3 (){
    var password = document.getElementById('password').value;
    localStorage.setItem('work3', password);
    window.location.href = 'index.html';
    return
}
function get_info4 (){
    var password = document.getElementById('password').value;
    localStorage.setItem('work4', password);
    window.location.href = 'index.html';
    return
}
function get_info5 (){
    var password = document.getElementById('password').value;
    localStorage.setItem('work5', password);
    window.location.href = 'index.html';
    return
}
function get_info6 (){
    var password = document.getElementById('password').value;
    localStorage.setItem('work6', password);
    window.location.href = 'index.html';
    return
}
function get_info7 (){
    var password = document.getElementById('password').value;
    localStorage.setItem('work7', password);
    window.location.href = 'index.html';
    return
}
function get_info8 (){
    var password = document.getElementById('password').value;
    localStorage.setItem('work8', password);
    window.location.href = 'index.html';
    return
}
function get_info9 (){
    var password = document.getElementById('password').value;
    localStorage.setItem('work9', password);
    window.location.href = 'index.html';
    return
}

function get_info() {
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

