	function addCompany(name,id,bannerUrl,hq,size,industry,website,photosUrl,logoUrl,title,description){
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
		newComp.title = title;
		newComp.description = description
		console.log(newComp);
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
			["amazon1.JPG","amazon2.JPG","amazon3.JPG","amazon4.JPG","amazon5.JPG","amazon6.JPG"],"amazon_icon.png",
			"We pioneer", "We're a company of pioneers. It's our job to make bold bets, and we get our energy from inventing on behalf of customers. Success is measured against the possible, not the probable. For today’s pioneers, that’s exactly why there’s no place on Earth they’d rather build than Amazon.");
		this.addCompany("Salesforce","2","Salesforce.PNG","San Francisco, WA","10000",["Cloud Computing"],
			"Salesforce.com",["salesforce1.JPG","salesforce2.JPG","salesforce3.JPG"],"salesforce_icon.png",
			"We pioneer", "We're a company of pioneers. It's our job to make bold bets, and we get our energy from inventing on behalf of customers. Success is measured against the possible, not the probable. For today’s pioneers, that’s exactly why there’s no place on Earth they’d rather build than Amazon.");

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

	//-------------STUDENT OBJECT
	function addStudent(name, sid, school, year, major, GPA, minor, Pic) {
		var newStudent = Object.create(Student);
	
		newStudent.name = name;
		newStudent.sid = sid;
		newStudent.school = school;
		newStudent.year = year;
		newStudent.major = major;
		newStudent.GPA = GPA;
		newStudent.minor = minor;
		newStudent.profilePic = Pic;
		newStudent.status = "Looking for internship";
		newStudent.applications = [];
	
		this.allStudents.push(newStudent);
	}
	
	function populateStudents() {
		this.addStudent("Kevin Pansawira", "1", "UCSD", "2018", "Computer Science", "3.99", "none", "kpan.jpg");
		this.addStudent("Michael Angelo", "2", "MIT", "2018", "Arts", "3.98", "none", "kpan.jpg");
		console.log("populateStudents done");
	}

	window.onload = function() {
		populateCompanies();
		populateStudents();
		addPosition(1);
		console.log(allCompanies);
		console.log(allStudents);
		localStorage.setItem('allCompanies',JSON.stringify(allCompanies));
		localStorage.setItem('allStudents', JSON.stringify(allStudents));
		console.log("Initialized local storage");
	}