var id,title,location,description,reqs,applicantsId;
var bannerUrl,hq,size,industry,website,photosUrl,logoUrl,openPositions;
var Positions = {
	id,
	title,
	location,
	description,
	reqs,
	applicantsId //array
};

var Company = {
	name,
	id,
	bannerUrl,
	hq,
	size,
	industry, //array
	website,
	photosUrl, //array
	logoUrl,
	openPositions //array
};

	var allCompanies = [];

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

	function testFunc(){
		this.addCompany("Amazon, Inc.","1","amazon.PNG","Seattle, WA","75000","E-Commerce","amazon.com",
			"[amazon1,amazon2]","amazon.jpg");
		this.addCompany("Salesforce","2","Salesforce.PNG","San Francisco, WA","10000","Cloud Computing"
			,"Salesforce.com","[salesforce1,salesforce2,salesforce3]","salesforce.jpg");
		this.addPosition("Amazon, Inc.","1","SWE Intern","Santa Clara, CA",
			"Many of our technologies overlap—you’d be hard pressed to find a team that isn’t using Amazon Web Services (AWS), touching the catalogue, or iterating services to better personalize for the customer. Below is a small snapshot of potential work content provided to give you some of big ideas you could work with at Amazon."
			,"· Currently enrolled in a Bachelor’s or Master’s degree program in Computer Science, Computer Engineering, or related technical discipline with a focus on software development",
			[3,5,6,7,10]);
		console.log(this.allCompanies);
	}

