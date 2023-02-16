// Global
var documentName = document;

var SiteName = documentName.getElementById("siteName")
var siteUrl = documentName.getElementById("siteUrl")
var addBtn = documentName.getElementById("addBtn")
var Addbooks;


if (localStorage.getItem("Addbooks") == null) {
  Addbooks = [];
} else {
  Addbooks = JSON.parse(localStorage.getItem("Addbooks"))
  display(Addbooks)
}

function addbook() {
  var book = {
    name: SiteName.value,
    Url: siteUrl.value
  }
  Addbooks.push(book)
  localStorage.setItem("Addbooks", JSON.stringify(Addbooks))
  reset()
  display(Addbooks)
 
}
function display(book) {
  var cartona = ` `
  for (i = 0; i < book.length; i++) {
    cartona += `     
    <tr>
    <th scope="row">${i + 1}</th>
    <td>${book[i].name}</td>
    <td>${book[i].Url}</td>
    <td><a href="${book[i].Url}" target="_blank" class="btn btn-warning">Visite,</a></td>
    <td><button onclick="deleteSite(${i})" class="btn btn-danger">Delete</button></td>
    </tr>
    `
  }
  documentName.getElementById("Box").innerHTML = cartona
}
function deleteSite(index) {
  Addbooks.splice(index, 1)
  localStorage.setItem("Addbooks", JSON.stringify(Addbooks))
  display(Addbooks)
}
function reset() {
  SiteName.value = "";
  siteUrl.value = "";
}