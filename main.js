	function addMail(type, id, senderType, senderId, message) {
	    var newMessage = Object.create(mail);
	    newMessage.senderId = senderId;
	    newMessage.senderType = senderType;
	    newMessage.message = message;

	    if (type == "c") {
	        for (var i = 0; i < allCompanies.length; i++) {
	            if (allCompanies[i].id == id) {
	                allCompanies[i].mailing.push(newMessage);
	                console.log("Added new message!");
	                console.log(allCompanies);
	                break;
	            }
	        }
	    } else if (type == "s") {
	        for (var i = 0; i < allStudents.length; i++) {
	            if (allStudents[i].sid == id) {
	                allStudents[i].mailing.push(newMessage);
	                console.log("Added new message!");
	                console.log(allStudents);
	                break;
	            }
	        }
	    } else if (type == "t") {
	        for (var i = 0; i < allTutors.length; i++) {
	            if (allTutors[i].sid == id) {
	                allTutors[i].mailing.push(newMessage);
	                console.log("Added new message!");
	                console.log(allTutors);
	                break;
	            }
	        }
	    }
	}

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
	    newComp.mailing = [];
	    //console.log(newComp);
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
	    this.addCompany("recruiting@amazon.com", "amazon12345", "Amazon, Inc.", "1", "amazon-banner.PNG", "Seattle, WA", "75000", ["E-Commerce", "Cloud Computing"], "amazon.com", ["amazon1.JPG", "amazon2.JPG", "amazon3.JPG", "amazon4.JPG", "amazon5.JPG", "amazon6.JPG"], "amazon.jpg",
	        "We pioneer", "We're a company of pioneers. It's our job to make bold bets, and we get our energy from inventing on behalf of customers. Success is measured against the possible, not the probable. For today’s pioneers, that’s exactly why there’s no place on Earth they’d rather build than Amazon.");
	    this.addCompany("recruiting@salesforce.com", "salesforce12345", "Salesforce", "2", "salesforce-banner.PNG", "San Francisco, WA", "10000", ["Cloud Computing"],
	        "Salesforce.com", ["salesforce1.JPG", "salesforce2.JPG", "salesforce3.JPG", "salesforce4.JPG", "salesforce5.JPG"], "salesforce_icon.png",
	        "We pioneer", "We're a company of pioneers. It's our job to make bold bets, and we get our energy from inventing on behalf of customers. Success is measured against the possible, not the probable. For today’s pioneers, that’s exactly why there’s no place on Earth they’d rather build than Amazon.");
	    this.addCompany("recruiting@google.com", "google12345", "Google", "3", "google-banner.PNG", "Mountain View, CA", "74000", ["Internet Software, Computer Hardware"],
	        "google.com", ["google1.jpg", "google2.jpg", "google3.jpg", "google4.jpg", "google5.jpg"], "google_logo.jpg",
	        "We pioneer", "We're a company of pioneers. It's our job to make bold bets, and we get our energy from inventing on behalf of customers. Success is measured against the possible, not the probable. For today’s pioneers, that’s exactly why there’s no place on Earth they’d rather build than Amazon.");
	    this.addCompany("recruiting@microsoft.com", "microsoft12345", "Microsoft", "4", "microsoft-banner.PNG", "Redmond, WA", "150000", ["Internet Software", "Consumer Goods", "Media & Entertainment"],
	        "microsoft.com", ["microsoft1.jpg", "microsoft2.jpg", "microsoft3.jpg", "microsoft4.jpg", "microsoft5.jpeg"], "microsoft_logo.jpg",
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

	    this.addPosition("Salesforce", "1", "Software Development Engineer Intern", "Santa Clara, CA",
	        "• • **Please only apply to the one job posting location that most interests you as you consider Amazon's Software Development Engineer job opportunities through University Recruiting.***\n\nWe are hiring innovative Software Development Engineer interns into our technical development teams throughout the US. We are headquartered in Seattle, WA, but also have exciting opportunities at our offices across the US and Canada!\n\nIn the US: Austin, TX; Phoenix, AZ; Boston, MA; New York, NY; Los Angeles, CA; Irvine, CA; San Luis Obispo, CA; Santa Cruz, CA; Bay Area, CA; Madison, WI; Herndon, VA, Portland, OR, Denver, CO and growing!\n\nIn Canada, we are growing rapidly in: Vancouver, BC, Toronto, ON, and Ottawa, ON.\n\nOur interns and co-ops write real software and partner with a select group of experienced software development engineers, who both help and challenge them as they work on projects that matter to our customers. You’ll be given the opportunity to have direct impact on the evolution of Amazon's technologies and lead mission critical projects early in your career. Your design, code and raw smarts will contribute to solving some of the most complex technical challenges in the areas of distributed systems, data mining, optimization, scalability, and security-- just to name a few.\n\nMany of our technologies overlap—you’d be hard pressed to find a team that isn’t using Amazon Web Services (AWS), touching the catalogue, or iterating services to better personalize for the customer. Below is a small snapshot of potential work content provided to give you some of big ideas you could work with at Amazon.", "BASIC QUALIFICATIONS \n\n· Currently enrolled in a Bachelor’s or Master’s degree program in Computer Science, Computer Engineering, or related technical discipline with a focus on software development\n· Currently enrolled in university with graduation dates starting December 2018 and onward\n· Able to work full-time (40 hrs/week) for 12 consecutive weeks between May 2018 through September 2018\n\nPREFERRED QUALIFICATIONS\n\n· Graduation date between December 2018 and September 2019 \n· Strong understanding of object-oriented design, data structures, and algorithms\n· Proficient in one or more object-orientated programming languages (Java, C, C++, etc)\n· Ability to effectively articulate technical challenges and solutions\n· Adept at handling ambiguous or undefined challenges through strong problem solving abilities and effective communication\n\nAmazon is an Equal Opportunity-Affirmative Action Employer – Minority / Female / Disability / Veteran / Gender Identity / Sexual Orientation", [3, 5, 6, 7, 10]);

	    this.addPosition("Salesforce", "2", "Hardware Development Intern", "Seattle, WA",
	        "• • **Please only apply to the one job posting location that most interests you as you consider Amazon's Software Development Engineer job opportunities through University Recruiting.***\n\nWe are hiring innovative Software Development Engineer interns into our technical development teams throughout the US. We are headquartered in Seattle, WA, but also have exciting opportunities at our offices across the US and Canada!\n\nIn the US: Austin, TX; Phoenix, AZ; Boston, MA; New York, NY; Los Angeles, CA; Irvine, CA; San Luis Obispo, CA; Santa Cruz, CA; Bay Area, CA; Madison, WI; Herndon, VA, Portland, OR, Denver, CO and growing!\n\nIn Canada, we are growing rapidly in: Vancouver, BC, Toronto, ON, and Ottawa, ON.\n\nOur interns and co-ops write real software and partner with a select group of experienced software development engineers, who both help and challenge them as they work on projects that matter to our customers. You’ll be given the opportunity to have direct impact on the evolution of Amazon's technologies and lead mission critical projects early in your career. Your design, code and raw smarts will contribute to solving some of the most complex technical challenges in the areas of distributed systems, data mining, optimization, scalability, and security-- just to name a few.\n\nMany of our technologies overlap—you’d be hard pressed to find a team that isn’t using Amazon Web Services (AWS), touching the catalogue, or iterating services to better personalize for the customer. Below is a small snapshot of potential work content provided to give you some of big ideas you could work with at Amazon.", "BASIC QUALIFICATIONS \n\n· Currently enrolled in a Bachelor’s or Master’s degree program in Computer Science, Computer Engineering, or related technical discipline with a focus on software development\n· Currently enrolled in university with graduation dates starting December 2018 and onward\n· Able to work full-time (40 hrs/week) for 12 consecutive weeks between May 2018 through September 2018\n\nPREFERRED QUALIFICATIONS\n\n· Graduation date between December 2018 and September 2019 \n· Strong understanding of object-oriented design, data structures, and algorithms\n· Proficient in one or more object-orientated programming languages (Java, C, C++, etc)\n· Ability to effectively articulate technical challenges and solutions\n· Adept at handling ambiguous or undefined challenges through strong problem solving abilities and effective communication\n\nAmazon is an Equal Opportunity-Affirmative Action Employer – Minority / Female / Disability / Veteran / Gender Identity / Sexual Orientation", [1, 2, 5, 6, 7]);

	    this.addPosition("Google", "1", "Data Science Intern", "Mountain View, CA",
	        "• • **Please only apply to the one job posting location that most interests you as you consider Amazon's Software Development Engineer job opportunities through University Recruiting.***\n\nWe are hiring innovative Software Development Engineer interns into our technical development teams throughout the US. We are headquartered in Seattle, WA, but also have exciting opportunities at our offices across the US and Canada!\n\nIn the US: Austin, TX; Phoenix, AZ; Boston, MA; New York, NY; Los Angeles, CA; Irvine, CA; San Luis Obispo, CA; Santa Cruz, CA; Bay Area, CA; Madison, WI; Herndon, VA, Portland, OR, Denver, CO and growing!\n\nIn Canada, we are growing rapidly in: Vancouver, BC, Toronto, ON, and Ottawa, ON.\n\nOur interns and co-ops write real software and partner with a select group of experienced software development engineers, who both help and challenge them as they work on projects that matter to our customers. You’ll be given the opportunity to have direct impact on the evolution of Amazon's technologies and lead mission critical projects early in your career. Your design, code and raw smarts will contribute to solving some of the most complex technical challenges in the areas of distributed systems, data mining, optimization, scalability, and security-- just to name a few.\n\nMany of our technologies overlap—you’d be hard pressed to find a team that isn’t using Amazon Web Services (AWS), touching the catalogue, or iterating services to better personalize for the customer. Below is a small snapshot of potential work content provided to give you some of big ideas you could work with at Amazon.", "BASIC QUALIFICATIONS \n\n· Currently enrolled in a Bachelor’s or Master’s degree program in Computer Science, Computer Engineering, or related technical discipline with a focus on software development\n· Currently enrolled in university with graduation dates starting December 2018 and onward\n· Able to work full-time (40 hrs/week) for 12 consecutive weeks between May 2018 through September 2018\n\nPREFERRED QUALIFICATIONS\n\n· Graduation date between December 2018 and September 2019 \n· Strong understanding of object-oriented design, data structures, and algorithms\n· Proficient in one or more object-orientated programming languages (Java, C, C++, etc)\n· Ability to effectively articulate technical challenges and solutions\n· Adept at handling ambiguous or undefined challenges through strong problem solving abilities and effective communication\n\nAmazon is an Equal Opportunity-Affirmative Action Employer – Minority / Female / Disability / Veteran / Gender Identity / Sexual Orientation", [3, 5, 6, 7, 10]);

	    this.addPosition("Google", "2", "UI/UX Design Intern", "Mountain View CA",
	        "• • **Please only apply to the one job posting location that most interests you as you consider Amazon's Software Development Engineer job opportunities through University Recruiting.***\n\nWe are hiring innovative Software Development Engineer interns into our technical development teams throughout the US. We are headquartered in Seattle, WA, but also have exciting opportunities at our offices across the US and Canada!\n\nIn the US: Austin, TX; Phoenix, AZ; Boston, MA; New York, NY; Los Angeles, CA; Irvine, CA; San Luis Obispo, CA; Santa Cruz, CA; Bay Area, CA; Madison, WI; Herndon, VA, Portland, OR, Denver, CO and growing!\n\nIn Canada, we are growing rapidly in: Vancouver, BC, Toronto, ON, and Ottawa, ON.\n\nOur interns and co-ops write real software and partner with a select group of experienced software development engineers, who both help and challenge them as they work on projects that matter to our customers. You’ll be given the opportunity to have direct impact on the evolution of Amazon's technologies and lead mission critical projects early in your career. Your design, code and raw smarts will contribute to solving some of the most complex technical challenges in the areas of distributed systems, data mining, optimization, scalability, and security-- just to name a few.\n\nMany of our technologies overlap—you’d be hard pressed to find a team that isn’t using Amazon Web Services (AWS), touching the catalogue, or iterating services to better personalize for the customer. Below is a small snapshot of potential work content provided to give you some of big ideas you could work with at Amazon.", "BASIC QUALIFICATIONS \n\n· Currently enrolled in a Bachelor’s or Master’s degree program in Computer Science, Computer Engineering, or related technical discipline with a focus on software development\n· Currently enrolled in university with graduation dates starting December 2018 and onward\n· Able to work full-time (40 hrs/week) for 12 consecutive weeks between May 2018 through September 2018\n\nPREFERRED QUALIFICATIONS\n\n· Graduation date between December 2018 and September 2019 \n· Strong understanding of object-oriented design, data structures, and algorithms\n· Proficient in one or more object-orientated programming languages (Java, C, C++, etc)\n· Ability to effectively articulate technical challenges and solutions\n· Adept at handling ambiguous or undefined challenges through strong problem solving abilities and effective communication\n\nAmazon is an Equal Opportunity-Affirmative Action Employer – Minority / Female / Disability / Veteran / Gender Identity / Sexual Orientation", [1, 2, 5, 6, 7]);

	    this.addPosition("Microsoft", "1", "MBA Intern(Graduate)", "Redmond, WA",
	        "• • **Please only apply to the one job posting location that most interests you as you consider Amazon's Software Development Engineer job opportunities through University Recruiting.***\n\nWe are hiring innovative Software Development Engineer interns into our technical development teams throughout the US. We are headquartered in Seattle, WA, but also have exciting opportunities at our offices across the US and Canada!\n\nIn the US: Austin, TX; Phoenix, AZ; Boston, MA; New York, NY; Los Angeles, CA; Irvine, CA; San Luis Obispo, CA; Santa Cruz, CA; Bay Area, CA; Madison, WI; Herndon, VA, Portland, OR, Denver, CO and growing!\n\nIn Canada, we are growing rapidly in: Vancouver, BC, Toronto, ON, and Ottawa, ON.\n\nOur interns and co-ops write real software and partner with a select group of experienced software development engineers, who both help and challenge them as they work on projects that matter to our customers. You’ll be given the opportunity to have direct impact on the evolution of Amazon's technologies and lead mission critical projects early in your career. Your design, code and raw smarts will contribute to solving some of the most complex technical challenges in the areas of distributed systems, data mining, optimization, scalability, and security-- just to name a few.\n\nMany of our technologies overlap—you’d be hard pressed to find a team that isn’t using Amazon Web Services (AWS), touching the catalogue, or iterating services to better personalize for the customer. Below is a small snapshot of potential work content provided to give you some of big ideas you could work with at Amazon.", "BASIC QUALIFICATIONS \n\n· Currently enrolled in a Bachelor’s or Master’s degree program in Computer Science, Computer Engineering, or related technical discipline with a focus on software development\n· Currently enrolled in university with graduation dates starting December 2018 and onward\n· Able to work full-time (40 hrs/week) for 12 consecutive weeks between May 2018 through September 2018\n\nPREFERRED QUALIFICATIONS\n\n· Graduation date between December 2018 and September 2019 \n· Strong understanding of object-oriented design, data structures, and algorithms\n· Proficient in one or more object-orientated programming languages (Java, C, C++, etc)\n· Ability to effectively articulate technical challenges and solutions\n· Adept at handling ambiguous or undefined challenges through strong problem solving abilities and effective communication\n\nAmazon is an Equal Opportunity-Affirmative Action Employer – Minority / Female / Disability / Veteran / Gender Identity / Sexual Orientation", [3, 5, 6, 7, 10]);

	    this.addPosition("Microsoft", "2", "Machine Learning Researcher Intern", "Redmond, WA",
	        "• • **Please only apply to the one job posting location that most interests you as you consider Amazon's Software Development Engineer job opportunities through University Recruiting.***\n\nWe are hiring innovative Software Development Engineer interns into our technical development teams throughout the US. We are headquartered in Seattle, WA, but also have exciting opportunities at our offices across the US and Canada!\n\nIn the US: Austin, TX; Phoenix, AZ; Boston, MA; New York, NY; Los Angeles, CA; Irvine, CA; San Luis Obispo, CA; Santa Cruz, CA; Bay Area, CA; Madison, WI; Herndon, VA, Portland, OR, Denver, CO and growing!\n\nIn Canada, we are growing rapidly in: Vancouver, BC, Toronto, ON, and Ottawa, ON.\n\nOur interns and co-ops write real software and partner with a select group of experienced software development engineers, who both help and challenge them as they work on projects that matter to our customers. You’ll be given the opportunity to have direct impact on the evolution of Amazon's technologies and lead mission critical projects early in your career. Your design, code and raw smarts will contribute to solving some of the most complex technical challenges in the areas of distributed systems, data mining, optimization, scalability, and security-- just to name a few.\n\nMany of our technologies overlap—you’d be hard pressed to find a team that isn’t using Amazon Web Services (AWS), touching the catalogue, or iterating services to better personalize for the customer. Below is a small snapshot of potential work content provided to give you some of big ideas you could work with at Amazon.", "BASIC QUALIFICATIONS \n\n· Currently enrolled in a Bachelor’s or Master’s degree program in Computer Science, Computer Engineering, or related technical discipline with a focus on software development\n· Currently enrolled in university with graduation dates starting December 2018 and onward\n· Able to work full-time (40 hrs/week) for 12 consecutive weeks between May 2018 through September 2018\n\nPREFERRED QUALIFICATIONS\n\n· Graduation date between December 2018 and September 2019 \n· Strong understanding of object-oriented design, data structures, and algorithms\n· Proficient in one or more object-orientated programming languages (Java, C, C++, etc)\n· Ability to effectively articulate technical challenges and solutions\n· Adept at handling ambiguous or undefined challenges through strong problem solving abilities and effective communication\n\nAmazon is an Equal Opportunity-Affirmative Action Employer – Minority / Female / Disability / Veteran / Gender Identity / Sexual Orientation", [1, 2, 5, 6, 7]);
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
	    newStudent.mailing = [];

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
	    this.addStudent("Michael Angelo", "2", "MIT", "2018", "Arts", "3.98", "none", "pp1.jpeg", "ma", "ma12345", "None");
	    this.addStudent("Jang Nara ", "3", "Caltech", "2018", "Cogsci", "4.0", "none", "pp2.jpg", "jnara", "jn12345", "None");
	    this.addStudent("Lemon Ginger", "4", "UCB", "2018", "Math", "3.7", "none", "pp1.jpg", "lg", "lg12345", "None");
	    this.addStudent("Ariwasnap Nivek", "5", "UCI", "2019", "Computer Science", "4.0", "none", "intern1.jpg", "arNiv", "pk123", "Hooli");

	    console.log("populateStudents done");

	    this.addApplication("1", "1", "1", "Software Engineering Intern", "Screening");
	    this.addApplication("1", "1", "2", "Data Science Intern", "Rejected");
	    this.addApplication("2", "2", "1", "SWE Intern", "Interview");
	    this.addApplication("3", "1", "1", "Software Engineering Intern", "Interview");
	    this.addApplication("4", "2", "1", "SWE Intern", "Review");
	    this.addApplication("5", "2", "1", "SWE Intern", "Review");


	    console.log("added applications");

	    //addMail(type,id,senderType,senderId,message)
	    this.addMail("s", 1, "c", 1, "Dear Applicant, \n We are exicted to invite you to have an interview with us for the Data Science Intern Position\n If you're still interested, Please reply back within 7 days with your availibility\n\n Thanks,\nAmazon, Inc.");
	    this.addMail("s", 1, "c", 2, "Dear Applicant, \n We are exicted to invite you to have an interview with us for the SWE Intern Position\n If you're still interested, Please reply back within 7 days with your availibility\n\n Thanks,\nSalesforce.com.");
	    this.addMail("s", 1, "c", 1, "Dear Applicant, \n We are exicted to invite you to have an interview with us for the Data Science Intern Position\n If you're still interested, Please reply back within 7 days with your availibility\n\n Thanks,\nAmazon, Inc.");
	    this.addMail("s", 1, "c", 2, "Dear Applicant, \n We are exicted to invite you to have an interview with us for the SWE Intern Position\n If you're still interested, Please reply back within 7 days with your availibility\n\n Thanks,\nSalesforce.com.");
	    this.addMail("s", 2, "c", 2, "Dear Applicant, \n We are exicted to invite you to have an interview with us for the SWE Intern Position\n If you're still interested, Please reply back within 7 days with your availibility\n\n Thanks,\nSalesforce.com.");
	    this.addMail("s", 1, "t", 1, "Wanna pass your interview? \n It's only gonna cost you your life and soul to satan! \n Message me!");
	    this.addMail("s", 2, "t", 2, "Wanna pass your interview? \n It's only gonna cost you your life and soul to satan! \n Message me!");

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
	                localStorage.setItem("userId", allStudents[i].sid);
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
	function addTutor(username, password, name, tutorId, school, year, major, GPA, minor, intern, profilePic) {
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
	    newTutor.mailing = [];

	    this.allTutors.push(newTutor);
	}

	function addMentee(tutorId, studentName, companyName, date) {
	    var newMentee = Object.create(mentee);
	    console.log("called addMentee");
	    newMentee.studentName = studentName;
	    newMentee.companyName = companyName;
	    newMentee.date = date;
	    console.log(newMentee);
	    console.log(allTutors.length);
	    for (i = 0; i < this.allTutors.length; i++) {
	        if (this.allTutors[i].tutorId == tutorId) {
	            console.log("check if statement");
	            console.log(allTutors[i]);
	            allTutors[i].mentees.push(newMentee);
	            break;
	        }
	    }

	}

	function populateTutors() {
	    this.addTutor("smarket", "sm123", "Sunshine Supermarket", "1", "Caltech", "2018", "Computer Science", "4.0", "Business", "Alibaba", "tutor2.jpg");
	    this.addTutor("goody", "goody123", "Goody Burrito", "2", "Harvard", "2018", "Computer Science", "4.0", "Business", "Jane Street", "tutor3.jpg");
	    this.addTutor("gary", "professionalism", "Some hobo", "3", "UCSD", "2018", "Computer Science", "4.0", "none", "UCSD", "pp1.jpeg");

	    this.addMentee("1", "Kevin Pansawira", "Amazon Inc.", "03-01-2018");
	    this.addMentee("1", "Ariwasnap Nivek", "Salesforce", "03-10-2018");
	    this.addMentee("2", "Kevin Pansawira", "Amazon Inc.", "03-01-2018");
	    this.addMentee("2", "Ariwasnap Nivek", "Salesforce", "03-10-2018");
	    this.addMentee("3", "Kevin Pansawira", "Amazon Inc.", "03-01-2018");
	    this.addMentee("3", "Ariwasnap Nivek", "Salesforce", "03-10-2018");

	    console.log("added applications");

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