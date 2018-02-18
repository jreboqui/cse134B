	function addCompany(username, password, name, id, bannerUrl, hq, size, industry, website, photosUrl, logoUrl, title, description) {
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
	    newComp.description = description;
	    newComp.username = username;
	    newComp.password = password;
	    console.log(newComp);
	    this.allCompanies.push(newComp);
	}

	function addPosition(companyName, id, title, location, description, reqs, applicantsId) {
	    var newPos = Object.create(Positions);

	    newPos.id = id;
	    newPos.title = title;
	    newPos.location = location;
	    newPos.description = description;
	    newPos.reqs = reqs;
	    newPos.applicantsId = applicantsId;

	    for (i = 0; i < this.allCompanies.length; i++) {
	        if (this.allCompanies[i].name == companyName) {
	            allCompanies[i].openPositions.push(newPos);
	            break;
	        }
	    }
	}

	function getCompany(companyName) {
	    for (i = 0; i < this.allCompanies.length; i++) {
	        if (this.allCompanies[i].name == companyName) {
	            return allCompanies[i];
	        }
	    }
	}

	function populateCompanies() {
	    this.addCompany("recruiting@amazon.com", "amazon12345", "Amazon, Inc.", "1", "amazon.PNG", "Seattle, WA", "75000", ["E-Commerce", "Cloud Computing"], "amazon.com", ["amazon1.JPG", "amazon2.JPG", "amazon3.JPG", "amazon4.JPG", "amazon5.JPG", "amazon6.JPG"], "amazon.jpg",
	        "We pioneer", "We're a company of pioneers. It's our job to make bold bets, and we get our energy from inventing on behalf of customers. Success is measured against the possible, not the probable. For today’s pioneers, that’s exactly why there’s no place on Earth they’d rather build than Amazon.");
	    this.addCompany("recruiting@salesforce.com", "salesforce12345", "Salesforce", "2", "Salesforce.PNG", "San Francisco, WA", "10000", ["Cloud Computing"],
	        "Salesforce.com", ["salesforce1.JPG", "salesforce2.JPG", "salesforce3.JPG"], "salesforce.jpg",
	        "We pioneer", "We're a company of pioneers. It's our job to make bold bets, and we get our energy from inventing on behalf of customers. Success is measured against the possible, not the probable. For today’s pioneers, that’s exactly why there’s no place on Earth they’d rather build than Amazon.");

	    this.addPosition("Amazon, Inc.", "1", "Software Development Engineer Intern", "Santa Clara, CA",
	        "• • **Please only apply to the one job posting location that most interests you as you consider Amazon's Software Development Engineer job opportunities through University Recruiting.***\n\nWe are hiring innovative Software Development Engineer interns into our technical development teams throughout the US. We are headquartered in Seattle, WA, but also have exciting opportunities at our offices across the US and Canada!\n\nIn the US: Austin, TX; Phoenix, AZ; Boston, MA; New York, NY; Los Angeles, CA; Irvine, CA; San Luis Obispo, CA; Santa Cruz, CA; Bay Area, CA; Madison, WI; Herndon, VA, Portland, OR, Denver, CO and growing!\n\nIn Canada, we are growing rapidly in: Vancouver, BC, Toronto, ON, and Ottawa, ON.\n\nOur interns and co-ops write real software and partner with a select group of experienced software development engineers, who both help and challenge them as they work on projects that matter to our customers. You’ll be given the opportunity to have direct impact on the evolution of Amazon's technologies and lead mission critical projects early in your career. Your design, code and raw smarts will contribute to solving some of the most complex technical challenges in the areas of distributed systems, data mining, optimization, scalability, and security-- just to name a few.\n\nMany of our technologies overlap—you’d be hard pressed to find a team that isn’t using Amazon Web Services (AWS), touching the catalogue, or iterating services to better personalize for the customer. Below is a small snapshot of potential work content provided to give you some of big ideas you could work with at Amazon.", "BASIC QUALIFICATIONS \n\n· Currently enrolled in a Bachelor’s or Master’s degree program in Computer Science, Computer Engineering, or related technical discipline with a focus on software development\n· Currently enrolled in university with graduation dates starting December 2018 and onward\n· Able to work full-time (40 hrs/week) for 12 consecutive weeks between May 2018 through September 2018\n\nPREFERRED QUALIFICATIONS\n\n· Graduation date between December 2018 and September 2019 \n· Strong understanding of object-oriented design, data structures, and algorithms\n· Proficient in one or more object-orientated programming languages (Java, C, C++, etc)\n· Ability to effectively articulate technical challenges and solutions\n· Adept at handling ambiguous or undefined challenges through strong problem solving abilities and effective communication\n\nAmazon is an Equal Opportunity-Affirmative Action Employer – Minority / Female / Disability / Veteran / Gender Identity / Sexual Orientation", [3, 5, 6, 7, 10]);

	    this.addPosition("Amazon, Inc.", "2", "Hardware Development Intern", "Seattle, WA",
	        "• • **Please only apply to the one job posting location that most interests you as you consider Amazon's Software Development Engineer job opportunities through University Recruiting.***\n\nWe are hiring innovative Software Development Engineer interns into our technical development teams throughout the US. We are headquartered in Seattle, WA, but also have exciting opportunities at our offices across the US and Canada!\n\nIn the US: Austin, TX; Phoenix, AZ; Boston, MA; New York, NY; Los Angeles, CA; Irvine, CA; San Luis Obispo, CA; Santa Cruz, CA; Bay Area, CA; Madison, WI; Herndon, VA, Portland, OR, Denver, CO and growing!\n\nIn Canada, we are growing rapidly in: Vancouver, BC, Toronto, ON, and Ottawa, ON.\n\nOur interns and co-ops write real software and partner with a select group of experienced software development engineers, who both help and challenge them as they work on projects that matter to our customers. You’ll be given the opportunity to have direct impact on the evolution of Amazon's technologies and lead mission critical projects early in your career. Your design, code and raw smarts will contribute to solving some of the most complex technical challenges in the areas of distributed systems, data mining, optimization, scalability, and security-- just to name a few.\n\nMany of our technologies overlap—you’d be hard pressed to find a team that isn’t using Amazon Web Services (AWS), touching the catalogue, or iterating services to better personalize for the customer. Below is a small snapshot of potential work content provided to give you some of big ideas you could work with at Amazon.", "BASIC QUALIFICATIONS \n\n· Currently enrolled in a Bachelor’s or Master’s degree program in Computer Science, Computer Engineering, or related technical discipline with a focus on software development\n· Currently enrolled in university with graduation dates starting December 2018 and onward\n· Able to work full-time (40 hrs/week) for 12 consecutive weeks between May 2018 through September 2018\n\nPREFERRED QUALIFICATIONS\n\n· Graduation date between December 2018 and September 2019 \n· Strong understanding of object-oriented design, data structures, and algorithms\n· Proficient in one or more object-orientated programming languages (Java, C, C++, etc)\n· Ability to effectively articulate technical challenges and solutions\n· Adept at handling ambiguous or undefined challenges through strong problem solving abilities and effective communication\n\nAmazon is an Equal Opportunity-Affirmative Action Employer – Minority / Female / Disability / Veteran / Gender Identity / Sexual Orientation", [1, 2, 5, 6, 7]);

	    this.addPosition("Amazon, Inc.", "3", "Data Science Intern", "Santa Clara, CA",
	        "• • **Please only apply to the one job posting location that most interests you as you consider Amazon's Software Development Engineer job opportunities through University Recruiting.***\n\nWe are hiring innovative Software Development Engineer interns into our technical development teams throughout the US. We are headquartered in Seattle, WA, but also have exciting opportunities at our offices across the US and Canada!\n\nIn the US: Austin, TX; Phoenix, AZ; Boston, MA; New York, NY; Los Angeles, CA; Irvine, CA; San Luis Obispo, CA; Santa Cruz, CA; Bay Area, CA; Madison, WI; Herndon, VA, Portland, OR, Denver, CO and growing!\n\nIn Canada, we are growing rapidly in: Vancouver, BC, Toronto, ON, and Ottawa, ON.\n\nOur interns and co-ops write real software and partner with a select group of experienced software development engineers, who both help and challenge them as they work on projects that matter to our customers. You’ll be given the opportunity to have direct impact on the evolution of Amazon's technologies and lead mission critical projects early in your career. Your design, code and raw smarts will contribute to solving some of the most complex technical challenges in the areas of distributed systems, data mining, optimization, scalability, and security-- just to name a few.\n\nMany of our technologies overlap—you’d be hard pressed to find a team that isn’t using Amazon Web Services (AWS), touching the catalogue, or iterating services to better personalize for the customer. Below is a small snapshot of potential work content provided to give you some of big ideas you could work with at Amazon.", "BASIC QUALIFICATIONS \n\n· Currently enrolled in a Bachelor’s or Master’s degree program in Computer Science, Computer Engineering, or related technical discipline with a focus on software development\n· Currently enrolled in university with graduation dates starting December 2018 and onward\n· Able to work full-time (40 hrs/week) for 12 consecutive weeks between May 2018 through September 2018\n\nPREFERRED QUALIFICATIONS\n\n· Graduation date between December 2018 and September 2019 \n· Strong understanding of object-oriented design, data structures, and algorithms\n· Proficient in one or more object-orientated programming languages (Java, C, C++, etc)\n· Ability to effectively articulate technical challenges and solutions\n· Adept at handling ambiguous or undefined challenges through strong problem solving abilities and effective communication\n\nAmazon is an Equal Opportunity-Affirmative Action Employer – Minority / Female / Disability / Veteran / Gender Identity / Sexual Orientation", [4, 10, 11, 12, 15]);

	    this.addPosition("Amazon, Inc.", "4", "Visual Design Intern", "Santa Clara, CA",
	        "• • **Please only apply to the one job posting location that most interests you as you consider Amazon's Software Development Engineer job opportunities through University Recruiting.***\n\nWe are hiring innovative Software Development Engineer interns into our technical development teams throughout the US. We are headquartered in Seattle, WA, but also have exciting opportunities at our offices across the US and Canada!\n\nIn the US: Austin, TX; Phoenix, AZ; Boston, MA; New York, NY; Los Angeles, CA; Irvine, CA; San Luis Obispo, CA; Santa Cruz, CA; Bay Area, CA; Madison, WI; Herndon, VA, Portland, OR, Denver, CO and growing!\n\nIn Canada, we are growing rapidly in: Vancouver, BC, Toronto, ON, and Ottawa, ON.\n\nOur interns and co-ops write real software and partner with a select group of experienced software development engineers, who both help and challenge them as they work on projects that matter to our customers. You’ll be given the opportunity to have direct impact on the evolution of Amazon's technologies and lead mission critical projects early in your career. Your design, code and raw smarts will contribute to solving some of the most complex technical challenges in the areas of distributed systems, data mining, optimization, scalability, and security-- just to name a few.\n\nMany of our technologies overlap—you’d be hard pressed to find a team that isn’t using Amazon Web Services (AWS), touching the catalogue, or iterating services to better personalize for the customer. Below is a small snapshot of potential work content provided to give you some of big ideas you could work with at Amazon.", "BASIC QUALIFICATIONS \n\n· Currently enrolled in a Bachelor’s or Master’s degree program in Computer Science, Computer Engineering, or related technical discipline with a focus on software development\n· Currently enrolled in university with graduation dates starting December 2018 and onward\n· Able to work full-time (40 hrs/week) for 12 consecutive weeks between May 2018 through September 2018\n\nPREFERRED QUALIFICATIONS\n\n· Graduation date between December 2018 and September 2019 \n· Strong understanding of object-oriented design, data structures, and algorithms\n· Proficient in one or more object-orientated programming languages (Java, C, C++, etc)\n· Ability to effectively articulate technical challenges and solutions\n· Adept at handling ambiguous or undefined challenges through strong problem solving abilities and effective communication\n\nAmazon is an Equal Opportunity-Affirmative Action Employer – Minority / Female / Disability / Veteran / Gender Identity / Sexual Orientation", [4, 10, 11, 12, 15]);

	    this.addPosition("Amazon, Inc.", "5", "Machine Learning Researcher Intern", "Seattle, WA",
	        "• • **Please only apply to the one job posting location that most interests you as you consider Amazon's Software Development Engineer job opportunities through University Recruiting.***\n\nWe are hiring innovative Software Development Engineer interns into our technical development teams throughout the US. We are headquartered in Seattle, WA, but also have exciting opportunities at our offices across the US and Canada!\n\nIn the US: Austin, TX; Phoenix, AZ; Boston, MA; New York, NY; Los Angeles, CA; Irvine, CA; San Luis Obispo, CA; Santa Cruz, CA; Bay Area, CA; Madison, WI; Herndon, VA, Portland, OR, Denver, CO and growing!\n\nIn Canada, we are growing rapidly in: Vancouver, BC, Toronto, ON, and Ottawa, ON.\n\nOur interns and co-ops write real software and partner with a select group of experienced software development engineers, who both help and challenge them as they work on projects that matter to our customers. You’ll be given the opportunity to have direct impact on the evolution of Amazon's technologies and lead mission critical projects early in your career. Your design, code and raw smarts will contribute to solving some of the most complex technical challenges in the areas of distributed systems, data mining, optimization, scalability, and security-- just to name a few.\n\nMany of our technologies overlap—you’d be hard pressed to find a team that isn’t using Amazon Web Services (AWS), touching the catalogue, or iterating services to better personalize for the customer. Below is a small snapshot of potential work content provided to give you some of big ideas you could work with at Amazon.", "BASIC QUALIFICATIONS \n\n· Currently enrolled in a Bachelor’s or Master’s degree program in Computer Science, Computer Engineering, or related technical discipline with a focus on software development\n· Currently enrolled in university with graduation dates starting December 2018 and onward\n· Able to work full-time (40 hrs/week) for 12 consecutive weeks between May 2018 through September 2018\n\nPREFERRED QUALIFICATIONS\n\n· Graduation date between December 2018 and September 2019 \n· Strong understanding of object-oriented design, data structures, and algorithms\n· Proficient in one or more object-orientated programming languages (Java, C, C++, etc)\n· Ability to effectively articulate technical challenges and solutions\n· Adept at handling ambiguous or undefined challenges through strong problem solving abilities and effective communication\n\nAmazon is an Equal Opportunity-Affirmative Action Employer – Minority / Female / Disability / Veteran / Gender Identity / Sexual Orientation", [4, 10, 11, 12, 15]);

	    this.addPosition("Amazon, Inc.", "6", "UI/UX Design Intern", "Seattle, WA",
	        "• • **Please only apply to the one job posting location that most interests you as you consider Amazon's Software Development Engineer job opportunities through University Recruiting.***\n\nWe are hiring innovative Software Development Engineer interns into our technical development teams throughout the US. We are headquartered in Seattle, WA, but also have exciting opportunities at our offices across the US and Canada!\n\nIn the US: Austin, TX; Phoenix, AZ; Boston, MA; New York, NY; Los Angeles, CA; Irvine, CA; San Luis Obispo, CA; Santa Cruz, CA; Bay Area, CA; Madison, WI; Herndon, VA, Portland, OR, Denver, CO and growing!\n\nIn Canada, we are growing rapidly in: Vancouver, BC, Toronto, ON, and Ottawa, ON.\n\nOur interns and co-ops write real software and partner with a select group of experienced software development engineers, who both help and challenge them as they work on projects that matter to our customers. You’ll be given the opportunity to have direct impact on the evolution of Amazon's technologies and lead mission critical projects early in your career. Your design, code and raw smarts will contribute to solving some of the most complex technical challenges in the areas of distributed systems, data mining, optimization, scalability, and security-- just to name a few.\n\nMany of our technologies overlap—you’d be hard pressed to find a team that isn’t using Amazon Web Services (AWS), touching the catalogue, or iterating services to better personalize for the customer. Below is a small snapshot of potential work content provided to give you some of big ideas you could work with at Amazon.", "BASIC QUALIFICATIONS \n\n· Currently enrolled in a Bachelor’s or Master’s degree program in Computer Science, Computer Engineering, or related technical discipline with a focus on software development\n· Currently enrolled in university with graduation dates starting December 2018 and onward\n· Able to work full-time (40 hrs/week) for 12 consecutive weeks between May 2018 through September 2018\n\nPREFERRED QUALIFICATIONS\n\n· Graduation date between December 2018 and September 2019 \n· Strong understanding of object-oriented design, data structures, and algorithms\n· Proficient in one or more object-orientated programming languages (Java, C, C++, etc)\n· Ability to effectively articulate technical challenges and solutions\n· Adept at handling ambiguous or undefined challenges through strong problem solving abilities and effective communication\n\nAmazon is an Equal Opportunity-Affirmative Action Employer – Minority / Female / Disability / Veteran / Gender Identity / Sexual Orientation", [4, 10, 11, 12, 15]);

	    this.addPosition("Amazon, Inc.", "7", "MBA Intern (Graduate)", "Seattle, WA",
	        "• • **Please only apply to the one job posting location that most interests you as you consider Amazon's Software Development Engineer job opportunities through University Recruiting.***\n\nWe are hiring innovative Software Development Engineer interns into our technical development teams throughout the US. We are headquartered in Seattle, WA, but also have exciting opportunities at our offices across the US and Canada!\n\nIn the US: Austin, TX; Phoenix, AZ; Boston, MA; New York, NY; Los Angeles, CA; Irvine, CA; San Luis Obispo, CA; Santa Cruz, CA; Bay Area, CA; Madison, WI; Herndon, VA, Portland, OR, Denver, CO and growing!\n\nIn Canada, we are growing rapidly in: Vancouver, BC, Toronto, ON, and Ottawa, ON.\n\nOur interns and co-ops write real software and partner with a select group of experienced software development engineers, who both help and challenge them as they work on projects that matter to our customers. You’ll be given the opportunity to have direct impact on the evolution of Amazon's technologies and lead mission critical projects early in your career. Your design, code and raw smarts will contribute to solving some of the most complex technical challenges in the areas of distributed systems, data mining, optimization, scalability, and security-- just to name a few.\n\nMany of our technologies overlap—you’d be hard pressed to find a team that isn’t using Amazon Web Services (AWS), touching the catalogue, or iterating services to better personalize for the customer. Below is a small snapshot of potential work content provided to give you some of big ideas you could work with at Amazon.", "BASIC QUALIFICATIONS \n\n· Currently enrolled in a Bachelor’s or Master’s degree program in Computer Science, Computer Engineering, or related technical discipline with a focus on software development\n· Currently enrolled in university with graduation dates starting December 2018 and onward\n· Able to work full-time (40 hrs/week) for 12 consecutive weeks between May 2018 through September 2018\n\nPREFERRED QUALIFICATIONS\n\n· Graduation date between December 2018 and September 2019 \n· Strong understanding of object-oriented design, data structures, and algorithms\n· Proficient in one or more object-orientated programming languages (Java, C, C++, etc)\n· Ability to effectively articulate technical challenges and solutions\n· Adept at handling ambiguous or undefined challenges through strong problem solving abilities and effective communication\n\nAmazon is an Equal Opportunity-Affirmative Action Employer – Minority / Female / Disability / Veteran / Gender Identity / Sexual Orientation", [4, 10, 11, 12, 15]);
	}

	//-------------STUDENT OBJECT
	function addStudent(name, sid, school, year, major, GPA, minor, Pic, username, password, intern) {
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
	    newStudent.username = username;
	    newStudent.password = password;
	    newStudent.intern = intern;

	    this.allStudents.push(newStudent);
	}

	function addApplication(studentId, companyId, positionId, positionTitle, appStatus) {
	    var newApp = Object.create(applicationInfo);
	    newApp.companyId = companyId;
	    newApp.positionTitle = positionTitle;
	    newApp.positionId = positionId;
	    newApp.appStatus = "Under Review";

	    for (i = 0; i < allStudents.length; i++) {
	        if (allStudents[i].sid == studentId) {
	            allStudents[i].applications.push(newApp);
	            console.log(allStudents[i].applications);
	            console.log(allStudents[i]);
	            break;
	        }
	    }
	}


	function populateStudents() {
	    this.addStudent("Kevin Pansawira", "1", "UCSD", "2018", "Computer Science", "3.99", "none", "kpan.jpg", "kp", "kp12345", "SalesForce");
	    this.addStudent("Michael Angelo", "2", "MIT", "2018", "Arts", "3.98", "none", "kpan.jpg", "ma", "ma12345", "None");
	    console.log("populateStudents done");

	    this.addApplication("1", "1", "1", "Software Engineering Intern", "Phase 1");
	    this.addApplication("1", "1", "2", "Data Science Intern", "Rejected");
	    console.log("added applications");

	}

	function onClickLogin() {
	    console.log(document.getElementById("userType"));
	    var type = document.getElementById("userType").value;
	    var uname = document.getElementById("uname").value;
	    var psw = document.getElementById("psw").value;
	    var valid = false;

	    if (type == "c") {
	        for (var i = 0; i < allCompanies.length; i++) {
	            console.log("i=" + i.toString());
	            if (allCompanies[i].username == uname && allCompanies[i].password == psw) {
	                localStorage.setItem("userType", type);
	                localStorage.setItem("userId", allCompanies[i].id);
	                alert("Sign in Successful!");
	                location.href = "company.html?companyId=" + allCompanies[i].id;
	                valid = true;
	            }
	        }
	    } else if (type == "s") {
	        for (var i = 0; i < allCompanies.length; i++) {
	            if (allStudents[i].username == uname && allStudents[i].password == psw) {
	                localStorage.setItem("userType", type);
	                localStorage.setItem("userId", allStudents[i].id);
	                alert("Sign in Successful!");
	                location.href = "profile_page.html?studentId=" + allStudents[i].sid;
	                valid = true;
	            }
	        }
	    } else if (type == "t") {
	        for (var i = 0; i < allTutors.length; i++) {
	            if (allTutors[i].username == uname && allTutors[i].password == psw) {
	                localStorage.setItem("userType", type);
	                localStorage.setItem("userId", allTutors[i].tutorId);
	                alert("Sign in Successful!");
	                location.href = "profile_page.html?tutorId=" + allTutors[i].tutorId;
	                valid = true;
	            }
	        }
	    }

	    if (!valid) {
	        alert("Incorrect Username and Password combination!");
	    }

	}

	//------------------TUTOR OBJECT
	function addTutor(username, password, name, tutorId, school, year, major, GPA, minor, intern, profilePic){
		var newTutor = Object.create(Tutor);

	    newTutor.name = name;
	    newTutor.tutorId = tutorId;
	    newTutor.school = school;
	    newTutor.year = year;
	    newTutor.major = major;
	    newTutor.GPA = GPA;
	    newTutor.minor = minor;
	    newTutor.profilePic = profilePic;
	    newTutor.username = username;
	    newTutor.password = password;
		newTutor.intern = intern;
		newTutor.mentees = [];

	    this.allTutors.push(newTutor);
	}
	
	function populateTutors() {
		this.addTutor("smarket","sm123","Sunshine Supermarket", "1", "Caltech", "2018", "Computer Science", "4.0", "Business", "Alibaba", "tutor2.jpg");	
		this.addTutor("goody","goody123","Goody Burrito", "2", "Harvard", "2018", "Computer Science", "4.0", "Business", "Jane Street", "tutor3.jpg");	
	}

	window.onload = function() {
	    populateCompanies();
	    populateStudents();
		populateTutors();
	    addPosition(1);
	    console.log(allCompanies);
		console.log(allStudents);
		console.log(allTutors);
	    localStorage.setItem('allCompanies', JSON.stringify(allCompanies));
	    localStorage.setItem('allStudents', JSON.stringify(allStudents));
	    localStorage.setItem('allTutors', JSON.stringify(allTutors));
	    console.log("Initialized local storage");
	}