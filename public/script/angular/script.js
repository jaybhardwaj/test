
var app = angular.module('visualApp',  []);
app.controller('visualCtrl', function($scope, $http, $sce) {

  $scope.firstName  = "Hardik";
  $scope.lastName = "Munjal";
  $scope.employeeRecord =[];
  $scope.rootManager=[];
  $scope.totalEmployees=0;



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

//##########  function to convert employee array object to nested array object ################
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
$scope.employeeRecord = arrayObjectNesting($scope.employeeRecord,0);


//###### Converting array_object_result as per the need of d3 #########################
var nestedObjectForD3={};
nestedObjectForD3.id=-1;
nestedObjectForD3.firstName="Employee";
nestedObjectForD3.children=$scope.employeeRecord;

chartNode(nestedObjectForD3);
});

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
  .append("svg:title").text(function(d) {return "Current Tasks: " + d.isClient + 
    "\nisBillable: " + d.isBillable;});

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