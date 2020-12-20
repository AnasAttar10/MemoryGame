
/* localStorage.setItem("names", JSON.stringify(names));

//...
var storedNames = JSON.parse(localStorage.getItem("names")); */


 mystorege =document.getElementById('storege') ; 

for ( var i = 0, len = localStorage.length; i < len; i++ ) {

  key = localStorage.key( i ) ; 
  var t = JSON.parse(localStorage.getItem(key));
  console.log(t);

  person = creatediv_users () ; 

  var c = person.children ; 

  c[0].innerHTML  = key ;

  c[1].innerHTML  = t[0] ;

  c[2].innerHTML  = t[1] ;

  
  mystorege.appendChild( person); 
}



function creatediv_users (){
bigdiv = document.createElement('div');
myspan1 = document.createElement('span');
myspan2 = document.createElement('span');
myspan3 = document.createElement('span');
bigdiv.setAttribute('class', 'users');
bigdiv.appendChild(myspan1);
bigdiv.appendChild(myspan2);
bigdiv.appendChild(myspan3);
return bigdiv;
}

mystatus=false;

the_time = 20 ; 

let rangeNumber = 10 ; 


start =document.getElementById('start');
myname = document.getElementById('myname');
spanresult = document.querySelectorAll('.result') ;

start.onclick =function(e){
    if(myname.value.trim() != ''){
    e.preventDefault();
    document.querySelectorAll('.overlay')[0].style.display  = 'none' ;
    spanresult[0].innerHTML = myname.value ;
    x=setInterval(() => {
        spanresult[2].innerHTML = the_time ;
        the_time= the_time - 1 ; 
        if (the_time === 0 && mystatus === false)
         {
         setTimeout(() => {
          localStorage.setItem(myname.value, JSON.stringify([total , 'خاسر']));
          alert('oooobs ♥ You lossed , Thank You ' + myname.value) ; 
          clearInterval(x);
          location.reload();
         }, 2000);        

         }
         
    }, 1000);
  }
  else
  alert('please Enter Your Name ') ;
}

let TheMotherArray = [] ; 

let createRandomNumber = function (){
    x=Math.random() * rangeNumber;
    u=Math.floor(x);
    if(chickNumber(TheMotherArray , u ) === false){
        createRandomNumber();
    }
    else{
    TheMotherArray.push(u);
    }

    return u ;
}


let chickNumber = function(arr , number ){
    count = 0 ;
   arr.forEach(item =>{
      if( item === number )
       count++; 
   })
   if(count <= 1 )
     return true ;
    else
    return false ; 
}


 z= document.getElementById('cc');

 for( i = 0 ; i< rangeNumber * 2 ; i++ ){
 theText = createRandomNumber();
 x = document.createElement('div');
 y = document.createTextNode(theText);
 img = document.createElement('img');
 img.setAttribute('src', 'joker.png');
 x.appendChild(y);
 x.appendChild(img);
 x.classList.add('div_img');
 z.appendChild(x);
 }





div_images = document.querySelectorAll('.div_img') ; 

count_click = 0 ;

total = 0 ; 

totalsuccess = 0 ; 

arrTemp = [] ;

div_images.forEach(element => {
    element.addEventListener('click' ,function(){
        foundedarr =  arrTemp.includes(this);
        if(foundedarr === true)
        return true; 
        else{
     total++ ; 
     
     mystatus =false ;

     spanresult[1].innerHTML = total ;

       this.lastChild.classList.add('active');
       
      arrTemp.push(this);  
      
        count_click ++ ; 

      if(count_click === 2)
      {
          if(arrTemp[arrTemp.length-2].firstChild.textContent === arrTemp[arrTemp.length-1].firstChild.textContent)
          { 
              arrTemp[arrTemp.length-2].lastChild.classList.add('active');
              arrTemp[arrTemp.length-1].lastChild.classList.add('active');
              arrTemp[arrTemp.length-1].style.color='green';
              arrTemp[arrTemp.length-1].style.borderColor='black';
              arrTemp[arrTemp.length-2].style.color='green';
              arrTemp[arrTemp.length-2].style.borderColor='black';
              totalsuccess ++ ;
              spanresult[3].innerHTML=totalsuccess;
              if(totalsuccess === rangeNumber )
              {
                setTimeout(() => {
                  localStorage.setItem(myname.value, JSON.stringify([total , 'فائز']));
                  alert('very Good ♥ You Passed , Thank You ' + myname.value) ;
                  clearInterval(x);
                  location.reload();                  
                }, 1000);
               }
          }
          else{
              setTimeout(() => {
                arrTemp[arrTemp.length-2].lastChild.classList.remove('active');
                arrTemp[arrTemp.length-1].lastChild.classList.remove('active');
                arrTemp.pop();
                arrTemp.pop();                  
              }, 300);
          }
          count_click = 0 ;
      }
    }
  });
});





