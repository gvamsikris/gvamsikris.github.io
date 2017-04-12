// Profile Service
(function(){
	'use strict';
	angular.module('profile').service('ProfileService', [ProfileService]);

	function ProfileService() {
		var profileService = {};
		profileService.loadProfile = function() {
			return {
				summary: {
					name: 'Vamsi Krishna Gajula',
					designation: 'Project Lead @ JDA'
				},
				skills: [
					{
						label: 'Java',
						level: 8
					},
					{
						label: 'Spring',
						level: 8
					},
					{
						label: 'JavaScript',
						level: 8
					},
					{
						label: 'Groovy',
						level: 6
					}
				],
				work: [
					{
						company: 'JDA',
						role: 'Project Lead',
						start: 'June 2016',
						end: 'Present' 	
					},
					{
						company: 'Oracle',
						role: 'Senior Applications Engineer',
						start: 'July 2015',
						end: 'June 2016' 
					},
					{
						company: 'Schneider Electric',
						role: 'Senior Software Engineer',
						start: 'September 2011',
						end: 'July 2015' 
					},
					{
						company: 'Tata Consultancy Services',
						role: 'Software Engineer',
						start: 'August 2008',
						end: 'September 2011' 
					}
				],
				education: [
					{
						school: 'VIT University',
						degree: 'Bachelor of Technology',
						start: 'July 2004',
						end: 'May 2008',
						percentage: '8.43/10' 
					},
					{
						school: 'Nalanda College',
						degree: 'Secondary School',
						start: 'July 2002',
						end: 'May 2004',
						percentage: '94.8%' 
					},
					{
						school: 'Rotary English Medium School',
						degree: 'Primary School',
						start: 'July 1990',
						end: 'May 2002',
						percentage: '86.2%' 
					}
				]
			}
		};
		return profileService;
	}
})();