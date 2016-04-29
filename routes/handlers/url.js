'use strict';
 var config = require('../../config/config').modules;
 console.log("Config----------------",config);
module.exports = { 
	home:function(req,res,next){
		req.page='home';
		next();
	},
		setpage: function(req, res, next) {
		req.page = 'success';
		next();
	},
		setpageClientStatus: function(req, res, next) {
		req.clientid=0;
		
		req.page = 'clientStatus';
		next();
	},
	setpageUser: function(req, res, next) {
		req.userid=0;
		req.page = 'users';
		next();
	}, 
 
	setpagecreateEditUser: function(req, res, next) {
	req.userid=req.body.hdnId;
	console.log('----------------------',req.body);
		req.page = 'createEditUser';
		req.depId=0;
		req.levelId=0;
		req.statusflag=1;
		req.clientid=0;
		next();
	},


	setpageClient: function(req, res, next) {
		req.clientid=0;
		req.statusflag=req.query.inactive;
		req.session.statusflag=req.query.inactive;

		console.log("----------------------------------req.query.inactive----------------",req.statusflag);
		req.page = 'clients';
		next();
	},
		setpagecreateEditClient: function(req, res, next) {
		
		if(req.query.id==''||req.query.id=='undefined'){			
		req.clientid=0;	
		console.log("in If of URL set page create edit---",req.query.id);
		}
		else if(req.body.cid){
			req.clientid=req.body.cid;
		}
		else{
		req.clientid=req.query.id;	
		console.log("in If of URL set page create edit---",req.clientid);
		}		
		req.editflag=req.body.flag;
		req.statusflag=req.query.inactive || 1;
		console.log('--------create/Show/EditClient---------createEditClient-----')	;	
		req.page = 'createEditClient';
		next();
	},
	setpagemailserverConfigure: function(req,res,next){
		req.page='mailServerConfigureInfo';
		next();
	},
	setpagemailserverInfo: function(req,res,next){
        req.page='mailServerConfig';
        next();
	},	
	addEditClient:function(req, res, next) {		
		req.page = 'addEditClient';
		next();
	},
	/*showEditClient:function(req, res, next) {
		req.clientid=req.query.id;
		req.page = 'showEditClient';
		next();
	},*/
	//---------------Masters
		setpageSettings:function(req,res,next){

			if(req.session.modules.indexOf(config.Asset)>=0)
		 	{
	req.page='assetSettings';
		next();
  }
  else
	{
			res.redirect('/portal')
	}

	
	
	},
	setpageSet:function(req,res,next){
		req.page='ajaxSettings';
		req.tid=req.body.type;
		next();
	},
	setpageSett:function(req,res,next){
		req.page='ajaxData';
		next();
	},



	
//---------------------------Project-WBS-------------------------------------
	
	setProject: function(req, res, next) {
		console.log('set project ddddddddddd');
		req.page = 'projectDetails';
		next();
	},
	setAddEditProject: function(req, res, next) {
		req.userid=0;
		req.page = 'addEditProject';
		next();
	},
	setAddEditPro: function(req, res, next) {
		
		req.page = 'projectDetails11';
		next();
	},
	wbsDetails: function(req, res, next) {
		
		req.page = 'wbsDetails';
		next();
	},
	setAddEditWbs: function(req, res, next) {
		req.userid=0;
		req.page = 'addEditWbs';
		next();
	},

	setAddEditWbsDetails: function(req, res, next) {
		
		req.page = 'wbsDetails11';
		next();
	},

	setProjectAddEdit: function(req, res, next) {
	req.pid=req.body.pid;
	req.flag=req.body.hdnId;

	console.log('qqqqqqqqqqqqqqqqqqqqq');
		req.page = 'projectAddEdit';
		next();
	},

	setProjectAddEditDetails: function(req, res, next) {
	console.log('wwwwwwwwwwwwwwwwwww');
		req.page = 'projectDetails12';
		next();
	},
	setProjectWbs: function(req, res, next) {
	console.log('setProjectWbs');
	//console.log('project wbs------------------',req.body.lid);
		req.page = 'projectWbs';
		next();
	},

	setProjectAddEditDetailsWithFlag: function(req, res, next) {
	console.log('projectDetailsWithFlag');
		req.page = 'projectDetailsWithFlag';
		next();
	},



	//-------------Profile-------------------
	setProfile: function(req, res, next) {
	console.log('set profile------------------');
		req.page = 'profile';
		next();
	},
	updateProfile:function(req,res,next){
		console.log("update profile");
		req.page='updateProfile';
		next();
	},

	//----------------------------------ASSIGNMENT-----------------------------------

	setpageAssignment: function(req, res, next) {
		//console.log("req.query.inactive---",req.query.inactive);
		var flag=req.query.inactive || 1;
		//console.log("req.query.inactive after setting---",flag);
		req.statusFlag=flag=='0'?0:1;
		//console.log("while inactive",req.statusFlag);
		req.page = 'assignment';
		next();
	},
	setpageCreateEditAssignment: function(req, res, next) {
		
		req.page = 'createAssignment';
		next();
	},
	setpageChangeAssignmentStatus: function(req, res, next) {
		
		req.page = 'changeAssignmentStatus';
		next();
	},
	setpageSubmitAssignment: function(req, res, next) {
		
		req.page = 'createSubmitAssignment';
		next();
	},


	//-----------------------------------Bug-----------------------------------------------
	bugHome: function(req,res,next){
		if(req.session.modules.indexOf(config.Bug)>=0)
		 	{
		req.page='bugHome';		
		next();
}
		else
	{
			res.redirect('/portal')
	}
	},
	viewBug: function(req,res,next){
		if(req.session.modules.indexOf(config.Bug)>=0)
		 	{
		req.page='viewBug';
		next();
}
		else
	{
			res.redirect('/portal')
	}
	},
	raiseBug: function(req,res,next){	
	if(req.session.modules.indexOf(config.Bug)>=0)
		 	{	
		req.page='raiseBug';
		next();
	}
	else
	{
			res.redirect('/portal')
	}
	},
	addBug:function(req,res,next){
		if(req.session.modules.indexOf(config.Bug)>=0)
		 	{
		console.log("in Add bug URL",req.body);
	    req.page='addBug';
		next();	
	}
	else
	{
			res.redirect('/portal')
	}
	},
	bugDetails:function(req,res,next){
		if(req.session.modules.indexOf(config.Bug)>=0)
		 	{
		//console("in Bug Details URL"+req.body);
	    req.page='bugDetails';
		next();	
	}
	else
	{
			res.redirect('/portal')
	}
	},
		updateBugDetails:function(req,res,next){
			if(req.session.modules.indexOf(config.Bug)>=0)
		 	{
	    req.page='updateBugDetails';
		next();
		}	
		else
	{
			res.redirect('/portal')
	}
	},
	addComment:function(req,res,next){
		if(req.session.modules.indexOf(config.Bug)>=0)
		 	{
		//console("in Bug Details URL"+req.body);
	    req.page='addComment';
		next();	
	}
		else
	{
			res.redirect('/portal')
	}
	},
	bugAttachment:function(req,res,next){
		if(req.session.modules.indexOf(config.Bug)>=0)
		 	{
	    req.page='bugAttachment';
		next();	
	}
		else
	{
			res.redirect('/portal')
	}
	},
	getAlltech:function(req,res,next){
		if(req.session.modules.indexOf(config.Bug)>=0)
		 	{
	    req.page='getAlltech';
		next();	
	}
		else
	{
			res.redirect('/portal')
	}
	},
	filterBug:function(req,res,next){
		if(req.session.modules.indexOf(config.Bug)>=0)
		 	{
	    req.page='filterBug';
		next();	
	}
		else
	{
			res.redirect('/portal')
	}
	},

	//---------------------------------------Document-----------------------------------------------


	    setpagecustomRoles: function(req,res,next){

	    	if(req.session.modules.indexOf(config.Document)>=0){

	    	req.page='customrole';
	    	next();
	    }
	    else{
	    	res.redirect('/portal')
	    }
	},

	setpageaddcustomRoles:	function(req,res,next){
		if(req.session.modules.indexOf(config.Document)>=0)
		 	{
	    	req.page='customRolesEntry';
	    	next();
	    }
	    else
	{
			res.redirect('/portal')
	}
	},

	setpageDocument:	function(req,res,next){
		 	if(req.session.modules.indexOf(config.Document)>=0)
		 	{
		req.page='documentHome';
		req.flag=req.query.flag|| 1;
		next();
	}
	else
	{
		console.log("set page doc else");
			res.redirect('/portal')
	}
	},

	setpagePermission: function(req,res,next){
if(req.session.modules.indexOf(config.Document)>=0)
		 	{
        
		req.page= 'permission';
	    next();
	}
	else
	{
			res.redirect('/portal')
	}
	},


	setpageConfirmedFile: function(req,res,next){
		console.log('setpageConfirmedFile');
		req.page='confirmedFilePermission';
		next();
	},
    setpageDeletePermanentely: function(req,res,next){
		console.log('setpageDelete Permanentely');
		req.page='setpageDeletePermanentely';
		next();
	},
	setpageReject: function(req,res,next){
		console.log('setpageDelete');
		req.page='rejectFileById';
		next();
	},
	setpageRejectedFiles: function(req,res,next){
		if(req.session.modules.indexOf(config.Document)>=0){
		console.log('Rejected files');
		req.page='rejectedFiles';
		next();
	}
		else
	{
			res.redirect('/portal')
	}
	},
	setpageInsertDocument: function(req,res,next){
		console.log('setpageInsertDocument---URL');
		req.page='attachDocFile';
		next();
	},
	setpagetableSearchBox: function(req,res,next){
		req.page='tableSearchBox';
		next();
	},
	setpagefilterfiledata: function(req,res,next){
		req.page='filterFiledata';
		next();
	},


	//---------------------------------Expense------------------------------------------
	setExpense: function(req, res, next) {
		if(req.session.modules.indexOf(config.Expense)>=0)
		 	{
		console.log('expenseHome');
		req.page = 'expenseHome';
		next();
	}
		else
	{
			res.redirect('/portal')
	}
	},

		setExpenseMaster: function(req, res, next) {
			if(req.session.modules.indexOf(config.Expense)>=0)
		 	{
		console.log('expensemaster');
		req.page = 'masters';
		next();
	}
		else
	{
			res.redirect('/portal')
	}
	},
    setNewExpense: function(req, res, next) {
    	if(req.session.modules.indexOf(config.Expense)>=0)
		 	{
		console.log('expenseHome');
		req.page = 'expenseHomenew';
		next();
	}
		else
	{
			res.redirect('/portal')
	}
	},
	 insertExpenses: function(req, res, next) {
	 	if(req.session.modules.indexOf(config.Expense)>=0)
		 	{
		console.log('expenseHome');
		req.page = 'expenseHomenew';
		next();
	}
		else
	{
			res.redirect('/portal')
	}
	},

	setexpensehomenew: function(req, res, next) {
		if(req.session.modules.indexOf(config.Expense)>=0)
		 	{
		req.userid=0;
		req.page = 'fileAttechment';
		next();
	}
		else
	{
			res.redirect('/portal')
	}
	},

	setexpenseMaster: function(req, res, next) {
		if(req.session.modules.indexOf(config.Expense)>=0)
		 	{
		req.userid=0;
		req.page = 'isertExpensemaster';
		next();
	}
		else
	{
			res.redirect('/portal')
	}
	},

	setexpensehomenewbyInsert: function(req, res, next) {
		if(req.session.modules.indexOf(config.Expense)>=0)
		 	{
		req.userid=0;
		req.page = 'insertExpense';
		next();
	}
		else
	{
			res.redirect('/portal')
	}
	},
	//-------------------Masters--------------------------------
	setpagemasters: function(req,res,next){
		req.flag=req.query.flag; 
		console.log("set page master----url--flag",req.flag);
        req.page='masters';
        next();
	},
	seteditpagemasters: function(req,res,next){
		req.flag=req.query.flag; 
		console.log("set page master----url--flag",req.flag);
        req.page='editmasters';
        next();
	},
   /*----------------------------holiday------------------------------------------------------------------------*/
   setholidaypage: function(req,res,next){
		req.page='holiday';
		next();
	},
	setpageholiday: function(req,res,next){
		console.log("URL -------------- setpageholidaay");
		req.page='uploadHoliday';
		next();
	},
	setcalSettingpage: function(req,res,next){
		console.log("URL page for Calender Setting");
		req.page='calSetting';
		next();
	},
	
//-----------------------------------------Timesheet-------------------
	fillTimeSheet: function(req,res,next){
if(req.session.modules.indexOf(config.Time)>=0)
		 	{
      req.page='timeSheet';
      next();
  }
  else
	{
			res.redirect('/portal')
	}
	},
	otherTimeSheet: function(req,res,next){
		if(req.session.modules.indexOf(config.Time)>=0)
		 	{
		console.log("i am in url");
      req.page='otherTimeSheet';
      next();
  }
  else
	{
			res.redirect('/portal')
	}
	},





//------------------------------------------Asset-------------------------------
	
	setpageviewFurniture: function(req,res,next){

		if(req.session.modules.indexOf(config.Asset)>=0)
		 	{
     	
       req.page='viewFurniture';
   		next();
  }
  else
	{
			res.redirect('/portal')
	}


   		
	},

	setpageaddFurniture:function(req,res,next){

		if(req.session.modules.indexOf(config.Asset)>=0)
		 	{
     	

		req.page='addFurniture';
		next();
  }
  else
	{
			res.redirect('/portal')
	}



	},

	setpageAddStation: function(req,res,next){


		if(req.session.modules.indexOf(config.Asset)>=0)
		 	{
     	

		req.page='addStationary';
		next();
  }
  else
	{
			res.redirect('/portal')
	}



	},
	setpageaddSoftware:function(req,res,next){

		if(req.session.modules.indexOf(config.Asset)>=0)
		 	{
     	
	
		req.page='addSoftware';
		req.body.atid=2;
		next();
  }
  else
	{
			res.redirect('/portal')
	}

	},
	setpageviewStationary: function(req,res,next){

		if(req.session.modules.indexOf(config.Asset)>=0)
		 	{
     	
		console.log("setpageviewStationary----url",req.body.flag);
		req.page='viewStationary';
		next();
  }
  else
	{
			res.redirect('/portal')
	}



	},

	setpageviewSoftware: function(req,res,next){

		if(req.session.modules.indexOf(config.Asset)>=0)
		 	{
     	
		req.page='viewSoftware';
		next();
  }
  else
	{
			res.redirect('/portal')
	}


	},
	//new 4 hardware
	setpageViewHardware:function(req,res,next){

		if(req.session.modules.indexOf(config.Asset)>=0)
		 	{
     	
	req.page='viewHardware';
		next();
  }
  else
	{
			res.redirect('/portal')
	}


	
	},
	//new 4 hardware
	editHardware: function(req,res,next){
		req.page='EditHardware';
		next();
	},
	setUpdateHardware:function(req,res,next){
		req.page='updateHardware';
		next();
	},//hardware end
	setpageEdit: function(req,res,next){
		req.page='Edit';
		next();
	},
		setEdit:function(req,res,next)
	{
		req.page='Edit';
		next();
	},

	setUpdate: function(req,res,next){
		req.page='Update';
		next();
	},

	setUpdatestat: function(req,res,next){
		req.page='Updatestat';
		next();
	},

	setUpdateSoft:function(req,res,next){
		console.log('in updatesoft -------------url')
		req.page='updateSoft';
		next();
	},

	setDelete:function(req,res,next){
		req.page ='Delete';
		next();
	},
 setpageTransUnassigned:function(req,res,next){
        console.log('TRansUnassigned');
        req.page='ajaxTrans';
        next();
    },
    setpageTransa:function(req,res,next){
        req.page='transa';
        next();
    },
setpageTrans: function(req,res,next){
        console.log('serpagetrans');
        req.page='trans';
        req.userid=req.body.qids;
        next();
    },
setpageTransactions:     function(req,res,next){


if(req.session.modules.indexOf(config.Asset)>=0)
		 	{
     	
        console.log('setpageTransactions');
        req.page='transactions';
        req.userid='0';
        next();
  }
  else
	{
			res.redirect('/portal')
	}
    },
//new for assign software
setpageAssignSoftware:     function(req,res,next){


	if(req.session.modules.indexOf(config.Asset)>=0)
		 	{
	
        console.log('---------setpageAssign---Software');
        req.page='assignSoftware';
        next();
  }
  else
	{
			res.redirect('/portal')
	}


    },
    setpageHardware:function(req,res,next){



	if(req.session.modules.indexOf(config.Asset)>=0)
		 	{
	

		console.log('setpageHardware');
		req.page='hardware';
		req.body.atid='1';
		next();
  }
  else
	{
			res.redirect('/portal')
	}



	},
	setpageHw:function(req,res,next){
		req.page='ajaxHw';
		next();
	},
	setpageTransAssigned:function(req,res,next){
		req.page="transAss";
		next();
	},




	//-----------------------------------------------------hr management--------------------------------------------------


	hr:function(req,res,next){
         console.log("it is url");
         if(req.session.modules.indexOf(config.RMS)>=0){
		if(req.session.hrRole){
			if (req.session.hrRole != 4) {
			 	req.page="dashboard";	       
		    } else {
		    	req.page="interview";		       
		    }
		}
		else{	
			req.page="error";
		}

	    next();
	}
	else{
		res.redirect('/portal');
	}
	},
	raiseRequisition:function(req,res,next){
		 if(req.session.modules.indexOf(config.RMS)>=0){
		req.page="raiseRequisition";
		next();}
		else{
			res.redirect('/portal');
		}
	},
	reqHod:function(req,res,next){
		 if(req.session.modules.indexOf(config.RMS)>=0){
			req.page="reqHod";
			next();
		}
		else{
			res.redirect('/portal');
		}
	},
	allrequisitions:function(req,res,next){
		 if(req.session.modules.indexOf(config.RMS)>=0){
		req.page="allrequisitions";
		next();
	}
	else{
			res.redirect('/portal');
		}

	},
	viewCandidate:function(req,res,next){
		console.log("url viewCandidate");
		 if(req.session.modules.indexOf(config.RMS)>=0){
		req.page="viewCandidate";
		next();
	}
	else{
			res.redirect('/portal');
		}
	},
	upload :function(req,res,next){
		 if(req.session.modules.indexOf(config.RMS)>=0){
		req.page="upload";
		next();
	}
	else{
			res.redirect('/portal');
		}
	},
	viewReq:function(req,res,next){
		 if(req.session.modules.indexOf(config.RMS)>=0){
		req.page="viewReq";
		next();
	}
	else{
			res.redirect('/portal');
		}
	},
	interviewFeedback:function(req,res,next){
		 if(req.session.modules.indexOf(config.RMS)>=0){
		req.page="interviewFeedback";
		next();
	}
	else{
			res.redirect('/portal');
		}
	},
	reqApprover:function(req,res,next){
		 if(req.session.modules.indexOf(config.RMS)>=0){
		req.page="reqApprover";
		next();
	}
	else{
			res.redirect('/portal');
		}
	},

error:function(req,res,next){
		req.page="error";
		next();
	}
}