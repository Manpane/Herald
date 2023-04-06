console.log("This is printed in the console not in the document.");

document.getElementById("paragraph").innerHTML = "Hello world its inserted from javascript";
document.getElementById("paragraph").style.textAlign = "center";
grid_container = document.getElementById("grid-container")

// dynamic grid columns
function reshapeGrid(e){
  gr_cont = document.getElementById("grid-container")
  let columns = ""
  for ( let i = 0;i<window.innerWidth/300;i++) columns+="auto "
  gr_cont.style.gridTemplateColumns = columns
}
window.addEventListener('resize',reshapeGrid)
reshapeGrid()

fetch("https://random-word-api.herokuapp.com/word?number=100")
.then(res=>res.json())
.then(data=>{
  for (word of data){
    grid_item = document.createElement("div");
    grid_item.textContent = word;
    grid_item.setAttribute("class","grid-item")
    grid_container.appendChild(grid_item)
  }
})

