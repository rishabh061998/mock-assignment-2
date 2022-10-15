fetch("https://dog.ceo/api/breed/hound/images").then((data)=>{
    return data.json();
    // console.log(data)
}).then((completedata)=>{
    // console.log(completedata.message);
    // document.getElementById("root").innerHTML=completedata.message;
   let data1="";
   completedata.message.map((values)=>{
    data1+=` <div class="card">
    <h1 class="title">Dogs</h1>
    <img src=${values} alt="img" class="images">
    <p>Description</p>
    <p class="category">Category</p>
</div>`
   });

   document.getElementById("cards").innerHTML=data1;
  

}).catch((err)=>{
    console.log(err)
})