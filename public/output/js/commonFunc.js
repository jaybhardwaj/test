// reset error to remove error and success messages
var resetError = function() {
	$('.error').text('');
}
// end reset error
// timeout function
var commonTimeOut= function(name,time) {
      setTimeout(function(){ name.text(''); }, 4000);
};
// end timeout function
// add id on page where you want to use this function eg. <div id="ModalAddMesage"></div>
function messageBox(message) {
	var msg=message;
<<<<<<< HEAD
	var messageBox ='<div class="modal fade" id="activeBugMasterMessageModal" role="dialog" data-backdrop="static" data-keyboard="false"><div class="modal-dialog"><div class="modal-content" id="activeBugMasterMsgBox"> <div class="modal-header text-center" style="border-top:0px;"> <span>Message</span> </div><div class="modal-body text-center"> <span id="cMessage1">'+msg+'</span> </div><div class="modal-footer text-center" style="border-top:0px;"> <button id="activeBugMasterCloseMessage" type="reset" data-dismiss="modal" class="btn btn-default" style="background-color:#f05f40;color:white;padding-top: 4px; width:100px;height:30px;margin-top:10px;">Close</button></div></div></div></div>';
=======
	var messageBox ='<div class="modal fade" id="activeBugMasterMessageModal" role="dialog" data-backdrop="static" data-keyboard="false"><div class="modal-dialog modal-sm"><div class="modal-content" id="activeBugMasterMsgBox"> <div class="modal-header text-center" style="border-top:0px;"> <h4>Message</h4> </div><div class="modal-body text-center"> <span id="cMessage1">'+msg+'</span> </div><div class="modal-footer text-center" style="border-top:0px;"> <button id="activeBugMasterCloseMessage" type="reset" data-dismiss="modal" class="btn btn-default" style="background-color:#f05f40;color:white;padding-top: 4px; width:100px;height:30px;margin-top:10px;">Close</button></div></div></div></div>';
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
	$("#ModalAddMesage").html(messageBox);
	$("#activeBugMasterMessageModal").modal("show");
}
// end messageBox
// add id on page where you want to use this function eg. <div id="ModalAddMesage"></div>
function messageBox2(message,value) {
	var msg=message;
<<<<<<< HEAD
	var messageBox ='<div class="modal fade" id="activeBugMasterMessageModal" role="dialog" data-backdrop="static" data-keyboard="false"><div class="modal-dialog"><div class="modal-content" id="activeBugMasterMsgBox"> <div class="modal-header text-center" style="border-top:0px;"> <span>Message</span> </div><div class="modal-body text-center"> <span id="cMessage1">'+msg+'</span> </div><div class="modal-footer text-center" style="border-top:0px;"> <button id="activeBugMasterCloseMessage" type="submit" data-dismiss="modal" class="btn btn-default" style="background-color:#f05f40;color:white;padding-top: 4px; width:100px;height:30px;margin-top:10px;" onclick='+value1+';>Close</button></div></div></div></div>';
=======
	var messageBox ='<div class="modal fade" id="activeBugMasterMessageModal" role="dialog" data-backdrop="static" data-keyboard="false"><div class="modal-dialog modal-sm"><div class="modal-content" id="activeBugMasterMsgBox"> <div class="modal-header text-center" style="border-top:0px;"> <h4>Message</h4> </div><div class="modal-body text-center"> <span id="cMessage1">'+msg+'</span> </div><div class="modal-footer text-center" style="border-top:0px;"> <button id="activeBugMasterCloseMessage" type="submit" data-dismiss="modal" class="btn btn-default" style="background-color:#f05f40;color:white;padding-top: 4px; width:100px;height:30px;margin-top:10px;" onclick='+value1+';>Close</button></div></div></div></div>';
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
	$("#ModalAddMesage").html(messageBox);
	$("#activeBugMasterMessageModal").modal("show");
}
// end messageBox
// add id on page where you want to use this function eg. <div id="ModalAdd"></div>
function confirmBox2(value,name,flag) { 
	var msg="";
	if(flag == 2) {
	msg +='Are you sure you want to Activate?';
	} else if(flag == 1){
	msg +='Are you sure you want to Dectivate?';  
	} else if(flag == 4){ 
	msg +='Are you sure you want to delete this mapping?';  
	} else if(flag == 5){ 
	msg +='Access for fusion will be revoked for this user.Do you want to continue?';  
	} else if(flag == 6) {
		msg +='Mail will be send to for activation.Do you want to continue?';
	} else if(flag == 7) {
		msg +='Do you want to create WBS?';
	} else if(flag == 8) {
		msg +='Do you want to make this project inactive?';
	} else if(flag == 9) {
		msg +='Do you want to make this project active?';
	}  
<<<<<<< HEAD
	var confirmBox ='<div class="modal fade" id="activeBugMasterModal" role="dialog" data-backdrop="static" data-keyboard="false"><div class="modal-dialog" id="commonModalId"><div class="modal-content" id="activeBugMasterCnfrmMsgBox"> <div class="modal-header text-center" style="border-top:0px;"> <span>Message</span> </div><div class="modal-body text-center"> <span id="cMessage1">'+msg+'</span> </div><div class="modal-footer text-center" style="border-top:0px;"> <button id="activeBugMasterCloseMessage" type="reset" data-dismiss="modal" class="btn btn-default" style="background-color:#f05f40;color:white;padding-top: 4px; width:100px;height:30px;margin-top:10px;">Cancel</button> <button id="activeBugMasterActive" type="submit" data-dismiss="modal" class="btn btn-default" style="background-color:#f05f40;color:white;padding-top: 4px; width:100px;height:30px;margin-top:10px;" onclick='+name+'('+value+');>Ok</button> </div></div></div></div>';
=======
	var confirmBox ='<div class="modal fade" id="activeBugMasterModal" role="dialog" data-backdrop="static" data-keyboard="false"><div class="modal-dialog modal-sm" id="commonModalId"><div class="modal-content" id="activeBugMasterCnfrmMsgBox"> <div class="modal-header text-center" style="border-top:0px;"> <h4>Message</h4> </div><div class="modal-body text-center"> <span id="cMessage1">'+msg+'</span> </div><div class="modal-footer text-center" style="border-top:0px;"> <button id="activeBugMasterCloseMessage" type="reset" data-dismiss="modal" class="btn btn-default">Cancel</button> <button id="activeBugMasterActive" type="submit" data-dismiss="modal" class="btn btn-default" style="background-color:#f05f40;color:white;padding-top: 4px; width:100px;height:30px;margin-top:10px;" onclick='+name+'('+value+');>Ok</button> </div></div></div></div>';
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
	$("#ModalAdd").html(confirmBox);
	$("#activeBugMasterModal").modal("show");
}
// end confirmBox2
// add id on page where you want to use this function eg. <div id="ModalAdd"></div>
function confirmBox3(value1,value2,flag) { 
	var msg="";
	if(flag == 2) {
	msg +='Are you sure you want to Activate?';
	} else if(flag == 1){
	msg +='Are you sure you want to Dectivate?';  
	} else if(flag == 4){ 
	msg +='Are you sure you want to delete this mapping?';  
	} else if(flag == 5){ 
	msg +='Access for fusion will be revoked for this user.Do you want to continue?';  
	} else if(flag == 6) {
		msg +='Mail will be send to for activation.Do you want to continue?';
	} else if(flag == 7) {
		msg +='Do you want to create WBS?';
	} else if(flag == 8) {
		msg +='Do you want to create more WBS and Assignment?';
	} else if(flag == 9) {
		msg +='WBS Added Successfully.Do you want to create more WBS?';
	}
<<<<<<< HEAD
	var confirmBox ='<div class="modal fade" id="activeBugMasterModal" role="dialog" data-backdrop="static" data-keyboard="false"><div class="modal-dialog" id="commonModalId"><div class="modal-content" id="activeBugMasterCnfrmMsgBox"> <div class="modal-header text-center" style="border-top:0px;"> <span>Message</span> </div><div class="modal-body text-center"> <span id="cMessage1">'+msg+'</span> </div><div class="modal-footer text-center" style="border-top:0px;"> <button id="activeBugMasterCloseMessage" type="submit" data-dismiss="modal" class="btn btn-default" style="background-color:#f05f40;color:white;padding-top: 4px; width:100px;height:30px;margin-top:10px;" onclick='+value2+';>Cancel</button> <button id="activeBugMasterActive" type="submit" data-dismiss="modal" class="btn btn-default" style="background-color:#f05f40;color:white;padding-top: 4px; width:100px;height:30px;margin-top:10px;" onclick='+value1+';>Ok</button> </div></div></div></div>';
=======
	var confirmBox ='<div class="modal fade" id="activeBugMasterModal" role="dialog" data-backdrop="static" data-keyboard="false"><div class="modal-dialog modal-sm" id="commonModalId"><div class="modal-content" id="activeBugMasterCnfrmMsgBox"> <div class="modal-header text-center" style="border-top:0px;"> <h4>Message</h4> </div><div class="modal-body text-center"> <span id="cMessage1">'+msg+'</span> </div><div class="modal-footer text-center" style="border-top:0px;"> <button id="activeBugMasterCloseMessage" type="submit" data-dismiss="modal" class="btn btn-default" onclick='+value2+';>Cancel</button> <button id="activeBugMasterActive" type="submit" data-dismiss="modal" class="btn btn-default" style="background-color:#f05f40;color:white;padding-top: 4px; width:100px;height:30px;margin-top:10px;" onclick='+value1+';>Ok</button> </div></div></div></div>';
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
	$("#ModalAdd").html(confirmBox);
	$("#activeBugMasterModal").modal("show");
}
// end confirmBox3