var userType;
var userId;

var counter = 0;

function createMessageDiv(senderName,message,senderId,senderType){

	var sType;
	if(senderType=="s")
		sType = 1;
	else if(senderType=="c")
		sType = 2;
	else
		sType = 3;

	var container = document.getElementById('container');
	var messageDiv = document.createElement('div');
	messageDiv.className = "panel panel-default";

	var h3 = document.createElement('h3');
	h3.setAttribute("style","margin-left: 10px;")
	h3.appendChild(document.createTextNode(senderName));
	messageDiv.appendChild(h3);

	var body = document.createElement('div');
	body.className = "panel-body";

	var p = document.createElement('p');
	p.appendChild(document.createTextNode(message));
	body.appendChild(p);


	var ta = document.createElement('textarea');
	ta.className = "form-control";
	ta.setAttribute("id","content" + counter.toString());
	
	body.appendChild(ta);

	var button = document.createElement('button');
	button.className = "btn btn-primary";
	button.setAttribute("style","float:right; margin-top: 10px;");
	button.setAttribute("onclick","replyMessage("+senderId+","+sType+","+"content"+counter+")");
	button.appendChild(document.createTextNode('Reply'));
	body.appendChild(button);


	messageDiv.appendChild(body);
	container.appendChild(messageDiv);	
	counter++;
}


function replyMessage(senderId, senderType, textareaId){
	var content = document.getElementById(textareaId).value;
	console.log(content);
}

function populateInbox(){
	
	 	if(userType == "s"){
	 		for(var i = 0; i < allStudents.length; i++){
	 			if(allStudents[i].sid == userId){
	 				for(var j = 0; j < allStudents[i].mailing.length; j++){
	 					if(allStudents[i].mailing[j].senderType == "s"){
	 						for(var k = 0; k < allStudents.length; k++){
	 							if(allStudents[i].mailing[j].senderId == allStudents[k].sid){
	 								createMessageDiv(allStudents[k].name,allStudents[i].mailing[j].message,
	 									allStudents[i].mailing[j].senderId,allStudents[i].mailing[j].senderType.toString());
	 							}
	 						}
	 					}
	 					else if(allStudents[i].mailing[j].senderType == "c"){
	 						for(var k = 0; k < allCompanies.length; k++){
	 							if(allStudents[i].mailing[j].senderId == allCompanies[k].id){
	 								createMessageDiv(allCompanies[k].name, allStudents[i].mailing[j].message,
	 									allStudents[i].mailing[j].senderId,allStudents[i].mailing[j].senderType.toString());
	 							}
	 						}
	 					}
	 					else if(allStudents[i].mailing[j].senderType == "t"){
	 						for(var k = 0; k < allTutors.length; k++){
	 							if(allStudents[i].mailing[j].senderId == allTutors[k].id){
	 								createMessageDiv(allTutors[k].name, allStudents[i].mailing[j].message,
	 									allStudents[i].mailing[j].senderId,allStudents[i].mailing[j].senderType.toString());
	 							}
	 						}	
	 					}
	 				}
	 			}
	 		}
	 	}
}


function getParameterByName(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}	

function retrieveLocalData(){
	var retrivedCompanies = localStorage.getItem('allCompanies');
	retrivedCompanies = JSON.parse(retrivedCompanies);
	allCompanies = retrivedCompanies;

	var retrievedStudents = localStorage.getItem('allStudents');
    retrievedStudents = JSON.parse(retrievedStudents);
    allStudents = retrievedStudents;

    var retrievedTutors = localStorage.getItem('allTutors');
    retrievedTutors = JSON.parse(retrievedTutors);
    allTutors = retrievedTutors;

	userType = localStorage.getItem('userType');
	userId = localStorage.getItem('userId');
}

window.onload = function() {
	retrieveLocalData();
	populateInbox();
}