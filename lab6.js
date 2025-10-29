//function called when button clicked 
function getFacts(){
    fetch('https://brianobruno.github.io/cats.json') //Bruno's link
    .then(res=>res.json()) //res is reponse converts to JS object  .json 
    .then(data=>{

//ID SORTINGGGG:
/*W3:const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b}); */
data.facts.sort((apple,banana)=>apple.factId-banana.factId);

//update table with elements
    //findtable using id
let table=document.getElementById("factTable");
    //loop 
for(let i=0; i<data.facts.length;i++){
        let row=table.insertRow(-1);//adds at end
        let column1=row.insertCell(0);//first column
        let column2=row.insertCell(1);//second

        column1.innerHTML=data.facts[i].factId;
        column2.innerHTML=data.facts[i].text;
    }
     //if data has image
    if(data.catPhoto){
    //updates the image using id
        document.getElementById("kittyImage").src= data.catPhoto;
    }
    });
}