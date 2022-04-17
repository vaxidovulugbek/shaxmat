
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
  li.className = `item`
  li.classList.add(`y_${y}`)
  li.classList.add(`8`)
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
  li.className = `item`
  li.classList.add(`y_${y}`)
  li.classList.add(`7`)
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
}
y = 1
for (let i = 0; i < 8; i++){
  let li = document.createElement("li")
  li.className = `item`
  li.classList.add(`y_${y}`)
  li.classList.add(`6`)
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
  li.className = `item`
  li.classList.add(`y_${y}`)
  li.classList.add(`5`)
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
}
y = 1
for (let i = 0; i < 8; i++){
  let li = document.createElement("li")
  li.className = `item`
  li.classList.add(`y_${y}`)
  li.classList.add(`4`)
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
  li.className = `item`
  li.classList.add(`y_${y}`)
  li.classList.add(`3`)
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
}
y = 1
for (let i = 0; i < 8; i++){
  let li = document.createElement("li")
  li.className = `item`
  li.classList.add(`Y_${y}`)
  li.classList.add(`2`)
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
  li.className = `item`
  li.classList.add(`y_${y}`)
  li.classList.add(`1`)
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
  // console.log(li.classList);
}

let elitem = document.querySelectorAll(".item")


elitem.forEach((itemm, index) => {
  itemm.addEventListener("mouseover",(e) => {
    // console.log(e.target.classList[1]);
    e.target.classList.add("black")
    elX.textContent = e.target.classList[2]
    elY.textContent = e.target.classList[1].slice(-1)
  })
})

elitem.forEach((itemm, index) => {
  itemm.addEventListener("mouseout",(e) => {
    e.target.classList.remove("black")
  })
})


// ruh yurishi
// elContentSubitem1.addEventListener("click", (e) => {
//   // let elitem = document.querySelectorAll(".item")
//   elitem.forEach((itemm, index) => {
//   itemm.addEventListener("mouseover",(e) => {
//     e.target.classList.add("black")
//     massiv.forEach(el => {
//       if (el.classList[1].slice(-1) == e.target.classList[1].slice(-1)) {
//         el.classList.add("red")
//       }
//       if (el.classList[2] == e.target.classList[2]) {
//         el.classList.add("red")
//       }
//       // console.log(el.classList[2]);
//     })
//   })
// })

// elitem.forEach((itemm, index) => {
//   itemm.addEventListener("mouseout",(e) => {
//     e.target.classList.remove("black")
//     massiv.forEach(el => {
//       if (el.classList[1].slice(-1) == e.target.classList[1].slice(-1)) {
//         el.classList.remove("red")
//       }
//       if (el.classList[2] == e.target.classList[2]) {
//         el.classList.remove("red")
//       }
//       // console.log(el.classList[1].slice(-1));
//     })
//   })
// })
// })
elContentSubitem1.addEventListener("click" ,() => {
  elitem.forEach((itemm, index) => {
    itemm.addEventListener("mouseover",(j) => {
      elitem.forEach((d,h)=>{
        if (j.target.classList[2] ==  d.classList[2])   {
          d.classList.add("red")
        }
        if (j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]) {
          d.classList.add("red")
        }
      }) 
    })
  })

  elitem.forEach((itemm, index) => {
    itemm.addEventListener("mouseout",(j) => {
      elitem.forEach((d,h)=>{
        if (j.target.classList[2] ==  d.classList[2])   {
          d.classList.remove("red")
        }
        if (j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]) {
          d.classList.remove("red")
        }
      }) 
    })
  })
})


// ========================================================================
// =========================== SHOX YURISHI ===============================
// ========================================================================

elContentSubitem5.addEventListener("click", (e) => {
  elitem.forEach((itemm, index) => {
  itemm.addEventListener("mouseover",(j) => {
    elitem.forEach((d,h)=>{
      // console.log(d);
      // console.log(j.target.classList[1].split("_")[1]);
      // console.log(d.classList[2]);
      // console.log(j.target.classList[2]);
      // console.log(j.target.classList[1]);
      // let ay = j.target.classList[1].split("_")[1]
      // let ax = j.target.classList[2]
      // console.log(ax);
      // console.log(d.classList[1].split("_")[1]);
      // console.log(d.classList[1].split("_")[1]);
      if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
        d.classList.add("red")
      }
      if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
        d.classList.add("red")
      }
      if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
        d.classList.add("red")
      }
      if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
        d.classList.add("red")
      }
      if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
        d.classList.add("red")
      }
      if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
        d.classList.add("red")
      }
      if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
        d.classList.add("red")
      }
      if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
        d.classList.add("red")
      }
    }) 
  })
})

elitem.forEach((itemm, index) => {
  itemm.addEventListener("mouseout",(j) => {
    elitem.forEach((d,h)=>{
      if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
    }) 
  })
})
})

// ========================================================================
// =========================== OT YURISHI =================================
// ========================================================================

elContentSubitem2.addEventListener("click" ,() => {
  elitem.forEach((itemm, index) => {
    itemm.addEventListener("mouseover",(j) => {
      elitem.forEach((d,h)=>{
        if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-2 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-2 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+2 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+2 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
      }) 
    })
  })

  elitem.forEach((itemm, index) => {
    itemm.addEventListener("mouseout",(j) => {
      elitem.forEach((d,h)=>{
        if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-2 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-2 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
      }) 
    })
  })
})


// ========================================================================
// =========================== FEL YURISHI ================================
// ========================================================================
elContentSubitem3.addEventListener("click" ,() => {
  elitem.forEach((itemm, index) => {
    itemm.addEventListener("mouseover",(j) => {
      elitem.forEach((d,h)=>{
        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1]-0+2 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+3 == d.classList[2] && j.target.classList[1].split("_")[1]-0+3 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+4 == d.classList[2] && j.target.classList[1].split("_")[1]-0+4 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+5 == d.classList[2] && j.target.classList[1].split("_")[1]-0+5 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+7 == d.classList[2] && j.target.classList[1].split("_")[1]-0+7 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+8 == d.classList[2] && j.target.classList[1].split("_")[1]-0+8 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }


        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-2 == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-3 == d.classList[2] && j.target.classList[1].split("_")[1]-0-3 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-4 == d.classList[2] && j.target.classList[1].split("_")[1]-0-4 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-5 == d.classList[2] && j.target.classList[1].split("_")[1]-0-5 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-7 == d.classList[2] && j.target.classList[1].split("_")[1]-0-7 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-8 == d.classList[2] && j.target.classList[1].split("_")[1]-0-8 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }

        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+3 == d.classList[2] && j.target.classList[1].split("_")[1]-0-3 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+4 == d.classList[2] && j.target.classList[1].split("_")[1]-0-4 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+5 == d.classList[2] && j.target.classList[1].split("_")[1]-0-5 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+7 == d.classList[2] && j.target.classList[1].split("_")[1]-0-7 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+8 == d.classList[2] && j.target.classList[1].split("_")[1]-0-8 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }

        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-2 == d.classList[2] && j.target.classList[1].split("_")[1]-0+2 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-3 == d.classList[2] && j.target.classList[1].split("_")[1]-0+3 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-4 == d.classList[2] && j.target.classList[1].split("_")[1]-0+4 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-5 == d.classList[2] && j.target.classList[1].split("_")[1]-0+5 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-7 == d.classList[2] && j.target.classList[1].split("_")[1]-0+7 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-8 == d.classList[2] && j.target.classList[1].split("_")[1]-0+8 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
      }) 
    })
  })

  elitem.forEach((itemm, index) => {
    itemm.addEventListener("mouseout",(j) => {
      elitem.forEach((d,h)=>{
        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1]-0+2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+3 == d.classList[2] && j.target.classList[1].split("_")[1]-0+3 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+4 == d.classList[2] && j.target.classList[1].split("_")[1]-0+4 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+5 == d.classList[2] && j.target.classList[1].split("_")[1]-0+5 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+7 == d.classList[2] && j.target.classList[1].split("_")[1]-0+7 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+8 == d.classList[2] && j.target.classList[1].split("_")[1]-0+8 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }

        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-2 == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-3 == d.classList[2] && j.target.classList[1].split("_")[1]-0-3 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-4 == d.classList[2] && j.target.classList[1].split("_")[1]-0-4 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-5 == d.classList[2] && j.target.classList[1].split("_")[1]-0-5 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-7 == d.classList[2] && j.target.classList[1].split("_")[1]-0-7 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-8 == d.classList[2] && j.target.classList[1].split("_")[1]-0-8 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }

        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+3 == d.classList[2] && j.target.classList[1].split("_")[1]-0-3 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+4 == d.classList[2] && j.target.classList[1].split("_")[1]-0-4 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+5 == d.classList[2] && j.target.classList[1].split("_")[1]-0-5 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+7 == d.classList[2] && j.target.classList[1].split("_")[1]-0-7 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+8 == d.classList[2] && j.target.classList[1].split("_")[1]-0-8 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }

        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-2 == d.classList[2] && j.target.classList[1].split("_")[1]-0+2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-3 == d.classList[2] && j.target.classList[1].split("_")[1]-0+3 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-4 == d.classList[2] && j.target.classList[1].split("_")[1]-0+4 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-5 == d.classList[2] && j.target.classList[1].split("_")[1]-0+5 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-7 == d.classList[2] && j.target.classList[1].split("_")[1]-0+7 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-8 == d.classList[2] && j.target.classList[1].split("_")[1]-0+8 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
      }) 
    })
  })
})


// ========================================================================
// =========================== QIROLICHA YURISHI ==========================
// ========================================================================

elContentSubitem4.addEventListener("click" ,() => {
  elitem.forEach((itemm, index) => {
    itemm.addEventListener("mouseover",(j) => {
      elitem.forEach((d,h)=>{
        if (j.target.classList[2] ==  d.classList[2])   {
          d.classList.add("red")
        }
        if (j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]) {
          d.classList.add("red")
        }
        // if (d.classList[1].slice(-1) == e.target.classList[1].slice(-1)) {
        //   d.classList.add("red")
        // }
        // if (d.classList[2] == e.target.classList[2]) {
        //   d.classList.add("red")
        // }


        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }

        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1]-0+2 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+3 == d.classList[2] && j.target.classList[1].split("_")[1]-0+3 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+4 == d.classList[2] && j.target.classList[1].split("_")[1]-0+4 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+5 == d.classList[2] && j.target.classList[1].split("_")[1]-0+5 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+7 == d.classList[2] && j.target.classList[1].split("_")[1]-0+7 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+8 == d.classList[2] && j.target.classList[1].split("_")[1]-0+8 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }


        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-2 == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-3 == d.classList[2] && j.target.classList[1].split("_")[1]-0-3 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-4 == d.classList[2] && j.target.classList[1].split("_")[1]-0-4 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-5 == d.classList[2] && j.target.classList[1].split("_")[1]-0-5 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-7 == d.classList[2] && j.target.classList[1].split("_")[1]-0-7 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-8 == d.classList[2] && j.target.classList[1].split("_")[1]-0-8 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }

        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+3 == d.classList[2] && j.target.classList[1].split("_")[1]-0-3 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+4 == d.classList[2] && j.target.classList[1].split("_")[1]-0-4 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+5 == d.classList[2] && j.target.classList[1].split("_")[1]-0-5 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+7 == d.classList[2] && j.target.classList[1].split("_")[1]-0-7 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+8 == d.classList[2] && j.target.classList[1].split("_")[1]-0-8 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }

        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-2 == d.classList[2] && j.target.classList[1].split("_")[1]-0+2 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-3 == d.classList[2] && j.target.classList[1].split("_")[1]-0+3 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-4 == d.classList[2] && j.target.classList[1].split("_")[1]-0+4 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-5 == d.classList[2] && j.target.classList[1].split("_")[1]-0+5 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-7 == d.classList[2] && j.target.classList[1].split("_")[1]-0+7 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-8 == d.classList[2] && j.target.classList[1].split("_")[1]-0+8 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
      }) 
    })
  })

  elitem.forEach((itemm, index) => {
    itemm.addEventListener("mouseout",(j) => {
      elitem.forEach((d,h)=>{
        if (j.target.classList[2] ==  d.classList[2])   {
          d.classList.remove("red")
        }
        if (j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]) {
          d.classList.remove("red")
        }


        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1]-0+2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+3 == d.classList[2] && j.target.classList[1].split("_")[1]-0+3 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+4 == d.classList[2] && j.target.classList[1].split("_")[1]-0+4 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+5 == d.classList[2] && j.target.classList[1].split("_")[1]-0+5 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+7 == d.classList[2] && j.target.classList[1].split("_")[1]-0+7 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+8 == d.classList[2] && j.target.classList[1].split("_")[1]-0+8 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }

        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-2 == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-3 == d.classList[2] && j.target.classList[1].split("_")[1]-0-3 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-4 == d.classList[2] && j.target.classList[1].split("_")[1]-0-4 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-5 == d.classList[2] && j.target.classList[1].split("_")[1]-0-5 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-7 == d.classList[2] && j.target.classList[1].split("_")[1]-0-7 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-8 == d.classList[2] && j.target.classList[1].split("_")[1]-0-8 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }

        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+3 == d.classList[2] && j.target.classList[1].split("_")[1]-0-3 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+4 == d.classList[2] && j.target.classList[1].split("_")[1]-0-4 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+5 == d.classList[2] && j.target.classList[1].split("_")[1]-0-5 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+7 == d.classList[2] && j.target.classList[1].split("_")[1]-0-7 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+8 == d.classList[2] && j.target.classList[1].split("_")[1]-0-8 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }

        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-2 == d.classList[2] && j.target.classList[1].split("_")[1]-0+2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-3 == d.classList[2] && j.target.classList[1].split("_")[1]-0+3 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-4 == d.classList[2] && j.target.classList[1].split("_")[1]-0+4 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-5 == d.classList[2] && j.target.classList[1].split("_")[1]-0+5 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-7 == d.classList[2] && j.target.classList[1].split("_")[1]-0+7 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-8 == d.classList[2] && j.target.classList[1].split("_")[1]-0+8 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }

        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
      }) 
    })
  })
})








// peshka yurishi
elContentSubitem6.addEventListener("click" ,() => {
  elitem.forEach((itemm, index) => {
    itemm.addEventListener("mouseover",(j) => {

      // console.log(itemm.classList[2]);
      
      elitem.forEach((d,h)=>{
        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if (itemm.classList[2] == 2) {
          if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
            d.classList.add("red")
          }
        }
        if (itemm.classList[2] == 1) {
            d.classList.remove("red")
        }
        
      }) 
    })
  })

  elitem.forEach((itemm, index) => {
    itemm.addEventListener("mouseout",(j) => {
      elitem.forEach((d,h)=>{
        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if (itemm.classList[2] == 2) {
          if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
            d.classList.remove("red")
          }
        }
        if (itemm.classList[2] == 1) {
          d.classList.remove("red")
        }
      }) 
    })
  })
})







































//  (e.target.classList[1].slice(-1) - 1 && e.target.classList[2].slice(-1) == el.classList[1].slice(-1) && el.classList[2])



 

// let arr = []
// for (let i = 8; i >= 1; i--){
//   for (let j = 1; j <= 8; j++){
//     let obj2 = {
//       x:i,
//       y:j
//     }
//     arr.push(obj2)
//   }
// }







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
// // console.log(e.target.classList[1].slice(-1)-0 + 1); // x oqi tepe
//     // console.log(e.target.classList[2].slice(-1)); // y oqi
//     // let xoqitepe = e.target.classList[1].slice(-1)-0 + 1
//     // let yoqitepa = e.target.classList[2].slice(-1)-0 + 1
//     console.log(e.target.classList[2].slice(-1)-0 + 1);

//     massiv.forEach(el => {
//       // console.log(el.classList[1]);
//       // console.log(e.target.classList[2].slice(-1)-0 + 1);
//       if (el.classList[1].slice(-1)-0+1 == e.target.classList[2].slice(-1)-0+1) {
//         el.classList.add("red")
//         // console.log(el.classList[1].slice(-1)-0+1);
//         // console.log(e.target.classList[2].slice(-1)-0 + 1);
//       }
//       // if (el.classList[2] == e.target.classList[2]) {
//       //   el.classList.add("red")
//       // }
//     })