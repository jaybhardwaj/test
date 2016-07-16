var app = angular.module('visualApp',  ['angularjs-dropdown-multiselect','toggle-switch','ui.bootstrap']);

app.controller('visualCtrl', function($scope, $http, $sce) {



  $scope.firstName  = "Hardik";

  $scope.lastName = "Munjal";

  $scope.employeeRecord =[];

  $scope.rootManager=[];

  $scope.totalEmployees=0;

  $scope.headers=[];

  $scope.switchStatus=true;



  $scope.myModel = "";



  $scope.records = [{

    id: 1,

    value: "Today",

  }, {

    id: 2,

    value: "Last Fortnight",

  }, {

    id: 3,

    value: "Last Quarter",

  },{

    id: 4,

    value: "Last Year",

  },{

   id: 4,

   value: " -- Select advanced date filters --"

 }

 ];

 

 

 

 

 $scope.today = function() {

  $scope.dt = new Date();

};

$scope.today();



$scope.clear = function() {

  $scope.dt = null;

};



$scope.inlineOptions = {

  customClass: getDayClass,

  minDate: new Date(),

  showWeeks: true

};



$scope.dateOptions = {

  dateDisabled: disabled,

  formatYear: 'yy',

  maxDate: new Date(2020, 5, 22),

  minDate: new Date(),

  startingDay: 1

};



  // Disable weekend selection

  function disabled(data) {

    var date = data.date,

    mode = data.mode;

    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);

  }



  $scope.toggleMin = function() {

    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();

    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;

  };



  $scope.toggleMin();



  $scope.open1 = function() {

    $scope.popup1.opened = true;

  };



  $scope.open2 = function() {

    $scope.popup2.opened = true;

  };



  $scope.setDate = function(year, month, day) {

    $scope.dt = new Date(year, month, day);

  };



  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];

  $scope.format = $scope.formats[0];

  $scope.altInputFormats = ['M!/d!/yyyy'];



  $scope.popup1 = {

    opened: false

  };



  $scope.popup2 = {

    opened: false

  };



  var tomorrow = new Date();

  tomorrow.setDate(tomorrow.getDate() + 1);

  var afterTomorrow = new Date();

  afterTomorrow.setDate(tomorrow.getDate() + 1);

  $scope.events = [

  {

    date: tomorrow,

    status: 'full'

  },

  {

    date: afterTomorrow,

    status: 'partially'

  }

  ];



  function getDayClass(data) {

    var date = data.date,

    mode = data.mode;

    if (mode === 'day') {

      var dayToCheck = new Date(date).setHours(0,0,0,0);



      for (var i = 0; i < $scope.events.length; i++) {

        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);



        if (dayToCheck === currentDay) {

          return $scope.events[i].status;

        }

      }

    }



    return '';

  }



  $scope.example14model = [];

  $scope.example14settings = {

    scrollableHeight: '450px',

    scrollable: true,

    enableSearch: true

  };

  $scope.example14data = [{

    "label": "Open Bug",

    "id": {"label_id" : "OpenBug" , "label_name" : "Open Bug"}

  }, {

    "label": "Closed Bug",

    "id": {"label_id" : "ClosedBug" , "label_name" : "Closed Bug"}

  }, {

    "label": "No. Of doc uploaded",

    "id": {"label_id" : "No_Of_Doc_Uploaded" , "label_name" : "No. Of doc uploaded"}

  }, {

    "label": "No. Of task completed",

    "id": {"label_id" : "No_Of_Task_Completed" , "label_name" : "No. Of task completed"}

  }, {

    "label": "No. Of task open",

    "id": {"label_id" : "No_Of_Task_Open" , "label_name" : "No. Of task open"}

  },

  {

    "label": "No. Of task delayed",

    "id": {"label_id" : "No_Of_Task_Delayed" , "label_name" : "No. Of task delayed"}

  }, {

    "label": "No. Of excallation",

    "id": {"label_id" : "No_Of_Excallation" , "label_name" : "No. Of excallation"}

  }, {

    "label": "No. Of billable hour",

    "id": {"label_id" : "No_Of_Billable_Hour" , "label_name" : "No. Of billable hour"}

  }, {

    "label": "No. Of interviews taken",

    "id": {"label_id" : "No_Of_Interviews_Taken" , "label_name" : "No. Of interviews taken"}

  }, {

    "label": "No. Of leaves",

    "id": {"label_id" : "No_Of_Leaves" , "label_name" : "No. Of leaves"}

  },

{

    "label": "Bench date",

    "id": {"label_id" : "Bench_Date" , "label_name" : "Bench date"}

  }, {

    "label": "No. Of times timesheet rejected",

    "id": {"label_id" : "No_Of_Times_Timesheet_Rejected" , "label_name" : "No of Times Timesheet Rejected"}

  }, {

    "label": "No. Of times timesheet delayed",

    "id": {"label_id" : "No_Of_Times_Timesheet_Delayed" , "label_name" : "No. Of times timesheet delayed"}

  }, {

    "label": "Current timesheet status",

    "id": {"label_id" : "Current_Timesheet_Status" , "label_name" : "Current timesheet status"}

  }];

  $scope.example2settings = {

    displayProp: 'id'

  };









  function DataValidatorExtractotr(){





//############### Get Root Manager ##############################

$http.get("/getEmpData?mgr_id=0")

.then(function(response) {

  $scope.rootManager =response.data[0];

});

//############### Get All Employee Records #######################

$http.get("/getEmpData/")


.then(function(response) {

 $scope.employeeRecord =response.data[0];
 $scope.totalEmployees= $scope.employeeRecord.length;

 for(i=0;i<$scope.employeeRecord.length;i++){

  for(j=0;j<$scope.rootManager.length;j++){



   if(JSON.stringify($scope.employeeRecord[i]) == JSON.stringify($scope.rootManager[j])){

    $scope.employeeRecord[i].managerId=0;

  }

}

}





var arrayObjectNesting=function getNestedChildren(arr, parent) {

  var out = []

  for(var i in arr) {

    if(arr[i].managerId == parent) {

      var children = getNestedChildren(arr, arr[i].id)

      if(children.length) {

        arr[i].children = children

      }

      out.push(arr[i])

    }

  }

  return out

}



//############################### In case of summated data of children nodes



//$scope.employeeRecordMain = $scope.employeeRecord;

$scope.employeeRecordMain = JSON.parse(JSON.stringify($scope.employeeRecord));

$scope.employeeRecordMainSecond = JSON.parse(JSON.stringify($scope.employeeRecord));



//var xxx= [{"id":40,"firstName":"Amit","lastName":"K","userEmail":"amit@polestarllp.com","contactNumber":"9540737271","userPassword":"$2a$04$2qLfEToqanf21qrL.uooqu76fQ7aU.cGl.Ppn5WHqlte2uHbjgGbS","roleId":1,"retailerId":11,"managerId":40,"createdDate":"2016-04-13 09:45:23","createdBy":null,"lastModifiedDate":"2016-05-30 13:38:20","lastModifiedBy":null,"isClient":0,"clientId":0,"isValidated":1,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":0,"crole_id":1,"timeApproval":null,"attr3":null,"isApproval":0,"approveLimit":0,"doj":null,"dob":null,"doc":null,"ecode":null,"designation":null,"level":null,"modules":null,"userId":null,"rtype":null,"isRetailer":"1","hrRole":3,"hodId":null},{"id":41,"firstName":"Anuj","lastName":"Singh","userEmail":"anuj.singh@polestarllp.com","contactNumber":"","userPassword":"9","roleId":2,"retailerId":11,"managerId":40,"createdDate":"2016-04-13 09:51:26","createdBy":40,"lastModifiedDate":"2016-04-13 09:51:26","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":1,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1001","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":42,"firstName":"Avinash","lastName":"Gautam","userEmail":"avinash.gautam@polestarllp.com","contactNumber":"","userPassword":"1","roleId":2,"retailerId":11,"managerId":40,"createdDate":"2016-04-13 09:52:28","createdBy":40,"lastModifiedDate":"2016-05-19 13:18:46","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":1,"isActive":1,"isBillable":0,"billingAmount":"","defaultModuleId":1,"crole_id":0,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1053","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":3,"hodId":95},{"id":43,"firstName":"Shubham","lastName":"Agarwal","userEmail":"shubham.agarwal@polestarllp.com","contactNumber":"","userPassword":"1","roleId":2,"retailerId":11,"managerId":42,"createdDate":"2016-04-13 10:13:43","createdBy":40,"lastModifiedDate":"2016-04-13 10:39:24","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":1,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1124DL","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":46,"firstName":"Jyoti","lastName":"Bisht","userEmail":"jyoti.bisht@polestarl1lp.com","contactNumber":"8527797969","userPassword":"1","roleId":2,"retailerId":11,"managerId":47,"createdDate":"2016-04-13 10:18:01","createdBy":40,"lastModifiedDate":"2016-04-19 05:12:14","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":1,"isActive":1,"isBillable":0,"billingAmount":"-9","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1107","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":47,"firstName":"Deepak","lastName":"Singh","userEmail":"deepak.singh@polestarllp.com","contactNumber":"","userPassword":"1","roleId":2,"retailerId":11,"managerId":42,"createdDate":"2016-04-13 10:21:25","createdBy":40,"lastModifiedDate":"2016-04-18 05:41:22","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":1,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1097","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":48,"firstName":"Sudhakar","lastName":"Pandey","userEmail":"sudhakar.pandey@polestarllp.com","contactNumber":"","userPassword":"3MbAbnv7oV","roleId":2,"retailerId":11,"managerId":47,"createdDate":"2016-04-13 10:22:09","createdBy":40,"lastModifiedDate":"2016-04-13 10:38:11","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":1,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1120","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":49,"firstName":"Jogendra","lastName":"Singh","userEmail":"jo@polestarllp.com","contactNumber":"","userPassword":"d40fdo8CCx","roleId":2,"retailerId":11,"managerId":42,"createdDate":"2016-04-13 10:23:17","createdBy":40,"lastModifiedDate":"2016-05-30 06:36:15","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":1,"isActive":1,"isBillable":0,"billingAmount":"","defaultModuleId":1,"crole_id":0,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1098","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":5,"hodId":0},{"id":50,"firstName":"Sonia","lastName":"Ghanghas","userEmail":"sonia.ghanghas@polestarllp.com","contactNumber":"","userPassword":"We9rWC1pf5","roleId":2,"retailerId":11,"managerId":41,"createdDate":"2016-04-13 10:30:08","createdBy":40,"lastModifiedDate":"2016-04-13 10:36:41","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":0,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1122","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null},{"id":51,"firstName":"Abhilash","lastName":"Kushwaha","userEmail":"abhilash.kushwaha@polestarllp.com","contactNumber":"","userPassword":"fXZnaOL6qZ","roleId":2,"retailerId":11,"managerId":41,"createdDate":"2016-04-13 10:32:39","createdBy":40,"lastModifiedDate":"2016-04-13 10:36:25","lastModifiedBy":40,"isClient":0,"clientId":0,"isValidated":1,"isActive":1,"isBillable":0,"billingAmount":"0","defaultModuleId":1,"crole_id":1,"timeApproval":0,"attr3":null,"isApproval":0,"approveLimit":0,"doj":"","dob":"","doc":"","ecode":"1022","designation":0,"level":0,"modules":null,"userId":null,"rtype":null,"isRetailer":"0","hrRole":null,"hodId":null}]





$scope.count = 0;

$scope.$watch('example14model', function(newValue, oldValue) {



  console.log('coming at select changes');

        // do something here



        $scope.count += 1;

        if(newValue){



          $scope.headers = newValue;

          $scope.employeeRecord = arrayObjectNesting($scope.employeeRecordMain,0);





        //###### Converting array_object_result as per the need of d3 #########################

        var nestedObjectForD3={};

        nestedObjectForD3.id=-1;

        nestedObjectForD3.firstName="Employee";

        nestedObjectForD3.children=$scope.employeeRecord;

        d3.select("svg").remove();

         // var blank=[];

        // chartNode(blank);

        chartNode(nestedObjectForD3);

      }

    }, true);



$scope.$watch('switchStatus', function(newValue, oldValue) {

        // do something here



        $scope.count += 1;

        if(newValue==false){





          console.log('coming at true')



          var xxx = $scope.employeeRecordMainSecond;

          var alteredXxx=[];

          var managerTotalPool=[];

          var topLevelCount=0;





          function looper(){





            if(xxx.length>1 && topLevelCount<3)

            {



              var nochildren=[];

              managerTotalPool=[];

              var count=0;

              for(i=0;i<xxx.length;i++){

                var myid= xxx[i].id;

                for(j=0;j<xxx.length;j++){



                  if(myid==xxx[j].managerId){



                    count=count+1;

                  }

                }



                if(count==0){



                  nochildren.push(xxx[i])

                }

                else{

                  count=0;

                }

              }



              for(i=0;i<nochildren.length;i++){



                var mycount=0;



                if(i==0){

                  var managerTotal={};

                  managerTotal.mgrId=nochildren[0].managerId;

                  managerTotal.roleId=nochildren[0].roleId;

                  managerTotalPool.push(managerTotal);

                }



                for(j=0;j<managerTotalPool.length;j++){





                 if(i>0 && nochildren[i].managerId==managerTotalPool[j].mgrId){



                  mycount=mycount+1;

                  managerTotalPool[j].roleId = managerTotalPool[j].roleId + nochildren[i].roleId;



                }

              }



              if(i>0 && mycount==0){

                var managerTotal={};

                managerTotal.mgrId=nochildren[i].managerId;

                managerTotal.roleId=nochildren[i].roleId;

                managerTotalPool.push(managerTotal);

                mycount=0;

              }

              mycount==0;

            }





            for(i=0;i<xxx.length;i++){



              for(j=0;j<nochildren.length;j++){

                if(JSON.stringify(xxx[i])===JSON.stringify(nochildren[j])){

        //console.log('match found');

      //  console.log(xxx[i]);

      xxx.splice(i,1);

    }

  }

}



for(i=0;i<xxx.length;i++){



  for(j=0;j<managerTotalPool.length;j++){



        //  console.log('manager total pool length',managerTotalPool.length);

        if(xxx[i].id==managerTotalPool[j].mgrId){



          xxx[i].roleId = managerTotalPool[j].roleId + xxx[i].roleId;

        }

      }

    }





    for(i=0;i<nochildren.length;i++){



      alteredXxx.push(nochildren[i]);

    }



  //  if(topLevelCount==0){

  //  console.log('sab yahis e pata chalega level 1');

  //  console.log(nochildren.length);

  //  console.log('alteredxxx',alteredXxx);



  // }

  // if(topLevelCount==1){

  //  console.log('sab yahis e pata chalega level 2');

  //  console.log(nochildren.length);

  //  console.log('alteredxxx',alteredXxx);

  // }



  // if(topLevelCount==2){

  //  console.log('sab yahis e pata chalega level 3');

  //  console.log(nochildren.length);

  //  console.log('alteredxxx',alteredXxx);

  // }



  topLevelCount=topLevelCount + 1;

  looper();

}

}



//**********************************  Main Looper calling  ***********************************************

looper();





for(i=0;i<xxx.length;i++){

  alteredXxx.push(xxx[i]);

}



$scope.employeeRecord = alteredXxx;

console.log(alteredXxx);



console.log('text has been altered');







//##########  function to convert employee array object to nested array object ################

// var arrayObjectNesting=function getNestedChildren(arr, parent) {

//   var out = []

//   for(var i in arr) {

//     if(arr[i].managerId == parent) {

//       var children = getNestedChildren(arr, arr[i].id)

//       if(children.length) {

//         arr[i].children = children

//       }

//       out.push(arr[i])

//     }

//   }

//   return out

// }

$scope.employeeRecord = arrayObjectNesting($scope.employeeRecord,0);





//###### Converting array_object_result as per the need of d3 #########################

var nestedObjectForD3={};

nestedObjectForD3.id=-1;

nestedObjectForD3.firstName="Employee";

nestedObjectForD3.children=$scope.employeeRecord;





d3.select("svg").remove();

chartNode(nestedObjectForD3);





}

else{

  console.log('coming at individual');

  $scope.employeeRecord = arrayObjectNesting($scope.employeeRecordMain,0);





//###### Converting array_object_result as per the need of d3 #########################

var nestedObjectForD3={};

nestedObjectForD3.id=-1;

nestedObjectForD3.firstName="Employee";

nestedObjectForD3.children=$scope.employeeRecord;



d3.select("svg").remove();


chartNode(nestedObjectForD3);

}

}, true);










// $http.get("http://localhost:4000/json1/")

//  .then(function(response) {



//   $scope.employeeRecord =response.data[0];

//   $scope.totalEmployees= $scope.employeeRecord.length;



//   for(i=0;i<$scope.employeeRecord.length;i++){

//    for(j=0;j<$scope.rootManager.length;j++){



//         if(JSON.stringify($scope.employeeRecord[i]) == JSON.stringify($scope.rootManager[j])){

//          $scope.employeeRecord[i].managerId=0;

//        }

//      }

//    }



//  });





});



}



$scope.update = function() {

 if($scope.myModel==1){

  $scope.dt = new Date();

  $scope.dt2 = new Date();



}

if($scope.myModel==2){

 var fortnight = new Date();

 var today = new Date();

 fortnight.setDate(fortnight.getDate() - 15);

 $scope.dt = today;

 $scope.dt2 = fortnight;

}

if($scope.myModel==3){

 var afterTomorrow = new Date();

 afterTomorrow.setDate(tomorrow.getDate() + 1);

 $scope.dt = new Date();

}

if($scope.myModel==4){

  $scope.dt = new Date();

}



DataValidatorExtractotr();



} 



DataValidatorExtractotr();

//############ Main Function of D3 which is creating a chart ####################33#
var chartNode=function maker(json){

  var margin = {top: 20, right: 120, bottom: 150, left: 120},
  width = 960 - margin.right - margin.left,
  height = 550 - margin.top - margin.bottom;

  var i = 0,
  duration = 1250,
  root;

  var tree = d3.layout.tree()
  .size([height, width]);

  var diagonal = d3.svg.diagonal()
  .projection(function(d) { return [d.y, d.x]; });

  var svg = d3.select("#accordions").append("svg")
  .attr("width", width + margin.right + margin.left)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  root = json;
  console.log(root.firstName);
  root.x0 = height / 2;
  root.y0 = 0;

  function collapse(d) {
    if (d.children) {
      d._children = d.children;
      d._children.forEach(collapse);
      d.children = null;
    }
  }

  root.children.forEach(collapse);
  update(root);

  d3.select(self.frameElement).style("height", "700px");

//   function update(source) {

//   // Compute the new tree layout.
//   var nodes = tree.nodes(root).reverse(),
//   links = tree.links(nodes);

//   // Normalize for fixed-depth.
//   nodes.forEach(function(d) { d.y = d.depth * 100; });

//   // Update the nodes…
//   var node = svg.selectAll("g.node")
//   .data(nodes, function(d) { return d.id || (d.id = ++i); });

//   // Enter any new nodes at the parent's previous position.
//   var nodeEnter = node.enter().append("g")
//   .attr("class", "node")
//   .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
//   .on("click", click);

//   nodeEnter.append("circle")
//   .attr("r", 1e-6)
//   .style("fill", function(d) {
//     return d._children ? "lightsteelblue" : "#fff"; 
//   })
//   .append("svg:title").text(function(d) {return "Current Tasks: " + d.isClient + 
//     "\nisBillable: " + d.isBillable;});

//   nodeEnter.append("text")
//   .attr("x", function(d) { return d.children || d._children ? -10 : 10; })
//   .attr("dy", ".35em")
//   .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
//   .text(function(d) { return d.firstName; })
//   .style("fill-opacity", 1e-6);

//   // Transition nodes to their new position.
//   var nodeUpdate = node.transition()
//   .duration(duration)
//   .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

//   nodeUpdate.select("circle")
//   .attr("r", 4.5)
//   .style("fill", function(d) { 

//     $scope.totalEmployees

//     if(d._children){
//      var myDirectChildren = d._children.length; 
//      var effectivePercentage = (myDirectChildren/$scope.totalEmployees)*100
//    }


//    if(d._children && effectivePercentage>20){
//     console.log('coming here');
//     return "#66FF33"; 
//   }
//   if(d._children && effectivePercentage<20 && effectivePercentage>10){
//     console.log('coming here');
//     return "#0099FF"; 
//   }
//   if(d._children && effectivePercentage<10 && effectivePercentage>5){
//     console.log('coming here');
//     return "#8DD3C7"; 
//   }
//   if(d._children && effectivePercentage<5 && effectivePercentage>0){
//     console.log('coming here');
//     return "#CCFF66"; 
//   }
//   else{
//     return "#fff"}});
  
//        // return d._children ? "red" : "#fff"; });

// nodeUpdate.select("text")
// .style("fill-opacity", 1);

//   // Transition exiting nodes to the parent's new position.
//   var nodeExit = node.exit().transition()
//   .duration(duration)
//   .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
//   .remove();

//   nodeExit.select("circle")
//   .attr("r", 1e-6);

//   nodeExit.select("text")
//   .style("fill-opacity", 1e-6);

//   // Update the links…
//   var link = svg.selectAll("path.link")
//   .data(links, function(d) { return d.target.id; });

//   // Enter any new links at the parent's previous position.
//   link.enter().insert("path", "g")
//   .attr("class", "link")
//   .attr("d", function(d) {
//     var o = {x: source.x0, y: source.y0};
//     return diagonal({source: o, target: o});
//   });

//   // Transition links to their new position.
//   link.transition()
//   .duration(duration)
//   .attr("d", diagonal);

//   // Transition exiting nodes to the parent's new position.
//   link.exit().transition()
//   .duration(duration)
//   .attr("d", function(d) {
//     var o = {x: source.x, y: source.y};
//     return diagonal({source: o, target: o});
//   })
//   .remove();

//   // Stash the old positions for transition.
//   nodes.forEach(function(d) {
//     d.x0 = d.x;
//     d.y0 = d.y;
//   });
// }

// // Toggle children on click.
// function click(d) {
//   if (d.children) {
//     d._children = d.children;
//     d.children = null;
//   } else {
//     d.children = d._children;
//     d._children = null;
//   }
//   update(d);
// }
// }
// });


function update(source) {

 

  // Compute the new tree layout.

  var nodes = tree.nodes(root).reverse(),

  links = tree.links(nodes);

 

  // Normalize for fixed-depth.

  nodes.forEach(function(d) { d.y = d.depth * 100; });

 

  // Update the nodes…

  var node = svg.selectAll("g.node")

  .data(nodes, function(d) { return d.id || (d.id = ++i); });

 

  // Enter any new nodes at the parent's previous position.

  var nodeEnter = node.enter().append("g")

  .attr("class", "node")

  .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })

  .on("click", click);

 

  nodeEnter.append("circle")

  .attr("r", 1e-6)

  .style("fill", function(d) {

    return d._children ? "lightsteelblue" : "#fff";

  })

  .append("svg:title").text(function(d) {

  

   // var checking="Current Tasks: " + d.isClient +

   //  "\nisBillable: " + d.isBillable ;

   //  return "Current Tasks: " + d.isClient +

   //  "\nisBillable: " + d.isBillable;});

  console.log(d.userEmail);
  console.log('bhai yaha',d);

 var resHeaders="\n";

for(i=0;i<$scope.headers.length;i++){

 

// var d3id= eval($scope.headers[i].id[1]);

  console.log(typeof($scope.headers[i].id.label_id))

  //console.log('ddd',d3id);

  //var d3id= JSON.parse($scope.headers[i].id);


var kaash=$scope.headers[i].id.label_id;

resHeaders= resHeaders + $scope.headers[i].id.label_name + ":" +d[kaash]+ "\n";

}

 

return resHeaders;

});

    // return "$scope.headers[0].id+:" + d.isClient +

    // "\nisBillable: " + d.isBillable;});

 

  // nodeEnter.append("text")

  // .attr("x", function(d) { return d.children || d._children ? -10 : 10; })

  // .attr("dy", ".35em")

  // .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })

  // .text(function(d) { return d.firstName; })

  // .style("fill",function(d) {

  //   return d._children ? "red" : "#fff";

  // })

  nodeEnter.append("text")
  .attr("x", function(d) { return d.children || d._children ? -10 : 10; })
  .attr("dy", ".35em")
  .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
  .text(function(d) { return d.firstName; })
  .style("fill-opacity", 1e-6);

  // Transition nodes to their new position.

  var nodeUpdate = node.transition()

  .duration(duration)

  .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

 

  nodeUpdate.select("circle")

  .attr("r", 4.5)

  .style("fill", function(d) {

 

    $scope.totalEmployees

 

    if(d._children){

       var myDirectChildren = d._children.length;

       var effectivePercentage = (myDirectChildren/$scope.totalEmployees)*100

 

 

    }

   if(d._children && effectivePercentage>20){
    console.log('coming here');
    return "#66FF33"; 
  }
  if(d._children && effectivePercentage<20 && effectivePercentage>10){
    console.log('coming here');
    return "#0099FF"; 
  }
  if(d._children && effectivePercentage<10 && effectivePercentage>5){
    console.log('coming here');
    return "#8DD3C7"; 
  }
  if(d._children && effectivePercentage<5 && effectivePercentage>0){
    console.log('coming here');
    return "#CCFF66"; 
  }
  else{
    return "#fff"}});
  
       // return d._children ? "red" : "#fff"; });


       nodeUpdate.select("text")

       .style("fill-opacity", 1);

 

  // Transition exiting nodes to the parent's new position.

  var nodeExit = node.exit().transition()

  .duration(duration)

  .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })

  .remove();

 

  nodeExit.select("circle")

  .attr("r", 1e-6);

 

  nodeExit.select("text")

  .style("fill-opacity", 1e-6);

 

  // Update the links…

  var link = svg.selectAll("path.link")

  .data(links, function(d) { return d.target.id; });

 

  // Enter any new links at the parent's previous position.

  link.enter().insert("path", "g")

  .attr("class", "link")

  .attr("d", function(d) {

    var o = {x: source.x0, y: source.y0};

    return diagonal({source: o, target: o});

  });

 

  // Transition links to their new position.

  link.transition()

  .duration(duration)

  .attr("d", diagonal);

 

  // Transition exiting nodes to the parent's new position.

  link.exit().transition()

  .duration(duration)

  .attr("d", function(d) {

    var o = {x: source.x, y: source.y};

    return diagonal({source: o, target: o});

  })

  .remove();

 

  // Stash the old positions for transition.

  nodes.forEach(function(d) {

    d.x0 = d.x;

    d.y0 = d.y;

  });

}

 

// Toggle children on click.

function click(d) {

  if (d.children) {

    d._children = d.children;

    d.children = null;

  } else {

    d.children = d._children;

    d._children = null;

  }

  update(d);

}

}

});





var directiveModule = angular.module('angularjs-dropdown-multiselect', []);



directiveModule.directive('ngDropdownMultiselect', ['$filter', '$document', '$compile', '$parse',



  function ($filter, $document, $compile, $parse) {



    return {

      restrict: 'AE',

      scope: {

        selectedModel: '=',

        options: '=',

        extraSettings: '=',

        events: '=',

        searchFilter: '=?',

        translationTexts: '=',

        groupBy: '@'

      },

      template: function (element, attrs) {

        var checkboxes = attrs.checkboxes ? true : false;

        var groups = attrs.groupBy ? true : false;



        var template = '<div class="multiselect-parent btn-group dropdown-multiselect">';

        template += '<button type="button" class="dropdown-toggle" ng-class="settings.buttonClasses" ng-click="toggleDropdown()">{{getButtonText()}}&nbsp;<span class="caret"></span></button>';

        template += '<ul class="dropdown-menu dropdown-menu-form" ng-style="{display: open ? \'block\' : \'none\', height : settings.scrollable ? settings.scrollableHeight : \'auto\' }" style="overflow: scroll" >';

        template += '<li ng-hide="!settings.showCheckAll || settings.selectionLimit > 0"><a data-ng-click="selectAll()"><span class="glyphicon glyphicon-ok"></span>  {{texts.checkAll}}</a>';

        template += '<li ng-show="settings.showUncheckAll"><a data-ng-click="deselectAll();"><span class="glyphicon glyphicon-remove"></span>   {{texts.uncheckAll}}</a></li>';

        template += '<li ng-hide="(!settings.showCheckAll || settings.selectionLimit > 0) && !settings.showUncheckAll" class="divider"></li>';

        template += '<li ng-show="settings.enableSearch"><div class="dropdown-header"><input type="text" class="form-control" style="width: 100%;" ng-model="searchFilter" placeholder="{{texts.searchPlaceholder}}" /></li>';

        template += '<li ng-show="settings.enableSearch" class="divider"></li>';



        if (groups) {

          template += '<li ng-repeat-start="option in orderedItems | filter: searchFilter" ng-show="getPropertyForObject(option, settings.groupBy) !== getPropertyForObject(orderedItems[$index - 1], settings.groupBy)" role="presentation" class="dropdown-header">{{ getGroupTitle(getPropertyForObject(option, settings.groupBy)) }}</li>';

          template += '<li ng-repeat-end role="presentation">';

        } else {

          template += '<li role="presentation" ng-repeat="option in options | filter: searchFilter">';

        }



        template += '<a role="menuitem" tabindex="-1" ng-click="setSelectedItem(getPropertyForObject(option,settings.idProp))">';



        if (checkboxes) {

          template += '<div class="checkbox"><label><input class="checkboxInput" type="checkbox" ng-click="checkboxClick($event, getPropertyForObject(option,settings.idProp))" ng-checked="isChecked(getPropertyForObject(option,settings.idProp))" /> {{getPropertyForObject(option, settings.displayProp)}}</label></div></a>';

        } else {

          template += '<span data-ng-class="{\'glyphicon glyphicon-ok\': isChecked(getPropertyForObject(option,settings.idProp))}"></span> {{getPropertyForObject(option, settings.displayProp)}}</a>';

        }



        template += '</li>';



        template += '<li class="divider" ng-show="settings.selectionLimit > 1"></li>';

        template += '<li role="presentation" ng-show="settings.selectionLimit > 1"><a role="menuitem">{{selectedModel.length}} {{texts.selectionOf}} {{settings.selectionLimit}} {{texts.selectionCount}}</a></li>';



        template += '</ul>';

        template += '</div>';



        element.html(template);

      },

      link: function ($scope, $element, $attrs) {

        var $dropdownTrigger = $element.children()[0];



        $scope.toggleDropdown = function () {

          $scope.open = !$scope.open;

        };



        $scope.checkboxClick = function ($event, id) {

          $scope.setSelectedItem(id);

          $event.stopImmediatePropagation();

        };



        $scope.externalEvents = {

          onItemSelect: angular.noop,

          onItemDeselect: angular.noop,

          onSelectAll: angular.noop,

          onDeselectAll: angular.noop,

          onInitDone: angular.noop,

          onMaxSelectionReached: angular.noop

        };



        $scope.settings = {

          dynamicTitle: true,

          scrollable: false,

          scrollableHeight: '300px',

          closeOnBlur: true,

          displayProp: 'label',

          idProp: 'id',

          externalIdProp: 'id',

          enableSearch: false,

          selectionLimit: 0,

          showCheckAll: true,

          showUncheckAll: true,

          closeOnSelect: false,

          buttonClasses: 'btn btn-default',

          closeOnDeselect: false,

          groupBy: $attrs.groupBy || undefined,

          groupByTextProvider: null,

          smartButtonMaxItems: 0,

          smartButtonTextConverter: angular.noop

        };



        $scope.texts = {

         checkAll: 'Check All',

         uncheckAll: 'Uncheck All',

         selectionCount: 'checked',

         selectionOf: '/',

         searchPlaceholder: 'Search...',

         buttonDefaultText: 'Customize Toolbar Statistics',

         dynamicButtonTextSuffix: 'checked'

       };



       $scope.searchFilter = $scope.searchFilter || '';



       if (angular.isDefined($scope.settings.groupBy)) {

        $scope.$watch('options', function (newValue) {

          if (angular.isDefined(newValue)) {

            $scope.orderedItems = $filter('orderBy')(newValue, $scope.settings.groupBy);

          }

        });

      }



      angular.extend($scope.settings, $scope.extraSettings || []);

      angular.extend($scope.externalEvents, $scope.events || []);

      angular.extend($scope.texts, $scope.translationTexts);



      $scope.singleSelection = $scope.settings.selectionLimit === 1;



      function getFindObj(id) {

        var findObj = {};



        if ($scope.settings.externalIdProp === '') {

          findObj[$scope.settings.idProp] = id;

        } else {

          findObj[$scope.settings.externalIdProp] = id;

        }



        return findObj;

      }



      function clearObject(object) {

        for (var prop in object) {

          delete object[prop];

        }

      }



      if ($scope.singleSelection) {

        if (angular.isArray($scope.selectedModel) && $scope.selectedModel.length === 0) {

          clearObject($scope.selectedModel);

        }

      }



      if ($scope.settings.closeOnBlur) {

        $document.on('click', function (e) {

          var target = e.target.parentElement;

          var parentFound = false;



          while (angular.isDefined(target) && target !== null && !parentFound) {

            if (_.contains(target.className.split(' '), 'multiselect-parent') && !parentFound) {

              if (target === $dropdownTrigger) {

                parentFound = true;

              }

            }

            target = target.parentElement;

          }



          if (!parentFound) {

            $scope.$apply(function () {

              $scope.open = false;

            });

          }

        });

      }



      $scope.getGroupTitle = function (groupValue) {

        if ($scope.settings.groupByTextProvider !== null) {

          return $scope.settings.groupByTextProvider(groupValue);

        }



        return groupValue;

      };



      $scope.getButtonText = function () {

        if ($scope.settings.dynamicTitle && ($scope.selectedModel.length > 0 || (angular.isObject($scope.selectedModel) && _.keys($scope.selectedModel).length > 0))) {

          if ($scope.settings.smartButtonMaxItems > 0) {

            var itemsText = [];



            angular.forEach($scope.options, function (optionItem) {

              if ($scope.isChecked($scope.getPropertyForObject(optionItem, $scope.settings.idProp))) {

                var displayText = $scope.getPropertyForObject(optionItem, $scope.settings.displayProp);

                var converterResponse = $scope.settings.smartButtonTextConverter(displayText, optionItem);



                itemsText.push(converterResponse ? converterResponse : displayText);

              }

            });



            if ($scope.selectedModel.length > $scope.settings.smartButtonMaxItems) {

              itemsText = itemsText.slice(0, $scope.settings.smartButtonMaxItems);

              itemsText.push('...');

            }



            return itemsText.join(', ');

          } else {

            var totalSelected;



            if ($scope.singleSelection) {

              totalSelected = ($scope.selectedModel !== null && angular.isDefined($scope.selectedModel[$scope.settings.idProp])) ? 1 : 0;

            } else {

              totalSelected = angular.isDefined($scope.selectedModel) ? $scope.selectedModel.length : 0;

            }



            if (totalSelected === 0) {

              return $scope.texts.buttonDefaultText;

            } else {

              return totalSelected + ' ' + $scope.texts.dynamicButtonTextSuffix;

            }

          }

        } else {

          return $scope.texts.buttonDefaultText;

        }



      };



      $scope.getPropertyForObject = function (object, property) {

        if (angular.isDefined(object) && object.hasOwnProperty(property)) {

          return object[property];

        }



        return '';

      };



      $scope.selectAll = function () {

        $scope.deselectAll(false);

        $scope.externalEvents.onSelectAll();



        angular.forEach($scope.options, function (value) {

          $scope.setSelectedItem(value[$scope.settings.idProp], true);

        });

      };



      $scope.deselectAll = function (sendEvent) {

        sendEvent = sendEvent || true;



        if (sendEvent) {

          $scope.externalEvents.onDeselectAll();

        }



        if ($scope.singleSelection) {

          clearObject($scope.selectedModel);

        } else {

          $scope.selectedModel.splice(0, $scope.selectedModel.length);

        }

      };



      $scope.setSelectedItem = function (id, dontRemove) {

        var findObj = getFindObj(id);

        var finalObj = null;



        if ($scope.settings.externalIdProp === '') {

          finalObj = _.find($scope.options, findObj);

        } else {

          finalObj = findObj;

        }



        if ($scope.singleSelection) {

          clearObject($scope.selectedModel);

          angular.extend($scope.selectedModel, finalObj);

          $scope.externalEvents.onItemSelect(finalObj);

          if ($scope.settings.closeOnSelect) $scope.open = false;



          return;

        }



        dontRemove = dontRemove || false;



        var exists = _.findIndex($scope.selectedModel, findObj) !== -1;



        if (!dontRemove && exists) {

          $scope.selectedModel.splice(_.findIndex($scope.selectedModel, findObj), 1);

          $scope.externalEvents.onItemDeselect(findObj);

        } else if (!exists && ($scope.settings.selectionLimit === 0 || $scope.selectedModel.length < $scope.settings.selectionLimit)) {

          $scope.selectedModel.push(finalObj);

          $scope.externalEvents.onItemSelect(finalObj);

        }

        if ($scope.settings.closeOnSelect) $scope.open = false;

      };


      $scope.isChecked = function (id) {

        if ($scope.singleSelection) {
          return $scope.selectedModel !== null && angular.isDefined($scope.selectedModel[$scope.settings.idProp]) && $scope.selectedModel[$scope.settings.idProp] === getFindObj(id)[$scope.settings.idProp];
        }
        return _.findIndex($scope.selectedModel, getFindObj(id)) !== -1;

      };

      $scope.externalEvents.onInitDone();
    }
  };
}]);