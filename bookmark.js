const bookmarkName = document.getElementById("Bookmark-Name");
const bookmarkURL = document.getElementById("Bookmark-URL");
const addbookmark = document.getElementById("btn");
const container = document.querySelector(".content");

let bookmark = JSON.parse(localStorage.getItem("bookmark")) || [];;

addbookmark.addEventListener("click", () => {
  const div = document.createElement("div");
  const link = document.createElement("a");
  const btndelete = document.createElement("btn");
  div.classList.add("add-bookmark");
  btndelete.classList.add("btn-1");
  link.href = bookmarkURL.value;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = bookmarkName.value;
  btndelete.textContent = "Remove";
  div.append(link, btndelete);
  container.append(div);
  console.log(div);
  bookmark.push({
    name: bookmarkName.value,
    url: bookmarkURL.value,
  });
  localStorage.setItem("bookmark", JSON.stringify(bookmark));
console.log(localStorage.getItem("bookmark"));
  bookmarkName.value = "";
  bookmarkURL.value = "";

  btndelete.addEventListener("click", () => {
    div.remove();
    console.log(bookmarkName.value);
    console.log(bookmarkURL.value);
  });

  //  console.log(bookmarkName.value)
  //  console.log(bookmarkURL.value)

  // container.insertAdjacentHTML("afterend",div)
});

// const deletebtn = document.getElementById("btn-1");

// deletebtn.addEventListener("click", (event) => {
//   const selectdbtn = event.target.parentElement;
//   selectdbtn.remove();
//   console.log(selectdbtn);
// });
