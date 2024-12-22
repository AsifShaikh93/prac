const { error } = require('console');
const http=require('http');

const url=require('url');

http.createServer((req,res)=>{

    const headers={
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST',
    };

  if(req.url){
    const parsedurl=url.parse(req.url,true).pathname;
    console.log(parsedurl);
  
  if(parsedurl!='/favicon.ico'){

    switch (parsedurl){
        case '/q1': res.writeHead(200,headers); res.end('the path is /q1');break;
        case '/q2': res.writeHead(200,headers); res.end('the path is /q2');break;
        default :   res.writeHead(200,headers); res.end('the path is something other');
    }
  }else{
       res.writeHead(200,headers);
       res.end('the path is /favicon');
  };
};
    
}).listen(8000);

function myfunc(){  
   
//    const xhttp=new XMLHttpRequest();
//    xhttp.onload=function (){
//      document.getElementById('demo').innerHTML=this.responseText;
//    };
//    xhttp.open('GET',`http://localhost:8000/${document.getElementById('name').value}`,true);
//    xhttp.send();

      fetch(`http://localhost:8000/${document.getElementById('name').value}`).then(res=>res.text())
      .then(res=>{
        console.log(res);
        document.getElementById('demo').innerHTML=res});
}

function mypromise(){
    const age=document.getElementById('age').value;
    const p=document.getElementById('demo');
    const myprom=new Promise((resolve,reject)=>{
        
        if(age>30){
            resolve('yes he is eligible');
            
        }else{
            reject('he is not eligible');
           
        }
    });

    myprom.then(
        (res)=>{p.innerHTML=`${res}, beacuse age is > 30`},
        (err)=>{p.innerHTML=`${err}, beacuse age is < 30`},
  )
}


