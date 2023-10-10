// console.dir(document)

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.forms[0]);
// console.log(document.images);

//GETELEMENTBYID
// console.log(document.getElementById('header-title'));

// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'GoodBye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px black';

//GETELEMENTSBYCLASSNAME
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

//Gives Error
// items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i<items.length;i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// items[2].style.backgroundColor = 'green';

// for(var i = 0; i<items.length;i++){
//   items[i].style.fontWeight = 'bold';
// }

// var titleElements = document.getElementsByClassName("title");

//   for (var i = 0; i < titleElements.length; i++) {
//     var element = titleElements[i];
    
//     element.style.fontWeight = "bold";
//     element.style.color = "green";
//   }

//GETELEMENTBYTGNAME
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives Error
// // li.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i<li.length;i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }


//Changing all the li elements along with new li tag 
// var li = document.getElementsByTagName('li');
// for(var i = 0; i<li.length;i++){
//   li[i].style.backgroundColor = 'skyblue';
// }

//All other li tags are changing but newely added li tag is not as it don't have any class like the older ones
// var list = document.getElementsByClassName('list-group-item');
// for(var i = 0; i<list.length;i++){
//   list[i].style.color = 'yellow';
// }

//QUERYSELECTOR
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit  = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';
 
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

//QUERYSELECTORALL
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';
// var odd = document.querySelectorAll('li:nth-child(odd)'); 

// for(var i = 0; i<odd.length;i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
// }

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display = 'none  ';

// var second = document.querySelectorAll('.list-group-item');
// second[1].style.color = 'green';

// var odd = document.querySelectorAll('li:nth-child(odd)'); 

// for(var i = 0; i<odd.length;i++){
//   odd[i].style.backgroundColor = 'green';
// }

//TRAVERSING THE DOM

var itemList = document.querySelector('#items');

//ParentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//ParntElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);


//ChildNodes
// console.log(itemList.childNodes);
// console.log(itemList.children);

// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// //FirstChild
// console.log(itemList.firstChild);
// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

//last Child
// console.log(itemList.lastChild);
//firstElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 1';

//NextSiblings
// console.log(itemList.nextSibling);
// //NextEleentSibling
// console.log(itemList.nextElementSibling);

//PrevSibling
// console.log(itemList.previousSibling);
// //PrevElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

//Create Element

//Create a div

var newdiv = document.createElement('div');

//Add class
newdiv.className = 'hello';

//Add id
newdiv.id = 'hello1';

//Add atr
newdiv.setAttribute('title', 'Hello Div');

//Create text node
var newDivText = document.createTextNode('Hello');

//add text to div

newdiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

newdiv.style.fontSize = '30px';

container.insertBefore(newdiv, h1);

//Creating befor item 1
var newDiv2 = document.createElement('div');
newDiv2.className = 'hello2';

var newDiv2Text = document.createTextNode('Hello');
newDiv2.appendChild(newDiv2Text);

console.log(newDiv2);

var container2 = document.querySelector('ul');
var h2 = document.querySelector('ul li');
container2.insertBefore(newDiv2, h2);