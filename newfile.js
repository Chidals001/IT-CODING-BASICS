//let heading = document.getElementById("container");
//let counter = 0;
 /*function intervalF () {
    
    counter++;
    console.log("counter:"+ " " + counter)
    if (counter >=5){
        clearInterval(myInterval)
        console.log("counter ended")
    }
    

}


let myInterval = setInterval(intervalF,4000);*/


/*let count = 0;
function counter (){
    let inc = count++;
    console.log("current count is:"+ inc);
}
let counterID = setInterval(counter, 1000);

    function endCount(){
        clearInterval(counterID)
    }
    setTimeout(endCount,4000)*/

    //set timeOut executes the function only 
    // once after the delayy time


   //****

    //Assignment

    /*function sumUpTo(n){
        let count = 0;
        for(let i=0; i<=n; i++){
            count = count + count+1;
        }
   return i;
    } */


   //****

  // solution 1

   /*function  two(n) {
        let count = 0;
        for (let i = 0; i < n; i++){
            count = count + i+1

        }
        return count;
    } */

        // solution 2


  /* function reverseArray (arr){
    let result = arr.sort((a,b)=> b-a);
    return result;
   } */
       

    //solution 3

    
   /* function countEvens(arr){
        let result = arr.filter((number)=>number % 2 ==0)
        return result.length
    } */


        //solution 4




   /* function capitalizeWords(arr){
            let result = arr.map(letter=>{
                return letter.charAt(0).toUpperCase() + letter.slice(1);            });
            
            return result;
            } */
        


        //solution 5



       /* function findMax(arr){
          let result = arr[0];

          for(let i =1; i <= arr.length; i++){
            if(arr[i] > result){
                result = arr[i];
            }
          }
          return result;
        } */
         

          //solution 6



         /* function filterGreaterThanTen(arr){
            let result = arr.filter(number =>number >10)
            return result;
          } */


            //solution 7



         /*function fizzBuzz (n){
           for(let i = 1; i <= n; i++){
            if (i % 3 ===0 && i % 5 === 0){
                console.log("FizzBuzz");
            }
            else if (i % 3 === 0){
                console.log("Fizz");
            }
            else if (i % 5 === 0 ){
                console.log("Buzz")
            }
            else{console.log(i)}
           }
        } */


           //solution 8



         /*  function countOccurences(arr,val){
            let count = 0;
            for(let i = 0; i <= arr.length; i++){
                if(arr[i] ==val){
                    count++
                }
            }
            
                console.log(count)
            } */
            


                //solution 9




            /*function doubleNumbers(arr){
               const result = arr.map(number => number + number);
               return result;
            }  */
           


               //solution 10



               /*function firstEvenIndex(arr){
                let result = arr.fidIndex(number => number % 2 === 0);
                return result;
                
               } */


            
            
           



   //****EVENTS****
    

   //const open = document.querySelector(".open");
   //const close = document.querySelector(".close");
   //const heading = document.querySelector(".heading");

   //open.addEventListener("click",function(){
    //heading.style.display = "inline";

   //})

   //close.addEventListener("click",function(){
//heading.style.display = "none";
    
   //})
   window.addEventListener("keypress",(e)
   )
   const input = document.getElementsByClassName("input")
   const container = document.getElementsByClassName("container")

   input.addEventListener("input",function (e){
    let target = e.target;
    if(target.value === ""){
        container.display ="none"
        return;
    }


    container.style.display = "block"
    container.innerHTML = input.value;
   })
   
    

    




    