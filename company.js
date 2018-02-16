function addCompany(name,id,bannerUrl,hq,size,industry,website,photosUrl,logoUrl){
		var newComp = Object.create(Company);
		
		newComp.name = name;
		newComp.id = id;
		newComp.bannerUrl = bannerUrl;
		newComp.hq = hq;
		newComp.size = size;
		newComp.industry = industry;
		newComp.website = website;
		newComp.photosUrl = photosUrl;
		newComp.logoUrl = logoUrl;
		newComp.openPositions = [];
		
		this.allCompanies.push(newComp);
	}

	function addPosition(companyName, id,title,location,description,reqs,applicantsId){
		var newPos = Object.create(Positions);
		
		newPos.id = id;
		newPos.title = title;
		newPos.location = location;
		newPos.description = description;
		newPos.reqs = reqs;
		newPos.applicantsId = applicantsId;

		for(i = 0; i < this.allCompanies.length; i++){
			if(this.allCompanies[i].name == companyName) {
				allCompanies[i].openPositions.push(newPos);
				break;
			}			
		}
	}

	function getCompany(companyName){
		for(i = 0; i < this.allCompanies.length; i++){
			if(this.allCompanies[i].name == companyName) {
				return allCompanies[i];
			}			
		}
	}

	function populateCompanies(){
		this.addCompany("Amazon, Inc.","1","amazon.PNG","Seattle, WA","75000",["E-Commerce","Cloud Computing"],"amazon.com",
			["amazon1.JPG","amazon2.JPG","amazon3.JPG","amazon4.JPG","amazon5.JPG","amazon6.JPG"],"amazon.jpg");
		this.addCompany("Salesforce","2","Salesforce.PNG","San Francisco, WA","10000",["Cloud Computing"]
			,"Salesforce.com",["salesforce1.JPG","salesforce2.JPG","salesforce3.JPG"],"salesforce.jpg");

		this.addPosition("Amazon, Inc.","1","Software Development Engineer Intern","Santa Clara, CA",
			"Many of our technologies overlap—you’d be hard pressed to find a team that isn’t using Amazon Web Services (AWS), touching the catalogue, or iterating services to better personalize for the customer. Below is a small snapshot of potential work content provided to give you some of big ideas you could work with at Amazon."
			,"· Currently enrolled in a Bachelor’s or Master’s degree program in Computer Science, Computer Engineering, or related technical discipline with a focus on software development",
			[3,5,6,7,10]);

		this.addPosition("Amazon, Inc.","2","Hardware Development Intern","Seattle, WA",
			"Many of our technologies overlap—you’d be hard pressed to find a team that isn’t using Amazon Web Services (AWS), touching the catalogue, or iterating services to better personalize for the customer. Below is a small snapshot of potential work content provided to give you some of big ideas you could work with at Amazon."
			,"· Currently enrolled in a Bachelor’s or Master’s degree program in Computer Science, Computer Engineering, or related technical discipline with a focus on software development",
			[1,2,5,6,7]);

		this.addPosition("Amazon, Inc.","3","Data Science Intern","Santa Clara, CA",
			"Many of our technologies overlap—you’d be hard pressed to find a team that isn’t using Amazon Web Services (AWS), touching the catalogue, or iterating services to better personalize for the customer. Below is a small snapshot of potential work content provided to give you some of big ideas you could work with at Amazon."
			,"· Currently enrolled in a Bachelor’s or Master’s degree program in Computer Science, Computer Engineering, or related technical discipline with a focus on software development",
			[4,10,11,12,15]);		

		this.addPosition("Amazon, Inc.","4","Visual Design Intern","Santa Clara, CA",
			"Many of our technologies overlap—you’d be hard pressed to find a team that isn’t using Amazon Web Services (AWS), touching the catalogue, or iterating services to better personalize for the customer. Below is a small snapshot of potential work content provided to give you some of big ideas you could work with at Amazon."
			,"· Currently enrolled in a Bachelor’s or Master’s degree program in Computer Science, Computer Engineering, or related technical discipline with a focus on software development",
			[4,10,11,12,15]);

		this.addPosition("Amazon, Inc.","5","Machine Learning Researcher Intern","Seattle, WA",
			"Many of our technologies overlap—you’d be hard pressed to find a team that isn’t using Amazon Web Services (AWS), touching the catalogue, or iterating services to better personalize for the customer. Below is a small snapshot of potential work content provided to give you some of big ideas you could work with at Amazon."
			,"· Currently enrolled in a Bachelor’s or Master’s degree program in Computer Science, Computer Engineering, or related technical discipline with a focus on software development",
			[4,10,11,12,15]);

		this.addPosition("Amazon, Inc.","6","UI/UX Design Intern","Seattle, WA",
			"Many of our technologies overlap—you’d be hard pressed to find a team that isn’t using Amazon Web Services (AWS), touching the catalogue, or iterating services to better personalize for the customer. Below is a small snapshot of potential work content provided to give you some of big ideas you could work with at Amazon."
			,"· Currently enrolled in a Bachelor’s or Master’s degree program in Computer Science, Computer Engineering, or related technical discipline with a focus on software development",
			[4,10,11,12,15]);

		this.addPosition("Amazon, Inc.","7","MBA Intern (Graduate)","Seattle, WA",
			"Many of our technologies overlap—you’d be hard pressed to find a team that isn’t using Amazon Web Services (AWS), touching the catalogue, or iterating services to better personalize for the customer. Below is a small snapshot of potential work content provided to give you some of big ideas you could work with at Amazon."
			,"· Currently enrolled in a Bachelor’s or Master’s degree program in Computer Science, Computer Engineering, or related technical discipline with a focus on software development",
			[4,10,11,12,15]);
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
			a.setAttribute('href',"current_job_posting.html?edit=true&id="+ idPosArray[i]);
			var item = document.createElement('li');
			item.className="list-group-item";
			//item.appendChild(document.createTextNode(titlePosArray[i]));
			item.appendChild(a);
			list.appendChild(item);
		}

		list.className = "list-group";
		console.log(list);
	}


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

	window.onload = function() {
		populateCompanies();
		setJumbotronBackground(1); //Still need to be fixed
		fillUpPositions(1);
		fillUpCompanyDetails(1);
		populatePhotoList(1);
	};
