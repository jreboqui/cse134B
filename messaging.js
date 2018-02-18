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


function replyMessage(recepientId, sType, textarea){
	var message = document.getElementById(textarea.id).value;
	var recepientType;

	if(sType == 1)
		recepientType = "s";
	else if(sType == 2)
		recepientType = "c";
	else
		recepientType = "t";

	//var sender;
	var recepient;

	// if(userType == "s"){
	// 	for(var i = 0; i < allStudents.length; i++){
	// 		if(allStudents[i].sid == userId){
	// 			sender = allStudents[i];
	// 			break;	
	// 		}
	// 	}
	// }
	// else if(userType == "c"){
	// 	for(var i = 0; i < allCompanies.length; i++){
	// 		if(allCompanies[i].id == userId){
	// 			sender = allCompanies[i];
	// 			break;	
	// 		}
	// 	}
	// }
	// else{
	// 	for(var i = 0; i < allCompanies.length; i++){
	// 		if(allTutors[i].tutorId == userId){
	// 			sender = allTutors[i];
	// 			break;	
	// 		}
	// 	}	
	// }


	var newMessage = Object.create(mail);
	newMessage.senderId = userId;
	newMessage.senderType = userType;
	newMessage.message = message;

	if(recepientType == "s"){
		for(var i = 0; i < allStudents.length; i++){
			if(allStudents[i].sid == recepientId){
				allStudents[i].mailing.push(newMessage);
				localStorage.setItem('allStudents', JSON.stringify(allStudents));
				break;
			}
		}
	}
	else if(recepientType == "c"){
		for(var i = 0; i < allCompanies.length; i++){
			if(allCompanies[i].id == recepientId){
				allCompanies[i].mailing.push(newMessage);
				console.log("Reply Sent!");
				console.log(allCompanies);
				localStorage.setItem('allCompanies', JSON.stringify(allCompanies));
				break;	
			}
		}
	}
	else{
		for(var i = 0; i < allCompanies.length; i++){
			if(allTutors[i].tutorId == recepientId){
				allTutors[i].mailing.push(newMessage);
				localStorage.setItem('allTutors', JSON.stringify(allTutors));
				break;	
			}
		}	
	}

	alert("Reply Sent!");

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
	 							if(allStudents[i].mailing[j].senderId == allTutors[k].tutorId){
	 								createMessageDiv(allTutors[k].name, allStudents[i].mailing[j].message,
	 									allStudents[i].mailing[j].senderId,allStudents[i].mailing[j].senderType.toString());
	 							}
	 						}	
	 					}
	 				}
	 			}
	 		}
	 	}


	 	if(userType == "c"){
	 		for(var i = 0; i < allCompanies.length; i++){
	 			if(allCompanies[i].id == userId){
	 				for(var j = 0; j < allCompanies[i].mailing.length; j++){
	 					if(allCompanies[i].mailing[j].senderType == "s"){
	 						for(var k = 0; k < allStudents.length; k++){
	 							if(allCompanies[i].mailing[j].senderId == allStudents[k].sid){
	 								createMessageDiv(allStudents[k].name,allCompanies[i].mailing[j].message,
	 									allCompanies[i].mailing[j].senderId,allCompanies[i].mailing[j].senderType.toString());
	 							}
	 						}
	 					}
	 				}
	 			}
	 		}
	 	}


	 	if(userType == "t"){
	 		for(var i = 0; i < allTutors.length; i++){
	 			if(allTutors[i].id == userId){
	 				for(var j = 0; j < allTutors[i].mailing.length; j++){
	 					if(allTutors[i].mailing[j].senderType == "s"){
	 						for(var k = 0; k < allStudents.length; k++){
	 							if(allTutors[i].mailing[j].senderId == allStudents[k].sid){
	 								createMessageDiv(allStudents[k].name,allTutors[i].mailing[j].message,
	 									allTutors[i].mailing[j].senderId,allTutors[i].mailing[j].senderType.toString());
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