// Here goes everything international, this must only be defined in
// en.ts and in no other locale.
// This works as en is set as the fallback locale if a string is
// not defined yet by another locale
const international = {
	mutereasons: {
		provokation: 'Provokation',
		vvh: 'Volksverhetzung'
	}
};

const en = {
	...international,
	navigation: {
		overview: 'Overview',
		home: 'Home',
		forum: 'Forum',
		login: 'Login'
	},
	monitoring: {
		activeChatreports: 'Active Chatreports',
		reportedPlayer: 'Reported Player',
		reportedFrom: 'Reported From',
		lastMessage: 'Last Message',
		status: 'Status',
		available: 'Available',
		unavailable: 'Unavailable',
		inProgress: 'In Progress',
		takeOver: 'Take Over',
		reports: 'Reports',
		activeModerators: 'Active Moderators',
		enterQueue: 'Enter Queue',
		searchChatreport: 'Search for Chatreport',
		search: 'Search'
	},
	chatlog: {
		player: 'Player',
		message: 'Message',
		chatlog: 'Chatlog',
		time: 'Time',
		reported: 'Reported',
		reporter: 'Reporter',
		server: 'Server',
		uniqueId: 'Unique ID',
		ban: 'Ban',
		accept: 'Accept',
		deny: 'Deny'
	}
};

export default en;
