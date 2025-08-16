module.exports = {
	// You can customize the language here or directly in the command files
	onlyadminbox: {
		description: "\
   /        \
 turn on/off only admin box can use bot \
",
		guide: "\
     {} [ | ]  \
    {pn} [on | off] \
",
		text: {
			turnedOn: "\
              \
 Turned on the mode only admin of group can use bot \
",
			turnedOff: "\
              \
 Turned off the mode only admin of group can use bot \
",
			syntaxError: "\
   ,   {}   {}   \
 Syntax error, only use {pn} on or {pn} off \
"
		}
	},
	adduser: {
		description: "\
          \
 Add user to box chat of you \
",
		guide: "\
     {} [  | ]  \
    {pn} [link profile | uid] \
",
		text: {
			alreadyInGroup: "\
      \
 Already in group \
",
			successAdd: "\
  -   %1      \
 - Successfully added %1 members to the group \
",
			failedAdd: "\
  -    %1      \
 - Failed to add %1 members to the group \
",
			approve: "\
  -  %1       \
 - Added %1 members to the approval list \
",
			invalidLink: "\
         \
 Please enter a valid facebook link \
",
			cannotGetUid: "\
         \
 Cannot get uid of this user \
",
			linkNotExist: "\
         \
 This profile url does not exist \
",
			cannotAddUser: "\
                \
 Bot is blocked or this user blocked strangers from adding to the group \
"
		}
	},
	admin: {
		description: "\
  , ,     \
 Add, remove, edit admin role \
",
		guide: "\
     {} [ | -] <>:        \
 	  {pn} [remove | -r] <uid>: Remove admin role of user \
",
		text: {
			added: "\
  тЬЕ |     %1 :  \
 %2                                   \
",
			alreadyAdmin: "\
  тЪая╕П | %1     :  \
 %2                                         \
",
			missingIdAdd: "\
  тЪая╕П |            \
 тЪая╕П | Please enter ID or tag user to add admin role \
",
			removed: "\
  тЬЕ |     %1 :  \
 %2                                    \
",
			notAdmin: "\
  тЪая╕П | %1  '   :  \
 %2                                       \
",
			missingIdRemove: "\
  тЪая╕П |            \
 тЪая╕П | Please enter ID or tag user to remove admin role \
",
			listAdmin: "\
  ЁЯСС |   :  \
 %1                     \
"
		}
	},
	adminonly: {
		description: "\
   /       \
 turn on/off only admin can use bot \
",
		guide: "\
  {} [ | ]  \
 {pn} [on | off] \
",
		text: {
			turnedOn: "\
            \
 Turned on the mode only admin can use bot \
",
			turnedOff: "\
            \
 Turned off the mode only admin can use bot \
",
			syntaxError: "\
   ,   {}   {}   \
 Syntax error, only use {pn} on or {pn} off \
"
		}
	},
	all: {
		description: "\
          \
 Tag all members in your group chat \
",
		guide: "\
  {} [ | ]  \
 {pn} [content | empty] \
"
	},
	anime: {
		description: "\
      \
 random anime image \
",
		guide: "\
  {} <>                                                                \
    List of endpoint: neko, kitsune, hug, pat, waifu, cry, kiss, slap, smug, punch \
",
		text: {
			loading: "\
   ,  ...  \
 Initializing image, please wait... \
",
			error: "\
    ,      \
 An error occurred, please try again later \
"
		}
	},
	antichangeinfobox: {
		description: "\
   /      \
 Turn on/off anti change info box \
",
		guide: "\
     {}  [ | ]:       \
    {pn} name [on | off]: anti change name box chat  \
",
		text: {
			antiChangeAvatarOn: "\
          \
 Turn on anti change avatar box chat \
",
			antiChangeAvatarOff: "\
          \
 Turn off anti change avatar box chat \
",
			missingAvt: "\
           \
 You have not set avatar for box chat \
",
			antiChangeNameOn: "\
          \
 Turn on anti change name box chat \
",
			antiChangeNameOff: "\
          \
 Turn off anti change name box chat \
",
			antiChangeThemeOn: "\
          \
 Turn on anti change theme box chat \
",
			antiChangeThemeOff: "\
          \
 Turn off anti change theme box chat \
",
			antiChangeEmojiOn: "\
          \
 Turn on anti change emoji box chat \
",
			antiChangeEmojiOff: "\
          \
 Turn off anti change emoji box chat \
",
			antiChangeAvatarAlreadyOn: "\
            \
 Your box chat is currently on anti change avatar \
",
			antiChangeNameAlreadyOn: "\
            \
 Your box chat is currently on anti change name \
",
			antiChangeThemeAlreadyOn: "\
            \
 Your box chat is currently on anti change theme \
",
			antiChangeEmojiAlreadyOn: "\
            \
 Your box chat is currently on anti change emoji \
"
		}
	},
	appstore: {
		description: "\
       \
 Search app on appstore \
",
		text: {
			missingKeyword: "\
   '     \
 You haven't entered any keyword \
",
			noResult: "\
       %1  \
 No result found for keyword %1 \
"
		}
	},
	autosetname: {
		description: "\
         \
 Auto change nickname of new member \
",
		guide: "\
     {}  <>:        ,   :  \
    + {userName}: name of new member                                                  \
",
		text: {
			missingConfig: "\
        \
 Please enter the required configuration \
",
			configSuccess: "\
         \
 The configuration has been set successfully \
",
			currentConfig: "\
          :  \
 %1                                                           \
",
			notSetConfig: "\
           \
 Your group has not set the autoSetName configuration \
",
			syntaxError: "\
   ,  \"{} \"  \"{} \"     \
 Syntax error, only \"{pn} on\" or \"{pn} off\" can be used \
",
			turnOnSuccess: "\
          \
 The autoSetName feature has been turned on \
",
			turnOffSuccess: "\
          \
 The autoSetName feature has been turned off \
",
			error: "\
         ,                \
 An error occurred while using the autoSetName feature, try turning off the invite link feature in the group and try again later \
"
		}
	},
	avatar: {
		description: "\
        \
 create anime avatar with signature \
",
		guide: "\
  {}{} <    > | < > | <> | <     >  \
 {p}{n} help: view how to use this command                                            \
",
		text: {
			initImage: "\
   ,  ...  \
 Initializing image, please wait... \
",
			invalidCharacter: "\
      %1    ,         \
 Currently there are only %1 characters on the system, please enter a character id less than \
",
			notFoundCharacter: "\
     %1        \
 No character named %1 was found in the character list \
",
			errorGetCharacter: "\
        :  \
 %1: %2                                          \
",
			success: "\
  тЬЕ    \
 Character: %1   \
",
			defaultColor: "\
    \
 default \
",
			error: "\
      \
 %1: %2            \
"
		}
	},
	badwords: {
		description: "\
   ///   ,    ,    ,              \
 Turn on/off/add/remove bad words warning, if a member violates, he will be warned, the second time he will be kicked out of the chat box \
",
		guide: "\
     {}  <>:    (        \",\"    \"|\")  \
    {pn} delete <words>: delete banned words (you can delete multiple words separated by commas \",\" or vertical bars \"|\") \
",
		text: {
			onText: "\
    \
 on \
",
			offText: "\
    \
 off \
",
			onlyAdmin: "\
  тЪая╕П |           \
 тЪая╕П | Only admins can add banned words to the list \
",
			missingWords: "\
  тЪая╕П |  '      \
 тЪая╕П | You haven't entered the banned words \
",
			addedSuccess: "\
  тЬЕ |  %1       \
 тЬЕ | Added %1 banned words to the list \
",
			alreadyExist: "\
  тЭМ | %1        : %2  \
 тЭМ | %1 banned words already exist in the list before: %2 \
",
			tooShort: "\
  тЪая╕П | %1              2 : %2  \
 тЪая╕П | %1 banned words cannot be added to the list because they are shorter than 2 characters: %2 \
",
			onlyAdmin2: "\
  тЪая╕П |           \
 тЪая╕П | Only admins can delete banned words from the list \
",
			missingWords2: "\
  тЪая╕П |  '       \
 тЪая╕П | You haven't entered the words to delete \
",
			deletedSuccess: "\
  тЬЕ |  %1       \
 тЬЕ | Deleted %1 banned words from the list \
",
			notExist: "\
  тЭМ | %1         : %2  \
 тЭМ | %1 banned words do not exist in the list before: %2 \
",
			emptyList: "\
  тЪая╕П |             \
 тЪая╕П | The list of banned words in your group is currently empty \
",
			badWordsList: "\
  ЁЯУС |        : %1  \
 ЁЯУС | The list of banned words in your group: %1 \
",
			onlyAdmin3: "\
  тЪая╕П |    %1    \
 тЪая╕П | Only admins can %1 this feature \
",
			turnedOnOrOff: "\
  тЬЕ |      %1  \
 тЬЕ | Banned words warning has been %1 \
",
			onlyAdmin4: "\
  тЪая╕П |         \
 тЪая╕П | Only admins can delete banned words warning \
",
			missingTarget: "\
  тЪая╕П |  '        \
 тЪая╕П | You haven't entered user ID or tagged user \
",
			notWarned: "\
  тЪая╕П |  %1         \
 тЪая╕П | User %1 has not been warned for banned words \
",
			removedWarn: "\
  тЬЕ |  %1 | %2    1     \
 тЬЕ | User %1 | %2 has been removed 1 banned words warning \
",
			warned: "\
  тЪая╕П |   \"%1\"      ,            .  \
 тЪая╕П | Banned words \"%1\" have been detected in your message, if you continue to violate you will be kicked from the group. \
",
			warned2: "\
  тЪая╕П |   \"%1\"      ,    2        .  \
 тЪая╕П | Banned words \"%1\" have been detected in your message, you have violated 2 times and will be kicked from the group. \
",
			needAdmin: "\
           \
 Bot needs admin privileges to kick banned members \
",
			unwarned: "\
  тЬЕ |       %1 | %2  \
 тЬЕ | Removed banned words warning of user %1 | %2 \
"
		}
	},
	balance: {
		description: "\
             \
 view your money or the money of the tagged person \
",
		guide: "\
     {}:                            \
    {pn} <@tag>: view the money of the tagged person \
",
		text: {
			money: "\
    %1$  \
 You have %1$ \
",
			moneyOf: "\
  %1  %2$  \
 %1 has %2$ \
"
		}
	},
	batslap: {
		description: "\
     \
 Batslap image \
",
		text: {
			noTag: "\
            \
 You must tag the person you want to slap \
"
		}
	},
	busy: {
		description: "\
       ,         \
 turn on do not disturb mode, when you are tagged bot will notify \
",
		guide: "\
     {} [ | <>]:        \
    {pn} off: turn off do not disturb mode               \
",
		text: {
			turnedOff: "\
  тЬЕ |          \
 тЬЕ | Do not disturb mode has been turned off \
",
			turnedOn: "\
  тЬЕ |          \
 тЬЕ | Do not disturb mode has been turned on \
",
			turnedOnWithReason: "\
  тЬЕ |          : %1  \
 тЬЕ | Do not disturb mode has been turned on with reason: %1 \
",
			alreadyOn: "\
   %1     \
 User %1 is currently busy \
",
			alreadyOnWithReason: "\
   %1     : %2  \
 User %1 is currently busy with reason: %2 \
"
		}
	},
	callad: {
		description: "\
   , , ,...     \
 send report, feedback, bug,... to admin bot \
",
		guide: "\
     {} <>  \
    {pn} <message> \
",
		text: {
			missingMessage: "\
             \
 Please enter the message you want to send to admin \
",
			sendByGroup: "\
  -   : %1  \
 - Thread ID: %2       \
",
			sendByUser: "\
  -     \
 - Sent from user \
",
			content: "\
  :                                         \
  \
",
			success: "\
       !  \
 Sent your message to admin successfully! \
",
			reply: "\
  ЁЯУН    %1:                        \
  \
",
			replySuccess: "\
       !  \
 Sent your reply to admin successfully! \
",
			feedback: "\
  ЁЯУЭ    %1:  \
 - User ID: %2%3             \
",
			replyUserSuccess: "\
       !  \
 Sent your reply to user successfully! \
"
		}
	},
	cmd: {
		description: "\
       \
 Manage your command files \
",
		guide: "\
  {}  <  >  \
 {pn} loadAll                  \
",
		text: {
			missingFileName: "\
  тЪая╕П |           \
 тЪая╕П | Please enter the command name you want to reload \
",
			loaded: "\
  тЬЕ |   \"%1\"   \
 тЬЕ | Loaded command \"%1\" successfully \
",
			loadedError: "\
  тЭМ |     \"%1\"    \
 %2: %3                                       \
",
			loadedSuccess: "\
  тЬЕ |   \"%1\"   \
 тЬЕ | Loaded successfully \"%1\" command \
",
			loadedFail: "\
  тЭМ |    \"%1\"   \
 %2                                \
",
			missingCommandNameUnload: "\
  тЪая╕П |           \
 тЪая╕П | Please enter the command name you want to unload \
",
			unloaded: "\
  тЬЕ |   \"%1\"   \
 тЬЕ | Unloaded command \"%1\" successfully \
",
			unloadedError: "\
  тЭМ |     \"%1\"    \
 %2: %3                                         \
",
			missingUrlCodeOrFileName: "\
  тЪая╕П |                \
 тЪая╕П | Please enter the url or code and command file name you want to install \
",
			missingUrlOrCode: "\
  тЪая╕П |                \
 тЪая╕П | Please enter the url or code of the command file you want to install \
",
			missingFileNameInstall: "\
  тЪая╕П |          ( . )  \
 тЪая╕П | Please enter the file name to save the command (with .js extension) \
",
			invalidUrlOrCode: "\
  тЪая╕П |       \
 тЪая╕П | Unable to get command code \
",
			alreadExist: "\
  тЪая╕П |     ,           ?  \
 React to this message to continue                                                    \
",
			installed: "\
  тЬЕ |   \"%1\" ,       %2  \
 тЬЕ | Installed command \"%1\" successfully, the command file is saved at %2 \
",
			installedError: "\
  тЭМ |     \"%1\"    \
 %2: %3                                          \
",
			missingFile: "\
  тЪая╕П |   \"%1\"    \
 тЪая╕П | Command file \"%1\" not found \
",
			invalidFileName: "\
  тЪая╕П |      \
 тЪая╕П | Invalid command file name \
",
			unloadedFile: "\
  тЬЕ |   \"%1\"  \
 тЬЕ | Unloaded command \"%1\" \
"
		}
	},
	count: {
		description: "\
            (     )  \
 View the number of messages of all members or yourself (since the bot joined the group) \
",
		guide: "\
     {}:                     \
    {pn} @tag: used to view the number of messages of those tagged \
",
		text: {
			count: "\
      :  \
 Number of messages of members: \
",
			endMessage: "\
                .  \
 Those who do not have a name in the list have not sent any messages. \
",
			page: "\
   [%1/%2]  \
 Page [%1/%2] \
",
			reply: "\
              \
 Reply to this message with the page number to view more \
",
			result: "\
  %1  %2  %3   \
 %1 rank %2 with %3 messages \
",
			yourResult: "\
     %1    %2      \
 You are ranked %1 and have sent %2 messages in this group \
",
			invalidPage: "\
      \
 Invalid page number \
"
		}
	},
	customrankcard: {
		description: "\
         \
 Design rank card by your own \
",
		guide: {
			body: "\
     {} [ |  |  |  |  |  |  |  |  |  | ] <>  \
    {pn} [maincolor | subcolor | linecolor | progresscolor | alphasubcolor | textcolor | namecolor | expcolor | rankcolor | levelcolor | reset] <value> \
"
				+ "
   In which: "\
  				+   \
 				+  \
"
  + maincolor | background <value>: main background of rank card"
				+ "
  + subcolor <value>: sub background"
				+ "
  + linecolor <value>: color of line between main and sub background"
				+ "
  + expbarcolor <value>: color of exp bar"
				+ "
  + progresscolor <value>: color of current exp bar"
				+ "
  + alphasubcolor <value>: opacity of sub background (from 0 -> 1)"
				+ "
  + textcolor <value>: color of text (hex color or rgba)"
				+ "
  + namecolor <value>: color of name"
				+ "
  + expcolor <value>: color of exp"
				+ "
  + rankcolor <value>: color of rank"
				+ "
  + levelcolor <value>: color of level"
				+ "
     <value> can be hex color, rgb, rgba, gradient (each color is separated by space) or image url"
				+ "
     If you want to use gradient, please enter many colors separated by space"
				+ "
   {pn} reset: reset all to default"
				+ "
   Example:"\
  				+   \
 				+  \
"
    {pn} maincolor #fff000"
				+ "
    {pn} subcolor rgba(255,136,86,0.4)"
				+ "
    {pn} reset",
			attachment: {
				[`${process.cwd()}/scripts/cmds/assets/guide/customrankcard_1.jpg`]: "\
  ://../21/.  \
 https://i.ibb.co/BZ2Qgs1/image.png \
",
				[`${process.cwd()}/scripts/cmds/assets/guide/customrankcard_2.png`]: "\
  ://../1/.  \
 https://i.ibb.co/wy1ZHHL/image.png \
"
			}
		},
		text: {
			invalidImage: "\
    ,        (, , , ),      ://./   \"  \"      \
 Invalid image url, please choose an url with image destination (jpg, jpeg, png, gif), you can upload image to https://imgbb.com/ and choose \"get direct link\" to get image url \
",
			invalidAttachment: "\
   ,       \
 Invalid attachment, please choose an image file \
",
			invalidColor: "\
    ,       (6 )      \
 Invalid color code, please choose a hex color code (6 digits) or rgba color code \
",
			notSupportImage: "\
         \"%1\"  \
 Url image is not supported with option \"%1\" \
",
			success: "\
      ,      \
 Your changes have been saved, here is a preview \
",
			reseted: "\
          \
 All settings have been reset to default \
",
			invalidAlpha: "\
       0 -> 1  \
 Please choose a number from 0 -> 1 \
"
		}
	},
	dhbc: {
		description: "\
        \
 play game catch the word \
",
		guide: "\
  {}  \
 {pn} \
",
		text: {
			reply: "\
          \
 %1                                        \
",
			isSong: "\
            %1  \
 This is the name of the song of the singer %1 \
",
			notPlayer: "\
  тЪая╕П          \
 тЪая╕П You are not the player of this question \
",
			correct: "\
  ЁЯОЙ        %1$  \
 ЁЯОЙ Congratulations you have answered correctly and received %1$ \
",
			wrong: "\
  тЪая╕П      \
 тЪая╕П You have answered incorrectly \
"
		}
	},
	emojimix: {
		description: "\
   2    \
 Mix 2 emoji together \
",
		guide: "\
     {} <1> <2>  \
    Example:  {pn} ЁЯдг ЁЯе░ \
"
	},
	eval: {
		description: "\
      \
 Test code quickly \
",
		guide: "\
  {} <  >  \
 {pn} <code to test> \
",
		text: {
			error: "\
  тЭМ   :  \
 тЭМ An error occurred: \
"
		}
	},
	event: {
		description: "\
        \
 Manage your event command files \
",
		guide: "\
  {}  <  >  \
 {pn} loadAll                  \
",
		text: {
			missingFileName: "\
  тЪая╕П |           \
 тЪая╕П | Please enter the command name you want to reload \
",
			loaded: "\
  тЬЕ |    \"%1\"   \
 тЬЕ | Loaded event command \"%1\" successfully \
",
			loadedError: "\
  тЭМ |    \"%1\"     \
 %2: %3                                            \
",
			loadedSuccess: "\
  тЬЕ |  \"%1\"     \
 тЬЕ | Loaded \"%1\" event command successfully \
",
			loadedFail: "\
  тЭМ |    \"%1\"   \
 %2                                     \
",
			missingCommandNameUnload: "\
  тЪая╕П |           \
 тЪая╕П | Please enter the command name you want to unload \
",
			unloaded: "\
  тЬЕ |    \"%1\"   \
 тЬЕ | Unloaded event command \"%1\" successfully \
",
			unloadedError: "\
  тЭМ |    \"%1\"     \
 %2: %3                                              \
",
			missingUrlCodeOrFileName: "\
  тЪая╕П |                \
 тЪая╕П | Please enter the url or code and command file name you want to install \
",
			missingUrlOrCode: "\
  тЪая╕П |                \
 тЪая╕П | Please enter the url or code of the command file you want to install \
",
			missingFileNameInstall: "\
  тЪая╕П |          ( . )  \
 тЪая╕П | Please enter the file name to save the command (with .js extension) \
",
			invalidUrlOrCode: "\
  тЪая╕П |       \
 тЪая╕П | Unable to get command code \
",
			alreadExist: "\
  тЪая╕П |     ,           ?  \
 React to this message to continue                                                    \
",
			installed: "\
  тЬЕ |    \"%1\" ,       %2  \
 тЬЕ | Installed event command \"%1\" successfully, the command file is saved at %2 \
",
			installedError: "\
  тЭМ |    \"%1\"     \
 %2: %3                                               \
",
			missingFile: "\
  тЪая╕П |  \"%1\"    \
 тЪая╕П | File \"%1\" not found \
",
			invalidFileName: "\
  тЪая╕П |     \
 тЪая╕П | Invalid file name \
",
			unloadedFile: "\
  тЬЕ |   \"%1\"  \
 тЬЕ | Unloaded command \"%1\" \
"
		}
	},
	filteruser: {
		description: "\
             \
 filter group members by number of messages or locked account \
",
		guide: "\
     {} [<  > | ]  \
    {pn} [<number of messages> | die] \
",
		text: {
			needAdmin: "\
  тЪая╕П |              \
 тЪая╕П | Please add the bot as a group admin to use this command \
",
			confirm: "\
  тЪая╕П |             %1 ?  \
 React to this message to confirm                                                   \
",
			kickByBlock: "\
  тЬЕ |   %1       \
 тЬЕ | Successfully deleted %1 members who are locked acc \
",
			kickByMsg: "\
  тЬЕ |   %1     %2   \
 тЬЕ | Successfully deleted %1 members with less than %2 messages \
",
			kickError: "\
  тЭМ |        %1 :  \
 %2                                                     \
",
			noBlock: "\
  тЬЕ |          \
 тЬЕ | There are no members who are locked acc \
",
			noMsg: "\
  тЬЕ |        %1   \
 тЬЕ | There are no members with less than %1 messages \
"
		}
	},
	getfbstate: {
		description: "\
      \
 Get current fbstate \
",
		guide: "\
  {}  \
 {pn} \
",
		text: {
			success: "\
     ,   '    \
 Sent fbstate to you, please check bot's private message \
"
		}
	},
	grouptag: {
		description: "\
       \
 Tag members by group \
",
		guide: "\
     {}  <> <@>:              \
    Example:                                                                          \
",
		text: {
			noGroupTagName: "\
        \
 Please enter group tag name \
",
			noMention: "\
   '          \
 You haven't tagged any member to add to group tag \
",
			addedSuccess: "\
   :  \
 %1             \
",
			addedSuccess2: "\
     \"%1\"  :  \
 %2                                 \
",
			existedInGroupTag: "\
  :  \
 %1       \
",
			notExistedInGroupTag: "\
  :  \
 %1       \
",
			noExistedGroupTag: "\
    \"%1\" '       \
 Group tag \"%1\" doesn't exist in your group chat \
",
			noExistedGroupTag2: "\
     '      \
 Your group chat hasn't added any group tag \
",
			noMentionDel: "\
          \"%1\"  \
 Please tag members to remove from group tag \"%1\" \
",
			deletedSuccess: "\
   :  \
 %1               \
",
			deletedSuccess2: "\
     \"%1\"  \
 Deleted group tag \"%1\" \
",
			tagged: "\
    \"%1\":  \
 %2              \
",
			noGroupTagName2: "\
            ,   \"|\"  \
 Please enter old group tag name and new group tag name, separated by \"|\" \
",
			renamedSuccess: "\
     \"%1\"  \"%2\"  \
 Renamed group tag \"%1\" to \"%2\" \
",
			infoGroupTag: "\
  ЁЯУС |  : \"%1\"   \
 ЁЯСе | Number of members: %2 \
"
		}
	},
	help: {
		description: "\
      \
 View command usage \
",
		guide: "\
  {} [ | < > | < >]  \
 {pn} [empty | <page number> | <command name>] \
",
		text: {
			help: "\
  тнУ  \
 %1                                            \
",
			help2: "\
  %1тнФ                           \
  ┬╗ Currently, the bot has %2 commands that can be used \
",
			commandNotFound: "\
   \"%1\"     \
 Command \"%1\" does not exist \
",
			getInfoCommand: "\
    тнУ  \
  %1                         \
",
			doNotHave: "\
      \
 Do not have \
",
			roleText0: "\
  0 ( )  \
 0 (All users) \
",
			roleText1: "\
  1 ( )  \
 1 (Group administrators) \
",
			roleText2: "\
  2 ( )  \
 2 (Admin bot) \
",
			roleText0setRole: "\
  0 ( ,  )  \
 0 (set role, all users) \
",
			roleText1setRole: "\
  1 ( ,  )  \
 1 (set role, group administrators) \
",
			pageNotFound: "\
   %1     \
 Page %1 does not exist \
"
		}
	},
	kick: {
		description: "\
         \
 Kick member out of chat box \
",
		guide: "\
  {} @:         \
 {pn} @tags: use to kick members who are tagged \
"
	},
	loadconfig: {
		description: "\
       \
 Reload config of bot \
"
	},
	moon: {
		description: "\
          (//)  \
 view moon image on the night you choose (dd/mm/yyyy) \
",
		guide: "\
    {} <//>         \
    {pn} <day/month/year> <caption> \
",
		text: {
			invalidDateFormat: "\
        //   \
 Please enter a valid date in DD/MM/YYYY format \
",
			error: "\
           %1  \
 An error occurred while getting the moon image of %1 \
",
			invalidDate: "\
  %1       \
 %1 is not a valid date \
",
			caption: "\
  -    %1  \
 - Moon image on %1 \
"
		}
	},
	notification: {
		description: "\
          \
 Send notification from admin to all box \
",
		guide: "\
  {} < с║п>  \
 {pn} <tin nhс║пn> \
",
		text: {
			missingMessage: "\
              \
 Please enter the message you want to send to all groups \
",
			notification: "\
          (     )  \
 Notification from admin bot to all chat groups (do not reply to this message) \
",
			sendingNotification: "\
         %1    \
 Start sending notification from admin bot to %1 chat groups \
",
			sentNotification: "\
  тЬЕ    %1    \
 тЬЕ Sent notification to %1 groups successfully \
",
			errorSendingNotification: "\
        %1 :  \
  %2                                           \
"
		}
	},
	prefix: {
		description: "\
   ─Сс╗Х с║е с╗З с╗з     с╗з с║б с║╖ с║г с╗З с╗С  (с╗Й  )  \
 Thay ─Сс╗Хi dс║еu lс╗Зnh cс╗зa bot trong box chat cс╗зa bс║бn hoс║╖c cс║г hс╗З thс╗Сng bot (chс╗Й admin bot) \
",
		guide: "\
     {} < >:         \
    Example:                                              \
",
		text: {
			reset: "\
        : %1  \
 Your prefix has been reset to default: %1 \
",
			onlyAdmin: "\
           \
 Only admin can change prefix of system bot \
",
			confirmGlobal: "\
               \
 Please react to this message to confirm change prefix of system bot \
",
			confirmThisThread: "\
                \
 Please react to this message to confirm change prefix in your box chat \
",
			successGlobal: "\
       : %1  \
 Changed prefix of system bot to: %1 \
",
			successThisThread: "\
        : %1  \
 Changed prefix in your box chat to: %1 \
",
			myPrefix: "\
  ЁЯМР  : %1     \
 ЁЯЫ╕ Your box chat prefix: %2 \
"
		}
	},
	rank: {
		description: "\
           .       \
 View your level or the level of the tagged person. You can tag many people \
"
	},
	rankup: {
		description: "\
   /     \
 Turn on/off level up notification \
",
		guide: "\
  {} [ | ]  \
 {pn} [on | off] \
",
		text: {
			syntaxError: "\
   ,   {}   {}   \
 Syntax error, only use {pn} on or {pn} off \
",
			turnedOn: "\
        \
 Turned on level up notification \
",
			turnedOff: "\
        \
 Turned off level up notification \
",
			notiMessage: "\
  ЁЯОЙЁЯОЙ     %1  \
 ЁЯОЙЁЯОЙ Congratulations on reaching level %1 \
"
		}
	},
	refresh: {
		description: "\
          \
 refresh information of group chat or user \
",
		guide: "\
     {} [ | ]:        \
    {pn} group <threadID>: refresh information of group chat by ID \
",
		text: {
			refreshMyThreadSuccess: "\
  тЬЕ |       !  \
 тЬЕ | Refresh information of your group chat successfully! \
",
			refreshThreadTargetSuccess: "\
  тЬЕ |      %1 !  \
 тЬЕ | Refresh information of group chat %1 successfully! \
"
		}
	},
	rules: {
		description: "\
  //// /      \
 Create/view/add/edit/change position/delete group rules of you \
",
		guide: "\
     {} [ | -] <  >:    .  \
    {pn}: view group rules.                            \
"
	},
	sendnoti: {
		description: "\
            \
 Create and send notification to groups that you manage \
",
		guide: "\
     {}  <>:        <>  \
    Example:                                                                       \
",
		text: {
			missingGroupName: "\
       \
 Please enter groupNoti name \
",
			groupNameExists: "\
      %1      ,      \
 Notification group with name %1 has been created by you before, please choose another name \
",
			createdGroup: "\
     :  \
 - Name: %1                               \
",
			missingGroupNameToAdd: "\
               \
 Please enter groupNoti name you want to add this group chat to \
",
			groupNameNotExists: "\
     /     : %1  \
 You have not created/manage any notification group with name: %1 \
",
			notAdmin: "\
           \
 You are not admin of this group chat \
",
			added: "\
        : %1  \
 Added current group chat to notification group: %1 \
",
			missingGroupNameToDelete: "\
                \
 Please enter groupNoti name you want to delete this group chat from list \
",
			notInGroup: "\
          %1  \
 Current group chat is not in notification group %1 \
",
			deleted: "\
        : %1  \
 Deleted current group chat from notification group: %1 \
",
			failed: "\
       %1  :   \
 %2                                              \
",
			missingGroupNameToRemove: "\
           \
 Please enter groupNoti name you want to remove \
",
			removed: "\
    : %1  \
 Removed notification group: %1 \
",
			missingGroupNameToSend: "\
            \
 Please enter groupNoti name you want to send message \
",
			groupIsEmpty: "\
    \"%1\"    \
 Notification group \"%1\" is empty \
",
			sending: "\
     %1    \
 Sending notification to %1 group chats \
",
			success: "\
     %1      \"%2\"   \
 Sent notification to %1 group chats in notification group \"%2\" successfully \
",
			notAdminOfGroup: "\
          \
 You are not admin of this group \
",
			missingGroupNameToView: "\
            \
 Please enter groupNoti name you want to view info \
",
			groupInfo: "\
  -  : %1  \
  - ID: %2        \
",
			groupInfoHasGroup: "\
  -   :   \
 %1                  \
",
			noGroup: "\
     /     \
 You have not created/manage any notification group \
"
		}
	},
	setalias: {
		description: "\
            \
 Add an alias for any command in your group \
",
		guide: "\
         /         \
    {pn} add <alias> <command>: add an alias for the command in your group \
"
	},
	setavt: {
		description: "\
      \
 Change bot avatar \
",
		text: {
			cannotGetImage: "\
  тЭМ |          \
 тЭМ | An error occurred while querying the image url \
",
			invalidImageFormat: "\
  тЭМ |     \
 тЭМ | Invalid image format \
",
			changedAvatar: "\
  тЬЕ |      \
 тЬЕ | Changed bot avatar successfully \
"
		}
	},
	setlang: {
		description: "\
              \
 Set default language of bot for current chat or all chats \
",
		guide: "\
     {} <   639-1          \
    Example:    {pn} en    {pn} vi    {pn} ja \
",
		text: {
			setLangForAll: "\
       : %1  \
 Set default language for all chats: %1 \
",
			setLangForCurrent: "\
       : %1  \
 Set default language for current chat: %1 \
",
			noPermission: "\
          \
 Only bot admin can use this command \
"
		}
	},
	setleave: {
		description: "\
   / /          \
 Edit content/turn on/off leave message when member leave your group chat \
",
		guide: {
			body: "\
     {} :      \
    {pn} off: Turn off leave message \
",
			attachment: {
				[`${process.cwd()}/scripts/cmds/assets/guide/setleave/setleave_en_1.png`]: "\
  ://../2/1.  \
 https://i.ibb.co/2FKJHJr/guide1.png \
"
			}
		},
		text: {
			missingContent: "\
      \
 Please enter content \
",
			edited: "\
         :  \
 %1                                             \
",
			reseted: "\
       \
 Reseted leave message content \
",
			noFile: "\
          \
 No leave message attachment file to reset \
",
			resetedFile: "\
         \
 Reseted leave message attachment file successfully \
",
			missingFile: "\
       //   \
 Please reply this message with image/video/audio file \
",
			addedFile: "\
   %1        \
 Added %1 attachment file to your leave message \
"
		}
	},
	setname: {
		description: "\
                \
 Change nickname of all members in chat or members tagged by a format \
",
		guide: {
			body: "\
     {} < >:              \
    {pn} @tags <nick name>: change nickname of members tagged \
",
			attachment: {
				[`${process.cwd()}/scripts/cmds/assets/guide/setname_1.png`]: "\
  ://../23/1.  \
 https://i.ibb.co/gFh23zb/guide1.png \
",
				[`${process.cwd()}/scripts/cmds/assets/guide/setname_2.png`]: "\
  ://..//2.  \
 https://i.ibb.co/BNWHKgj/guide2.png \
"
			}
		},
		text: {
			error: "\
     ,                \
 An error has occurred, try turning off the invite link feature in the group and try again later \
"
		}
	},
	setrole: {
		description: "\
      (   < 2)  \
 Edit role of command (commands with role < 2) \
",
		guide: "\
     {} <> < >:       \
    With:                                                   \
",
		text: {
			noEditedCommand: "\
  тЬЕ        \
 тЬЕ Your group has no edited command \
",
			editedCommand: "\
  тЪая╕П     :  \
 тЪая╕П Your group has edited commands: \
",
			noPermission: "\
  тЭЧ        \
 тЭЧ Only admin can use this command \
",
			commandNotFound: "\
   \"%1\"    \
 Command \"%1\" not found \
",
			noChangeRole: "\
  тЭЧ '     \"%1\"  \
 тЭЧ Can't change role of command \"%1\" \
",
			resetRole: "\
      \"%1\"    \
 Reset role of command \"%1\" to default \
",
			changedRole: "\
      \"%1\"  %2  \
 Changed role of command \"%1\" to %2 \
"
		}
	},
	setwelcome: {
		description: "\
              \
 Edit welcome message content when new member join your group chat \
",
		guide: {
			body: "\
     {}  [<> | ]:       ,   :  \
   + {userName}: new member name                                                      \
",
			attachment: {
				[`${process.cwd()}/scripts/cmds/assets/guide/setwelcome/setwelcome_en_1.png`]: "\
  ://../0/--1.  \
 https://i.ibb.co/vsCz0ks/setwelcome-en-1.png \
"
			}
		},
		text: {
			missingContent: "\
        \
 Please enter welcome message content \
",
			edited: "\
         : %1  \
 Edited welcome message content of your group to: %1 \
",
			reseted: "\
       \
 Reseted welcome message content \
",
			noFile: "\
        \
 No file attachments to delete \
",
			resetedFile: "\
       \
 Reseted file attachments successfully \
",
			missingFile: "\
       //   \
 Please reply this message with image/video/audio file \
",
			addedFile: "\
   %1         \
 Added %1 file attachments to your group welcome message \
"
		}
	},
	shortcut: {
		description: "\
            \
 Add a shortcut for your message in group chat \
",
		text: {
			missingContent: 'Please enter the message content',
			shortcutExists: 'Shortcut "%1" already exists, react to this message to replace the content of the shortcut',
			shortcutExistsByOther: 'Shortcut %1 has been added by other member, please try another keyword',
			added: 'Added shortcut %1 => %2',
			addedAttachment: ' with %1 attachment(s)',
			missingKey: 'Please enter the keyword of the shortcut you want to delete',
			notFound: 'No shortcut found for keyword %1 in your group chat',
			onlyAdmin: 'Only administrators can delete other people\'s shortcuts',
			deleted: 'Deleted shortcut %1',
			empty: 'Your group chat has not added any shortcuts',
			message: 'Message',
			attachment: 'Attachment',
			list: 'Your shortcuts list',
			onlyAdminRemoveAll: 'Only administrators can remove all shortcuts in the group chat',
			confirmRemoveAll: 'Are you sure you want to remove all shortcuts in this group chat? (react to this message to confirm)',
			removedAll: 'Removed all shortcuts in your group chat'
		}
	},
	simsimi: {
		description: "\
      \
 Chat with simsimi \
",
		guide: "\
     {} [ | ]:  /   \
    {pn} <word>: chat with simsimi       \
",
		text: {
			turnedOn: "\
     !  \
 Turned on simsimi successfully! \
",
			turnedOff: "\
     !  \
 Turned off simsimi successfully! \
",
			chatting: "\
    ...  \
 Chatting with simsimi... \
",
			error: "\
    ,      \
 Simsimi is busy, please try again later \
"
		}
	},
	sorthelp: {
		description: "\
      \
 Sort help list \
",
		guide: "\
  {} [ | ]  \
 {pn} [name | category] \
",
		text: {
			savedName: "\
         \
 Saved sort help list by name \
",
			savedCategory: "\
         \
 Saved sort help list by category \
"
		}
	},
	thread: {
		description: "\
         \
 Manage group chat in bot system \
",
		guide: "\
     {} [ | - |  | -] <  >:          \
    {pn} [find | -f | search | -s] [-j | joined] <name to find>: search group chat in bot data that bot still joined by name \
",
		text: {
			noPermission: "\
   '        \
 You don't have permission to use this feature \
",
			found: "\
  ЁЯФО  %1     \"%3\"   :  \
 %3                                                         \
",
			notFound: "\
  тЭМ      : \"%1\"     \
 тЭМ No group found matching the keyword: \"%1\" in bot data \
",
			hasBanned: "\
     [%1 | %2]    :  \
 ┬╗ Reason: %3                                   \
",
			banned: "\
      [%1 | %2]  .  \
 ┬╗ Reason: %3                             \
",
			notBanned: "\
     [%1 | %2]       \
 Group with id [%1 | %2] is not banned using bot \
",
			unbanned: "\
      [%1 | %2]    \
 Unbanned group with tid [%1 | %2] using bot \
",
			missingReason: "\
        \
 Ban reason cannot be empty \
",
			info: "\
  ┬╗  : %1  \
 ┬╗ Name: %2   \
"
		}
	},
	tid: {
		description: "\
         \
 View threadID of your group chat \
",
		guide: "\
  {}  \
 {pn} \
"
	},
	tik: {
		description: "\
   / (),      \
 Download video/slide (image), audio from tiktok link \
",
		guide: "\
     {} [|-|] <>:    / ()   .  \
    {pn} [audio|-a|a] <url>: use to download audio from tiktok link                \
",
		text: {
			invalidUrl: "\
         \
 Please enter a valid tiktok url \
",
			downloadingVideo: "\
   : %1...  \
 Downloading video: %1... \
",
			downloadedSlide: "\
   : %1  \
 %2                   \
",
			downloadedVideo: "\
   : %1  \
 Download Url: %2     \
",
			downloadingAudio: "\
   : %1...  \
 Downloading audio: %1... \
",
			downloadedAudio: "\
   : %1  \
 Downloaded audio: %1 \
"
		}
	},
	trigger: {
		description: "\
     \
 Trigger image \
",
		guide: "\
  {} [@ | ]  \
 {pn} [@tag | empty] \
"
	},
	uid: {
		description: "\
         \
 View facebook user id of user \
",
		guide: "\
     {}:               \
    {pn} @tag: view facebook user id of tagged people \
",
		text: {
			syntaxError: "\
                     \
 Please tag the person you want to view uid or leave it blank to view your own uid \
"
		}
	},
	unsend: {
		description: "\
   '   \
 Unsend bot's message \
",
		guide: "\
             {}  \
 reply the message you want to unsend and call the command {pn} \
",
		text: {
			syntaxError: "\
           \
 Please reply the message you want to unsend \
"
		}
	},
	user: {
		description: "\
        \
 Manage users in bot system \
",
		guide: "\
     {} [ | - |  | -] <  >:          \
    {pn} [ban | -b] [<uid> | @tag | reply message] <reason>: to ban user with id <uid> or tagged user or sender of message replied using bot \
",
		text: {
			noUserFound: "\
  тЭМ       : \"%1\"     \
 тЭМ No user found with name matching keyword: \"%1\" in bot data \
",
			userFound: "\
  ЁЯФО  %1      \"%2\"   :  \
 %3                                                              \
",
			uidRequired: "\
         ,          1     <> <>  \
 Uid of user to ban cannot be empty, please enter uid or tag or reply message of 1 user by user ban <uid> <reason> \
",
			reasonRequired: "\
        ,          1     <> <>  \
 Reason to ban user cannot be empty, please enter uid or tag or reply message of 1 user by user ban <uid> <reason> \
",
			userHasBanned: "\
     [%1 | %2]    :  \
 ┬╗ Reason: %3                                  \
",
			userBanned: "\
     [%1 | %2]   :  \
 ┬╗ Reason: %3                           \
",
			uidRequiredUnban: "\
           \
 Uid of user to unban cannot be empty \
",
			userNotBanned: "\
     [%1 | %2]     \
 User with id [%1 | %2] is not banned \
",
			userUnbanned: "\
     [%1 | %2]     \
 User with id [%1 | %2] has been unbanned \
"
		}
	},
	videofb: {
		description: "\
   /   ()  \
 Download video/story from facebook (public) \
",
		guide: "\
     {} < />: с║г  с╗л   \
    {pn} <url video/story>: tс║гi video tс╗л facebook \
",
		text: {
			missingUrl: "\
      / ()       \
 Please enter the facebook video/story (public) url you want to download \
",
			error: "\
          \
 An error occurred while downloading the video \
",
			downloading: "\
       \
 Downloading video for you \
",
			tooLarge: "\
  ,  '            83  \
 Sorry, we can't download the video for you because the size is larger than 83MB \
"
		}
	},
	warn: {
		description: "\
     ,    3 ,      \
 warn member in group, if they have 3 warns, they will be banned \
",
		guide: "\
     {} @ <>:       \
    {pn} list: view list of warned members \
",
		text: {
			list: "\
        :  \
 %1                                    \
",
			listBan: "\
         3      :  \
 %1                                                                    \
",
			listEmpty: "\
            \
 Your group has no members who have been warned \
",
			listBanEmpty: "\
            \
 Your group has no members banned from the box \
",
			invalidUid: "\
                \
 Please enter a valid uid of the person you want to view information \
",
			noData: "\
     \
 No data \
",
			noPermission: "\
  тЭМ            \
 тЭМ Only group administrators can unban members banned from the box \
",
			invalidUid2: "\
  тЪая╕П              \
 тЪая╕П Please enter a valid uid of the person you want to unban \
",
			notBanned: "\
  тЪая╕П     %1         \
 тЪая╕П The user with id %1 has not been banned from your box \
",
			unbanSuccess: "\
  тЬЕ    [%1 | %2],          \
 тЬЕ Successfully unbanned member [%1 | %2], currently this person can join your chat box \
",
			noPermission2: "\
  тЭМ             \
 тЭМ Only group administrators can remove warnings from members in the group \
",
			invalidUid3: "\
  тЪая╕П                \
 тЪая╕П Please enter a uid or tag the person you want to remove the warning \
",
			noData2: "\
  тЪая╕П     %1      \
 тЪая╕П The user with id %1 has no warning data \
",
			notEnoughWarn: "\
  тЭМ   %1   %2   \
 тЭМ The user %1 only has %2 warnings \
",
			unwarnSuccess: "\
  тЬЕ    %1    [%2 | %3]  \
 тЬЕ Successfully removed the %1 warning of member [%2 | %3] \
",
			noPermission3: "\
  тЭМ         \
 тЭМ Only group administrators can reset warning data \
",
			resetWarnSuccess: "\
  тЬЕ      \
 тЬЕ Successfully reset warning data \
",
			noPermission4: "\
  тЭМ           \
 тЭМ Only group administrators can warn members in the group \
",
			invalidUid4: "\
  тЪая╕П                  \
 тЪая╕П You need to tag or reply to the message of the person you want to warn \
",
			warnSuccess: "\
  тЪая╕П   %1  %2  \
 - Uid: %3                        \
",
			noPermission5: "\
  тЪая╕П          \
 тЪая╕П Bot needs administrator permissions to kick banned members \
",
			warnSuccess2: "\
  тЪая╕П   %1  %2  \
 - Uid: %3                        \
",
			hasBanned: "\
  тЪая╕П       3       :  \
 %1                                                                                   \
",
			failedKick: "\
  тЪая╕П        :  \
 %1                                                           \
"
		}
	},
	weather: {
		description: "\
       5     \
 view the current and next 5 days weather forecast \
",
		guide: "\
  {} <>  \
 {pn} <location> \
",
		text: {
			syntaxError: "\
       \
 Please enter a location \
",
			notFound: "\
    : %1  \
 Location not found: %1 \
",
			error: "\
     : %1  \
 An error has occurred: %1 \
",
			today: "\
  ' :  \
 %1               \
"
		}
	},
	ytb: {
		description: "\
   ,         \
 Download video, audio or view video information on YouTube \
",
		guide: "\
     {} [|-] [< >|< >]:      .  \
    {pn} [audio|-a] [<video name>|<video link>]: use to download audio from youtube  \
",
		text: {
			error: "\
     : %1  \
 An error has occurred: %1 \
",
			noResult: "\
        %1  \
 No search results match the keyword %1 \
",
			choose: "\
  %1               \
 %1Reply to the message with the number to choose or any content to cancel \
",
			downloading: "\
    %1  \
 Downloading video %1 \
",
			noVideo: "\
  ,          83  \
 Sorry, no video was found with a size less than 83MB \
",
			downloadingAudio: "\
    %1  \
 Downloading audio %1 \
",
			noAudio: "\
  ,          26  \
 Sorry, no audio was found with a size less than 26MB \
",
			info: "\
  ЁЯТа : %1  \
 ЁЯПк Channel: %2 \
",
			listChapter: "\
  ЁЯУЦ  : %1  \
 ЁЯУЦ List chapter: %1 \
"
		}
	}
};
