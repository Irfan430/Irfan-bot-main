module.exports = {
	// You can customize the language here or directly in the command files
	onlyadminbox: {
		description: `┌────────────────────────────────────────────┐\n│ 💬 ✨ turn on/off only admin box can use bot ✨ │\n└────────────────────────────────────────────┘`,
		guide: `┌────────────────────────┐\n│ 💬 ✨    {pn} [on | off] ✨ │\n└────────────────────────┘`,
		text: {
			turnedOn: `┌────────────────────────────────────────────────────────┐\n│ 💬 ✨ Turned on the mode only admin of group can use bot ✨ │\n└────────────────────────────────────────────────────────┘`,
			turnedOff: `┌─────────────────────────────────────────────────────────┐\n│ 💬 ✨ Turned off the mode only admin of group can use bot ✨ │\n└─────────────────────────────────────────────────────────┘`,
			syntaxError: `┌────────────────────────────────────────────────┐\n│ 💬 ✨ Syntax error, only use {pn} on or {pn} off ✨ │\n└────────────────────────────────────────────────┘`
		}
	},
	adduser: {
		description: `┌─────────────────────────────────┐\n│ 💬 ✨ Add user to box chat of you ✨ │\n└─────────────────────────────────┘`,
		guide: `┌──────────────────────────────────┐\n│ 💬 ✨    {pn} [link profile | uid] ✨ │\n└──────────────────────────────────┘`,
		text: {
			alreadyInGroup: `┌──────────────────────┐\n│ 💬 ✨ Already in group ✨ │\n└──────────────────────┘`,
			successAdd: `┌──────────────────────────────────────────────────┐\n│ 💬 ✨ - Successfully added %1 members to the group ✨ │\n└──────────────────────────────────────────────────┘`,
			failedAdd: `┌─────────────────────────────────────────────┐\n│ 💬 ✨ - Failed to add %1 members to the group ✨ │\n└─────────────────────────────────────────────┘`,
			approve: `┌─────────────────────────────────────────────┐\n│ 💬 ✨ - Added %1 members to the approval list ✨ │\n└─────────────────────────────────────────────┘`,
			invalidLink: `┌────────────────────────────────────────┐\n│ 💬 ✨ Please enter a valid facebook link ✨ │\n└────────────────────────────────────────┘`,
			cannotGetUid: `┌─────────────────────────────────┐\n│ 💬 ✨ Cannot get uid of this user ✨ │\n└─────────────────────────────────┘`,
			linkNotExist: `┌─────────────────────────────────────┐\n│ 💬 ✨ This profile url does not exist ✨ │\n└─────────────────────────────────────┘`,
			cannotAddUser: `┌────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Bot is blocked or this user blocked strangers from adding to the group ✨ │\n└────────────────────────────────────────────────────────────────────────────┘`
		}
	},
	admin: {
		description: `┌──────────────────────────────────┐\n│ 💬 ✨ Add, remove, edit admin role ✨ │\n└──────────────────────────────────┘`,
		guide: `┌─────────────────────────────────────────────────────────┐\n│ 💬 ✨    {pn} [add | -a] <uid>: Add admin role for user     │\n│ \t  {pn} [remove | -r] <uid>: Remove admin role of user │\n│ \t  {pn} [list | -l]: List all admins ✨                 │\n└─────────────────────────────────────────────────────────┘`,
		text: {
			added: `┌──────────────────────────────────────┐\n│ 💬 ✨ ✅ | Added admin role for %1 users: │\n│ %2 ✨                                 │\n└──────────────────────────────────────┘`,
			alreadyAdmin: `┌────────────────────────────────────────┐\n│ 💬 ✨                                      │\n│ ⚠️ | %1 users already have admin role: │\n│ %2 ✨                                   │\n└────────────────────────────────────────┘`,
			missingIdAdd: `┌────────────────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ | Please enter ID or tag user to add admin role ✨ │\n└────────────────────────────────────────────────────────┘`,
			removed: `┌───────────────────────────────────────┐\n│ 💬 ✨ ✅ | Removed admin role of %1 users: │\n│ %2 ✨                                  │\n└───────────────────────────────────────┘`,
			notAdmin: `┌────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ | %1 users don't have admin role: │\n│ %2 ✨                                   │\n└────────────────────────────────────────┘`,
			missingIdRemove: `┌───────────────────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ | Please enter ID or tag user to remove admin role ✨ │\n└───────────────────────────────────────────────────────────┘`,
			listAdmin: `┌───────────────────────┐\n│ 💬 ✨ 👑 | List of admins: │\n│ %1 ✨                  │\n└───────────────────────┘`
		}
	},
	adminonly: {
		description: `┌────────────────────────────────────────┐\n│ 💬 ✨ turn on/off only admin can use bot ✨ │\n└────────────────────────────────────────┘`,
		guide: `┌─────────────────────┐\n│ 💬 ✨ {pn} [on | off] ✨ │\n└─────────────────────┘`,
		text: {
			turnedOn: `┌───────────────────────────────────────────────┐\n│ 💬 ✨ Turned on the mode only admin can use bot ✨ │\n└───────────────────────────────────────────────┘`,
			turnedOff: `┌────────────────────────────────────────────────┐\n│ 💬 ✨ Turned off the mode only admin can use bot ✨ │\n└────────────────────────────────────────────────┘`,
			syntaxError: `┌────────────────────────────────────────────────┐\n│ 💬 ✨ Syntax error, only use {pn} on or {pn} off ✨ │\n└────────────────────────────────────────────────┘`
		}
	},
	all: {
		description: `┌────────────────────────────────────────┐\n│ 💬 ✨ Tag all members in your group chat ✨ │\n└────────────────────────────────────────┘`,
		guide: `┌────────────────────────────┐\n│ 💬 ✨ {pn} [content | empty] ✨ │\n└────────────────────────────┘`
	},
	anime: {
		description: `┌────────────────────────┐\n│ 💬 ✨ random anime image ✨ │\n└────────────────────────┘`,
		guide: `┌─────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ {pn} <endpoint>                                                                   │\n│    List of endpoint: neko, kitsune, hug, pat, waifu, cry, kiss, slap, smug, punch ✨ │\n└─────────────────────────────────────────────────────────────────────────────────────┘`,
		text: {
			loading: `┌────────────────────────────────────────┐\n│ 💬 ✨ Initializing image, please wait... ✨ │\n└────────────────────────────────────────┘`,
			error: `┌───────────────────────────────────────────────┐\n│ 💬 ✨ An error occurred, please try again later ✨ │\n└───────────────────────────────────────────────┘`
		}
	},
	antichangeinfobox: {
		description: `┌──────────────────────────────────────┐\n│ 💬 ✨ Turn on/off anti change info box ✨ │\n└──────────────────────────────────────┘`,
		guide: `┌───────────────────────────────────────────────────────────────┐\n│ 💬 ✨    {pn} avt [on | off]: anti change avatar box chat         │\n│    {pn} name [on | off]: anti change name box chat            │\n│    {pn} theme [on | off]: anti change theme (chủ đề) box chat │\n│    {pn} emoji [on | off]: anti change emoji box chat ✨        │\n└───────────────────────────────────────────────────────────────┘`,
		text: {
			antiChangeAvatarOn: `┌─────────────────────────────────────────┐\n│ 💬 ✨ Turn on anti change avatar box chat ✨ │\n└─────────────────────────────────────────┘`,
			antiChangeAvatarOff: `┌──────────────────────────────────────────┐\n│ 💬 ✨ Turn off anti change avatar box chat ✨ │\n└──────────────────────────────────────────┘`,
			missingAvt: `┌──────────────────────────────────────────┐\n│ 💬 ✨ You have not set avatar for box chat ✨ │\n└──────────────────────────────────────────┘`,
			antiChangeNameOn: `┌───────────────────────────────────────┐\n│ 💬 ✨ Turn on anti change name box chat ✨ │\n└───────────────────────────────────────┘`,
			antiChangeNameOff: `┌────────────────────────────────────────┐\n│ 💬 ✨ Turn off anti change name box chat ✨ │\n└────────────────────────────────────────┘`,
			antiChangeThemeOn: `┌────────────────────────────────────────┐\n│ 💬 ✨ Turn on anti change theme box chat ✨ │\n└────────────────────────────────────────┘`,
			antiChangeThemeOff: `┌─────────────────────────────────────────┐\n│ 💬 ✨ Turn off anti change theme box chat ✨ │\n└─────────────────────────────────────────┘`,
			antiChangeEmojiOn: `┌────────────────────────────────────────┐\n│ 💬 ✨ Turn on anti change emoji box chat ✨ │\n└────────────────────────────────────────┘`,
			antiChangeEmojiOff: `┌─────────────────────────────────────────┐\n│ 💬 ✨ Turn off anti change emoji box chat ✨ │\n└─────────────────────────────────────────┘`,
			antiChangeAvatarAlreadyOn: `┌──────────────────────────────────────────────────────┐\n│ 💬 ✨ Your box chat is currently on anti change avatar ✨ │\n└──────────────────────────────────────────────────────┘`,
			antiChangeNameAlreadyOn: `┌────────────────────────────────────────────────────┐\n│ 💬 ✨ Your box chat is currently on anti change name ✨ │\n└────────────────────────────────────────────────────┘`,
			antiChangeThemeAlreadyOn: `┌─────────────────────────────────────────────────────┐\n│ 💬 ✨ Your box chat is currently on anti change theme ✨ │\n└─────────────────────────────────────────────────────┘`,
			antiChangeEmojiAlreadyOn: `┌─────────────────────────────────────────────────────┐\n│ 💬 ✨ Your box chat is currently on anti change emoji ✨ │\n└─────────────────────────────────────────────────────┘`
		}
	},
	appstore: {
		description: `┌────────────────────────────┐\n│ 💬 ✨ Search app on appstore ✨ │\n└────────────────────────────┘`,
		text: {
			missingKeyword: `┌─────────────────────────────────────┐\n│ 💬 ✨ You haven't entered any keyword ✨ │\n└─────────────────────────────────────┘`,
			noResult: `┌────────────────────────────────────┐\n│ 💬 ✨ No result found for keyword %1 ✨ │\n└────────────────────────────────────┘`
		}
	},
	autosetname: {
		description: `┌────────────────────────────────────────┐\n│ 💬 ✨ Auto change nickname of new member ✨ │\n└────────────────────────────────────────┘`,
		guide: `┌───────────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨    {pn} set <nickname>: use to set config to auto change nickname, with some shortcuts: │\n│    + {userName}: name of new member                                                       │\n│    + {userID}: member id                                                                  │\n│    Example:                                                                               │\n│     {pn} set {userName} 🚀                                                                 │\n│                                                                                           │\n│    {pn} [on | off]: use to turn on/off this feature                                       │\n│                                                                                           │\n│    {pn} [view | info]: show current config ✨                                              │\n└───────────────────────────────────────────────────────────────────────────────────────────┘`,
		text: {
			missingConfig: `┌─────────────────────────────────────────────┐\n│ 💬 ✨ Please enter the required configuration ✨ │\n└─────────────────────────────────────────────┘`,
			configSuccess: `┌─────────────────────────────────────────────────┐\n│ 💬 ✨ The configuration has been set successfully ✨ │\n└─────────────────────────────────────────────────┘`,
			currentConfig: `┌────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ The current autoSetName configuration in your chat group is: │\n│ %1 ✨                                                           │\n└────────────────────────────────────────────────────────────────┘`,
			notSetConfig: `┌──────────────────────────────────────────────────────────┐\n│ 💬 ✨ Your group has not set the autoSetName configuration ✨ │\n└──────────────────────────────────────────────────────────┘`,
			syntaxError: `┌──────────────────────────┐\n│ 💬 ✨ Syntax error, only \ ✨ │\n└──────────────────────────┘`{pn} on\" or \"{pn} off\" can be used",
			turnOnSuccess: `┌────────────────────────────────────────────────┐\n│ 💬 ✨ The autoSetName feature has been turned on ✨ │\n└────────────────────────────────────────────────┘`,
			turnOffSuccess: `┌─────────────────────────────────────────────────┐\n│ 💬 ✨ The autoSetName feature has been turned off ✨ │\n└─────────────────────────────────────────────────┘`,
			error: `┌──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ An error occurred while using the autoSetName feature, try turning off the invite link feature in the group and try ag │\n└──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘`
		}
	},
	avatar: {
		description: `┌────────────────────────────────────────┐\n│ 💬 ✨ create anime avatar with signature ✨ │\n└────────────────────────────────────────┘`,
		guide: `┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ {p}{n} <character id or character name> | <background text> | <signature> | <background color name or hex color> │\n│ {p}{n} help: view how to use this command ✨                                                                        │\n└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘`,
		text: {
			initImage: `┌────────────────────────────────────────┐\n│ 💬 ✨ Initializing image, please wait... ✨ │\n└────────────────────────────────────────┘`,
			invalidCharacter: `┌─────────────────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Currently there are only %1 characters on the system, please enter a character id less than ✨ │\n└─────────────────────────────────────────────────────────────────────────────────────────────────┘`,
			notFoundCharacter: `┌───────────────────────────────────────────────────────────┐\n│ 💬 ✨ No character named %1 was found in the character list ✨ │\n└───────────────────────────────────────────────────────────┘`,
			errorGetCharacter: `┌───────────────────────────────────────────────────┐\n│ 💬 ✨ An error occurred while getting character data: │\n│ %1: %2 ✨                                          │\n└───────────────────────────────────────────────────┘`,
			success: `┌─────────────────────┐\n│ 💬 ✨ ✅ Your avatar     │\n│ Character: %1       │\n│ ID: %2              │\n│ Background text: %3 │\n│ Signature: %4       │\n│ Color: %5 ✨         │\n└─────────────────────┘`,
			defaultColor: `┌─────────────┐\n│ 💬 ✨ default ✨ │\n└─────────────┘`,
			error: `┌─────────────────────┐\n│ 💬 ✨ An error occurred │\n│ %1: %2 ✨            │\n└─────────────────────┘`
		}
	},
	badwords: {
		description: `┌──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Turn on/off/add/remove bad words warning, if a member violates, he will be warned, the second time he will be kicked o │\n└──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘`,
		guide: `┌─────────────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨    {pn} add <words>: add banned words (you can add multiple words separated by commas \ ✨ │\n└─────────────────────────────────────────────────────────────────────────────────────────────┘`,\" or vertical bars \"|\")\n   {pn} delete <words>: delete banned words (you can delete multiple words separated by commas \",\" or vertical bars \"|\")\n   {pn} list <hide | leave blank>: turn off warning (add \"hide\" to hide banned words)\n   {pn} unwarn [<userID> | <@tag>]: remove 1 warning of 1 member\n   {pn} on: turn off warning\n   {pn} off: turn on warning",
		text: {
			onText: `┌────────┐\n│ 💬 ✨ on ✨ │\n└────────┘`,
			offText: `┌─────────┐\n│ 💬 ✨ off ✨ │\n└─────────┘`,
			onlyAdmin: `┌───────────────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ | Only admins can add banned words to the list ✨ │\n└───────────────────────────────────────────────────────┘`,
			missingWords: `┌───────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ | You haven't entered the banned words ✨ │\n└───────────────────────────────────────────────┘`,
			addedSuccess: `┌───────────────────────────────────────────┐\n│ 💬 ✨ ✅ | Added %1 banned words to the list ✨ │\n└───────────────────────────────────────────┘`,
			alreadyExist: `┌──────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ❌ | %1 banned words already exist in the list before: %2 ✨ │\n└──────────────────────────────────────────────────────────────┘`,
			tooShort: `┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ | %1 banned words cannot be added to the list because they are shorter than 2 characters: %2 ✨ │\n└─────────────────────────────────────────────────────────────────────────────────────────────────────┘`,
			onlyAdmin2: `┌────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ | Only admins can delete banned words from the list ✨ │\n└────────────────────────────────────────────────────────────┘`,
			missingWords2: `┌──────────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ | You haven't entered the words to delete ✨ │\n└──────────────────────────────────────────────────┘`,
			deletedSuccess: `┌───────────────────────────────────────────────┐\n│ 💬 ✨ ✅ | Deleted %1 banned words from the list ✨ │\n└───────────────────────────────────────────────┘`,
			notExist: `┌─────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ❌ | %1 banned words do not exist in the list before: %2 ✨ │\n└─────────────────────────────────────────────────────────────┘`,
			emptyList: `┌────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ | The list of banned words in your group is currently empty ✨ │\n└────────────────────────────────────────────────────────────────────┘`,
			badWordsList: `┌────────────────────────────────────────────────────┐\n│ 💬 ✨ 📑 | The list of banned words in your group: %1 ✨ │\n└────────────────────────────────────────────────────┘`,
			onlyAdmin3: `┌──────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ | Only admins can %1 this feature ✨ │\n└──────────────────────────────────────────┘`,
			turnedOnOrOff: `┌──────────────────────────────────────────┐\n│ 💬 ✨ ✅ | Banned words warning has been %1 ✨ │\n└──────────────────────────────────────────┘`,
			onlyAdmin4: `┌──────────────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ | Only admins can delete banned words warning ✨ │\n└──────────────────────────────────────────────────────┘`,
			missingTarget: `┌─────────────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ | You haven't entered user ID or tagged user ✨ │\n└─────────────────────────────────────────────────────┘`,
			notWarned: `┌───────────────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ | User %1 has not been warned for banned words ✨ │\n└───────────────────────────────────────────────────────┘`,
			removedWarn: `┌──────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ✅ | User %1 | %2 has been removed 1 banned words warning ✨ │\n└──────────────────────────────────────────────────────────────┘`,
			warned: `┌─────────────────────────┐\n│ 💬 ✨ ⚠️ | Banned words \ ✨ │\n└─────────────────────────┘`%1\" have been detected in your message, if you continue to violate you will be kicked from the group.",
			warned2: `┌─────────────────────────┐\n│ 💬 ✨ ⚠️ | Banned words \ ✨ │\n└─────────────────────────┘`%1\" have been detected in your message, you have violated 2 times and will be kicked from the group.",
			needAdmin: `┌───────────────────────────────────────────────────────┐\n│ 💬 ✨ Bot needs admin privileges to kick banned members ✨ │\n└───────────────────────────────────────────────────────┘`,
			unwarned: `┌──────────────────────────────────────────────────────┐\n│ 💬 ✨ ✅ | Removed banned words warning of user %1 | %2 ✨ │\n└──────────────────────────────────────────────────────┘`
		}
	},
	balance: {
		description: `┌───────────────────────────────────────────────────────┐\n│ 💬 ✨ view your money or the money of the tagged person ✨ │\n└───────────────────────────────────────────────────────┘`,
		guide: `┌───────────────────────────────────────────────────────┐\n│ 💬 ✨    {pn}: view your money                            │\n│    {pn} <@tag>: view the money of the tagged person ✨ │\n└───────────────────────────────────────────────────────┘`,
		text: {
			money: `┌──────────────────┐\n│ 💬 ✨ You have %1$ ✨ │\n└──────────────────┘`,
			moneyOf: `┌────────────────┐\n│ 💬 ✨ %1 has %2$ ✨ │\n└────────────────┘`
		}
	},
	batslap: {
		description: `┌───────────────────┐\n│ 💬 ✨ Batslap image ✨ │\n└───────────────────┘`,
		text: {
			noTag: `┌──────────────────────────────────────────────┐\n│ 💬 ✨ You must tag the person you want to slap ✨ │\n└──────────────────────────────────────────────┘`
		}
	},
	busy: {
		description: `┌──────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ turn on do not disturb mode, when you are tagged bot will notify ✨ │\n└──────────────────────────────────────────────────────────────────────┘`,
		guide: `┌───────────────────────────────────────────────────────────┐\n│ 💬 ✨    {pn} [empty | <reason>]: turn on do not disturb mode │\n│    {pn} off: turn off do not disturb mode ✨               │\n└───────────────────────────────────────────────────────────┘`,
		text: {
			turnedOff: `┌─────────────────────────────────────────────────┐\n│ 💬 ✨ ✅ | Do not disturb mode has been turned off ✨ │\n└─────────────────────────────────────────────────┘`,
			turnedOn: `┌────────────────────────────────────────────────┐\n│ 💬 ✨ ✅ | Do not disturb mode has been turned on ✨ │\n└────────────────────────────────────────────────┘`,
			turnedOnWithReason: `┌────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ✅ | Do not disturb mode has been turned on with reason: %1 ✨ │\n└────────────────────────────────────────────────────────────────┘`,
			alreadyOn: `┌───────────────────────────────┐\n│ 💬 ✨ User %1 is currently busy ✨ │\n└───────────────────────────────┘`,
			alreadyOnWithReason: `┌───────────────────────────────────────────────┐\n│ 💬 ✨ User %1 is currently busy with reason: %2 ✨ │\n└───────────────────────────────────────────────┘`
		}
	},
	callad: {
		description: `┌─────────────────────────────────────────────────┐\n│ 💬 ✨ send report, feedback, bug,... to admin bot ✨ │\n└─────────────────────────────────────────────────┘`,
		guide: `┌───────────────────────┐\n│ 💬 ✨    {pn} <message> ✨ │\n└───────────────────────┘`,
		text: {
			missingMessage: `┌────────────────────────────────────────────────────────┐\n│ 💬 ✨ Please enter the message you want to send to admin ✨ │\n└────────────────────────────────────────────────────────┘`,
			sendByGroup: `┌───────────────────────┐\n│ 💬 ✨                     │\n│ - Sent from group: %1 │\n│ - Thread ID: %2 ✨     │\n└───────────────────────┘`,
			sendByUser: `┌────────────────────┐\n│ 💬 ✨                  │\n│ - Sent from user ✨ │\n└────────────────────┘`,
			content: `┌──────────────────────────────────────────────┐\n│ 💬 ✨                                            │\n│                                              │\n│ Content:                                     │\n│ ─────────────────                            │\n│ %1                                           │\n│ ─────────────────                            │\n│ Reply this message to send message to user ✨ │\n└──────────────────────────────────────────────┘`,
			success: `┌──────────────────────────────────────────────┐\n│ 💬 ✨ Sent your message to admin successfully! ✨ │\n└──────────────────────────────────────────────┘`,
			reply: `┌────────────────────────────────────────────────────────┐\n│ 💬 ✨ 📍 Reply from admin %1:                               │\n│ ─────────────────                                      │\n│ %2                                                     │\n│ ─────────────────                                      │\n│ Reply this message to continue send message to admin ✨ │\n└────────────────────────────────────────────────────────┘`,
			replySuccess: `┌────────────────────────────────────────────┐\n│ 💬 ✨ Sent your reply to admin successfully! ✨ │\n└────────────────────────────────────────────┘`,
			feedback: `┌──────────────────────────────────────────────┐\n│ 💬 ✨ 📝 Feedback from user %1:                   │\n│ - User ID: %2%3                              │\n│                                              │\n│ Content:                                     │\n│ ─────────────────                            │\n│ %4                                           │\n│ ─────────────────                            │\n│ Reply this message to send message to user ✨ │\n└──────────────────────────────────────────────┘`,
			replyUserSuccess: `┌───────────────────────────────────────────┐\n│ 💬 ✨ Sent your reply to user successfully! ✨ │\n└───────────────────────────────────────────┘`
		}
	},
	cmd: {
		description: `┌───────────────────────────────┐\n│ 💬 ✨ Manage your command files ✨ │\n└───────────────────────────────┘`,
		guide: `┌──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ {pn} load <command file name>                                                                                          │\n│ {pn} loadAll                                                                                                             │\n│ {pn} install <url> <command file name>: Download and install a command file from a url, url is the path to the file (raw │\n└──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘`,
		text: {
			missingFileName: `┌───────────────────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ | Please enter the command name you want to reload ✨ │\n└───────────────────────────────────────────────────────────┘`,
			loaded: `┌──────────────────────────┐\n│ 💬 ✨ ✅ | Loaded command \ ✨ │\n└──────────────────────────┘`%1\" successfully",
			loadedError: `┌──────────────────────────────────┐\n│ 💬 ✨ ❌ | Failed to load command \ ✨ │\n└──────────────────────────────────┘`%1\" with error\n%2: %3",
			loadedSuccess: `┌───────────────────────────────┐\n│ 💬 ✨ ✅ | Loaded successfully \ ✨ │\n└───────────────────────────────┘`%1\" command",
			loadedFail: `┌──────────────────────────┐\n│ 💬 ✨ ❌ | Failed to load \ ✨ │\n└──────────────────────────┘`%1\" command\n%2",
			missingCommandNameUnload: `┌───────────────────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ | Please enter the command name you want to unload ✨ │\n└───────────────────────────────────────────────────────────┘`,
			unloaded: `┌────────────────────────────┐\n│ 💬 ✨ ✅ | Unloaded command \ ✨ │\n└────────────────────────────┘`%1\" successfully",
			unloadedError: `┌────────────────────────────────────┐\n│ 💬 ✨ ❌ | Failed to unload command \ ✨ │\n└────────────────────────────────────┘`%1\" with error\n%2: %3",
			missingUrlCodeOrFileName: `┌─────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ | Please enter the url or code and command file name you want to install ✨ │\n└─────────────────────────────────────────────────────────────────────────────────┘`,
			missingUrlOrCode: `┌───────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ | Please enter the url or code of the command file you want to install ✨ │\n└───────────────────────────────────────────────────────────────────────────────┘`,
			missingFileNameInstall: `┌──────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ | Please enter the file name to save the command (with .js extension) ✨ │\n└──────────────────────────────────────────────────────────────────────────────┘`,
			invalidUrlOrCode: `┌─────────────────────────────────────┐\n│ 💬 ✨ ⚠️ | Unable to get command code ✨ │\n└─────────────────────────────────────┘`,
			alreadExist: `┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ | The command file already exists, are you sure you want to overwrite the old command file? │\n│ React to this message to continue ✨                                                              │\n└──────────────────────────────────────────────────────────────────────────────────────────────────┘`,
			installed: `┌─────────────────────────────┐\n│ 💬 ✨ ✅ | Installed command \ ✨ │\n└─────────────────────────────┘`%1\" successfully, the command file is saved at %2",
			installedError: `┌─────────────────────────────────────┐\n│ 💬 ✨ ❌ | Failed to install command \ ✨ │\n└─────────────────────────────────────┘`%1\" with error\n%2: %3",
			missingFile: `┌─────────────────────────┐\n│ 💬 ✨ ⚠️ | Command file \ ✨ │\n└─────────────────────────┘`%1\" not found",
			invalidFileName: `┌────────────────────────────────────┐\n│ 💬 ✨ ⚠️ | Invalid command file name ✨ │\n└────────────────────────────────────┘`,
			unloadedFile: `┌────────────────────────────┐\n│ 💬 ✨ ✅ | Unloaded command \ ✨ │\n└────────────────────────────┘`%1\""
		}
	},
	count: {
		description: `┌─────────────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ View the number of messages of all members or yourself (since the bot joined the group) ✨ │\n└─────────────────────────────────────────────────────────────────────────────────────────────┘`,
		guide: `┌───────────────────────────────────────────────────────────────────┐\n│ 💬 ✨    {pn}: used to view the number of messages of you             │\n│    {pn} @tag: used to view the number of messages of those tagged │\n│    {pn} all: used to view the number of messages of all members ✨ │\n└───────────────────────────────────────────────────────────────────┘`,
		text: {
			count: `┌────────────────────────────────────┐\n│ 💬 ✨ Number of messages of members: ✨ │\n└────────────────────────────────────┘`,
			endMessage: `┌──────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Those who do not have a name in the list have not sent any messages. ✨ │\n└──────────────────────────────────────────────────────────────────────────┘`,
			page: `┌──────────────────┐\n│ 💬 ✨ Page [%1/%2] ✨ │\n└──────────────────┘`,
			reply: `┌─────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Reply to this message with the page number to view more ✨ │\n└─────────────────────────────────────────────────────────────┘`,
			result: `┌─────────────────────────────────┐\n│ 💬 ✨ %1 rank %2 with %3 messages ✨ │\n└─────────────────────────────────┘`,
			yourResult: `┌───────────────────────────────────────────────────────────────┐\n│ 💬 ✨ You are ranked %1 and have sent %2 messages in this group ✨ │\n└───────────────────────────────────────────────────────────────┘`,
			invalidPage: `┌─────────────────────────┐\n│ 💬 ✨ Invalid page number ✨ │\n└─────────────────────────┘`
		}
	},
	customrankcard: {
		description: `┌──────────────────────────────────┐\n│ 💬 ✨ Design rank card by your own ✨ │\n└──────────────────────────────────┘`,
		guide: {
			body: `┌──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨    {pn} [maincolor | subcolor | linecolor | progresscolor | alphasubcolor | textcolor | namecolor | expcolor | rankcol │\n└──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘`
				+ "\n   In which: "┌─────────────┐\n│ ✨ 
				+  ✨ │\n└─────────────┘"\n  + maincolor | background <value>: main background of rank card"
				+ "\n  + subcolor <value>: sub background"
				+ "\n  + linecolor <value>: color of line between main and sub background"
				+ "\n  + expbarcolor <value>: color of exp bar"
				+ "\n  + progresscolor <value>: color of current exp bar"
				+ "\n  + alphasubcolor <value>: opacity of sub background (from 0 -> 1)"
				+ "\n  + textcolor <value>: color of text (hex color or rgba)"
				+ "\n  + namecolor <value>: color of name"
				+ "\n  + expcolor <value>: color of exp"
				+ "\n  + rankcolor <value>: color of rank"
				+ "\n  + levelcolor <value>: color of level"
				+ "\n    • <value> can be hex color, rgb, rgba, gradient (each color is separated by space) or image url"
				+ "\n    • If you want to use gradient, please enter many colors separated by space"
				+ "\n   {pn} reset: reset all to default"
				+ "\n   Example:"┌─────────────┐\n│ ✨ 
				+  ✨ │\n└─────────────┘"\n    {pn} maincolor #fff000"
				+ "\n    {pn} subcolor rgba(255,136,86,0.4)"
				+ "\n    {pn} reset",
			attachment: {
				[`${process.cwd()}/scripts/cmds/assets/guide/customrankcard_1.jpg`]: `┌────────────────────────────────────────┐\n│ 💬 ✨ https://i.ibb.co/BZ2Qgs1/image.png ✨ │\n└────────────────────────────────────────┘`,
				[`${process.cwd()}/scripts/cmds/assets/guide/customrankcard_2.png`]: `┌────────────────────────────────────────┐\n│ 💬 ✨ https://i.ibb.co/wy1ZHHL/image.png ✨ │\n└────────────────────────────────────────┘`
			}
		},
		text: {
			invalidImage: `┌──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Invalid image url, please choose an url with image destination (jpg, jpeg, png, gif), you can upload image to https:// │\n└──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘`get direct link\" to get image url",
			invalidAttachment: `┌─────────────────────────────────────────────────────┐\n│ 💬 ✨ Invalid attachment, please choose an image file ✨ │\n└─────────────────────────────────────────────────────┘`,
			invalidColor: `┌──────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Invalid color code, please choose a hex color code (6 digits) or rgba color code ✨ │\n└──────────────────────────────────────────────────────────────────────────────────────┘`,
			notSupportImage: `┌──────────────────────────────────────────────┐\n│ 💬 ✨ Url image is not supported with option \ ✨ │\n└──────────────────────────────────────────────┘`%1\"",
			success: `┌─────────────────────────────────────────────────────┐\n│ 💬 ✨ Your changes have been saved, here is a preview ✨ │\n└─────────────────────────────────────────────────────┘`,
			reseted: `┌─────────────────────────────────────────────┐\n│ 💬 ✨ All settings have been reset to default ✨ │\n└─────────────────────────────────────────────┘`,
			invalidAlpha: `┌────────────────────────────────────────┐\n│ 💬 ✨ Please choose a number from 0 -> 1 ✨ │\n└────────────────────────────────────────┘`
		}
	},
	dhbc: {
		description: `┌──────────────────────────────┐\n│ 💬 ✨ play game catch the word ✨ │\n└──────────────────────────────┘`,
		guide: `┌──────────┐\n│ 💬 ✨ {pn} ✨ │\n└──────────┘`,
		text: {
			reply: `┌─────────────────────────────────────────────┐\n│ 💬 ✨ Please reply this message with the answer │\n│ %1 ✨                                        │\n└─────────────────────────────────────────────┘`,
			isSong: `┌───────────────────────────────────────────────────┐\n│ 💬 ✨ This is the name of the song of the singer %1 ✨ │\n└───────────────────────────────────────────────────┘`,
			notPlayer: `┌────────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ You are not the player of this question ✨ │\n└────────────────────────────────────────────────┘`,
			correct: `┌────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ 🎉 Congratulations you have answered correctly and received %1$ ✨ │\n└────────────────────────────────────────────────────────────────────┘`,
			wrong: `┌──────────────────────────────────────┐\n│ 💬 ✨ ⚠️ You have answered incorrectly ✨ │\n└──────────────────────────────────────┘`
		}
	},
	emojimix: {
		description: `┌──────────────────────────┐\n│ 💬 ✨ Mix 2 emoji together ✨ │\n└──────────────────────────┘`,
		guide: `┌─────────────────────────────┐\n│ 💬 ✨    {pn} <emoji1> <emoji2> │\n│    Example:  {pn} 🤣 🥰 ✨     │\n└─────────────────────────────┘`
	},
	eval: {
		description: `┌───────────────────────┐\n│ 💬 ✨ Test code quickly ✨ │\n└───────────────────────┘`,
		guide: `┌─────────────────────────┐\n│ 💬 ✨ {pn} <code to test> ✨ │\n└─────────────────────────┘`,
		text: {
			error: `┌──────────────────────────┐\n│ 💬 ✨ ❌ An error occurred: ✨ │\n└──────────────────────────┘`
		}
	},
	event: {
		description: `┌─────────────────────────────────────┐\n│ 💬 ✨ Manage your event command files ✨ │\n└─────────────────────────────────────┘`,
		guide: `┌──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ {pn} load <command file name>                                                                                      │\n│ {pn} loadAll                                                                                                         │\n│ {pn} install <url> <command file name>: Download and load event command, url is the path to the command file (raw) ✨ │\n└──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘`,
		text: {
			missingFileName: `┌───────────────────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ | Please enter the command name you want to reload ✨ │\n└───────────────────────────────────────────────────────────┘`,
			loaded: `┌────────────────────────────────┐\n│ 💬 ✨ ✅ | Loaded event command \ ✨ │\n└────────────────────────────────┘`%1\" successfully",
			loadedError: `┌────────────────────────────────┐\n│ 💬 ✨ ❌ | Loaded event command \ ✨ │\n└────────────────────────────────┘`%1\" failed with error\n%2: %3",
			loadedSuccess: `┌──────────────────┐\n│ 💬 ✨ ✅ | Loaded \ ✨ │\n└──────────────────┘`%1\" event command successfully",
			loadedFail: `┌────────────────────────────────┐\n│ 💬 ✨ ❌ | Loaded event command \ ✨ │\n└────────────────────────────────┘`%1\" failed\n%2",
			missingCommandNameUnload: `┌───────────────────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ | Please enter the command name you want to unload ✨ │\n└───────────────────────────────────────────────────────────┘`,
			unloaded: `┌──────────────────────────────────┐\n│ 💬 ✨ ✅ | Unloaded event command \ ✨ │\n└──────────────────────────────────┘`%1\" successfully",
			unloadedError: `┌──────────────────────────────────┐\n│ 💬 ✨ ❌ | Unloaded event command \ ✨ │\n└──────────────────────────────────┘`%1\" failed with error\n%2: %3",
			missingUrlCodeOrFileName: `┌─────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ | Please enter the url or code and command file name you want to install ✨ │\n└─────────────────────────────────────────────────────────────────────────────────┘`,
			missingUrlOrCode: `┌───────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ | Please enter the url or code of the command file you want to install ✨ │\n└───────────────────────────────────────────────────────────────────────────────┘`,
			missingFileNameInstall: `┌──────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ | Please enter the file name to save the command (with .js extension) ✨ │\n└──────────────────────────────────────────────────────────────────────────────┘`,
			invalidUrlOrCode: `┌─────────────────────────────────────┐\n│ 💬 ✨ ⚠️ | Unable to get command code ✨ │\n└─────────────────────────────────────┘`,
			alreadExist: `┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ | The command file already exists, are you sure you want to overwrite the old command file? │\n│ React to this message to continue ✨                                                              │\n└──────────────────────────────────────────────────────────────────────────────────────────────────┘`,
			installed: `┌───────────────────────────────────┐\n│ 💬 ✨ ✅ | Installed event command \ ✨ │\n└───────────────────────────────────┘`%1\" successfully, the command file is saved at %2",
			installedError: `┌───────────────────────────────────┐\n│ 💬 ✨ ❌ | Installed event command \ ✨ │\n└───────────────────────────────────┘`%1\" failed with error\n%2: %3",
			missingFile: `┌─────────────────┐\n│ 💬 ✨ ⚠️ | File \ ✨ │\n└─────────────────┘`%1\" not found",
			invalidFileName: `┌────────────────────────────┐\n│ 💬 ✨ ⚠️ | Invalid file name ✨ │\n└────────────────────────────┘`,
			unloadedFile: `┌────────────────────────────┐\n│ 💬 ✨ ✅ | Unloaded command \ ✨ │\n└────────────────────────────┘`%1\""
		}
	},
	filteruser: {
		description: `┌──────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ filter group members by number of messages or locked account ✨ │\n└──────────────────────────────────────────────────────────────────┘`,
		guide: `┌──────────────────────────────────────────┐\n│ 💬 ✨    {pn} [<number of messages> | die] ✨ │\n└──────────────────────────────────────────┘`,
		text: {
			needAdmin: `┌──────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ | Please add the bot as a group admin to use this command ✨ │\n└──────────────────────────────────────────────────────────────────┘`,
			confirm: `┌──────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ | Are you sure you want to delete group members with less than %1 messages? │\n│ React to this message to confirm ✨                                               │\n└──────────────────────────────────────────────────────────────────────────────────┘`,
			kickByBlock: `┌────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ✅ | Successfully deleted %1 members who are locked acc ✨ │\n└────────────────────────────────────────────────────────────┘`,
			kickByMsg: `┌────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ✅ | Successfully deleted %1 members with less than %2 messages ✨ │\n└────────────────────────────────────────────────────────────────────┘`,
			kickError: `┌────────────────────────────────────────────────────────┐\n│ 💬 ✨ ❌ | An error occurred and could not kick %1 members: │\n│ %2 ✨                                                   │\n└────────────────────────────────────────────────────────┘`,
			noBlock: `┌─────────────────────────────────────────────────┐\n│ 💬 ✨ ✅ | There are no members who are locked acc ✨ │\n└─────────────────────────────────────────────────┘`,
			noMsg: `┌─────────────────────────────────────────────────────────┐\n│ 💬 ✨ ✅ | There are no members with less than %1 messages ✨ │\n└─────────────────────────────────────────────────────────┘`
		}
	},
	getfbstate: {
		description: `┌─────────────────────────┐\n│ 💬 ✨ Get current fbstate ✨ │\n└─────────────────────────┘`,
		guide: `┌──────────┐\n│ 💬 ✨ {pn} ✨ │\n└──────────┘`,
		text: {
			success: `┌─────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Sent fbstate to you, please check bot's private message ✨ │\n└─────────────────────────────────────────────────────────────┘`
		}
	},
	grouptag: {
		description: `┌──────────────────────────┐\n│ 💬 ✨ Tag members by group ✨ │\n└──────────────────────────┘`,
		guide: `┌────────────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨    {pn} add <groupTagName> <@tags>: use to add new group tag or add members to group tag │\n│    Example:                                                                                │\n│     {pn} TEAM1 @tag1 @tag2                                                                 │\n│                                                                                            │\n│    {pn} del <groupTagName> <@tags>: use to remove members from group tag                   │\n│    Example:                                                                                │\n│     {pn} del TEAM1 @tag1 @tag2                                                             │\n│                                                                                            │\n│    {pn} remove <groupTagName>: use to remove group tag                                     │\n│    Example:                                                                                │\n│     {pn} remove TEAM1                                                                      │\n│                                                                                            │\n│    {pn} rename <groupTagName> | <newGroupTagName>: use to rename group tag                 │\n│                                                                                            │\n│    {pn} [list | all]: use to view list of group tag in your group chat                     │\n│                                                                                            │\n│    {pn} info <groupTagName>: use to view info of group tag ✨                               │\n└────────────────────────────────────────────────────────────────────────────────────────────┘`,
		text: {
			noGroupTagName: `┌─────────────────────────────────┐\n│ 💬 ✨ Please enter group tag name ✨ │\n└─────────────────────────────────┘`,
			noMention: `┌───────────────────────────────────────────────────────┐\n│ 💬 ✨ You haven't tagged any member to add to group tag ✨ │\n└───────────────────────────────────────────────────────┘`,
			addedSuccess: `┌──────────────────┐\n│ 💬 ✨ Added members: │\n│ %1               │\n│ to group tag \ ✨ │\n└──────────────────┘`%2\"",
			addedSuccess2: `┌───────────────────────┐\n│ 💬 ✨ Added group tag \ ✨ │\n└───────────────────────┘`%1\" with members:\n%2",
			existedInGroupTag: `┌──────────────────────────────────┐\n│ 💬 ✨ Members:                       │\n│ %1                               │\n│ already existed in group tag \ ✨ │\n└──────────────────────────────────┘`%2\"",
			notExistedInGroupTag: `┌────────────────────────────────┐\n│ 💬 ✨ Members:                     │\n│ %1                             │\n│ doesn't exist in group tag \ ✨ │\n└────────────────────────────────┘`%2\"",
			noExistedGroupTag: `┌─────────────────┐\n│ 💬 ✨ Group tag \ ✨ │\n└─────────────────┘`%1\" doesn't exist in your group chat",
			noExistedGroupTag2: `┌────────────────────────────────────────────────┐\n│ 💬 ✨ Your group chat hasn't added any group tag ✨ │\n└────────────────────────────────────────────────┘`,
			noMentionDel: `┌───────────────────────────────────────────────────┐\n│ 💬 ✨ Please tag members to remove from group tag \ ✨ │\n└───────────────────────────────────────────────────┘`%1\"",
			deletedSuccess: `┌────────────────────┐\n│ 💬 ✨ Deleted members: │\n│ %1                 │\n│ from group tag \ ✨ │\n└────────────────────┘`%2\"",
			deletedSuccess2: `┌─────────────────────────┐\n│ 💬 ✨ Deleted group tag \ ✨ │\n└─────────────────────────┘`%1\"",
			tagged: `┌─────────────────┐\n│ 💬 ✨ Tag group \ ✨ │\n└─────────────────┘`%1\":\n%2",
			noGroupTagName2: `┌────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Please enter old group tag name and new group tag name, separated by \ ✨ │\n└────────────────────────────────────────────────────────────────────────────┘`|\"",
			renamedSuccess: `┌─────────────────────────┐\n│ 💬 ✨ Renamed group tag \ ✨ │\n└─────────────────────────┘`%1\" to \"%2\"",
			infoGroupTag: `┌───────────────────────┐\n│ 💬 ✨ 📑 | Group name: \ ✨ │\n└───────────────────────┘`%1\"\n👥 | Number of members: %2\n👨‍👩‍👧‍👦 | List of members:\n %3"
		}
	},
	help: {
		description: `┌────────────────────────┐\n│ 💬 ✨ View command usage ✨ │\n└────────────────────────┘`,
		guide: `┌───────────────────────────────────────────────────┐\n│ 💬 ✨ {pn} [empty | <page number> | <command name>] ✨ │\n└───────────────────────────────────────────────────┘`,
		text: {
			help: `┌────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ╭─────────────⭓                                              │\n│ %1                                                             │\n│ ├─────⭔                                                        │\n│ │ Page [ %2/%3 ]                                               │\n│ │ Currently, the bot has %4 commands that can be used          │\n│ │ » Type %5help <page> to view the command list                │\n│ │ » Type %5help to view the details of how to use that command │\n│ ├────────⭔                                                     │\n│ │ %6                                                           │\n│ ╰─────────────⭓ ✨                                              │\n└────────────────────────────────────────────────────────────────┘`,
			help2: `┌───────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ %1├───────⭔                                                                 │\n│ │ » Currently, the bot has %2 commands that can be used                       │\n│ │ » Type %3help <command name> to view the details of how to use that command │\n│ │ %4                                                                          │\n│ ╰─────────────⭓ ✨                                                             │\n└───────────────────────────────────────────────────────────────────────────────┘`,
			commandNotFound: `┌───────────────┐\n│ 💬 ✨ Command \ ✨ │\n└───────────────┘`%1\" does not exist",
			getInfoCommand: `┌─────────────────────────────────────────────┐\n│ 💬 ✨ ╭── NAME ────⭓                            │\n│ │ %1                                        │\n│ ├── INFO                                    │\n│ │ Description: %2                           │\n│ │ Other names: %3                           │\n│ │ Other names in your group: %4             │\n│ │ Version: %5                               │\n│ │ Role: %6                                  │\n│ │ Time per command: %7s                     │\n│ │ Author: %8                                │\n│ ├── Usage                                   │\n│ %9                                          │\n│ ├── Notes                                   │\n│ │ The content inside <XXXXX> can be changed │\n│ │ The content inside [a|b|c] is a or b or c │\n│ ╰──────⭔ ✨                                  │\n└─────────────────────────────────────────────┘`,
			doNotHave: `┌─────────────────┐\n│ 💬 ✨ Do not have ✨ │\n└─────────────────┘`,
			roleText0: `┌───────────────────┐\n│ 💬 ✨ 0 (All users) ✨ │\n└───────────────────┘`,
			roleText1: `┌──────────────────────────────┐\n│ 💬 ✨ 1 (Group administrators) ✨ │\n└──────────────────────────────┘`,
			roleText2: `┌───────────────────┐\n│ 💬 ✨ 2 (Admin bot) ✨ │\n└───────────────────┘`,
			roleText0setRole: `┌─────────────────────────────┐\n│ 💬 ✨ 0 (set role, all users) ✨ │\n└─────────────────────────────┘`,
			roleText1setRole: `┌────────────────────────────────────────┐\n│ 💬 ✨ 1 (set role, group administrators) ✨ │\n└────────────────────────────────────────┘`,
			pageNotFound: `┌────────────────────────────┐\n│ 💬 ✨ Page %1 does not exist ✨ │\n└────────────────────────────┘`
		}
	},
	kick: {
		description: `┌─────────────────────────────────┐\n│ 💬 ✨ Kick member out of chat box ✨ │\n└─────────────────────────────────┘`,
		guide: `┌────────────────────────────────────────────────────┐\n│ 💬 ✨ {pn} @tags: use to kick members who are tagged ✨ │\n└────────────────────────────────────────────────────┘`
	},
	loadconfig: {
		description: `┌──────────────────────────┐\n│ 💬 ✨ Reload config of bot ✨ │\n└──────────────────────────┘`
	},
	moon: {
		description: `┌──────────────────────────────────────────────────────────┐\n│ 💬 ✨ view moon image on the night you choose (dd/mm/yyyy) ✨ │\n└──────────────────────────────────────────────────────────┘`,
		guide: `┌──────────────────────────────────────┐\n│ 💬 ✨   {pn} <day/month/year>            │\n│    {pn} <day/month/year> <caption> ✨ │\n└──────────────────────────────────────┘`,
		text: {
			invalidDateFormat: `┌────────────────────────────────────────────────────┐\n│ 💬 ✨ Please enter a valid date in DD/MM/YYYY format ✨ │\n└────────────────────────────────────────────────────┘`,
			error: `┌──────────────────────────────────────────────────────────┐\n│ 💬 ✨ An error occurred while getting the moon image of %1 ✨ │\n└──────────────────────────────────────────────────────────┘`,
			invalidDate: `┌────────────────────────────┐\n│ 💬 ✨ %1 is not a valid date ✨ │\n└────────────────────────────┘`,
			caption: `┌────────────────────────┐\n│ 💬 ✨ - Moon image on %1 ✨ │\n└────────────────────────┘`
		}
	},
	notification: {
		description: `┌─────────────────────────────────────────────┐\n│ 💬 ✨ Send notification from admin to all box ✨ │\n└─────────────────────────────────────────────┘`,
		guide: `┌─────────────────────┐\n│ 💬 ✨ {pn} <tin nhắn> ✨ │\n└─────────────────────┘`,
		text: {
			missingMessage: `┌─────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Please enter the message you want to send to all groups ✨ │\n└─────────────────────────────────────────────────────────────┘`,
			notification: `┌───────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Notification from admin bot to all chat groups (do not reply to this message) ✨ │\n└───────────────────────────────────────────────────────────────────────────────────┘`,
			sendingNotification: `┌─────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Start sending notification from admin bot to %1 chat groups ✨ │\n└─────────────────────────────────────────────────────────────────┘`,
			sentNotification: `┌───────────────────────────────────────────────────┐\n│ 💬 ✨ ✅ Sent notification to %1 groups successfully ✨ │\n└───────────────────────────────────────────────────┘`,
			errorSendingNotification: `┌─────────────────────────────────────────────────┐\n│ 💬 ✨ An error occurred while sending to %1 groups: │\n│  %2 ✨                                           │\n└─────────────────────────────────────────────────┘`
		}
	},
	prefix: {
		description: `┌───────────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Thay đổi dấu lệnh của bot trong box chat của bạn hoặc cả hệ thống bot (chỉ admin bot) ✨ │\n└───────────────────────────────────────────────────────────────────────────────────────────┘`,
		guide: `┌───────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨    {pn} <new prefix>: change new prefix in your box chat                │\n│    Example:                                                               │\n│     {pn} #                                                                │\n│                                                                           │\n│    {pn} <new prefix> -g: change new prefix in system bot (only admin bot) │\n│    Example:                                                               │\n│     {pn} # -g                                                             │\n│                                                                           │\n│    {pn} reset: change prefix in your box chat to default ✨                │\n└───────────────────────────────────────────────────────────────────────────┘`,
		text: {
			reset: `┌───────────────────────────────────────────────┐\n│ 💬 ✨ Your prefix has been reset to default: %1 ✨ │\n└───────────────────────────────────────────────┘`,
			onlyAdmin: `┌────────────────────────────────────────────────┐\n│ 💬 ✨ Only admin can change prefix of system bot ✨ │\n└────────────────────────────────────────────────┘`,
			confirmGlobal: `┌─────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Please react to this message to confirm change prefix of system bot ✨ │\n└─────────────────────────────────────────────────────────────────────────┘`,
			confirmThisThread: `┌────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Please react to this message to confirm change prefix in your box chat ✨ │\n└────────────────────────────────────────────────────────────────────────────┘`,
			successGlobal: `┌─────────────────────────────────────────┐\n│ 💬 ✨ Changed prefix of system bot to: %1 ✨ │\n└─────────────────────────────────────────┘`,
			successThisThread: `┌────────────────────────────────────────────┐\n│ 💬 ✨ Changed prefix in your box chat to: %1 ✨ │\n└────────────────────────────────────────────┘`,
			myPrefix: `┌──────────────────────────────┐\n│ 💬 ✨ 🌐 System prefix: %1        │\n│ 🛸 Your box chat prefix: %2 ✨ │\n└──────────────────────────────┘`
		}
	},
	rank: {
		description: `┌────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ View your level or the level of the tagged person. You can tag many people ✨ │\n└────────────────────────────────────────────────────────────────────────────────┘`
	},
	rankup: {
		description: `┌───────────────────────────────────────┐\n│ 💬 ✨ Turn on/off level up notification ✨ │\n└───────────────────────────────────────┘`,
		guide: `┌─────────────────────┐\n│ 💬 ✨ {pn} [on | off] ✨ │\n└─────────────────────┘`,
		text: {
			syntaxError: `┌────────────────────────────────────────────────┐\n│ 💬 ✨ Syntax error, only use {pn} on or {pn} off ✨ │\n└────────────────────────────────────────────────┘`,
			turnedOn: `┌─────────────────────────────────────┐\n│ 💬 ✨ Turned on level up notification ✨ │\n└─────────────────────────────────────┘`,
			turnedOff: `┌──────────────────────────────────────┐\n│ 💬 ✨ Turned off level up notification ✨ │\n└──────────────────────────────────────┘`,
			notiMessage: `┌─────────────────────────────────────────────┐\n│ 💬 ✨ 🎉🎉 Congratulations on reaching level %1 ✨ │\n└─────────────────────────────────────────────┘`
		}
	},
	refresh: {
		description: `┌───────────────────────────────────────────────┐\n│ 💬 ✨ refresh information of group chat or user ✨ │\n└───────────────────────────────────────────────┘`,
		guide: `┌─────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨    {pn} [thread | group]: refresh information of your group chat  │\n│    {pn} group <threadID>: refresh information of group chat by ID   │\n│                                                                     │\n│    {pn} user: refresh information of your user                      │\n│    {pn} user [<userID> | @tag]: refresh information of user by ID ✨ │\n└─────────────────────────────────────────────────────────────────────┘`,
		text: {
			refreshMyThreadSuccess: `┌──────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ✅ | Refresh information of your group chat successfully! ✨ │\n└──────────────────────────────────────────────────────────────┘`,
			refreshThreadTargetSuccess: `┌────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ✅ | Refresh information of group chat %1 successfully! ✨ │\n└────────────────────────────────────────────────────────────┘`
		}
	},
	rules: {
		description: `┌────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Create/view/add/edit/change position/delete group rules of you ✨ │\n└────────────────────────────────────────────────────────────────────┘`,
		guide: `┌───────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨    {pn} [add | -a] <rule to add>: add rule for group.                           │\n│    {pn}: view group rules.                                                        │\n│    {pn} [edit | -e] <n> <content after edit>: edit rule number n.                 │\n│    {pn} [move | -m] <stt1> <stt2> swap position of rule number <stt1> and <stt2>. │\n│    {pn} [delete | -d] <n>: delete rule number n.                                  │\n│    {pn} [remove | -r]: delete all rules of group.                                 │\n│                                                                                   │\n│    Example:                                                                       │\n│     {pn} add don't spam                                                           │\n│     {pn} move 1 3                                                                 │\n│     {pn} -e 1 don't spam message in group                                         │\n│     {pn} -r ✨                                                                     │\n└───────────────────────────────────────────────────────────────────────────────────┘`
	},
	sendnoti: {
		description: `┌────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Create and send notification to groups that you manage ✨ │\n└────────────────────────────────────────────────────────────┘`,
		guide: `┌──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨    {pn} create <groupName>: Create a new notification group with name <groupName>                                      │\n│    Example:                                                                                                              │\n│     {pn} create TEAM1                                                                                                    │\n│                                                                                                                          │\n│    {pn} add <groupName>: add current box chat to notification group <groupName> (you must be admin of this box chat)     │\n│    Example:                                                                                                              │\n│     {pn} add TEAM1                                                                                                       │\n│                                                                                                                          │\n│    {pn} delete: remove current box chat from notification group <groupName> (you must be creator of this group)          │\n│    Example:                                                                                                              │\n│     {pn} delete TEAM1                                                                                                    │\n│                                                                                                                          │\n│    {pn} send <groupName> | <message>: send notification to all groups in notification group <groupName> (you must be adm │\n│    Example:                                                                                                              │\n│     {pn} remove TEAM1                                                                                                    │\n│                                                                                                                          │\n│    {pn} remove <groupName>: remove notification group <groupName> (you must be creator of notification group <groupName> │\n│    Example:                                                                                                              │\n│     {pn} remove TEAM1 ✨                                                                                                  │\n└──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘`,
		text: {
			missingGroupName: `┌─────────────────────────────────┐\n│ 💬 ✨ Please enter groupNoti name ✨ │\n└─────────────────────────────────┘`,
			groupNameExists: `┌────────────────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Notification group with name %1 has been created by you before, please choose another name ✨ │\n└────────────────────────────────────────────────────────────────────────────────────────────────┘`,
			createdGroup: `┌────────────────────────────────────────────┐\n│ 💬 ✨ Created notification group successfully: │\n│ - Name: %1                                 │\n│ - ID: %2 ✨                                 │\n└────────────────────────────────────────────┘`,
			missingGroupNameToAdd: `┌────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Please enter groupNoti name you want to add this group chat to ✨ │\n└────────────────────────────────────────────────────────────────────┘`,
			groupNameNotExists: `┌──────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ You have not created/manage any notification group with name: %1 ✨ │\n└──────────────────────────────────────────────────────────────────────┘`,
			notAdmin: `┌──────────────────────────────────────────┐\n│ 💬 ✨ You are not admin of this group chat ✨ │\n└──────────────────────────────────────────┘`,
			added: `┌────────────────────────────────────────────────────────┐\n│ 💬 ✨ Added current group chat to notification group: %1 ✨ │\n└────────────────────────────────────────────────────────┘`,
			missingGroupNameToDelete: `┌──────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Please enter groupNoti name you want to delete this group chat from list ✨ │\n└──────────────────────────────────────────────────────────────────────────────┘`,
			notInGroup: `┌────────────────────────────────────────────────────────┐\n│ 💬 ✨ Current group chat is not in notification group %1 ✨ │\n└────────────────────────────────────────────────────────┘`,
			deleted: `┌────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Deleted current group chat from notification group: %1 ✨ │\n└────────────────────────────────────────────────────────────┘`,
			failed: `┌───────────────────────────────────────────────────┐\n│ 💬 ✨ Failed to send notification to %1 group chats:  │\n│ %2 ✨                                              │\n└───────────────────────────────────────────────────┘`,
			missingGroupNameToRemove: `┌────────────────────────────────────────────────────┐\n│ 💬 ✨ Please enter groupNoti name you want to remove ✨ │\n└────────────────────────────────────────────────────┘`,
			removed: `┌────────────────────────────────────┐\n│ 💬 ✨ Removed notification group: %1 ✨ │\n└────────────────────────────────────┘`,
			missingGroupNameToSend: `┌──────────────────────────────────────────────────────────┐\n│ 💬 ✨ Please enter groupNoti name you want to send message ✨ │\n└──────────────────────────────────────────────────────────┘`,
			groupIsEmpty: `┌──────────────────────────┐\n│ 💬 ✨ Notification group \ ✨ │\n└──────────────────────────┘`%1\" is empty",
			sending: `┌────────────────────────────────────────────┐\n│ 💬 ✨ Sending notification to %1 group chats ✨ │\n└────────────────────────────────────────────┘`,
			success: `┌─────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Sent notification to %1 group chats in notification group \ ✨ │\n└─────────────────────────────────────────────────────────────────┘`%2\" successfully",
			notAdminOfGroup: `┌─────────────────────────────────────┐\n│ 💬 ✨ You are not admin of this group ✨ │\n└─────────────────────────────────────┘`,
			missingGroupNameToView: `┌───────────────────────────────────────────────────────┐\n│ 💬 ✨ Please enter groupNoti name you want to view info ✨ │\n└───────────────────────────────────────────────────────┘`,
			groupInfo: `┌────────────────────┐\n│ 💬 ✨ - Group Name: %1 │\n│  - ID: %2          │\n│  - Created at: %3  │\n│ %4  ✨              │\n└────────────────────┘`,
			groupInfoHasGroup: `┌───────────────────────┐\n│ 💬 ✨ - Has group chats:  │\n│ %1 ✨                  │\n└───────────────────────┘`,
			noGroup: `┌────────────────────────────────────────────────────────┐\n│ 💬 ✨ You have not created/manage any notification group ✨ │\n└────────────────────────────────────────────────────────┘`
		}
	},
	setalias: {
		description: `┌────────────────────────────────────────────────┐\n│ 💬 ✨ Add an alias for any command in your group ✨ │\n└────────────────────────────────────────────────┘`,
		guide: `┌──────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨   This command is used to add/remove alias for any command in your group                                       │\n│    {pn} add <alias> <command>: add an alias for the command in your group                                        │\n│    {pn} add <alias> <command> -g: add an alias for the command in the whole system (only bot admin)              │\n│ Example:                                                                                                         │\n│     {pn} add ctrk customrankcard                                                                                 │\n│                                                                                                                  │\n│    {pn} [remove | rm] <alias> <command>: remove an alias for the command in your group                           │\n│    {pn} [remove | rm] <alias> <command> -g: remove an alias for the command in the whole system (only bot admin) │\n│ Example:                                                                                                         │\n│     {pn} rm ctrk customrankcard                                                                                  │\n│                                                                                                                  │\n│    {pn} list: list all alias for commands in your group                                                          │\n│    {pn} list -g: list all alias for commands in the whole system ✨                                               │\n└──────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘`
	},
	setavt: {
		description: `┌───────────────────────┐\n│ 💬 ✨ Change bot avatar ✨ │\n└───────────────────────┘`,
		text: {
			cannotGetImage: `┌────────────────────────────────────────────────────────┐\n│ 💬 ✨ ❌ | An error occurred while querying the image url ✨ │\n└────────────────────────────────────────────────────────┘`,
			invalidImageFormat: `┌──────────────────────────────┐\n│ 💬 ✨ ❌ | Invalid image format ✨ │\n└──────────────────────────────┘`,
			changedAvatar: `┌─────────────────────────────────────────┐\n│ 💬 ✨ ✅ | Changed bot avatar successfully ✨ │\n└─────────────────────────────────────────┘`
		}
	},
	setlang: {
		description: `┌───────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Set default language of bot for current chat or all chats ✨ │\n└───────────────────────────────────────────────────────────────┘`,
		guide: `┌────────────────────────────────────────────────┐\n│ 💬 ✨    {pn} <language code ISO 639-1             │\n│    Example:    {pn} en    {pn} vi    {pn} ja ✨ │\n└────────────────────────────────────────────────┘`,
		text: {
			setLangForAll: `┌────────────────────────────────────────────┐\n│ 💬 ✨ Set default language for all chats: %1 ✨ │\n└────────────────────────────────────────────┘`,
			setLangForCurrent: `┌───────────────────────────────────────────────┐\n│ 💬 ✨ Set default language for current chat: %1 ✨ │\n└───────────────────────────────────────────────┘`,
			noPermission: `┌─────────────────────────────────────────┐\n│ 💬 ✨ Only bot admin can use this command ✨ │\n└─────────────────────────────────────────┘`
		}
	},
	setleave: {
		description: `┌──────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Edit content/turn on/off leave message when member leave your group chat ✨ │\n└──────────────────────────────────────────────────────────────────────────────┘`,
		guide: {
			body: `┌──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨    {pn} on: Turn on leave message                                                                                      │\n│    {pn} off: Turn off leave message                                                                                      │\n│    {pn} text [<content> | reset]: edit text content or reset to default, available shortcuts:                            │\n│   + {userName}: name of member who leave group                                                                           │\n│   + {userNameTag}: name of member who leave group (tag)                                                                  │\n│   + {boxName}: name of group chat                                                                                        │\n│   + {type}: leave/kicked by admin                                                                                        │\n│   + {session}: session in day                                                                                            │\n│                                                                                                                          │\n│    Example:                                                                                                              │\n│     {pn} text {userName} has {type} group, see you again 🤧                                                               │\n│                                                                                                                          │\n│    Reply or send a message with file with content {pn} file: to add attachment file to leave message (image, video, audi │\n│                                                                                                                          │\n│ Example:                                                                                                                 │\n│    {pn} file reset: reset file ✨                                                                                         │\n└──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘`,
			attachment: {
				[`${process.cwd()}/scripts/cmds/assets/guide/setleave/setleave_en_1.png`]: `┌─────────────────────────────────────────┐\n│ 💬 ✨ https://i.ibb.co/2FKJHJr/guide1.png ✨ │\n└─────────────────────────────────────────┘`
			}
		},
		text: {
			missingContent: `┌──────────────────────────┐\n│ 💬 ✨ Please enter content ✨ │\n└──────────────────────────┘`,
			edited: `┌──────────────────────────────────────────────────┐\n│ 💬 ✨ Edited leave message content of your group to: │\n│ %1 ✨                                             │\n└──────────────────────────────────────────────────┘`,
			reseted: `┌───────────────────────────────────┐\n│ 💬 ✨ Reseted leave message content ✨ │\n└───────────────────────────────────┘`,
			noFile: `┌───────────────────────────────────────────────┐\n│ 💬 ✨ No leave message attachment file to reset ✨ │\n└───────────────────────────────────────────────┘`,
			resetedFile: `┌────────────────────────────────────────────────────────┐\n│ 💬 ✨ Reseted leave message attachment file successfully ✨ │\n└────────────────────────────────────────────────────────┘`,
			missingFile: `┌───────────────────────────────────────────────────────────┐\n│ 💬 ✨ Please reply this message with image/video/audio file ✨ │\n└───────────────────────────────────────────────────────────┘`,
			addedFile: `┌────────────────────────────────────────────────────┐\n│ 💬 ✨ Added %1 attachment file to your leave message ✨ │\n└────────────────────────────────────────────────────┘`
		}
	},
	setname: {
		description: `┌──────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Change nickname of all members in chat or members tagged by a format ✨ │\n└──────────────────────────────────────────────────────────────────────────┘`,
		guide: {
			body: `┌─────────────────────────────────────────────────────────────────┐\n│ 💬 ✨    {pn} <nick name>: change nickname of yourself              │\n│    {pn} @tags <nick name>: change nickname of members tagged    │\n│    {pn} all <nick name>: change nickname of all members in chat │\n│                                                                 │\n│ With available shortcuts:                                       │\n│    + {userName}: name of member                                 │\n│    + {userID}: ID of member                                     │\n│                                                                 │\n│    Example: (see image) ✨                                       │\n└─────────────────────────────────────────────────────────────────┘`,
			attachment: {
				[`${process.cwd()}/scripts/cmds/assets/guide/setname_1.png`]: `┌─────────────────────────────────────────┐\n│ 💬 ✨ https://i.ibb.co/gFh23zb/guide1.png ✨ │\n└─────────────────────────────────────────┘`,
				[`${process.cwd()}/scripts/cmds/assets/guide/setname_2.png`]: `┌─────────────────────────────────────────┐\n│ 💬 ✨ https://i.ibb.co/BNWHKgj/guide2.png ✨ │\n└─────────────────────────────────────────┘`
			}
		},
		text: {
			error: `┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ An error has occurred, try turning off the invite link feature in the group and try again later ✨ │\n└─────────────────────────────────────────────────────────────────────────────────────────────────────┘`
		}
	},
	setrole: {
		description: `┌───────────────────────────────────────────────────┐\n│ 💬 ✨ Edit role of command (commands with role < 2) ✨ │\n└───────────────────────────────────────────────────┘`,
		guide: `┌─────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨    {pn} <commandName> <new role>: set new role for command        │\n│    With:                                                            │\n│    + <commandName>: command name                                    │\n│    + <new role>: new role of command with:                          │\n│    + <new role> = 0: command can be used by all members in group    │\n│    + <new role> = 1: command can be used by admin only              │\n│    + <new role> = default: reset role of command to default         │\n│    Example:                                                         │\n│     {pn} rank 1: (command rank can be used by admin only)           │\n│     {pn} rank 0: (command rank can be used by all members in group) │\n│     {pn} rank default: reset to default                             │\n│ —————                                                               │\n│    {pn} [viewrole|view|show]: view role of edited commands ✨        │\n└─────────────────────────────────────────────────────────────────────┘`,
		text: {
			noEditedCommand: `┌────────────────────────────────────────┐\n│ 💬 ✨ ✅ Your group has no edited command ✨ │\n└────────────────────────────────────────┘`,
			editedCommand: `┌──────────────────────────────────────┐\n│ 💬 ✨ ⚠️ Your group has edited commands: │\n│  ✨                                   │\n└──────────────────────────────────────┘`,
			noPermission: `┌───────────────────────────────────────┐\n│ 💬 ✨ ❗ Only admin can use this command ✨ │\n└───────────────────────────────────────┘`,
			commandNotFound: `┌───────────────┐\n│ 💬 ✨ Command \ ✨ │\n└───────────────┘`%1\" not found",
			noChangeRole: `┌──────────────────────────────────────┐\n│ 💬 ✨ ❗ Can't change role of command \ ✨ │\n└──────────────────────────────────────┘`%1\"",
			resetRole: `┌─────────────────────────────┐\n│ 💬 ✨ Reset role of command \ ✨ │\n└─────────────────────────────┘`%1\" to default",
			changedRole: `┌───────────────────────────────┐\n│ 💬 ✨ Changed role of command \ ✨ │\n└───────────────────────────────┘`%1\" to %2"
		}
	},
	setwelcome: {
		description: `┌───────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Edit welcome message content when new member join your group chat ✨ │\n└───────────────────────────────────────────────────────────────────────┘`,
		guide: {
			body: `┌──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨    {pn} text [<content> | reset]: edit text content or reset to default, with some shortcuts:                          │\n│   + {userName}: new member name                                                                                          │\n│   + {userNameTag}: new member name (tag)                                                                                 │\n│   + {boxName}:  group chat name                                                                                          │\n│   + {multiple}: you || you guys                                                                                          │\n│   + {session}:  session in day                                                                                           │\n│                                                                                                                          │\n│    Example:                                                                                                              │\n│     {pn} text Hello {userName}, welcome to {boxName}, have a nice day {multiple}                                         │\n│                                                                                                                          │\n│    Reply (phản hồi) or send a message with file with content {pn} file: to add file attachments to welcome message (imag │\n│                                                                                                                          │\n│    Example:                                                                                                              │\n│     {pn} file reset: delete file attachments ✨                                                                           │\n└──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘`,
			attachment: {
				[`${process.cwd()}/scripts/cmds/assets/guide/setwelcome/setwelcome_en_1.png`]: `┌──────────────────────────────────────────────────┐\n│ 💬 ✨ https://i.ibb.co/vsCz0ks/setwelcome-en-1.png ✨ │\n└──────────────────────────────────────────────────┘`
			}
		},
		text: {
			missingContent: `┌──────────────────────────────────────────┐\n│ 💬 ✨ Please enter welcome message content ✨ │\n└──────────────────────────────────────────┘`,
			edited: `┌─────────────────────────────────────────────────────────┐\n│ 💬 ✨ Edited welcome message content of your group to: %1 ✨ │\n└─────────────────────────────────────────────────────────┘`,
			reseted: `┌─────────────────────────────────────┐\n│ 💬 ✨ Reseted welcome message content ✨ │\n└─────────────────────────────────────┘`,
			noFile: `┌───────────────────────────────────┐\n│ 💬 ✨ No file attachments to delete ✨ │\n└───────────────────────────────────┘`,
			resetedFile: `┌───────────────────────────────────────────┐\n│ 💬 ✨ Reseted file attachments successfully ✨ │\n└───────────────────────────────────────────┘`,
			missingFile: `┌───────────────────────────────────────────────────────────┐\n│ 💬 ✨ Please reply this message with image/video/audio file ✨ │\n└───────────────────────────────────────────────────────────┘`,
			addedFile: `┌─────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Added %1 file attachments to your group welcome message ✨ │\n└─────────────────────────────────────────────────────────────┘`
		}
	},
	shortcut: {
		description: `┌───────────────────────────────────────────────────┐\n│ 💬 ✨ Add a shortcut for your message in group chat ✨ │\n└───────────────────────────────────────────────────┘`,
		text: {
			missingContent: `┌──────────────────────────────────────┐\n│ 💬 ✨ Please enter the message content ✨ │\n└──────────────────────────────────────┘`,
			shortcutExists: `┌────────────────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Shortcut "%1" already exists, react to this message to replace the content of the shortcut ✨ │\n└────────────────────────────────────────────────────────────────────────────────────────────────┘`,
			shortcutExistsByOther: `┌────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Shortcut %1 has been added by other member, please try another keyword ✨ │\n└────────────────────────────────────────────────────────────────────────────┘`,
			added: `┌─────────────────────────────┐\n│ 💬 ✨ Added shortcut %1 => %2 ✨ │\n└─────────────────────────────┘`,
			addedAttachment: `┌────────────────────────────┐\n│ 💬 ✨  with %1 attachment(s) ✨ │\n└────────────────────────────┘`,
			missingKey: `┌─────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Please enter the keyword of the shortcut you want to delete ✨ │\n└─────────────────────────────────────────────────────────────────┘`,
			notFound: `┌─────────────────────────────────────────────────────────┐\n│ 💬 ✨ No shortcut found for keyword %1 in your group chat ✨ │\n└─────────────────────────────────────────────────────────┘`,
			onlyAdmin: `┌──────────────────────────────────────────────────┐\n│ 💬 ✨ Only administrators can delete other people\ ✨ │\n└──────────────────────────────────────────────────┘`s shortcuts',
			deleted: `┌─────────────────────────┐\n│ 💬 ✨ Deleted shortcut %1 ✨ │\n└─────────────────────────┘`,
			empty: `┌─────────────────────────────────────────────────┐\n│ 💬 ✨ Your group chat has not added any shortcuts ✨ │\n└─────────────────────────────────────────────────┘`,
			message: `┌─────────────┐\n│ 💬 ✨ Message ✨ │\n└─────────────┘`,
			attachment: `┌────────────────┐\n│ 💬 ✨ Attachment ✨ │\n└────────────────┘`,
			list: `┌─────────────────────────┐\n│ 💬 ✨ Your shortcuts list ✨ │\n└─────────────────────────┘`,
			onlyAdminRemoveAll: `┌────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Only administrators can remove all shortcuts in the group chat ✨ │\n└────────────────────────────────────────────────────────────────────┘`,
			confirmRemoveAll: `┌──────────────────────────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Are you sure you want to remove all shortcuts in this group chat? (react to this message to confirm) ✨ │\n└──────────────────────────────────────────────────────────────────────────────────────────────────────────┘`,
			removedAll: `┌──────────────────────────────────────────────┐\n│ 💬 ✨ Removed all shortcuts in your group chat ✨ │\n└──────────────────────────────────────────────┘`
		}
	},
	simsimi: {
		description: `┌───────────────────────┐\n│ 💬 ✨ Chat with simsimi ✨ │\n└───────────────────────┘`,
		guide: `┌───────────────────────────────────────────┐\n│ 💬 ✨    {pn} [on | off]: turn on/off simsimi │\n│                                           │\n│    {pn} <word>: chat with simsimi         │\n│    Example:                               │\n│     {pn} hi ✨                             │\n└───────────────────────────────────────────┘`,
		text: {
			turnedOn: `┌─────────────────────────────────────┐\n│ 💬 ✨ Turned on simsimi successfully! ✨ │\n└─────────────────────────────────────┘`,
			turnedOff: `┌──────────────────────────────────────┐\n│ 💬 ✨ Turned off simsimi successfully! ✨ │\n└──────────────────────────────────────┘`,
			chatting: `┌──────────────────────────────┐\n│ 💬 ✨ Chatting with simsimi... ✨ │\n└──────────────────────────────┘`,
			error: `┌─────────────────────────────────────────────┐\n│ 💬 ✨ Simsimi is busy, please try again later ✨ │\n└─────────────────────────────────────────────┘`
		}
	},
	sorthelp: {
		description: `┌────────────────────┐\n│ 💬 ✨ Sort help list ✨ │\n└────────────────────┘`,
		guide: `┌────────────────────────────┐\n│ 💬 ✨ {pn} [name | category] ✨ │\n└────────────────────────────┘`,
		text: {
			savedName: `┌──────────────────────────────────┐\n│ 💬 ✨ Saved sort help list by name ✨ │\n└──────────────────────────────────┘`,
			savedCategory: `┌──────────────────────────────────────┐\n│ 💬 ✨ Saved sort help list by category ✨ │\n└──────────────────────────────────────┘`
		}
	},
	thread: {
		description: `┌─────────────────────────────────────┐\n│ 💬 ✨ Manage group chat in bot system ✨ │\n└─────────────────────────────────────┘`,
		guide: `┌──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨    {pn} [find | -f | search | -s] <name to find>: search group chat in bot data by name                                │\n│    {pn} [find | -f | search | -s] [-j | joined] <name to find>: search group chat in bot data that bot still joined by n │\n│    {pn} [ban | -b] [<tid> | leave blank] <reason>: use to ban group with id <tid> or current group using bot             │\n│    Example:                                                                                                              │\n│     {pn} ban 3950898668362484 spam bot                                                                                   │\n│     {pn} ban spam too much                                                                                               │\n│     {pn} unban [<tid> | leave blank] to unban group with id <tid> or current group ✨                                     │\n└──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘`,
		text: {
			noPermission: `┌───────────────────────────────────────────────────┐\n│ 💬 ✨ You don't have permission to use this feature ✨ │\n└───────────────────────────────────────────────────┘`,
			found: `┌─────────────────────────────────────────────┐\n│ 💬 ✨ 🔎 Found %1 group matching the keyword \ ✨ │\n└─────────────────────────────────────────────┘`%3\" in bot data:\n%3",
			notFound: `┌──────────────────────────────────────────────┐\n│ 💬 ✨ ❌ No group found matching the keyword: \ ✨ │\n└──────────────────────────────────────────────┘`%1\" in bot data",
			hasBanned: `┌───────────────────────────────────────────────────┐\n│ 💬 ✨ Group with id [%1 | %2] has been banned before: │\n│ » Reason: %3                                      │\n│ » Time: %4 ✨                                      │\n└───────────────────────────────────────────────────┘`,
			banned: `┌─────────────────────────────────────────────┐\n│ 💬 ✨ Banned group with id [%1 | %2] using bot. │\n│ » Reason: %3                                │\n│ » Time: %4 ✨                                │\n└─────────────────────────────────────────────┘`,
			notBanned: `┌─────────────────────────────────────────────────────┐\n│ 💬 ✨ Group with id [%1 | %2] is not banned using bot ✨ │\n└─────────────────────────────────────────────────────┘`,
			unbanned: `┌─────────────────────────────────────────────────┐\n│ 💬 ✨ Unbanned group with tid [%1 | %2] using bot ✨ │\n└─────────────────────────────────────────────────┘`,
			missingReason: `┌────────────────────────────────┐\n│ 💬 ✨ Ban reason cannot be empty ✨ │\n└────────────────────────────────┘`,
			info: `┌──────────────────────────┐\n│ 💬 ✨ » Box ID: %1           │\n│ » Name: %2               │\n│ » Date created data: %3  │\n│ » Total members: %4      │\n│ » Boy: %5 members        │\n│ » Girl: %6 members       │\n│ » Total messages: %7%8 ✨ │\n└──────────────────────────┘`
		}
	},
	tid: {
		description: `┌──────────────────────────────────────┐\n│ 💬 ✨ View threadID of your group chat ✨ │\n└──────────────────────────────────────┘`,
		guide: `┌──────────┐\n│ 💬 ✨ {pn} ✨ │\n└──────────┘`
	},
	tik: {
		description: `┌──────────────────────────────────────────────────────────┐\n│ 💬 ✨ Download video/slide (image), audio from tiktok link ✨ │\n└──────────────────────────────────────────────────────────┘`,
		guide: `┌─────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨    {pn} [video|-v|v] <url>: use to download video/slide (image) from tiktok link. │\n│    {pn} [audio|-a|a] <url>: use to download audio from tiktok link ✨                │\n└─────────────────────────────────────────────────────────────────────────────────────┘`,
		text: {
			invalidUrl: `┌─────────────────────────────────────┐\n│ 💬 ✨ Please enter a valid tiktok url ✨ │\n└─────────────────────────────────────┘`,
			downloadingVideo: `┌──────────────────────────────┐\n│ 💬 ✨ Downloading video: %1... ✨ │\n└──────────────────────────────┘`,
			downloadedSlide: `┌────────────────────────┐\n│ 💬 ✨ Downloaded slide: %1 │\n│ %2 ✨                   │\n└────────────────────────┘`,
			downloadedVideo: `┌────────────────────────┐\n│ 💬 ✨ Downloaded video: %1 │\n│ Download Url: %2 ✨     │\n└────────────────────────┘`,
			downloadingAudio: `┌──────────────────────────────┐\n│ 💬 ✨ Downloading audio: %1... ✨ │\n└──────────────────────────────┘`,
			downloadedAudio: `┌──────────────────────────┐\n│ 💬 ✨ Downloaded audio: %1 ✨ │\n└──────────────────────────┘`
		}
	},
	trigger: {
		description: `┌───────────────────┐\n│ 💬 ✨ Trigger image ✨ │\n└───────────────────┘`,
		guide: `┌─────────────────────────┐\n│ 💬 ✨ {pn} [@tag | empty] ✨ │\n└─────────────────────────┘`
	},
	uid: {
		description: `┌───────────────────────────────────┐\n│ 💬 ✨ View facebook user id of user ✨ │\n└───────────────────────────────────┘`,
		guide: `┌─────────────────────────────────────────────────────────────────┐\n│ 💬 ✨    {pn}: use to view your facebook user id                    │\n│    {pn} @tag: view facebook user id of tagged people            │\n│    {pn} <profile link>: view facebook user id of profile link ✨ │\n└─────────────────────────────────────────────────────────────────┘`,
		text: {
			syntaxError: `┌───────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Please tag the person you want to view uid or leave it blank to view your own uid ✨ │\n└───────────────────────────────────────────────────────────────────────────────────────┘`
		}
	},
	unsend: {
		description: `┌──────────────────────────┐\n│ 💬 ✨ Unsend bot's message ✨ │\n└──────────────────────────┘`,
		guide: `┌────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ reply the message you want to unsend and call the command {pn} ✨ │\n└────────────────────────────────────────────────────────────────────┘`,
		text: {
			syntaxError: `┌─────────────────────────────────────────────────┐\n│ 💬 ✨ Please reply the message you want to unsend ✨ │\n└─────────────────────────────────────────────────┘`
		}
	},
	user: {
		description: `┌────────────────────────────────┐\n│ 💬 ✨ Manage users in bot system ✨ │\n└────────────────────────────────┘`,
		guide: `┌──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨    {pn} [find | -f | search | -s] <name to find>: search for users in bot data by name                                 │\n│                                                                                                                          │\n│    {pn} [ban | -b] [<uid> | @tag | reply message] <reason>: to ban user with id <uid> or tagged user or sender of messag │\n│                                                                                                                          │\n│    {pn} unban [<uid> | @tag | reply message]: to unban user using bot ✨                                                  │\n└──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘`,
		text: {
			noUserFound: `┌───────────────────────────────────────────────────┐\n│ 💬 ✨ ❌ No user found with name matching keyword: \ ✨ │\n└───────────────────────────────────────────────────┘`%1\" in bot data",
			userFound: `┌──────────────────────────────────────────────────┐\n│ 💬 ✨ 🔎 Found %1 user with name matching keyword \ ✨ │\n└──────────────────────────────────────────────────┘`%2\" in bot data:\n%3",
			uidRequired: `┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Uid of user to ban cannot be empty, please enter uid or tag or reply message of 1 user by user ban <uid> <reason> ✨ │\n└───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘`,
			reasonRequired: `┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Reason to ban user cannot be empty, please enter uid or tag or reply message of 1 user by user ban <uid> <reason> ✨ │\n└───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘`,
			userHasBanned: `┌──────────────────────────────────────────────────┐\n│ 💬 ✨ User with id [%1 | %2] has been banned before: │\n│ » Reason: %3                                     │\n│ » Date: %4 ✨                                     │\n└──────────────────────────────────────────────────┘`,
			userBanned: `┌───────────────────────────────────────────┐\n│ 💬 ✨ User with id [%1 | %2] has been banned: │\n│ » Reason: %3                              │\n│ » Date: %4 ✨                              │\n└───────────────────────────────────────────┘`,
			uidRequiredUnban: `┌──────────────────────────────────────────┐\n│ 💬 ✨ Uid of user to unban cannot be empty ✨ │\n└──────────────────────────────────────────┘`,
			userNotBanned: `┌──────────────────────────────────────────┐\n│ 💬 ✨ User with id [%1 | %2] is not banned ✨ │\n└──────────────────────────────────────────┘`,
			userUnbanned: `┌──────────────────────────────────────────────┐\n│ 💬 ✨ User with id [%1 | %2] has been unbanned ✨ │\n└──────────────────────────────────────────────┘`
		}
	},
	videofb: {
		description: `┌─────────────────────────────────────────────────┐\n│ 💬 ✨ Download video/story from facebook (public) ✨ │\n└─────────────────────────────────────────────────┘`,
		guide: `┌──────────────────────────────────────────────────────┐\n│ 💬 ✨    {pn} <url video/story>: tải video từ facebook ✨ │\n└──────────────────────────────────────────────────────┘`,
		text: {
			missingUrl: `┌─────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Please enter the facebook video/story (public) url you want to download ✨ │\n└─────────────────────────────────────────────────────────────────────────────┘`,
			error: `┌───────────────────────────────────────────────────┐\n│ 💬 ✨ An error occurred while downloading the video ✨ │\n└───────────────────────────────────────────────────┘`,
			downloading: `┌───────────────────────────────┐\n│ 💬 ✨ Downloading video for you ✨ │\n└───────────────────────────────┘`,
			tooLarge: `┌─────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Sorry, we can't download the video for you because the size is larger than 83MB ✨ │\n└─────────────────────────────────────────────────────────────────────────────────────┘`
		}
	},
	warn: {
		description: `┌─────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ warn member in group, if they have 3 warns, they will be banned ✨ │\n└─────────────────────────────────────────────────────────────────────┘`,
		guide: `┌───────────────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨    {pn} @tag <reason>: warn member                                                          │\n│    {pn} list: view list of warned members                                                     │\n│    {pn} listban: view list of banned members                                                  │\n│    {pn} info [@tag | <uid> | leave blank]: view warn info of tagged member or uid or yourself │\n│    {pn} unban <uid>: unban member by uid                                                      │\n│    {pn} unwarn <uid> [<warn number> | leave blank]: unwarn member by uid and warn number      │\n│    {pn} warn reset: reset all warn data                                                       │\n│ ⚠️ You need to set admin for bot to auto kick banned members ✨                                │\n└───────────────────────────────────────────────────────────────────────────────────────────────┘`,
		text: {
			list: `┌──────────────────────────────────────────────────┐\n│ 💬 ✨ List of members who have been warned:          │\n│ %1                                               │\n│                                                  │\n│ To view the details of the warnings, use the \ ✨ │\n└──────────────────────────────────────────────────┘`%2warn info [@tag | <uid> | leave blank]\" command: to view the warning information of the tagged person or uid or yourself",
			listBan: `┌─────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ List of members who have been warned 3 times and banned from the box: │\n│ %1 ✨                                                                    │\n└─────────────────────────────────────────────────────────────────────────┘`,
			listEmpty: `┌────────────────────────────────────────────────────┐\n│ 💬 ✨ Your group has no members who have been warned ✨ │\n└────────────────────────────────────────────────────┘`,
			listBanEmpty: `┌───────────────────────────────────────────────────┐\n│ 💬 ✨ Your group has no members banned from the box ✨ │\n└───────────────────────────────────────────────────┘`,
			invalidUid: `┌─────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Please enter a valid uid of the person you want to view information ✨ │\n└─────────────────────────────────────────────────────────────────────────┘`,
			noData: `┌─────────────┐\n│ 💬 ✨ No data ✨ │\n└─────────────┘`,
			noPermission: `┌───────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ❌ Only group administrators can unban members banned from the box ✨ │\n└───────────────────────────────────────────────────────────────────────┘`,
			invalidUid2: `┌─────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ Please enter a valid uid of the person you want to unban ✨ │\n└─────────────────────────────────────────────────────────────────┘`,
			notBanned: `┌──────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ The user with id %1 has not been banned from your box ✨ │\n└──────────────────────────────────────────────────────────────┘`,
			unbanSuccess: `┌────────────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ✅ Successfully unbanned member [%1 | %2], currently this person can join your chat box ✨ │\n└────────────────────────────────────────────────────────────────────────────────────────────┘`,
			noPermission2: `┌───────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ❌ Only group administrators can remove warnings from members in the group ✨ │\n└───────────────────────────────────────────────────────────────────────────────┘`,
			invalidUid3: `┌────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ Please enter a uid or tag the person you want to remove the warning ✨ │\n└────────────────────────────────────────────────────────────────────────────┘`,
			noData2: `┌────────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ The user with id %1 has no warning data ✨ │\n└────────────────────────────────────────────────┘`,
			notEnoughWarn: `┌────────────────────────────────────────┐\n│ 💬 ✨ ❌ The user %1 only has %2 warnings ✨ │\n└────────────────────────────────────────┘`,
			unwarnSuccess: `┌───────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ✅ Successfully removed the %1 warning of member [%2 | %3] ✨ │\n└───────────────────────────────────────────────────────────────┘`,
			noPermission3: `┌────────────────────────────────────────────────────────┐\n│ 💬 ✨ ❌ Only group administrators can reset warning data ✨ │\n└────────────────────────────────────────────────────────┘`,
			resetWarnSuccess: `┌───────────────────────────────────────┐\n│ 💬 ✨ ✅ Successfully reset warning data ✨ │\n└───────────────────────────────────────┘`,
			noPermission4: `┌───────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ❌ Only group administrators can warn members in the group ✨ │\n└───────────────────────────────────────────────────────────────┘`,
			invalidUid4: `┌───────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ You need to tag or reply to the message of the person you want to warn ✨ │\n└───────────────────────────────────────────────────────────────────────────────┘`,
			warnSuccess: `┌───────────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ Warned member %1 times %2                                                            │\n│ - Uid: %3                                                                                 │\n│ - Reason: %4                                                                              │\n│ - Date Time: %5                                                                           │\n│ This member has been warned 3 times and banned from the box, to unban use the command \ ✨ │\n└───────────────────────────────────────────────────────────────────────────────────────────┘`%6warn unban <uid>\" (with uid is the uid of the person you want to unban)",
			noPermission5: `┌───────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ Bot needs administrator permissions to kick banned members ✨ │\n└───────────────────────────────────────────────────────────────────┘`,
			warnSuccess2: `┌───────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ Warned member %1 times %2                                            │\n│ - Uid: %3                                                                 │\n│ - Reason: %4                                                              │\n│ - Date Time: %5                                                           │\n│ If this person violates %6 more times, they will be banned from the box ✨ │\n└───────────────────────────────────────────────────────────────────────────┘`,
			hasBanned: `┌─────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ The following members have been warned 3 times before and banned from the box: │\n│ %1 ✨                                                                                │\n└─────────────────────────────────────────────────────────────────────────────────────┘`,
			failedKick: `┌────────────────────────────────────────────────────────────┐\n│ 💬 ✨ ⚠️ An error occurred when kicking the following members: │\n│ %1 ✨                                                       │\n└────────────────────────────────────────────────────────────┘`
		}
	},
	weather: {
		description: `┌───────────────────────────────────────────────────────┐\n│ 💬 ✨ view the current and next 5 days weather forecast ✨ │\n└───────────────────────────────────────────────────────┘`,
		guide: `┌─────────────────────┐\n│ 💬 ✨ {pn} <location> ✨ │\n└─────────────────────┘`,
		text: {
			syntaxError: `┌─────────────────────────────┐\n│ 💬 ✨ Please enter a location ✨ │\n└─────────────────────────────┘`,
			notFound: `┌────────────────────────────┐\n│ 💬 ✨ Location not found: %1 ✨ │\n└────────────────────────────┘`,
			error: `┌───────────────────────────────┐\n│ 💬 ✨ An error has occurred: %1 ✨ │\n└───────────────────────────────┘`,
			today: `┌──────────────────────────────────────┐\n│ 💬 ✨ Today's weather:                   │\n│ %1                                   │\n│ 🌡 Low - high temperature %2°C - %3°C │\n│ 🌡 Feels like %4°C - %5°C             │\n│ 🌅 Sunrise %6                         │\n│ 🌄 Sunset %7                          │\n│ 🌃 Moonrise %8                        │\n│ 🏙️ Moonset %9                        │\n│ 🌞 Day: %10                           │\n│ 🌙 Night: %11 ✨                       │\n└──────────────────────────────────────┘`
		}
	},
	ytb: {
		description: `┌────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ Download video, audio or view video information on YouTube ✨ │\n└────────────────────────────────────────────────────────────────┘`,
		guide: `┌───────────────────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨    {pn} [video|-v] [<video name>|<video link>]: use to download video from youtube.     │\n│    {pn} [audio|-a] [<video name>|<video link>]: use to download audio from youtube        │\n│    {pn} [info|-i] [<video name>|<video link>]: use to view video information from youtube │\n│    Example:                                                                               │\n│     {pn} -v Fallen Kingdom                                                                │\n│     {pn} -a Fallen Kingdom                                                                │\n│     {pn} -i Fallen Kingdom ✨                                                              │\n└───────────────────────────────────────────────────────────────────────────────────────────┘`,
		text: {
			error: `┌───────────────────────────────┐\n│ 💬 ✨ An error has occurred: %1 ✨ │\n└───────────────────────────────┘`,
			noResult: `┌────────────────────────────────────────────┐\n│ 💬 ✨ No search results match the keyword %1 ✨ │\n└────────────────────────────────────────────┘`,
			choose: `┌───────────────────────────────────────────────────────────────────────────────┐\n│ 💬 ✨ %1Reply to the message with the number to choose or any content to cancel ✨ │\n└───────────────────────────────────────────────────────────────────────────────┘`,
			downloading: `┌──────────────────────────┐\n│ 💬 ✨ Downloading video %1 ✨ │\n└──────────────────────────┘`,
			noVideo: `┌──────────────────────────────────────────────────────────┐\n│ 💬 ✨ Sorry, no video was found with a size less than 83MB ✨ │\n└──────────────────────────────────────────────────────────┘`,
			downloadingAudio: `┌──────────────────────────┐\n│ 💬 ✨ Downloading audio %1 ✨ │\n└──────────────────────────┘`,
			noAudio: `┌──────────────────────────────────────────────────────────┐\n│ 💬 ✨ Sorry, no audio was found with a size less than 26MB ✨ │\n└──────────────────────────────────────────────────────────┘`,
			info: `┌────────────────────────┐\n│ 💬 ✨ 💠 Title: %1          │\n│ 🏪 Channel: %2          │\n│ 👨‍👩‍👧‍👦 Subscriber: %3 │\n│ ⏱ Video time: %4       │\n│ 👀 View: %5             │\n│ 👍 Like: %6             │\n│ 🆙 Upload date: %7      │\n│ 🔠 ID: %8               │\n│ 🔗 Link: %9 ✨           │\n└────────────────────────┘`,
			listChapter: `┌────────────────────┐\n│ 💬 ✨                  │\n│ 📖 List chapter: %1 │\n│  ✨                 │\n└────────────────────┘`
		}
	}
};
