module.exports = {
	// You can customize the language here or directly in the command files
	autoUpdateThreadInfo: {},
	checkwarn: {
		text: {
			warn: `┌──────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Member %1 has been warned 3 times before and has been banned from the chat box │\n│ - Name: %1                                                                       │\n│ - Uid: %2                                                                        │\n│ - To unban, please use the \ ✨                                                   │\n└──────────────────────────────────────────────────────────────────────────────────┘`%3warn unban <uid>\" command (with uid is the uid of the person you want to unban)",
			needPermission: `┌───────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Bot needs administrator permission to kick banned members ✨ │\n└───────────────────────────────────────────────────────────────┘`
		}
	},
	leave: {
		text: {
			session1: `┌─────────────┐\n│ 💬 ✨ morning ✨ │\n└─────────────┘`,
			session2: `┌──────────┐\n│ 💬 ✨ noon ✨ │\n└──────────┘`,
			session3: `┌───────────────┐\n│ 💬 ✨ afternoon ✨ │\n└───────────────┘`,
			session4: `┌─────────────┐\n│ 💬 ✨ evening ✨ │\n└─────────────┘`,
			leaveType1: `┌────────────────────┐\n│ 💬 ✨ left the group ✨ │\n└────────────────────┘`,
			leaveType2: `┌───────────────────────────────┐\n│ 💬 ✨ was kicked from the group ✨ │\n└───────────────────────────────┘`
		}
	},
	logsbot: {
		text: {
			title: `┌────────────────────────────┐\n│ 💬 ✨ ====== Bot logs ====== ✨ │\n└────────────────────────────┘`,
			added: `┌──────────────────────────────────────────┐\n│ 💬 ✨                                        │\n│ ✅                                        │\n│ Event: bot has been added to a new group │\n│ - Added by: %1 ✨                         │\n└──────────────────────────────────────────┘`,
			kicked: `┌────────────────────────────┐\n│ 💬 ✨                          │\n│ ❌                          │\n│ Event: bot has been kicked │\n│ - Kicked by: %1 ✨          │\n└────────────────────────────┘`,
			footer: `┌────────────────┐\n│ 💬 ✨              │\n│ - User ID: %1  │\n│ - Group: %2    │\n│ - Group ID: %3 │\n│ - Time: %4 ✨   │\n└────────────────┘`
		}
	},
	onEvent: {},
	welcome: {
		text: {
			session1: `┌─────────────┐\n│ 💬 ✨ morning ✨ │\n└─────────────┘`,
			session2: `┌──────────┐\n│ 💬 ✨ noon ✨ │\n└──────────┘`,
			session3: `┌───────────────┐\n│ 💬 ✨ afternoon ✨ │\n└───────────────┘`,
			session4: `┌─────────────┐\n│ 💬 ✨ evening ✨ │\n└─────────────┘`,
			welcomeMessage: `┌──────────────────────────────────────────────────────┐\n│ 💬 ✨ Thank you for inviting me to the group!            │\n│ Bot prefix: %1                                       │\n│ To view the list of commands, please enter: %1help ✨ │\n└──────────────────────────────────────────────────────┘`,
			multiple1: `┌─────────┐\n│ 💬 ✨ you ✨ │\n└─────────┘`,
			multiple2: `┌──────────────┐\n│ 💬 ✨ you guys ✨ │\n└──────────────┘`
		}
	}
};
