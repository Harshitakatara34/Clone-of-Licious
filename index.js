let bag=[]
fetch("./data.json").then((res)=>(res.json()))
 .then((data)=>{
  bag=data;
  displayCard(data)
 })
  
  let cartitems=JSON.parse(localStorage.getItem("cartproducts"))||[]
  function displayCard(data){
document.querySelector("#container").innerText=""
    data.forEach(function(elem){
      
      let div=document.createElement("div")
      let image=document.createElement("img")
      image.setAttribute("src",elem.image)
      let heading=document.createElement("h1")
      heading.innerText=elem.heading
      let para=document.createElement("h2")
      para.innerText=elem.para
      let price=document.createElement("h2")
      price.innerText=elem.price
      let quant=document.createElement("h2")
      quant.innerText=elem.quantity
      let cart=document.createElement("button")
      cart.innerText="Add To Cart"
      cart.addEventListener("click",function(){
      cartitems.push(elem);
      localStorage.setItem("cartproducts",JSON.stringify(cartitems));
      })
      div.append(image,heading,para,price,quant,cart);
      document.querySelector("#container").append(div);
  
      })
  }


 
  function search(){
          let q=document.querySelector("input").value;
          console.log(q)
          let newData=bag.filter(function (elem){
              return elem.heading.toLowerCase().includes(q.toLowerCase())
          })
          displayCard(newData);
      }




      function openNav() {
        document.getElementById("mySidenav").style.width = "450px";
      }
      
      /* Set the width of the side navigation to 0 */
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
      
