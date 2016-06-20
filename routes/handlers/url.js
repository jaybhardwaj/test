'use strict';
 var config = require('../../config/config').modules;
module.exports = { 
	getEmpData:function(req,res,next){
		req.emp_id=req.query.emp_id;
		req.mgr_id=req.query.mgr_id;
		console.log("inURL",req.emp_id,req.mgr_id);
		next();
	},
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
 	errorSWW :function(req,res,next){
 		console.log("loaaaaaaaaaaaaaaaa");
    req.page = 'errorSWW';
    next();
	},
	setpagecreateEditUser: function(req, res, next) {
	req.userid=req.body.hdnId;
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

		req.page = 'clients';
		next();
	},
		setpagecreateEditClient: function(req, res, next) {
		
		if(req.query.id==''||req.query.id=='undefined'){			
		req.clientid=0;	
		}
		else if(req.body.cid){
			req.clientid=req.body.cid;
		}
		else{
		req.clientid=req.query.id;	
		}		
		req.editflag=req.body.flag;
		req.statusflag=req.query.inactive || 1;
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

		req.page = 'projectAddEdit';
		next();
	},

	setProjectAddEditDetails: function(req, res, next) {
		req.page = 'projectDetails12';
		next();
	},
	setProjectWbs: function(req, res, next) {
		req.page = 'projectWbs';
		next();
	},

	setProjectAddEditDetailsWithFlag: function(req, res, next) {
		req.page = 'projectDetailsWithFlag';
		next();
	},



	//-------------Profile-------------------
	setProfile: function(req, res, next) {
		req.page = 'profile';
		next();
	},
	updateProfile:function(req,res,next){
		req.page='updateProfile';
		next();
	},

    //----------------Dashboards-------------------
	setDashboard: function(req, res, next) {
		req.page = 'vis_dashboard';
		next();
	},

	//----------------------------------ASSIGNMENT-----------------------------------

	setpageAssignment: function(req, res, next) {
		var flag=req.query.inactive || 1;
		req.statusFlag=flag=='0'?0:1;
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
		if(!req.session.bugSetting)
		req.session.bugSetting='';
		next(); 
	}
	else
	{
			res.redirect('/portal')
	}
	},
	addBug:function(req,res,next){
	var arr=[];
		if(req.session.modules.indexOf(config.Bug)>=0)
		 	{
	    req.page='addBug';
	    console.log(req.body);
	    if(req.body.setting=='1'){
	    	arr.push(req.body.project); 
	    	arr.push(req.body.assingedto);
	    	arr.push(req.body.priority);
	    	arr.push(req.body.severity);
	    	arr.push(req.body.technology);
	    	arr.push(req.body.type);
	    	arr.push(req.body.detectedBy);
	    	arr.push(req.body.cycle); 
	    	arr.push(req.body.setting) ;
	    }
	    req.session.bugSetting=arr;
	    console.log("session url",req.session.bugSetting);
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
 myUploads: function(req,res,next){

	    	if(req.session.modules.indexOf(config.Document)>=0){

	    	req.page='myUploads';
	    	next();
	    }
	    else{
	    	res.redirect('/portal')
	    }
	},

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

	setpageDocument:function(req,res,next){
	 	if(req.session.modules.indexOf(config.Document)>=0){
	 		
						req.page='documentHome';
						req.flag=req.query.flag|| 1;
						next();
		}
		else{
				res.redirect('/portal')
		}
	},
	Documenterror:function(req,res,next){
		console.log("hhh----hh");
		if(req.session.modules.indexOf(config.Document)>=0)
				 	{
		        
				req.page= 'Documenterror';
			    next();
			}
			else{
					res.redirect('/portal')
			}
	},

	setpagePermission: function(req,res,next){
		if(req.session.modules.indexOf(config.Document)>=0)
				 	{
		        
				req.page= 'permission';
			    next();
			}
			else{
					res.redirect('/portal')
			}
	},


	setpageConfirmedFile: function(req,res,next){
		req.page='confirmedFilePermission';
		next();
	},
    setpageDeletePermanentely: function(req,res,next){
		req.page='setpageDeletePermanentely';
		next();
	},
	setpageReject: function(req,res,next){
		req.page='rejectFileById';
		next();
	},
	setpageRejectedFiles: function(req,res,next){
		if(req.session.modules.indexOf(config.Document)>=0){
		req.page='rejectedFiles';
		next();
	}
		else
	{
			res.redirect('/portal')
	}
	},
	setpageInsertDocument: function(req,res,next){
		req.session.documentalert++;
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
		req.page = 'expenseHome';
		next();
	}
		else
	{
			res.redirect('/portal')
	}
	},

	setExpenseDetails: function(req, res, next) {
		if(req.session.modules.indexOf(config.Expense)>=0)
		 	{
		req.page = 'expenseDetails';
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
		req.page = 'expenseHomenew';
		next();
	}
		else
	{
			res.redirect('/portal')
	}
	},

     setOtherExpense: function(req, res, next) {
    	if(req.session.modules.indexOf(config.Expense)>=0)
		 	{
		req.page = 'expenseOther';
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
        req.page='masters';
        next();
	},
	seteditpagemasters: function(req,res,next){
		req.flag=req.query.flag; 
        req.page='editmasters';
        next();
	},
   /*----------------------------holiday------------------------------------------------------------------------*/
   setholidaypage: function(req,res,next){
		req.page='holiday';
		next();
	},
	setpageholiday: function(req,res,next){
		req.page='uploadHoliday';
		next();
	},
	setcalSettingpage: function(req,res,next){
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
		//console.log('timesheet in url.js');
		if(req.session.modules.indexOf(config.Time)>=0)
		 	{
      req.page='otherTimeSheet';
      next();
  }
  else
	{
			res.redirect('/portal')
	}
	},


//------------------------------------------Asset-------------------------------
	inventory:function(req,res,next){
		console.log("in url inven");
		if(req.session.modules.indexOf(config.Asset)>=0)
		 	{
		       req.page='viewInventory';
		   	   next();
		  }
		  else
			{
					res.redirect('/portal')
			}
	},

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

	setpageviewSoftwareDetails: function(req,res,next){

		if(req.session.modules.indexOf(config.Asset)>=0)
		 	{
     	
		req.page='viewSoftwareDetails';
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
		req.page='updateSoft';
		next();
	},

	setDelete:function(req,res,next){
		req.page ='Delete';
		next();
	},
 setpageTransUnassigned:function(req,res,next){
        req.page='ajaxTrans';
        next();
    },
    setpageTransa:function(req,res,next){
        req.page='transa';
        next();
    },
setpageTrans: function(req,res,next){
        req.page='trans';
        req.userid=req.body.qids;
        next();
    },
setpageTransactions: function(req,res,next){


if(req.session.modules.indexOf(config.Asset)>=0)
		 	{
     	        req.page='transactions';
        req.userid='0';
        next();
  }
  else
	{
			res.redirect('/portal')
	}
    },
setpageAssignSoftware:     function(req,res,next){


	if(req.session.modules.indexOf(config.Asset)>=0)
		 	{
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
         if(req.session.modules.indexOf(config.RMS)>=0){
		if(req.session.hrRole){
			if (req.session.hrRole != 4) {
			 	req.page="dashboard";	       
		    } 
		    else{
		    	req.page="interview";
		    }
		}
		else{	
			req.page="error";
		}
console.log(req.page)
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
	interview:function(req,res,next){
		 if(req.session.modules.indexOf(config.RMS)>=0){
			req.page="interview";
			next();
		}
		else{
			res.redirect('/portal');
		}
	},
	reqHod:function(req,res,next){
		 if(req.session.modules.indexOf(config.RMS)>=0){
		 	req.flag=req.query.flag
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
		 if(req.session.modules.indexOf(config.RMS)>=0){
		 	
		req.page="viewCandidate";
		next();
	}
	else{
			res.redirect('/portal');
		}
	},

 scheduleInterview:function(req,res,next){
		 if(req.session.modules.indexOf(config.RMS)>=0){
		req.page="scheduleInterview";
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
   
   submitparsedData :function(req,res,next){
		 if(req.session.modules.indexOf(config.RMS)>=0){
		req.page="submitparsedData";
		next();
	}
	else{
		
			res.redirect('rms/upload');
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
	userHrViewReq:function(req,res,next){
		 if(req.session.modules.indexOf(config.RMS)>=0){
		req.page="userHrViewReq";
		next();
	}
	else{
			res.redirect('/portal');
		}
	},
	
	updateStatusReqViaMail:function(req,res,next){  
		  req.body.jdid=req.query.jdid;
		  req.body.flag=req.query.flag;
		  req.session.hrRole=req.query.role;
		  if(req.session.hrRole==5){
		  	req.body.approve="hod";	
		  }
		  else{
		  	req.body.approve="approver";	
		  } 
		  req.isMail=true;
		  req.page="success";
		  console.log("url  updateStatusReqViaMail",req.body.jdid,req.body.flag,req.session.hrRole);
		next(); 
	},

	//---------------------------------------Project----------------------------------------------
	task:function(req,res,next){
		 if(req.session.modules.indexOf(config.Project)>=0){
		 	console.log("url task");
		req.page="task";
		next();
	}
	else{
			res.redirect('/portal');
		}	
	},
		resource:function(req,res,next){
		 if(req.session.modules.indexOf(config.Project)>=0){
		 	console.log("url task");
		req.page="resource";
		next();
	}
	else{
			res.redirect('/portal');
		}	
	},

error:function(req,res,next){
		req.page = 'errorSWW';
    	next();
	},
  projStatus:function(req,res,next){
		req.page = 'projStatus';
    	next();
	}
}
