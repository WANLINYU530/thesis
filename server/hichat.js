// function of transfer image
            function changeAgentContent(){

              var imgTypes = ['png', 'jpg', 'jpeg', 'bmp', 'gif'];
              var oPath = document.getElementById("inputFile").value;
              var url = window.location.href;
              var fileName = '', newUrl = '', iconPath = '', parent = '';
              var type = '';

              if (oPath && typeof oPath === 'string') {

                  fileName = oPath.split('\\').pop();

                  type = fileName.split('.').pop().toLowerCase();

                  if (url) {
                      var index = url.lastIndexOf('/');
                      parent = url.slice(0, index) + '/client/images/';
                      iconPath = parent + 'wordIcon.png';
                      newUrl = parent + fileName;
                  }

              }
              // show name after select file
              document.getElementById("inputFileAgent").value = fileName;

              var fileElem;

              // choose type
              if (type) {
                // doc
                if (type.search(/doc/gi) > -1) {
                  fileElem = "<a href='" + newUrl + "' download>";
                  fileElem += "<img style='width:40px;height:40px;' src=" + iconPath + " />";
                  fileElem += "</a>";
                }

                // img
                else if (imgTypes.indexOf(type) > -1) {
                  fileElem = "<img src=" + newUrl + " />";
                }
              }

              document.getElementById("content").value = fileElem;

           }

           //function of transfer image end


           // function of change font color
            function changecolor(){

                x=document.getElementById("content");
                y=document.getElementById("colorStyle");
                var color=y.value;
                x.style.color=color;
                var conElem;
                conElem= "<p style=" +"'"+ "color:"+ color+";" +"'>" +x.value+"</p>";
                x.value=conElem;
            }
            //function of change font color end


            //function of clear button
              //var content = document.getElementById("inputFile").value; 

            jQuery(function () { 
            jQuery("#inputFile").click(function () { 
               return jQuery("#mjr_send").click(); 
               }); 
            }); 
       
            //clear button
           
           jQuery(document).ready(function(){
             jQuery("button#clear").click(function(){
             jQuery("section").removeClass("user").addClass("useradd");
            
             });
           });
           


            //clear button end
 

          //emoji start 
          function test() {
            jQuery('.container2')[0].style.display = 'block';
            jQuery('#close-detail')[0].addEventListener('click', close);
          
         
          }

           function close() {
            jQuery('.container2')[0].style.display = 'none';
           
           
           }

           

           //emoji value pass

           //emoji value pass end
          //emoji end
          jQuery(function() {
              jQuery('#emoji-list').children("li").children("img").on("click", function() {
                   var img = this;
                   var url = window.location.href;
                   var newUrl = '', parent = '';
                   var fileName = img.src.split("/").slice(-1);

                 if (url) {
                      var index = url.lastIndexOf('/');
                      parent = url.slice(0, index) + '/client/emoji/';
                      newUrl = parent + fileName;
                  }

                  var elem = "<img src=" + newUrl + " />";
                  document.getElementById("content").value = elem;

              });
          });

              //change background color
              
             

             var Arraycolor=new Array('back/back.jpg','back/back2.jpg','back/back3.png','back/back4.png','back/back5.png','back/back.jpg');
             var n=0;
             function turncolors(){
             if (n==(Arraycolor.length-1)) n=0;
             n++;
             document.body.style.backgroundImage = "url("+ Arraycolor[n] + ")";
             }

              //change background color end