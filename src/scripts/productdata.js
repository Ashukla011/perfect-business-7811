window.addEventListener("load",()=>{
    getData()
})
let getData = async()=>{
    let res = await fetch(`https://still-chamber-16033.herokuapp.com/makeup_data?_start=101&_limit=26`);
    let x = await res.json();
    // console.log(x)
  
    append(x)
}
//   let cSearch = async(na)=>{
    //     let res = await fetch(`https://still-chamber-16033.herokuapp.com/makeup_data?_limit=25&product_type=${na}`);
    //     let x = await res.json();
    //     console.log(x)
    
    //     append(x)
    //   }
    // append(x)
    function  append(x) {
        // var bag = JSON.parse(localStorage.getItem("jhola")) || []
        // console.log(bag,typeof(bag))
        let right_main_bottom = document.getElementById("right_main_bottom")
        right_main_bottom.innerHTML = null
        
        var add = JSON.parse(localStorage.getItem('mycart')) || []
    x.forEach((el) => {
        let img = document.createElement("img");
        img.src = el.image_link
        img.addEventListener("click",function(){
            localStorage.setItem("news",JSON.stringify(el))
            window.location.href="./displayProductPage.html"
        })
        let descri = document.createElement("p");
        descri.innerText ="Brand"+":"+" "+ el.brand;
        let ti = document.createElement("p");
        ti.innerText = "Name"+":"+" "+ el.name;
        let tt = document.createElement("p");
        tt.innerText = "Price"+":"+" "+ el.price_sign+" "+ el.price

        let p4=document.createElement("button")
        p4.innerText="ADD TO CART"
        p4.setAttribute("class", "add_to_cart")
        p4.addEventListener("click", function(){
            add.push(el)
                  localStorage.setItem("mycart", JSON.stringify(add))
                  alert("Items added in Cart" )
        })
        // let div3= document.createElement("div")
        // div3.append(img,descri,ti,tt)
        

        let div = document.createElement("div"); 
        div.onclick =() =>{
            saveData()
        }
        div.setAttribute("class","list1")  
        div.append(img,descri,ti,tt,p4)
        
        right_main_bottom.append(div )

    })
}
let saveData = () => {
    console.log("working")
}

let canadian = document.getElementById("canadian");
canadian.onclick = () =>{
    cSearch()
}
  let cSearch = async(na)=>{
    let res = await fetch(`https://still-chamber-16033.herokuapp.com/makeup_data?_start=201&_limit=24&product_tags=canadian`);
    let x = await res.json();
    console.log(x)
  
    append(x)
  }

  let certClean = document.getElementById("certClean");
  certClean.onclick = () =>{
      cSearch2()
  }
    let cSearch2 = async(na)=>{
      let res = await fetch(`https://still-chamber-16033.herokuapp.com/makeup_data?_start=250&_limit=24&product_tags=certClean`);
      let x = await res.json();
      console.log(x)
    
      append(x)
    }

    let dior = document.getElementById("dior");
    dior.onclick = () =>{
      cSearch3()
  }
    let cSearch3 = async(na)=>{
      let res = await fetch(`https://still-chamber-16033.herokuapp.com/makeup_data?brand=dior&_limit=16`);
      let x = await res.json();
      console.log(x)
    
      append(x)
    }
   
    let pegination1 = document.getElementById("1");
    pegination1.onclick = (e) =>{
      peg1(e)
  }
    let peg1 = async(na)=>{
      let res = await fetch(`https://still-chamber-16033.herokuapp.com/makeup_data?_start=450&_limit=24`);
      let x = await res.json();
    //   console.log(x)
    
      append(x)
    }   
    let pegination2 = document.getElementById("2");
    pegination2.onclick = (e) =>{
      peg2(e)
  }
    let peg2 = async(na)=>{
      let res = await fetch(`https://still-chamber-16033.herokuapp.com/makeup_data?_start=470&_limit=24`);
      let x = await res.json();
    //   console.log(x)
    
      append(x)
    }
    let pegination3 = document.getElementById("3");
    pegination3.onclick = (e) =>{
      peg3(e)
  }
    let peg3 = async(na)=>{
      let res = await fetch(`https://still-chamber-16033.herokuapp.com/makeup_data?_start=500&_limit=24`);
      let x = await res.json();
    //   console.log(x)
    
      append(x)
    }
    let pegination4 = document.getElementById("4");
    pegination4.onclick = (e) =>{
      peg4(e)
  }
    let peg4 = async(na)=>{
      let res = await fetch(`https://still-chamber-16033.herokuapp.com/makeup_data?_start=530&_limit=24`);
      let x = await res.json();
    //   console.log(x)
    
      append(x)
    }