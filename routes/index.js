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
	app.get('/validateuser',portal.validateUser);  //index
	app.all('*', auth.checkauterization, render.redirect);
	app.get('/', url.setpage, render.redirect);
	app.get('/portal',url.home, portal.home,render.redirect);
	app.get('/logout', portal.logout,render.redirect);
	app.post('/changePassword',portal.changePass);

	//------------------------BUG-------------------------------------------------
	
	app.get('/bugHome',url.bugHome,portal.bugHome,render.redirect);
	app.post('/getAllBugtoexport',portal.exportBug);
	app.get('/viewBug',url.viewBug,portal.viewBug,render.redirect);
	app.get('/raiseBug',url.raiseBug,portal.raiseBug,render.redirect);
	app.post('/addBug',upload.single('addBugUpload'),url.addBug,portal.addBug,render.redirect);
	app.post('/bugDetails',url.bugDetails,portal.bugDetails,render.redirect);
	app.post('/updateBugDetails',url.updateBugDetails,portal.updateBugDetails,render.redirect);
	app.post('/addComment',url.addComment,portal.addComment,render.redirect);
	app.post('/bugAttachment',upload.single('addBugAttachment'),url.bugAttachment,portal.bugAttachment,render.redirect);
	app.post('/getAlltech',url.getAlltech,portal.getAlltech,render.redirect);
	app.post('/filterBug',url.filterBug,portal.filterBug,render.redirect);
	app.get('/filterBug',url.filterBug,portal.filterBug,render.redirect);


	//----------------------Document-------------------------------------------
    app.get('/document',url.setpageDocument,portal.getUser,portal.getAllFiles,portal.getIndustry,portal.getBusiness,portal.getDocument,portal.getTechnology,portal.getRestriction,render.redirect);
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
    //app.get('/Documenterror',url.Documenterror,render.redirect);
  
//------------------------------------------Asset-------------------------------		
app.get('/asset',url.setpageTransactions,portal.getUser,render.redirect);
app.get('/assignSoftware',url.setpageAssignSoftware,portal.getComp,render.redirect);//new4assignsoft
app.get('/hardware',url.setpageHardware,portal.getComp,render.redirect);
app.post('/addHardware',url.setpageHardware,portal.addHardware,portal.getComp,render.redirect);
app.post('/getAttr',url.setpageHw,portal.getAttribute,render.redirect);
app.post('/getTransDetails',url.setpageTransAssigned,portal.getAssignedAssets,render.redirect);
app.post('/getUserInfoAsset',url.setpageTrans,portal.getUser,render.redirect);
app.get('/viewFurniture',url.setpageviewFurniture,portal.getViewFurniture,render.redirect);
app.get('/viewStationary',url.setpageviewStationary,portal.getViewStationary,render.redirect);
app.get('/addFurniture',url.setpageaddFurniture,render.redirect);
app.post('/addFurniture',url.setpageviewFurniture,portal.addFurniture,portal.getViewFurniture,render.redirect)
app.get('/addStationary',url.setpageAddStation,render.redirect);
app.post('/addStationary',url.setpageviewStationary,portal.addStation,portal.getViewStationary,render.redirect)
app.get('/viewHardware',url.setpageViewHardware,portal.getViewHardware,render.redirect);//new4hardware
app.post('/getEditHardware',url.editHardware,portal.editHardware,render.redirect);//new4hard
app.post('/updateHardware',url.setUpdateHardware,portal.updateHardware,render.redirect);//newhard
app.post('/deleteHeader',url.setDelete,portal.deleteData,render.redirect);
app.post('/getEditStationary',url.setEdit,portal.editData,render.redirect);
app.post('/updateFurniture',url.setUpdate,portal.updateFurniture,render.redirect);
app.post('/updateStationary',url.setUpdatestat,portal.updateStation,render.redirect);
app.get('/viewSoftware',url.setpageviewSoftware,portal.getViewSoftware,render.redirect);
app.get('/addSoftware',url.setpageaddSoftware,portal.getComp,render.redirect);//new 4 dynamic
app.post('/addSoftware',url.setpageviewSoftware,portal.addSoftware,portal.getViewSoftware,render.redirect)
app.post('/updateSoftware',url.setUpdateSoft,portal.updateSoft,render.redirect);
app.post('/getTransComp',url.setpageTransUnassigned,portal.getAtt,render.redirect);
app.post('/getTransUnassigned',url.setpageTransUnassigned,portal.getUnassigned,render.redirect);
app.post('/getAccUnassigned',url.setpageTransUnassigned,portal.getAccessories,render.redirect);
app.post('/saveAssignment',url.setpageTransa,portal.saveAssignment,render.redirect);
app.post('/saveMaster',url.setpageSett,portal.saveAssetMap,portal.getMap,render.redirect);
app.get('/settings',url.setpageSettings,portal.getDataAsset,render.redirect);
app.post('/assetComponent',url.setpageSet,portal.getComp,render.redirect);
app.post('/getMapping',url.setpageSett,portal.getMap,render.redirect);


//---------------------------------Expense------------------------------------------
	app.get('/expense',url.setExpense, portal.getExpense,portal.getRole,render.redirect);
	app.get('/expensenew',url.setNewExpense, portal.getNewExpense,portal.getRole,render.redirect);
	app.post('/insertExpense',url.setexpensehomenewbyInsert, portal.insertExpense,portal.getRole,render.redirect);
	app.post('/fileAttechment',upload.single('comment-upload'),url.setexpensehomenew, portal.insertExpenseAttachment,portal.getRole,render.redirect);	
    app.post('/deleteExpense',url.setNewExpense, portal.deleteExpense,portal.getRole);
    app.post('/selectExpense',url.setNewExpense, portal.selectExpense,portal.getRole);
    app.post('/expenseApprove',url.setNewExpense, portal.approveExpense,portal.getRole,render.redirect);
    app.post('/expenseSubmit',url.setExpense, portal.submitExpense,portal.getRole);
    app.post('/ShowExpenseByapprover',url.setExpense, portal.ShowExpenseapprover,portal.getRole);
    app.post('/ShowExpenseWeekBy',url.setNewExpense, portal.getExpenseWeekBy,portal.getRole);
    app.get('/expensemaster',url.setExpenseMaster, portal.select_ExpenseMaster,portal.getRole,render.redirect);
    app.post('/insertExpenseMaster', portal.insert_Expense);
   // app.post('/expensemaster',url.setNewExpense, portal.update_Expense,portal.getRole,render.redirect);
    app.post('/expenseUser',url.setNewExpense, portal.selectByExpenseUser,portal.getRole);
    app.post('/getexpensemaster',url.setExpenseMaster, portal.selectExpensebyId,portal.getRole);
    app.post('/showMasterExpense',url.setExpenseMaster, portal.selectMasterExpense,portal.getRole);
    app.post('/expenseblableornot',url.setNewExpense, portal.getMaxBillExpense,portal.getRole);
    app.post('/reSubmit',url.setNewExpense, portal.reSubmitExpense,portal.getRole);
      app.post('/showremarkandcomment',url.setNewExpense, portal.remarkAndCommentExpense,portal.getRole);
  app.post('/checkExpenseSubmitOrNot',url.setNewExpense,portal.checkExpenseSubmitOrNot,portal.getRole);
    app.post('/reSubmitforcopy',url.setNewExpense, portal.reSubmitExpenseforCopy,portal.getRole); 


   //---------------------------------TimeSheet-----------------------------------------
	app.get('/timesheet',url.fillTimeSheet,portal.getTimeSheetData,render.redirect);
    app.post('/submitTimesheet',portal.submitTimesheet);
     app.post('/submitTimesheetAssignment',portal.submitTimesheetAssignment);
      app.post('/checkUserTimesheet',portal.checkUserTimesheet);
       app.post('/getUserUnderSupervisor',portal.getUserUnderSupervisor);
       app.get('/otherTimeSheet',url.otherTimeSheet,portal.otherTimeSheet,render.redirect);
       app.post('/ApprovedOrReject',portal.ApprovedOrReject);
          app.post('/SubmitRejectReason',portal.SubmitRejectReason);


//--------------------------------------------HR -------------------------------------------------------------->
app.get('/rms',url.hr,render.redirect);
app.post('/dashboardData',portal.dashboardData);
app.get('/raiseRequisition',url.raiseRequisition,portal.raiseRequisition,render.redirect) ;
app.post('/raiseRequisition',portal.raiseRequisition1) ;
app.get('/reqHod',url.reqHod,portal.reqHod,render.redirect);
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
app.get("/userHrViewReq",url.userHrViewReq,portal.userHrViewReq,render.redirect);
app.post("/search",portal.searchHr);
app.post("/asearch",portal.advancesearchHr);
app.post("/interviewerInfo",portal.interviewerInfo);
app.post("/updateStatusReq",portal.updateStatusReq);
app.get("/updateStatusReqViaMail",url.updateStatusReqViaMail,portal.updateStatusReq,render.redirect);
app.post("/getReleventTag",portal.getReleventTag);
app.post("/removeTag",portal.removeTag);
app.post("/getreleventState",portal.getreleventState);
app.post("/addQuickTag",portal.addQuickTag);
app.post('/getallmanager',portal.getallmanager);
app.post('/getscheduleInfo',portal.getscheduleInfo);
app.post('/scheduleInterview',url.scheduleInterview,portal.scheduleInterview,render.redirect);
app.post('/addTag',portal.addTag);
app.post('/savehrm',portal.saveHrm);
app.post('/selectAdminHr',portal.selectAdminHr);
app.post('/updateCandidate',portal.updateCandidate);
app.post('/interviewData', upload.single('feedback'),portal.interviewData);
app.get('/interviewFeedback',url.interviewFeedback,portal.interviewFeedback,render.redirect);
app.get('/reqApprover',url.reqApprover,portal.reqApprover,render.redirect);

app.post('/error',url.error,render.redirect);



//-----------------------------------------Project------------------------------------------
app.get('/task',url.task,render.redirect);
app.get('/resourceView',url.resource,portal.getAllResources,render.redirect);
app.post('/projectByResource',portal.projectByResource);


//-------------------------Admin Routes----------------------------------------------------
 app.use(function(req, res,next) {
    if(req.session.roleId!=1){
    	res.redirect('/portal');
    }
    else{
    	next();
    }
  });

    //----------------------Masters-------index------------------------------------------
 
    //app.post('/addStatuss',portal.setaddStatuss);
	app.post('/settingdata',portal.settingdata);
	app.post('/getothermaster',portal.getothermaster);
	
<!------ srv-------->
	 app.get('/masters',url.setpagemasters,portal.settingdata,portal.setaddStatuss,
    	portal.holidayhome,portal.select_ExpenseMaster,
    	portal.getDataAsset,
    	portal.getCustomRole,portal.getIndustry,portal.getBusiness,
    	portal.getDocument,portal.getTechnology,portal.getRestriction,portal.getRole,
    	render.redirect);
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
    app.post('/getRolesInfo',portal.getRolesInfo);
	app.post('/addEditClientAjax',portal.addEditClientAjax);

	<!----- srvvvvvvvvvvvvvvvvvvvvv      -->
	app.post('/getind',portal.getind);
	app.post('/getdoc',portal.getdoc);
	app.post('/getbus',portal.getbus);
	app.post('/gettec',portal.gettec);
	app.post('/getres',portal.getres);
	app.post('/Docmaster',portal.Docmaster);
	app.post('/addeditComponent',portal.addeditComponent);
/*----------------------------------------------------------Project Management-----------------------------------------------------------*/
	//app.get('/projectmngmt',url.projectmngmt,portal.projectmngmt,render.redirect);


}
