function resetError() {
	$('.error').text('');
}
var commonTimeOut= function(name,time) {
      setTimeout(function(){ name.text(''); }, 4000);
};
function messageBox(message) {
	var msg=message;
	var messageBox ='<div class="modal fade" id="activeBugMasterMessageModal" role="dialog" data-backdrop="static" data-keyboard="false"><div class="modal-dialog"><div class="modal-content" id="activeBugMasterMsgBox"> <div class="modal-header text-center" style="border-top:0px;"> <span>Message</span> </div><div class="modal-body text-center"> <span id="cMessage1">'+msg+'</span> </div><div class="modal-footer text-center" style="border-top:0px;"> <button id="activeBugMasterCloseMessage" type="reset" data-dismiss="modal" class="btn btn-default" style="background-color:#f05f40;color:white;padding-top: 4px; width:100px;height:30px;margin-top:10px;">Close</button></div></div></div></div>';
	$("#ModalAddMesage").html(messageBox);
	$("#activeBugMasterMessageModal").modal("show");
};