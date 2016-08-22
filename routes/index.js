'use strict'; 
   
var auth = require('./handlers/authentication');
var portal = require('./handlers/portal');
var render = require('./handlers/render');
var url = require('./handlers/url');
var url = require('./handlers/url');
var fs = require('fs'); 
var path = require('path');
var multer  = require('multer');
var upload = multer({ dest: 'attach/' });
var bodyParser=require('body-parser');
var busboy=require('busboy');
 
module.exports = function (app) {
	app.use(bodyParser.json());
app.use(bodyParser({
	keepExtensions:true,
	uploadDir: '../public/attach'
}));
  
//module.exports = function (app) {
	app.post('/registration', portal.registration);
	app.post('/recoverPassword', portal.recoverPassword);
	app.post('/login', auth.login);
  app.post('/getNotification', portal.notification);
  app.post('/updateNotification', portal.notification);
	app.post('/checkPassword', portal.checkPassword);
	app.post('/EmailVerification', portal.EmailVerification);
  app.get("/updateStatusReqViaMail",url.updateStatusReqViaMail,portal.updateStatusReq,render.redirect);

	app.get('/validateuser',portal.validateUser);  //index
	app.all('*', auth.checkauterization, render.redirect);
  app.use(portal.resetNotification);
	app.get('/', url.setpage, render.redirect);
	app.get('/portal',url.home, portal.home,render.redirect);
	app.get('/logout', portal.logout,render.redirect);
	app.post('/changePassword',portal.changePass);

	app.post('/exportToCsv',portal.exportToCsv);
	app.get('/getEmpData',url.getEmpData,portal.getEmpData);
	app.post('/addNewModules',portal.addNewModules);
app.post('/sendMailClient',portal.updateClientPassword,portal.sendMailClient);
app.post('/blockUser',portal.blockUser);
	
	//------------------------BUG-------------------------------------------------
	
	app.get('/bugHome',url.bugHome,portal.bugHome,render.redirect);
	app.post('/getAllBugtoexport',portal.exportBug);
	app.get('/viewBug',url.viewBug,portal.viewBug,render.redirect);
	app.get('/raiseBug',url.raiseBug,portal.raiseBug,render.redirect);
	app.post('/addBug',upload.single('addBugUpload'),url.addBug,portal.notification,portal.addBug,render.redirect);
	app.post('/bugDetails',url.bugDetails,portal.bugDetails,render.redirect);
	app.post('/updateBugDetails',url.updateBugDetails,portal.updateBugDetails,render.redirect);
	app.post('/addComment',url.addComment,portal.addComment,render.redirect);
	app.post('/bugAttachment',upload.single('addBugAttachment'),url.bugAttachment,portal.bugAttachment,render.redirect);
	app.post('/getAlltech',url.getAlltech,portal.getAlltech,render.redirect);
	app.post('/filterBug',url.filterBug,portal.filterBug,render.redirect);
	app.get('/filterBug',url.filterBug,portal.filterBug,render.redirect);
  app.post('/deleteBugAttach',portal.deleteBugAttach);
  app.post('/updatebugdescription',portal.updatebugdescription);


	//----------------------Document-------------------------------------------
    app.get('/document',url.setpageDocument,portal.getAllFiles,portal.getIndustry,portal.getBusiness,portal.getDocument,portal.getTechnology,portal.getRestriction,render.redirect);
    app.post('/attachDocFile',upload.single('attach'),url.setpageInsertDocument,portal.attachDocFile,render.redirect);
    app.get('/permission',url.setpagePermission,portal.setFilePermission,render.redirect);
    app.post('/confirmedFilePermission',url.setpageConfirmedFile,portal.confirmedFilePermission,render.redirect);
    app.post('/deleteFileByIdPermanentely',portal.deleteFileByIdPermanentely);
    app.post('/rejectFileById',url.setpageReject,portal.rejectFileById,render.redirect);
    app.get('/showRejectedFiles',url.setpageRejectedFiles,portal.showRejectedFiles,render.redirect);
    app.post('/tableSearchBox',portal.tableSearchBox);
  	app.post('/filterFiledata',portal.tableSearchBox);
    app.post('/viewFileDetails',portal.viewFileDetails);
    app.get('/setdocalert',portal.setdocalert);
    app.get('/verifyCustomRole',portal.verifyCustomRole);
    app.get('/myUploads',url.myUploads,portal.myUploads,render.redirect);
    app.post('/downloadFileCount',portal.downloadFileCount);

    //app.get('/Documenterror',url.Documenterror,render.redirect);
  
//------------------------------------------Asset-------------------------------
//jay
app.post('/selectAdminData',portal.selectAdminData);
app.post('/sendmailtouser',portal.sendmailtouser);
app.post('/sendemail',portal.sendemail);
app.post('/printexpense', portal.printexpense);
//jay
app.get('/inventory',url.inventory,portal.inventory,render.redirect);
app.post('/inventory',portal.inventoryAjax);
app.get('/transaction',url.setpageTransactions,portal.getUser,portal.getAssignedAssetsHome,render.redirect);
app.get('/assignSoftware',url.setpageAssignSoftware,portal.getComp,render.redirect);//new4assignsoft
app.get('/hardware',url.setpageHardware,portal.getComp,render.redirect);
app.post('/addHardware',url.setpageHardware,portal.addHardware,portal.getComp,render.redirect);
app.post('/addline',portal.addline);
app.post('/subaddline',portal.subaddline);
app.post('/getlineid',portal.getlineid);
app.post('/getcomponentfordescription',portal.descriptionforatr);
app.post('/updateTag',portal.updateTag);
app.post('/getlinevalue',portal.getlinevalue);
app.post('/deletesubline',portal.deletesubline);
app.post('/getbrand',portal.getbrand);
app.post('/getsubComponent',portal.getsubComponent);
app.post('/getsublinevalue',portal.getsublinevalue);
app.post('/showinfo',portal.showinfoOfInventory);
app.post('/getAttr',portal.getAttribute);
app.post('/getTransDetails',url.setpageTransAssigned,portal.getAssignedAssets,render.redirect);
app.post('/getUserInfoAsset',url.setpageTrans,portal.getUser,render.redirect);
app.get('/viewFurniture',url.setpageviewFurniture,portal.getViewFurniture,render.redirect);
app.get('/viewStationary',url.setpageviewStationary,portal.getViewStationary,render.redirect);
app.get('/addFurniture1',url.setpageaddFurniture,portal.addFurniture1,render.redirect);
app.post('/addFurniture',url.setpageviewFurniture,portal.addFurniture,portal.getViewFurniture,render.redirect)
app.get('/addStationary',url.setpageAddStation,portal.addFurniture1,render.redirect);
app.post('/addStationary',url.setpageviewStationary,portal.addStation,portal.getViewStationary,render.redirect)
app.get('/viewHardware',url.setpageViewHardware,portal.getViewHardware,portal.getComp,render.redirect);//new4hardware
app.post('/getEditHardware',url.editHardware,portal.editHardware,render.redirect);//new4hard
app.post('/updateHardware',url.setUpdateHardware,portal.updateHardware,render.redirect);//newhard
app.post('/deleteHeader',url.setDelete,portal.deleteData,render.redirect);
app.post('/deleteHeaderandline',url.setDelete,portal.deletehardware);
app.post('/deletesoftware',url.setDelete,portal.deletesoft);
app.post('/getEditStationary',url.setEdit,portal.editData,render.redirect);
app.post('/updateFurniture',url.setUpdate,portal.updateFurniture,render.redirect);
app.post('/updateStationary',url.setUpdatestat,portal.updateStation,render.redirect);
app.get('/viewSoftware',url.setpageviewSoftware,portal.getViewSoftware,render.redirect);
app.get('/addSoftware',url.setpageaddSoftware,portal.getComp,render.redirect);//new 4 dynamic
app.post('/submitSoftwareDetails',url.setpageviewSoftwareDetails,portal.addSoftware,portal.getViewSoftware,render.redirect)
app.post('/updateSoftware',url.setUpdateSoft,portal.updateSoft,render.redirect);
app.post('/getTransComp',url.setpageTransUnassigned,portal.getAtt,render.redirect);
app.post('/getTransUnassigned',url.setpageTransUnassigned,portal.getUnassigned,render.redirect);
app.post('/getAccUnassigned',url.setpageTransUnassigned,portal.getAccessories,render.redirect);
app.post('/saveAssignment',url.setpageTransa,portal.saveAssignment,render.redirect);
app.post('/saveMaster',url.setpageSett,portal.saveAssetMap,portal.getMap,render.redirect);
app.get('/settings',url.setpageSettings,portal.getDataAsset,render.redirect);
app.post('/assetComponent',url.setpageSet,portal.getComp,render.redirect);
app.post('/getMapping',url.setpageSett,portal.getMap,render.redirect);
app.get('/AssignAsset',url.setpageTransactionsasset,portal.getUser,portal.assignedAssets,render.redirect);




//---------------------------------Expense------------------------------------------
	app.get('/expense',url.setExpense, portal.getExpense,portal.getRole,render.redirect);
	app.get('/expensenew',url.setNewExpense, portal.getNewExpense,portal.getRole,render.redirect);
	//app.post('/insertExpense',url.setexpensehomenewbyInsert, portal.insertExpense,portal.getRole,render.redirect);
   app.post('/insertExpense', portal.insertExpense);
	app.post('/insertExpense', portal.insertExpense);
	app.post('/fileAttechment',upload.single('comment-upload'),url.setexpensehomenew, portal.insertExpenseAttachment,portal.getRole,render.redirect);	
    app.post('/deleteExpense',url.setNewExpense, portal.deleteExpense,portal.getRole);
    app.post('/selectExpense',url.setNewExpense, portal.selectExpense,portal.getRole);
    app.post('/expenseApprove',url.setNewExpense, portal.approveExpense,portal.getRole,render.redirect);
    app.post('/expenseSubmit',url.setExpense, portal.submitExpense,portal.getRole);
    app.post('/ShowExpenseByapprover',url.setExpense, portal.ShowExpenseapprover,portal.getRole);
    app.post('/ShowExpenseWeekBy',url.setNewExpense, portal.getExpenseWeekBy,portal.getRole);
    app.get('/expensemaster',url.setExpenseMaster, portal.select_ExpenseMaster,portal.getRole,render.redirect);
    app.post('/insertExpenseMaster', portal.insert_Expense);
    app.post('/updatesencationAmount', portal.updatesencationAmount);
   // app.post('/expensemaster',url.setNewExpense, portal.update_Expense,portal.getRole,render.redirect);
    app.post('/expenseUser',url.setNewExpense, portal.selectByExpenseUser,portal.getRole);
    app.post('/getexpensemaster',url.setExpenseMaster, portal.selectExpensebyId,portal.getRole);
    app.post('/showMasterExpense',url.setExpenseMaster, portal.selectMasterExpense,portal.getRole);
    app.post('/expenseblableornot',url.setNewExpense, portal.getMaxBillExpense,portal.getRole);
    app.post('/reSubmit',url.setNewExpense, portal.reSubmitExpense,portal.getRole);
      app.post('/showremarkandcomment',url.setNewExpense, portal.remarkAndCommentExpense,portal.getRole);
  app.post('/checkExpenseSubmitOrNot',url.setNewExpense,portal.checkExpenseSubmitOrNot,portal.getRole);
    app.post('/reSubmitforcopy',url.setNewExpense, portal.reSubmitExpenseforCopy,portal.getRole);
    app.get('/expenseDetails',url.setExpenseDetails,portal.getRole,render.redirect);
    app.get('/expenseother',url.setOtherExpense,portal.getExpense,portal.getRole,render.redirect); 
    app.post('/expenseAdmin', portal.selectByExpenseAdmin,portal.getRole);
    app.post('/checkFinancemanager', portal.checkFinancemanager,portal.getRole);
    app.post('/getBillableUsers', portal.getBillableUsers,portal.getRole);

   //---------------------------------TimeSheet-----------------------------------------
 app.post('/uploadattendance',upload.array('file',2),portal.uploadattendance);
	app.get('/timesheet',url.fillTimeSheet,portal.getTimeSheetData,render.redirect);
    app.post('/submitTimesheet', portal.notification, portal.submitTimesheet);
     app.post('/submitTimesheetAssignment',portal.submitTimesheetAssignment);
      app.post('/checkUserTimesheet',portal.checkUserTimesheet);
       app.post('/getUserUnderSupervisor',portal.getUserUnderSupervisor);
       app.get('/otherTimeSheet',url.otherTimeSheet,render.redirect);

       app.post('/otherTimeSheet_setPage',portal.otherTimeSheet_setPage);


       app.post('/ApprovedOrReject', portal.notification, portal.ApprovedOrReject);
          app.post('/SubmitRejectReason',portal.SubmitRejectReason);


//--------------------------------------------HR -------------------------------------------------------------->
app.get('/rms',url.hr,render.redirect);
app.post('/dashboardData',portal.dashboardData);
app.get('/raiseRequisition',url.raiseRequisition,portal.raiseRequisition,render.redirect) ;
app.post('/raiseRequisition',portal.raiseRequisition1) ;
//app.get('/reqHod',url.reqHod,portal.reqHod,render.redirect);
app.get('/allrequisitions',url.allrequisitions,portal.allrequisitions,render.redirect);
app.post('/reqData',portal.reqData);
app.post('/deleteReq',portal.deleteReq);
app.get('/viewCandidate',url.viewCandidate,portal.viewCandidate,render.redirect);
app.post('/viewCandidate',portal.viewCandidate1);
app.post('/getCandidate',portal.getCandidate);
app.post('/editCandidate',portal.editCandidate);
app.post("/getAllTag",portal.getAllTag);
app.post("/addTag",portal.addTag);
app.post('/reqData',portal.reqData);
app.get("/upload",url.upload,portal.upload,render.redirect);
app.post('/parserTable',portal.parserTable);
app.post('/submitparsedData',url.submitparsedData, portal.submitParseData,render.redirect);
app.post('/upload_resume', upload.single('attach'),portal.upload_resume);
app.post('/deleteUploadRecords',portal.deleteUploadRecords);
app.get("/viewReq",url.viewReq,portal.viewReq,render.redirect);
//app.get("/userHrViewReq",url.userHrViewReq,portal.userHrViewReq,render.redirect);
app.post("/search",portal.searchHr);
app.post("/asearch",portal.advancesearchHr);
app.post("/interviewerInfo",portal.interviewerInfo);
app.get("/interview",url.interview,render.redirect);
app.post("/updateStatusReq",portal.updateStatusReq);

app.post("/getReleventTag",portal.getReleventTag);
app.post("/removeTag",portal.removeTag);
app.post("/getreleventState",portal.getreleventState);
app.post("/addQuickTag",portal.addQuickTag);
app.post("/quickdeletecandidate",portal.quickdeletecandidate);
app.post('/getallmanager',portal.getallmanager);
app.post('/getscheduleInfo',portal.getscheduleInfo);
app.post('/deletehistory',portal.deletehistory);
app.post('/scheduleInterview',url.scheduleInterview,portal.scheduleInterview,render.redirect);
app.post('/addTag',portal.addTag);
app.post('/savehrm',portal.saveHrm);
app.post('/selectAdminHr',portal.selectAdminHr);
app.post('/updateCandidate',portal.updateCandidate);
app.post('/interviewData', upload.single('feedback'),portal.interviewData);
app.get('/interviewFeedback',url.interviewFeedback,portal.interviewFeedback,render.redirect);
//app.get('/reqApprover',url.reqApprover,portal.reqApprover,render.redirect);

app.post('/error',url.error,render.redirect);
 app.post('/getClientContacts',portal.getClientContacts);
 app.post('/addeditClientContacts',portal.addeditClientContacts);

//-----------------------------------------Project------------------------------------------
app.get('/task',url.task,portal.task,render.redirect);
app.get('/resourceView',url.resource,portal.getAllResources,render.redirect);
app.post('/projectByResource',portal.projectByResource);
app.post('/emptyProj',portal.emptyProj);
app.post('/saveTask',portal.saveTask);
app.get('/projStatus',url.projStatus,portal.projStatus,render.redirect);
app.post('/insNewVer',portal.insNewVer);
app.post('/createExcelProj',portal.createExcelProj);

/*latest change by saurav*/
    app.get('/changePassWordPage',url.changePassWordPage,render.redirect);
    app.post('/submitUserPassword',portal.submitUserPassword);
    /*----*/

 app.post('/changeSupervisor',portal.changeSupervisor);


 app.use(function(req, res,next) {
    if(!(req.session.asstroleid==1 || req.session.roleId==1)){
      res.redirect('/portal');
    }
    else{
      next();
    }
  });
    app.get('/masters',url.setpagemasters,portal.settingdata,portal.setaddStatuss,
      portal.holidayhome,portal.select_ExpenseMaster,
      portal.getDataAsset,
      portal.getCustomRole,portal.getIndustry,portal.getBusiness,
      portal.getDocument,portal.getTechnology,portal.getRestriction,portal.getRole,
      render.redirect);


//-------------------------Admin Routes----------------------------------------------------
/* app.use(function(req, res,next) {
    if(req.session.roleId!=1){
    	res.redirect('/portal');
    }
    else{
    	next();
    }
  });
*/
    //----------------------Masters-------index------------------------------------------
 
    //app.post('/addStatuss',portal.setaddStatuss);
	app.post('/settingdata',portal.settingdata);
	app.post('/getothermaster',portal.getothermaster);
	
<!------ srv-------->
	 
	//**change
    /*app.get('/masters',url.setpagemasters,portal.settingdata,portal.setaddStatuss,
    	portal.holidayhome,portal.select_ExpenseMaster,
    	//portal.getDataAsset,
    	portal.getCustomRole,portal.getIndustry,portal.getBusiness,
    	portal.getDocument,portal.getTechnology,portal.getRestriction,portal.getRole,
    	render.redirect);*/
	app.post('/selectStatus',portal.selectStatus);
	app.post('/updateStatus',portal.updateStatus);
	app.post('/addStatus',portal.addStatus);

//------------Users-----------------------------
	//app.get('/users',url.setpageUser, portal.getUser,portal.getRole,portal.getCustomRole,render.redirect);
	//app.post('/createEditUser',url.setpagecreateEditUser,portal.getUser,portal.getRole,portal.getCustomRole,render.redirect);
	//app.post('/addUser', portal.addUser,render.redirect);
	app.post('/changeClientStatus', portal.changeClientStatus,render.redirect); 
	/*app.post('/clientStatus',portal.getClientStatus,render.redirect);*/

	app.get('/users',url.setpageUser, portal.getUser,portal.getRole,portal.getCustomRole,render.redirect);
    app.post('/createEditUser',url.setpagecreateEditUser,portal.getClient,portal.getUser,portal.getRole,portal.getCustomRoleforUser,
	portal.getDepartment,portal.getLevel,portal.getModules,portal.getHrRole,render.redirect);


    app.post('/next_prev_user',url.setpagecreateEditUser,portal.getClient,portal.checkNextUser,portal.getUser,
      portal.getRole,portal.getCustomRoleforUser,
  portal.getDepartment,portal.getLevel,portal.getModules,portal.getHrRole,render.redirect);




	app.post('/addUser', portal.addUser,render.redirect);
	app.post('/userStatus',portal.userStatus);
    app.post('/changeUserStatus', portal.changeUserStatus,render.redirect);
	//-----------------Clients-----------
	app.get('/clients',url.setpageClient, portal.getClient,render.redirect);
	app.post('/createEditClient',url.setpagecreateEditClient,portal.getClient,render.redirect);
	app.post('/addEditClient', url.addEditClient,portal.addEditClient,render.redirect);
	app.post('/createClient', url.setpagecreateEditClient,portal.addEditClient,render.redirect);
	//app.get('/showEditClient', url.setpagecreateEditClient,portal.getClient,render.redirect);
    app.get('/mailServerInfo',url.setpagemailserverInfo,portal.mailServerInfo,render.redirect);
    app.post('/mailServerConfigure',url.setpagemailserverConfigure,portal.mailServerConfigure,render.redirect);


	//--------------Profile---------------
	app.get('/profile',url.setProfile,portal.profile,render.redirect);
	app.post('/updateProfile',upload.single('logo'),url.updateProfile,portal.updateProfile,render.redirect);
	
	//--------------Dashboards------------

    app.get('/reports',url.setDashboard,portal.profile,render.redirect);
 //------------------------------------Project -WBS ------------------------------------------

    
	app.get('/projectDetails',url.setProject, portal.projectDetails,render.redirect);
	app.post('/projectStatus', portal.projectStatus,render.redirect);
	app.post('/changeProjectStatus', portal.changeProjectStatus,render.redirect);
	app.get('/addEditProject',url.setAddEditProject, portal.addEditProject,render.redirect);
	app.post('/addEditPro',url.setAddEditPro,portal.addEditPro,render.redirect);

	app.post('/projectAddEdit',url.setProjectAddEdit,portal.projectAddEdit,portal.getRole,render.redirect);
	//app.post('/projectAddEditDetails',url.setProjectAddEditDetails, portal.projectAddEditDetails,render.redirect);
	app.post('/projectAddEditDetailsWithFlag',url.setProjectAddEditDetailsWithFlag, portal.projectAddEditDetailsWithFlag,render.redirect);

	app.get('/projectWbs',url.setProjectWbs,portal.projectWbs,render.redirect);

	app.get('/wbsDetails',url.wbsDetails, portal.wbsDetails,render.redirect);
	app.post('/wbsStatus', portal.wbsStatus,render.redirect);
	app.post('/changeWbsStatus', portal.changeWbsStatus,render.redirect);
	app.get('/addEditWbs',url.setAddEditWbs, portal.addEditWbs,render.redirect);
	app.post('/addEditWbsDetails',url.setAddEditWbsDetails,portal.addEditWbsDetails,render.redirect);

app.post('/getAllWbsForProject', portal.getAllWbsForProject,render.redirect);


app.post('/AssignmentWBSForProject', portal.AssignmentWBSForProject,render.redirect);

app.post('/updateAssignmentWBSForProject', portal.updateAssignmentWBSForProject,render.redirect);

app.post('/getProjectAssignment', portal.getProjectAssignment,render.redirect);

app.post('/changeProjectAssignment', portal.changeProjectAssignment,render.redirect);

app.post('/projectWbsForAssignment', portal.projectWbsForAssignment,render.redirect);

app.post('/changeProjectWbs', portal.changeProjectWbs,render.redirect);

app.post('/clientContactAccToClient', portal.clientContactAccToClient,render.redirect);

  app.post('/wbsAssignmentInProjectWbs',portal.wbsAssignmentInProjectWbs,render.redirect);

  app.post('/checkProjectWbsDate', portal.checkProjectWbsDate,render.redirect);

  //------------new route

  app.post('/checkUsersInProject', portal.checkUsersInProject,render.redirect);


	//---------------------------------------ASSIGNMENT---------------------------------------

	app.get('/assignment',url.setpageAssignment, portal.getAssignment,render.redirect);
	app.get('/changeAssignmentStatus',url.setpageChangeAssignmentStatus, portal.changeAssignmentStatus,render.redirect);
	app.get('/createAssignment',url.setpageCreateEditAssignment, portal.createEditAssignment,render.redirect);
	app.post('/submitAssignment',url.setpageSubmitAssignment,portal.submitAssignment,render.redirect);

	/*------------------------------------------------------------------Holiday------------------------------------------------------------*/

    app.post('/selectidHoliday',portal.selectHolidaybyId);
    app.post('/updateHoliday',portal.updateHoliday);

	/*--------------------------------------------------------------calender Setting-------------------------------------------------------*/
   app.get('/calSetting',url.setcalSettingpage,render.redirect);

   app.post('/addSchedule',url.setcalSettingpage,portal.calSetting,render.redirect);
   app.post('/checkShedule',portal.checkShedule);


	app.get('/customRoles',url.setpagecustomRoles,portal.getCustomRole,portal.getIndustry,portal.getBusiness,portal.getDocument,portal.getTechnology,portal.getRestriction,render.redirect);
    app.post('/customRoles',url.setpagecustomRoles,portal.getCustomRole,portal.getIndustry,portal.getBusiness,portal.getDocument,portal.getTechnology,portal.getRestriction,render.redirect);
     app.post('/selectidRole',portal.getCustomRoleById);
    app.post('/customRolesEntry',url.setpageaddcustomRoles,portal.addCustomRole,render.redirect);
    app.post('/customRolesUpdate',portal.updateCustomRole);
    app.post('/docActiveInactive',portal.docActiveInactive);
    app.post('/getRolesInfo',portal.getRolesInfo);
	app.post('/addEditClientAjax',portal.addEditClientAjax);
      app.post('/fileDetialsUpdate',portal.fileDetialsUpdate);


	<!----- srvvvvvvvvvvvvvvvvvvvvv      -->
	app.post('/getind',portal.getind);
	app.post('/getdoc',portal.getdoc);
	app.post('/getbus',portal.getbus);
	app.post('/gettec',portal.gettec);
	app.post('/getres',portal.getres);
	app.post('/Docmaster',portal.Docmaster);
	app.post('/addeditComponent',portal.addeditComponent);
	app.post('/addeditattribute',portal.addeditattribute);
	app.post('/addeditvalue',portal.addeditvalue);
	app.post('/getAttrAndValForAsset',portal.getAttrAndValForAsset);
	app.post('/addattrvaluemapping',portal.addattrvaluemapping);
	app.post('/addComponentAttributemapping',portal.addComponentAttributemapping);
	app.post('/deleteComponentAttributeMapping',portal.deleteComponentAttributeMapping);
	app.post('/inactiveAssetMaster',portal.inactiveAssetMaster);
	app.post('/addeditBrandName',portal.addeditBrandName);

<!-- test api -->
app.get('/parse1', function(req, res, next) {
    var test=
    [{"id":40,"firstName":"Amit","lastName":"K","userEmail":"amit@polestarllp.com","contactNumber":"9540737271","userPassword":"$2a$04$2qLfEToqanf21qrL.uooqu76fQ7aU.cGl.Ppn5WHqlte2uHbjgGbS","roleId":1,"retailerId":11,"managerId":40,"createdDate":"2016-04-13 09:45:23","createdBy":null,"lastModifiedDate":"2016-05-30 13:38:20","lastModifiedBy":null,"isClient":0,"clientId":0,"isValidated":1,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":0,"crole_id":1,"timeApproval":null,"attr3":null,"isApproval":0,"approveLimit":0,"doj":null,"dob":null,"doc":null,"ecode":null,"designation":null,"level":null,"modules":null,"userId":null,"rtype":null,"isRetailer":"1","hrRole":3,"hodId":null}];
   res.json(test);
});
app.get('/json1', function(req, res, next){
  console.log("--  ");
    var json =
  [[{"id":40,"firstName":"Amit","lastName":"K","userEmail":"amit@polestarllp.com","contactNumber":"9540737271","userPassword":"$2a$04$2qLfEToqanf21qrL.uooqu76fQ7aU.cGl.Ppn5WHqlte2uHbjgGbS","roleId":1,"retailerId":11,"managerId":40,"createdDate":"2016-04-13 09:45:23","createdBy":null,"lastModifiedDate":"2016-05-30 13:38:20","lastModifiedBy":null,"isClient":0,"clientId":0,"isValidated":1,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":0,"crole_id":1,"timeApproval":null,"attr3":null,"isApproval":0,"approveLimit":0,"doj":null,"dob":null,"doc":null,"ecode":null,"designation":null,"level":null,"modules":null,"userId":null,"rtype":null,"isRetailer":"1","hrRole":3,"hodId":null},{"id":41,"firstName":"Anuj","lastName":"Singh","userEmail":"anuj.singh@polestarllp.com","contactNumber":"","userPassword":"9","roleId":2,"retailerId":11,"managerId":95,"createdDate":"2016-04-13 09:51:26","createdBy":40,"lastModifiedDate":"2016-04-13 09:51:26","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":1,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1001","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":42,"firstName":"Avinash","lastName":"Gautam","userEmail":"avinash.gautam@polestarllp.com","contactNumber":"","userPassword":"1","roleId":2,"retailerId":11,"managerId":95,"createdDate":"2016-04-13 09:52:28","createdBy":40,"lastModifiedDate":"2016-05-19 13:18:46","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":1,"isActive":1,"isBillable":0,"billingAmount":"","defaultModuleId":1,"crole_id":0,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1053","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":3,"hodId":95},{"id":43,"firstName":"Shubham","lastName":"Agarwal","userEmail":"shubham.agarwal@polestarllp.com","contactNumber":"","userPassword":"1","roleId":2,"retailerId":11,"managerId":42,"createdDate":"2016-04-13 10:13:43","createdBy":40,"lastModifiedDate":"2016-04-13 10:39:24","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":1,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1124DL","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":45,"firstName":"Manu","lastName":"Rajput","userEmail":"manu.rajput@polestarllp.com","contactNumber":"","userPassword":"1","roleId":2,"retailerId":11,"managerId":42,"createdDate":"2016-04-13 10:17:02","createdBy":40,"lastModifiedDate":"2016-04-13 10:38:33","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":1,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1121","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":46,"firstName":"Jyoti","lastName":"Bisht","userEmail":"jyoti.bisht@polestarl1lp.com","contactNumber":"8527797969","userPassword":"1","roleId":2,"retailerId":11,"managerId":42,"createdDate":"2016-04-13 10:18:01","createdBy":40,"lastModifiedDate":"2016-04-19 05:12:14","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":1,"isActive":1,"isBillable":0,"billingAmount":"-9","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1107","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":47,"firstName":"Deepak","lastName":"Singh","userEmail":"deepak.singh@polestarllp.com","contactNumber":"","userPassword":"1","roleId":2,"retailerId":11,"managerId":42,"createdDate":"2016-04-13 10:21:25","createdBy":40,"lastModifiedDate":"2016-04-18 05:41:22","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":1,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1097","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":48,"firstName":"Sudhakar","lastName":"Pandey","userEmail":"sudhakar.pandey@polestarllp.com","contactNumber":"","userPassword":"3MbAbnv7oV","roleId":2,"retailerId":11,"managerId":42,"createdDate":"2016-04-13 10:22:09","createdBy":40,"lastModifiedDate":"2016-04-13 10:38:11","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":1,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1120","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":49,"firstName":"Jogendra","lastName":"Singh","userEmail":"jo@polestarllp.com","contactNumber":"","userPassword":"d40fdo8CCx","roleId":2,"retailerId":11,"managerId":42,"createdDate":"2016-04-13 10:23:17","createdBy":40,"lastModifiedDate":"2016-05-30 06:36:15","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":1,"isActive":1,"isBillable":0,"billingAmount":"","defaultModuleId":1,"crole_id":0,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1098","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":5,"hodId":0},{"id":50,"firstName":"Sonia","lastName":"Ghanghas","userEmail":"sonia.ghanghas@polestarllp.com","contactNumber":"","userPassword":"We9rWC1pf5","roleId":2,"retailerId":11,"managerId":41,"createdDate":"2016-04-13 10:30:08","createdBy":40,"lastModifiedDate":"2016-04-13 10:36:41","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":0,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1122","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":51,"firstName":"Abhilash","lastName":"Kushwaha","userEmail":"abhilash.kushwaha@polestarllp.com","contactNumber":"","userPassword":"fXZnaOL6qZ","roleId":2,"retailerId":11,"managerId":41,"createdDate":"2016-04-13 10:32:39","createdBy":40,"lastModifiedDate":"2016-04-13 10:36:25","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":1,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1022","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":52,"firstName":"Man","lastName":"Singh","userEmail":"man.singh@polestarllp.com","contactNumber":"","userPassword":"gp4rdTmQX6","roleId":2,"retailerId":11,"managerId":41,"createdDate":"2016-04-13 10:33:53","createdBy":40,"lastModifiedDate":"2016-04-13 10:36:07","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":1,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1109","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":53,"firstName":"Yash","lastName":"Tomar","userEmail":"yashpal.tomar@polestarllp.com","contactNumber":"","userPassword":"ZSxHziptyi","roleId":2,"retailerId":11,"managerId":41,"createdDate":"2016-04-13 10:41:43","createdBy":40,"lastModifiedDate":"2016-04-13 10:41:54","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":0,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1085AP","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":54,"firstName":"Abrar","lastName":"Ansari","userEmail":"abrar.ansari@polestarllp.com","contactNumber":"","userPassword":"Welcome@19","roleId":2,"retailerId":11,"managerId":41,"createdDate":"2016-04-13 10:43:42","createdBy":40,"lastModifiedDate":"2016-04-13 10:43:53","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":1,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1113","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":55,"firstName":"Chirag","lastName":"Singh","userEmail":"chirag.singh@polestarllp.com","contactNumber":"","userPassword":"1sgKXqJv54","roleId":2,"retailerId":11,"managerId":41,"createdDate":"2016-04-13 10:48:11","createdBy":40,"lastModifiedDate":"2016-04-13 10:48:26","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":1,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1052","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":59,"firstName":"Jatin","lastName":"Bansal","userEmail":"jatin.bansal@polestarllp.com","contactNumber":"","userPassword":"JTspXKXtvR","roleId":2,"retailerId":11,"managerId":58,"createdDate":"2016-04-13 11:12:35","createdBy":40,"lastModifiedDate":"2016-04-13 11:12:44","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":0,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1103","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":60,"firstName":"Neelam","lastName":"Kumari","userEmail":"neelam.kumari@polestar.com","contactNumber":"","userPassword":"zgfqFEplK3","roleId":2,"retailerId":11,"managerId":58,"createdDate":"2016-04-13 11:16:23","createdBy":40,"lastModifiedDate":"2016-04-13 11:16:32","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":0,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1130","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":61,"firstName":"Prashant","lastName":"Kumar","userEmail":"prashant.kumar@polestarllp.com","contactNumber":"","userPassword":"4uNZljTOBN","roleId":2,"retailerId":11,"managerId":58,"createdDate":"2016-04-13 11:18:20","createdBy":40,"lastModifiedDate":"2016-04-13 11:18:28","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":0,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1105","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":62,"firstName":"Rahul","lastName":"Kumar","userEmail":"rahul.kumar@polestarllp.com","contactNumber":"","userPassword":"i3nBccbSOY","roleId":2,"retailerId":11,"managerId":58,"createdDate":"2016-04-13 11:19:23","createdBy":40,"lastModifiedDate":"2016-04-13 11:19:28","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":0,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1106","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":63,"firstName":"Sagarika","lastName":"Behera","userEmail":"Sagarika.behera@polestarllp.com","contactNumber":"","userPassword":"Je4zGzVcug","roleId":2,"retailerId":11,"managerId":58,"createdDate":"2016-04-13 11:20:32","createdBy":40,"lastModifiedDate":"2016-04-13 11:20:43","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":0,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1125","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":64,"firstName":"Pratyush","lastName":"Raitan","userEmail":"Pratyush.raitan@polestarllp.com","contactNumber":"","userPassword":"C5ilIJJEM5","roleId":2,"retailerId":11,"managerId":42,"createdDate":"2016-04-13 11:22:01","createdBy":40,"lastModifiedDate":"2016-04-13 11:22:10","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":0,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1131","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":65,"firstName":"Sumit","lastName":"Kumar","userEmail":"sumit.kumar@polestarllp.com","contactNumber":"","userPassword":"NpASfPcJkk","roleId":2,"retailerId":11,"managerId":41,"createdDate":"2016-04-13 11:23:35","createdBy":40,"lastModifiedDate":"2016-04-13 11:23:44","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":0,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1137","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":66,"firstName":"Abhishek","lastName":"Pathak","userEmail":"abhishek.pathak@polestarllp.com","contactNumber":"","userPassword":"DGCj4sn5Oz","roleId":2,"retailerId":11,"managerId":42,"createdDate":"2016-04-13 11:24:34","createdBy":40,"lastModifiedDate":"2016-04-13 11:24:45","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":0,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1139","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":67,"firstName":"Prashant","lastName":"Shukla","userEmail":"prashant.shukla@polestarllp.com","contactNumber":"","userPassword":"xjGP0uBuKz","roleId":2,"retailerId":11,"managerId":41,"createdDate":"2016-04-13 11:25:49","createdBy":40,"lastModifiedDate":"2016-04-13 11:26:00","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":0,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1140","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":68,"firstName":"Ritesh","lastName":"Singh","userEmail":"ritesh.singh@polestarllp.com","contactNumber":"","userPassword":"1","roleId":2,"retailerId":11,"managerId":40,"createdDate":"2016-04-13 11:26:54","createdBy":40,"lastModifiedDate":"2016-04-25 13:39:19","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":1,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1141","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":70,"firstName":"Alisha","lastName":"Surabhi","userEmail":"alisha.surabhi@polestarllp.com","contactNumber":"","userPassword":"NJ72YgP9bC","roleId":2,"retailerId":11,"managerId":41,"createdDate":"2016-04-13 11:34:43","createdBy":40,"lastModifiedDate":"2016-04-13 11:34:52","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":0,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1148","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":71,"firstName":"Gulam","lastName":"Navi","userEmail":"gulam.navi@polestarllp.com","contactNumber":"","userPassword":"1","roleId":2,"retailerId":11,"managerId":41,"createdDate":"2016-04-13 11:37:08","createdBy":40,"lastModifiedDate":"2016-04-13 11:37:08","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":1,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1149","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":72,"firstName":"Bhuvan","lastName":"Agarwal","userEmail":"bhuvan.agarwal@polestarllp.com","contactNumber":"","userPassword":"qwLOeRDanT","roleId":2,"retailerId":11,"managerId":41,"createdDate":"2016-04-13 11:39:00","createdBy":40,"lastModifiedDate":"2016-04-13 11:39:08","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":0,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1150","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":73,"firstName":"Mohd","lastName":"Tahir","userEmail":"mohd.tahir@polestarllp.com","contactNumber":"","userPassword":"QTkRDZlsE8","roleId":2,"retailerId":11,"managerId":41,"createdDate":"2016-04-13 11:40:53","createdBy":40,"lastModifiedDate":"2016-04-13 11:40:57","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":0,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1151","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":74,"firstName":"Shraddha","lastName":"Saxena","userEmail":"shraddha.saxena@polestarllp.com","contactNumber":"","userPassword":"GQgiQRugfZ","roleId":2,"retailerId":11,"managerId":41,"createdDate":"2016-04-13 11:43:07","createdBy":40,"lastModifiedDate":"2016-04-13 11:43:15","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":0,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1152","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":75,"firstName":"Pramod","lastName":"Maurya","userEmail":"pramod.maurya@polestarllp.com","contactNumber":"","userPassword":"NUjuAexLLc","roleId":2,"retailerId":11,"managerId":41,"createdDate":"2016-04-13 11:45:18","createdBy":40,"lastModifiedDate":"2016-04-13 11:45:27","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":0,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1153","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":76,"firstName":"Rajeev","lastName":"Upadhyay","userEmail":"rajeev.upadhyay@polestarllp.com","contactNumber":"","userPassword":"q221KHzY5c","roleId":2,"retailerId":11,"managerId":41,"createdDate":"2016-04-13 11:46:41","createdBy":40,"lastModifiedDate":"2016-04-13 11:46:51","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":0,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1154","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":77,"firstName":"Vishesh","lastName":"Sekhsaria","userEmail":"vishesh.sekhsaria@polestarllp.com","contactNumber":"","userPassword":"3NhVl1MnDl","roleId":2,"retailerId":11,"managerId":41,"createdDate":"2016-04-13 11:48:36","createdBy":40,"lastModifiedDate":"2016-04-13 11:48:36","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":0,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1155","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":78,"firstName":"Avdesh","lastName":"Verma","userEmail":"avdesh.verma@polestarllp.com","contactNumber":"","userPassword":"hxwAUjVXnX","roleId":2,"retailerId":11,"managerId":41,"createdDate":"2016-04-13 11:51:24","createdBy":40,"lastModifiedDate":"2016-04-13 11:51:32","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":0,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1156","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":79,"firstName":"Varun","lastName":"Sinha","userEmail":"varun.sinha@polestarllp.com","contactNumber":"","userPassword":"lvHKXTLtMu","roleId":2,"retailerId":11,"managerId":41,"createdDate":"2016-04-13 11:52:37","createdBy":40,"lastModifiedDate":"2016-04-13 11:52:46","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":0,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1157","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":80,"firstName":"vdsfvgsdf","lastName":"gbvdsfrgvfdsr","userEmail":"abc@gg.com","contactNumber":"","userPassword":"TbswZ3Tw10","roleId":1,"retailerId":11,"managerId":41,"createdDate":"2016-04-13 14:08:58","createdBy":40,"lastModifiedDate":"2016-04-13 14:08:58","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":0,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":3,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"123","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":81,"firstName":"Rajat","lastName":"Jain","userEmail":"rajat.jain@polestarllp.com","contactNumber":"","userPassword":"pEeOEkZRy5","roleId":2,"retailerId":11,"managerId":41,"createdDate":"2016-04-13 14:34:22","createdBy":40,"lastModifiedDate":"2016-04-13 14:34:32","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":0,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1081","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":82,"firstName":"Sandeep","lastName":"Manohar","userEmail":"sandeep.manohar@polestarllp.com","contactNumber":"","userPassword":"BEgSZthbP4","roleId":2,"retailerId":11,"managerId":41,"createdDate":"2016-04-13 15:24:00","createdBy":40,"lastModifiedDate":"2016-04-13 15:24:08","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":0,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1023","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":83,"firstName":"Ajay","lastName":"Goenka","userEmail":"ajay@polestarllp.com","contactNumber":"","userPassword":"1234","roleId":4,"retailerId":11,"managerId":40,"createdDate":"2016-04-14 06:00:22","createdBy":40,"lastModifiedDate":"2016-05-19 13:19:01","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":1,"isActive":1,"isBillable":0,"billingAmount":"","defaultModuleId":1,"crole_id":0,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1061","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":1,"hodId":0},{"id":93,"firstName":"Fawzan","lastName":"Yusuf","userEmail":"fawzan.yusuf@polestarllp.com","contactNumber":"9813838388","userPassword":"1234","roleId":2,"retailerId":11,"managerId":40,"createdDate":"2016-04-15 07:34:26","createdBy":40,"lastModifiedDate":"2016-05-11 08:33:29","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":1,"isActive":1,"isBillable":1,"billingAmount":"100","defaultModuleId":1,"crole_id":51,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1054","designation":332,"level":338,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":1,"hodId":null},{"id":95,"firstName":"Ankit","lastName":"Rana","userEmail":"ankit@polestarllp.com","contactNumber":"9937382884","userPassword":"1234","roleId":4,"retailerId":11,"managerId":40,"createdDate":"2016-04-15 11:36:08","createdBy":40,"lastModifiedDate":"2016-05-19 13:17:28","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":1,"isActive":1,"isBillable":1,"billingAmount":"-123","defaultModuleId":1,"crole_id":51,"timeApproval":0,"attr3":null,"isApproval":1,"approveLimit":500,"doj":"","dob":"","doc":"","ecode":"10614","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":5,"hodId":0},{"id":103,"firstName":"Avi","lastName":"Kush","userEmail":"avi@polestarllp.com","contactNumber":"","userPassword":"1","roleId":2,"retailerId":11,"managerId":40,"createdDate":"2016-04-20 07:42:14","createdBy":40,"lastModifiedDate":"2016-05-25 09:54:37","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":1,"isActive":1,"isBillable":0,"billingAmount":"","defaultModuleId":2,"crole_id":68,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"123sds","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":5,"hodId":0},{"id":104,"firstName":"Jaggu","lastName":"Daada","userEmail":"jaggi@polestarllp.com","contactNumber":"","userPassword":"1","roleId":2,"retailerId":11,"managerId":40,"createdDate":"2016-04-20 08:39:03","createdBy":40,"lastModifiedDate":"2016-05-30 05:24:29","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":1,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":0,"crole_id":68,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"01/04/2016","dob":"01/04/2016","doc":"","ecode":"234jk","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":2,"hodId":0},{"id":161,"firstName":"Jogi","lastName":"Singh","userEmail":"jogendra.singh@polestarllp.com43","contactNumber":"","userPassword":"4oaT16ipML","roleId":2,"retailerId":11,"managerId":42,"createdDate":"2016-04-26 11:34:10","createdBy":40,"lastModifiedDate":"2016-04-26 11:35:27","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":0,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"102388","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":162,"firstName":"Jogendra","lastName":"Singh","userEmail":"jogendra.singh@polestarllp.com","contactNumber":"","userPassword":"VymOFKmOyJ","roleId":2,"retailerId":11,"managerId":42,"createdDate":"2016-04-26 11:37:07","createdBy":40,"lastModifiedDate":"2016-05-11 09:04:51","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":0,"isActive":1,"isBillable":1,"billingAmount":"-11","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"3243","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":0,"hodId":null},{"id":173,"firstName":"zaaaaaaaaaaaa","lastName":"azaz","userEmail":"zazazza@polestarllp.com","contactNumber":"99999999999","userPassword":"0Rdt9z86Fi","roleId":1,"retailerId":11,"managerId":41,"createdDate":"2016-04-27 06:02:48","createdBy":40,"lastModifiedDate":"2016-04-27 06:03:25","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":0,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":6,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"122222222222","designation":334,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":200,"firstName":"Mayur","lastName":"Gupta","userEmail":"mayur.gupta@polestarllp.com","contactNumber":"","userPassword":"111","roleId":1,"retailerId":11,"managerId":40,"createdDate":"2016-04-28 06:30:30","createdBy":40,"lastModifiedDate":"2016-04-28 06:30:30","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":1,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1088","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":253,"firstName":"fineman","lastName":"kumar","userEmail":"fine123@polestarllp.com","contactNumber":"9685475856","userPassword":"IYQKdT6q4o","roleId":5,"retailerId":11,"managerId":40,"createdDate":"2016-05-11 08:25:20","createdBy":40,"lastModifiedDate":"2016-05-11 08:26:33","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":0,"isActive":1,"isBillable":0,"billingAmount":"","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":1,"approveLimit":10,"doj":"05/10/16","dob":"05/01/16","doc":"05/20/16","ecode":"gfags123","designation":364,"level":338,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":0,"hodId":null},{"id":269,"firstName":"asif","lastName":"shamim","userEmail":"asif.shamim@polestarllp.com","contactNumber":"","userPassword":"6Q9p1MMf1p","roleId":2,"retailerId":11,"managerId":40,"createdDate":"2016-05-19 13:20:08","createdBy":40,"lastModifiedDate":"2016-05-19 13:20:08","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":1,"isActive":1,"isBillable":0,"billingAmount":"","defaultModuleId":7,"crole_id":0,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1090","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":2,"hodId":0},{"id":270,"firstName":"Udit ","lastName":"agarwal","userEmail":"udit.agarwal@polestarllp.com","contactNumber":"","userPassword":"rfFxXdT9wQ","roleId":2,"retailerId":11,"managerId":40,"createdDate":"2016-05-19 13:21:30","createdBy":40,"lastModifiedDate":"2016-05-19 13:21:30","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":1,"isActive":1,"isBillable":0,"billingAmount":"","defaultModuleId":7,"crole_id":0,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1111","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":2,"hodId":0},{"id":274,"firstName":"jay","lastName":"prakash","userEmail":"jay.prakash2991@polestarllp.com","contactNumber":"8860130996","userPassword":"1","roleId":1,"retailerId":11,"managerId":42,"createdDate":"2016-05-23 10:59:18","createdBy":40,"lastModifiedDate":"2016-05-23 10:59:18","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":1,"isActive":1,"isBillable":0,"billingAmount":"","defaultModuleId":1,"crole_id":0,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"05/23/16","dob":"05/11/16","doc":"05/27/16","ecode":"q12","designation":0,"level":336,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":0,"hodId":0},{"id":275,"firstName":"asdasd","lastName":"","userEmail":"asdsad@ghgh.com","contactNumber":"433433434","userPassword":"$2a$04$Xljb7ENjR8nXYoJ.ftzFtu1WhM.EwiX7n.Sq1bz.RaiDwqFeuLhPq","roleId":2,"retailerId":11,"managerId":40,"createdDate":"2016-05-29 11:31:06","createdBy":11,"lastModifiedDate":"2016-05-29 11:31:06","lastModifiedBy":11,"isClient":0,"clientId":0,"isValidated":0,"isActive":0,"isBillable":0,"billingAmount":"","defaultModuleId":1,"crole_id":0,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"","designation":0,"level":0,"modules":null,"userId":null,"rtype":"","isRetailer":"0","hrRole":0,"hodId":0},{"id":279,"firstName":"Rahij","lastName":"","userEmail":"rah@ll.com","contactNumber":"2389732981","userPassword":"$2a$04$AfAai6thWXfnZyGm1wquneqIdq99pbDAI0De1oxuK7GegMrJyVz3O","roleId":2,"retailerId":11,"managerId":40,"createdDate":"2016-05-30 13:11:12","createdBy":11,"lastModifiedDate":"2016-05-30 13:11:12","lastModifiedBy":11,"isClient":0,"clientId":0,"isValidated":0,"isActive":0,"isBillable":0,"billingAmount":"","defaultModuleId":1,"crole_id":0,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"","designation":0,"level":0,"modules":null,"userId":null,"rtype":"","isRetailer":"0","hrRole":0,"hodId":0},{"id":280,"firstName":"Rahij","lastName":"","userEmail":"ra1h@ll.com","contactNumber":"2389732981","userPassword":"$2a$04$AfAai6thWXfnZyGm1wqunenDb4LScWirK1hg6xHcEuUmX4IaAx3HW","roleId":2,"retailerId":11,"managerId":40,"createdDate":"2016-05-30 13:11:18","createdBy":11,"lastModifiedDate":"2016-05-30 13:11:18","lastModifiedBy":11,"isClient":0,"clientId":0,"isValidated":0,"isActive":1,"isBillable":0,"billingAmount":"","defaultModuleId":1,"crole_id":0,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"","designation":0,"level":0,"modules":null,"userId":null,"rtype":"","isRetailer":"0","hrRole":0,"hodId":0},{"id":281,"firstName":"Rahij","lastName":"","userEmail":"rajan22@ll.com","contactNumber":"2389732981","userPassword":"$2a$04$AfAai6thWXfnZyGm1wqune.yzg5qPDcfkbLaOJrUbsRApnYde9mci","roleId":2,"retailerId":11,"managerId":40,"createdDate":"2016-05-30 13:11:28","createdBy":11,"lastModifiedDate":"2016-05-30 13:11:28","lastModifiedBy":11,"isClient":0,"clientId":0,"isValidated":0,"isActive":1,"isBillable":0,"billingAmount":"","defaultModuleId":1,"crole_id":0,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"","designation":0,"level":0,"modules":null,"userId":null,"rtype":"","isRetailer":"0","hrRole":0,"hodId":0},{"id":282,"firstName":"Andrew","lastName":"Symndos","userEmail":"andrew@polestarllp.com","contactNumber":"12333333333","userPassword":"$2a$04$AfAai6thWXfnZyGm1wquneLSUE8P/eGktMbCAUFN1S0zRfD.dVxOm","roleId":2,"retailerId":11,"managerId":40,"createdDate":"2016-05-30 14:56:58","createdBy":40,"lastModifiedDate":"2016-05-30 14:58:54","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":0,"isActive":1,"isBillable":1,"billingAmount":"34444444444","defaultModuleId":1,"crole_id":0,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"43dkjfssss","designation":331,"level":363,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":0,"hodId":0}]
  ,[{"fieldCount":0,"affectedRows":0,"insertId":0,"serverStatus":2,"warningCount":1,"message":" ","protocol41":true,"changedRows":0}]];
  res.json(json);
});

/*----------------------------------------------------------Project Management-----------------------------------------------------------*/
	//app.get('/projectmngmt',url.projectmngmt,portal.projectmngmt,render.redirect);



}




