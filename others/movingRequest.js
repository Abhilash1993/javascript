/*
Amazon has N Buildings on the site ranging from 0 to N-1. Every employee has an office space in one of the buildings. Now employee may make request to move from current building X to another building Y. A moving request is noted by

class Request {
	String employeeName;
	int fromBuilding;
	int toBuilding;
}
Initially all buildings are full. A request from building X to building Y is achievable only if someone in Building Y makes an achievable request to move therefore creates a vacancy. Given a wishlist of requests help us plan for the best way of building swaps. A plan that fulfills maximum number of requests is considered the best.

Example 1:

Input:
["Alex", 1, 2]
["Ben", 2, 1]
["Chris", 1, 2]
["David", 2, 3]
["Ellen", 3, 1]
["Frank", 4, 5]  

Output: [["Alex", "Bem"], ["Chris", "David", "Ellen"]]
Example 2:

Input:
["Adam", 1, 2]
["Brian", 2, 1]
["Carl", 4, 5]
["Dan", 5, 1]
["Eric", 2, 3]
["Fred", 3, 4]

Output: [["Adam", "Eric", "Fred", "Carl", "Dan"]]
 */

function movingRequests(requestData) {
  console.log(requestData);
  let adjList = new Map();
  for (let i = 0; i < requestData.length; i++) {}
}

const params = [
  ["Alex", 1, 2],
  ["Ben", 2, 1],
  ["Chris", 1, 2],
  ["David", 2, 3],
  ["Ellen", 3, 1],
  ["Frank", 4, 5],
];

/*
    {
      1 : 2 (2),
      2 : 1 (1), 3(1)
      3 : 1 (1),
      4 : 5 (1)
    }
 */

movingRequests(params);
