const body = document.body;
body.append("Hello World");
body.append(`\n`,"hello ","namastey ","bye");

const div = document.createElement("div");

div.innerText = "hello viewer";
body.append(div);
div.textContent = "hi";
body.append(div);
div.innerHTML = "<strong>im strong</strong>"
body.append(div);

const div1 = document.querySelector("div");

console.log(div.innerText);
console.log(div.textContent);


