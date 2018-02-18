var userType;
	function setJumbotronBackground(companyId){
		var banner = document.getElementsByClassName("jumbotron");
		console.log(banner);
		var bannerUrl = ""
		for(var i = 0; i < allCompanies.length; i++){
			if(this.allCompanies[i].id == companyId){
				bannerUrl = allCompanies[i].bannerUrl;
				break;
			}
		}
		banner.backgroundImage = "url('amazon-banner.PNG')";
	}

	function fillUpPositions(companyId){
		var list = document.getElementById('id-list-open-position');
		var posArray;
		var titlePosArray = [];
		var idPosArray = [];

		for(var i = 0; i < allCompanies.length; i++){
			if(this.allCompanies[i].id == companyId){
				posArray = allCompanies[i].openPositions;
				break;
			}
		}

		for(var i = 0; i < posArray.length; i++){
			titlePosArray.push(posArray[i].title);
			idPosArray.push(posArray[i].id);
		}

		for(var i = 0; i < titlePosArray.length; i++){
			var a = document.createElement("a");
			a.textContent = titlePosArray[i];
			a.setAttribute('href',"current_job_posting.html?edit=1&" + "companyId=" + companyId +"&id="+ idPosArray[i]);
			var item = document.createElement('li');
			item.className="list-group-item";
			//item.appendChild(document.createTextNode(titlePosArray[i]));
			item.appendChild(a);
			list.appendChild(item);
		}

		list.className = "list-group";
		//console.log(list);
	}


	function fillUpCompanyDetails(companyId){
		var list = document.getElementById('id-comp-details');
		var comp;
		for(var i = 0; i < allCompanies.length; i++){
			if(this.allCompanies[i].id == companyId){
				comp = allCompanies[i];
				break;
			}
		}

		var item = document.createElement('li');
		var content = document.createTextNode("Headquarters: " + comp.hq);
		item.appendChild(content);
		list.appendChild(item);

		item = document.createElement('li'); 
		content = document.createTextNode("Size: " + comp.size + " Employees");
		item.appendChild(content);
		list.appendChild(item);

		var inds = "";
		for(var i = 0; i < comp.industry.length; i++){
			console.log(comp.industry[i]);
			inds = inds + comp.industry[i] + ", ";
		}
		item = document.createElement('li'); 
		content = document.createTextNode("Industry: " + inds);
		item.appendChild(content);
		list.appendChild(item);

		item = document.createElement('li'); 
		content = document.createTextNode("Website: " + comp.website);
		item.appendChild(content);
		list.appendChild(item);
	}

	function populatePhotoList(companyId){
		var list = document.getElementById('id-ul-photos');
		var photos;
		for(var i = 0; i < allCompanies.length; i++){
			if(this.allCompanies[i].id == companyId){
				photos = allCompanies[i].photosUrl;
				break;
			}
		}

		var item,content;
		for(var i = 0; i < photos.length; i++){
			item = document.createElement('li');
			content = document.createElement("img");
			content.setAttribute('src',photos[i]);
			content.setAttribute('alt','image');
			content.setAttribute('height','100px');
			content.setAttribute('width','100px');
			item.appendChild(content);
			list.appendChild(item);
		}
	}

	function fillUpAbout(companyId){
		var aboutCompany = document.getElementById('id-about');
		var title;
		var description;

		for(var i = 0; i < allCompanies.length; i++){
			if(this.allCompanies[i].id == companyId){
				title = allCompanies[i].title;
				description = allCompanies[i].description;
				break;
			}
		}

		var header = document.createElement('h3');
		var headerChild = document.createTextNode(title);
		header.appendChild(headerChild);

		var content = document.createElement('p');
		var contentChild = document.createTextNode(description);
		content.appendChild(contentChild);
		
		aboutCompany.appendChild(header);
		aboutCompany.appendChild(content);
	}


	function addNewPosition(companyId){
		location.href = "new_job_posting.html" + "?id=" + companyId;
	}

	function onClickLogout(){
		location.href = "login_page.html";
	}

	function setButton(){
		if(userType != 'c'){
			document.getElementById("btn-add").style.visibility='hidden';
			document.getElementById("btn-edit").style.visibility='hidden';
			document.getElementById("btn-logout").style.visibility='hidden';
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
		console.log(allCompanies);

		userType = localStorage.getItem('userType');
	}

	function onClickEdit() {
		var compId = getParameterByName("companyId");
		location.href = "edit_company_profile.html" + "?companyId=" + compId;
	}

	window.onload = function() {
		var compId = getParameterByName("companyId");
		retrieveLocalData();
		fillUpAbout(compId);
		setJumbotronBackground(compId); //Still need to be fixed
		fillUpPositions(compId);
		fillUpCompanyDetails(compId);
		populatePhotoList(compId);
		setButton();
	};
