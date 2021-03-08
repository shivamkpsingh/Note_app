// console.log('this is my first website using javascript')
showNote();

// function to add note



let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', function (e) {

   let addTxt = document.getElementById("addTxt");
   let notes = localStorage.getItem("notes");
   if (notes == null) {
      notesObj = [];
   }
   else {
      notesObj = JSON.parse(notes);
   }
   notesObj.push(addTxt.value);
   localStorage.setItem('notes', JSON.stringify(notesObj));
   addTxt.value = " ";
   // console.log(notesObj);
   showNote();
})


// functon to show note
function showNote() {
   let notes = localStorage.getItem("notes");
   if (notes == null) {
      notesObj = [];
   }
   else {
      notesObj = JSON.parse(notes);
   }
   let html = "";
   notesObj.forEach(function (element, index) {
      html += `
         <div class="noteCard my-2 mx-2" style="width: 18rem;">
         <div class="card-body">
             <h5 class="card-title">Note ${index + 1}</h5>
             <p class="card-text">${element}</p>
             <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete note</button>
         </div>
     </div>`;
   });

   let notesElm = document.getElementById("notes")
   if (notesObj.length != 0) {
      notesElm.innerHTML = html;
   }
   else {
      notesElm.innerHTML = `Nothing to show, please use above button "add notes" to add notes `
   }
}


// function to delete a notes
function deleteNote(index) {

   // console.log('i am deleting',index)

   let notes = localStorage.getItem("notes");
   if (notes == null) {
      notesObj = [];
   }
   else {
      notesObj = JSON.parse(notes);
   }
   notesObj.splice(index, 1);
   localStorage.setItem('notes', JSON.stringify(notesObj));
   showNote();
}


// search item



let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {
   let inputVal = search.value.toLowerCase();
   // console.log('input is fired', inputVal);
   let noteCard = document.getElementsByClassName('noteCard');
   Array.from(noteCard).forEach(function (element) {
      let cardTxt = element.getElementsByTagName('p')[0].innerText
      // console.log(cardTxt)
      if (cardTxt.includes(inputVal)) {
         element.style.display = "block";
      }
      else {
         element.style.display = "none";
      }
   })
})