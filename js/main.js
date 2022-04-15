
let massiv = []
let obj = {}

let elList = document.querySelector("#list")
let elY = document.querySelector("#ycordinat")
let elX = document.querySelector("#xcordinat")

let count = 0
let count2 = 1
let y = 1
for (let i = 0; i < 8; i++){
  let li = document.createElement("li")
  li.className = `item 8 ${y}`
  li.id = `${count2}`
  if(y == 8) {
    y = li.classList[1]
  }
  elList.appendChild(li)
  if (count % 2 == 0) {
    li.classList.add("white")
  }
  if (count % 2 != 0) {
    li.classList.add("dark")
  }
  count++
  count2++
  y++
  massiv.push(li)
}

y = 1
for (let i = 0; i < 8; i++){
  let li = document.createElement("li")
  li.className = `item 7 ${y}`
  li.id = `${count2}`
  elList.appendChild(li)
  if (count % 2 == 0) {
    li.classList.add("dark")
  }
  if (count % 2 != 0) {
    li.classList.add("white")
  }
  count++
  count2++
  y++
  massiv.push(li)
  // console.log(li.className);
}
y = 1
for (let i = 0; i < 8; i++){
  let li = document.createElement("li")
  li.className = `item 6 ${y}`
  li.id = `${count2}`
  elList.appendChild(li)
  if (count % 2 == 0) {
    li.classList.add("white")
  }
  if (count % 2 != 0) {
    li.classList.add("dark")
  }
  count++
  count2++
  y++
  massiv.push(li)
  // obj.push(li)
}
y = 1
for (let i = 0; i < 8; i++){
  let li = document.createElement("li")
  li.className = `item 5 ${y}`
  li.id = `${count2}`
  elList.appendChild(li)
  if (count % 2 == 0) {
    li.classList.add("dark")
  }
  if (count % 2 != 0) {
    li.classList.add("white")
  }
  count++
  count2++
  y++
  massiv.push(li)
  // obj.push(li)
}
y = 1
for (let i = 0; i < 8; i++){
  let li = document.createElement("li")
  li.className = `item 4 ${y}`
  li.id = `${count2}`
  elList.appendChild(li)
  if (count % 2 == 0) {
    li.classList.add("white")
  }
  if (count % 2 != 0) {
    li.classList.add("dark")
  }
  count++
  count2++
  y++
  massiv.push(li)
  // obj.push(li)
}
y = 1
for (let i = 0; i < 8; i++){
  let li = document.createElement("li")
  li.className = `item 3 ${y}`
  li.id = `${count2}`
  elList.appendChild(li)
  if (count % 2 == 0) {
    li.classList.add("dark")
  }
  if (count % 2 != 0) {
    li.classList.add("white")
  }
  count++
  count2++
  y++
  massiv.push(li)
  // obj.push(li)
}
y = 1
for (let i = 0; i < 8; i++){
  let li = document.createElement("li")
  li.className = `item 2 ${y}`
  li.id = `${count2}`
  elList.appendChild(li)
  if (count % 2 == 0) {
    li.classList.add("white")
  }
  if (count % 2 != 0) {
    li.classList.add("dark")
  }
  count++
  count2++
  y++
  massiv.push(li)
  // obj.push(li)
}
y = 1
for (let i = 0; i < 8; i++){
  let li = document.createElement("li")
  li.className = `item 1 ${y}`
  li.id = `${count2}`
  elList.appendChild(li)
  if (count % 2 == 0) {
    li.classList.add("dark")
  }
  if (count % 2 != 0) {
    li.classList.add("white")
  }
  count++
  count2++
  y++
  massiv.push(li)
  // obj.push(li)
}


let ou = document.querySelector("#text")
let btu = document.querySelector("#button")

let elitem = document.querySelectorAll(".item")
elitem.forEach((itemm, index) => {
  itemm.addEventListener("mouseover",(e) => {
    // console.log(e.target.classList[1]);
    e.target.classList.add("red")
    elX.textContent = e.target.classList[1]
    elY.textContent = e.target.classList[2]
    // console.log(e.target.classList);
  })
})

elitem.forEach((itemm, index) => {
  itemm.addEventListener("mouseout",(e) => {
    // console.log(e.target.classList);
    e.target.classList.remove("red")
  })
})









let arr = []
for (let i = 8; i >= 1; i--){
  for (let j = 1; j <= 8; j++){
    let obj2 = {
      x:i,
      y:j
    }
    arr.push(obj2)
  }
}







// let object = [
//   {1:1},{1:2},{1:3},
//   {2:1},{2:2},{2:3},
//   {3:1},{3:2},{3:3},
// ]

// arr.forEach(item => {
//   // if(item)
//   console.log(item);
// })


// console.log(elX.textContent);

// console.log(object[0]);
// list.addEventListener("mousemove" , funksiya)
// function funksiya (e) {
//   // console.log(e.type);
//   massiv.forEach((item, index) => {
//     console.log(index);
//     // if (index < 8){
//     //   console.log(index);
//     // }
//     ou.innerHTML = `mouseX ${index}`
//   })
// }



// mousemove mishkani harakatini korsatadi
// let btu = document.querySelector("#button")
// btu.addEventListener("mousemove" , funksiya)
// function funksiya (e) {
//   console.log(e.type);
// }




// buttonni hover bolganda mishkani harakati px da paydo boladi y oqi boyicha
// let ou = document.querySelector("#text")
// let btu = document.querySelector("#button")
// btu.addEventListener("mousemove" , funksiya)

// function funksiya (e) {
//   console.log(e.type);
//   ou.innerHTML = `mouseY ${e.offsetY}`
// }







// massiv.forEach((item,index) => {
//   console.log(index);
// })
