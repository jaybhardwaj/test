<<<<<<< HEAD
=======

>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
var varForMakingLocalVarGlobalForTimer ;
var thisDateBeforeSelect = '';
var workingHoursInADay = 9;
var maxVersion = 1;
var holidayArrGetTime = [];
var bigAarrBigArrBecauseNormalMethodWasNotWorking = [];
var dependenteeArr = [];
var percValue;
var percEle;
var currDatePickerId;
var minDateGlobal;
var dependantsArr = [];
var commentString;
var minDateGlobalFlag = true; 
var glyphiconArr = [];
var globalvarForGlyphcomment;
var clicks = 0;
var timer;
var projName;
var remarks;
var changedEleArr = [];
var beforeChanged = [];
var newRowFlag = false;
var collaborateSaveFlag = false;
//console.log
for (var i = 0; i < holidayArr.length; i++) {
    var holidayArrDateTime = holidayArr[i].split('/');
    holidayArrDateTime[0] = parseeIntForNan(holidayArrDateTime[0]);
    holidayArrDateTime[1] = parseeIntForNan(holidayArrDateTime[1]) - 1;
    holidayArrDateTime[2] = parseeIntForNan(holidayArrDateTime[2]);
    if (holidayArrDateTime[2].length == 2) {
        holidayArrDateTime[2] = '20' + holidayArrDateTime[2];
    }
    holidayArrDateTime = new Date(holidayArrDateTime[2], holidayArrDateTime[1], holidayArrDateTime[0]);
    holidayArrDateTime = holidayArrDateTime.getTime();
    holidayArrGetTime.push(holidayArrDateTime);

}




var effortArr = ['', 'Hrs', 'Days', 'Weeks', 'Months', 'Years'];

ultimateEndId++;


var tempProjectId = projectId;

var counterForAjax = 0,
    ajaxFailureFlag = true;
var counterForRecursionAjax = 0;


var insertArr = [];
var updateArr = [];
var curentDropdownValueForEffort = 0;
var currentNodeNameForUpdateArrAll = '';
var currenteffType = 0;

function updateAllArr(idUsed, isActiveFl) {
 //   console.log('updateAllArr');
    var value = idUsed.split('_');
    var individualId = parseeIntForNan(value[0]);
    var parentId = value[2];
    idUsed = individualId + '_rowid_' + parentId
    var stringForId = '#' + idUsed + ' td ' + ' input ';
    var stringForSelect = '#' + idUsed + ' td ' + ' select ';
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

    if (isActiveFl == 0) {
        var newArr = [];
        for (var i = 0; i < 15; i++) {
            newArr.push(0);
        }

        newArr[0] = individualId;
        newArr[9] = parentId;



    }




    if (isActiveFl == 1) {
        var newArr = [];
        newArr[0] = individualId;
        newArr[1] = $(stringForId)[0].value; //Name 
        newArr[2] = $(stringForId)[1].value; //Start
        newArr[3] = $(stringForId)[2].value; //End
        newArr[4] = $(stringForId)[3].value; //planned Actual Strt Date
        newArr[5] = $(stringForId)[4].value; //Planned Act End Date
        newArr[6] = $(stringForId)[5].value; //Act end 


        if ($(stringForId)[6].value != '') {
            newArr[7] = $(stringForId)[6].value; //Effort
        } else newArr[7] = 0;
        newArr[8] = $(stringForSelect)[0].value; //Effort Type
        newArr[9] = parentId;

        if ($(stringForId)[7].value != '') {
            newArr[10] = $(stringForId)[7].value; //Perc Complete
        } else newArr[10] = 0;

        newArr[11] = isActiveFl;
        newArr[12] = $(stringForSelect)[2].value; //Resource Type

        newArr[13] = calculateTempQuantBasedOnDropDown(newArr[7], newArr[8]); //Effort in hours
        newArr[14] =  $(stringForSelect)[1].value;
        newArr[14] = parseeIntForNan(newArr[14]);//depoendancy
        $('#' + individualId + '_del_' + parentId).attr("onclick", "deleteRow(this.id,1)");

    }
    else if (isActiveFl== -1){

        var newArr = [];
        newArr[0] = individualId;
        newArr[1] = $(stringForId)[0].value; //Name 
        newArr[2] = $(stringForId)[1].value; //Start
        newArr[3] = $(stringForId)[2].value; //End
        newArr[4] = $(stringForId)[3].value; //planned Actual Strt Date
        newArr[5] = $(stringForId)[4].value; //Planned Act End Date
        newArr[6] = $(stringForId)[5].value; //Act end 


        if ($(stringForId)[6].value != '') {
            newArr[7] = 0; //Effort
        } else newArr[7] = 0;
        newArr[8] = 0; //Effort Type
        newArr[9] = parentId;

        if ($(stringForId)[7].value != '') {
            newArr[10] = $(stringForId)[7].value; //Perc Complete
        } else newArr[10] = 0;

        newArr[11] = isActiveFl;
        newArr[12] = $(stringForSelect)[2].value; //Resource Type

        newArr[13] = calculateTempQuantBasedOnDropDown(newArr[7], newArr[8]); //Effort in hours
        newArr[14] =  $(stringForSelect)[1].value;
        newArr[14] = parseeIntForNan(newArr[14]);//depoendancy
        $('#' + individualId + '_del_' + parentId).attr("onclick", "deleteRow(this.id,1)");


    }


   // console.log(newArr);
    var iValue = -1; //Either insertion or updation Flag
    for (var i = 0; i < updateArr.length; i++) {
        if (updateArr[i][0] == individualId) {
            iValue = i;
            break;
        }
    }

    if (iValue == -1) {
        updateArr.push(newArr);
    } else {

     updateArr[iValue] = newArr;
    }

   // console.log(newArr);

    //console.log(updateArr);


    curentDropdownValueForEffort = 0;
    currentNodeNameForUpdateArrAll = '';
    currenteffType = 0;



}




$(document).ready(function() {

$("#adMenu").addClass('hide');
 // $('.div1').css('width',$('#projTable').css('width'));
 $(".wrapper1").scroll(function(){
    $("#projTable2").scrollLeft($(".wrapper1").scrollLeft());
  });
  $("#projTable2").scroll(function(){
    $(".wrapper1").scrollLeft($("#projTable2").scrollLeft());
  });

    var thEle = $('thead tr th')[12];
   var newData = $(thEle).html(optionStr).text();
                  $(thEle).html(newData);
   // console.log('optStringDep is', optStringDep);
   resourceFilterFunctionality();
    optStringDep = $('#tbodyhidden123').html(optStringDep).text();
    $('.ddDepClass').html(optStringDep);
    //console.log('optStringDep is', optStringDep);


    $('.task-img').addClass('active');
    $('.se-pre-con').fadeOut('slow');
   



    //alert(<%=isManagerFlag%>);

    setTimeout(function() {
 var decode = $('#tbodyhidden123').html(Tree).text();
    $('#tbody123').html(decode);
    initializeJquery();
  
  setTimeout(function(){ hideAllOnSubmit(); },1400);
    }, 400);

    /*if(submitFlagForFunc==1){ setTimeout(function(){ hideAllOnSubmit();},400);}
    if(submitFlagForFunc==2){   $('#statusSub').html('Accepted')}
      if(submitFlagForFunc==3){   $('#statusSub').html('Rejected')}
     if(submitFlagForFunc==3&&<%=isManagerFlag%>){   setTimeout(function(){hideAllOnSubmit();},400);
      $('#statusSub').html('Rejected')}
  */
    var index1, index2;
    var subProArr = [],
        subVerArr = [];




    $('#proSel option').each(function(i) {
        //console.log('submittedProject is', submittedProject);
        for (var k = 0; k < submittedProject.length; k++) {
          //  console.log('this.val is', $(this).val(), 'element is', submittedProject[k]);
            if ($(this).val() == submittedProject[k]) {
              //  console.log('this is', $(this)[0]);
                $(this).addClass('submitDropDownClass');
            }

        }
        if ($(this).val() == projectId) {
            index1 = i;
            projName = $(this).text();
        }
    });
var newVer = $('#verSel option');
   var eleVer = newVer[newVer.length-1];
if(version==-1){
    version = $(eleVer).val();
}
//console.log('version is ',version);

    $('#verSel option').each(function(i) {

        for (var k = 0; k < submittedVersion.length; k++) {
           // console.log('this.val is', $(this).val(), 'element is', submittedVersion[k]);
            if ($(this).val() == submittedVersion[k]) {
                $(this).addClass('submitDropDownClass');
            }

        }


        if ($(this).val() == version) {
            index2 = i;
        }
    });


//console.log('index2 is ',index2);

    var selectJq1 = $('#proSel option');
    var selectJq2 = selectJq1[index1];
    //console.log('here is ',selectJq2);
    $(selectJq2).attr('selected', true);
    selectJq1 = $('#verSel option')[index2];
    $(selectJq1).attr('selected', true);




    $('#proSel').change(function() {
        var val = $('#proSel').val();
        tempProjectId = val;
        var foundFlag = false;

        var str = '/task?flag=' + tempProjectId + '&&versionFlag=' + -1;
        window.location.href = str;
        for (var i = 0; i < projectAndVersions.length; i++) {
            if (tempProjectId == projectAndVersions[i].project) {
                foundFlag = true;

                var str = '/task?flag=' + tempProjectId + '&&versionFlag='+ 300;
                window.location.href = str;




            }

        }

        /*var str = '/task?flag='+val;
        window.location.href = str;*/
    });

    $('#verSel').change(function() {

        var val = $('#verSel').val();
        var str = '/task?flag=' + projectId + '&&versionFlag=' + val;
        window.location.href = str;
    });

maxVersion = $('#verSel option').length;



});



function makeMoreRow(newlength) {
    var str = '',
        k;
    for (var i = 1; i <= newlength; i++) {
        str = str + '<option value = ' + i + '>' + i + '</option>';
        k = i;
    }
    k++;
    str = str + '<option value = ' + k + '>--Create new Version</option>';

    $('#verSel').html(str);

}



function collapseExpand(id, flag) {

  $('#tbody123 tr .open').click();

    //console.log('ts here',treeStructure[4]);
    //alert('clickeed yo!');

    var value = id.split('_');
    var individualId = parseeIntForNan(value[0]);
    var parentId = parseeIntForNan(value[2]);
    var idStr = '#' + id;

    if (!treeStructure[individualId].length) return;
    //alert(idStr);
    if ($(idStr).hasClass("minus")) {

        for (var i = 0; i < treeStructure[individualId].length; i++) {

            var str = '#' + treeStructure[individualId][i] + '_rowid_' + individualId;
            var str2 = '#' + treeStructure[individualId][i] + '_sign_' + individualId;


            $(str).addClass('hide1');
            $(str).hide('fast');
            if ($(str2).hasClass('minus')) {
               // console.log(str2);
                $(str2).addClass('keepOpen');
            }
            str2 = str2.slice(1);
            //console.log('str2 is', str2);
            collapseExpand(str2, 0);


        }
        $(idStr).removeClass('minus');
        $(idStr).addClass('plus');
        $(idStr).attr('src', '../img/project/plus.png');



    } else if ($(idStr).hasClass("plus") && flag == 1) {

        for (var i = 0; i < treeStructure[individualId].length; i++) {
            var str = '#' + treeStructure[individualId][i] + '_rowid_' + individualId;
            var str2 = '#' + treeStructure[individualId][i] + '_sign_' + individualId;

            //console.log(str);
            $(str).hide();
            $(str).removeClass('hide');
            $(str).removeClass('hide1');
            $(str).show('slow');
            if ($(str2).hasClass('keepOpen')) {
                $(str2).removeClass('keepOpen');
                str2 = str2.slice(1);
                collapseExpand(str2, 1);
            }



        }



        $(idStr).removeClass('plus');
        $(idStr).addClass('minus');
        $(idStr).attr('src', '../img/project/minus.png');


    } else return;



}




function addRow(currentId) {
    /*********************addRRow****************************************/
    someThingUpdated =1;
    changedEleFunc(currentId,-1);
    showSaveSubmit();
    var value = currentId.split('_');
    var individualId = value[0];
    var parentId = value[2];
    var lastChildId = individualId;
    var lastParentId = parentId;
    var depth = 0;
    var idStr = '#' + currentId;
    var signStr = '#' + individualId + '_sign_' + parentId;
    if (!treeStructure[individualId].length && depth < 2) {
        $(signStr).attr('src', '../img/project/minus.png');
    }
    if ($(signStr).hasClass('plus')) {
        $(signStr).click();
    }
    if (individualId == 0) {
        depth = 0
    } else if (parentId == 0) {
        depth = 1;
    } else depth = 2;
    var len = treeStructure[lastChildId].length;
  // console.log(treeStructure, len);
    if (len) {
        lastChildId = treeStructure[individualId][treeStructure[individualId].length - 1];
        lastParentId = individualId;
        len = treeStructure[lastChildId].length;
        while (len) {
            //margin = margin -6;
            lastParentId = lastChildId;
            lastChildId = treeStructure[lastChildId][treeStructure[lastChildId].length - 1];
            //console.log(lastChildId);
            len = treeStructure[lastChildId].length;
            // depth++ ; 
        }

    }

    var hideAddButtonClass = '';
    var newcurrentId = '#' + lastChildId + '_rowid_' + lastParentId;

    if (depth == 0) {
        var str = '<tr id = "' + ultimateEndId + '_rowid_' + individualId + '" ><td></td><td class="phase paddingtd bold1"><img src= "../img/project/grey_button1.jpg" id = "' + ultimateEndId + '_sign_' + individualId + '" onclick = "collapseExpand(this.id,1)" class="minus" height="18px" title="Add Phase" width="18px" style="margin-right:5px;"><span class = "namefieldClassSpan"></span><input type = "text" class = "nameFieldClass"   style = "width: 90%;"></td><td class="images1 bold1"><img src= "../img/bug/addbug.png" id = "' + ultimateEndId + '_add_' + individualId + '"  class="shadow phaseImg" onclick = "addRow(this.id)" height="18px" title="Add Child" width="18px"></td><td class="images1 bold1"><span class="glyphicon glyphicon-comment" ></span><img src="../img/project/blackdustbin.jpg" style = "margin-bottom:10px;"   height="15px" class="shadow" onclick = "deleteRow(this.id,1)" id = "' + ultimateEndId + '_del_' + individualId + '"  title="Delete" width="15px"></td><td class = "dateTempCss bold1 "><input type = "text" class = "datePicker textBoxesCss" id = "' + ultimateEndId + '_sDate_' + individualId + '" ></td><td class="dateTempCss bold1"><input type = "text " id = "' + ultimateEndId + '_eDate_' + individualId + '" class = "datePicker textBoxesCss"></td> <td class  = "dateTempCss bold1"><input type = "text" class = "datePicker textBoxesCss" id = "' + ultimateEndId + '_pActStartDate_' + individualId + '"></input></td><td class = "dateTempCss bold1"><input type = "text" class = "datePicker textBoxesCss" id = "' + ultimateEndId + '_pActEndDate_' + individualId + '"></input></td><td class = "dateTempCss bold1"><input type = "text"  style = " width: 77%;" class = "datePicker textBoxesCss" id = "' + ultimateEndId + '_actEndDate_' + individualId + '"></input></td><td class="effCSS bold1"><input type = "number"  class = " textboxEffEditAdd textboxEffEditAddJq"  id = "' + ultimateEndId + '_eff_' + individualId + '" ><select id = "' + ultimateEndId + '_effType_' + individualId + '" class = "selectEffEditAdd"><option value = "1">Hrs</option><option value = "2">Days</option><option value = "3">Weeks</option><option value = "4">Months</option></select></td><td><input type = "number" class = "textBoxesCss bold1 percCompletedClass"></td><td><select class = "ddDepClass"  id = "' + ultimateEndId + '_ddDep_' + individualId + '" >' + optStringDep + '></select></td><td class = "selectRS" id = "' + ultimateEndId + '_selectRS_' + individualId + '" ></td>';
    } else if (depth == 1) {

        var str = '<tr id = "' + ultimateEndId + '_rowid_' + individualId + '" ><td></td><td class="task paddingtd"><img src= "../img/project/grey_button1.jpg" id = "' + ultimateEndId + '_sign_' + individualId + '" onclick = "collapseExpand(this.id,1)" class="minus " height="18px" title="Add Phase" width="18px" style="margin-right:5px;"><span class = "namefieldClassSpan"></span><input type = "text" class = "nameFieldClass"   style = "width: 90%;"></td><td class="images1 "><img src="../img/bug/addbug.png" id = "' + ultimateEndId + '_add_' + individualId + '"  class="shadow phaseImg" onclick = "addRow(this.id)" height="18px" title="Add Child" width="18px"></td><td class="images1 "><span class="glyphicon glyphicon-comment" ></span><img src="../img/project/blackdustbin.jpg"  style = "margin-bottom:10px;"    height="15px" class="shadow" onclick = "deleteRow(this.id,1)" id = "' + ultimateEndId + '_del_' + individualId + '"  title="Delete" width="15px"></td><td class = "dateTempCss "><input type = "text" class = "datePicker textBoxesCss" id = ' + ultimateEndId + '_sDate_' + individualId + ' ></td><td class="dateTempCss "><input type = "text " id = "' + ultimateEndId + '_eDate_' + individualId + '" class = "datePicker textBoxesCss"></td> <td class  = "dateTempCss "><input type = "text" class = "datePicker textBoxesCss" id = "' + ultimateEndId + '_pActStartDate_' + individualId + '"></input></td><td class = "dateTempCss"><input type = "text" class = "datePicker textBoxesCss" id = "' + ultimateEndId + '_pActEndDate_' + individualId + '"></input></td><td class = "dateTempCss "><input type = "text"  style = " width: 77%;" class = "datePicker textBoxesCss" id = "' + ultimateEndId + '_actEndDate_' + individualId + '"></input></td><td class="effCSS "><input type = "number"  class = " textboxEffEditAdd textboxEffEditAddJq"  id = "' + ultimateEndId + '_eff_' + individualId + '" ><select id = "' + ultimateEndId + '_effType_' + individualId + '" class = "selectEffEditAdd"><option value = "1">Hrs</option><option value = "2">Days</option><option value = "3">Weeks</option><option value = "4">Months</option></select></td><td><input type = "number" class = "textBoxesCss  percCompletedClass"></td><td><select class = "ddDepClass"  id = "' + ultimateEndId + '_ddDep_' + individualId + '" >' + optStringDep + '></select></td><td class = "selectRS" id = "' + ultimateEndId + '_selectRS_' + individualId + '" ></td>';

    } else if (depth == 2) {
        var str = '<tr id = "' + ultimateEndId + '_rowid_' + individualId + '" ><td></td><td class="subtask"><img src= "../img/project/button.png" id = "' + ultimateEndId + '_sign_' + individualId + '" onclick = "collapseExpand(this.id,1)" class="minus' + hideAddButtonClass + '" height="18px" title="Add Phase" width="18px" style="margin-right:5px;"><span class = "namefieldClassSpan"></span><input type = "text" class = "nameFieldClass"   style = "width: 90%;"></td><td class="images1 "></td><td class="images1 "><span class="glyphicon glyphicon-comment"></span><img src="../img/project/blackdustbin.jpg"  style = "margin-bottom:10px;"   height="15px" class="shadow" onclick = "deleteRow(this.id,1)"  id = "' + ultimateEndId + '_del_' + individualId + '"  title="Delete" width="15px"></td><td class = "dateTempCss"><input type = "text" class = "datePicker textBoxesCss" id = ' + ultimateEndId + '_sDate_' + individualId + ' ></td><td class="dateTempCss"><input type = "text " id = "' + ultimateEndId + '_eDate_' + individualId + '" class = "datePicker textBoxesCss"></td> <td class  = "dateTempCss "><input type = "text" class = "datePicker textBoxesCss" id = "' + ultimateEndId + '_pActStartDate_' + individualId + '"></input></td><td class = "dateTempCss"><input type = "text" class = "datePicker textBoxesCss" id = "' + ultimateEndId + '_pActEndDate_' + individualId + '"></input></td><td class = "dateTempCss "><input type = "text"  style = " width: 77%;" class = "datePicker textBoxesCss" id = "' + ultimateEndId + '_actEndDate_' + individualId + '"></input></td><td class="effCSS "><input type = "number"  class = " textboxEffEditAdd textboxEffEditAddJq"  id = "' + ultimateEndId + '_eff_' + individualId + '" ><select id = "' + ultimateEndId + '_effType_' + individualId + '" class = "selectEffEditAdd"><option value = "1">Hrs</option><option value = "2">Days</option><option value = "3">Weeks</option><option value = "4">Months</option></select></td><td><input type = "number" class = "textBoxesCss  percCompletedClass"></td><td><select class = "ddDepClass"  id = "' + ultimateEndId + '_ddDep_' + individualId + '" >' + optStringDep + '></select></td><td class = "selectRS" id = "' + ultimateEndId + '_selectRS_' + individualId + '" ></td>';
    }
    makeEmptyAjaxCall();
    if (newcurrentId == '#0_rowid_-1') { newcurrentId = '#tbody123'
                                     $(newcurrentId).append(str);   }
    else{$(newcurrentId).after(str);}
    initializeJquery();

    /************Resources DropDown***********/
    var tdIdForSelect = '#' + ultimateEndId + '_selectRS_' + individualId;
    var decode = $(tdIdForSelect).html(optionStr).text();
    decode = decode.replace(/"/g, '').replace(/'/g, '');
    $(tdIdForSelect).html(decode);

    /*********************************************/



    /************Resources DropDown***********/
    if (depth != 0) {
        if (!treeStructure[individualId].length) {
            var tdchild = $('#' + individualId + '_rowid_' + parentId + ' td')[9];
            tdchild = $(tdchild).children('input');
            $(tdchild).val(0);
            $(tdchild).attr('disabled', true);
            $(tdchild).addClass('disablePointer');
            tdchild = $(tdchild).parent('td');
            tdchild = $(tdchild).next();
            tdchild = $(tdchild).children('input');
            $(tdchild).val(0);
            $(tdchild).attr('disabled', true);
            $(tdchild).addClass('disablePointer');

          var parentRowIdHereUsedIsOnlyForUpdateArrAll = individualId + '_rowid_' + parentId;
         updateAllArr(parentRowIdHereUsedIsOnlyForUpdateArrAll,1)

        }

    }

    /*********************************************/



    var idAddedUsedEverywhereInThisFunction = ultimateEndId + '_rowid_' + individualId;
    treeStructure[individualId].push(ultimateEndId);
    treeStructure.push([]);
    ultimateEndId++;
     initializeJquery();
    var numValuePair = updateNumberSequenceInFirstColumn();
<<<<<<< HEAD
    // debugger;
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
     var globalvarForGlyphcomment = '#'+ ultimateEndId + '_rowid_' + individualId + ' td  .glyphicon-comment';
    setTimeout(function(){changeDdOnAdd(newcurrentId, idAddedUsedEverywhereInThisFunction, numValuePair)},2000);
     setTimeout(function(){focusOnNewCreate(idAddedUsedEverywhereInThisFunction)
                          //$('.glyphicon-comment').unbind('click',commentIconClickFunction);
                        //$(globalvarForGlyphcomment).click(commentIconClickFunction);

     },200);

}



function focusOnNewCreate(idAddedUsedEverywhereInThisFunction){

var currentId = '#' + idAddedUsedEverywhereInThisFunction;
  currentId    = currentId + ' td input';

  var currentElement  =$(currentId)[0];
    $(currentElement).focus();

}














function test() {
    $('.minus').attr('src', '../img/project/plus.png');
    $('.plus').attr('src', '../img/project/minus.png');
    $('.minus').addClass('minus1');
    $('.plus').addClass('plus1');
    $('.minus').addClass('plus');
    $('.plus1').addClass('minus');
    $('.minus1').removeClass('minus');
    $('.plus1').removeClass('plus');
    $('.plus').removeClass('minus1');
    $('.minus').removeClass('plus1');



}



function makeEmptyAjaxCall() {

    counterForAjax++;
$('.se-pre-con').fadeIn();
    $.ajax({
        url: '/emptyProj',
        type: 'post',
        data: {
            'projectid': projectId,
            'version': version
        },
        success: function(data) {
            $('.se-pre-con').fadeOut();
            console.log('sucess');

            counterForAjax--; /*    Important code to be inserted here Mayur */
        },

        error: function() {
            alert('Server Failure:Reloading Page for Refreshing info')
                // window.location.href = '/task';
            counterForAjax--;
            ajaxFailureFlag = false;


        }
    });



}




function nextClass(depth, rowId) {
    var count = 0;
    nextId = $('#' + rowId).next().attr('id');
    if (depth == 2) {
        while (nextId != undefined && ($('#' + nextId).hasClass('subtask') || $('#' + nextId).hasClass('subtaskTemp'))) {

            if ($('#' + nextId).hasClass('subtask')) {
                count++;
            }
            nextId = $('#' + nextId).next().attr('id');

        }

    }

    if (depth == 1) {
        while (nextId != undefined && (!$('#' + nextId).hasClass('phase'))) {

            if ($('#' + nextId).hasClass('task')) {
                count++;
            }
            nextId = $('#' + nextId).next().attr('id');
        }

    }

    if (depth == 0) {
        while (nextId != undefined) {

            if (nextId != undefined) {
                count++;
            }
            nextId = $('#' + nextId).next().attr('id');
        }

    }

    return count;

}




function createNewVersion(submitFlag) {

   updateArr = [];
    var trArr = $('#tbody123 tr');
    for (var i = 0; i < trArr.length; i++) {
   if(!$(trArr[i]).hasClass('deleteCss')){
        var tdEleNew = $(trArr[i]).children('td')[1];
 //console.log('trArr is', trArr[i], 'tdEleNew is', tdEleNew);
     
        var tdEle = $(tdEleNew).children('input')[0];

        $(tdEle).focusout();
        }
    }


    version = version + 1;
    for (var i = 0; i < updateArr.length; i++) {
        updateArr[i] = updateArr[i].join('$@$');
    }
    updateArr = updateArr.join('||');
 // console.log('updateArr is',updateArr);
<<<<<<< HEAD
  // debugger;
var changedEle = changedEleArr.join();

    $('.se-pre-con').fadeIn('slow');
//debugger
=======
var changedEle = changedEleArr.join();

    $('.se-pre-con').fadeIn('slow');
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    $.ajax({
        url: '/insNewVer',
        type: 'post',
        data: {
            'updateQ': updateArr,
            'submitFlag': submitFlag,
            'projectId': projectId,
            'version': newVersionToBeCreated,
            'remarks': remarks,
            'changedEle':changedEle
        },
        success: function(data) {
            someThingUpdated = 0;
            //console.log('sucess');
            $('.se-pre-con').fadeOut('slow');
            alert('New version created');
            updateArr = [];

            $('#verSel select').each(function() {
                $(this).removeAttr('selected');
            });
            var newStrToAppend = '<option value = "' + newVersionToBeCreated + '">' + newVersionToBeCreated + '</option>';
            $('#verSel').append(newStrToAppend);
            var verLen = $('#verSel option').length;
            var verSelEle = $('#verSel option')[verLen - 1];
            //console.log('verSelEle is',verSelEle);
            $(verSelEle).attr('selected', 'selected');
            window.location.href = '/task?flag=' + projectId + '&&versionFlag=' + newVersionToBeCreated;

        },
        error: function(data) {
            $('.se-pre-con').fadeOut('slow');
            updateArr = [];
        }
    });

}




function approvethis(approveFlag, modalBoxAcceptFlag) {


    var submitFlagnew;




    if (approveFlag == 0) {

        submitFlagnew = 3;
        $('#rejectModal').modal('show');
        if (!modalBoxAcceptFlag) {
            return;
        }


    }

    if (approveFlag == 1) {

        if (!confirm('Are you sure,you want to confirm this project')) {
            return;
        }

        submitFlagnew = 2;
    }


    updateArr = '';

    $('.se-pre-con').fadeIn('slow');

createCommentString();
var collaborate = '';
if($('#collaborateId').val()!=null){
 collaborate  = $('#collaborateId').val().join();
}
<<<<<<< HEAD
//debugger;
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd

    $.ajax({
        url: '/saveTask',
        type: 'post',
        data: {
            'updateQ': updateArr,
            'submitFlag': submitFlagnew,
            'projectId': projectId,
            'version': version,
            'remarks': $('#remarksId').val(),
            'commentString':commentString,
             'userId':realUserId,
             'collaborateId' :collaborate
        },
        success: function(data) {

            if (approveFlag) {
                someThingUpdated = 0;
                alert('Project approved successfully');
                $('#statusSub').html('Approved');

                submitted = 2;
                hideAllOnSubmit();
            } else {
                alert('Project has been rejected');
                submitted = 3;
                $('#statusSub').html('Rejected');
                hideAllOnSubmit();
            }

            $('.se-pre-con').fadeOut('slow');
            //window.location.reload();

        },
        error: function(data) {
            alert('db error');
            $('.se-pre-con').fadeOut('slow');
            updateArr = [];
        }
    });




}




function savethis(submitFlag, joinFlag) {
  $('.se-pre-con').fadeIn('slow');

    if(!collaborateSaveFlag){
    $('#tbody123 tr').removeClass('bgYellow');
     $('#tbody123 tr .open').click();
sleepFunctionForStoppingTime(100);
var somethingMinusOneFlag = false;
var  somethingZeroFlag     = false;
if(someThingUpdated==-1){   somethingMinusOneFlag = true; }
if(someThingUpdated==0){   somethingZeroFlag = true;  }                          
 
 /*   var trArr = $('#tbody123 tr');
    for (var i = 0; i < trArr.length; i++) {
   if(!$(trArr[i]).hasClass('deleteCss')){
      var trId = $(trArr[i]).attr('id');
         updateAllArr(trId,1);
        }
    }*/


sleepFunctionForStoppingTime(500);
var somethingMinusOneFlag = false;
var  somethingZeroFlag     = false;
if(someThingUpdated==-1){   somethingMinusOneFlag = true; }
if(someThingUpdated==0){   somethingZeroFlag = true;  }      
/*updateArr = [];
    var trArr = $('#tbody123 tr');
    for (var i = 0; i < trArr.length; i++) {
   if(!$(trArr[i]).hasClass('deleteCss')){
        var tdEleNew = $(trArr[i]).children('td')[1];
      console.log('trArr is', trArr[i], 'tdEleNew is', tdEleNew);
      var tdEle = $(tdEleNew).children('input')[0];
        $(tdEle).focusout();
        }
    }*/
//alert('sahi');
if(somethingMinusOneFlag)  { someThingUpdated = -1; }
if(somethingZeroFlag)      { somethingUpdated = 0;}

    var returnFlag = (submitted == 1);

    if (returnFlag) {
        return;
    }

    if (submitFlag == 1) {

        if (validationForSubmit() == false) {
            return;
        }


    }

    if ((submitted == 2)) { //If something updated is -1 it will go through it without any check points
             
        if (someThingUpdated==1) {
            var englishString = ''
            if (submitFlag) englishString = 'submit';
            else englishString = 'create';

            if (!confirm('You are about to ' + englishString + ' new version ' + newVersionToBeCreated + '.Are you sure?')) {
                return;
            }

            createNewVersion(submitFlag);
            return;
        } else if(someThingUpdated==0) {
            alert('This version has already been submitted');
            return;
          }
        else if(submitFlag==1){
        alert('This version has already been submitted');
            return;
        }
        else if(somethingUpdated==-1){
            submitFlag = -1;
        }


    } else if (submitFlag == 1 && joinFlag) {
        if (!confirm('Once saved,Changes cannot be done.Are you sure?')) {
            return;
        }

    }



<<<<<<< HEAD
debugger;
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    if (joinFlag) {
        for (var i = 0; i < updateArr.length; i++) {
            updateArr[i] = updateArr[i].join('$@$');
        }
        updateArr = updateArr.join('||');

        $('.se-pre-con').fadeIn('slow');
    }

    counterForRecursionAjax++;
    if (counterForRecursionAjax == 20) {
        alert('Server error,Reloading page');
        return;
    }

    if (counterForAjax != 0) {
        setTimeout(function() {
            savethis(submitFlag, 0);
            return;
        }, 3000);
        return;
    }


    if(submitted==2){
     submitFlag = 2;//Code Added later 24 Jun requires more reasoning.
             }
createCommentString();

}
else{
updateArr = ''
submitFlag = -1
commentString = '';
    }
    var collaborate = '';
if($('#collaborateId').val()!=null){
 collaborate  = $('#collaborateId').val().join();
}
<<<<<<< HEAD
//debugger;
 debugger;
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    $.ajax({
        url: '/saveTask',
        type: 'post',
        data: {
            'updateQ': updateArr,
            'submitFlag': submitFlag,
            'projectId': projectId,
            'version': version,
            'remarks': $('#remarksId').val(),
             'userId':userId,
           'commentString':commentString,
           "collaborateId":collaborate 

        },
        success: function(data) {
         //   console.log('sucess');
            $('.se-pre-con').fadeOut('slow');
            counterForRecursionAjax = 0;
            updateArr = [];
            if (submitFlag==1) {
                alert('form has been submitted');
                submitted=1;
                hideAllOnSubmit();
            }
            if (submitFlag == 0&&submitted!=2){
                $('#statusSub').html('Draft');
                submitted = 0;
            }


        },
        error: function(data) {
            $('.se-pre-con').fadeOut('slow');
            updateArr = [];
        }
    });




}

function validationForSubmit() {
    var returnFalseFlag = false;

    var trArr = $('#tbody123 tr');


    //console.log('trArr is',trArr);
    for (var i = 0; i < trArr.length; i++) {

        if(!$(trArr[i]).hasClass('deleteCss')){

      
        var currTr = trArr[i];
        var tdArr = $(currTr).children('td');
        // console.log('tdArr is',tdArr,tdArr[3]);
        for (var k = 0; k < tdArr.length; k++) {
            if (k == 1 || k >3&&k<6||k==9) {
                var inpChild = $(tdArr[k]).children('input')[0];
                if ($(inpChild).val().trim() == '') {
                    returnFalseFlag = true;
                    $(inpChild).addClass('isEmptyTextBoxValidation');

                }
            }


            if (k == 12||k==9) {
                var selChild = $(tdArr[k]).children('select')[0];
                if ($(selChild).val() == '0') {
                    returnFalseFlag = true;
                    $(selChild).addClass('isEmptyTextBoxValidation');
                }


            }

        }

    }



    }

    if (returnFalseFlag) {
        alert('Please fill all fields');
        return false;
    } else {
        return true;
    }




}



function editRow(rowId, AddFlag) {
    //  return;
    /********editRRow*******/
  
    var value = rowId.split('_');
    var individualId = value[0];
    var parentId = value[2];
    rowId = individualId + '_rowid_' + parentId;
    var depth;
    var stringForId = '#' + rowId;
    var serNumber = $(stringForId).children('td')[0].innerHTML;
    var tempStrForNodeName = $(stringForId).children('td')[1].innerHTML;
    var nodeName = tempStrForNodeName.slice(tempStrForNodeName.indexOf('>') + 1);
    var sDateName = $(stringForId).children('td')[4].innerHTML; //Start
    var eDateName = $(stringForId).children('td')[5].innerHTML; //End
    var actPlStartDate = $(stringForId).children('td')[6].innerHTML;
    var actPlEndDate = $(stringForId).children('td')[7].innerHTML;
    var actEndDate = $(stringForId).children('td')[8].innerHTML;
    var effortQuant = $(stringForId).children('td')[9].innerHTML.match(/\d{1,9}/i)
       if(effortQuant){
        effortQuant = effortQuant[0];
       }
       else{
        effortQuant = 0;
       }
    var strForpercComplete = $(stringForId).children('td')[10].innerHTML;
    //console.log('strForpercComplete',strForpercComplete);
    if (strForpercComplete != '') {
        var percCompleted = strForpercComplete.slice(0, strForpercComplete.length - 2);
    } else {
        var percCompleted = '';
    }
    var effortArrStr = $(stringForId).children('td')[9].innerHTML;
    var effortType = 0
    var impResource = $(stringForId).children('td')[12].innerHTML
    for (var i = 1; i < effortArr.length; i++) {
        if (effortArrStr.indexOf(effortArr[i]) != -1) {
            effortType = i;
            break;
        }

    }



    var objForSecondTd = $('#' + rowId + ' td')[1];


    if (parentId == '0') {
        depth = 0;
    } else if ($(objForSecondTd).hasClass('task')) {
        depth = 1;
    } else depth = 2;

    var hideAddButtonClass = '';
    if (impResource != '') {
        var posForResource = optionStr.indexOf(impResource);
        //console.log('Yo123',posForResource,impResource);
        posForResource = posForResource - 4;
        var selectedString = ' selected = "true" ';
        var optionStr2 = [optionStr.slice(0, posForResource), selectedString, optionStr.slice(posForResource)].join('');
    } else {
        var optionStr2 = optionStr;
    }



    var buttonStr = '';
    var butClass = '';

    if (!treeStructure[individualId].length) {
      //  console.log('in  depth 0 if', treeStructure[individualId].length);
        //hideAddButtonClass = ' deleteCSS ';
        buttonStr = '../img/project/grey_button1.jpg';
        butClass = 'minus';
    } else {
       // console.log('in  depth 0 else', treeStructure[individualId].length);
        hideAddButtonClass = '';
        buttonStr = '../img/project/minus.png';
        butClass = 'plus';
    }

    if (depth == 0) {
        var strForHtml = '<td></td><td class="phase paddingtd"><img src="' + buttonStr + '" id = "' + individualId + '_sign_' + parentId + '" onclick = "collapseExpand(this.id,1)" class="minus" height="18px" title="" width="18px" style="margin-right:5px;"><span class = "namefieldClassSpan"></span><input type = "text" class = "nameFieldClass hide" style = "width: 90%;"></td><td class="images1  paddingtd "><img src="../img/bug/addbug.png" id = "' + individualId + '_add_' + parentId + '"  class="shadow " onclick = "addRow(this.id)" height="18px" title="Add Child" width="18px"></td><td class="images1 paddingtd "><span class="glyphicon glyphicon-comment" ></span><img src="../img/project/blackdustbin.jpg"  style = "margin-bottom:10px;"   id = "' + individualId + '_del_' + parentId + '" onclick = "deleteRow(this.id,1)"     height="15px" class="shadow" title="Delete" width="15px"></td><td class="dateCSS  paddingtd dateTempCss bold1"><input type = "text"  id = "' + individualId + '_sDate_' + parentId + '" class = "datePicker textBoxesCss"></td><td class="dateCSS  dateTempCss bold1"><input type = "text"  class = "datePicker textBoxesCss"  id = "' + individualId + '_eDate_' + parentId + '" ></td><td class  = "dateTempCss bold1"><input type = "text" class = "datePicker textBoxesCss" id = "' + individualId + '_pActStartDate_' + parentId + '"></input></td><td class = "dateTempCss bold1 "><input type = "text" class = "datePicker textBoxesCss" id = "' + individualId + '_pActEndDate_' + parentId + '"></input></td><td class = "dateTempCss bold1 "><input type = "text" style = " width: 77%;" class = "datePicker textBoxesCss" id = "' + individualId + '_actEndDate_' + parentId + '"></input></td><td class="effCSS bold1 "><input type = "number" class = " textboxEffEditAdd textboxEffEditAddJq "><select class = "selectEffEditAdd" id = ' + individualId + '_effType_' + parentId + '><option value = "1">Hrs</option><option value = "2">Days</option><option value = "3">Weeks</option><option value = "4">Months</option></select></td><td><input type = "number" class = "textBoxesCss percCompletedClass"></td><td><select class = "ddDepClass" id = "' + individualId + '_ddDep_' + parentId + '" >' + optStringDep + '></select></td><td id = "' + individualId + '_selectRS_' + parentId + '" class = "selectRS"></td>';

    } else if (depth == 1) {

        var buttonStr = '';

        if (!treeStructure[individualId].length) {
           // console.log('in  depth 1 if', treeStructure[individualId].length);
            // hideAddButtonClass = ' deleteCSS ';
            buttonStr = '../img/project/grey_button1.jpg';

        } else {

            hideAddButtonClass = '';
            buttonStr = '../img/project/plus.png';

        }


        var strForHtml = '<td></td><td class="task paddingtd"><img src="' + buttonStr + '" id = "' + individualId + '_sign_' + parentId + '" onclick = "collapseExpand(this.id,1)" class="' + butClass + '" height="18px" title="" width="18px" style="margin-right:5px;"><span class = "namefieldClassSpan"></span><input type = "text" class = "nameFieldClass hide" style = "width: 90%;"></td><td class="images1  paddingtd "><img src="../img/bug/addbug.png" id = "' + individualId + '_add_' + parentId + '"  class="shadow " onclick = "addRow(this.id)" height="18px" title="Add Child" width="18px"></td><td class="images1 paddingtd "><span class="glyphicon glyphicon-comment" ></span><img src="../img/project/blackdustbin.jpg"  style = "margin-bottom:10px;"  id = "' + individualId + '_del_' + parentId + '" onclick = "deleteRow(this.id,1)"     height="15px" class="shadow" title="Delete" width="15px"></td><td class="dateCSS  paddingtd dateTempCss"><input type = "text" class = "datePicker textBoxesCss" id = "' + individualId + '_sDate_' + parentId + '" ></td><td class="dateCSS  dateTempCss"><input type = "text" id = "' + individualId + '_eDate_' + parentId + '" class = "datePicker textBoxesCss"></td><td class  = "dateTempCss "><input type = "text" class = "datePicker textBoxesCss" id = "' + individualId + '_pActStartDate_' + parentId + '"></input></td><td class = "dateTempCss "><input type = "text" class = "datePicker textBoxesCss" id = "' + individualId + '_pActEndDate_' + parentId + '"></input></td><td class = "dateTempCss "><input type = "text" style = " width: 77%;" class = "datePicker textBoxesCss" id = "' + individualId + '_actEndDate_' + parentId + '"></input></td><td class="effCSS "><input type = "number" class = " textboxEffEditAdd textboxEffEditAddJq "><select class = "selectEffEditAdd" id = ' + individualId + '_effType_' + parentId + '><option value = "1">Hrs</option><option value = "2">Days</option><option value = "3">Weeks</option><option value = "4">Months</option></select></td><td><input type = "number" class = "textBoxesCss percCompletedClass"></td><td><select class = "ddDepClass" id = "' + individualId + '_ddDep_' + parentId + '" >' + optStringDep + '></select></td><td id = "' + individualId + '_selectRS_' + parentId + '" class = "selectRS"></td>';


    } else if (depth == 2) {


        var strForHtml = '<td></td><td class="subtask "><img src="../img/project/button.png" id = "' + individualId + '_sign_' + parentId + '" onclick = "collapseExpand(this.id,1)" class="shadow donthide" height="18px" title="" width="18px" style="margin-right:5px;"><span class = "namefieldClassSpan"></span><input type = "text" class = "nameFieldClass hide" style = "width: 90%;"></td><td class="images1 "></td><td class="images1 "><span class="glyphicon glyphicon-comment" ></span><img src="../img/project/blackdustbin.jpg"   style = "margin-bottom:10px;"  id = ' + individualId + '_del_' + parentId + ' onclick = "deleteRow(this.id,1)"  height="15px" class="shadow" title="Delete" width="15px"></td><td class="dateCSS  paddingtd dateTempCss"><input type = "text" id = "' + individualId + '_sDate_' + parentId + '" class = "datePicker textBoxesCss"></td><td class="dateCSS dateTempCss "><input type = "text" id = "' + individualId + '_eDate_' + parentId + '" class = "datePicker textBoxesCss"></td><td class  = "dateTempCss "><input type = "text" class = "datePicker textBoxesCss" id = "' + individualId + '_pActStartDate_' + parentId + '"></input></td><td class = "dateTempCss "><input type = "text" class = "datePicker textBoxesCss" id = "' + individualId + '_pActEndDate_' + parentId + '"></input></td><td class = "dateTempCss "><input type = "text" style = " width: 77%;" class = "datePicker textBoxesCss" id = "' + individualId + '_actEndDate_' + parentId + '"></input></td><td class="effCSS "><input type = "number" class = "textboxEffEditAdd textboxEffEditAddJq"><select id = ' + individualId + '_effType_' + parentId + ' class = " selectEffEditAdd"><option value = "1">Hrs</option><option value = "2">Days</option><option value = "3">Weeks</option><option value = "4">Months</option></select></td><td><input type = "number" class = "textBoxesCss percCompletedClass"></td><td><select class = "ddDepClass" id = "' + individualId + '_ddDep_' + parentId + '" >' + optStringDep + '></select></td><td class = "selectRS" id = "' + individualId + '_selectRS_' + parentId + '"></td>';

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




    $('#' + rowId).html(strForHtml);
    var tdIdForSelect = '#' + individualId + '_selectRS_' + parentId;
    var decode = $(tdIdForSelect).html(optionStr2).text();
    decode = decode.replace(/"/g, '').replace(/'/g, '');
    $(tdIdForSelect).html(decode);

    //    console.log(optionStr2);


    if (actPlStartDate == '0' || actPlStartDate == 'null') {

        actPlStartDate = ''; //solving null and zero bug,running out of time!!!
    }
    if (actPlEndDate == '0' || actPlEndDate == 'null') {

        actPlEndDate = ''; //solving null and zero bug,running out of time!!!
    }
    if (actEndDate == '0' || actEndDate == 'null') {
        actEndDate = '';
    }


    rowId = individualId + '_rowid_' + parentId;
    $('#' + rowId + ' td')[0].innerHTML = serNumber;
    $('#' + rowId + ' td input')[0].value = nodeName;
    $('#' + rowId + ' td .namefieldClassSpan').text(nodeName);
    $('#' + rowId + ' td input')[1].value = sDateName;
    $('#' + rowId + ' td input')[2].value = eDateName;

    $('#' + rowId + ' td input')[3].value = actPlStartDate;
    $('#' + rowId + ' td input')[4].value = actPlEndDate;
    $('#' + rowId + ' td input')[5].value = actEndDate;
    $('#' + rowId + ' td input')[6].value = effortQuant;
    var selectObjForJq = $('#' + rowId + '   td select option')[effortType - 1];

    /*    console.log(selectObjForJq,'hiiiii','#'+rowId+' td select option');
     */
    $(selectObjForJq).attr('selected', true);

    $('#' + rowId + ' td input')[7].value = percCompleted;



    datePickerFunction();



    if (treeStructure[individualId].length) {
        var tdchild = $('#' + individualId + '_rowid_' + parentId + ' td')[9];
        tdchild = $(tdchild).children('input')[0];
        //$(tdchild).val(0);
        // console.log('here is ',tdchild);
        $(tdchild).attr('disabled', true);
        $(tdchild).addClass('disablePointer');

        tdchild = $(tdchild).parent('td');
        tdchild = $(tdchild).next();
        tdchild = $(tdchild).children('input')[0];

        //console.log('here is 2 ',tdchild);

        //$(tdchild).val(0);
        $(tdchild).attr('disabled', true);
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





 var newRowidusedHere = individualId +'_rowid_' +parentId
  if(userFlag){
 $('#tbody123 tr').hide();
  }
 setTimeout(function(){
    if(userFlag){
userFlagFunction();
}
functionForStrikeOff100Percent();
if(submitted==2){
deleteThisRowHereAndNow(newRowidusedHere)
}
//$('.glyphicon-comment').remove();
},100);




if(nodeName.trim()==""){
$('#' + rowId + ' td .namefieldClassSpan').css("padding-left","70px");

}


}


function deleteThisRowHereAndNow(rowId){
 var endDateEle = $('#'+rowId+' input')[2];
 var endDate     = $(endDateEle).val();
 var x = endDate.indexOf('$$Kaspar0v')
<<<<<<< HEAD
 //debugger;
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
 if(x!=-1){
    setTimeout(function(){
    $('#' + rowId).addClass('deleteCss');
    $('#' + rowId).addClass('strikeout');
setTimeout(function(){  disableEverything(rowId);},1000);
     endDate = endDate.slice(0,x);
     $(endDateEle).val(endDate);
<<<<<<< HEAD
     //debugger;
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    },500);
    }
    



}


function checkNature(inputTextBoxId) {


    // 8_pActEndDate_0 
    var startFlag;
    var value = inputTextBoxId.split('_');
    var middleElement = value[1];
    if (middleElement == 'sDate' || middleElement == 'pActStartDate') {
        startFlag = true;
    }
    if (middleElement == 'eDate' || middleElement == 'pActEndDate') {
        startFlag = false;
    }
    inputTextBoxId = '#' + inputTextBoxId;

    var tdVar = $(inputTextBoxId).parent('td');

    // var endDateFlag =  
    if (startFlag) {
        startDateInDatePicker = $(inputTextBoxId).val();
        endDateInDatePicker = $(tdVar).next().children('input').val();
        getStartDateEndDateTime(startDateInDatePicker, endDateInDatePicker, false);
      
    } else {
        startDateInDatePicker = $(tdVar).prev().children('input').val();
        endDateInDatePicker = $(inputTextBoxId).val();
        getStartDateEndDateTime(startDateInDatePicker, endDateInDatePicker, false);
 

    }
}


function startDateEndDateValidation(datepickerthis) {

 
        if (sdateTime != '') {
            var diff = (((((edateTime - sdateTime) / 3600000) / 24) + 1) * 9);
            if (diff <= 0 && diff > -100000) {
                alert('Error:Start Date cannot be greater than End Date');
                $(datepickerthis).val('');
                return true
       }
    } 
     return false;
}




function getStartDateEndDateTime(sDateInDatePicker, eDateInDatePicker, flagForMonthCalculation) {
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


    if (!flagForMonthCalculation) {
        edateTime = endDateTime
        sdateTime = startDateTime
    } else {
        return (endDateTime - startDateTime)

    }
    // console.log(endDateTime);
}



function findParentDate(inputTextBox, par2) {

    var inputId = $(inputTextBox).attr('id');
    currDatePickerId = inputId;

    var rowId = $(inputTextBox).parent('td').parent('tr').attr('id');
    thisDateBeforeSelect = $(inputTextBox).val();
    var actualFlag = false;
    // console.log('rowId is', rowId);
    var value = rowId.split('_');
    var individualId = parseeIntForNan(value[0]);
    var value123 = inputId.split('_');
    var middleElement = value123[1];
    var parentId = parseeIntForNan(value[2]);
    var rowParentId;
    var depth = -1
    var objForSecondTd = $('#' + rowId + ' td')[1];
    if (middleElement == 'actEndDate' || middleElement == 'pActStartDate' || middleElement == 'pActEndDate') {
        actualFlag = true;
    }
    /*    alert(actualFlag);
        debugger;*/
    if (parentId == '0') {
        depth = 0
    } else if ($(objForSecondTd).hasClass('task')) {
        depth = 1;
    } else depth = 2;

    /*    console.log('depth is ', depth);
     */
    if (depth == 0 || actualFlag) {
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
         openDatePickerFrmDesiredLocation();

    //console.log('startDateInDatePicker is ', startDateInDatePicker, 'endDateInDatePicker is ', endDateInDatePicker);
}

 function hideAllOnSubmit()
{
    if (isManagerFlag)
    {
        if (submitted != 0)
        {
            $('#saveId').html('Approve');
            $('#submitId').html('Reject');
            $('#saveId').attr('onclick', 'approvethis(1,0)');
            $('#submitId').attr('onclick', 'approvethis(0,0)');
        }
        if (submitted == 1)
        {
            $('#statusSub').html('Submitted');
            $('.allTextAndNumberBoxes,.selectClassForJq,.ddResourcesForJq,.ddDepClass').attr('disabled', 'disabled');
            $('.allTextAndNumberBoxes,.selectClassForJq,.ddResourcesForJq,.ddDepClass').addClass('disablePointer');
            $('th').css('padding-top', '7px');
            $('th').css('padding-bottom', '7px');
            $('th div').css('font-size', '12px');
            $('.shadow').each(function()
            {
                if (!$(this).hasClass('donthide'))
                {
                    $(this).hide();
                }
            });
        }
        if (submitted == 2)
        {
            $('#statusSub').html('Accepted');
            $('#saveId').hide();
            $('#submitId').hide();
            $('#saveId').attr('onclick', 'savethis(0,1)').html('Save');
            $('#submitId').attr('onclick', 'savethis(1,1)').html('Submit');
            $('.allTextAndNumberBoxes,.selectClassForJq,.ddResourcesForJq,.ddDepClass').removeAttr('disabled');
            $('.allTextAndNumberBoxes,.selectClassForJq,.ddResourcesForJq,.ddDepClass').removeClass('disablePointer');
            $('.shadow').each(function()
            {
                $(this).removeClass('donthide');
                $(this).show();
            });
        }
        if (submitted == 3)
        {
            $('#statusSub').html('Rejected');
            $('#saveId').html('Save');
            $('#submitId').html('Submit');
            $('#saveId').attr('onclick', 'savethis(0,1)');
            $('#submitId').attr('onclick', 'savethis(1,1)');
            $('.allTextAndNumberBoxes,.selectClassForJq,.ddResourcesForJq,.ddDepClass').removeAttr('disabled');
            $('.allTextAndNumberBoxes,.selectClassForJq,.ddResourcesForJq,.ddDepClass').removeClass('disablePointer');
            $('.shadow').each(function()
            {
                $(this).removeClass('donthide');
                $(this).show();
            });
        }
    }

    
    else if (isCreaterFlag)
    { // In creator
        if (submitted == 1)
        {
            $('#statusSub').html('Submitted');
            $('.allTextAndNumberBoxes,.selectClassForJq,.ddResourcesForJq,.ddDepClass').attr('disabled', 'disabled');
            $('.allTextAndNumberBoxes,.selectClassForJq,.ddResourcesForJq,.ddDepClass').addClass('disablePointer');
            $('th').css('padding-top', '7px');
            $('th').css('padding-bottom', '7px');
            $('th div').css('font-size', '12px');
            $('.shadow').each(function()
            {
                if (!$(this).hasClass('donthide'))
                {
                    $(this).hide();
                }
            });
            $('#submitId').attr('disabled', 'disabled');
            $('#saveId').attr('disabled', 'disabled');
        }
        //alert(isManagerFlag+'   '+submitted);
        else if (submitted == 2)
        {
            $('#statusSub').html('Accepted');
            $('.allTextAndNumberBoxes,.selectClassForJq,.ddResourcesForJq,.ddDepClass').removeAttr('disabled');
            $('.allTextAndNumberBoxes,.selectClassForJq,.ddResourcesForJq,.ddDepClass').removeClass('disablePointer');
            $('.shadow').each(function()
            {
                $(this).removeClass('donthide');
                $(this).show();
            });
        }
        else if (submitted == 3)
        {
            $('#statusSub').html('Rejected');
            $('.allTextAndNumberBoxes,.selectClassForJq,.ddResourcesForJq,.ddDepClass').removeAttr('disabled');
            $('.allTextAndNumberBoxes,.selectClassForJq,.ddResourcesForJq,.ddDepClass').removeClass('disablePointer');
            $('.shadow').each(function()
            {
                $(this).removeClass('donthide');
                $(this).show();
            });
        }
    }
    else if(userFlag)
    {
        if (submitted != 2) $('#statusSub').html('Draft');
        else $('#statusSub').html('Accepted');
        $('#submitId').remove();
        $(' .allTextAndNumberBoxes, .selectClassForJq, .ddResourcesForJq, .ddDepClass').attr('disabled', 'disabled');
        $('.allTextAndNumberBoxes, .selectClassForJq, .ddResourcesForJq, .ddDepClass').addClass('disablePointer');
        $('.percCompletedClass').removeAttr('disabled');
        $('.percCompletedClass').removeClass('disablePointer');
        $('#saveId').css('margin-top', '3%');
        $('.shadow').each(function()
        {
            if (!$(this).hasClass('donthide'))
            {
                $(this).remove();
            }
        });
    }
    else if(collFlag)
    {
    
        $('#submitId').remove();
        $(' .allTextAndNumberBoxes, .selectClassForJq, .ddResourcesForJq, .ddDepClass').attr('disabled', 'disabled');
        $('.allTextAndNumberBoxes, .selectClassForJq, .ddResourcesForJq, .ddDepClass').addClass('disablePointer');
        //$('#saveId').css('margin-top', '3%');
        $('.shadow').each(function()
        {
            if (!$(this).hasClass('donthide'))
            {
                $(this).remove();
            }
        });
    }
    else
    {
        $('.shadow').remove();
    }
}

function deleteRow(rowId, editFlag) {
    /*deleteRRow*/
  $('#tbody123 tr .open').click();
if(someThingUpdated!=1) someThingUpdated = -1;

showSaveSubmit();
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
return;}



    if (editFlag) {
        if (!confirm('Are you sure you want to delete this row?')) {
            return;
        }

    }


       if(submitted==2){
   $('#' + rowId).addClass('deleteCss');
    $('#' + rowId).addClass('strikeout');
    disableEverything(rowId);
    updateAllArr(rowId, -1);
      return;
    }
    else{
    $('#' + rowId).remove();
       updateAllArr(rowId, 0);
       }

    individualId = parseeIntForNan(individualId);
    var arrForTreeStr = treeStructure[parentId]
        //console.log('before',arrForTreeStr);
    arrForTreeStr.splice(arrForTreeStr.indexOf(individualId), 1);
    treeStructure[parentId] = arrForTreeStr;
    // console.log('after',arrForTreeStr);



    // convertTonormalTr(-1, rowId, depth);
    //  console.log('rowid ', rowId);
 
    setTimeout(function() {
        var numValuePair = updateNumberSequenceInFirstColumn();

        changeDdOnDelete(rowId, numValuePair)

    }, 400);
    if (!treeStructure[parentId].length) {

        var parentRowId = -1;
        var grandParentId = -1;

        for (var i = 0; i <= ultimateEndId; i++) {
           // console.log('#' + parentId + '_rowid_' + i);
            if ($('#' + parentId + '_rowid_' + i).length) {
                //  console.log('sassddassdasdasd','#'+parentId + '_rowid_'+i);
                parentRowId = '#' + parentId + '_rowid_' + i;
                grandParentId = i;
                break;
            }
        }

        var newRowId = $(parentRowId + ' td')[7];
        var inputChild = $(newRowId).children('input');
        inputChild = inputChild[0];
        // console.log('% Complete is ',inputChild);
        $(inputChild).removeClass('disablePointer');
        $(inputChild).removeAttr('disabled');

        newRowId = '#' + parentId + '_effType_' + grandParentId;
        newRowId = $(newRowId).prev();
        $(newRowId).removeClass('disablePointer');
        $(newRowId).removeAttr('disabled');
        // console.log('Effort is ',newRowId);

        $('#' + parentId + '_sign_' + grandParentId).attr('src', '../img/project/grey_button1.jpg');
        // alert(parentRowId);

    }


}




function DisableSpecificDates(date) {
    if (endDate == null || startDate == null || endDate == '' || startDate == '') {
        return [true];
    }

    //console.log(date);
    var m = date.getMonth();
    var d = date.getDate();
    var y = date.getFullYear();
    var day = date.getDay();
    if (saturdayOffFlag == 1) {
        var weekEnds = [0, 6]

    } else if (saturdayOffFlag == 0) {
        var weekEnds = [0];
    } else {
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

    } else if (holidayArrGetTime.indexOf(currentDateTime) != -1) {

        return [false];
    } else if (weekEnds.indexOf(day) != -1) {
        return [false];
    } else {
     /*   console.log('minDateGlobalFlag is',minDateGlobalFlag); 
        if(minDateGlobalFlag){
            console.log('minDate Global is',date);
        minDateGlobal = date;
        minDateGlobalFlag = false;
    }*/
        return [true];
    }


}



var tempChildrenRowId2 = '',
    changeTimeFormatFlag = true;;

function initializeJquery(){
   $('.editRowClass').click();
   datePickerFunction();

    /*inittialize*/
  
setTimeout(function() {
   // console.log('In here we are');

  //  console.log('Out here we are');
       
    setTimeout(function(){
        if(true){
  for(var i=0;i<bigAarrBigArrBecauseNormalMethodWasNotWorking.length;i++){
      var nameId = bigAarrBigArrBecauseNormalMethodWasNotWorking[i][0];
       var name = bigAarrBigArrBecauseNormalMethodWasNotWorking[i][1];
      $(nameId).val(name);

  }

}
changeCommentDisplayColor();
$('.glyphicon-comment').unbind('click',commentIconClickFunction);
$('.glyphicon-comment').click(commentIconClickFunction);

addMailClassToTagger();
addcollaborateClassToTagger();
addcolHideClassOnTagger();
},500)
       





        $('input[type="text"]').css('border', 0);
        $('input[type="text"],.textBoxesCss,input[type="number"]').addClass('allTextAndNumberBoxes');
        $('.datepicker').addClass('allTextAndNumberBoxes');
        $('.selectEffEditAdd').addClass('selectClassForJq');
        $('.ddResources').addClass('ddResourcesForJq');

        $('.textboxEffEditAddJq, .percCompletedClass').focusout(function() {
              


              if($(this).hasClass('percCompletedClass')){
                percEle = $(this);
                percValue = $(this).val();
                var trEle = $(percEle).parent('td').parent('tr');
                strikeOff100Percent(percValue,trEle,1);

                    setTimeout(function(){
                        someThingUpdated = -1;
                       showSaveSubmit();
                      
                    },50);
  }
          else{
            var nextEle = $(this).next()[0];
            var newId   = $(nextEle).attr("id");
              someThingUpdated = 1;
<<<<<<< HEAD
              debugger;
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
         changedEleFunc(newId,9);

              showSaveSubmit();
                 if($(this).val()<0){
                 $(this).val('0');
                                     }
         }
            
            if ($(this).val() != '') {
                $(this).removeClass('isEmptyTextBoxValidation');

            }

            var conditionFlag = ($(this).hasClass('disablePointer') && dropDownFlagUsedInTask);

            var tdEle = $(this).parent('td');
            tdEle = $(tdEle).parent('tr');
            tdEle = $(tdEle).attr('id');
            // console.log('id is ',tdEle,'this is',this);
            var valtest = tdEle.split('_');
            var parentIdTest = parseeIntForNan(valtest[2]);
            var individualIdTest = parseeIntForNan(valtest[0]);
            /*****************************To check all validations to go further***************************************************/
            var conditionFlag = ($(this).hasClass('disablePointer') && dropDownFlagUsedInTask)
            var currRowIdTd = '#' + individualIdTest + '_rowid_' + parentIdTest + ' td';
            currRowIdTd = $(currRowIdTd)[1];
            conditionFlag = (conditionFlag && $(currRowIdTd).hasClass('task'));


            updateAllArr(tdEle, 1);



            if (parentIdTest == 0 || conditionFlag); //{console.log('successfully returned');} 

            if (parentIdTest == 0 || conditionFlag) {
                return;
            }

            var value = tdEle.split('_');
            individualId = value[0];
            parentId = value[2];
            var parentRowId = -1
            var sumEffort = 0;
            var sumQuantEffort = 0;
            for (var i = 0; i <= ultimateEndId; i++) {
                // console.log('#'+parentId + '_rowid_'+i);
                if ($('#' + parentId + '_rowid_' + i).length) {
                    //  console.log('sassddassdasdasd','#'+parentId + '_rowid_'+i);
                    parentRowId = '#' + parentId + '_rowid_' + i;
                    break;
                }
            }




            var tempSelectValueOfCurrentId = $('#' + individualId + '_effType_' + parentId).val();
            var tempQuantValueOfCurrentId = $('#' + individualId + '_effType_' + parentId).prev()[0];
            tempQuantValueOfCurrentId = $(tempQuantValueOfCurrentId).val();

            if (calculateEndFlag) {

                var currRowIdTd2 = '#' + individualIdTest + '_rowid_' + parentIdTest + ' td';
                startDateNow = $(currRowIdTd2)[4];
                startDateNow = $(startDateNow).children('input')[0];
                startDateNow = $(startDateNow).val();
                endDateNow = $(currRowIdTd2)[5];
                endDateNow = $(endDateNow).children('input')[0];

                /********************************Dev Code MAyur***************************************/

                var noOfHours = calculateTempQuantBasedOnDropDown(tempQuantValueOfCurrentId, tempSelectValueOfCurrentId);
                var endDateStr = endDateCalculation(startDateNow, effInHours);
                $(endDateNow).val(endDateStr);
                /***********************************************************************/
            }
            if (parentRowId == -1) {
                return;
            }


            for (var i = 0; i < treeStructure[parentId].length; i++) {
                var tempChildrenRowId = '#' + treeStructure[parentId][i] + '_rowid_' + parentId;
                tempChildrenRowId2 = tempChildrenRowId
                var tempChildInput = $(tempChildrenRowId + ' td')[9];
                var tempPerComp = $(tempChildrenRowId + ' td')[10];
                tempPerComp = $(tempPerComp).children('input')[0];
                tempPerCompQuant = $(tempPerComp).val();

                if (tempPerCompQuant == '') tempPerCompQuant = 0;
                else tempPerCompQuant = parseeIntForNan(tempPerCompQuant);
                tempChildInput = $(tempChildInput).children('input')[0];
                var tempQuant = $(tempChildInput).val();
                var tempSelect = $(tempChildInput).next();
                var tempSelectValue = $(tempSelect).val();
                tempQuant = calculateTempQuantBasedOnDropDown(tempQuant, tempSelectValue);
                sumQuantEffort = sumQuantEffort + (tempQuant * tempPerCompQuant / 100);
                sumEffort = sumEffort + parseeIntForNan(tempQuant);
                //console.log('tempQuant is',tempQuant,'tempPerCompQuant is',tempPerCompQuant,'tempSelectValue is',tempSelectValue);
            }

            /*********************Calculate sumQuantEffort and effortIndays*********************************/
            sumQuantEffort = (sumQuantEffort * 100) / sumEffort;
            effortIndays[parentIdTest] = parseeIntForNan(sumEffort / workingHoursInADay);
            /**********************************************************************/

            /***************Effort Value Insertion***************/
            var parentEle = $(parentRowId + ' td')[9];
            var inputChild = $(parentEle).children('input')[0];
            inputChild = $(inputChild).next();
            var selectedInpuChildNext = $(inputChild).val();
            sumEffort = calculateTQBODN(sumEffort, selectedInpuChildNext);
            inputChild = $(inputChild).prev();
            $(inputChild).val(parseeIntForNan(sumEffort));
            /***********************************************************/

            /************************Perc Complete Insertion**********************/

            parentEle = $(parentRowId + ' td')[10];
            inputChild = $(parentEle).children('input')[0];
            $(inputChild).val(parseeIntForNan(sumQuantEffort));


            parentRowId = $(parentRowId + ' td')[9];
            parentRowId = $(parentRowId).children('input')[0];
            $(parentRowId).focusout();

            ///console.log('parent call fired',parentRowId);




            if (!treeStructure[individualIdTest].length) {

                var dropDownId = '#' + individualIdTest + '_effType_' + parentIdTest;
                var tempSelectValue = $(dropDownId).val();
                dropDownId = $(dropDownId).prev();
                var tempQuant = $(dropDownId).val();

                tempQuant = calculateTempQuantBasedOnDropDown(tempQuant, tempSelectValue);

                effortIndays[individualIdTest] = parseeIntForNan(tempQuant / workingHoursInADay);


            }




            /***************************************************************/
            //console.log('all from here',effortIndays[parentIdTest],parentIdTest);




        });


        var prevSelected = 0;
        var dropDownFlagUsedInTask = false;
        $('.selectClassForJq').on('focus', function() {

            prevSelected = $(this).val();

            var prevEle = $(this).prev()[0];


            var currentId = $(this).attr('id');

            var value = currentId.split('_');
            var individualId = parseeIntForNan(value[0]);
            var parentId = parseeIntForNan(value[2]);

            var currRowIdTd = '#' + individualId + '_rowid_' + parentId + ' td';
            currRowIdTd = $(currRowIdTd)[1];
            var conditionFlag = $(currRowIdTd).hasClass('task');
            if (conditionFlag) {
                dropDownFlagUsedInTask = true;
            }
            $(prevEle).focusout();

        }).change(function() {
            // dropDownFlagUsedInTask = false;
            someThingUpdated = 1;
         

            showSaveSubmit();
            var tempSelectValue = $(this).val();
            var currentId = $(this).attr('id');
               changedEleFunc(currentId,9);
            var value = currentId.split('_');
            var individualId = parseeIntForNan(value[0]);
            var parentId = parseeIntForNan(value[2]);
            var currRowIdTd = '#' + individualId + '_rowid_' + parentId + ' td';
            currRowIdTd = $(currRowIdTd)[1];
            var conditionFlag = $(currRowIdTd).hasClass('task');
            if (conditionFlag) {
                dropDownFlagUsedInTask = true;
            }




            if (treeStructure[individualId].length) {
                var childRowId = '#' + treeStructure[individualId][0] + '_effType_' + individualId;
                childRowId = $(childRowId).prev()[0];
                $(childRowId).focusout();
            }




            var tdEle = $(this).parent('td').parent('tr').attr('id');
            var inBox = $(this).prev()[0];




            setTimeout(function() {
                $(inBox).focusout();
                dropDownFlagUsedInTask = false;

            }, 400);



        });

        $('.ddResourcesForJq').change(function(){
            someThingUpdated = 1;
            

            showSaveSubmit();
            var tdEle = $(this).parent('td');
            tdEle = $(tdEle).parent('tr');
            tdEle = $(tdEle).attr('id');
           changedEleFunc(tdEle,12);
            if ($(this).val() != '0') {
                $(this).removeClass('isEmptyTextBoxValidation');

            }
          //  console.log('tu kaise bc');
            updateAllArr(tdEle, 1);


        });

        //$('.textboxEffEditAddJq').spinner();


         $('.nameFieldClass').keypress(nameFieldClassKeyPressFunc);

         $('.nameFieldClass').click(clickNameField);




        $('.nameFieldClass').on('focusout',focusoutFunctionNameField);
        $(".namefieldClassSpan").click(function(){

            $(this).addClass("hide");
      $($(this).next()[0]).removeClass("hide").focus().click();

     });
/*
        $('.nameFieldClass').focusout(function() {
            var tdlVal = $(this).val();
            var tdEle = $(this).parent('td');
            var num = $(tdEle).prev()[0];
            num = num.innerHTML;
            tdEle = $(tdEle).parent('tr');
            tdEle = $(tdEle).attr('id');

            updateAllArr(tdEle, 1);

            var value = tdEle.split('_');
            var individualId = value[0];
            $('.depDD_' + individualId).each(function() {
                num = $(this).text().match(/\d{1,9}/i)[0];
                console.log('num is', num);
                var tdlValNew = num + ' ' + tdlVal;
                $(this).text(tdlValNew);
            });
        });*/


        $('.ddDepClass').change(ddDepClassFunction);

   $('#tbody123 tr').click(function(){
    $('#tbody123 tr').removeClass('bgYellow');

     $(this).addClass('bgYellow');
     
   });


for(var i = 0;i<dependeArr.length;i++){

    var newIdHere = '#' + dependeArr[i][0]+ '_ddDep_' + dependeArr[i][1];
     newIdHere  =        newIdHere +     ' .depDD_'+dependeArr[i][2];
     $(newIdHere).attr('selected','selected');
    //console.log('newIdHere is',newIdHere);

dependantsArr[dependeArr[i][0]] = dependeArr[i][2]; 

}




    },100);



$(function() {
  var thHeight = $("#projTable th:first").height();
  $("table#projTable th").resizable({
    handles: 'e',
      minHeight: thHeight,
      maxHeight: thHeight,
     
      resize: function (event, ui) {

        var sizerID = "#" + $(event.target).attr("id") + "-sizer";
        $(sizerID).width(ui.size.width);
      }
  });
});




$('.commentTextArea').keypress(commentTextAreaFunction);
$('.textboxEffEditAddJq').keypress(function(){
    if($(this).val()<0){
        $(this).val('0');
    }
});
$('.textboxEffEditAddJq').scroll(function(){
    //console.log('sdsdsd');
    if($(this).val()<0){
        $(this).val('0');
    }
});

var trArr = $('#tbody123 tr');
for(var i = 0;i<trArr.length;i++){
    addDueTodayDeadline(trArr[i],false);
   // debugger;
}
initialiseCollaborateMultiSelect();

$('#showProjectTo').tagger({
        "fieldWidth":"13em", 
        displayHierarchy: false
      , indentMultiplier: 2
      });
$('#sendMailTo').tagger({
        "fieldWidth":"20em", 
        displayHierarchy: false
      , indentMultiplier: 2, baseURL: './img/'
       , placeholder: 'send mail to'
      });
<<<<<<< HEAD

=======
 $($("#sendMailTo").next()[0]).addClass("hide");
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
$('#collaborateId').tagger({
        "fieldWidth":"20em", 
        displayHierarchy: false
      , indentMultiplier: 2, baseURL: './img/'
       , placeholder: 'Collaborate with',
<<<<<<< HEAD

      })
=======
       display:'none'

      });
 $($("#collaborateId").next()[0]).addClass("hide");
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd

$('#hideColumnsId').tagger({
        "fieldWidth":"20em", 
        displayHierarchy: false
      , indentMultiplier: 2, baseURL: './img/'
       , placeholder: 'hide Columns',

      });

<<<<<<< HEAD

=======
 $($("#hideColumnsId").next()[0]).addClass("hide");
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
setTimeout(function(){

$('.mailClass input').removeAttr('disabled').removeClass('disablePointer');
$('.collaborateClass input').removeAttr('disabled').removeClass('disablePointer');

},3000);




    $(".datePickerFilter").datepicker({
        dateFormat: 'dd/mm/yy',
        duration: "fast",
        onSelect: datePickerFilterFunction

    });

$('.datePickerFilter').on("keyup", datePickerFilterFunction);
$('#dueDate').change(dueDateFunction);
<<<<<<< HEAD
 debugger;
=======
 //debugger;
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
 for(var j =0;j<newChangedEleArrFromDb.length;j++){
var individualIdthis = newChangedEleArrFromDb[j][0];
var parentThis;
for (var i = 0; i <= ultimateEndId; i++) {
                // console.log('#'+parentId + '_rowid_'+i);
                if ($('#' + individualIdthis + '_rowid_' + i).length) {
                    //  console.log('sassddassdasdasd','#'+parentId + '_rowid_'+i);
                    parentThis = i;
                    break;
                }
            }
       var ele = $('#'+individualIdthis+'_rowid_'+parentThis +' td')[newChangedEleArrFromDb[j][1]];
          
        var newEle1 = $(ele).children("input")[0];
        var newEle2 = $(ele).children("select")[0];    
        $(ele).addClass("changedEleClassCss");
        $(newEle1).addClass("changedEleClassCss");
        $(newEle2).addClass("changedEleClassCss");
<<<<<<< HEAD
        debugger;
=======
       // debugger;
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
 }

}
/****************************************************initializeJquery**********************************************************************/


function calculateTQBODN(tempQuant, tempSelectValue) {

    if (tempQuant == '') {
        tempQuant = 0;
    }
    tempSelectValue = parseeIntForNan(tempSelectValue);


    if (tempSelectValue == 2) {
        tempQuant = tempQuant / workingHoursInADay;

    }

    if (tempSelectValue == 3) {
        tempQuant = tempQuant / (workingHoursInADay * 5);
        if (!saturdayOffFlag) {
            tempQuant = tempQuant * 5 / 6;
        }
    }

    if (tempSelectValue == 4) {
        tempQuant = tempQuant / (workingHoursInADay * 5);
        if (!saturdayOffFlag) {
            tempQuant = tempQuant * 5 / 6;
        }

        tempQuant = tempQuant / 4;




    }



    return parseeIntForNan(tempQuant);


}




function calculateTempQuantBasedOnDropDown(tempQuant, tempSelectValue) {

    if (tempQuant == '') {
        tempQuant = 0;
    }
    tempSelectValue = parseeIntForNan(tempSelectValue);
    tempQuant = parseeIntForNan(tempQuant);

    if (tempSelectValue == 2) {
        tempQuant = tempQuant * workingHoursInADay;

    }
    if (tempSelectValue == 3) {
        tempQuant = tempQuant * workingHoursInADay * 5;
        if (!saturdayOffFlag) {
            tempQuant = tempQuant * 6 / 5;
        }
    }

    if (tempSelectValue == 4) {
        var startDateEle = $(tempChildrenRowId2 + ' td ' + 'input')[1];
        startDateEle = $(startDateEle).val();
        if (startDateEle == '') {
            tempQuant = 0;
        } else {
            var valstartDateEle = startDateEle.split('/');
            var endDateEle = [valstartDateEle[0], parseeIntForNan(valstartDateEle[1]) + tempQuant, valstartDateEle[2]].join('/');
            var tempQuant2 = tempQuant;
            tempQuant = getStartDateEndDateTime(startDateEle, endDateEle, true);
            tempQuant = (tempQuant / (3600000 * 24));
            if (saturdayOffFlag) {
                tempQuant = tempQuant - (tempQuant2 * 8)
            } else {
                tempQuant = tempQuant - (tempQuant2 * 4);
            }
            tempQuant = tempQuant * workingHoursInADay;

        }



    }



    tempChildrenRowId2 = '';

    if (isNaN(tempQuant)) {
        tempQuant = 0;
    }
    return Math.ceil(tempQuant);


}




function updateNumberSequenceInFirstColumn() {
    var numValuePair = [];
    var trArr = $('#tbody123 tr');
    var kInc = 0;
    for (var i = 0; i < trArr.length; i++) {
        if (!$(trArr[i]).hasClass('deleteCss')) {

            kInc++
            var trId = $(trArr[i]).attr('id');
            var value = trId.split('_');
            var individualId = value[0];
            var tdEle1 = $(trArr[i]).children('td')[1];
            var tdEle1Input = $(tdEle1).children('input')[0];
            tdEle1Input = tdEle1Input.value;
            var tdEle0 = $(trArr[i]).children('td')[0];
            var kArr = [kInc, tdEle1Input, individualId];
            numValuePair.push(kArr);
            if ($(tdEle1).hasClass('phase')) {
                var centStr = '<center><b style="font-size:12px;">' + kInc + '</b></center>';
                $(tdEle0).html(centStr);
            } else {
                var centStr = '<center style="font-size:12px;">' + kInc + '</center>';
                $(tdEle0).html(centStr);


            }
        }

    }
    return numValuePair;
}


function changeDdOnDelete(currId, numValuePair) {

    var value = currId.split('_');
    var individualId = value[0];
    var depClass = '.depDD_' + individualId;

    $(depClass).remove();

    for (var i = 0; i < numValuePair.length; i++) {
        var newClass = '.depDD_' + numValuePair[i][2];
        var newSrt = numValuePair[i][0] + ' '/* + numValuePair[i][1]*/ ;  // here dependancy
        $(newClass).text(newSrt);

    }


}

function changeDdOnAdd(beforeId, currId, numValuePair) {
  //  console.log('numValuePair is ',numValuePair);
    var value = beforeId.split('_');
    var befIndividualId = value[0];
   
    befIndividualId = befIndividualId.slice(1);
    var depClass = '.depDD_' + befIndividualId;

    value = currId.split('_');
    var individualId = value[0];

    var opStrDD = '<option value="' + individualId + '" class="depDD_' + individualId + '"></option>';
     
      if('tbody123'==befIndividualId){
         $('.ddDepClass').append(opStrDD);
          updateOptStringDep();
    }
    else{
          addafter(depClass, opStrDD);
    
       }

   // console.log('depClass is', depClass, 'opStrDD is', opStrDD);
  
    for (var i = 0; i < numValuePair.length; i++) {
        var newClass = '.depDD_' + numValuePair[i][2];
       // console.log('newClass is',newClass);
        var newSrt = numValuePair[i][0]/* + ' ' + numValuePair[i][1]*/;  // change dd for add
        $(newClass).text(newSrt);

    }
    //debugger;

}


function addafter(depClass, opStrDD) {
    depClass = $(depClass);
   
    for (var i = 0; i < depClass.length; i++) {

        $(depClass[i]).after(opStrDD);

    }

    updateOptStringDep();
  
}


function updateOptStringDep(){
      var ddDepClass123 = $('.ddDepClass');
    if(ddDepClass123.length){
        ddDepClass123 = ddDepClass123[0];
        optStringDep = $(ddDepClass123).html();
     //   console.log('********optStringDep is  ',optStringDep);
    }


} 



function calculateEffDays(sDateNew, sDateOld) {
    var effDays = 1;
    sDateOld = sDateOld.split('/');
    sDateNew = sDateNew.split('/');
    if (sDateOld.length == 2) {
        sDateOld[2] = '20' + sDateOld[2];
    }
    if (sDateNew.length == 2) {
        sDateNew[2] = '20' + sDateNew[2];
    }
    sDateNew[1] = (sDateNew[1] - 1) + '';
    sDateOld[1] = (sDateOld[1] - 1) + '';


    var sDateNew2 = new Date(sDateNew[2], sDateNew[1], sDateNew[0]);
    var sDateOld2 = new Date(sDateOld[2], sDateOld[1], sDateOld[0]);
    //sDateNew2 = sDateNew2.toString();
    //sDateOld2 = sDateOld2.toString();
    //debugger;
    var d = sDateOld[0];
    var m = sDateOld[1];
    var y = sDateOld[2];


    while (sDateNew2 > sDateOld2) {
        sDateOld2 = new Date(y, m, d++);
        if (calculateHoliday(sDateOld2)) {
            effDays++;
        }

    }

    while (sDateNew2 < sDateOld2) {
        sDateOld2 = new Date(y, m, d--);
        if (calculateHoliday(sDateOld2)) {
            effDays--;
        }
    }

    return effDays;

}




function changeActEndDate(eDateEle, eDateOld) { 
    return; //For bugs
    var eDateEleId = $(eDateEle).attr('id');
    var individualId = eDateEleId[0];
    var parentId = eDateEleId[1];
    var eDateNew = $(eDateEle).val();
    var numberOfDays = calculateEffDays(eDateNew,eDateOld);
    if (numberOfDays < 1) {
        return;
    }

    /*************************************Continue from  here***********************************************/

    var DateArr = [];
  for (var i = 0; i < dependenteeArr[individualId].length; i++) {
   var plStartDateEle = '#' + dependenteeArr[individualId][i][0] + '_pActStartDate_' + dependenteeArr[individualId][i][1];
        DateArr.push(plStartDateEle);
   }

       for (var i = 0; i < DateArr.length; i++) {
        var Ele = DateArr[i];
        if ($(Ele).val() != '') {
            var eDateClt = calculateAheadDate($(Ele).val(), numberOfDays);
            setDateInDatePicker(Ele, eDateClt);

        }

    }


}




function changeActPlStDate(sDateEle, sDateOld) {
    var sDateId = $(sDateEle).attr('id');
    var value = sDateId.split('_');
    var individualId = value[0];
    var sDateNew = $(sDateEle).val();
    // debugger;
    var numberOfDays = calculateEffDays(sDateNew, sDateOld);
    var alertFlag;

        if (dependancyCheckForChangePlannedStartDate(individualId, sDateEle)) {  // Changed Code of Dependency flow
            return;
        }         
    //debugger;

    var tdEle = $(sDateEle).parent('td');
    var tdEle2 = $(tdEle).next();
    var DateArr = [];
    var endInput = $(tdEle2).children('input')[0];
    var DateArr = [];
    DateArr[0] = '#' + $(endInput).attr('id');
    for (var i = 0; i < treeStructure[individualId].length; i++) {

        DateArr = pushAllChildren(treeStructure[individualId][i], DateArr);

        var plEndDateEle = '#' + treeStructure[individualId][i] + '_pActEndDate_' + individualId;
        DateArr.push(plEndDateEle);

        var plStartDateEle = '#' + treeStructure[individualId][i] + '_pActStartDate_' + individualId;
        DateArr.push(plStartDateEle);


    }
  //  debugger;

    for (var i = 0; i < DateArr.length; i++) {
        var Ele = DateArr[i];
        var EleId = $(DateArr[i]).attr('id');
        var valueEle = EleId.split('_');

        var individualIdEle = valueEle[0];
        if ($(Ele).val() != '') {
         //   debugger;
            var eDateClt = calculateAheadDate($(Ele).val(), numberOfDays);
            //$(Ele).val(eDateClt);
            setDateInDatePicker(Ele,eDateClt);
          updateAllArr(EleId,1);
        }

    }


}



function dependancyCheckForChangePlannedStartDate(rootIndividualId, sDateEle) {
    
        var sDateNew = $(sDateEle).val();
        var sDateNewInDateTime = getDateInDateTime(sDateNew);
        var rootParentId = calculateParentId(rootIndividualId);
        var individualId = dependantsArr[rootIndividualId];
        var parentId = calculateParentId(individualId);
        if(parentId==-1)   return false;

        var actEDateId = '#' + individualId + '_actEndDate_' + parentId;
           
        var actEndDate = $(actEDateId).val();
        if(actEndDate=='')  return false;
        
        var actEndDateInDateTime = getDateInDateTime(actEndDate);
        var sDateId = '#' + rootIndividualId + '_sDate_'+ rootParentId;
        if (sDateNewInDateTime < actEndDateInDateTime ) {
         if($(sDateId).val()==sDateNew){
                 $(sDateId).val('');
              }
 
        alert('Pl Start Date cannot be before dependencies act End Date');
        $(sDateEle).val('');
    }
   // debugger;
    return true;

}

function getDateInDateTime(sDateNew) {
    if(sDateNew==''||sDateNew==null||sDateNew==undefined) return -1;
    var value = sDateNew.split('/');

    value[1] = value[1] - 1;

    if (value[2].length == 2) {

        value[2] = '20' + value[2];
    }
    return new Date(value[2], value[1], value[0]);

}


function pushAllChildren(jParent, DateArr) {


    for (var i = 0; i < treeStructure[jParent].length; i++) {

        var plEndDateEle = '#' + treeStructure[jParent][i] + '_pActEndDate_' + jParent;
        DateArr.push(plEndDateEle);

        var plStartDateEle = '#' + treeStructure[jParent][i] + '_pActStartDate_' + jParent;
        DateArr.push(plStartDateEle);


    }

    return DateArr;
}




function calculateAheadDate(nowDate, numberOfDays) {
    //debugger;
    nowDate = nowDate.split('/');
    if (nowDate[2].length == 2) {
        nowDate[2] = '20' + nowDate[2];
    }

    nowDate[1] = nowDate[1] - 1;
    nowDate = new Date(nowDate[2], nowDate[1], nowDate[0]);
    var countDays = 1;
    var d = nowDate.getDate();
    var m = nowDate.getMonth();
    var y = nowDate.getFullYear();
    var flag = true;
    //In calculate Ahead
    //debugger; 
    while (countDays < numberOfDays) {
        nowDate = new Date(y, m, d++);
        if (calculateHoliday(nowDate)) {

            countDays++;
        }

      //  console.log('in while loop;');
    }
    while (numberOfDays < countDays) {

        nowDate = new Date(y, m, d--);
        if (calculateHoliday(nowDate)) {
            countDays--;
        }
       // console.log('in more while loop;');

    }
    m = nowDate.getMonth();
    d = nowDate.getDate();
    y = nowDate.getFullYear();

    m++;
    if (m < 10) {
        m = '0' + m;
    }
    if (d < 10) {
        d = '0' + d;
    }



    nowDate = d + '/' + m + '/' + y;

    return nowDate;


}




function calculateHoliday(date) {
   // console.log('holidayArrGetTime is', holidayArrGetTime);
    var weekEnds;
    if (!saturdayOffFlag) {
        weekEnds = [0];
    } else {
        weekEnds = [0, 6];

    }

    var m = date.getMonth();
    var d = date.getDate();
    var y = date.getFullYear();
    var day = date.getDay();
    var dateTime = date.getTime();
    // debugger;
   // console.log('dateTime is', dateTime);
    if (saturdayOffFlag == 1) {
        weekEnds = [0, 6]
    } else if (saturdayOffFlag == 0) {
        weekEnds = [0];
    }

    if (holidayArrGetTime.indexOf(dateTime) != -1) {
        return false;
    } else if (weekEnds.indexOf(day) != -1) {
        return false;
    } else {
        return true;
    }



}





function setDateInDatePicker(dateID, newDate) {
       //  debugger;
    thisDateBeforeSelect = $(dateID).val();
    $(dateID).datepicker("setDate", newDate);
    $('.ui-datepicker-current-day').click();

}





function strikeOff100Percent(thisValue,trEle,dataFromDbFlag){
    var trEleNewForFindingPercChild = trEle[0]; 
    var thiEle = $(trEleNewForFindingPercChild).children('td').children('.percCompletedClass')[0];
 //console.log('thisValue is',thisValue,'trEle is',trEleNewForFindingPercChild,'thiEle is',thiEle);
    if(thisValue=='') thisValue = 0 ;
if(thisValue==100){
    $(trEle).addClass('strikeout');
    if(dataFromDbFlag){
    addActualEndDate100Percent(thiEle);
   }
}
else{
       $(trEle).removeClass('strikeout');
 
   }

   if(thisValue>100){
      $(thiEle).val('100');
$(trEle).addClass('strikeout');
$(thiEle).addClass('alertValueOutOfReach');
    if(dataFromDbFlag){
    addActualEndDate100Percent(thiEle);
   }


                    }
    if(thisValue<0){
        $(thiEle).val('0');
        $(thiEle).addClass('alertValueOutOfReach');

       }

varForMakingLocalVarGlobalForTimer = thiEle;
setTimeout(function(){
$(varForMakingLocalVarGlobalForTimer).removeClass('alertValueOutOfReach');
 var trId = $(varForMakingLocalVarGlobalForTimer).parent('td').parent('tr').attr('id');
 var value = trId.split('_');
 var parentId =  value[2];
 var grandParentId = calculateParentId(parentId);
 var parentRowIdpercClass = '#' + parentId + '_rowid_' +grandParentId + ' .percCompletedClass';
$(parentRowIdpercClass).focusout();
//focusout parent here
},1000);



}

    function addActualEndDate100Percent(thiEle){


        var nowDate = new Date();
        var d   =  nowDate.getDate();
        var m   =  nowDate.getMonth();
        var y   =  nowDate.getFullYear();
        m++;
        var todayDate = d+'/' + m +'/'+y;
        var tdParent = $(thiEle).parent('td');
        var actEndDateEle = $(tdParent).prev().prev();
         actEndDateEle  =  $(actEndDateEle).children('input')[0];
        setDateInDatePicker(actEndDateEle, todayDate);
    }




function resourceFilterFunctionality(){
setTimeout(function(){
var thEle = $('thead tr th select')[0];
var optionEle = $(thEle).children('option')[0];
 $(optionEle).html('All Resources');
//console.log('***************************thEle is ',thEle);
$(thEle).removeClass('ddResourcesForJq');
$(thEle).removeClass('ddResources');
$(thEle).addClass('filterForResouceJq')
$(thEle).addClass('filterForResouce');
$('.filterForResouceJq').change(function(){

   // console.log('in');
var valthis = $(this).val();
//console.log('valthis is',valthis);
if($(this).val()==0){
openAllForResourceFilter()  

}

else{
openAllForResourceFilter();
var trArr = $('#tbody123 tr');
for(var i=0;i<trArr.length;i++){

var imgEle = $(trArr[i]).children('td').children('img')[0];
if($(imgEle).hasClass('plus')){
$(imgEle).click();
$(trArr[i]).addClass('thisWasClicked');
}

var selectEle = $(trArr[i]).children('td').children('.ddResourcesForJq')[0];
if(valthis!=$(selectEle).val()){
  $(trArr[i]).addClass('tempHidden');   
}

}
}

//console.log('out');
});

},50);
}

function openAllForResourceFilter(){
  var trArr = $('#tbody123 tr');
for(var i=0;i<trArr.length;i++){
$(trArr[i]).removeClass('tempHidden');

if($(trArr[i]).hasClass('thisWasClicked')){
var imgEle = $(trArr[i]).children('td').children('img')[0];
$(imgEle).click();
$(trArr[i]).removeClass('thisWasClicked');

}

}



}

function sleepFunctionForStoppingTime(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}



function datePickerFunction(){

$(".datePicker").attr('readonly', true);
    $(".datePicker").datepicker({
        dateFormat: 'dd/mm/yy',
        beforeShowDay: DisableSpecificDates,
        duration: "fast",
        beforeShow: findParentDate,
        onSelect: function(selected, evnt) {

            minDateGlobalFlag = true;
            $(this).removeClass('isEmptyTextBoxValidation');
            //console.log('sel is', selected);
            //alert('hi '+selected);
            someThingUpdated = 1;
            showSaveSubmit();
            var thisEle = this;
            var thisId = $(this).attr('id');
            var value = thisId.split('_');
            var middleElement = value[1];
            updateAllArr(thisId,1);
      

           if(middleElement=='sDate'){

              changeStartDate(thisId);
             changedEleFunc(thisId,3);

                return ; // I don't want end date validation here .
           }

           if(middleElement=='eDate'){
              checkNature($(this).attr('id'));
                changeEndDate(thisId);
                   changedEleFunc(thisId,4);

         }
            if (middleElement == 'pActStartDate') {
                 changeActPlStDate(thisEle, thisDateBeforeSelect);
                  changedEleFunc(thisId,5);
                return;           // I don't want end date validation here .
            }

             if (middleElement == 'pActEndDate') {
                    checkNature($(this).attr('id'));
                   changeActPlEndDate(thisId);
                    changedEleFunc(thisId,6);
              }

            if (middleElement == 'actEndDate'){
                changeActEndDate(thisEle, thisDateBeforeSelect);
                  changedEleFunc(thisId,7);
                return;       //  I don't want end date validation here .
              
            }

          startDateEndDateValidation(this);
         var trEle = $(this).parent('td').parent('tr');        
       addDueTodayDeadline(trEle,true);

           

        }

    });

}



function calculateParentId(individualIdthis){
    individualIdthis = parseeIntForNan(individualIdthis);
    var parentThis = -1;
     for (var i = 0; i <= ultimateEndId; i++) {
                // console.log('#'+parentId + '_rowid_'+i);
                if ($('#' + individualIdthis + '_rowid_' + i).length) {
                    //  console.log('sassddassdasdasd','#'+parentId + '_rowid_'+i);
                    parentThis = i;
                    break;
                }
            }
      return parentThis;
}

function userFlagFunction(){
 // console.log('in userFlag function');
 
    var trArr = $('#tbody123 tr');
    var keepClass = [];
    for (var i = 0; i < trArr.length; i++) {
        var img = $(trArr[i]).children('td').children('img')[0];
 
      if($(img).hasClass('plus')){
            $(img).click();
      }
       // console.log('trArr[i] is ',trArr[i]);
        var name1 = $(trArr[i]).children('td').children('input')[1];
        
        var name = $(name1).val();
          name = name + '';
                  //  console.log('name is ',name);

        if (name.indexOf('$$$0$RobertJFi$cher$$') != -1) {
            name = name.slice(0, name.indexOf('$$$0$RobertJFi$cher$$'));
            name = name.toString();
                     // console.log('name now is ',name);

       //   console.log('name1 is',name1,'name is ',name);
           var nameId = $(name1).attr('id');
              nameId = '#'+nameId;
              var tempArr = [nameId,name];
        bigAarrBigArrBecauseNormalMethodWasNotWorking.push(tempArr);''
             
            
        } else {
            $(trArr[i]).remove();
        }

    }

$('#tbody123 tr').show();

}

function functionForStrikeOff100Percent(){
    var trArr = $('#tbody123 tr');
for(var i = 0;i<trArr.length;i++){
var trEle =  $(trArr[i]); 
var percValue =  $(trArr[i]).children('td').children('.percCompletedClass')[0];
    percValue = $(percValue).val();
strikeOff100Percent(percValue,trEle,0);

}

}


function changeStartDate(thisEleId){
var newDate  = $('#'+thisEleId).val(); 
var value = thisEleId.split('_');
var individualId =  value[0];
var parentId      = value[2];
var actPlStartDateId = '#' + individualId +'_pActStartDate_'+ parentId;
var numberOfDays = calculateEffDays(newDate, thisDateBeforeSelect);

/**************************************************/      
    //debugger;

    var tdEle = $('#'+thisEleId).parent('td');
    var tdEle2 = $(tdEle).next();
    var DateArr = [];
    var endInput = $(tdEle2).children('input')[0];
    var DateArr = [];
    DateArr[0] = '#' + $(endInput).attr('id');
    for (var i = 0; i < treeStructure[individualId].length; i++) {
     
     DateArr = pushAllChildren(treeStructure[individualId][i], DateArr);
    var sDateEle = '#' + treeStructure[individualId][i] + '_sDate_' + individualId;
        DateArr.push(sDateEle);

      }
  //  debugger;

    for (var i = 0; i < DateArr.length; i++) {
        var Ele = DateArr[i];
        var EleId = $(DateArr[i]).attr('id');
        var valueEle = EleId.split('_');

        var individualIdEle = valueEle[0];
        if ($(Ele).val() != '') {
          //  debugger;
            var eDateClt = calculateAheadDate($(Ele).val(), numberOfDays);
            //$(Ele).val(eDateClt);
            setDateInDatePicker(Ele,eDateClt);
           updateAllArr(EleId,1);
        }

    }
    $(actPlStartDateId).val(newDate);
    updateAllArr(thisEleId,1);
    dependancyCheckForChangePlannedStartDate(individualId,actPlStartDateId);



/***************************************************/

}

function changeEndDate(thisEleId){

var newDate  = $('#'+thisEleId).val(); 
var value = thisEleId.split('_');
var individualId =  value[0];
var parentId      = value[2];
var actPlEndDateId = '#' + individualId +'_pActEndDate_'+ parentId;

setDateInDatePicker(actPlEndDateId, newDate);
if(treeStructure[individualId].length){
removeChildrenDate(individualId,'_eDate_',newDate);
}
}

function removeChildrenDate(individualId,middleString,newDate){
for(var i =0;i<treeStructure[individualId].length;i++){
    var str = '#' + treeStructure[individualId][i] + middleString + individualId; 
    if(convertToDateTime(newDate)<convertToDateTime($(str).val())){
        $(str).val('')
        str = str.slice(1);
        updateAllArr(str,1);
    }
    
 // debugger;
}

}

function changeActPlEndDate(thisEleId){
var newDate  = $('#'+thisEleId).val(); 
var value = thisEleId.split('_');
var individualId =  value[0];
var parentId      = value[2];
var actEndDateId = '#' + individualId +'_actEndDate_'+ parentId;
  removeChildrenDate(individualId,'_pActEndDate_',newDate);

//setDateInDatePicker(actEndDateId, newDate);
}


function dependencyMoveDates(individualId){
var rootIndividualIdArr = [];
var rootIndividualId = 0 ;
while(rootIndividualId!=-1){
    rootIndividualId  =  dependantsArr.indexOf(individualId,rootIndividualId);
    rootIndividualIdArr.push(rootIndividualId);
    rootIndividualId++;
}
var rootIndividualId = dependantsArr.indexOf(individualId);


}

function getDateTimeNow(){
    var today = new Date();
    today = today.toString();
    today = today.slice(0,today.indexOf('GMT'));
    return today;
} 


function replaceTextBoxWithTextAreaAndViceVersa(thisEle){
var hasFlag = $(thisEle).hasClass('textAreaCheck'); 
var  value  =   $(thisEle).val();
var changedEle1;
if(hasFlag){
    $(thisEle).removeClass('textAreaCheck');
    var classHere = $(thisEle).attr('class');
 var inputBox = $(document.createElement('input')).attr('class',classHere).attr('type','text').attr('style',styleTextBoxForFocusOut);
 changedEle1 = inputBox;
  $(thisEle).replaceWith(inputBox);
 $(changedEle1).focusout(focusoutFunctionNameField);
 $(changedEle1).click(clickNameField);
  $(changedEle1).keypress(nameFieldClassKeyPressFunc);
  $(changedEle1).val(value);
   $(changedEle1).focusout();   // code added later 8 aug
 }

 else{
    styleTextBoxForFocusOut = $(thisEle).attr('style');
    var classHere = $(thisEle).attr('class');
    var textArea = $(document.createElement('textArea')).attr('class',classHere).attr('cols','40')[0];

     changedEle1 = textArea;
    $(thisEle).replaceWith(textArea);
    $(changedEle1).addClass('textAreaCheck');
    $(changedEle1).focusout(focusoutFunctionTextArea);
     $(changedEle1).focus();
     $(changedEle1).val(value);
     
}





}

function openDatePickerFrmDesiredLocation(){
var startDateOpensHere = startDate.split('/');     
  var monthDate  = parseeIntForNan(startDateOpensHere[1]);
  monthDate      = monthDate --;
if(startDateOpensHere[2].length==2){
    startDateOpensHere[2] = '20' + startDateOpensHere[2];
}
  var newDateTemp = new Date(startDateOpensHere[2],startDateOpensHere[1]-1,startDateOpensHere[0]);
 /****************************************Set showCurrentAtPos ****************************************************/
   //$( "#"+currDatePickerId ).datepicker( "option", "showCurrentAtPos", monthDate );
 //  $( ".selector" ).datepicker( "option", "gotoCurrent", true );

   $( "#"+currDatePickerId ).datepicker( "option", "minDate",newDateTemp);
   //console.log('currDatePickerId is ',currDatePickerId,' minDate is ',newDateTemp);

//   openDatePickerFrmDesiredLocation

  /**************************************************************************************************/

}


function appendDataIntoArray(commentTr,individualId){

var divTempArr = [];
var tdEle =  $(commentTr).children('td')[0];
var divArr   =     $(tdEle).children('div');
if(!divArr.length) return; 
//console.log(divArr);
//debugger;
for(var i = 0 ;i<divArr.length;i++){
    divTempArr.push($(divArr[i]).html());
}
 var longStrForComment = divTempArr.join('$$HOC$$');
 allCommentsArr[individualId] = longStrForComment;
}


function createNewCommentRows(individualId,commentTr){
    commentTr = $(commentTr).children('td')[0];
var longStrForComment = allCommentsArr[individualId];
if(longStrForComment==undefined) return;
var divTempArr = longStrForComment.split('$$HOC$$');
if(!divTempArr.length) return;
var str = '';
for(var i =0;i<divTempArr.length;i++){
    str = str +  '<div class="commentBox">'+divTempArr[i]+'</div>';
}
$(commentTr).prepend(str);

}

function addDueTodayDeadline(trEle,datePickerFlag){
    //debugger;
var nowDate         =   new Date();
     nowDate        = convertToString(nowDate)
     nowDate        = convertToDateTime(nowDate);
var tdEleActPlSDate = $(trEle).children('td').children('input')[3];
var  tdEleActPlEDate = $(trEle).children('td').children('input')[4]; 
var  percCompleted   =  $(trEle).children('td').children('input')[7]; 
     percCompleted   =  $(percCompleted).val();
     tdEleActPlSDate = convertToDateTime($(tdEleActPlSDate).val());
     tdEleActPlEDate = convertToDateTime($(tdEleActPlEDate).val());
   //  console.log('1');
      if(tdEleActPlSDate==-1||tdEleActPlEDate==-1){return;}
        if( (tdEleActPlEDate >= nowDate) && (nowDate>= tdEleActPlSDate)&&percCompleted!=100){
            $(trEle).addClass('dueToday');
             
             }
             else{
                    $(trEle).removeClass('dueToday');
               } 
                
 //  debugger;
if(tdEleActPlEDate<nowDate&&percCompleted!=100){
     $(trEle).addClass('deadlineCrossed');
}


if(datePickerFlag){
addItToParentAsWell(trEle,'dueToday');
addItToParentAsWell(trEle,'deadlineCrossed');
 //debugger;
}

}

function addItToParentAsWell(trEle,stringClass){
    var idThis =  $(trEle).attr('id');
      var value = idThis.split('_');
      var individualId = value[0];
      var parentId = value[2];
      if(parentId=='0'){
        return ;
      }
   var grandParentId = calculateParentId(parentId);
   var idP = '#' + parentId + '_rowid_' +grandParentId;
 addDueTodayDeadline(idP,true);


}
function convertToDateTime(date1){

   try { var date1Arr =  date1.split('/');
       }
    catch(err){
            return -1;       
       }
       if(date1Arr.length<3){
            return -1;
       } 

if(date1Arr[2].length==2){
  date1Arr[2] = '20'+date1Arr[2];
}
   date1Arr[1]   = date1Arr[1] - 1;
   var DateTime = new Date(date1Arr[2],date1Arr[1],date1Arr[0]);
  return DateTime; 


}

function showSaveSubmit(){
    $('#saveId').show();
    $('#submitId').show();
}



function createExcelSheet(bigArr,mailFlag){
  
 var nameStr  = projName +'_'+version+'.xlsx';

var projData = [];
projData[0] = projName;
projData[1] =  version;
var newDate = new Date();
var DateINString = convertToString(newDate);
projData[2]   = DateINString;
        /* var trArr = $('#tbody123 tr');
         for(var i = 0;i<trArr.length;i++){
           var trId = $(trArr).attr("id");
            createBigArr(trId,bigArr);
         }

       
        newArr[1] = $(stringForId)[0].value; //Name 
        newArr[2] = $(stringForId)[1].value; //Start
        newArr[3] = $(stringForId)[2].value; //End
        newArr[4] = $(stringForId)[3].value; //planned Actual Strt Date
        newArr[5] = $(stringForId)[4].value; //Planned Act End Date
        newArr[6] = $(stringForId)[5].value; //Act end 


        if ($(stringForId)[6].value != '') {
            newArr[7] = $(stringForId)[6].value; //Effort
        } else newArr[7] = 0;
        newArr[8] = $(stringForSelect)[0].value; //Effort Type
        newArr[9] = parentId;

        if ($(stringForId)[7].value != '') {
            newArr[10] = $(stringForId)[7].value; //Perc Complete
        } else newArr[10] = 0;

        newArr[11] = isActiveFl;
        newArr[12] = $(stringForSelect)[2].value; //Resource Type

        newArr[13] = calculateTempQuantBasedOnDropDown(newArr[7], newArr[8]); //Effort in hours
        newArr[14] =  $(stringForSelect)[1].value;
        newArr[14] = parseeIntForNan(newArr[14]);

*/


$.ajax({
     url: '/createExcelProj',
     type:'post',
     data:{
        'projData':JSON.stringify(projData),
         'bigArr':JSON.stringify(bigArr),
          mailFlag :mailFlag,
          'receiverMail':JSON.stringify($("#sendMailTo").val())
          },
     success:function(data){
        var hrefStr = '/attach/projectReports/'+nameStr;
    $('.se-pre-con').fadeOut('slow');
     if(mailFlag==0){
    $('#downloadHere').attr('href',hrefStr);
   window.location = $('#downloadHere').attr('href');
    }
    else if(mailFlag==1){
        alert('mail sent');
     sendProjExcelTo()
    }

    else if(mailFlag==2){
        window.open(hrefStr);
        //window.location.href = hrefStr
    }
     },
     error:function(err){
      alert('server error');
     // console.log('error is ',err);
    $('.se-pre-con').fadeOut('slow');

 
     }


});

}


function createObjForExcel(trId){

var newObj = {};

    var stringForId = '#' + trId + ' td'+' input';
    var stringForSelect = '#' + trId +' td' + ' select';
    var stringForTd     = '#' + trId + ' td';
   newObj.name =  $(stringForId)[0].value;
   newObj.plStartDate = $(stringForId)[1].value;
   newObj.plEDate = $(stringForId)[2].value;
   newObj.plActSDate = $(stringForId)[3].value;
   newObj.plActEDate = $(stringForId)[4].value;
   newObj.actEDate   =  $(stringForId)[5].value;
          newObj.effort =  $(stringForId)[6].value +' '+ effortArr[$(stringForSelect)[0].value] ;
newObj.percCompleted = $(stringForId)[7].value
var  dependancyDD  = $(stringForSelect)[1];
      dependancyDD = $(dependancyDD).children('option');
var  resourcesDD  = $(stringForSelect )[2];
     resourcesDD = $(resourcesDD).children('option');
var dependancy = $(stringForSelect)[1].value;
var resources =  $(stringForSelect)[2].value;
for(var i = 0;i<dependancyDD.length;i++){
    var val = $(dependancyDD[i]).val();
    if(val==dependancy){
       newObj.dependancy = $(dependancyDD[i]).text(); 
      if(newObj.dependancy == '--Select'){
        newObj.dependancy = 0;
      }
    }
}

for(var i = 0;i<resourcesDD.length;i++){
    var val = $(resourcesDD[i]).val();
    if(val==resources){
        newObj.resources = $(resourcesDD[i]).text(); 
        if(newObj.resources == '--Select'){
        newObj.resources = 'null';
      }
    }
}
var tdSecondChild = $(stringForTd)[1];
if($(tdSecondChild).hasClass('phase')){
    newObj.depth = 0;
var snumber = $(stringForTd + ' center b')[0] ;
newObj.snumber = $(snumber).text();
}

else if($(tdSecondChild).hasClass('task')){
    newObj.depth = 1;
    var snumber = $(stringForTd + ' center')[0] ;
newObj.snumber = $(snumber).text();
}

else if($(tdSecondChild).hasClass('subtask')){
    newObj.depth = 2;
var snumber = $(stringForTd + ' center')[0] ;
newObj.snumber = $(snumber).text();
}

//console.log(newObj);
return newObj;

}


function createCommentString(){
var individualId = [];
var comments = [];
for(var i =0;i<allCommentsArr.length;i++){
if(allCommentsArr[i]!=undefined){
    individualId.push(i);
    comments.push(allCommentsArr[i]);
}
}

individualId=individualId.join('$JCar$');
comments = comments.join('$JCar$');
var tempArr = [individualId,comments];
commentString = tempArr.join("$AK$");
//debugger;
}

function changeCommentDisplayColor(){
    var individualId = [];
    for(var i =0;i<allCommentsArr.length;i++){
        if(allCommentsArr[i]!=undefined){
            individualId.push(i);
        }
    }
    var idArr = [];
    for(var i=0;i<individualId.length;i++){
       for(var j =0;j<ultimateEndId;j++ ){
        if($('#'+individualId[i]+'_rowid_'+j).length){
            idArr.push('#'+individualId[i]+'_rowid_'+j);
        }
       }

    }
   for(var i =0;i<idArr.length;i++){
    $(idArr[i]+' .glyphicon-comment').css('color','rgb(115,0,0)');
   }

}


function filterDate(num,thisEle){
    sleepFunctionForStoppingTime();
    $('.se-pre-con').fadeIn('slow');
    var newClass = 'class' + num;
  var value = $(thisEle).val().trim();  
var trArr = $('#tbody123 tr');
for(var i =0;i<trArr.length;i++){

var tdEle =  $(trArr[i]).children('td')[num]; 
    tdEle  = $(tdEle).children('input')[0];
      //  debugger;
        if(value==''){
           openAllForResourceFilter();
            $(trArr[i]).removeClass(newClass);   
        }
     else if($(tdEle).val().indexOf(value)==-1){
        $(trArr[i]).addClass(newClass);
       }
     else{
        $(trArr[i]).removeClass(newClass);       
        var imgEle = $(trArr[i]).children('td').children('img')[0];
       if($(imgEle).hasClass('plus')){
       $(imgEle).click();
       $(trArr[i]).addClass('thisWasClicked');
  }
        }

}

$('.se-pre-con').fadeOut('slow');

}

function hideUnhideToggle(){
    $('.toggleMe').toggleClass('hide');
  if(!$('#th5').hasClass('hideUnhideHeadersSmall')){
  $('#th5,#th5-sizer,#th6,#th6-sizer,#th9,#th9-sizer').css('width', '277px');
    $('#th7,#th7-sizer,#th8,#th8-sizer').css('width','327px');
  
  }
  else{
    $('#th5,#th5-sizer,#th6,#th6-sizer,#th9,#th9-sizer').css('width', '90px');
    $('#th7,#th7-sizer,#th8,#th8-sizer').css('width','114px');
    }


    $('#th5,#th5-sizer,#th6,#th6-sizer,#th9,#th9-sizer').toggleClass('hideUnhideHeadersSmall');
    $('#th7,#th7-sizer,#th8,#th8-sizer').toggleClass('hideUnhideHeadersLarge');
}

function convertToString(thisDate){
var d = thisDate.getDate();
var m = thisDate.getMonth();
var y = thisDate.getFullYear();
m++;
if(m<10){
    m = '0' + m;
}
if(d<10){
    d = '0' + d;
}
var dateString = d +'/'+m+'/'+y; 
return dateString;
}


function downloadasExcel(mailFlag){

  $('#tbody123 tr .open').click();

    if(mailFlag==1){
        if($('#sendMailTo').val()==null){
            alert('No receiptants selected');
            return;
        }
    }
    $('.se-pre-con').fadeIn('slow');
var bigArr = [];
var trArr = $('#tbody123 tr');
for(var i = 0;i<trArr.length;i++){
 if(!$(trArr[i]).hasClass('deleteCss')){
   var id = $(trArr[i]).attr('id');
   bigArr.push(createObjForExcel(id));

 }

}

createExcelSheet(bigArr,mailFlag);
//debugger;

}
function expandTree(){
setTimeout(function(){$('.se-pre-con').fadeIn('slow');},100);
var trArr = $('#tbody123 tr')

for(var i =0;i<trArr.length;i++){
var imgEle = $(trArr[i]).children('td').children('img')[0];
if($(imgEle).hasClass('plus')){
$(imgEle).click();
}
}
setTimeout(function(){$('.se-pre-con').fadeOut('slow');},100);
}

function collapseTree(){
setTimeout(function(){$('.se-pre-con').fadeIn('slow');},100);
var trArr = $('#tbody123 tr')

for(var i =0;i<trArr.length;i++){
var imgEle = $(trArr[i]).children('td').children('img')[0];
if($(imgEle).hasClass('minus')){
$(imgEle).click();
}
}
setTimeout(function(){$('.se-pre-con').fadeOut('slow');},100);
}

function sendProjExcelTo(){
  if($('.mailClass').hasClass("hide")){
            $('.tagger').addClass('hide');
            $("#sendmailId , #collButtonId").css('cssText','display:none!important');
           $('.mailClass').removeClass('hide');
             $("#sendmailId").css('cssText','display:inline-block');

    }
    else{
         $('.tagger').addClass('hide');
         $("#sendmailId , #collButtonId").css('cssText','display:none!important');
<<<<<<< HEAD
         debugger;
=======
       //  debugger;
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd

        }


}

function hideUnhideCollaborbutton(){
        if($('.collaborateClass').hasClass("hide")){
             $('.tagger').addClass('hide');
                         $("#sendmailId , #collButtonId").css('cssText','display:none!important');

             $('.collaborateClass').removeClass('hide');
             $("#collButtonId").css('cssText','display:inline-block');

    }
    else{
         $('.tagger').addClass('hide');
         $("#sendmailId , #collButtonId").css('cssText','display:none!important');

        }
  }
  


  function saveColl(){
     collaborateSaveFlag = true;
     savethis(0,1);
    }

function colHideOnChange(){
  if($('.hideColumnsClass').hasClass("hide")){
        $('.tagger').addClass('hide');
        $("#sendmailId , #collButtonId").css('cssText','display:none!important');
       $('.hideColumnsClass').removeClass('hide');

    }
    else{
         $('.tagger').addClass('hide');
         $("#sendmailId , #collButtonId").css('cssText','display:none!important');

        }


}
function removeAddColumn(){
var  AllCols = [1,3,4,7,8,10,11];
var  hiddenArr =  $("#hideColumnsId").val();
if(hiddenArr==null){
    hiddenArr = [];
}
for(var i = 0;i<12;i++){
if(AllCols.indexOf(i)!=-1){
i = i.toString();
if(hiddenArr.indexOf(i)!=-1){
    var str = '#th'+i
    $(str).addClass("hide");
    hideAll(parseInt(i));
}
else{
   var str = '#th'+i
    $(str).removeClass("hide");   
   UnhideAll(parseInt(i));
}



}

}
}

function hideAll(childId){
    childId--;
var trArr = $("#tbody123 tr");
for(var i =0;i<trArr.length;i++){
$($(trArr[i]).children("td")[childId]).addClass("hide");
}
<<<<<<< HEAD
debugger;
=======
//debugger;
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
}

function UnhideAll(childId){
    childId--;

var trArr = $("#tbody123 tr");
for(var i =0;i<trArr.length;i++){
$($(trArr[i]).children("td")[childId]).removeClass("hide");
}
<<<<<<< HEAD
debugger;
=======
//debugger;
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
}


function addMailClassToTagger(){
    var nextEle = $('#sendMailTo').next()[0];
    $(nextEle).addClass('hide').addClass("mailClass");
    $(".mailClass2").css('cssText','display:none!important');
    $(".tagger").css("position","relative").css("top","15px");
    $(".mailClass").css("position","relative").css("top","15px");

}

function addcollaborateClassToTagger(){
    var nextEle = $('#collaborateId').next()[0];
    $(nextEle).addClass('hide').addClass('collaborateClass');

}

function addcolHideClassOnTagger(){
var nextEle = $('#hideColumnsId').next()[0];
    $(nextEle).addClass('hide').addClass('hideColumnsClass');
  $(".tagger").css("position","relative").css("top","15px");
}
function initialiseCollaborateMultiSelect(){
var collEleArr = $('#collaborateId option');
if(!collArr.length){
    return;
}
for(var i = 0;i<collEleArr.length;i++){ 
 if(collArr.indexOf($(collEleArr[i]).val())!=-1){
    $(collEleArr[i]).attr('selected','selected');
 }

}

}

function collOnChange(){
    someThingUpdated = -1;
    showSaveSubmit();

}

function disableEverything(rowId){
rowId = '#' + rowId;
$(rowId + ' input').attr('disabled','disabled').addClass('disablePointer');
$(rowId + ' select').attr('disabled','disabled').addClass('disablePointer');
$(rowId + ' .glyphicon').unbind('click');
setTimeout(function(){$(rowId + '  img').each(function(){$(this).removeAttr('onclick')})
debugger;
},500);
var inp = $(rowId+' input')[6];
$(inp).val("0");

}


function changedEleFunc(rowid,num){
    if(submitted!=2){
        return;
    } 
var value = rowid.split('_');
var individualId = value[0];
changedEleArr.push(individualId+'$@$'+num);
}
/***********************************Function ends here*********************************************************/

var focusoutFunctionTextArea = function(){
     //  console.log('this isnewfucnuion            ',this);
            if($(this).hasClass('textAreaCheck')){
                 replaceTextBoxWithTextAreaAndViceVersa(this);
             }

}


var focusoutFunctionNameField = function(){

              var tdEle = $(this).parent('td');
                 tdEle = $(tdEle).parent('tr');
                tdEle = $(tdEle).attr('id');
/*     
var tdlVal = $(this).val();
            var tdEle = $(this).parent('td');
            var num = $(tdEle).prev()[0];
            num = num.innerHTML;
            tdEle = $(tdEle).parent('tr');
            tdEle = $(tdEle).attr('id');


            var value = tdEle.split('_');
            var individualId = value[0];
            $('.depDD_' + individualId).each(function() {
                num = $(this).text().match(/\d{1,9}/i)[0];
               // console.log('num is', num);
                var tdlValNew = num /*+ ' ' + tdlVa;
               // $(this).text(tdlValNew);
            //});
*/

      
   $(this).addClass("hide");

   $($(this).prev()[0]).removeClass("hide").text($(this).val());
   if($(this).val().trim()==""){
    $($(this).prev()[0]).css("padding-left","70px");
   }
   else{
     $($(this).prev()[0]).css("padding-left","0px");
   }
<<<<<<< HEAD
    debugger;
=======
   // debugger;
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        
updateAllArr(tdEle, 1);

}


var clickNameField = function(){
               var value = $(this).val();
               var newLength = value.length;
               if(newLength>35){
            replaceTextBoxWithTextAreaAndViceVersa(this);

               }

}


var nameFieldClassKeyPressFunc  = function(){
    var value = $(this).val();
               var newLength = value.length;
               if(newLength>35){
            replaceTextBoxWithTextAreaAndViceVersa(this);

               }

        someThingUpdated = 1;
        var rowid = $(this).parent('td').parent('tr').attr('id');
        changedEleFunc(rowid,1)
        showSaveSubmit();
$(this).removeClass('isEmptyTextBoxValidation');
    }


 var ddDepClassFunction =  function() {
             someThingUpdated = 1;

            // alert('sadasdasdasd');
            var idThis = $(this).attr('id');
            var thisIdArr = idThis.split('_');
            var thisInd = thisIdArr[0];
                var valThis = $(this).val();
              dependantsArr[thisInd]  = parseeIntForNan(valThis)
            if ($(this).val() != '0') {
                $(this).removeClass('isEmptyTextBoxValidation');
         }
            changedEleFunc(idThis,11);

         updateAllArr(idThis, 1);

            
        }

 var commentTextAreaFunction =function(e){
    var tdEle = $(this).parent('td');
    if(e.which == 13) {
        someThingUpdated = -1;
            showSaveSubmit();

        var longStr = $(this).val().trim();
         if(longStr==''){
            return;
         }
        var userNameWithdateTime = ' By '+ userName + ' On '+ getDateTimeNow();
        longStr = longStr + '  - <span style = "font-weight:lighter;color:#555">'+userNameWithdateTime+'</span>';   
    var str = '<div class="commentBox">'+longStr+'</div>';
       $(tdEle).prepend(str);
       $(this).val('');
       sleepFunctionForStoppingTime(100);
        $(this).focus();
  var trEle =  $(tdEle).parent('tr').prev()[0];
  var glyphElement  = $(trEle).children('td').children('.glyphicon-comment')[0];
   $(glyphElement).css('color','#730000');
}


//debugger;
}
var commentIconClickFunction = function(){
clicks++;
if(clicks === 1) {
 timer = setTimeout(function() {
     clicks = 0;             //after action performed, reset counter
      },500);
       } else {

            clearTimeout(timer);    //prevent single-click action
            clicks = 0;             //after action performed, reset counter
        }
   //console.log('hello');
   var thisTr = $(this) .parent('td').parent('tr'); 
    var idThis   = $(thisTr).attr('id');
    var value    =  idThis.split('_');
    var individualId = value[0]; 
    var nextTr = $(thisTr).next()[0];
   if($(this).hasClass('open')){
    appendDataIntoArray(nextTr,individualId);
    $(this).removeClass('open');
      $(nextTr).remove();
      return;
   }
   $(this).addClass('open');
var idThis = $(this).parent('td').parent('tr').attr('id');
var value  = idThis.split('_');
var individualId = value[0];
idThis = '#' +idThis;

<<<<<<< HEAD
var str = '<tr class = "commentTr"><td colspan="16"><textarea class = "commentTextArea" placeholder = "Enter Comment Here ..." autofocus></textarea></td></tr>'
=======
var str = '<tr class = "commentTr"><td colspan="13"><textarea class = "commentTextArea" placeholder = "Enter Comment Here ..."  autofocus></textarea></td></tr>'
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
$(idThis).after(str);
sleepFunctionForStoppingTime(200);
nextTr = $(thisTr).next()[0];
createNewCommentRows(individualId,nextTr);
$('.commentTextArea').keypress(commentTextAreaFunction);
<<<<<<< HEAD
=======
$('.commentTextArea').focus();
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
//if(allCommentsArr[individualId]

//debugger;
}


var datePickerFilterFunction = function() {

            var thisEle = this;
            var thisId = $(this).attr('id');
    
      

           if(thisId=='sDateFilter'){

              filterDate(4,thisEle);
           }

           if(thisId=='eDateFilter'){
                filterDate(5,thisEle);
         }
            if (thisId == 'pActSDateFilter') {
                 filterDate(6,thisEle);           // I don't want end date validation here .
            }

             if (thisId == 'pActEDateFilter') {
                 filterDate(7,thisEle); 
              }

            if (thisId == 'actEDateFilter'){
                           filterDate(8,thisEle); 
      //  I don't want end date validation here .
              }

          
                 
};

var dueDateFunction = function(){
      var val = $(this).val();
     // debugger;
        var dateNew = new Date();
       var todayDate = convertToString(dateNew);
            dateNew  = convertToDateTime(todayDate);
       var d  = dateNew.getDate();
       var m  = dateNew.getMonth();
       var y  = dateNew.getFullYear();
       var tommorowDate = new Date(y,m,d+1);
       var sevenDayLater =   new Date(y,m,d+7);  
       var trArr = $('#tbody123 tr');

          if(val==1){
                       for(var i =0;i<trArr.length;i++){
                
                    $(trArr[i]).removeClass('dueDateClass');
                    openAllForResourceFilter();
                   // debugger;
                }
                          
                }
     
      if(val==2){
                       for(var i =0;i<trArr.length;i++){
                             var actPlStartDate = $(trArr[i]).children('td').children('input')[3]; 
                                 actPlStartDate  = $(actPlStartDate).val();
                                 actPlStartDate  = convertToDateTime(actPlStartDate);
                              var actPlEDate     = $(trArr[i]).children('td').children('input')[4];
                                  actPlEDate     =  $(actPlEDate).val();
                                  actPlEDate     =  convertToDateTime(actPlEDate);
                                  if(actPlEDate==-1||actPlStartDate==-1){
                                    $(trArr[i]).addClass('dueDateClass')
                                  }
                                  else if((dateNew>=actPlStartDate)&&(dateNew<=actPlEDate)){
                                       $(trArr[i]).removeClass('dueDateClass');
                                               var imgEle = $(trArr[i]).children('td').children('img')[0];
                                   if($(imgEle).hasClass('plus')){
                                    $(imgEle).click();
                                  $(trArr[i]).addClass('thisWasClicked');
                                    }
                                  }
                                  else{
                                         $(trArr[i]).addClass('dueDateClass')
                                     }   
                            
                             //debugger;
                            }
                 
                }
    
if(val==3){
                       for(var i =0;i<trArr.length;i++){
                             var actPlStartDate = $(trArr[i]).children('td').children('input')[3]; 
                                 actPlStartDate  = $(actPlStartDate).val();
                                 actPlStartDate  = convertToDateTime(actPlStartDate);
                              var actPlEDate     = $(trArr[i]).children('td').children('input')[4];
                                  actPlEDate     =  $(actPlEDate).val();
                                  actPlEDate     =  convertToDateTime(actPlEDate);
                                  if(actPlEDate==-1||actPlStartDate==-1){
                                    $(trArr[i]).addClass('dueDateClass');

                                  }
                                  else if((dateNew>=actPlStartDate)&&(dateNew<=actPlEDate)||(tommorowDate>=actPlStartDate)&&(tommorowDate<=actPlEDate)){
                                       $(trArr[i]).removeClass('dueDateClass');
                                             var imgEle = $(trArr[i]).children('td').children('img')[0];
                                   if($(imgEle).hasClass('plus')){
                                    $(imgEle).click();
                                  $(trArr[i]).addClass('thisWasClicked');
                                    }
                                  }
                                  else{
                                         $(trArr[i]).addClass('dueDateClass')
                                     }   
                            
                            }
                 
                }


             if(val==4){
                       for(var i =0;i<trArr.length;i++){
                             var actPlStartDate = $(trArr[i]).children('td').children('input')[3]; 
                                 actPlStartDate  = $(actPlStartDate).val();
                                 actPlStartDate  = convertToDateTime(actPlStartDate);
                              var actPlEDate     = $(trArr[i]).children('td').children('input')[4];
                                  actPlEDate     =  $(actPlEDate).val();
                                  actPlEDate     =  convertToDateTime(actPlEDate);
                                  if(actPlEDate==-1||actPlStartDate==-1){
                                    $(trArr[i]).addClass('dueDateClass')
                                  }
                                  else if((dateNew>=actPlStartDate&&actPlEDate>=dateNew)||(actPlStartDate>=dateNew&&actPlStartDate<=sevenDayLater)){
                                       $(trArr[i]).removeClass('dueDateClass');
                                               var imgEle = $(trArr[i]).children('td').children('img')[0];
                                   if($(imgEle).hasClass('plus')){
                                    $(imgEle).click();
                                  $(trArr[i]).addClass('thisWasClicked');
                                    }
                                  }
                                  else{
                                         $(trArr[i]).addClass('dueDateClass')
                                     }   
                             // debugger;
                            }

     


                 
                }   


};


/*

dependencyMoveDates

Change of planned start date

1)On change(plus) of pl start Date change of pl end date  and all its children, act planned start date and related functionality.
2)On change(minus) of pl start Date change of pl end date and all its children, act planned start date and relaed functionality.
3) 

COMMENT

strikeout parent

1)Export to Excel
2)Show this project to.
3)Send Mail
4)Filter on each dates.



s dadas

sdsa
d
asd
sad
sa
dsa
da
sd
sad
sad
sad
sa
dsa
d





<span class = "namefieldClassSpan"></span>




*/
