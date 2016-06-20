var holidayArr = ['21/07/2016','27/07/2016','10/08/2016','18/08/2016'];
var thisDateBeforeSelect =  '';
var workingHoursInADay = 9;
var holidayArrGetTime = [];
var dependantArr = [];
var dependenteeArr = [];

for(var i = 0;i<holidayArr.length;i++){
  var holidayArrDateTime = holidayArr[i].split('/');
holidayArrDateTime[0]    = parseeIntForNan(holidayArrDateTime[0]);
holidayArrDateTime[1]    = parseeIntForNan(holidayArrDateTime[1]) -1;
holidayArrDateTime[2]    = parseeIntForNan(holidayArrDateTime[2]);
if(holidayArrDateTime[2].length==2){
  holidayArrDateTime[2] = '20'+ holidayArrDateTime[2];
}
 holidayArrDateTime = new Date(holidayArrDateTime[2], holidayArrDateTime[1], holidayArrDateTime[0]); 
 holidayArrDateTime = holidayArrDateTime.getTime();
holidayArrGetTime.push(holidayArrDateTime);

}




var effortArr = ['','Hrs','Days','Weeks','Months','Years'];

ultimateEndId++;


var tempProjectId = projectId;

var counterForAjax = 0, ajaxFailureFlag = true;
var counterForRecursionAjax = 0 ;


var insertArr = [];
var updateArr = []; 
var curentDropdownValueForEffort = 0;
var  currentNodeNameForUpdateArrAll = '';
var currenteffType                  =    0;

function updateAllArr(idUsed,isActiveFl){
 //console.log('updateAllArr');
var value = idUsed.split('_');
var individualId = parseeIntForNan(value[0]);
var parentId = value[2];
idUsed = individualId + '_rowid_' + parentId
var stringForId = '#' + idUsed + ' td '+ ' input ';
var stringForSelect = '#' + idUsed + ' td '+ ' select ';
/*//var stringForNodeName = stringForId + ' td:first';
//var $td= $(stringForId).children('td'); 
//console.log($td[0].);
for(var  i =0;i<9;i++ ){
alldataTable[i] = $td.eq(i).text();  
} 
*/


/*if(insertFlag==1){
var newArr = [];
newArr[0] = $(stringForNodeName).text();//Name 
newArr[1] = $(stringForId).children('td')[4].innerHTML;console.log(newArr);//Start
newArr[2] = $(stringForId).children('td')[5].innerHTML;console.log(newArr);//End
newArr[3] = $(stringForId).children('td')[6].innerHTML.match(/^\d{1,}+(\.\d{1,4})?$/i)[0];console.log(newArr);//Effort
newArr[4] =curentDropdownValueForEffort;console.log(newArr);//Effort Type
newArr[5] = parentId;console.log(newArr);
newArr[6] = projectId;console.log(newArr);
console.log(newArr);
insertArr.push(newArr)
}*/

if(isActiveFl==0){
var newArr = [];
for(var i = 0;i<14;i++){
  newArr.push(0);
}

newArr[0] = individualId;
newArr[9] = parentId ;



}








if(isActiveFl==1){
var newArr = [];
newArr[0] = individualId;
newArr[1] = $(stringForId)[0].value;//Name 
newArr[2] = $(stringForId)[1].value;//Start
newArr[3] = $(stringForId)[2].value;//End
newArr[4] = $(stringForId)[3].value;//planned Actual Strt Date
newArr[5] = $(stringForId)[4].value;//Planned Act End Date
newArr[6] = $(stringForId)[5].value;//Act end 


if( $(stringForId)[6].value!=''){
newArr[7] = $(stringForId)[6].value;//Effort
}
else newArr[7] = 0;
newArr[8] =  $(stringForSelect)[0].value;//Effort Type
newArr[9] = parentId ;

if( $(stringForId)[7].value!=''){
newArr[10] = $(stringForId)[7].value;//Perc Complete
}
else newArr[10] = 0;

newArr[11] = isActiveFl;
newArr[12] = $(stringForSelect)[1].value;//Resource Type

newArr[13]  = calculateTempQuantBasedOnDropDown(newArr[7],newArr[8]);//Effort in hours


$('#'+individualId+'_del_'+parentId).attr("onclick" , "deleteRow(this.id,1)");

}


//console.log(newArr);
var iValue = -1;
  for(var i = 0;i<updateArr.length;i++){
         if(updateArr[i][0]==individualId){
                   iValue = i;
                   break;
         }
    }

if(iValue == -1){
  updateArr.push(newArr);
}
else{

  updateArr[iValue] = newArr; 
}

//console.log(newArr);




curentDropdownValueForEffort = 0;
currentNodeNameForUpdateArrAll ='';
currenteffType                 = 0;



}




$(document).ready(function(){
console.log('optStringDep is',optStringDep);

optStringDep = $('#tbody123').html(optStringDep).text();
$('.ddDepClass').html(optStringDep);
console.log('optStringDep is',optStringDep);

initializeJquery();

  $('.task-img').addClass('active');
  $('.se-pre-con').fadeOut('slow');
    var decode =  $('#tbody123').html(Tree).text();
     $('#tbody123').html(decode);

      

//alert(<%=isManagerFlag%>);

 setTimeout(function(){ hideAllOnSubmit();},400);

     /*if(submitFlagForFunc==1){ setTimeout(function(){ hideAllOnSubmit();},400);}
    if(submitFlagForFunc==2){   $('#statusSub').html('Accepted')}
      if(submitFlagForFunc==3){   $('#statusSub').html('Rejected')}
     if(submitFlagForFunc==3&&<%=isManagerFlag%>){   setTimeout(function(){hideAllOnSubmit();},400);
      $('#statusSub').html('Rejected')}
  */
     var index1,index2;
     var subProArr = [],subVerArr = []; 

 


     $('#proSel option').each(function(i){
console.log('submittedProject is',submittedProject);
for(var k =0;k<submittedProject.length;k++){
        console.log('this.val is',$(this).val(),'element is',submittedProject[k]);
          if($(this).val()==submittedProject[k]){
             console.log('this is',$(this)[0]);
            $(this).addClass('submitDropDownClass'); 
          }

        }
if($(this).val()==projectId){
      index1 = i;
      }
     });


      $('#verSel option').each(function(i){

      for(var k =0;k<submittedVersion.length;k++){
        console.log('this.val is',$(this).val(),'element is',submittedVersion[k]);
          if($(this).val()==submittedVersion[k]){
            $(this).addClass('submitDropDownClass'); 
          }

        }


      if($(this).val()==version){
        index2 = i;
      }
     });


     



     var selectJq1 = $('#proSel option');
     var selectJq2=  selectJq1[index1] ;
     //console.log('here is ',selectJq2);
     $(selectJq2).attr('selected',true);
       selectJq1 =  $('#verSel option')[index2];
       $(selectJq1).attr('selected',true);




     $('#proSel').change(function(){
         var val = $('#proSel').val();
      tempProjectId = val;
      var foundFlag = false;

        var str = '/task?flag='+tempProjectId+'&&versionFlag='+1;
           window.location.href = str;
     for(var i = 0;i<projectAndVersions.length;i++){
        if(tempProjectId==projectAndVersions[i].project){
          foundFlag = true;
         
          var str = '/task?flag='+tempProjectId+'&&versionFlag='+1;
           window.location.href = str;
         
          
        

        
        
        }
 
     }
             
           /*var str = '/task?flag='+val;
           window.location.href = str;*/
   });

    $('#verSel').change(function(){

           var val = $('#verSel').val();
           var str = '/task?flag='+projectId+'&&versionFlag='+val;
           window.location.href = str;
   });





  

   
});



function makeMoreRow(newlength){
var str = '', k;
  for(var i =1;i<=newlength;i++){
str =   str + '<option value = '+i+'>'+i+'</option>';
  k = i;
  }
  k++;
  str = str + '<option value = '+k+'>--Create new Version</option>';

$('#verSel').html(str);

}



 function collapseExpand(id,flag){

      //console.log('ts here',treeStructure[4]);
      //alert('clickeed yo!');
     
         var value = id.split('_');
          var individualId = parseeIntForNan(value[0]);
          var parentId  = parseeIntForNan(value[2]);
           var idStr = '#' + id;

    if(!treeStructure[individualId].length) return;
        //alert(idStr);
        if($(idStr).hasClass( "minus" )){
          
            for(var i = 0 ;i<treeStructure[individualId].length;i++){

          var str =  '#' + treeStructure[individualId][i] +'_rowid_'+individualId;
          var str2 = '#' + treeStructure[individualId][i] +'_sign_'+individualId;
         
                 
                 $(str).addClass('hide1');
                 $(str).hide('fast');       
                 if($(str2).hasClass('minus')){
                  console.log(str2);
                 $(str2).addClass('keepOpen');
                 }
                 str2 = str2.slice(1);
                 console.log('str2 is',str2);
                 collapseExpand(str2,0);
               
                               
          }
          $(idStr).removeClass('minus');
          $(idStr).addClass('plus');
          $(idStr).attr('src','../img/project/plus.png');



      }


        else if($( idStr).hasClass( "plus" )&&flag==1){
          
            for(var i = 0 ;i<treeStructure[individualId].length;i++){
                 var str = '#'+ treeStructure[individualId][i] +'_rowid_'+individualId;
                var str2 = '#' + treeStructure[individualId][i] +'_sign_'+individualId;

                 //console.log(str);
                  $(str).hide();
                  $(str).removeClass('hide');
                 $(str).removeClass('hide1');
                  $(str).show('slow'); 
                  if($(str2).hasClass('keepOpen')){
                    $(str2).removeClass('keepOpen');
                     str2 = str2.slice(1);
                    collapseExpand(str2,1);
                  }
     
  
        
          }


         
            $(idStr).removeClass('plus');
              $(idStr).addClass('minus');
         $(idStr).attr('src','../img/project/minus.png');


        }

 else return;



    }

 

  

 function addRow(currentId){
/*********************addRRow****************************************/
    var value = currentId.split('_');
  var individualId = value[0];
  var parentId = value[2];
    var lastChildId = individualId ;
  var lastParentId = parentId ;
var depth = 0 ;
var idStr = '#'+currentId;
var signStr = '#'+ individualId + '_sign_'+parentId;
if(!treeStructure[individualId].length&&depth<2){
   $(signStr).attr('src','../img/project/minus.png');
}
if($(signStr).hasClass('plus')){
  $(signStr).click();
}
if(individualId==0){
  depth = 0
}

else if(parentId==0){
  depth = 1;
 }
  else depth = 2; 
  var len = treeStructure[lastChildId].length; 
console.log(treeStructure,len);
  if(len){
   lastChildId = treeStructure[individualId][treeStructure[individualId].length-1];
    lastParentId = individualId;
    len = treeStructure[lastChildId].length;
  while(len){
    //margin = margin -6;
    lastParentId = lastChildId;
lastChildId = treeStructure[lastChildId][treeStructure[lastChildId].length-1];
 console.log(lastChildId);
  len = treeStructure[lastChildId].length;
 // depth++ ; 
}
     
}

var hideAddButtonClass = '';
var newcurrentId = '#'+lastChildId +'_rowid_'+ lastParentId;

if(depth ==0){
  var str =  '<tr id = "'+ultimateEndId+'_rowid_'+individualId+'" ><td></td><td class="phase paddingtd bold1"><img src= "../img/project/grey_button1.jpg" id = "'+ultimateEndId+'_sign_'+individualId+'" onclick = "collapseExpand(this.id,1)" class="minus" height="18px" title="Add Phase" width="18px" style="margin-right:5px;"><input type = "text" class = "nameFieldClass"   style = "width: 90%;"></td><td class="images1 bold1"><img src="../img/bug/addbug.png" id = "'+ultimateEndId+'_add_'+individualId+'"  class="shadow phaseImg" onclick = "addRow(this.id)" height="18px" title="Add Child" width="18px"></td><td class="images1 bold1"><img src="../img/project/blackdustbin.jpg" height="15px" class="shadow" onclick = "deleteRow(this.id,1)" id = "'+ultimateEndId+'_del_'+individualId+'"  title="Delete" width="15px"><img id = "'+ultimateEndId+'_OK_'+individualId+'"  src="../img/project/greentick.jpg" onclick = "convertTonormalTr(1,this.id,'+depth+')" height="18px" class="shadow hide" title="Green Tick" class = "hide"  width="18px"></td><td class = "dateTempCss bold1 "><input type = "text" class = "datePicker textBoxesCss" id = "'+ultimateEndId+'_sdate_'+individualId+'" ></td><td class="dateTempCss bold1"><input type = "text " id = "'+ultimateEndId+'_edate_'+individualId+'" class = "datePicker textBoxesCss"></td> <td class  = "dateTempCss bold1"><input type = "text" class = "datePicker textBoxesCss" id = "'+individualId+ '_pActStartDate_'+individualId+'"></input></td><td class = "dateTempCss bold1"><input type = "text" class = "datePicker textBoxesCss" id = "'+ultimateEndId+ '_pActEndDate_'+individualId+'"></input></td><td class = "dateTempCss bold1"><input type = "text"  style = " width: 77%;" class = "datePicker textBoxesCss" id = "'+ultimateEndId+ '_actEndDate_'+individualId+'"></input></td><td class="effCSS bold1"><input type = "number"  class = " textboxEffEditAdd textboxEffEditAddJq"  id = "'+ultimateEndId+'_eff_'+individualId+'" ><select id = "'+ultimateEndId+'_effType_'+individualId+'" class = "selectEffEditAdd"><option value = "1">Hrs</option><option value = "2">Days</option><option value = "3">Weeks</option><option value = "4">Months</option></select></td><td><input type = "number" class = "textBoxesCss bold1 percCompletedClass"></td><td><select class = "ddDepClass"  id = "'+ultimateEndId+'_ddDep_'+individualId+'" >'+optStringDep+'></select></td><td class = "selectRS" id = "'+ultimateEndId+'_selectRS_'+individualId+'" ></td>';
}

else if (depth==1){

  var str =  '<tr id = "'+ultimateEndId+'_rowid_'+individualId+'" ><td></td><td class="task paddingtd"><img src= "../img/project/grey_button1.jpg" id = "'+ultimateEndId+'_sign_'+individualId+'" onclick = "collapseExpand(this.id,1)" class="minus " height="18px" title="Add Phase" width="18px" style="margin-right:5px;"><input type = "text" class = "nameFieldClass"   style = "width: 90%;"></td><td class="images1 bold1"><img src="../img/bug/addbug.png" id = "'+ultimateEndId+'_add_'+individualId+'"  class="shadow phaseImg" onclick = "addRow(this.id)" height="18px" title="Add Child" width="18px"></td><td class="images1 bold1"><img src="../img/project/blackdustbin.jpg" height="15px" class="shadow" onclick = "deleteRow(this.id,1)" id = "'+ultimateEndId+'_del_'+individualId+'"  title="Delete" width="15px"><img id = "'+ultimateEndId+'_OK_'+individualId+'"  src="../img/project/greentick.jpg" onclick = "convertTonormalTr(1,this.id,'+depth+')" height="18px" class="shadow hide" title="Green Tick" class = "hide"  width="18px"></td><td class = "dateTempCss "><input type = "text" class = "datePicker textBoxesCss" id = '+ultimateEndId+'_sdate_'+individualId+' ></td><td class="dateTempCss bold1"><input type = "text " id = "'+ultimateEndId+'_edate_'+individualId+'" class = "datePicker textBoxesCss"></td> <td class  = "dateTempCss "><input type = "text" class = "datePicker textBoxesCss" id = "'+individualId+ '_pActStartDate_'+individualId+'"></input></td><td class = "dateTempCss"><input type = "text" class = "datePicker textBoxesCss" id = "'+ultimateEndId+ '_pActEndDate_'+individualId+'"></input></td><td class = "dateTempCss bold1"><input type = "text"  style = " width: 77%;" class = "datePicker textBoxesCss" id = "'+ultimateEndId+ '_actEndDate_'+individualId+'"></input></td><td class="effCSS bold1"><input type = "number"  class = " textboxEffEditAdd textboxEffEditAddJq"  id = "'+ultimateEndId+'_eff_'+individualId+'" ><select id = "'+ultimateEndId+'_effType_'+individualId+'" class = "selectEffEditAdd"><option value = "1">Hrs</option><option value = "2">Days</option><option value = "3">Weeks</option><option value = "4">Months</option></select></td><td><input type = "number" class = "textBoxesCss bold1 percCompletedClass"></td><td><select class = "ddDepClass"  id = "'+ultimateEndId+'_ddDep_'+individualId+'" >'+optStringDep+'></select></td><td class = "selectRS" id = "'+ultimateEndId+'_selectRS_'+individualId+'" ></td>';

     }

     else if (depth==2){
  var str =  '<tr id = "'+ultimateEndId+'_rowid_'+individualId+'" ><td></td><td class="subtask"><img src= "../img/project/button.png" id = "'+ultimateEndId+'_sign_'+individualId+'" onclick = "collapseExpand(this.id,1)" class="minus'+hideAddButtonClass+'" height="18px" title="Add Phase" width="18px" style="margin-right:5px;"><input type = "text" class = "nameFieldClass"   style = "width: 90%;"></td><td class="images1 bold1"></td><td class="images1 bold1"><img src="../img/project/blackdustbin.jpg" height="15px" class="shadow" onclick = "deleteRow(this.id,1)" id = "'+ultimateEndId+'_del_'+individualId+'"  title="Delete" width="15px"><img id = "'+ultimateEndId+'_OK_'+individualId+'"  src="../img/project/greentick.jpg" onclick = "convertTonormalTr(1,this.id,'+depth+')" height="18px" class="shadow hide" title="Green Tick" class = "hide"  width="18px"></td><td class = "dateTempCss"><input type = "text" class = "datePicker textBoxesCss" id = '+ultimateEndId+'_sdate_'+individualId+' ></td><td class="dateTempCss"><input type = "text " id = "'+ultimateEndId+'_edate_'+individualId+'" class = "datePicker textBoxesCss"></td> <td class  = "dateTempCss "><input type = "text" class = "datePicker textBoxesCss" id = "'+individualId+ '_pActStartDate_'+individualId+'"></input></td><td class = "dateTempCss"><input type = "text" class = "datePicker textBoxesCss" id = "'+ultimateEndId+ '_pActEndDate_'+individualId+'"></input></td><td class = "dateTempCss "><input type = "text"  style = " width: 77%;" class = "datePicker textBoxesCss" id = "'+ultimateEndId+ '_actEndDate_'+individualId+'"></input></td><td class="effCSS bold1"><input type = "number"  class = " textboxEffEditAdd textboxEffEditAddJq"  id = "'+ultimateEndId+'_eff_'+individualId+'" ><select id = "'+ultimateEndId+'_effType_'+individualId+'" class = "selectEffEditAdd"><option value = "1">Hrs</option><option value = "2">Days</option><option value = "3">Weeks</option><option value = "4">Months</option></select></td><td><input type = "number" class = "textBoxesCss bold1 percCompletedClass"></td><td><select class = "ddDepClass"  id = "'+ultimateEndId+'_ddDep_'+individualId+'" >'+optStringDep+'></select></td><td class = "selectRS" id = "'+ultimateEndId+'_selectRS_'+individualId+'" ></td>';
                        }
       makeEmptyAjaxCall();
       if(newcurrentId=='#0_rowid_-1') newcurrentId = '#tbody123'
     $(newcurrentId).after(str);
   initializeJquery();

         /************Resources DropDown***********/
     var tdIdForSelect = '#'+ ultimateEndId+'_selectRS_'+individualId;
     var decode = $(tdIdForSelect).html(optionStr).text();
      decode = decode.replace(/"/g,'').replace(/'/g,'');
      $(tdIdForSelect).html(decode);

    /*********************************************/



  /************Resources DropDown***********/
if(depth!=0){
 if(!treeStructure[individualId].length){
  var tdchild = $('#'+ individualId + '_rowid_'+parentId + ' td')[9];
  tdchild   = $(tdchild).children('input');
   $(tdchild).val(0);
  $(tdchild).attr('disabled',true);
  $(tdchild).addClass('disablePointer');
  tdchild = $(tdchild).parent('td');
  tdchild   = $(tdchild).next();
  tdchild   =  $(tdchild).children('input');
  $(tdchild).val(0);
  $(tdchild).attr('disabled',true);
  $(tdchild).addClass('disablePointer');


 }

}

/*********************************************/



var idAddedUsedEverywhereInThisFunction = ultimateEndId +'_rowid_' +individualId;


treeStructure[individualId].push(ultimateEndId);
      treeStructure.push([]);
      ultimateEndId++;


    
initializeJquery();
var numValuePair =   updateNumberSequenceInFirstColumn();
changeDdOnAdd(newcurrentId,idAddedUsedEverywhereInThisFunction,numValuePair)
  }








    function test(){
    $('.minus').attr('src','../img/project/plus.png');
     $('.plus').attr('src','../img/project/minus.png');
     $('.minus').addClass('minus1');
     $('.plus').addClass('plus1');  
     $('.minus').addClass('plus');
     $('.plus1').addClass('minus');
    $('.minus1').removeClass('minus');
    $('.plus1').removeClass('plus');
    $('.plus').removeClass('minus1');
    $('.minus').removeClass('plus1');



    }


    function convertTonormalTr(addNewFlag,rowId,depth){
        //console.log(rowId);
      rowId = rowId.trim();  console.log(rowId);
        




      var value = rowId.split('_');
      var individualId = value[0];
      var parentId     = value[2];
       rowId = individualId+'_rowid_'+parentId;
      var nodeName     = $('#'+rowId+' td input')[0].value;
      var sDateName    =$('#'+rowId+' td input')[1].value;
        var eDateName    = $('#'+rowId+' td input')[2].value;
        var effortQuant  = $('#'+rowId+' td input')[3].value;
        var effortType   = $('#'+rowId+' td select')[0].value;
        var effortArrName = effortArr[effortType];
        var percCompleted = $('#'+rowId+' td input')[4].value +' %';

        if(addNewFlag!=-1){   //

var binaryForAllData = (nodeName.trim()==''||sDateName.trim()==''||eDateName.trim()==''||effortQuant.trim()==''||percCompleted.trim()=='%');
if(binaryForAllData){
alert('Please fill all text boxes')
return;
}
 }
if(depth==0){

      var newStringForHtml = '<td></td><td class="phase bold1"><img src="../img/project/plus.png" id = '+individualId+'_sign_'+parentId+' onclick = "collapseExpand(this.id,1)" class="minus" height="18px" title="Add Phase" width="18px" style="margin-right:5px;">'+nodeName+'</td><td class="images1 bold1"><img src="../img/bug/addbug.png" id = '+individualId+'_add_'+parentId+'  class="shadow phaseImg" onclick = "addRow(this.id)" height="18px" title="Add Phase" width="18px"></td><td class="images1 bold1"><img src="../img/write.png"  onclick = "editRow(this.id,0)"  id = '+individualId+'_edit_'+parentId+'  height="22px" class="shadow editRowClass" title="Add Phase" width="22px"></td><td class="dateCSS bold1">'+sDateName+'</td><td class="dateCSS bold1">'+eDateName+'</td><td class="effCSS bold1" style = "font-size:11px;">'+effortQuant+' '+effortArrName+'</td><td style = "font-size:12px;" class = "bold1">'+percCompleted+'</td><td></td>';
       }

 else if(depth==1){

   var newStringForHtml = '<td></td><td class="task"><img src="../img/project/plus.png" class="plus" onclick = "collapseExpand(this.id,1)"  id = '+individualId+'_sign_'+parentId+' height="18px" title="Add Phase" width="18px" style="margin-right:5px;">'+nodeName+'</td><td class="images1 "><img src="../img/bug/addbug.png" class="shadow" height="18px" onclick = "addRow(this.id)"  id = '+individualId+'_add_'+parentId+' title="Add Phase" width="18px"></td><td class="images1 "><img src="../img/write.png" height="22px" class="shadow editRowClass"  onclick = "editRow(this.id,0)" id = '+individualId+'_edit_'+parentId+'  title="Add Phase" width="22px"></td><td class="dateCSS ">'+sDateName+'</td><td class="dateCSS">'+eDateName+'</td><td class="effCSS" style = "font-size:11px;">'+effortQuant+' '+effortArrName+'</td><td style = "font-size:12px;">'+percCompleted+'</td><td></td>';
      }
      else if(depth==2){

  var newStringForHtml = '<td></td><td class="subtask"><img src="../img/project/button.png" class="shadow      donthide" height="18px" title="Add Phase" width="18px" style="margin-right:5px;">'+nodeName+'</td><td class="images1 "></td><td class="images1 "><img src="../img/write.png" onclick = "editRow(this.id,0)" id = '+individualId+'_edit_'+parentId+'    height="22px" class="shadow editRowClass" title="Add Phase" width="22px"></td><td class="dateCSS ">'+sDateName+'</td><td class="dateCSS ">'+eDateName+'</td><td style = "font-size:11px;" class="effCSS ">'+effortQuant+' '+effortArrName+'</td><td style = "font-size:12px;">'+percCompleted+'</td><td></td>';
      }





$('#'+rowId).html(newStringForHtml);
/*var rowIdVarForTreeIndex = rowId;
var countForPosition =nextClass(depth,rowId);
var idArr = [];

var nextId = $('#'+rowId).next().attr('id'); 
 while(findDepth(rowIdVarForTreeIndex)==findDepth(nextId)){
    rowId = nextId;
    nextId = $('#'+rowId).next().attr('id'); 
   countForPosition++;

 }

var positionTreeStructure = treeStructure[parentId].length -countForPosition;
  treeStructure[parentId].splice(positionTreeStructure,0,individualId);
 while(treeStructure.length!=ultimateEndId){
treeStructure.push([]); 
  }*/
  
curentDropdownValueForEffort = effortType;
currentNodeNameForUpdateArrAll = nodeName;
currentEffType                 = effortType 
//makeEmptyAjCall();
if(addNewFlag!=-1){
updateAllArr(rowId,1);
 }
    
  
   }

   function makeEmptyAjaxCall(){

 counterForAjax++;
       
               $.ajax({
                    url: '/emptyProj',
                    type: 'post',
                    data :{
                      'projectid':projectId,
                      'version' :version
                        },
                    success: function(data) {
                      console.log('sucess');

                      counterForAjax--;/*    Important code to be inserted here Mayur */
                    },

                     error:function(){
                     alert('Server Failure:Reloading Page for Refreshing info')
                           // window.location.href = '/task';
                                counterForAjax--;
                                ajaxFailureFlag = false;

                           
                                   }                       
                  });
     


}





  function nextClass(depth,rowId){
 var count = 0;
  nextId = $('#'+rowId).next().attr('id');
if(depth==2){
while(nextId!=undefined&&($('#'+nextId).hasClass('subtask')||$('#'+nextId).hasClass('subtaskTemp'))){

if($('#'+nextId).hasClass('subtask')){
count++;  
}
nextId = $('#'+nextId).next().attr('id');

}

} 

if(depth==1){
while(nextId!=undefined&&(!$('#'+nextId).hasClass('phase'))){

if($('#'+nextId).hasClass('task')){
count++;  
}
nextId = $('#'+nextId).next().attr('id');
}

}

if(depth==0){
while(nextId!=undefined){

if(nextId!=undefined){
count++;  
}
nextId = $('#'+nextId).next().attr('id');
}

}

return count;

    }





    function createNewVersion(submitFlag){

  updateArr = [];
var trArr = $('#tbody123 tr');
for(var i =0;i<trArr.length;i++){

  var tdArr = $(trArr[i]).children('td')[1];
       
     console.log('trArr is',trArr[i],'tdArr is',tdArr);
    var tdEle =  $(tdArr).children('input')[0];
    $(tdEle).focusout();
  }


version = version + 1;
for(var i = 0;i<updateArr.length;i++){
  updateArr[i] = updateArr[i].join('$@$');
  }
  updateArr = updateArr.join('||');
   

debugger;


    $('.se-pre-con').fadeIn('slow');

$.ajax({
         url: '/insNewVer',
         type: 'post',
         data :{
               'updateQ':updateArr,
              'submitFlag':submitFlag,
              'projectId':projectId,
               'version' :newVersionToBeCreated,
               'remarks': remarks
               },
            success: function(data){
              someThingUpdated = 0;
              //console.log('sucess');
            $('.se-pre-con').fadeOut('slow');
              alert('New version created');
           updateArr = [];

          $('#verSel select').each(function(){
            $(this).removeAttr('selected');
        });
          var newStrToAppend = '<option value = "'+newVersionToBeCreated+'">'+newVersionToBeCreated+'</option>';
          $('#verSel').append(newStrToAppend);
          var verLen = $('#verSel option').length;
          var verSelEle = $('#verSel option')[verLen-1];
          //console.log('verSelEle is',verSelEle);
          $(verSelEle).attr('selected','selected');
          window.location.href = '/task?flag='+projectId+'&&versionFlag='+newVersionToBeCreated;
                
                 },
               error:function(data){
                 $('.se-pre-con').fadeOut('slow');
                    updateArr = [];
                     }
               });

}





function approvethis(approveFlag,modalBoxAcceptFlag){


var submitFlagnew;





if(approveFlag==0){

  submitFlagnew = 3;
  $('#rejectModal').modal('show');
  if(!modalBoxAcceptFlag){
        return;
                        }


}

if(approveFlag==1){

if(!confirm('Are you sure,you want to confirm this project')){
  return;
}

submitFlagnew = 2;
}


updateArr = [];

  $('.se-pre-con').fadeIn('slow');



        $.ajax({
                     url: '/saveTask',
                    type: 'post',
                    data :{
                      'updateQ':updateArr,
                   'submitFlag':submitFlagnew,
                   'projectId':projectId,
                    'version' :version,
                     'remarks': remarks

                     },
                    success: function(data) {
               
                     if(approveFlag){
                      someThingUpdated = 1;
                      alert('Project approved successfully');
                      $('#statusSub').html('Approved');

                        submitted = 2;
                      hideAllOnSubmit();
                                    }

                      else{
                            alert('Project has been rejected');
                            submitted = 3;
                            $('#statusSub').html('Rejected');
                             hideAllOnSubmit();
                          }

                    $('.se-pre-con').fadeOut('slow');
                    //window.location.reload();

                    },
                    error:function(data){
                      alert('db error');
                 $('.se-pre-con').fadeOut('slow');
                    updateArr = [];
                     }
               });







}









function savethis(submitFlag,joinFlag){
var returnFlag = (submitted==1);

if(returnFlag){
  return;
}

if(submitFlag==1){

  if(validationForSubmit()==false){
      return;
     }


}

   if((submitted == 2)&&(submitFlag==1||submitFlag==0)){

   if(someThingUpdated){
     var englishString = ''
      if(submitFlag) englishString = 'submit';
      else englishString = 'create';

      if(!confirm('You are about to '+englishString+' new version '+newVersionToBeCreated+'.Are you sure?')){
                     return;
           }
               
        createNewVersion(submitFlag);
            return;
                 }

      else{
          alert('This version has already been submitted');
          return;

          }


                 }



      else if(submitFlag==1&&joinFlag){
         if(!confirm('Once saved,Changes cannot be done.Are you sure?')){
          return;
         }

      }




   if(joinFlag){
for(var i = 0;i<updateArr.length;i++){
  updateArr[i] = updateArr[i].join('$@$');
  }
  updateArr = updateArr.join('||');

    $('.se-pre-con').fadeIn('slow');
     }

     counterForRecursionAjax++;
     if(counterForRecursionAjax==20){
         alert('Server error,Reloading page');
      return;
     }

  if(counterForAjax!=0){
setTimeout(function(){ 
savethis(submitFlag,0);
return;
},3000);
     return;
         }
       
        $.ajax({
                     url: '/saveTask',
                    type: 'post',
                    data :{
                      'updateQ':updateArr,
                   'submitFlag':submitFlag,
                   'projectId':projectId,
                    'version' :version,
                    'remarks': remarks

                     },
                    success: function(data) {
                      console.log('sucess');
                  $('.se-pre-con').fadeOut('slow');
                  counterForRecursionAjax = 0;
                  updateArr = [];
                  if(submitFlag){
                    alert('form has been submitted');
                    hideAllOnSubmit();
                  }
                  if(submitFlag==0){
                    $('#statusSub').html('Draft');
                    submitted = 0;
                  }


                    },
                    error:function(data){
                 $('.se-pre-con').fadeOut('slow');
                    updateArr = [];
                     }
               });






      }

      function validationForSubmit(){
var returnFalseFlag = false;

      var trArr = $('#tbody123 tr');
        //console.log('trArr is',trArr);
       for(var i = 0;i<trArr.length;i++){
         var currTr = trArr[i];
         var tdArr = $(currTr).children('td');
        // console.log('tdArr is',tdArr,tdArr[3]);
      for(var k = 0;k<tdArr.length;k++){
      if(k==1||k==4||k==5){
        var inpChild = $(tdArr[k]).children('input')[0];
        if($(inpChild).val()==''){
          returnFalseFlag = true;
          $(inpChild).addClass('isEmptyTextBoxValidation');

        }
      }


      if(k==9){
               var selChild = $(tdArr[k]).children('select')[0];
               if($(selChild).val()=='0'){
                   returnFalseFlag = true;
                  $(selChild).addClass('isEmptyTextBoxValidation');
               }


      }

      }
       
       }

       if(returnFalseFlag){
        alert('Please fill all fields');
        return false;
       }
       else{
        return true;
       }




      }



function editRow(rowId,AddFlag){
//  return;
/********editRRow*******/
var value = rowId.split('_');
var individualId = value[0];
var parentId = value[2];
rowId = individualId +'_rowid_'+parentId;
var depth;
var stringForId = '#'+rowId;
var serNumber          =  $(stringForId).children('td')[0].innerHTML;
var tempStrForNodeName = $(stringForId).children('td')[1].innerHTML;
 var nodeName          =  tempStrForNodeName.slice(tempStrForNodeName.indexOf('>')+1);
var sDateName          = $(stringForId).children('td')[4].innerHTML;//Start
var eDateName          = $(stringForId).children('td')[5].innerHTML;//End
var actPlStartDate     = $(stringForId).children('td')[6].innerHTML;
var actPlEndDate       = $(stringForId).children('td')[7].innerHTML;
var actEndDate         = $(stringForId).children('td')[8].innerHTML;
var effortQuant        = $(stringForId).children('td')[9].innerHTML.match(/\d{1,9}/i)[0];
var strForpercComplete  = $(stringForId).children('td')[10].innerHTML;
//console.log('strForpercComplete',strForpercComplete);
if(strForpercComplete!=''){
var percCompleted      = strForpercComplete.slice(0, strForpercComplete.length-2);
}
else { var percCompleted = '';}
var effortArrStr       =  $(stringForId).children('td')[9].innerHTML;
var effortType         = 0 
var impResource        = $(stringForId).children('td')[12].innerHTML
for(var i = 1;i<effortArr.length;i++){
if(effortArrStr.indexOf(effortArr[i])!=-1){
  effortType = i;
  break;
}  

}



var objForSecondTd = $('#' +rowId +' td')[1] ;


if(parentId=='0'){
depth =0;
}

else if($(objForSecondTd).hasClass('task')){
  depth =1;
}

else depth = 2;

var hideAddButtonClass = '';
if(impResource!=''){
var posForResource = optionStr.indexOf(impResource);
//console.log('Yo123',posForResource,impResource);
    posForResource = posForResource - 4;
    var selectedString = ' selected = "true" ';
var optionStr2 = [optionStr.slice(0, posForResource), selectedString, optionStr.slice(posForResource)].join('');
}
else {
  var optionStr2 = optionStr;
}



var buttonStr = '';
var  butClass = '';
      
if(!treeStructure[individualId].length){
      console.log('in  depth 0 if',treeStructure[individualId].length);
         //hideAddButtonClass = ' deleteCSS ';
         buttonStr = '../img/project/grey_button1.jpg';  
        butClass = 'minus';       
}

    else {
       console.log('in  depth 0 else',treeStructure[individualId].length);
            hideAddButtonClass = '';
       buttonStr = '../img/project/minus.png';
               butClass = 'plus';       
     }

if(depth ==0){
var strForHtml =  '<td></td><td class="phase paddingtd"><img src="'+buttonStr+'" id = "'+individualId+'_sign_'+parentId+'" onclick = "collapseExpand(this.id,1)" class="minus" height="18px" title="" width="18px" style="margin-right:5px;"><input type = "text" class = "nameFieldClass" style = "width: 90%;"></td><td class="images1  paddingtd "><img src="../img/bug/addbug.png" id = "'+individualId+'_add_'+parentId+'"  class="shadow " onclick = "addRow(this.id)" height="18px" title="Add Child" width="18px"></td><td class="images1 paddingtd "><img src="../img/project/blackdustbin.jpg"  id = "'+individualId+'_del_'+parentId+'" onclick = "deleteRow(this.id,1)"     height="15px" class="shadow" title="Delete" width="15px"><img id = '+individualId+'_OK_'+parentId+'  src="../img/project/greentick.jpg" onclick = "convertTonormalTr(1,this.id,'+depth+')" height="18px" class="shadow hide" title="Green Tick" width="18px"></td><td class="dateCSS  paddingtd dateTempCss bold1"><input type = "text" class = "datePicker textBoxesCss"></td><td class="dateCSS  dateTempCss bold1"><input type = "text" class = "datePicker textBoxesCss"></td><td class  = "dateTempCss bold1"><input type = "text" class = "datePicker textBoxesCss" id = "'+individualId+ '_pActStartDate_'+parentId+'"></input></td><td class = "dateTempCss bold1 "><input type = "text" class = "datePicker textBoxesCss" id = "'+individualId+ '_pActEndDate_'+parentId+'"></input></td><td class = "dateTempCss bold1 "><input type = "text" style = " width: 77%;" class = "datePicker textBoxesCss" id = "'+individualId+ '_actEndDate_'+parentId+'"></input></td><td class="effCSS bold1 "><input type = "number" class = " textboxEffEditAdd textboxEffEditAddJq "><select class = "selectEffEditAdd" id = '+individualId+'_effType_'+parentId+'><option value = "1">Hrs</option><option value = "2">Days</option><option value = "3">Weeks</option><option value = "4">Months</option></select></td><td><input type = "number" class = "textBoxesCss percCompletedClass"></td><td><select class = "ddDepClass" id = "'+individualId+'_ddDep_'+parentId+'" >'+optStringDep+'></select></td><td id = "'+individualId+'_selectRS_'+parentId+'" class = "selectRS"></td>';

    }


else if (depth==1){
 var strForHtml =  '<td></td><td class="phase paddingtd"><img src="'+buttonStr+'" id = "'+individualId+'_sign_'+parentId+'" onclick = "collapseExpand(this.id,1)" class="minus" height="18px" title="" width="18px" style="margin-right:5px;"><input type = "text" class = "nameFieldClass" style = "width: 90%;"></td><td class="images1  paddingtd "><img src="../img/bug/addbug.png" id = "'+individualId+'_add_'+parentId+'"  class="shadow " onclick = "addRow(this.id)" height="18px" title="Add Child" width="18px"></td><td class="images1 paddingtd "><img src="../img/project/blackdustbin.jpg"  id = "'+individualId+'_del_'+parentId+'" onclick = "deleteRow(this.id,1)"     height="15px" class="shadow" title="Delete" width="15px"><img id = '+individualId+'_OK_'+parentId+'  src="../img/project/greentick.jpg" onclick = "convertTonormalTr(1,this.id,'+depth+')" height="18px" class="shadow hide" title="Green Tick" width="18px"></td><td class="dateCSS  paddingtd dateTempCss bold1"><input type = "text" class = "datePicker textBoxesCss"></td><td class="dateCSS  dateTempCss bold1"><input type = "text" class = "datePicker textBoxesCss"></td><td class  = "dateTempCss bold1 "><input type = "text" class = "datePicker textBoxesCss" id = "'+individualId+ '_pActStartDate_'+parentId+'"></input></td><td class = "dateTempCss bold1"><input type = "text" class = "datePicker textBoxesCss" id = "'+individualId+ '_pActEndDate_'+parentId+'"></input></td><td class = "dateTempCss bold1"><input type = "text" style = " width: 77%;" class = "datePicker textBoxesCss" id = "'+individualId+ '_actEndDate_'+parentId+'"></input></td><td class="effCSS bold1"><input type = "number" class = " textboxEffEditAdd textboxEffEditAddJq "><select class = "selectEffEditAdd" id = '+individualId+'_effType_'+parentId+'><option value = "1">Hrs</option><option value = "2">Days</option><option value = "3">Weeks</option><option value = "4">Months</option></select></td><td><input type = "number" class = "textBoxesCss percCompletedClass bold1"></td><td><select class = "ddDepClass bold1" id = "'+individualId+'_ddDep_'+parentId+'" >'+optStringDep+'></select></td><td id = "'+individualId+'_selectRS_'+parentId+'" class = "selectRS bold1"></td>';

    var buttonStr = '';

   if(!treeStructure[individualId].length){
      console.log('in  depth 1 if',treeStructure[individualId].length);
        // hideAddButtonClass = ' deleteCSS ';
      buttonStr = '../img/project/grey_button1.jpg';  
       
      }

    else {
       
            hideAddButtonClass = '';
       buttonStr = '../img/project/plus.png';

         }


var strForHtml =  '<td></td><td class="task paddingtd"><img src="'+buttonStr+'" id = "'+individualId+'_sign_'+parentId+'" onclick = "collapseExpand(this.id,1)" class="'+butClass+'" height="18px" title="" width="18px" style="margin-right:5px;"><input type = "text" class = "nameFieldClass" style = "width: 90%;"></td><td class="images1  paddingtd "><img src="../img/bug/addbug.png" id = "'+individualId+'_add_'+parentId+'"  class="shadow " onclick = "addRow(this.id)" height="18px" title="Add Child" width="18px"></td><td class="images1 paddingtd "><img src="../img/project/blackdustbin.jpg"  id = "'+individualId+'_del_'+parentId+'" onclick = "deleteRow(this.id,1)"     height="15px" class="shadow" title="Delete" width="15px"><img id = '+individualId+'_OK_'+parentId+'  src="../img/project/greentick.jpg" onclick = "convertTonormalTr(1,this.id,'+depth+')" height="18px" class="shadow hide" title="Green Tick" width="18px"></td><td class="dateCSS  paddingtd dateTempCss"><input type = "text" class = "datePicker textBoxesCss"></td><td class="dateCSS  dateTempCss"><input type = "text" class = "datePicker textBoxesCss"></td><td class  = "dateTempCss "><input type = "text" class = "datePicker textBoxesCss" id = "'+individualId+ '_pActStartDate_'+parentId+'"></input></td><td class = "dateTempCss "><input type = "text" class = "datePicker textBoxesCss" id = "'+individualId+ '_pActEndDate_'+parentId+'"></input></td><td class = "dateTempCss "><input type = "text" style = " width: 77%;" class = "datePicker textBoxesCss" id = "'+individualId+ '_actEndDate_'+parentId+'"></input></td><td class="effCSS "><input type = "number" class = " textboxEffEditAdd textboxEffEditAddJq "><select class = "selectEffEditAdd" id = '+individualId+'_effType_'+parentId+'><option value = "1">Hrs</option><option value = "2">Days</option><option value = "3">Weeks</option><option value = "4">Months</option></select></td><td><input type = "number" class = "textBoxesCss percCompletedClass"></td><td><select class = "ddDepClass" id = "'+individualId+'_ddDep_'+parentId+'" >'+optStringDep+'></select></td><td id = "'+individualId+'_selectRS_'+parentId+'" class = "selectRS"></td>';


 }

     else if (depth==2){


var strForHtml =  '<td></td><td class="subtask "><img src="../img/project/button.png" id = "'+individualId+'_sign_'+parentId+'" onclick = "collapseExpand(this.id,1)" class="shadow donthide" height="18px" title="" width="18px" style="margin-right:5px;"><input type = "text" class = "nameFieldClass" style = "width: 90%;"></td><td class="images1 "></td><td class="images1 bold1"><img src="../img/project/blackdustbin.jpg"   id = '+individualId+'_del_'+parentId+' onclick = "deleteRow(this.id,1)"  height="15px" class="shadow" title="Delete" width="15px"><img id = '+individualId+'_OK_'+parentId+'  src="../img/project/greentick.jpg" height = "18px" onclick = "convertTonormalTr(1,this.id,'+depth+')" class = "hide" title="Save" width="18px"></td><td class = "dateTempCss"><input type = "text" class = "datePicker textBoxesCss"></td><td class="dateCSS dateTempCss "><input type = "text" class = "datePicker textBoxesCss"></td><td class  = "dateTempCss "><input type = "text" class = "datePicker textBoxesCss" id = "'+individualId+ '_pActStartDate_'+parentId+'"></input></td><td class = "dateTempCss "><input type = "text" class = "datePicker textBoxesCss" id = "'+individualId+ '_pActEndDate_'+parentId+'"></input></td><td class = "dateTempCss "><input type = "text" style = " width: 77%;" class = "datePicker textBoxesCss" id = "'+individualId+ '_actEndDate_'+parentId+'"></input></td><td class="effCSS "><input type = "number" class = "textboxEffEditAdd textboxEffEditAddJq"><select id = '+individualId+'_effType_'+parentId+' class = " selectEffEditAdd"><option value = "1">Hrs</option><option value = "2">Days</option><option value = "3">Weeks</option><option value = "4">Months</option></select></td><td><input type = "number" class = "textBoxesCss percCompletedClass"></td><td><select class = "ddDepClass" id = "'+individualId+'_ddDep_'+parentId+'" >'+optStringDep+'></select></td><td class = "selectRS" id = "'+individualId+'_selectRS_'+parentId+'"></td>';

     }

    
    /*$('.selectRS').each(function(){
            
    if($(this).html().trim()==''){  
        if(rowId=='274_rowid_271'){
              console.log('this html is',$(this).html(),$(this).html().length,$(this));
      var decode =  $(this).html(optionStr).text();
      decode = decode.replace(/"/g,'').replace(/'/g,'');
     $(this).html(decode);
                                }
      else{
     var decode =  $(this).html(optionStr).text();
      decode = decode.replace(/"/g,'').replace(/'/g,'');
     $(this).html(decode);
   }
    }

   });*/





/*     optionStr = optionStr.replace(/"/g,'').replace(/'/g,'');
     console.log(optionStr);
               $('.selectRS').html(optionStr.replace(/"/g,'').replace(/'/g,''));*/




     $('#'+rowId).html(strForHtml);
    var tdIdForSelect = '#'+ individualId+'_selectRS_'+parentId;
           var decode = $(tdIdForSelect).html(optionStr2).text();
          decode = decode.replace(/"/g,'').replace(/'/g,'');
        $(tdIdForSelect).html(decode);

    //    console.log(optionStr2);


if(actPlStartDate=='0'||actPlStartDate=='null'){

  actPlStartDate = ''; //solving null and zero bug,running out of time!!!
}
if(actPlEndDate=='0'||actPlEndDate=='null'){
  
  actPlEndDate = ''; //solving null and zero bug,running out of time!!!
}
if(actEndDate=='0'||actEndDate=='null'){
           actEndDate = '';
}
            

       rowId = individualId+'_rowid_'+parentId;
       $('#'+rowId+' td')[0].innerHTML = serNumber;
    $('#'+rowId+' td input')[0].value = nodeName;
      $('#'+rowId+' td input')[1].value = sDateName;
       $('#'+rowId+' td input')[2].value = eDateName;

       $('#'+rowId+' td input')[3].value = actPlStartDate;
          $('#'+rowId+' td input')[4].value =  actPlEndDate;
       $('#'+rowId+' td input')[5].value =  actEndDate;
     $('#'+rowId+' td input')[6].value = effortQuant;
        var selectObjForJq   = $('#'+rowId+'   td select option')[effortType-1];
  
/*    console.log(selectObjForJq,'hiiiii','#'+rowId+' td select option');
*/      $(selectObjForJq).attr('selected',true);
        
        $('#'+rowId+' td input')[7].value =  percCompleted;

        
  
$(".datePicker").attr('readonly',true);
$(".datePicker").datepicker({
    dateFormat: 'dd/mm/yy',
    beforeShowDay: DisableSpecificDates,
    duration: "fast",
    beforeShow: findParentDate,
    onSelect: function(selected, evnt) {
      someThingUpdated = 1
          var thisEle = $(this);
      var thisId = $(this).attr('id');
           var value = thisId.split('_');
           var middleElement = value[1];

           if(middleElement=='pActStartDate'){
              changeActPlStDate(thisEle,thisDateBeforeSelect);
              }
           if(middleElement=='actEndDate'){
            changeActEndDate(thisEle,thisDateBeforeSelect);
                                          }   
      //console.log('selected is', selected, 'this.id is ', $(this).attr('id'), ' evnt is ', evnt);
        var endDateFlag = checkNature($(this).attr('id'));

           if(middleElement!='actEndDate'){
         startDateEndDateValidation(endDateFlag,$(this));
                                }
         var parentRowId =  $(this).parent('td')
            parentRowId  =  $(parentRowId).parent('tr');
            parentRowId  = $(parentRowId).attr('id');
            updateAllArr(parentRowId,1);
         $(this).removeClass('isEmptyTextBoxValidation');


         }

});



 if(treeStructure[individualId].length){
  var tdchild = $('#'+ individualId + '_rowid_'+parentId + ' td')[9];
  tdchild   = $(tdchild).children('input')[0];
   //$(tdchild).val(0);
  // console.log('here is ',tdchild);
  $(tdchild).attr('disabled',true);
  $(tdchild).addClass('disablePointer');

  tdchild = $(tdchild).parent('td');
  tdchild   = $(tdchild).next();
  tdchild   =  $(tdchild).children('input')[0];

//console.log('here is 2 ',tdchild);

  //$(tdchild).val(0);
  $(tdchild).attr('disabled',true);
  $(tdchild).addClass('disablePointer');


 }




       
  /*    $('.datepicker').prop('readonly', true);
       //document.getElementById('datepicker1').disabled = false;
       if(endDateInDatePicker != "" ){
         sdate = $(this).datepicker('getDate');
           diff = (((((edate - sdate)/3600000)/24)+1)*9);
         console.log(diff);
         if(diff<=0&&diff>-100000){
         $(function(){
            alert('Error:Start Date cannot be greater than End Date');
          $.datepicker._clearDate(this);
          console.log(diff);
       }
     else{
       if($("#peffort").val()!='')
         {
          $("#peffort").  $(tdchild).attr('disabled',true);
  $(tdchild).addClass('disablePointer');();
         }
     }
   }
 }*/
    
    

}


function checkNature(inputTextBoxId) {
    inputTextBoxId = '#' + inputTextBoxId;

    var tdVar = $(inputTextBoxId).parent('td');

    if (!$(tdVar).prev().children('input').hasClass('datePicker')) {
        startDateInDatePicker = $(inputTextBoxId).val();
        endDateInDatePicker = $(tdVar).next().children('input').val();
        getStartDateEndDateTime(startDateInDatePicker, endDateInDatePicker,false);
        return false;
    } else {
        startDateInDatePicker = $(tdVar).prev().children('input').val();
        endDateInDatePicker = $(inputTextBoxId).val();
        getStartDateEndDateTime(startDateInDatePicker, endDateInDatePicker,false);
        return true;

    }
}


function startDateEndDateValidation(endDateFlag,datepickerthis) {

    if (endDateFlag) {
        if (sdateTime != '') {
            var diff = (((((edateTime - sdateTime) / 3600000) / 24) + 1) * 9);
            if (diff <= 0 && diff > -100000) {
                alert('Error:Start Date cannot be greater than End Date');
                datepickerthis.val('');
            }
        }
    } else {
        if (sdateTime != '') {
            var diff = (((((edateTime - sdateTime) / 3600000) / 24) + 1) * 9);
            if (diff <= 0 && diff > -100000) {
                alert('Error:Start Date cannot be greater than End Date');
                          datepickerthis.val('');
                        }
        }
    }
}




function getStartDateEndDateTime(sDateInDatePicker, eDateInDatePicker,flagForMonthCalculation) {
    edateTime = '', sdateTime = ''

    var startDateTime = ''
    var endDateTime = ''

    //End date is dd/mm/yyyy
    startDateTime = sDateInDatePicker.split('/');

    if (eDateInDatePicker != '') {

        endDateTime = eDateInDatePicker.split('/');
        if (endDateTime[2].length == 2) {
            endDateTime[2] = '20' + endDateTime[2];
        }
        endDateTime[1] = parseeIntForNan(endDateTime[1]) - 1;
        endDateTime[0] = parseeIntForNan(endDateTime[0]);
        endDateTime[2] = parseeIntForNan(endDateTime[2]);
        endDateTime = new Date(endDateTime[2], endDateTime[1], endDateTime[0]);
        endDateTime = endDateTime.getTime();


    }
    if (sDateInDatePicker != '') {
        startDateTime = sDateInDatePicker.split('/');

        if (startDateTime[2].length == 2) {
            startDateTime[2] = '20' + startDateTime[2];
        }
        startDateTime[0] = parseeIntForNan(startDateTime[0]);
        startDateTime[2] = parseeIntForNan(startDateTime[2]);
        startDateTime[1] = parseeIntForNan(startDateTime[1]) - 1;
        startDateTime = new Date(startDateTime[2], startDateTime[1], startDateTime[0]);

        startDateTime = startDateTime.getTime();
    }


if(!flagForMonthCalculation){
    edateTime = endDateTime
    sdateTime = startDateTime
}
else {
return  (endDateTime - startDateTime)
  
    }
    // console.log(endDateTime);
}



function findParentDate(inputTextBox, par2) {
    var rowId = $(inputTextBox).parent('td').parent('tr').attr('id');
    thisDateBeforeSelect = $(inputTextBox).val();

   // console.log('rowId is', rowId);
    var value = rowId.split('_');
    var individualId = parseeIntForNan(value[0]);
    var parentId = parseeIntForNan(value[2]);
    var rowParentId;
    var depth = -1
    var objForSecondTd = $('#' + rowId + ' td')[1];


    if (parentId == '0') {
        depth = 0
    } else if ($(objForSecondTd).hasClass('task')) {
        depth = 1;
    } else depth = 2;

/*    console.log('depth is ', depth);
*/
    if (depth == 0) {
        startDate = startDateOriginal;
        endDate = endDateOriginal;
    } else if (depth == 1) {

        rowParentId = '#' + parentId + '_rowid_' + '0';
        if ($(rowParentId + ' td input').length) {
            startDate = $(rowParentId + ' td input')[1].value;
            endDate = $(rowParentId + ' td input')[2].value;
        } else {
            startDate = $(rowParentId + ' td')[4].innerHTML;
            endDate = $(rowParentId + ' td')[5].innerHTML;

        }

    } else if (depth == 2) {

        rowParentId = -1;

        for (var i = 0; i < ultimateEndId; i++) {
            if ($('#' + parentId + '_rowid_' + i).length) {
                rowParentId = '#' + parentId + '_rowid_' + i;
                break;
            }

        }
        if (rowParentId == -1) {
            alert('Js error in depth =2 findParentDate');
        } else {
            if ($(rowParentId + ' td input').length) {
                startDate = $(rowParentId + ' td input')[1].value;
                endDate = $(rowParentId + ' td input')[2].value;
            } else {
                startDate = $(rowParentId + ' td')[4].innerHTML;
                endDate = $(rowParentId + ' td')[5].innerHTML;

            }
        }

    } else {
        alert('JS error in depth = else  findParentDate');

    }

    //console.log('rowParentId is ', rowParentId,2 '  startDate is ', startDate, ' endDate is ', endDate);

    var tdVar = $(inputTextBox).parent('td');

    if ($(tdVar).next().children('input').hasClass('datePicker')) {
        startDateInDatePicker = $(inputTextBox).val();
        endDateInDatePicker = $(tdVar).next().children('input').val();

    } else {
        startDateInDatePicker = $(tdVar).prev().children('input').val();
        endDateInDatePicker = $(inputTextBox).val();
    }

//console.log('startDateInDatePicker is ', startDateInDatePicker, 'endDateInDatePicker is ', endDateInDatePicker);
}

function hideAllOnSubmit(){


   if(submitted==1&&isManagerFlag){
       $('#statusSub').html('Submitted');
       $('.allTextAndNumberBoxes,.selectClassForJq,.ddResourcesForJq').attr('disabled','disabled');
       $('.allTextAndNumberBoxes,.selectClassForJq,.ddResourcesForJq').addClass('disablePointer');
       $('th').css('padding-top','7px');
       $('th').css('padding-bottom','7px');
          $('th div').css('font-size', '12px');

   $('.shadow').each(function() {

        if(!$(this).hasClass('donthide')) {
            $(this).hide();
          }

    });

}

//alert(isManagerFlag+'   '+submitted);

    if(submitted==1&&!isManagerFlag){
 
     $('#submitId').attr('disabled','disabled');
     $('#saveId').attr('disabled','disabled');

     }
   
     else if(submitted ==2&&!isManagerFlag){
       $('#statusSub').html('Accepted');
       $('.allTextAndNumberBoxes,.selectClassForJq,.ddResourcesForJq').removeAttr('disabled');
       $('.allTextAndNumberBoxes,.selectClassForJq,.ddResourcesForJq').removeClass('disablePointer');
         $('.shadow').each(function() {
          $(this).removeClass('donthide');
            });
       }
    else if(submitted ==3&&!isManagerFlag){
     $('#statusSub').html('Rejected'); 
      $('.shadow').each(function() {
          $(this).removeClass('donthide');
            });


    }

  else if(isManagerFlag){
    
    if(submitted ==2){
     $('#statusSub').html('Accepted');
       $('#submitId').attr('disabled','disabled');
     $('#saveId').attr('disabled','disabled');  
   }
   if(submitted==3){
         $('#statusSub').html('Rejected');
         $('#submitId').attr('disabled','disabled');
       $('#saveId').attr('disabled','disabled');  
         }

          if(submitted!=0){
          $('#saveId').html('Approve');
          $('#submitId').html('Reject');
          $('#saveId').attr('onclick','approvethis(1,0)');
          $('#submitId').attr('onclick','approvethis(0,0)');
      }


 
 }




   

 

/****DevCode*/


/****DevCode*/


}

function deleteRow(rowId, editFlag) {
/*deleteRRow*/    

var value = rowId.split('_');
    var individualId = value[0];
    var parentId = value[2];
    rowId = individualId + '_rowid_' + parentId;

    var objForSecondTd = $('#' + rowId + ' td')[1];
    if (parentId == '0') {
        depth = 0;
    } else if ($(objForSecondTd).hasClass('task')) {
        depth = 1;
    } else depth = 2;
    
    if (treeStructure[individualId].length) {
        alert('Please delete all children first');
        return;
    }


    if (editFlag) {
        if (!confirm('Are you sure you want to delete this row?')) {
            return;
        }

    }
    individualId = parseeIntForNan(individualId);
    var arrForTreeStr = treeStructure[parentId]
    //console.log('before',arrForTreeStr);
    arrForTreeStr.splice(arrForTreeStr.indexOf(individualId), 1);
    treeStructure[parentId] = arrForTreeStr;
       // console.log('after',arrForTreeStr);



   // convertTonormalTr(-1, rowId, depth);
    updateAllArr(rowId, 0);
  //  console.log('rowid ', rowId);
    $('#' + rowId).addClass('deleteCss');


setTimeout(function(){ 
      var numValuePair = updateNumberSequenceInFirstColumn();
        
        changeDdOnDelete(rowId,numValuePair)

},400);
    if(!treeStructure[parentId].length){

 var parentRowId = -1; 
 var grandParentId = -1;

      for(var i = 0;i<=ultimateEndId;i++){
        console.log('#'+parentId + '_rowid_'+i);
        if($('#'+parentId + '_rowid_'+i).length){
           //  console.log('sassddassdasdasd','#'+parentId + '_rowid_'+i);
            parentRowId  = '#'+parentId + '_rowid_'+i;
            grandParentId  = i;
            break;
        }
       }

       var newRowId = $(parentRowId +' td')[7];
       var inputChild = $(newRowId).children('input'); 
          inputChild = inputChild[0];
   // console.log('% Complete is ',inputChild);
      $(inputChild).removeClass('disablePointer');
      $(inputChild).removeAttr('disabled');

      newRowId = '#' + parentId+ '_effType_'+ grandParentId;
      newRowId  = $(newRowId).prev();
      $(newRowId).removeClass('disablePointer');
      $(newRowId).removeAttr('disabled');
   // console.log('Effort is ',newRowId);

     $('#'+parentId+'_sign_'+grandParentId).attr('src','../img/project/grey_button1.jpg');
    // alert(parentRowId);

    }
    

}




function DisableSpecificDates(date) {
    if(endDate==null||startDate==null||endDate==''||startDate==''){
return [true];
    }

    //console.log(date);
    var m = date.getMonth();
    var d = date.getDate();
    var y = date.getFullYear();
    var day = date.getDay();
  if(saturdayOffFlag==1){
 var weekEnds = [0,6]

     }
     else if(saturdayOffFlag ==0){
      var weekEnds = [0];
     }
     else {
      var weekEnds = [0];
     }
    var endDateTime = endDate.split('/'); //End date is dd/mm/yyyy
    var startDateTime = startDate.split('/');

    if (endDateTime[2].length == 2) {
        endDateTime[2] = '20' + endDateTime[2];
    }
    if (startDateTime[2].length == 2) {
        startDateTime[2] = '20' + startDateTime[2];
    }
    endDateTime[1] = parseeIntForNan(endDateTime[1]) - 1;
    startDateTime[1] = parseeIntForNan(startDateTime[1]) - 1;
    endDateTime[0] = parseeIntForNan(endDateTime[0]);
    endDateTime[2] = parseeIntForNan(endDateTime[2]);
    startDateTime[0] = parseeIntForNan(startDateTime[0]);
    startDateTime[2] = parseeIntForNan(startDateTime[2]);


    endDateTime = new Date(endDateTime[2], endDateTime[1], endDateTime[0]); //(yyyy,mm,dd)
    // console.log(endDateTime);
    startDateTime = new Date(startDateTime[2], startDateTime[1], startDateTime[0]);
    startDateTime = startDateTime.getTime();
    endDateTime = endDateTime.getTime();

    // First convert the date in to the mm-dd-yyyy format 
    // Take note that we will increment the month count by 1 
    var currentDateTime = new Date(y, m, d);
    currentDateTime = currentDateTime.getTime();






    if (startDateTime > currentDateTime) {
        return [false];

    } else if (currentDateTime > endDateTime) {
        return [false];

    } 

    else if(holidayArrGetTime.indexOf(currentDateTime)!=-1){

        return [false];
    }
    else if(weekEnds.indexOf(day)!=-1){
              return [false];
    }

  else {
        return [true];
    }


}



var tempChildrenRowId2 = '',changeTimeFormatFlag = true;; 

function initializeJquery(){


/*inittialize*/
$(".datePicker").attr('readonly',true);
$(".datePicker").datepicker({
    dateFormat: 'dd/mm/yy',
    beforeShowDay: DisableSpecificDates,
    duration: "fast",
    beforeShow: findParentDate,
    onSelect: function(selected, evnt) {
      someThingUpdated = 1;
         someThingUpdated = 1
          var thisEle = $(this);
      var thisId = $(this).attr('id');
           var value = thisId.split('_');
           var middleElement = value[1];

           if(middleElement=='pActStartDate'){
              changeActPlStDate(thisEle,thisDateBeforeSelect);
              }
           if(middleElement=='actEndDate'){
            changeActEndDate(thisEle,thisDateBeforeSelect);
                                          }   
      //console.log('selected is', selected, 'this.id is ', $(this).attr('id'), ' evnt is ', evnt);
        var endDateFlag = checkNature($(this).attr('id'));
        
           if(middleElement!='actEndDate'){
         startDateEndDateValidation(endDateFlag,$(this));
                                }
         var parentRowId =  $(this).parent('td')
            parentRowId  =  $(parentRowId).parent('tr');
            parentRowId  = $(parentRowId).attr('id');
            updateAllArr(parentRowId,1);
         $(this).removeClass('isEmptyTextBoxValidation');
         }

});




setTimeout(function(){
  $('.editRowClass').click();
$('input[type="text"]').css('border',0);
$('input[type="text"],.textBoxesCss,input[type="number"]').addClass('allTextAndNumberBoxes');
$('.datepicker').addClass('allTextAndNumberBoxes');
$('.selectEffEditAdd').addClass('selectClassForJq');
$('.ddResources').addClass('ddResourcesForJq');

$('.textboxEffEditAddJq, .percCompletedClass').focusout(function(){
  someThingUpdated = 1
  if($(this).val()!=''){
    $(this).removeClass('isEmptyTextBoxValidation');

  }

var conditionFlag = ($(this).hasClass('disablePointer')&&dropDownFlagUsedInTask)

var tdEle = $(this).parent('td');
     tdEle = $(tdEle).parent('tr');
     tdEle = $(tdEle).attr('id');
    // console.log('id is ',tdEle,'this is',this);
     var valtest =  tdEle.split('_');
    var parentIdTest = parseeIntForNan(valtest[2]);
    var individualIdTest = parseeIntForNan(valtest[0]);
    /*****************************To check all validations to go further***************************************************/
    var conditionFlag = ($(this).hasClass('disablePointer')&&dropDownFlagUsedInTask)
    var currRowIdTd = '#' + individualIdTest +'_rowid_'+ parentIdTest +' td';
    currRowIdTd      = $(currRowIdTd)[1];
    conditionFlag    =   (conditionFlag&&$(currRowIdTd).hasClass('task'));

    
    updateAllArr(tdEle,1);



      if(parentIdTest==0||conditionFlag);   //{console.log('successfully returned');} 

      if(parentIdTest==0||conditionFlag) {return;}

        var value = tdEle.split('_');
       individualId = value[0];
       parentId     = value[2];
       var parentRowId = -1
       var sumEffort = 0 ;
       var sumQuantEffort = 0;
       for(var i = 0;i<=ultimateEndId;i++){
       // console.log('#'+parentId + '_rowid_'+i);
        if($('#'+parentId + '_rowid_'+i).length){
           //  console.log('sassddassdasdasd','#'+parentId + '_rowid_'+i);
            parentRowId  = '#'+parentId + '_rowid_'+i;
            break;
        }
       }





var tempSelectValueOfCurrentId = $('#'+individualId+'_effType_'+parentId).val();
var tempQuantValueOfCurrentId = $('#'+individualId+'_effType_'+parentId).prev()[0];
    tempQuantValueOfCurrentId = $(tempQuantValueOfCurrentId).val(); 

if(calculateEndFlag){

   var currRowIdTd2 = '#' + individualIdTest +'_rowid_'+ parentIdTest +' td';
       startDateNow =  $(currRowIdTd2)[4];
       startDateNow =  $(startDateNow).children('input')[0];
       startDateNow =  $(startDateNow).val();
       endDateNow   =  $(currRowIdTd2)[5];
       endDateNow   =  $(endDateNow).children('input')[0];

/********************************Dev Code MAyur***************************************/

       var noOfHours = calculateTempQuantBasedOnDropDown(tempQuantValueOfCurrentId,tempSelectValueOfCurrentId);
         var endDateStr = endDateCalculation(startDateNow,effInHours);
         $(endDateNow).val(endDateStr);
/***********************************************************************/
}
      if(parentRowId==-1){
        return;
      }


      for(var i = 0;i<treeStructure[parentId].length;i++){
           var tempChildrenRowId = '#' +treeStructure[parentId][i] + '_rowid_' + parentId;
                tempChildrenRowId2   = tempChildrenRowId
           var tempChildInput = $(tempChildrenRowId +' td')[9];
           var  tempPerComp =  $(tempChildrenRowId +' td')[10];
                tempPerComp   = $(tempPerComp).children('input')[0];
               tempPerCompQuant = $(tempPerComp).val();

               if(tempPerCompQuant=='') tempPerCompQuant =0;
               else tempPerCompQuant = parseeIntForNan(tempPerCompQuant);
           tempChildInput      = $(tempChildInput).children('input')[0];
           var tempQuant        =  $(tempChildInput).val();
               var tempSelect = $(tempChildInput).next();
             var tempSelectValue = $(tempSelect).val();
                tempQuant = calculateTempQuantBasedOnDropDown(tempQuant,tempSelectValue);
                 sumQuantEffort = sumQuantEffort + (tempQuant*tempPerCompQuant/100);
                 sumEffort = sumEffort + parseeIntForNan(tempQuant); 
//console.log('tempQuant is',tempQuant,'tempPerCompQuant is',tempPerCompQuant,'tempSelectValue is',tempSelectValue);
      }

      /*********************Calculate sumQuantEffort and effortIndays*********************************/
     sumQuantEffort = (sumQuantEffort*100)/sumEffort;
  effortIndays[parentIdTest] = parseeIntForNan(sumEffort/workingHoursInADay);
   /**********************************************************************/

        /***************Effort Value Insertion***************/
         var  parentEle = $(parentRowId +' td')[6];
         var inputChild =  $(parentEle).children('input')[0];
             inputChild = $(inputChild).next();
        var selectedInpuChildNext = $(inputChild).val();
          sumEffort = calculateTQBODN(sumEffort,selectedInpuChildNext);
        inputChild = $(inputChild).prev();
          $(inputChild).val(parseeIntForNan(sumEffort));
  /***********************************************************/

  /************************Perc Complete Insertion**********************/
 
         parentEle = $(parentRowId +' td')[10];
        inputChild =  $(parentEle).children('input')[0];
         $(inputChild).val(parseeIntForNan(sumQuantEffort));
   

      parentRowId  =   $(parentRowId+' td')[6];
      parentRowId  =     $(parentRowId).children('input')[0];
      $(parentRowId).focusout();
     
///console.log('parent call fired',parentRowId);











if(!treeStructure[individualIdTest].length){

var dropDownId =   '#' + individualIdTest + '_effType_' + parentIdTest;
   var tempSelectValue =   $(dropDownId).val();
             dropDownId = $(dropDownId).prev();
      var  tempQuant   = $(dropDownId).val();

   tempQuant = calculateTempQuantBasedOnDropDown(tempQuant,tempSelectValue);

   effortIndays[individualIdTest] = parseeIntForNan(tempQuant/workingHoursInADay);

 
}


/***************************************************************/
//console.log('all from here',effortIndays[parentIdTest],parentIdTest);
  



});


var prevSelected = 0;
var dropDownFlagUsedInTask = false;
$('.selectClassForJq').on('focus', function () {
   
   prevSelected = $(this).val();

    var prevEle = $(this).prev()[0];


var currentId = $(this).attr('id');

var value  = currentId.split('_');
var individualId = parseeIntForNan(value[0]);
var parentId     = parseeIntForNan(value[2]);

var currRowIdTd = '#' + individualId +'_rowid_'+ parentId +' td';
    currRowIdTd      = $(currRowIdTd)[1];
   var  conditionFlag    = $(currRowIdTd).hasClass('task');
   if(conditionFlag) {dropDownFlagUsedInTask = true; }
$(prevEle).focusout();

}).change(function(){
     // dropDownFlagUsedInTask = false;
someThingUpdated = 0;
 var tempSelectValue = $(this).val();
var currentId = $(this).attr('id');
var value  = currentId.split('_');
var individualId = parseeIntForNan(value[0]);
var parentId     = parseeIntForNan(value[2]);
var currRowIdTd = '#' + individualId +'_rowid_'+ parentId +' td';
    currRowIdTd      = $(currRowIdTd)[1];
var  conditionFlag    = $(currRowIdTd).hasClass('task');
   if(conditionFlag) {dropDownFlagUsedInTask = true; }





if(treeStructure[individualId].length){
  var childRowId = '#'+treeStructure[individualId][0]+'_effType_'+individualId;
  childRowId = $(childRowId).prev()[0];
   $(childRowId).focusout();
}




var tdEle = $(this).parent('td').parent('tr').attr('id'); 
var inBox = $(this).prev()[0];




setTimeout(function(){
  $(inBox).focusout();
    dropDownFlagUsedInTask = false;

},400);



});

$('.ddResourcesForJq').change(function(){
  var tdEle = $(this).parent('td');
     tdEle = $(tdEle).parent('tr');
     tdEle = $(tdEle).attr('id'); 

     if($(this).val()!='0'){
    $(this).removeClass('isEmptyTextBoxValidation');

  }

updateAllArr(tdEle,1);


});

//$('.textboxEffEditAddJq').spinner();







$('.nameFieldClass').focusout(function(){
     var tdlVal  = $(this).val();
    var tdEle = $(this).parent('td');
    var  num = $(tdEle).prev()[0];
     num    = num.innerHTML;
     tdEle = $(tdEle).parent('tr');
     tdEle = $(tdEle).attr('id'); 

        updateAllArr(tdEle,1);

    var value = tdEle.split('_');
    var individualId = value[0]; 
    $('.depDD_'+ individualId).each(function(){
             num = $(this).text().match(/\d{1,9}/i)[0];
             console.log('num is',num);
          var  tdlValNew = num+' '+tdlVal;
             $(this).text(tdlValNew);
    });
});






},100);



}



function calculateTQBODN(tempQuant,tempSelectValue){

           if(tempQuant == ''){
            tempQuant = 0 ;
           }
          tempSelectValue = parseeIntForNan(tempSelectValue);


          if(tempSelectValue == 2){
            tempQuant = tempQuant/workingHoursInADay;

          }

           if(tempSelectValue ==3){
            tempQuant = tempQuant/(workingHoursInADay*5);
            if(!saturdayOffFlag){
              tempQuant = tempQuant*5/6;
            }
          }

          if(tempSelectValue==4){
       tempQuant = tempQuant/(workingHoursInADay*5);
            if(!saturdayOffFlag){
              tempQuant = tempQuant*5/6;
            }

            tempQuant = tempQuant/4;




        }



  return parseeIntForNan(tempQuant);


}








function calculateTempQuantBasedOnDropDown(tempQuant,tempSelectValue){

           if(tempQuant == ''){
            tempQuant = 0 ;
           }
        tempSelectValue = parseeIntForNan(tempSelectValue);
      tempQuant  =  parseeIntForNan(tempQuant);
        
          if(tempSelectValue == 2){
            tempQuant = tempQuant*workingHoursInADay;

          }
          if(tempSelectValue ==3){
            tempQuant = tempQuant*workingHoursInADay*5;
            if(!saturdayOffFlag){
              tempQuant = tempQuant*6/5;
            }
          }

          if(tempSelectValue==4){
            var startDateEle = $(tempChildrenRowId2+' td '+'input')[1];
                startDateEle = $(startDateEle).val();
                if(startDateEle == ''){
                  tempQuant = 0 ;
                }
                else{
          var  valstartDateEle =  startDateEle.split('/');
          var  endDateEle      = [valstartDateEle[0],parseeIntForNan(valstartDateEle[1])+tempQuant,valstartDateEle[2]].join('/'); 
                var tempQuant2 = tempQuant;
                   tempQuant = getStartDateEndDateTime(startDateEle,endDateEle,true);
                        tempQuant = (tempQuant/(3600000*24));
                        if(saturdayOffFlag){
                          tempQuant = tempQuant - (tempQuant2*8)
                        }
                        else{
                                         tempQuant = tempQuant-(tempQuant2*4);
                            }
                               tempQuant = tempQuant*workingHoursInADay;

                     }

           

          }



tempChildrenRowId2 = '';

if(isNaN(tempQuant)){
  tempQuant = 0;
}
return Math.ceil(tempQuant);


}




function updateNumberSequenceInFirstColumn(){
var numValuePair = [];
var trArr = $('#tbody123 tr');
var kInc =0;
for(var i = 0;i<trArr.length;i++){
  if(!$(trArr[i]).hasClass('deleteCss')){

        kInc++
        var trId = $(trArr[i]).attr('id');
    var value =  trId.split('_');
    var individualId = value[0];
  var tdEle1 = $(trArr[i]).children('td')[1];
  var tdEle1Input = $(tdEle1).children('input')[0];
    tdEle1Input =  tdEle1Input.value;
  var  tdEle0 = $(trArr[i]).children('td')[0]; 
  var kArr = [kInc,tdEle1Input,individualId];
     numValuePair.push(kArr);
  if($(tdEle1).hasClass('phase')){
   var centStr =  '<center><b style="font-size:12px;">'+kInc+'</b></center>';
     $(tdEle0).html(centStr);
 }
 else{
     var centStr =  '<center style="font-size:12px;">'+kInc+'</center>';
       $(tdEle0).html(centStr);


     }
 }

}
return numValuePair;
}


function changeDdOnDelete(currId,numValuePair){
  
var value = currId.split('_');
var individualId = value[0];
var depClass = '.depDD_'+ individualId;

$(depClass).remove();

for(var i =0;i<numValuePair.length;i++){
  var newClass = '.depDD_'+numValuePair[i][2];
  var newSrt     = numValuePair[i][0]+' '+numValuePair[i][1]; 
   $(newClass).text(newSrt);

}


}

function changeDdOnAdd(beforeId,currId,numValuePair){
var value = beforeId.split('_');
var befIndividualId = value[0];
befIndividualId = befIndividualId.slice(1);
var depClass = '.depDD_'+ befIndividualId;

 value = currId.split('_');
 var individualId = value[0]; 

var opStrDD = '<option value="'+individualId+'" class="depDD_'+individualId+'"></option>';

console.log('depClass is',depClass,'opStrDD is',opStrDD);
     addafter(depClass,opStrDD);

for(var i =0;i<numValuePair.length;i++){
  var newClass = '.depDD_'+numValuePair[i][2];
  var newSrt     = numValuePair[i][0]+' '+numValuePair[i][1]; 
   $(newClass).text(newSrt);

}

  
}


function addafter(depClass,opStrDD){
  depClass = $(depClass);

for(var i =0;i<depClass.length;i++){
    
    $(depClass[i]).after(opStrDD);

}




}



function calculateEffDays(sDateNew,sDateOld){
  sDateOld = sDateOld.split('/');
  sDateNew =  sDateNew.split('/');
   if(sDateOld.length==2){
     sDateOld[2] = '20' + sDateOld[2];
   }
   if(sDateNew.length==2){
    sDateNew[2] = '20' + sDateNew[2];
   }
   sDateNew[1] = sDateNew[1] -1;
   sDateOld[1]  = sDateOld[1] - 1;


sDateNew = new Date(sDateNew[2],sDateNew[1],sDateNew[0]);
sDateOld = new Date(sDateOld[2],sDateOld[1],sDateOld[0]);

var m = sDateOld.getDate();
var d = sDateOld.getMonth();
var y = sDateOld.getFullYear();
    var effdays = 1;
  while(sDateNew>sDateOld){
   sDateOld = new Date(y,m,d++);
   if(calculateHoliday(sDateOld)){
     effDays++;
   }
   
  }

  while(sDateNew<sDateOld){
  sDateOld = new Date(y,m,d--);
   if(calculateHoliday(sDateOld)){
     effDays++;
   }
  } 

  return effDays;





}



function changeActPlStDate(sDateEle,sDateOld){
   var sDateId = $(sDateEle).attr('id');
   var value =  sDateId.split('_');
   var individualId = value[0];
   var sDateNew = $(sDateEle).val();
   var numberOfDays = calculateEffDays(sDateNew,sDateOld);
   var tdEle = $(sDateEle).parent('td');
   var tdEle2 = $(tdEle).next();
   var DateArr = [];
   var endInput = $(tdEle2).children('input')[0];
   var DateArr = [];
    DateArr[0] = endInput;
   for(var i =0;i<treeStructure[individualId].length;i++){
          var plStartDateEle = '#'+treeStructure[individualId][i] + '_pActStartDate_'+individualId;
           DateArr.push(plStartDateEle);
           var plEndDateEle = '#' +treeStructure[individualId][i] + '_pActEndDate_'+individualId;
           DateArr.push(plEndDateEle);
           }


for(var i = 0;i<DateArr.length;i++){
  var Ele = DateArr[i];
  if($(Ele).val()!=''){
     var eDateClt = calculateAheadDate($(Ele).val(),numberOfDays);
     $(Ele).val(eDateClclt); 
  }  

}


}





function calculateAheadDate(nowDate,numberOfDays){
   nowDate = nowDate.split('/');
   if(nowDate[2].length==2){
       nowDate[2] = '20' +nowDate[2];
   }
   nowDate[1] = nowDate[1] - 1;
    nowDate = new Date(nowDate[2],nowDate[1],nowDate[0]);
    var countDays = 1;
    var d = nowDate.getDate();
    var m = nowDate.getMonth();
    var y = nowDate.getFullYear(); 
      while(countDays < numberOfDays){
         nowDate = new Date(y,m,d++);
         if(calculateHoliday(nowDate)){
                countDays++             
         }
      
      }
      while(numberOfDays < countDays){
         nowDate = new Date(y,m,d--);
         if(calculateHoliday(nowDate)){
                countDays++             
         }

      }
      m = nowDate.getMonth();
      d = nowDate.getDate();
      y = nowDate.getFullYear();
      m++;
       if(m.length ==1 ){
       m = '0'+m;
       }
      if(d.length ==1 ){
       d = '0'+d;
       }       


nowDate = d +'/'+m+'/'+y;

return nowDate;


}







function calculateEffDays(sDateNew,sDateOld){
  sDateOld = sDateOld.split('/');
  sDateNew =  sDateNew.split('/');
   if(sDateOld.length==2){
     sDateOld[2] = '20' + sDateOld[2];
   }
   if(sDateNew.length==2){
    sDateNew[2] = '20' + sDateNew[2];
   }
   sDateNew[1] = sDateNew[1] -1;
   sDateOld[1]  = sDateOld[1] - 1;


sDateNew = new Date(sDateNew[2],sDateNew[1],sDateNew[0]);
sDateOld = new Date(sDateOld[2],sDateOld[1],sDateOld[0]);

var m = sDateOld.getDate();
var d = sDateOld.getMonth();
var y = sDateOld.getFullYear();
    var effdays = 1;
  while(sDateNew>sDateOld){
   sDateOld = new Date(y,m,d++);
   if(calculateHoliday(sDateOld)){
     effDays++;
   }
   
  }

  while(sDateNew<sDateOld){
  sDateOld = new Date(y,m,d--);
   if(calculateHoliday(sDateOld)){
     effDays++;
   }
  } 

  return effDays;



}


function  calculateHoliday(date){

 


 var weekEnds =[0];
 var m = date.getMonth();
    var d = date.getDate();
    var y = date.getFullYear();
    var day = date.getDay();

  if(req.session.saturdayOffFlag==1){
  weekEnds = [0,6]

     }
     else if(req.session.saturdayOffFlag ==0){
       weekEnds = [0];
     }
 




if(holidayArrGetTime.indexOf(date)!=-1){
    return false;
}
else if(weekEnds.indexOf(day)!=-1){
              return false;
    }

    else {
        return true;
         }



}



function changeActEndDate(eDateEle,oldDate){

  var endDateNew = $(eDateEle).val();
  endDateNew      = endDateNew.split('_');
  endDateNew      =  new Date();  


   
}