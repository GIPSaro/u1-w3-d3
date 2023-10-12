window.onload = () => {
  const form = document.getElementById("myForm");
  const cancelButtom = document.querySelector(
    "#buttomArea buttom[type='buttom']"
  );

  cancelButtom.onclick = function () {
    const hasConfirmed = confirm("Are you sure? It's EMPTY");
    if (hasConfirmed) {
      form.reset();
    }
  };

  form.onsubmit = function (e) {
    e.preventDefault();

    const inputTask = document.getElementById("listName");
    const addButtom = document.getElementById("addButtom");
    const taskList = document.getElementById("taskList");

    const main = document.getElementsByTagName("main")[0];
    const activity = document.createElement("div");
    activity.className = "listName";
  };
};

/*const list1 = document.createElement("h3");
list1.innerText = " "
const list2 = document.createElement("h3");
list2.innerText = " "
const list3 = document.createElement("h3");
list3.innerText = " "
const list4 = document.createElement("h3");
list4.innerText = ""
const buttom = document.createElement("buttom")
buttom.innerText= "DELETE"

buttom.onclick= function (e){
    const deletButtom = e.target
    deletButtom.parentNote.remove()
}*/
