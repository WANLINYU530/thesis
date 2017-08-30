 
 //title change function
            function $(obj){
              return document.getElementById(obj);
            } 
            function show(objid) {
              $(objid).style.display='inline';
            } 
            function hidden(objid) {
              $(objid).style.display='none';
            } 
            function doit(){ 
            var sel_val=$('Conference').value; 
            if (sel_val==0) {hidden('Desgin');hidden('IT');hidden('Marketing');} 
            if (sel_val==1) {show('Desgin');hidden('IT');hidden('Marketing');} 
            if (sel_val==2) {hidden('Desgin');show('IT');hidden('Marketing');} 
            if (sel_val==3) {hidden('Desgin');hidden('IT');show('Marketing');} 
             } 