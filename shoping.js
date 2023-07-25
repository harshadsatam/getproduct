
const btn1 =document.getElementById("btn1");

const container =document.getElementById("container");



btn1.addEventListener("click",async function(){

    const response = await fetch("https://fakestoreapi.com/products");

    const data = await response.json();

    displayusers(data);


    
});


function displayusers(users) {

    console.log(users);

    let newli ="";

    users.forEach(function(user) {

        console.log(user);

        newTr = `  
        <div class="card">
        <div class="images">
            <img src="${user.image}" alt="">
        </div>
        <div class="radius"><h2>${user.price}</h2></div>
        <br>
        <div>
            <h4>${user.title}</h4>
            <br>
               <button>MEN'S CLOTHING</button> 
               <br>
               <br>
        </div>



    </div>`;

    container.insertAdjacentHTML("beforeend",newTr);
        
    });
    
}