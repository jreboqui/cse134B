var companyId;

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
    console.log("Printing all companies");
    console.log(allCompanies);

    /*var retrievedTutors = localStorage.getItem('allTutors');
    retrievedTutors = JSON.parse(retrievedTutors);
    allTutors = retrievedTutors;
    console.log("Printing all tutors");
    console.log(allTutors);*/
}

function populateForm() {
    for(var i = 0; i < allCompanies.length; i++){
		if(this.allCompanies[i].id == companyId){
            document.getElementById("profileImg").src = allCompanies[i].logoUrl;
			document.getElementById("imgURL").value = allCompanies[i].logoUrl;
            document.getElementById("bannerImg").src = allCompanies[i].bannerUrl;
            document.getElementById("bannerURL").value = allCompanies[i].bannerUrl;
            document.getElementById("name").value = allCompanies[i].name;
            document.getElementById("hq").value = allCompanies[i].hq;
            document.getElementById("size").value = allCompanies[i].size;
           // document.getElementById("industry").value = allCompanies[i].industry;
            document.getElementById("website").value = allCompanies[i].website;
            document.getElementById("title").value = allCompanies[i].title;
            document.getElementById("desc").value = allCompanies[i].description;
         
		}
	}
    
}

function onClickReset(){
    document.getElementById("imgURL").reset();
    document.getElementById("bannerURL").reset(); 
    document.getElementById("name").reset(); 
    document.getElementById("hq").reset(); 
    document.getElementById("size").reset(); 
    document.getElementById("industry").reset();
    document.getElementById("website").reset(); 
    document.getElementById("title").reset(); 
    document.getElementById("desc").reset(); 
}

function onClickSave(){
    console.log("Updating Profile");
    console.log("companyId" + companyId);

    for(var i = 0; i < allCompanies.length; i++){
		if(this.allCompanies[i].id == companyId){
			allCompanies[i].logoUrl = document.getElementById("imgURL").value;
            allCompanies[i].bannerUrl = document.getElementById("bannerURL").value; 
            allCompanies[i].name = document.getElementById("name").value; 
            allCompanies[i].hq = document.getElementById("hq").value; 
            allCompanies[i].size = document.getElementById("size").value; 
           // allCompanies[i].industry = document.getElementById("industry").value;
            allCompanies[i].website = document.getElementById("website").value;
            allCompanies[i].title = document.getElementById("title").value;
            allCompanies[i].description = document.getElementById("desc").value;
            break;
		}
	}
    
    console.log(allCompanies);
    localStorage.setItem('allCompanies',JSON.stringify(allCompanies));
    location.href="company.html" + "?companyId=" + companyId;
}

function onClickCancel(){
	window.history.back();
}

function loadImg(){
    for(var i = 0; i < allCompanies.length; i++){
		if(this.allCompanies[i].id == companyId){
            document.getElementById("profileImg").src = allCompanies[i].logoUrl;
            break;
        }
    }
}

function loadBannerImg(){
    for(var i = 0; i < allCompanies.length; i++){
		if(this.allCompanies[i].id == companyId){
            document.getElementById("bannerImg").src = allCompanies[i].bannerUrl;
            break;
        }
    }
}

window.onload = function() {
    retrieveLocalData();
    companyId = getParameterByName('companyId');
    populateForm();
}