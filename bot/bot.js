// @ts-nocheck
/* eslint-disable */
$(function () {
	$.post('${c.DOMAIN}/bot', { // domain URL
		agent: '${c.AGENTID}', // agent ID
		keyboard: true | false, // keyboard enabled. can also be overwritten by payload, for exceptions 
		speech: true | false, // speech enabled
		microphone: true | false, // microphone enabled
		locale: 'nl-NL', // language-COUNTRY
		open: 'link' | 'icon' | 'auto', // open bot by link, icon, or automatically. When set to 'link', you can apply parameter data-chatbot-open to link element to open bot
		assistance: [{ // assistance icons
			query: 'Help', // query request
			icon: 'help' // query icon. Uses material icons
		}, {
			query: 'Stop',
			icon: 'cancel'
		}]
	}, function (data) {
		$('body').append(data);
	});
});