import { getStorage,ref,uploadBytes,getDownloadURL,listAll} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-database.js";
import app from './setting.js';

console.log(app);

var d=document.querySelectorAll('img');
var chat=document.getElementById('chat');

d.forEach((v)=>{
   var c=v.getAttribute("src");
   v.addEventListener("click",()=>{
       document.querySelector("textarea").style.display="block";
       var div=document.createElement("div");
        div.innerHTML=`<div><img src="avatar.jpg" alt="no"><span>@username</span> </div>`;
        chat.appendChild(div);
   });
   
});

document.getElementById('download').addEventListener("click",(e)=>{
    var val=document.getElementById('search').value;
    e.target.href=val;
    
});

document.getElementById("color").addEventListener("change",(e)=>{
    var file=e.target.files[0];
    const storage = getStorage(app);
    const spaceRef = ref(storage, 'images/'+file.name);

    uploadBytes(spaceRef, file).then((snapshot) => {
    console.log('Uploaded a blob or file!');
  });
    
});
const storage = getStorage(app);
    const spaceRef = ref(storage, 'images/i.jpeg')
    listAll(spaceRef).then((res)=>{
        getDownloadURL(spaceRef).then((url)=>{
            const xhr=new XMLHttpRequest();
            console.log(xhr);
        });
        
    })


