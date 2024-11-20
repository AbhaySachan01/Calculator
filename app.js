const buttons = document.querySelectorAll('button');
const input = document.querySelector('#screen');

for(let button of buttons)
{
     button.addEventListener('click',(e)=>{
          const text = e.target.innerText;
          if(text==='AC'){
               input.value ="";
          }
          else if(text ==='DEL'){
               const str = input.value;
               console.log(str);
               console.log(str.substring(0,str.length-1))
               input.value = str.substring(0,str.length-1);
          }
          else if(text === 'x'){
              input.value += '*';

          }
          else if(text==='='){
               try{
                    input.value=eval(input.value);
               }
               catch (e){
                    input.value="Invalid Operation !";
               }
              
          }
          else{
               input.value += text;
          } 
     })
}