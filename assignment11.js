// // date 
// var curdate =new Date();

// // document.getElementById("table").innerHTML=curdate;
// var theday =curdate.getDay();
// document.getElementById("table").innerHTML=theday;
// var days =["sun","mon","tus","wed","thu","fri","sat","sun"]
// document.getElementById("mathround").innerHTML=days[theday];

alert("roll no 17316")
localStorage.dtask=JSON.stringify([]);
localStorage.ttask=JSON.stringify([]);
localStorage.destask=JSON.stringify([]);
updateList();
function addEvent()
{
  //take input from input box
   let input=document.getElementById("date_input");
   let tinput=document.getElementById("TEXT_input")
   let desinput=document.getElementById("des_input")
  //take task from local storage and store task
var tasksArr=JSON.parse(localStorage.dtask);
var ttasksArr=JSON.parse(localStorage.ttask);
var destasksArr=JSON.parse(localStorage.destask);
  //push element
tasksArr.push(input.value);
ttasksArr.push(tinput.value);
destasksArr.push(desinput.value);
  //update that arry to local storage
localStorage.dtask = JSON.stringify(tasksArr);
localStorage.ttask=JSON.stringify(ttasksArr);
localStorage.destask=JSON.stringify(destasksArr);
  //empty input box
input.value="";
tinput.value="";
desinput.value="";
updateList();
}
  //update list
 
  function updateList()
  {
let ul = document.getElementById("task");
let tul=document.getElementById("ttask")
let desul=document.getElementById("destask")
let tasksArr = JSON.parse(localStorage.dtask);
let ttasksArr=JSON.parse(localStorage.ttask);
let destasksArr=JSON.parse(localStorage.destask);
let html ="";
let length=tasksArr.length-1;
for (let index = length; index >=0; index--) {
 
  html += index+1+'<li class="list-group-item" id "'+ index+'" >'+tasksArr[index]+'<span class="btn btn-danger btn-sm float-right remove-btn" onclick ="remove(this)">remove</span></li><li class="list-group-item" id "'+ index+'">'+ttasksArr[index]+'<span class="btn btn-danger btn-sm float-right remove-btn" onclick ="remove(this)">remove</span></li><li class="list-group-item" id "'+ index+'">'+ttasksArr[index]+'<span class="btn btn-danger btn-sm float-right remove-btn" onclick ="remove(this)">remove</span></li>';

}
ul.innerHTML=html;
tul.innerHTML=html;
desul.innerHTML=html;
  }
function remove(span_tag)
{
  let index_id= span_tag.parentElement.id;
  // get array
  let tasksArr = JSON.parse(localStorage.dtask);
  let ttasksArr = JSON.parse(localStorage.ttask);
  let destasksArr=JSON.parse(localStorage.destask);
  //update tasks array (remove item)
  tasksArr.splice(index_id-1,1) 
  ttasksArr.splice(index_id-1,1) 
  destasksArr.splice(index_id-1,1)
//update localstorage new array
localStorage.dtask=JSON.stringify(tasksArr);
localStorage.ttask=JSON.stringify(ttasksArr);
localStorage.destask=JSON.stringify(destasksArr);
updateList();
}