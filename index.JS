


const nav = [
 {
    id:1,
    link:'ozodbek',
 },
 {
    id:2,
    link:'ozodbek'
 },
 {
  id:3,
  link:'ozodbek'
 },
 {
    id:4,
    link:'ozodbek'
 }
 
];


let Nav = document.querySelector(".nav")


const htmlga = nav.map((student) => {
    let h1 = document.createElement('h1');
    h1.innerHTML = student.link;
    Nav.appendChild(h1);


  Nav.style.display = "flex";
  Nav.style.alignItems = "center";
  Nav.style.justifyContent = "space-beetwen";
  Nav.style.gap = "30px"
  Nav.style.background = 'brown';
  Nav.style.width = "100%"
  Nav.style.height ="100px"
  h1.style.color = "#fff"

  h1.onclick =function() {
   Nav.removeChild(h1);
   alert("Uzur h1 ni bosganda ketadi 😂")
  }
});

let body = document.body;

function dark()  {
    body.classList.toggle('mode')
}









