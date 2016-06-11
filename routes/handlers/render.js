	 'use strict'; 
module.exports = {  
	redirect: function(req, res, next) {
		var page = req.page;
		if(!page) {
			page = '1234abc';
		} 
		switch(page) { 
				case 'index' :
				res.render('index'); 
				break;
				case 'home' :
				res.render('home',{myModules:req.session.modules,hideFlag:1,module:req.result1,roleid:req.session.roleId,logo:req.session.logo,user:req.session.firstName,defaultModule:req.session.defaultModule,isApp:req.session.isApprover});
				break;
					case 'users' :
				res.render('users',{myModules:req.session.modules,hideFlag:1,users:req.resultUsers[0],role:req.resultRoles[0],customRole:req.resultCustomRoles[0],roleid:req.session.roleId,logo:req.session.logo,user:req.session.firstName,defaultModule:req.session.defaultModule,isApp:req.session.isApprover});
				break;

			case 'createEditUser' :
				res.render('createEditUser',{retailerInfo:req.resultUsers[3],
					client:req.resultClient[2],myModules:req.session.modules,hideFlag:1,userModule:req.resultUsers[2],
					report:req.resultUsers[1],editflag:req.body.hdnId,users:req.resultUsers[0],
					role:req.resultRoles[0],customRole:req.resultCustomRoles,roleid:req.session.roleId,
					department:req.resultDepartment[0],level:req.resultLevel[0],
					modules:req.result[0],logo:req.session.logo,user:req.session.firstName,
					defaultModule:req.session.defaultModule,isApp:req.session.isApprover,hrRole:req.hrRole,allHod:req.hodList});
				
				break;
				case 'success' :
				if(req.session.isVerified)
					res.redirect('/portal')
				else
				res.render('index');
				break;
				
				case 'errorSWW' :
	            res.render('errorSWW',{role: req.session.roleId,Name: ' ',myModules:req.session.modules,hideFlag:0,id:req.userid,
	            	user:req.session.firstName,roleid:req.session.roleId,logo:req.session.logo,retailerId:req.session.retailerId,
		                defaultModule:req.session.defaultModule});
            	break;
				case 'clients' :
				res.render('clients',{myModules:req.session.modules,hideFlag:1,clients:req.resultClient[2],roleid:req.session.roleId,logo:req.session.logo,user:req.session.firstName,defaultModule:req.session.defaultModule,flagActive:req.session.statusflag,isApp:req.session.isApprover});
				break;

				case 'createEditClient' :
				res.render('createEditClient',{myModules:req.session.modules,hideFlag:1,clientinfo:req.resultClient[2],location:req.resultClient[0],users:req.resultClient[1],id:0,editflag:req.editflag,roleid:req.session.roleId,logo:req.session.logo,user:req.session.firstName,defaultModule:req.session.defaultModule,isApp:req.session.isApprover});
				break;
				case 'addEditClient':
				res.redirect('/clients');
				break;


				case 'mailServerConfig'	:
			    res.render('mailServerConfig',{myModules:req.session.modules,hideFlag:1,mailserver:req.mailServerresult[0],roleid:req.session.roleId,logo:req.session.logo,user:req.session.firstName,defaultModule:req.session.defaultModule,isApp:req.session.isApprover});
			    break;
			    
                case 'mailServerConfigureInfo'	:
			    res.redirect('/mailServerInfo');
			    break;

				//-------------------Profile-------------------------
				case 'profile' :
            	req.session.firstName=req.resultProfile[0][0].firstName;
            	req.session.logo=req.resultProfile[0][0].logo;
               res.render('profile',{isRetailer:req.session.isRetailer,myModules:req.session.modules,hideFlag:1,info:req.resultProfile,logo:req.session.logo,user:req.session.firstName,roleid:req.session.roleId,defaultModule:req.session.defaultModule,isApp:req.session.isApprover});
                break;
                
                //------------------Dashboards <Phase1 : Not Lived> --------------------------
                case 'vis_dashboard' :
            	req.session.firstName=req.resultProfile[0][0].firstName;
            	req.session.logo=req.resultProfile[0][0].logo;
                res.render('dashboard',{isRetailer:req.session.isRetailer,myModules:req.session.modules,hideFlag:1,info:req.resultProfile,logo:req.session.logo,user:req.session.firstName,roleid:req.session.roleId,defaultModule:req.session.defaultModule,isApp:req.session.isApprover});
                break;
                
               case 'updateProfile' :
               res.redirect('/profile');
                break;
				//-----------------------------Bug--------------------------------------------
				case 'bugHome':
				res.render('bug/home',{myModules:req.session.modules,hideFlag:0,bug:req.resultActivity[0],activity:req.resultActivity[1],roleid:req.session.roleId,logo:req.session.logo,user:req.session.firstName,defaultModule:req.session.defaultModule,isApp:req.session.isApprover});
				break;
				case 'viewBug':
				res.render('bug/viewBug',{
					myModules:req.session.modules,
					hideFlag:0, 
					bug:req.resultViewBug[0],
					project:req.resultViewBug[1],
					status:req.resultViewBug[2],
					assingedto:req.resultViewBug[3],
					priority:req.resultViewBug[4],
					severity:req.resultViewBug[5],
					technology:req.resultViewBug[6],
					directedby:req.resultViewBug[3],
					type:req.resultViewBug[7],
                    allusers:req.resultViewBug[8],
					userid:req.session.userId,
					roleid:req.session.roleId,logo:req.session.logo,
					user:req.session.firstName,
					defaultModule:req.session.defaultModule,
					isApp:req.session.isApprover,
					showSelect:'-'
				});
				break;

				case 'raiseBug':
				res.render('bug/raiseBug',{myModules:req.session.modules,hideFlag:0,
					project:req.resultRaiseBug[0],
					status:req.resultRaiseBug[1],
					assingedto:req.resultRaiseBug[2],
					priority:req.resultRaiseBug[3],
					severity:req.resultRaiseBug[4],
					technology:req.resultRaiseBug[5],
					directedby:req.resultRaiseBug[2],
					type:req.resultRaiseBug[6],
					cycle:req.resultRaiseBug[7],
					allusers:req.resultRaiseBug[8],
					roleid:req.session.roleId,logo:req.session.logo,
					user:req.session.firstName,defaultModule:req.session.defaultModule,
					isApp:req.session.isApprover,bugSetting:req.session.bugSetting});
				break;
				case 'bugDetails':				
				res.json(req.resultBugDetails);
				break;
				
				case 'updateBugDetails':
				res.json('1');	
				break;
				case 'addComment':
				res.json(req.resultAddComment);	
				break;
				case 'addBug':
				res.redirect('/viewBug');	
				break;
				case 'bugAttachment':
				res.json(req.resultAddAttachment);	
				break;
				case 'getAlltech':
				res.json(req.resultAllTech);	
				break;
				case 'filterBug':
				res.render('bug/viewBug',{ 
				 myModules:req.session.modules,hideFlag:0,
				project:req.resultFilterBug[0],
				status:req.resultFilterBug[1],
				assingedto:req.resultFilterBug[2],
				priority:req.resultFilterBug[3],
				severity:req.resultFilterBug[4],
				technology:req.resultFilterBug[5],
				directedby:req.resultFilterBug[2],
				type:req.resultFilterBug[6],
				bug:req.resultFilterBug[7],
                allusers:req.resultFilterBug[8],
				roleid:req.session.roleId,logo:req.session.logo,user:req.session.firstName,
				userid:req.session.userid,
				defaultModule:req.session.defaultModule,
				isApp:req.session.isApprover,
				showSelect:req.showSelect
			});	
				break;
			
			case 'createEditClient' :
				res.render('createEditClient',{myModules:req.session.modules,hideFlag:1,clients:req.resultClient[0],id:0,editflag:req.body.hdnId,roleid:req.session.roleId,logo:req.session.logo,user:req.session.firstName,defaultModule:req.session.defaultModule,isApp:req.session.isApprover});
				break;

			case 'customrole' :
			    res.render('customrole',{myModules:req.session.modules,hideFlag:1,customrole:req.resultCustomRoles[0],industry:req.resultIndustry,business:req.resultBusiness,document:req.resultDocument,technology:req.resultTechnology,restriction:req.resultRestriction,role:req.resultRoles,customRole:req.resultCustomRoles,roleid:req.session.roleId,logo:req.session.logo,user:req.session.firstName,defaultModule:req.session.defaultModule,isApp:req.session.isApprover});
			    break;

		    case 'customRolesEntry' :
			   res.redirect('/customRoles');
			    break;

			case 'documentHome' :
			
          		console.log("llll;;;;;;;");	
            	res.render('document/documentHome',{flag:flag,myModules:req.session.modules,hideFlag:0,users:req.resultUsers[0],files:req.resultFiles,industry:req.resultIndustry,business:req.resultBusiness,document:req.resultDocument,technology:req.resultTechnology,restriction:req.resultRestriction,roleid:req.session.roleId,logo:req.session.logo,user:req.session.firstName,defaultModule:req.session.defaultModule,isApp:req.session.isApprover,alert:req.session.documentalert});
			    break;

			case 'Documenterror' :
			    res.render('document/Documenterror',{flag:flag,myModules:req.session.modules,hideFlag:0,roleid:req.session.roleId,logo:req.session.logo,user:req.session.firstName,defaultModule:req.session.defaultModule,isApp:req.session.isApprover});
			    break;    
			
			case 'permission' :
			   res.render('document/permission',{myModules:req.session.modules,hideFlag:0,user:req.session.firstName,roleid:req.session.roleId,files:req.permissionResult,logo:req.session.logo,defaultModule:req.session.defaultModule});
			   break; 

			case 'confirmedFilePermission' :
			   res.redirect('/permission');
               break;

            case 'deleteFileByIdPermanentely' :
               res.redirect('documentHome');
               break;

            case 'rejectFileById' :                     	
               		res.redirect('/permission');
               break; 

            case 'rejectedFiles':
            	res.render('document/rejectedFiles',{myModules:req.session.modules,hideFlag:0,user:req.session.firstName,roleid:req.session.roleId,files:req.resultRejectedFile,logo:req.session.logo,defaultModule:req.session.defaultModule,isApp:req.session.isApprover}); 
			    break;

			case 'attachDocFile' :
				req.session.documentalert=1;
				console.log("in upload done")
			    res.redirect('/document');
			    break;
			
		    case 'filterFiledata' :
               res.redirect('/documentHome');
               next();
               break;
//---------------------------------Project WBS-----------------------------------------------------
			case 'projectDetails' :
				res.render('projectDetails',{myModules:req.session.modules,hideFlag:1,allinfo:req.projectResults,roleid:req.session.roleId,logo:req.session.logo,user:req.session.firstName,defaultModule:req.session.defaultModule,isApp:req.session.isApprover});
				break;
				case 'addEditProject' :
				res.render('addEditProject',{myModules:req.session.modules,hideFlag:1,flag:req.flagForProject,name:req.projectResults[0],roleid:req.session.roleId,logo:req.session.logo,user:req.session.firstName,defaultModule:req.session.defaultModule,isApp:req.session.isApprover});
				break;
				case 'projectDetails11' :
				res.redirect('/projectDetails');
				break;
				case 'wbsDetails' :
				res.render('wbsDetails',{myModules:req.session.modules,hideFlag:1,allinfo:req.wbsResults,roleid:req.session.roleId,logo:req.session.logo,user:req.session.firstName,defaultModule:req.session.defaultModule,isApp:req.session.isApprover});
				break;
		case 'addEditWbs' :
				if(req.flagForProject==1){
				res.render('addEditWbs',{allpro:req.wbsResults[4],allWbs:req.wbsResults[3],myModules:req.session.modules,
					hideFlag:1,flag:req.flagForProject,owner:req.wbsResults[2],
					location:req.wbsResults[1],allinfo:'result',name:req.wbsResults,
					roleid:req.session.roleId,logo:req.session.logo,user:req.session.firstName,
					defaultModule:req.session.defaultModule});
				  }
				  else{
				  	res.render('addEditWbs',{allpro:req.wbsResults[4],allWbs:req.wbsResults[3],myModules:req.session.modules,hideFlag:1,flag:req.flagForProject,owner:req.wbsResults[2],name:'result[0]',location:req.wbsResults[1],allinfo:req.wbsResults[0],roleid:req.session.roleId,logo:req.session.logo,user:req.session.firstName,defaultModule:req.session.defaultModule});
				  
				  }
				break;


				case 'wbsDetails11' :

				if(req.wbshidden==0){
			res.redirect('/wbsDetails');
			}
			else if(req.wbshidden==2){
				res.redirect('/projectWbs?pid='+req.proname);
			}
			else if(req.wbshidden==3){
				res.redirect('/projectDetails');
			}
			else{
				res.redirect('/addEditWbs?id=0&flag=0');
			}

				break;

				case 'projectAddEdit' :
				res.render('projectAddEdit',{allPtype:req.projectResults[9],allPcat:req.projectResults[8],
					myModules:req.session.modules,hideFlag:1,allProjects:req.projectResults[7],flag:req.flag,location:req.projectResults[1],
					resource:req.projectResults[5],flagForTab:req.projectResults[6],
					tech:req.projectResults[2],manager:req.projectResults[4],teamlead:req.projectResults[5],
					client:req.projectResults[3],name:req.projectResults[0],roleid:req.session.roleId,logo:req.session.logo,user:req.session.firstName,defaultModule:req.session.defaultModule,isApp:req.session.isApprover});
				break;

				case 'projectDetails12' :
				res.redirect('/projectDetails');
				break;

				case 'projectWbs' :
			
				res.render('projectWbs',{prid:req.projectWbs[6],allUser1:req.projectWbs[5],allWbs:req.projectWbs[4],myModules:req.session.modules,hideFlag:1,project:req.projectWbs[0],wbs:req.projectWbs[1],
					location:req.projectWbs[2],owner:req.projectWbs[3],
					roleid:req.session.roleId,logo:req.session.logo,user:req.session.firstName,defaultModule:req.session.defaultModule,isApp:req.session.isApprover});
				break;




				//----------------------------ASSIGNMENT---------------------------------------

				case 'assignment' :
				res.render('assignment',{myModules:req.session.modules,hideFlag:1,allinfo1:req.allinfo1,roleid:req.session.roleId,logo:req.session.logo,user:req.session.firstName,defaultModule:req.session.defaultModule,isApp:req.session.isApprover});
				break;
			case 'createAssignment' :
				res.render('createAssignment',{
					myModules:req.session.modules,hideFlag:1,allinfo:req.allinfo,
					assignmentId:req.assignmentId,flag:req.flag,roleid:req.session.roleId,
					logo:req.session.logo,user:req.session.firstName,retailerId:req.session.retailerId,
					defaultModule:req.session.defaultModule,isApp:req.session.isApprover});
				break;
		    case 'changeAssignmentStatus' :
		       if(req.flag==1)
		       {
				res.redirect('/assignment');}
			else
					{
				res.redirect('/assignment?inactive=true');}
				break;
			case 'createSubmitAssignment' :
				res.json({flag:1});
				break;


				//------------------------------------------Asset-------------------------------

			// new for hardware
			case 'viewHardware':
				res.render('asset/viewHardware',{myModules:req.session.modules,hideFlag:0, htype:req.resultHardware[0],ctype:req.resultHardware[1],brandtype:req.resultHardware[2],roleid:req.session.roleId,logo:req.session.logo,user:req.session.firstName,defaultModule:req.session.defaultModule,isApp:req.session.isApprover})
		
				break;
			case 'viewFurniture' :
				res.render('asset/viewFurniture',{myModules:req.session.modules,hideFlag:0,
					flag:req.body.flag, stype:req.resultFurniture,roleid:req.session.roleId,
					logo:req.session.logo,user:req.session.firstName,defaultModule:req.session.defaultModule,
					isApp:req.session.isApprover});
				break;

			case 'viewStationary' :
				res.render('asset/viewStationary',{
					myModules:req.session.modules,hideFlag:0,flag:req.body.flag,
					stype:req.resultStationary,logo:req.session.logo,user:req.session.firstName,
					roleid:req.session.roleid,defaultModule:req.session.defaultModule,
					isApp:req.session.isApprover});
				break;
			case 'viewSoftware':
				res.render('asset/viewSoftware',{
					myModules:req.session.modules,hideFlag:0,flag:req.body.flag,stype:req.resultSoftware,
					logo:req.session.logo,user:req.session.firstName,roleid:req.session.roleid,
					defaultModule:req.session.defaultModule,isApp:req.session.isApprover});
				break;

			case 'addFurniture' :
				res.render('asset/addFurniture',{myModules:req.session.modules,hideFlag:0,
					roleid:req.session.roleId,logo:req.session.logo,user:req.session.firstName,
					defaultModule:req.session.defaultModule,isApp:req.session.isApprover})
				break;

			case 'trans' :
				res.json(req.resultUsers[0]);
				break;
			case 'transactions' :
				res.render('asset/transactions',{myModules:req.session.modules,hideFlag:0,
					users:req.resultUsers[0],roleid:req.session.roleId,logo:req.session.logo,
					user:req.session.firstName,defaultModule:req.session.defaultModule,
					isApp:req.session.isApprover})
				break;
			
			case 'Delete' :
				res.json(req.resultdelete);
				break;
			case 'addStationary':
				res.render('asset/addStationary',{myModules:req.session.modules,hideFlag:0,roleid:req.session.roleId,logo:req.session.logo,user:req.session.firstName,defaultModule:req.session.defaultModule,isApp:req.session.isApprover});
				break;
				//new 4 dynamic software
			case 'addSoftware':
				res.render('asset/addSoftware',{myModules:req.session.modules,hideFlag:0,stype:req.resultType,roleid:req.session.roleId,logo:req.session.logo,user:req.session.firstName,defaultModule:req.session.defaultModule,isApp:req.session.isApprover});
				break;
			 //new 4 assign soft
			 case 'assignSoftware':
				res.render('asset/assignSoftware',{myModules:req.session.modules,hideFlag:0,logo:req.session.logo,roleid:req.session.roleId,user:req.session.firstName,defaultModule:req.session.defaultModule,isApp:req.session.isApprover});
				break;
			case 'Edit' :
				res.json(req.resultedit);
				break;

			case 'Update':
				res.json(req.resultupdatedata);
				break;
				//new 4 hardware
			case 'EditHardware':
			res.json(req.resulteditHardware);
			 break;
//new for hardware
			case 'updateHardware':
				res.json(req.resultupdatehardware);
				break;
			case 'Updatestat':
				res.json(req.resultupdatest);
				break;
				
			case 'updateSoft':
				res.json(req.resultupdatesoft);
				break;
				case 'ajaxData' :
				res.json(req.resultMap);
				break;
			case 'ajaxSettings' :
				res.json(req.resultType);
				break;
			case 'assetSettings' :
				res.render('assetSettings',{myModules:req.session.modules,hideFlag:0,assetType:req.resultTypeSubtype[0],assetComponent:req.resultTypeSubtype[1],attr:req.resultTypeSubtype[2],user:req.session.firstName,roleid:req.session.roleid,defaultModule:req.session.defaultModule,isApp:req.session.isApprover});
				break;
				case 'transa' :
                res.json();
                break;
            case 'ajaxTrans':
                res.json(req.resultType);
                break;
            //new by palak
                case 'ajaxHw' :
				res.json(req.resultAttribute);
				break;
			case 'hardware' :
				res.render('asset/hardware',{myModules:req.session.modules,hideFlag:0,htype:req.resultType[0],brandtype:req.resultType[1],user:req.session.firstName,roleid:req.session.roleid,logo:req.session.logo,defaultModule:req.session.defaultModule,isApp:req.session.isApprover});
				break;
 			case 'transAss':
 				res.json(req.resultAssigned);
 				break;               

               
 
//---------------------------------Expense------------------------------------------
			case 'expenseHome' :

				res.render('expense/expenseHome',{myModules:req.session.modules,hideFlag:0,expenseType:req.resultExpense[0],expenseDetails:req.resultExpense[1],currency:req.resultExpense[2],totalExpense:req.resultExpense[3],bilableusers:req.resultExpense[4],trip:req.resultExpense[5],travelType:req.resultExpense[7],hotelType:req.resultExpense[6],Ex:1,role:req.resultRoles[0],roleid:req.session.roleId,logo:req.session.logo,user:req.session.firstName,limit: req.session.limit,defaultModule:req.session.defaultModule,isApp:req.session.isApprover,flag:0,penddinguser:req.resultExpense[8],approveBy:req.resultExpense[9]});
				console.log(req.resultExpense[8],req.resultExpense[9]);

				break;

				case 'expenseHomenew' :
				res.render('expense/expenseHome',{myModules:req.session.modules,hideFlag:0,expenseType:req.resultExpensenew[0],expenseDetails:req.resultExpensenew[1],currency:req.resultExpensenew[2],totalExpense:req.resultExpensenew[3],bilableusers:req.resultExpensenew[4],trip:req.resultExpensenew[5],travelType:req.resultExpensenew[7],hotelType:req.resultExpensenew[6],Ex:0,role:req.resultRoles[0],roleid:req.session.roleId,logo:req.session.logo,user:req.session.firstName,limit: req.session.limit ,defaultModule:req.session.defaultModule,isApp:req.session.isApprover,flag:0});
				break;
				case 'fileAttechment': 

				res.redirect('expensenew')
				break;
				case 'insertExpense' :
				res.redirect('expensenew')
				break;

				case 'isertExpensemaster' :
				res.redirect('expensemaster')
				break;

				case 'expenseDetails' :
				res.render('expense/expenseDetails',{myModules:req.session.modules,hideFlag:0,role:req.resultRoles[0],roleid:req.session.roleId,logo:req.session.logo,user:req.session.firstName,limit: req.session.limit,defaultModule:req.session.defaultModule,isApp:req.session.isApprover,flag:0});
				break;

                case 'expenseOther' :
				res.render('expense/expenseHome',{myModules:req.session.modules,hideFlag:0,expenseType:req.resultExpense[0],expenseDetails:req.resultExpense[1],currency:req.resultExpense[2],totalExpense:req.resultExpense[3],bilableusers:req.resultExpense[4],trip:req.resultExpense[5],travelType:req.resultExpense[7],hotelType:req.resultExpense[6],Ex:1,role:req.resultRoles[0],roleid:req.session.roleId,logo:req.session.logo,user:req.session.firstName,limit: req.session.limit,defaultModule:req.session.defaultModule,isApp:req.session.isApprover,flag:1});
				break;     

				case 'expensemaster' :
				res.render('expense/expenseMaster',{myModules:req.session.modules,hideFlag:0,expenseType:req.resultExpensemaster[0],role:req.resultRoles[0],expenseMasterType:req.resultExpensemaster[1],roleid:req.session.roleId,logo:req.session.logo,user:req.session.firstName,limit: req.session.limit,defaultModule:req.session.defaultModule,isApp:req.session.isApprover,flag:0});
				break;
				/*end expense Jogendra singh*/
				<!--- added by saurav   -->
				case 'masters':
				console.log("master render-----------");
			     var flag=req.flag==null?0:req.flag;
			   res.render('masters',
			   	{	timesheet1:req.timesheet,myModules:req.session.modules,
			   		bugMaster:req.bugMaster,otherMaster:req.otherMaster,
			   		bugMasterSubData:req.bugMasterSubData,
			   		hideFlag:1,expenseMaster:req.resultExpensemaster[0],
			   		expenseType:req.resultExpensemaster[1],
			   		roleid:req.session.roleId,
			   		logo:req.session.logo,user:req.session.firstName,
			   		limit: req.session.limit,
			   		flag:flag,customrole:req.resultCustomRoles[0],files:req.resultFiles,
			   		industry:req.resultIndustry,business:req.resultBusiness,
			   		document:req.resultDocument,technology:req.resultTechnology,
			   		restriction:req.resultRestriction,allinfo :req.resultHoliday,
			   		defaultModule:req.session.defaultModule,assetType:req.resultTypeSubtype});
			   break;
				/*case 'masters':
			     var flag=req.flag==null?0:req.flag;
			   res.render('masters',
			   	{myModules:req.session.modules,
			   		bugMaster:req.bugMaster,otherMaster:req.otherMaster,
			   		bugMasterSubData:req.bugMasterSubData,
			   		hideFlag:1,expenseMaster:req.resultExpensemaster[0],
			   		expenseType:req.resultExpensemaster[1],
			   		roleid:req.session.roleId,
			   		logo:req.session.logo,user:req.session.firstName,
			   		limit: req.session.limit,
			   		//assetType:req.resultTypeSubtype[0],
			   		//assetComponent:req.resultTypeSubtype[1],attr:req.resultTypeSubtype[2],
			   		flag:flag,customrole:req.resultCustomRoles[0],files:req.resultFiles,
			   		industry:req.resultIndustry,business:req.resultBusiness,
			   		document:req.resultDocument,technology:req.resultTechnology,
			   		restriction:req.resultRestriction,allinfo :req.resultHoliday,
			   		defaultModule:req.session.defaultModule});
			   break;*/
                             
                case 'uploadHoliday':
                 res.redirect('/masters');
                 break;

                 case 'calSetting':
                 res.render('calSetting',{myModules:req.session.modules,hideFlag:1,roleid:req.session.roleId,logo:req.session.logo,user:req.session.firstName,defaultModule:req.session.defaultModule,isApp:req.session.isApprover});
                 break;

//-----------------------------TimeSheethh---------------------------------------
                 case 'timeSheet':
               
			     res.render('timesheet/timeSheet',{myModules:req.session.modules,hideFlag:0,timeinfo:req.timeinfo,userid:req.session.userId,roleid:req.session.roleId,logo:req.session.logo,user:req.session.firstName,retailerId:req.session.retailerId,defaultModule:req.session.defaultModule,isApp:req.session.isApprover});
			     break;
			     case 'otherTimeSheet':
                
			     res.render('timesheet/timeSheetOther',{myModules:req.session.modules,hideFlag:0,timeinfo:req.session.timeinfo,data:req.data,id:req.session.timeshhetuserid,user:req.session.firstName,roleid:req.session.roleId,logo:req.session.logo,retailerId:req.session.retailerId,defaultModule:req.session.defaultModule,isApp:req.session.isApprover});
			    
			     break;


//-----------------------------RMS---------------------------------------
		case 'dashboard':
				res.render('rms/dashboard',{role:req.session.hrRole,Name: '',myModules:req.session.modules,
					hideFlag:0,id:req.userid,user:req.session.firstName,roleid:req.session.roleId,
					logo:req.session.logo,retailerId:req.session.retailerId,defaultModule:req.session.defaultModule});
				break ;
				case 'interview':
				res.render('rms/interview',{role:req.session.hrRole,Name: '',myModules:req.session.modules,hideFlag:0,id:req.userid,user:req.session.firstName,roleid:req.session.roleId,logo:req.session.logo,retailerId:req.session.retailerId,defaultModule:req.session.defaultModule});
				break ;
				case 'raiseRequisition':
				res.render('rms/raiseRequisition',{cities:req.hrRequisition[0],skills:req.hrRequisition[1]
      ,role:req.session.hrRole,Name:'',adminhr:req.hrRequisition[2],desig:req.hrRequisition[3],priority:req.hrRequisition[4],
      myModules:req.session.modules,hideFlag:0,id:req.userid,user:req.session.firstName,roleid:req.session.roleId,logo:req.session.logo,retailerId:req.session.retailerId,defaultModule:req.session.defaultModule});
				break ;
				case 'reqHod':
				res.render('rms/reqhod',{
					pdetails: req.hodResult[0],
                skills: req.hodResult[2],
                cities: req.hodResult[3],
                adminhr: req.hodResult[4],
                designation: req.hodResult[5],
                priority: req.hodResult[6],
                role: req.session.hrRole,
                Name: req.session.Name,
                flag: flag,
                myModules:req.session.modules,hideFlag:0,id:req.userid,user:req.session.firstName,
	                roleid:req.session.roleId,logo:req.session.logo,retailerId:req.session.retailerId,
	                defaultModule:req.session.defaultModule
            });
				console.log('jjojojojo',req.hodResult[0]);
			break ;
			case 'allrequisitions':
			res.render('rms/allrequisitions',{pdetails:req.allrequisitions[0],role:req.session.hrRole,
   		   		Name:req.session.Name,flag:req.fl1,skills:req.allrequisitions[1],
      			cities:req.allrequisitions[2],adminhr:req.allrequisitions[3],
      			designation:req.allrequisitions[4],priority:req.allrequisitions[5],
      			myModules:req.session.modules,hideFlag:0,id:req.userid,user:req.session.firstName,
	                roleid:req.session.roleId,logo:req.session.logo,retailerId:req.session.retailerId,
	                defaultModule:req.session.defaultModule
      		});

			break ;
			case 'viewCandidate':
				res.render('rms/viewCandidate',{
	                skills: req.viewCandidate[1],
	                location: req.viewCandidate[2],
	                role: req.session.hrRole,
	                Name: '',
	                myModules:req.session.modules,hideFlag:0,id:req.userid,user:req.session.firstName,
	                roleid:req.session.roleId,logo:req.session.logo,retailerId:req.session.retailerId,
	                defaultModule:req.session.defaultModule
            });
            break ;

            case 'scheduleInterview':
             res.redirect('/viewCandidate')
                 break;
              case 'submitparsedData':
             res.redirect('/viewCandidate')
                 break;
           
            case 'upload':
	            res.render('rms/upload', {
	                source: req.uploadData[0],
	                role: req.session.hrRole,
	                Name: ' ',
	                skills: req.uploadData[1],
	                location: req.uploadData[2],
	                myModules:req.session.modules,hideFlag:0,id:req.userid,user:req.session.firstName,
	                roleid:req.session.roleId,logo:req.session.logo,retailerId:req.session.retailerId,
	                defaultModule:req.session.defaultModule
	            });
            break ;
            case 'viewReq':	           
	            res.render('rms/viewReq', {
	                 role: req.session.hrRole,
		                Name: '',
		                pdetails:req.viewReq[0],
		                userInfo: req.viewReq[1],
		                adminhr: req.viewReq[2],
		                uid: req.session.userId,
		                myModules:req.session.modules,hideFlag:0,id:req.userid,user:req.session.firstName,
			                roleid:req.session.roleId,logo:req.session.logo,retailerId:req.session.retailerId,
			                defaultModule:req.session.defaultModule
	            });
	            console.log(req.viewReq[0]);
            break ;
            case 'userHrViewReq':	           
            res.render('rms/userHrViewReq', {
                 role: req.session.hrRole,
	                Name: '',
	                pdetails:req.userHrViewReq[0],	               
	                uid: req.session.userId,
	                myModules:req.session.modules,hideFlag:0,id:req.userid,user:req.session.firstName,
		                roleid:req.session.roleId,logo:req.session.logo,retailerId:req.session.retailerId,
		                defaultModule:req.session.defaultModule
            });
            break;
            case 'error':
            res.render('rms/error', {
	                 role: req.session.hrRole,Name: '',uid: req.session.userId,myModules:req.session.modules,hideFlag:0,id:req.userid,user:req.session.firstName,
		                roleid:req.session.roleId,logo:req.session.logo,retailerId:req.session.retailerId,
		                defaultModule:req.session.defaultModule
	            });
            break;
            case 'interviewFeedback':
            res.render('rms/interviewFeedback', {
	                 flag:  req.feedbackflag,
                cdt: req.interviewFeedback[0],
                role: req.session.hrRole,
                Name: '',
                myModules:req.session.modules,hideFlag:0,id:req.userid,user:req.session.firstName,
	                roleid:req.session.roleId,logo:req.session.logo,retailerId:req.session.retailerId,
	                defaultModule:req.session.defaultModule
	            });
            console.log('cdtiddbs',req.interviewFeedback[0]);
            break;
            case 'reqApprover':
            res.render('rms/reqApprover', {
	                 pdetails: req.reqApprover[0],
                role: req.session.hrRole,
                Name: ' ',
                myModules:req.session.modules,hideFlag:0,id:req.userid,user:req.session.firstName,
	                roleid:req.session.roleId,logo:req.session.logo,retailerId:req.session.retailerId,
	                defaultModule:req.session.defaultModule,projectDetails:req.projectDetails
	            });
            break;
            case 'updateStatusReqViaMail':
            res.render('index'); 
            break;


            //----------------------------------Project-------------------------------------------
             case 'task':
             res.render('project/task', {	               
                role: req.session.roleId,
                Name: ' ',
                myModules:req.session.modules,hideFlag:0,id:req.userid,user:req.session.firstName,
	                roleid:req.session.roleId,logo:req.session.logo,retailerId:req.session.retailerId,
	                defaultModule:req.session.defaultModule,treeComponent:req.treeComponent,maxid:req.maxid,
	                startid :req.minid,flag :req.flag,ultimateEndId:req.ultimateEndId,projectDetails:req.projectDetails,
	                prId:req.prId,prStartDate:req.prStartDate,prEndDate:req.prEndDate,Resources:req.Resources 
	            });

            break;
                case 'resource':
             res.render('project/resourceView', {	               
                role: req.session.roleId,
                Name: ' ',
                myModules:req.session.modules,hideFlag:0,id:req.userid,user:req.session.firstName,
	                roleid:req.session.roleId,logo:req.session.logo,retailerId:req.session.retailerId,
	                defaultModule:req.session.defaultModule,allResources:req.reqResources
	            });
            break;


            case 'projStatus':
             res.render('project/projStatus', {	               
                role: req.session.roleId,
                Name: ' ',
                myModules:req.session.modules,hideFlag:0,id:req.userid,user:req.session.firstName,
	                roleid:req.session.roleId,logo:req.session.logo,retailerId:req.session.retailerId,
	                defaultModule:req.session.defaultModule,effProjectCalculations:req.effProjectCalculations,
                     projectDetails:req.projectDetails
	            });

             break;

			default:
				next();
		}
	}
}

