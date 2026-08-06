const bookmarkName = document.getElementById("Bookmark-Name")
const bookmarkURL = document.getElementById("Bookmark-URL")
const addbookmark = document.getElementById("btn")
const container = document.querySelector(".content")


addbookmark.addEventListener("click",()=>{


  const div = `<div class="add-bookmark">
          <a href= ${bookmarkURL.value} target="_blank" rel="noopener noreferrer">${bookmarkName.value}</a>
      <button id="btn-1">Remove</button>
    </div>`
    console.log(bookmarkName.value)
    console.log(bookmarkURL.value)

   container.insertAdjacentHTML("afterend",div)
      
})

const deletebtn = document.getElementById("btn-1")

deletebtn.addEventListener("click",(event)=>{
   const selectdbtn = event.target.parentElement;
   selectdbtn.remove() ;
   console.log(selectdbtn)
  

})