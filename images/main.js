displayView()
productList=[]
products=$("#products")


function displayView(){
 $.ajax({
   type: "get",
   url: "http://159.65.21.42:9000/products",
   success: function (res) {
     console.log(res);
     productList = res;
     productList = productList.reverse();
    

     let row = "";
     for (let i = 0; i < productList.length; i++) {
       if (
         productList[i].category == "Separates" ||
         productList[i].category == "Dress and jumpsuit" ||
         productList[i].category == "Lifestyle"
       ) {
         row += `<div>
         <a href="first.html">
           <img src="${productList[i]["image"]}" alt="" />
         </a>
         <h4>${productList[i]["name"]}</h4>
         <p>£,${productList[i]["price"]}</p>
       </div>`
        
       }
       
     }
     

     products.html(row);
   },
   error: function (err) {
     console.log(err);
     alert(err.statusText);
   },
 });
}
 
 
 let slideIndex = 1;
 showSlides(slideIndex);
 
 function plusSlides(n) {
   showSlides(slideIndex += n);
 }
 
 function currentSlide(n) {
   showSlides(slideIndex = n);
 }
 
 function showSlides(n) {
   let i;
   let slides = document.getElementsByClassName("mySlides");
   let dots = document.getElementsByClassName("dot");
   if (n > slides.length) {slideIndex = 1}    
   if (n < 1) {slideIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
   }
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex-1].style.display = "block";  
   
 }

