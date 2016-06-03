      var app = angular.module('visualApp',  []);
app.controller('visualCtrl', function($scope, $http, $sce) {

  $scope.firstName  = "Hardik";
  $scope.lastName = "Munjal";
  $scope.employeeRecord =[];
  $scope.rootManager=[];
  $scope.totalEmployees=0;



//############### Get Root Manager ##############################
  $http.get("http://localhost:4000/parse1/")
  .then(function(response) {

    $scope.rootManager =response.data;
    console.log(response.data);
  });

//############### Get All Employee Records #######################
  $http.get("http://localhost:4000/json1/")
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

//chartNode(nestedObjectForD3);
});


      var margin = {top: 20, right: 120, bottom: 20, left: 120},
      width = 960 - margin.right - margin.left,
      height = 400 - margin.top - margin.bottom;

      var i = 0,
      duration = 750,
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


      var json ={
        "name": "Emploee",
        "children": [
        {
          "name": "Amit",
          "children": [
          {
            "name": "Ankit",
            "children": [
            {"name": "Hardik", "size": 3938,"children": [
            {"name": "Naveen", "size": 3938},
            {"name": "Aanchal", "size": 743} ]
          },
          {"name": "Atul", "size": 3812},
          {"name": "Avinash", "size": 3938,"children": [
          {"name": "Deepak", "size": 3938},
          {"name": "Jogendra", "size": 743},
          {"name": "Jyoti", "size": 3938},
          {"name": "Mayur", "size": 743},
          {"name": "Saurav", "size": 3938},
          {"name": "Shubham", "size": 743},
          {"name": "Manu", "size": 3938},
          {"name": "jay", "size": 743} ]
        },
        {"name": "Ashish", "size": 3938,"children": [
        {"name": "Deepak", "size": 3938},
        {"name": "Jogendra", "size": 743},
        {"name": "Jyoti", "size": 3938},
        {"name": "Mayur", "size": 743},
        {"name": "Saurav", "size": 3938},
        {"name": "Shubham", "size": 743},
        {"name": "Manu", "size": 3938},
        {"name": "jay", "size": 743},
        {"name": "Deepak", "size": 3938},
        {"name": "Jogendra", "size": 743},
        {"name": "Jyoti", "size": 3938},
        {"name": "Mayur", "size": 743},
        {"name": "Saurav", "size": 3938},
        {"name": "Shubham", "size": 743},
        {"name": "Manu", "size": 3938}
        
        ]
      }
      ]
    },
    {
      "name": "Varun",
      "children": [
      {"name": "Apoorv", "size": 3534},
      {"name": "Dinesh", "size": 5731},
      {"name": "Benezir", "size": 7840},
      {"name": "xxx", "size": 5914}
      ]
    }
    ]
  },
  {
    "name": "Chetan",
    "children": [
    {
      "name": "Faujan",
      "children": [
      {"name": "ABC", "size": 1302},
      {"name": "DEF", "size": 24593},
      {"name": "GHI", "size": 652},
      {"name": "JKL", "size": 636},
      {"name": "ABN", "size": 6703}
      ]
    },
    {
      "name": "Sandeep",
      "children": [
      {"name": "xyz", "size": 2138},
      {"name": "x1x", "size": 3824},
      {"name": "y1y", "size": 8435}
      ]
    },
    {"name": "Divyesh", "size": 16540}
    ]
  }
  ]
};







root = json;
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

d3.select(self.frameElement).style("height", "800px");

function update(source) {

  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
  links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth * 180; });

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
    if(d._children){
      console.log(d._children.length);
    }
    if(d._children && d._children.length>3){
      console.log('coming here');
      return d._children ? "red" : "#fff"; 
    }
    return d._children ? "lightsteelblue" : "#fff"; 
  });

  nodeEnter.append("text")
  .attr("x", function(d) { return d.children || d._children ? -10 : 10; })
  .attr("dy", ".35em")
  .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
  .text(function(d) { return d.name; })
  .style("fill-opacity", 1e-6);

  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
  .duration(duration)
  .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

  nodeUpdate.select("circle")
  .attr("r", 4.5)
  .style("fill", function(d) { 

    if(d._children && d._children.length<=4){
      console.log('coming here');
      return "orange"; 
    }
    if(d._children && d._children.length>4){
      console.log('coming at yellow');
      return "red"; 
    }
    else{
      return "#fff"}});;
  
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


});