// let currentlyOpenSubcategory = null;

// function showSubcategories(categoryId) {
//   document.querySelectorAll('.subcategory, .subsubcategory').forEach(subcategory => {
//     subcategory.style.display = 'none';
//   });
//   document.getElementById(categoryId).style.display = 'block';
//   currentlyOpenSubcategory = null;
// }

// function toggleSubSubcategory(subSubcategoryId) {
//   const subsubcategory = document.getElementById(subSubcategoryId);
//   if (!subsubcategory) {
//     console.warn(`No sub-subcategory found with ID ${subSubcategoryId}`);
//     return;
//   }

//   if (currentlyOpenSubcategory === subSubcategoryId) {
//     subsubcategory.style.display = 'none';
//     currentlyOpenSubcategory = null;
//   } else {
//     document.querySelectorAll('.subsubcategory').forEach(sub => {
//       sub.style.display = 'none';
//     });
//     subsubcategory.style.display = 'block';
//     currentlyOpenSubcategory = subSubcategoryId;
//   }
// }

// function showContent(contentId) {
//   const contents = {
//     accountVerification: `
//     <a href="URL1">Account Verification - KYC - Frequently Asked Questions</a><br>
//     <a href="URL1">Account Verification - KYC - Summary</a><br>
//     <a href="URL1">How can I upload my documents [Desktop]?</a><br>
//     <a href="URL1">How can I upload my documents through the app?</a><br>
//     <a href="URL1">How do I know if the verification documents I am sending will be acceptable?</a><br>
//     <a href="URL1">How do I update and correct Personal Information?</a><br>
//     <a href="URL1">How long does it usually take until my account is KYC verified?</a><br>
//     <a href="URL1">How to verify my GGPoker account?</a><br>
//     <a href="URL1">I feel unsure about submitting verification documents</a><br>
//     <a href="URL1">I have submitted proof of address but am not yet verified</a><br>
//     <a href="URL1">I moved to another country. How do I update the flag in my account?</a><br>
//     <a href="URL1">My verification documents won't upload inside the app</a><br>
//     <a href="URL1">What documents are acceptable as Proof of Address?</a><br>
//     <a href="URL1">What documents are required for KYC?</a><br>
//     <a href="URL1">What is the best way to send verification documents?</a><br>
//     <a href="URL1">What is the reason why my documents were rejected?</a><br>
//     <a href="URL1">Withdrawing without verifying</a><br>
//     `,

//     passwordQueries: `
//     <a href="URL1">Forgotten password email is not arriving, why?</a><br>
//     <a href="URL1">I forgot my login details. Can I open a new account?</a><br>
//     <a href="URL1">I just created a new account but GGPoker's app is saying my password is incorrect, why is this?</a><br>
//     <a href="URL1">Login Password</a><br>
//     <a href="URL1">What happens if I forgot my login password?</a><br>
//     `,
//     updateDetails: `
//     <a href="URL1">How do I update and correct Personal Information?</a><br>
//     <a href="URL1">I have changed my address but I cannot update it?</a><br>
//     <a href="URL1">Mobile number - Updating my mobile number</a><br>
//     `,
//     accountCreation: `
//     <a href="URL1">A third party is telling me I can create a second account to sign up with them, is this possible?</a><br>
//     <a href="URL1">Can I Close My Account and Open a New One?</a><br>
//     <a href="URL1">Can I travel to play at GGPoker - Summary & Frequently Asked Questions</a><br>
//     <a href="URL1">Can you register for an account from inside the mobile app?</a><br>
//     <a href="URL1">Deleting Your Account Via The iOS App</a><br>
//     <a href="URL1">How to close your account</a><br>
//     <a href="URL1">I am trying to sign up a new account but I am not receiving the email verification code?</a><br>
//     <a href="URL1">On GGPoker’s registration form, my name/email is not accepted</a><br>
//     <a href="URL1">Permanently relocating to another country</a><br>
//     <a href="URL1">Validation email never arrived</a><br>
//     `,

//     marketingOptInOut: `
//     <a href="URL1">How to stop receiving marketing emails</a><br>
//     `,
//     countryAvailability: `
//     <a href="URL1">I cannot see my country on the list when signing up - why?</a><br>
//     <a href="URL1">I will be out of the country for a while. Can I still play poker from another region?</a><br>
//     <a href="URL1">I'm getting an error saying I'm in Ontario when I'm not</a><br>
//     <a href="URL1">Lebanon - Removal of Service for GGPoker & Transition to Poker Arabia</a><br>
//     <a href="URL1">Lithuania - Removal of Service for GGPoker & Transition to Olybet</a><br>
//     <pPermanently relocating to another country</a><br>
//     <a href="URL1">Region Restriction prompt upon registration/account login</a><br>
//     <a href="URL1">Where can I view a list of accepted regions/countries?</a><br>      
//     `,
//     dataRequest: `
//     <a href="URL1">Can I see a copy of the information you have about me?</a><br>
//     <a href="URL1">How will you use my personal information?</a><br>
//     <a href="URL1">Will my personal information be transferred to locations outside where I am playing from?</a><br>
//     <a href="URL1">Will your site ever update the privacy policy? Will I have to accept any amendments to the policy to continue playing?</a><br>
//     `,
//     otherAccountQueries: `
//     <a href="URL1">Can GGPoker replace my giveaway ticket?</a><br>
//     <a href="URL1">Can I change my affiliate?</a><br>
//     <a href="URL1">Can I limit or modify the consent I give your website to use my personal information?</a><br>
//     <a href="URL1">Can I tag my account after registration?</a><br>
//     <a href="URL1">Can my partner have an account on GGPoker as well as me?</a><br>
//     <a href="URL1">Can my sibling have an account on GGPoker if I do?</a><br>
//     <a href="URL1">Difference between Reddit and Emailing customer support</a><br>
//     <a href="URL1">Does GGPoker have a Live Chat service?</a><br>
//     <a href="URL1">GGPass - Frequently Asked Questions</a><br>
//     <a href="URL1">GGPoker are not responding to my emails</a><br>
//     <a href="URL1">GGPoker experienced site-wide downtime and informed me a refund was forthcoming. When can I expect this?</a><br>
//     <a href="URL1">GGStore - Can I buy GG merchandise anywhere?</a><br>
//     <a href="URL1">GGStore - Can I buy items from the GGStore with the funds from my GGPoker account?</a><br>
//     <a href="URL1">How Can I verify My Email address</a><br>
//     <a href="URL1">How do I contact another site on the GGPoker Network</a><br>
//     <a href="URL1">How long do GGPoker take to answer emails?</a><br>
//     <a href="URL1">How will you use my personal information?</a><br>
//     <a href="URL1">I am not getting your emails delivered to my inbox, is something wrong?</a><br>
//     <a href="URL1">I can save my login name. Where can I save or have the client remember my Password?</a><br>
//     <a href="URL1">I cannot access the email I used to register. How can I access my account?</a><br>
//     <a href="URL1">I cannot log in using my username and details</a><br>
//     <a href="URL1">I forgot my username, can you help?</a><br>
//     <a href="URL1">I no longer have access to my registered email address - how can I resolve this?</a><br>
//     <a href="URL1">I used a sign-up code but didn’t receive rewards/I need someone to confirm my affiliation</a><br>
//     <a href="URL1">I'm getting an error saying I'm in Ontario when I'm not</a><br>
//     <a href="URL1">Login problems/password or player detail error</a><br>
//     <a href="URL1">My balance did not update after leaving a table.</a><br>
//     <a href="URL1">Nickname - Frequently Asked Questions</a><br>
//     <a href="URL1">Nicknames - Are some tournaments 'real name' instead of nickname?</a><br>
//     <a href="URL1">Nicknames - Are there any scenarios that an exception would be made to the 'no change' nickname rule?</a><br>
//     <a href="URL1">Nicknames - Can I request to change my nickname?</a><br>
//     <a href="URL1">Nicknames - Can I use my real name as my nickname?</a><br>
//     <a href="URL1">Nicknames - Could two players have the same nickname?</a><br>
//     <a href="URL1">Nicknames - Frequently Asked Questions</a><br>
//     <a href="URL1">Nicknames - Frequently Asked Questions</a><br>
//     <a href="URL1">Nicknames - I am known by a certain name online, can I change my nickname to match this name?</a><br>
//     <a href="URL1">Nicknames - I have been contacted by GGPoker and said that I must change my nickname to my real name, is this a legit request?</a><br>
//     <a href="URL1">Nicknames - I've been told by GGPoker I need to change my nickname what do I do now?</a><br>
//     <a href="URL1">Nicknames - Is there anything I cannot use as a Nickname?</a><br>
//     <a href="URL1">Nicknames - Someone else has already registered the nickname I want, is there any way I can get it?</a><br>
//     <a href="URL1">Nicknames - There is a nickname I believe is offensive or unacceptable, how do I report this?</a><br>
//     <a href="URL1">Nicknames - What are Nicknames / Screen Names?</a><br>
//     <a href="URL1">Nicknames - What counts as 'offensive' or 'Unacceptable' in terms of Nicknames?</a><br>
//     <a href="URL1">Nicknames - When do I choose my Nickname?</a><br>
//     <a href="URL1">Nicknames - Why are some nicknames coloured?</a><br>
//     <a href="URL1">Nicknames - ​Can I use non-roman characters in a Nickname?</a><br>
//     <a href="URL1">Receiving affiliate promotion rewards</a><br>
//     <a href="URL1">Removal of Website Login</a><br>
//     <a href="URL1">Security prompt upon login</a><br>
//     <a href="URL1">What do I do if I cannot remember my username?</a><br>
//     <a href="URL1">What is an Inactive or Dormant Account?</a><br>
//     <a href="URL1">Where can I get assistance for ClubGG questions?</a><br>
//     <a href="URL1">Where can I view a full list of site terms and rules?</a><br>
//     <a href="URL1">Why am I being asked to verify my mobile number again?</a><br>
//     <a href="URL1">Why can I no longer login via the website?</a><br>

//     `,
//     securityFeatures: `
//     <a href="URL1">Account Security - Frequently Asked Questions</a><br>
//     <a href="URL1">Account Security - Summary</a><br>
//     <a href="URL1">Additional security options</a><br>
//     <a href="URL1">Fund Password</a><br>
//     <a href="URL1">How can I set up 2FA?</a><br>
//     <a href="URL1">How to use Google Authenticator</a><br>
//     <a href="URL1">I have 2FA on my account but I can login without it. Why?</a><br>
//     <a href="URL1">I have received an error message informing me that I am logged in from another device?</a><br>
//     <a href="URL1">I'm getting a pop up that says RESEND LIMITED. What does this mean?</a><br>
//     <a href="URL1">What 2FA options are available for my account?</a><br>
//     <a href="URL1">What account security does GGPoker offer?</a><br>
//     <a href="URL1">What are my options for 2FA?</a><br>
//     <a href="URL1">What happens if my 2FA is set to High?</a><br>
//     <a href="URL1">What happens if my 2FA is set to Low?</a><br>
//     <a href="URL1">What happens if my 2FA is set to Medium?</a><br>
//     `,
//     otherAccountSecurityQueries: `
//     <a href="URL1">Are external links on the website considered endorsements from your company?</a><br>
//     <a href="URL1">Biometric Authentication</a><br>
//     <a href="URL1">Can I copy and paste authentication codes instead of manual input?</a><br>
//     <a href="URL1">Failed multiple verification attempts</a><br>
//     <a href="URL1">Fund Password - Forgotten Fund Password</a><br>
//     <a href="URL1">How can I report to security a matter requiring investigation?</a><br>
//     <a href="URL1">How do I keep my account safe?</a><br>
//     <a href="URL1">I am not getting my 2FA emails at all, what could be wrong?</a><br>
//     <a href="URL1">I am not receiving my code by email?</a><br>
//     <a href="URL1">I am not receiving the code by text, why is this?</a><br>
//     <a href="URL1">I have received an email regarding account verification - but my account is verified?</a><br>
//     <a href="URL1">Is my money safe on your site?</a><br>
//     <a href="URL1">Is there a reason why GGPoker won't answer my account-related question if I send them an email from an email address that is different from the one that I registered with?</a><br>
//     <a href="URL1">My 2FA emails are ending up in spam, how do I fix this?</a><br>
//     <a href="URL1">My account is blocked. A prompt tells me a security investigation is ongoing. What can I do?</a><br>
//     <a href="URL1">Turning off login notification settings</a><br>
//     <a href="URL1">Validation email never arrived</a><br>
//     `,
//     unwantedAccess: `
//     <a href="URL1">It is too late, I already clicked a link in a phishing scam/false email. What can I do?</a><br>
//     <a href="URL1">Potential hack/account violation</a><br>
//     `,
//     limitsIncrease: `
//     <a href="URL1">Can I set a buy-in limit for my account?</a><br>
//     <a href="URL1">Deposit Limits</a><br>
//     <a href="URL1">Deposit Limits - I've set a deposit limit and I want to play - can this be fast-tracked?</a><br>
//     <a href="URL1">Even after my limit has been raised I'm unable to deposit, why?</a><br>
//     <a href="URL1">Game Limits</a><br>
//     <a href="URL1">How can I set deposit limits within the app?</a><br>
//     <a href="URL1">Loss Limits - I've requested an increase to this limit - can this request be expedited?</a><br>
//     <a href="URL1">Loss limits - can they be increased?</a><br>
//     <a href="URL1">My account has the maximum verified deposit limits - can these be increased further?</a><br>
//     <a href="URL1">Total Bet Amount Limits - I've requested to increase this limit. Can it be expedited?</a><br>
//     <a href="URL1">Where can I set deposit limits?</a><br>
//     `,
//     limitsDecrease: `
//     <a href="URL1">Can I set a buy-in limit for my account?</a><br>
//     <a href="URL1">Deposit Limits</a><br>
//     <a href="URL1">Game Limits</a><br>
//     <a href="URL1">Total Bet Amount Limit - I'd like to decrease this limit</a><br>
//     <a href="URL1">Where can I set deposit limits?</a><br>
//     `,
//     timeOut: `
//     <a href="URL1">How to Self Exclude your account</a><br>
//     <a href="URL1">How to close your account</a><br>
//     <a href="URL1">How to request for Timeout</a><br>
//     <a href="URL1">I'm beginning to feel negatively affected by gambling</a><br>
//     <a href="URL1">Self Exclusion</a><br>
//     <a href="URL1">Self Exclusion - Seeking exclusion/account closure</a><br>
//     <a href="URL1">What type of exclusions are available at GGPoker?</a><br>
//     `,
//     permanentExclusion: `
//     <a href="URL1">Can I prematurely conclude my exclusion?</a><br>
//     <a href="URL1">How to Self Exclude your account</a><br>
//     <a href="URL1">How to close your account</a><br>
//     <a href="URL1">I'm beginning to feel negatively affected by gambling</a><br>
//     <a href="URL1">Self Exclusion</a><br>
//     <a href="URL1">Self Exclusion - Seeking exclusion/account closure</a><br>
//     <a href="URL1">What type of exclusions are available at GGPoker?</a><br>
//     `,
//     otherResponsibleGamingQueries: `
//     <a href="URL1">Can I exclude myself from certain features of the application such as casino games?</a><br>
//     <a href="URL1">Can I prematurely conclude my exclusion?</a><br>
//     <a href="URL1">How can I access the Responsible Gaming Tab?</a><br>
//     <a href="URL1">How do GGPoker's deposit limits work?</a><br>
//     <a href="URL1">How to Self Exclude your account</a><br>
//     <a href="URL1">How to close your account</a><br>
//     <a href="URL1">How to request for Timeout</a><br>
//     <a href="URL1">I excluded myself from Casino games, but I can still see them in the client. Why?</a><br>
//     <a href="URL1">I have excluded from Poker/Casino/Live Casino and I wish to lift this restriction.</a><br>
//     <a href="URL1">I have received an email from ggcares@ggpoker.com - is this a verified GGPoker email address?</a><br>
//     <a href="URL1">I have received an email from ggcares@ggpoker.eu - is this a verified GGPoker email address?</a><br>
//     <a href="URL1">I'm beginning to feel negatively affected by gambling</a><br>
//     <a href="URL1">I've made a request to overturn a Game limit block, however, I have not received a follow-up email from the Safer Gambling team. Why is this?</a><br>
//     <a href="URL1">Loss Limit</a><br>
//     <a href="URL1">Loss Limit - I'd like to decrease this limit</a><br>
//     <a href="URL1">Loss Limits - What does loss limit mean?</a><br>
//     <a href="URL1">Monthly Login Frequency</a><br>
//     <a href="URL1">Monthly Login Frequency - Can this limit be decreased?</a><br>
//     <a href="URL1">Monthly Login Frequency - I've requested an increase to this limit - can it be expedited?</a><br>
//     <a href="URL1">Monthly Login Frequency - can this be increased?</a><br>
//     <a href="URL1">Re-Login Time Limit</a><br>
//     <a href="URL1">Re-Login Time Limit - Can this be decreased?</a><br>
//     <a href="URL1">Re-Login Time Limit - Can this be increased?</a><br>
//     <a href="URL1">Reality Check Notification</a><br>
//     <a href="URL1">Responsible Gaming - Total Bet Amount Limits - Can this limit be increased?</a><br>
//     <a href="URL1">Self Exclusion</a><br>
//     <a href="URL1">Self Exclusion - Seeking exclusion/account closure</a><br>
//     <a href="URL1">Single Bet Amount Limit</a><br>
//     <a href="URL1">Single Bet Amount Limit - Can this be increased?</a><br>
//     <a href="URL1">Single Bet Amount Limit - Can this limit be decreased?</a><br>
//     <a href="URL1">Single Bet Amount Limit - I've requested to increase this limit. Can it be expedited?</a><br>
//     <a href="URL1">Total Bet Amount - What does Total Bet Amount Limit do?</a><br>
//     <a href="URL1">Total Bet Amount Limit</a><br>
//     <a href="URL1">What Responsible Gaming Options does GGPoker provide?</a><br>
//     <a href="URL1">What is an affordability check?</a><br>
//     <a href="URL1">What type of exclusions are available at GGPoker?</a><br>
//     `,

//     allInOrFold: `
//     <a href="URL1">All-in or Fold (Cash Games) - Buy-in limits</a><br>
//     <a href="URL1">All-in or Fold (Cash Games) - Details and Limitations</a><br>
//     <a href="URL1">All-in or Fold (Cash Games) - Download Hand Histories</a><br>
//     <a href="URL1">All-in or Fold (Cash Games) - Game History</a><br>
//     <a href="URL1">All-in or Fold (Cash Games) - Rake & Fees</a><br>
//     <a href="URL1">All-in or Fold (Cash Games) - Summary</a><br>
//     <a href="URL1">All-in or Fold (Cash Games) - Table Information</a><br>
//     <a href="URL1">All-in or Fold (Cash Games) - Time Bank settings</a><br>
//     <a href="URL1">All-in or Fold (Cash Games) - Understanding All-In or Fold game rules</a><br>
//     <a href="URL1">All-in or Fold (Cash Games) - Understanding Blind Structure, Rake and Fees</a><br>
//     <a href="URL1">All-in or Fold (Sit & Go) - Are the Sit & Go's available to only Hold'em players?</a><br>
//     <a href="URL1">All-in or Fold (Sit & Go) - How does it work?</a><br>
//     <a href="URL1">All-in or Fold (Sit & Go) - How many chips do I start with?</a><br>
//     <a href="URL1">All-in or Fold (Sit & Go) - Is late registration available?</a><br>
//     <a href="URL1">All-in or Fold (Sit & Go) - Is my history shown in PokerCraft?</a><br>
//     <a href="URL1">All-in or Fold (Sit & Go) - Is re-entry available?</a><br>
//     <a href="URL1">All-in or Fold (Sit & Go) - Prize Structure</a><br>
//     <a href="URL1">All-in or Fold (Sit & Go) - Summary</a><br>
//     <a href="URL1">All-in or Fold (Sit & Go) - Time Bank settings for AoF Sit & Go</a><br>
//     <a href="URL1">All-in or Fold (Sit & Go) - Tutorial</a><br>
//     <a href="URL1">All-in or Fold (Sit & Go) - What buy-in levels are available?</a><br>
//     <a href="URL1">All-in or Fold (Sit & Go) - What is All In Or Fold Sit & Go?</a><br>
//     <a href="URL1">All-in or Fold Cash - Overview & Key Details</a><br>
//     <a href="URL1">All-in or Fold Sit & Go - Overview & Key Details</a><br>
//     <a href="URL1">Cash Games - What is a Cash Game?</a><br>
//     <a href="URL1">Understanding Move Table</a><br>
//     <a href="URL1">Understanding Remove Chips feature</a><br>
//     <a href="URL1">What is a raked hand?</a><br>
//     <a href="URL1">What is the exact sit-out time I have at the table?</a><br>
//     `,

//     spinGold: `
// <a href="URL2">Spin & Gold - Daily Challenge - How can I participate in the Spin & Gold Challenge?</a><br>
// <a href="URL2">Spin & Gold - Daily Challenge - Are there any additional fees to participate in the Spin & Gold Challenge?</a><br>
// <a href="URL2">Spin & Gold - Daily Challenge - Can I check my Spin & Gold challenge history in PokerCraft?</a><br>
// <a href="URL2">Spin & Gold - Daily Challenge - Can I combine the Spin & Gold Challenge with other promotions?</a><br>
// <a href="URL2">Spin & Gold - Daily Challenge - Can I participate in the Spin & Gold Challenge on mobile?</a><br>
// <a href="URL2">Spin & Gold - Daily Challenge - How can I contact support if I have questions about the Spin & Gold Challenge?</a><br>
// <a href="URL2">Spin & Gold - Daily Challenge - How do I earn points for the Spin & Gold Challenge?</a><br>
// <a href="URL2">Spin & Gold - Daily Challenge - I have started a Spin & Gold Challenge but I will not complete it. Can I receive pro-rata rewards for what I have cleared?</a><br>
// <a href="URL2">Spin & Gold - Daily Challenge - I'm trying to start a Spin & Gold Challenge but the system is not allowing it. Why is this?</a><br>
// <a href="URL2">Spin & Gold - Daily Challenge - My Spin & Gold Challenge has been interrupted by maintenance or unscheduled downtime. Am I entitled to a refund/reimbursement?</a><br>
// <a href="URL2">Spin & Gold - Daily Challenge - What are my options for challenge length?</a><br>
// <a href="URL2">Spin & Gold - Daily Challenge - What is the Spin & Gold Challenge?</a><br>
// <a href="URL2">Spin & Gold - Daily Challenge - What rewards can I win in the Spin & Gold Challenge?</a><br>
// <a href="URL2">Spin & Gold - Daily Challenge - Where can I keep track of my current challenge?</a><br>
// <a href="URL2">Spin & Gold - Daily Challenge - Which challenges are available?</a><br>
// <a href="URL2">Spin & Gold - ELO - A player with a low rating is playing well. Is this legit?</a><br>
// <a href="URL2">Spin & Gold - ELO - Are there rewards for getting a higher rating?</a><br>
// <a href="URL2">Spin & Gold - ELO - Can I hide my ranking from other players?</a><br>
// <a href="URL2">Spin & Gold - ELO - Can I look up other players' ratings?</a><br>
// <a href="URL2">Spin & Gold - ELO - Can I opt out of the rankings?</a><br>
// <a href="URL2">Spin & Gold - ELO - Can I work out what rating points are available before a game starts?</a><br>
// <a href="URL2">Spin & Gold - ELO - Do ratings stay if I do not play for a while?</a><br>
// <a href="URL2">Spin & Gold - ELO - How accurate are ratings going to be?</a><br>
// <a href="URL2">Spin & Gold - ELO - How does the ranking system work?</a><br>
// <a href="URL2">Spin & Gold - ELO - I do not understand why I got so few points for winning a game. Why is this?</a><br>
// <a href="URL2">Spin & Gold - ELO - Is there a maximum ranking I can achieve?</a><br>
// <a href="URL2">Spin & Gold - ELO - What are ELO ratings?</a><br>
// <a href="URL2">Spin & Gold - ELO - What is the start date of the Spin & Gold ranking?</a><br>
// <a href="URL2">Spin & Gold - ELO - What rating do players start on?</a><br>
// <a href="URL2">Spin & Gold - ELO - Will my rating affect who I get seated with?</a><br>
// <a href="URL2">Spin & Gold - Go for Gold - Frequently Asked Questions</a><br>
// <a href="URL2">Spin & Gold - I cannot register to a Spin & Gold due to too many registrations, why is this?</a><br>
// <a href="URL2">Spin & Gold - I tried to unregister from a Spin & Gold but I was still charged for a buy-in. Why is this?</a><br>
// <a href="URL2">Spin & Gold - Insurance - Can I buy Spin & Gold Insurance on the mobile client?</a><br>
// <a href="URL2">Spin & Gold - Insurance - Can I buy Spin & Gold Insurance with T$?</a><br>
// <a href="URL2">Spin & Gold - Insurance - Can I buy Spin & Gold insurance in 3-Max games?</a><br>
// <a href="URL2">Spin & Gold - Insurance - Can I buy Spin & Gold insurance in 6-Max games?</a><br>
// <a href="URL2">Spin & Gold - Insurance - Can I check my Spin & Gold Insurance history on PokerCraft?</a><br>
// <a href="URL2">Spin & Gold - Insurance - Can I disable the option to buy Spin & Gold Insurance in the settings?</a><br>
// <a href="URL2">Spin & Gold - Insurance - How and when are Spin & Gold insurance payments made?</a><br>
// <a href="URL2">Spin & Gold - Insurance - How does Spin & Gold insurance work?</a><br>
// <a href="URL2">Spin & Gold - Insurance - How much does Spin & Gold insurance cost?</a><br>
// <a href="URL2">Spin & Gold - Insurance - I have a Spin & Gold ticket - can I use it to buy insurance?</a><br>
// <a href="URL2">Spin & Gold - Insurance - I have registered a Spin & Gold and insured it and the game did not progress beyond the wheel. Am I eligible for a refund of the insurance purchased?</a><br>
// <a href="URL2">Spin & Gold - Insurance - I've bought Spin & Gold Insurance - but I did not receive the money. Why is this?</a><br>
// <a href="URL2">Spin & Gold - Insurance - Where can I check my Spin & Gold Insurance history?</a><br>
// <a href="URL2">Spin & Gold - LIVE - Are games ever shown 'Cards-up'?</a><br>
// <a href="URL2">Spin & Gold - LIVE - Can I opt out of Spin & Gold Observer Mode?</a><br>
// <a href="URL2">Spin & Gold - LIVE - Can observers chat during a Spin & Gold game?</a><br>
// <a href="URL2">Spin & Gold - LIVE - Can replays be watched or only live games?</a><br>
// <a href="URL2">Spin & Gold - LIVE - How do I observe live Spin & Gold games?</a><br>
// <a href="URL2">Spin & Gold - LIVE - I'm playing a Spin & Gold and it is being observed by others. Why is this?</a><br>
// <a href="URL2">Spin & Gold - LIVE - Under which conditions can a Spin & Gold game be observed?</a><br>
// <a href="URL2">Spin & Gold - LIVE - What is Spin & Gold Observer Mode?</a><br>
// <a href="URL2">Spin & Gold - Other than insurance, are there any other side games available?</a><br>
// <a href="URL2">Spin & Gold - Daily Challenge - Frequently Asked Questions</a><br>
// <a href="URL2">Spin & Gold - Daily Challenge - Summary</a><br>
// <a href="URL2">Spin & Gold - Disconnection Extra Time (DET)</a><br>
// <a href="URL2">Spin & Gold - Do I have a time bank in this game?</a><br>
// <a href="URL2">Spin & Gold - ELO - Frequently Asked Questions</a><br>
// <a href="URL2">Spin & Gold - ELO - Summary</a><br>
// <a href="URL2">Spin & Gold - Game Summary</a><br>
// <a href="URL2">Spin & Gold - How much time do players have to act?</a><br>
// <a href="URL2">Spin & Gold - Insurance - Frequently Asked Questions</a><br>
// <a href="URL2">Spin & Gold - Insurance - Summary</a><br>
// <a href="URL2">Spin & Gold - LIVE - Frequently Asked Questions</a><br>
// <a href="URL2">Spin & Gold - Overview & Key Details</a><br>
// <a href="URL2">Spin & Gold - Rake/Table fees</a><br>

// `,

// battleRoyale: `
// <a href="URL3">Battle Royale - Mystery Battle Royale - Frequently Asked Questions</a><br>
// <a href="URL3">Battle Royale - Mystery Battle Royale - Summary</a><br>
// <a href="URL3">Battle Royale - What is the exact sit-out time I have at the table?</a><br>
// `,

// flipGo: `
// <a href="URL4">Flip & Go - Flip Bonus - Frequently Asked Questions</a><br>
// <a href="URL4">Flip & Go - Flip Bonus - Summary</a><br>
// <a href="URL4">Flip & Go - Flip Stage - Frequently Asked Questions</a><br>
// <a href="URL4">Flip & Go - Flip Stage - Summary</a><br>
// <a href="URL4">Flip & Go - Frequently Asked Questions</a><br>
// <a href="URL4">Flip & Go - Go Stage - Frequently Asked Questions</a><br>
// <a href="URL4">Flip & Go - Go Stage - Summary</a><br>
// <a href="URL4">Flip & Go - How many chips do I start with in a Flip & Go?</a><br>
// <a href="URL4">Flip & Go - Is Flip & Go only available in Hold'em?</a><br>
// <a href="URL4">Flip & Go - Overview & Key Details</a><br>
// <a href="URL4">Flip & Go - Summary</a><br>
// <a href="URL4">Flip & Go - What are the available buy-ins in Flip & Go?</a><br>
// <a href="URL4">Flip & Go - What are the rake/table fees in Flip & Go?</a><br>
// <a href="URL4">Flip & Go - What is Flip & Go?</a><br>
// <a href="URL4">Flip & Go Millionaire - What happens if I win the Flip Stage and proceed to the Go Stage?</a><br>
// <a href="URL4">Flip & Go Millionaire - Can I sell action?</a><br>
// <a href="URL4">Flip & Go Millionaire - Frequently Asked Questions</a><br>
// <a href="URL4">Flip & Go Millionaire - How much does each stack cost in the Flip Stage?</a><br>
// <a href="URL4">Flip & Go Millionaire - I have already qualified for the Go Stage - can I play more Flip Stages?</a><br>
// <a href="URL4">Flip & Go Millionaire - Terms and Conditions</a><br>
// <a href="URL4">Flip & Go Millionaire - What are the maximum amount of stacks I can buy per Flip Stage?</a><br>
// <a href="URL4">Flip & Go Millionaire - What is Flip & Go Millionaire?</a><br>
// <a href="URL4">Flip & Go Millionaire - When do the Flip & Go Millionaire Flights begin?</a><br>
// <a href="URL4">Flip & Go Millionaire - When does the Flip & Go Millionaire event take place?</a><br>
// <a href="URL4">Flip & Go Millionaire - Will the Flip Bonus promotion also be present in the Flip & Go Millionaire Flip Stages?</a><br>
// <a href="URL4">Flip & Go Millionaire - Will there be satellites so I can buy-in cheaper?</a><br>
// <a href="URL4">Flip Bonus - How many starting stacks do I receive in the Flip Bonus?</a><br>
// <a href="URL4">Flip Bonus - What is the Flip Bonus?</a><br>
// <a href="URL4">Flip Bonus - When can the Flip Bonus be awarded?</a><br>
// <a href="URL4">Flip Bonus - Which starting hands are eligible for the Flip Bonus?</a><br>
// <a href="URL4">Flip Stage - Can I enter another Flip Stage even after I've won one?</a><br>
// <a href="URL4">Flip Stage - Can I register for all remaining Flip Stages at once?</a><br>
// <a href="URL4">Flip Stage - How many Flip Stages are there?</a><br>
// <a href="URL4">Flip Stage - How many chips will I receive at the start of the Flip Stage?</a><br>
// <a href="URL4">Flip Stage - How much will I be charged for each stack?</a><br>
// <a href="URL4">Flip Stage - I entered a Flip & Go and I was charged more than one entry. Why is this?</a><br>
// <a href="URL4">Flip Stage - I have won a Flip Stage. What happens next?</a><br>
// <a href="URL4">Flip Stage - My tournament did not have a Flip Stage. Why is this?</a><br>
// <a href="URL4">Flip Stage - What happens if I don't discard a card before the timer runs out?</a><br>
// <a href="URL4">Flip Stage - What is the Flip Stage?</a><br>
// <a href="URL4">Flip Stage - What is the maximum amount of stacks I can buy?</a><br>
// <a href="URL4">Flip Stage - What is the minimum amount of stacks I can buy?</a><br>
// <a href="URL4">Flip Stage - When do the Flip Stages run?</a><br>
// <a href="URL4">Flip Stage - Why are there two boards during the Flip Stage?</a><br>
// <a href="URL4">Go Stage - Am I in the money if I reach the Go Stage?</a><br>
// <a href="URL4">Go Stage - Can I directly buy into the Go Stage?</a><br>
// <a href="URL4">Go Stage - Can I make a deal in the Go Stage?</a><br>
// <a href="URL4">Go Stage - Is the Flip Bonus available?</a><br>
// <a href="URL4">Go Stage - My Go Stage did not start at the advertised time. Why is this?</a><br>
// <a href="URL4">Go Stage - What is the Go Stage?</a><br>
// <a href="URL4">Go Stage - When does the Go Stage begin?</a><br>
// <a href="URL4">Go Stage - Why has my stack been adjusted when I reached the Go Stage?</a><br>
// `,


// rushCash: `
//     <a href="URL1">Auto Fold in Rush & Cash - Frequently Asked Questions</a><br>
//     <a href="URL1">Auto Fold in Rush & Cash - Summary</a><br>
//     <a href="URL1">Cash Drops in Rush & Cash - Frequently Asked Questions</a><br>
//     <a href="URL1">Cash Drops in Rush & Cash - Summary</a><br>
//     <a href="URL1">Cash Games - Are hands raked pre-flop?</a><br>
//     <a href="URL1">Cash Games - Blind Group Waiting</a><br>
//     <a href="URL1">Cash Games - Understanding Run It Three Times</a><br>
//     <a href="URL1">Cash Games - What is a Cash Game?</a><br>
//     <a href="URL1">Fish Buffet - I'm playing Rush & Cash and my Fish Points are not increasing - why is this?</a><br>
//     <a href="URL1">Rush & Cash - Anti-Ratholing Measures</a><br>
//     <a href="URL1">Rush & Cash - Omaha Summary</a><br>
//     <a href="URL1">Rush & Cash - Overview & Key Details</a><br>
//     <a href="URL1">Rush & Cash Games - Summary</a><br>
//     <a href="URL1">Swipe up to Fold in Rush & Cash (Mobile)</a><br>
//     <a href="URL1">Understanding Deal Choice</a><br>
//     <a href="URL1">What is a raked hand?</a><br>
//     <a href="URL1">What is the exact sit-out time I have at the table?</a><br>
//     `,

//     holdEm: `
//     <a href="URL1">An Introduction to No Limit Texas Hold'em</a><br>
//     <a href="URL1">Cash Game - Leave Table Penalty</a><br>
//     <a href="URL1">Cash Games - Are hands raked pre-flop?</a><br>
//     <a href="URL1">Cash Games - Blind Group Waiting</a><br>
//     <a href="URL1">Cash Games - If I leave a table, can I enter the same table with the original amount that I had bought in with?</a><br>
//     <a href="URL1">Cash Games - Understanding Run It Three Times</a><br>
//     <a href="URL1">Cash Games - What is a Cash Game?</a><br>
//     <a href="URL1">Hold'em - Overview & Key Details</a><br>
//     <a href="URL1">Hold'em - Summary</a><br>
//     <a href="URL1">How does Disconnect Extra Time (DET) work?</a><br>
//     <a href="URL1">No Limit Hold'em Hand Rankings</a><br>
//     <a href="URL1">Time Bank settings for Hold'em cash games</a><br>
//     <a href="URL1">Understanding Deal Choice</a><br>
//     <a href="URL1">Understanding Move Table</a><br>
//     <a href="URL1">What is a raked hand?</a><br>
//     <a href="URL1">What is the exact sit-out time I have at the table?</a><br>
//     `,

//     omaha: `
//     <a href="URL1">An introduction to Pot Limit Omaha</a><br>
//     <a href="URL1">Cash Game - Leave Table Penalty</a><br>
//     <a href="URL1">Cash Games - Are hands raked pre-flop?</a><br>
//     <a href="URL1">Cash Games - Blind Group Waiting</a><br>
//     <a href="URL1">Cash Games - If I leave a table, can I enter the same table with the original amount that I had bought in with?</a><br>
//     <a href="URL1">Cash Games - Understanding Run It Three Times</a><br>
//     <a href="URL1">Cash Games - What is a Cash Game?</a><br>
//     <a href="URL1">How does Disconnect Extra Time (DET) work?</a><br>
//     <a href="URL1">Omaha (All Variants) - Summary</a><br>
//     <a href="URL1">Omaha - Frequently Asked Questions</a><br>
//     <a href="URL1">Omaha - How is The Pot Limit calculated in Pot Limit Omaha?</a><br>
//     <a href="URL1">PLO - Overview & Key Details</a><br>
//     <a href="URL1">PLO-5 - Overview & Key Details</a><br>
//     <a href="URL1">Pot Limit Omaha - Hand Rankings</a><br>
//     <a href="URL1">Time Bank settings for PLO games</a><br>
//     <a href="URL1">Understanding Deal Choice</a><br>
//     <a href="URL1">Understanding Move Table</a><br>
//     <a href="URL1">Understanding Omaha</a><br>
//     <a href="URL1">Understanding Omaha Blind Structure and Rake</a><br>
//     <a href="URL1">What is a raked hand?</a><br>
//     <a href="URL1">What is the exact sit-out time I have at the table?</a><br>
//     `,

//     shortDeck: `
//     <a href="URL1">An Introduction To Short Deck</a><br>
//     <a href="URL1">Cash Game - Leave Table Penalty</a><br>
//     <a href="URL1">Cash Games - Are hands raked pre-flop?</a><br>
//     <a href="URL1">Cash Games - Blind Group Waiting</a><br>
//     <a href="URL1">Cash Games - If I leave a table, can I enter the same table with the original amount that I had bought in with?</a><br>
//     <a href="URL1">Cash Games - Understanding Run It Three Times</a><br>
//     <a href="URL1">Cash Games - What is a Cash Game?</a><br>
//     <a href="URL1">How Short Deck Hold’em works</a><br>
//     <a href="URL1">How does Disconnect Extra Time (DET) work?</a><br>
//     <a href="URL1">Short Deck - Hand Rankings</a><br>
//     <a href="URL1">Short Deck - Overview & Key Details</a><br>
//     <a href="URL1">Time Bank settings for Short Deck cash games</a><br>
//     <a href="URL1">Understanding Deal Choice</a><br>
//     <a href="URL1">Understanding Move Table</a><br>
//     <a href="URL1">Understanding Remove Chips feature</a><br>
//     <a href="URL1">What GGPoker features are available at Short Deck games?</a><br>
//     <a href="URL1">What is Short Deck Poker?</a><br>
//     <a href="URL1">What is a raked hand?</a><br>
//     <a href="URL1">What is the exact sit-out time I have at the table?</a><br>
//     <a href="URL1">What is the lowest straight possible in Short Deck?</a><br>
//     `,

//     casino: `
//     <a href="URL1">Baccarat - Understanding Baccarat</a><br>
//     <a href="URL1">BlackJack - Understanding Blackjack Game Rules</a><br>
//     <a href="URL1">Blackjack - Understanding Blackjack</a><br>
//     <a href="URL1">Can I multi-table casino games?</a><br>
//     <a href="URL1">Casino Bonus - FAQ & Summary</a><br>
//     <a href="URL1">Craps - Understanding Craps</a><br>
//     <a href="URL1">Locating a Round ID</a><br>
//     <a href="URL1">Roulette - Understanding Roulette</a><br>
//     <a href="URL1">Sic Bo - Understanding Sic Bo</a><br>
//     <a href="URL1">Slots - Can I save games to play at a later date?</a><br>
//     <a href="URL1">Slots - Where can I find my slot game histories?</a><br>
//     <a href="URL1">Understanding Slots</a><br>
//     <a href="URL1">Video Poker - Understanding Video Poker</a><br>
//     <a href="URL1">What casino games are available at GGPoker?</a><br>
//     <a href="URL1">Where can I find my casino games histories?</a><br>
//     `,

//     otherGameTypes: `
//     <a href="URL1">Cash Games - Blind Group Waiting</a><br>
//     <a href="URL1">Chip Stack Currency</a><br>
//     <a href="URL1">Does GGPoker offer Sit & Go Games?</a><br>
//     <a href="URL1">Exclusive Games - Are there any criteria for receiving an invitation to Exclusive games?</a><br>
//     <a href="URL1">Exclusive Games - How can I become a Host?</a><br>
//     <a href="URL1">Exclusive Games - How can I inquire about Exclusive Games & Hosts?</a><br>
//     <a href="URL1">Exclusive Games - How can I participate in Exclusive Games?</a><br>
//     <a href="URL1">Exclusive Games - What are Exclusive Games?</a><br>
//     <a href="URL1">Exclusive Games - What should I do if I don’t receive an invitation but want to participate?</a><br>
//     <a href="URL1">Exclusive Games - Will new features in the Exclusive Games be available in regular games?</a><br>
//     <a href="URL1">Mixed Games - Are there plans to offer other Poker variants?</a><br>
//     <a href="URL1">Play Money - FAQ & Summary</a><br>
//     `,
//     dailyGuarantees: `
//     <a href="URL1">Final Table Blind Rollback</a><br>
//     <a href="URL1">Final Table Chess Clock</a><br>
//     <a href="URL1">Final Table Features</a><br>
//     <a href="URL1">Understanding Daily Guarantees</a><br>
//     <a href="URL1">Unregistering from a tournament</a><br>
//     `,

//     bountyHunters: `
//     <a href="URL1">Bounty Hunters Series - October/November 2024 - Frequently Asked Questions</a><br>
//     <a href="URL1">Bounty prizes when a deal is made</a><br>
//     <a href="URL1">Final Table Blind Rollback</a><br>
//     <a href="URL1">Final Table Chess Clock</a><br>
//     <a href="URL1">Final Table Features</a><br>
//     <a href="URL1">GGPoker Bounty Hunters mechanic and worked example</a><br>
//     <a href="URL1">Unregistering from a tournament</a><br>
//     `,

//     mysteryBounty: `
//     <a href="URL1">Can I play multiple Day 1s?</a><br>
//     <a href="URL1">Final Phase</a><br>
//     <a href="URL1">Final Table Blind Rollback</a><br>
//     <a href="URL1">Final Table Chess Clock</a><br>
//     <a href="URL1">Final Table Features</a><br>
//     <a href="URL1">How much is it to enter?</a><br>
//     <a href="URL1">How to play?</a><br>
//     <a href="URL1">I've won a tournament ticket as my prize. Why is this?</a><br>
//     <a href="URL1">Initial Phase</a><br>
//     <a href="URL1">Terms and Conditions</a><br>
//     <a href="URL1">Unregistering from a tournament</a><br>
//     <a href="URL1">What happens if I play multiple Day 1s and qualify on multiple occasions for the Final Day (Final Phase)?</a><br>
//     <a href="URL1">What is the difference between Mystery Bounty tournaments and regular Bounty Tournaments?</a><br>
//     <a href="URL1">Where and When?</a><br>
//     <a href="URL1">Where can I see the bounties available in a Mystery Bounty tournament?</a><br>
//     `,

//     ggMasters: `
//     <a href="URL1">Are all GGMasters events freezeout?</a><br>
//     <a href="URL1">Are there any bounty events within GGMasters?</a><br>
//     <a href="URL1">Can I satellite into GGMasters events?</a><br>
//     <a href="URL1">Final Table Blind Rollback</a><br>
//     <a href="URL1">Final Table Chess Clock</a><br>
//     <a href="URL1">Final Table Features</a><br>
//     <a href="URL1">GGMasters Schedule</a><br>
//     <a href="URL1">GGMasters Starting Stack Size</a><br>
//     <a href="URL1">Overlay Edition - What is the GGMasters Overlay Edition?</a><br>
//     <a href="URL1">Unregistering from a tournament</a><br>
//     <a href="URL1">What are the GGMasters?</a><br>
//     <a href="URL1">What is a freezeout tournament?</a><br>
//     <a href="URL1">What range of buy-ins are the GGMasters events?</a><br>
//     `,

//     million: `
//     <a href="URL1">Final Table Blind Rollback</a><br>
//     <a href="URL1">Final Table Chess Clock</a><br>
//     <a href="URL1">Final Table Features</a><br>
//     <a href="URL1">GGMillion$ - Can I play multiple Day 1's to the GGMillion$ Final Day?</a><br>
//     <a href="URL1">GGMillion$ - Can I satellite into any GGMillion$?</a><br>
//     <a href="URL1">GGMillion$ - Frequently Asked Questions</a><br>
//     <a href="URL1">GGMillion$ - How much money is guaranteed in the GGMillion$?</a><br>
//     <a href="URL1">GGMillion$ - I have qualified for the GGMillion$ via a satellite, can I win another entry via a different satellite?</a><br>
//     <a href="URL1">GGMillion$ - Is staking available in the GGMillion$?</a><br>
//     <a href="URL1">GGMillion$ - This event runs weekly, however, I cannot find one for this week. Why?</a><br>
//     <a href="URL1">GGMillion$ - What is the GGMillion$?</a><br>
//     <a href="URL1">GGMillion$ - When does the GGMillion$ take place?</a><br>
//     <a href="URL1">GGMillion$ - Where can I find more information on the MILLION$ series?</a><br>
//     <a href="URL1">GGMillion$ Summary</a><br>
//     <a href="URL1">Unregistering from a tournament</a><br>
//     `,

//     satellites: `
//     <a href="URL1">Express Satellites - All-in or Fold Sit & Go - Frequently Asked Questions</a><br>
//     <a href="URL1">Express Satellites - Avatar Race - Frequently Asked Questions</a><br>
//     <a href="URL1">Express Satellites - Flip & Go Sit & Go Satellites - Frequently Asked Questions</a><br>
//     <a href="URL1">Express Satellites - Frequently Asked Questions</a><br>
//     <a href="URL1">Express Satellites - Roshambo (Rock, Paper, Scissors) - Frequently Asked Questions</a><br>
//     <a href="URL1">Final Table Blind Rollback</a><br>
//     <a href="URL1">Final Table Chess Clock</a><br>
//     <a href="URL1">Final Table Features</a><br>
//     <a href="URL1">How is the cash prize distributed if the guarantee of a specific tournament is exceeded?</a><br>
//     <a href="URL1">I want to play a certain event. How can I ensure my satellite tournament will register me in my preferred game?</a><br>
//     <a href="URL1">I won a satellite but I was given a T$ prize of less value - why is this?</a><br>
//     <a href="URL1">I won a satellite entry and was registered for the wrong event</a><br>
//     <a href="URL1">I won a satellite, but cannot participate in the target event.</a><br>
//     <a href="URL1">I won a seat in an event via a satellite, can I unregister?</a><br>
//     <a href="URL1">Satellite Pausing</a><br>
//     <a href="URL1">Target Stack Satellite - Summary</a><br>
//     <a href="URL1">Target Stack Satellites - FAQ</a><br>
//     <a href="URL1">What happens if I'm registered in a tournament and win another satellite?</a><br>
//     <a href="URL1">What is a satellite?</a><br>
//     <a href="URL1">When is hand for hand active in satellite tournaments?</a><br>
//     <a href="URL1">When playing a satellite, the target tournament changed. Is this within the rules or a bug?</a><br>
//     <a href="URL1">Why did my satellite pause?</a><br>
//     <a href="URL1">Why was I not paid the correct amount for my satellite win?</a><br>
//     `,

//     tournamentSeriesSpecialEvents: `
//     <a href="URL1">Bounty Hunters Series - October/November 2024 - Frequently Asked Questions</a><br>
//     <a href="URL1">Flip & Go Millionaire - What happens if I win the Flip Stage and proceed to the Go Stage?</a><br>
//     <a href="URL1">Flip & Go Millionaire - Can I sell action?</a><br>
//     <a href="URL1">Flip & Go Millionaire - Frequently Asked Questions</a><br>
//     <a href="URL1">Flip & Go Millionaire - How much does each stack cost in the Flip Stage?</a><br>
//     <a href="URL1">Flip & Go Millionaire - I have already qualified for the Go Stage - can I play more Flip Stages?</a><br>
//     <a href="URL1">Flip & Go Millionaire - Terms and Conditions</a><br>
//     <a href="URL1">Flip & Go Millionaire - What are the maximum amount of stacks I can buy per Flip Stage?</a><br>
//     <a href="URL1">Flip & Go Millionaire - What is Flip & Go Millionaire?</a><br>
//     <a href="URL1">Flip & Go Millionaire - When do the Flip & Go Millionaire Flights begin?</a><br>
//     <a href="URL1">Flip & Go Millionaire - When does the Flip & Go Millionaire event take place?</a><br>
//     <a href="URL1">Flip & Go Millionaire - Will the Flip Bonus promotion also be present in the Flip & Go Millionaire Flip Stages?</a><br>
//     <a href="URL1">Flip & Go Millionaire - Will there be satellites so I can buy-in cheaper?</a><br>
//     <a href="URL1">WSOP Paradise 2024 - Frequently Asked Questions</a><br>
//     `,

//     otherTournaments: `
//     <a href="URL1">Are any GGPoker events tracked on Hendon Mob?</a><br>
//     <a href="URL1">Are late registration tournaments in the lobby configured by remaining registration time?</a><br>
//     <a href="URL1">Chinese Zodiac - Most Zodiac tournaments offer a specialized avatar for victory. Do these reward mechanics apply for Zodiac Bounty events?</a><br>
//     <a href="URL1">Chinese Zodiac - Are there any satellites available for Chinese Zodiac tournaments?</a><br>
//     <a href="URL1">Chinese Zodiac - Special Avatars</a><br>
//     <a href="URL1">Chinese Zodiac - What is the Chinese Zodiac Series?</a><br>
//     <a href="URL1">Chinese Zodiac - When a deal is made at the final table of a Zodiac event, do all players win an animal avatar or just the participant holding the most chips when the deal is made?</a><br>
//     <a href="URL1">Chinese Zodiac - When do the Chinese Zodiac Tournaments run?</a><br>
//     <a href="URL1">Delayed Start</a><br>
//     <a href="URL1">Do tournaments support hand-to-hand play?</a><br>
//     <a href="URL1">Does GGPoker offer "On Demand" Tournaments?</a><br>
//     <a href="URL1">Elky Dance</a><br>
//     <a href="URL1">Elky Dance - Can I turn this feature off?</a><br>
//     <a href="URL1">Estimated duration</a><br>
//     <a href="URL1">Filter Improvement (October 2023)</a><br>
//     <a href="URL1">Fish Buffet - I've just exited a tournament - but my Fish Points did not update - why is this?</a><br>
//     <a href="URL1">GGPoker Bounty Hunters mechanic and worked example</a><br>
//     <a href="URL1">How can I find out if a tournament that I had registered for was cancelled?</a><br>
//     <a href="URL1">How do I find the tournament that I had registered for?</a><br>
//     <a href="URL1">How does the chess clock work?</a><br>
//     <a href="URL1">How does the current Tournament position dashboard help players?</a><br>
//     <a href="URL1">I bought into the same tournament twice, but why is it that I am only registered for one tournament and that my balance was debited twice?</a><br>
//     <a href="URL1">I see GGPoker offers tournaments in ¥, what currency is this?</a><br>
//     <a href="URL1">In a tournament why can I not register if the tournament is still in late registration?</a><br>
//     <a href="URL1">Is it possible to be Big Blind in back to back hands in a tournament?</a><br>
//     <a href="URL1">My tournament was cancelled due to a tech issue, do I still get Fish Buffet points?</a><br>
//     <a href="URL1">Phased Events - I'm trying to register for a Day 1 event but get a message saying I am already registered for Day 2 and cannot enter. Why is this?</a><br>
//     <a href="URL1">Private Tournaments - Partner freerolls from the lobby</a><br>
//     <a href="URL1">Setting Custom Buy-in Filters for tournaments</a><br>
//     <a href="URL1">Sitting out in a tournament/MTT</a><br>
//     <a href="URL1">Timebank settings for Tournaments</a><br>
//     <a href="URL1">Tournament Elimination Policy</a><br>
//     <a href="URL1">Tournament Honours - Summary</a><br>
//     <a href="URL1">Tournament Honours - What can I find in the Main Lobby under Tournament Honours?</a><br>
//     <a href="URL1">Tournament Honours - What is Tournament Honours?</a><br>
//     <a href="URL1">Tournament Honours - What's special about the Heads-Up stage at the final table?</a><br>
//     <a href="URL1">Tournament Honours - Why are all my previous results not shown?</a><br>
//     <a href="URL1">Tournament Profit Graph</a><br>
//     <a href="URL1">Understanding Omaholics</a><br>
//     <a href="URL1">Understanding Re-Entry</a><br>
//     <a href="URL1">Understanding Tournament Types</a><br>
//     <a href="URL1">Unregistering from a tournament</a><br>
//     <a href="URL1">What are Variable Level tournaments?</a><br>
//     <a href="URL1">What happens to my Buy-in if a tournament is cancelled mid-tournament?</a><br>
//     <a href="URL1">What is a freezeout tournament?</a><br>
//     <a href="URL1">What is a satellite?</a><br>
//     <a href="URL1">What is an Overlay?</a><br>
//     <a href="URL1">When is it possible to buy an add-on or rebuy?</a><br>
//     <a href="URL1">Where can the Tournament Break Schedule be found from the client?</a><br>
//     <a href="URL1">Why could I not make a rebuy and an add-on after I lost my stack?</a><br>
//     <a href="URL1">Why does GGPoker not have old style Sit & Go tournaments?</a><br>
//     <a href="URL1">Zodiac Tournaments - Can I register for these tournaments in USD?</a><br>
//     `,


//     stakingBacking: `
//     <a href="URL1">Adjusted Mark Up</a><br>
//     <a href="URL1">Auto Unregister</a><br>
//     <a href="URL1">Can GGPoker act as an arbitrator in a staking dispute?</a><br>
//     <a href="URL1">Can I chat with horses I've staked?</a><br>
//     <a href="URL1">Can I see how a horse (player I've staked) is doing?</a><br>
//     <a href="URL1">Can I see my staking history anywhere?</a><br>
//     <a href="URL1">Cap</a><br>
//     <a href="URL1">Designated Backer - Frequently Asked Questions</a><br>
//     <a href="URL1">Designated Backer - What is 'Designated Backer'</a><br>
//     <a href="URL1">Do I get a percentage of the prize if my horse finishes in the Bubble Protection places?</a><br>
//     <a href="URL1">Fish Buffet - Do I get Fish Points for buying another player's action?</a><br>
//     <a href="URL1">How can I find out if my favourite player is selling tournament action?</a><br>
//     <a href="URL1">How can I find the staking results for an event?</a><br>
//     <a href="URL1">How do I follow my favourite players for staking purposes?</a><br>
//     <a href="URL1">How often does GGPoker’s Staking Seller list refresh?</a><br>
//     <a href="URL1">How to buy Staking?</a><br>
//     <a href="URL1">How to sell Staking?</a><br>
//     <a href="URL1">How to view Staking Profile?</a><br>
//     <a href="URL1">If I cancel staking am I unregistered from the tournament?</a><br>
//     <a href="URL1">Multi Entry Staking</a><br>
//     <a href="URL1">Multi Entry Staking - How do I buy for Multi Entry Staking?</a><br>
//     <a href="URL1">Multi Entry Staking - How do I sell for multiple entries?</a><br>
//     <a href="URL1">Multi Entry Staking - What is the Share Dilution formula applied to Multi-Entry Staking</a><br>
//     <a href="URL1">Staking - Summary</a><br>
//     <a href="URL1">Staking tournaments with buy-ins exceeding USD $5000+/CNY ¥5000+</a><br>
//     <a href="URL1">Understanding Staking</a><br>
//     <a href="URL1">What happens if I sell Day 2 action but I play another Day 1 and bring a bigger stack?</a><br>
//     <a href="URL1">What is the maximum cap I can set?</a><br>
//     `,

//     smartHUD: `
//     <a href="URL1">Are Smart HUD stats the same as these?</a><br>
//     <a href="URL1">Breakdown of key Statistics - Summary</a><br>
//     <a href="URL1">Can I opt out of Smart HUD and stop other players from seeing my data?</a><br>
//     <a href="URL1">Can I view my stats on Smart HUD?</a><br>
//     <a href="URL1">Can other players see my entire gameplay stats?</a><br>
//     <a href="URL1">How Are Smart HUD stats calculated?</a><br>
//     <a href="URL1">Is having a tool like this regarded as cheating?</a><br>
//     <a href="URL1">Is there a difference between what I can see when I look at my stats and what other players see when they look at mine?</a><br>
//     <a href="URL1">Smart HUD - Frequently Asked Questions</a><br>
//     <a href="URL1">Smart HUD - Summary</a><br>
//     <a href="URL1">Smart HUD - Why does GGPoker have its own HUD and not just allow commercially available HUDs?</a><br>
//     <a href="URL1">What are the basic stats that you can see using Smart HUD when viewing other players?</a><br>
//     <a href="URL1">What does 3Bet mean?</a><br>
//     <a href="URL1">What does ATS mean?</a><br>
//     <a href="URL1">What does CB mean?</a><br>
//     <a href="URL1">What does CCB mean?</a><br>
//     <a href="URL1">What does FCB mean?</a><br>
//     <a href="URL1">What does Hands mean?</a><br>
//     <a href="URL1">What does PFR mean?</a><br>
//     <a href="URL1">What does RCB mean?</a><br>
//     <a href="URL1">What does TAF mean?</a><br>
//     <a href="URL1">What does VPIP mean?</a><br>
//     <a href="URL1">What does WSD mean?</a><br>
//     <a href="URL1">What does WT mean?</a><br>
//     <a href="URL1">What is a HUD?</a><br>
//     <a href="URL1">What is the Smart HUD on GGPoker?</a><br>
//     <a href="URL1">What is the number next to my name?</a><br>
//     <a href="URL1">What will I see when I open another player's Smart HUD display?</a><br>
//     <a href="URL1">Why are my total winnings different on Smart HUD, Staking Profile and PokerCraft?</a><br>
//     <a href="URL1">Why does GGPoker have its own HUD and not just allow commercially available HUDs?</a><br>
//     <a href="URL1">Why is there fire or ice around the number next to my name?</a><br>
//     `,

//     propBets: `
//     <a href="URL1">Are prop bets private or public?</a><br>
//     <a href="URL1">Bankroll Challenge - FAQ & Summary</a><br>
//     <a href="URL1">Can Prop Bets be created while playing poker?</a><br>
//     <a href="URL1">Can prop bets be cancelled once they go in play?</a><br>
//     <a href="URL1">Can prop bets be tracked live?</a><br>
//     <a href="URL1">ELO Challenge - Frequently Asked Questions</a><br>
//     <a href="URL1">Forfeiting a Prop Bet</a><br>
//     <a href="URL1">How many prop bets can players be in at the same time?</a><br>
//     <a href="URL1">Last Longer - Frequently Asked Questions</a><br>
//     <a href="URL1">Maximum/minimum Prop Bet amounts and markup</a><br>
//     <a href="URL1">Player limits on Prop Bets.</a><br>
//     <a href="URL1">Prop Bets - FAQ</a><br>
//     <a href="URL1">Prop Bets - Last Longer - Frequently Asked Questions</a><br>
//     <a href="URL1">Prop Bets - Summary</a><br>
//     <a href="URL1">Prop bet payouts</a><br>
//     <a href="URL1">Unregistering from a prop bet</a><br>
//     <a href="URL1">What Happens to Prop Bets During Maintenance</a><br>
//     <a href="URL1">What are Prop Bets In Poker?</a><br>
//     <a href="URL1">What can I use to buy into Prop bets?</a><br>
//     <a href="URL1">Who can create prop bets?</a><br>
//     `,

//     earlyBirdBenefits: `
//     <a href="URL1">Bonus Chips - If I buy-in with T$ am I eligible for Bonus Chips?</a><br>
//     <a href="URL1">Bonus Chips - What percentage bonus chips will I receive if I register during the first level of a tournament?</a><br>
//     <a href="URL1">Bonus Chips - How are bonus chips calculated?</a><br>
//     <a href="URL1">Bonus Chips - How do I know if a tournament offers Early Bird Bonus Chips?</a><br>
//     <a href="URL1">Bonus Chips - How many levels into a tournament are bonus chips offered?</a><br>
//     <a href="URL1">Bonus Chips - If I buy-in with a ticket am I eligible for Bonus Chips?</a><br>
//     <a href="URL1">Bonus Chips - If I receive Bonus Chips for my first registration and get eliminated after the Early Bird Bonus Chip window - will I receive the bonus again if I re-enter?</a><br>
//     <a href="URL1">Bonus Chips - If I receive Bonus Chips for my first registration and get eliminated before the Early Bird Bonus Chip window closes - will I receive the bonus again if I re-enter?</a><br>
//     <a href="URL1">Bonus Chips - If I win a satellite to a tournament and are registered into the event before the Early Bird Bonus chip promotion ends - will I receive my bonus chip %?</a><br>
//     <a href="URL1">Bonus Chips - What is Early Bird Benefit Bonus Chips?</a><br>
//     <a href="URL1">Bonus Chips - What percentage bonus chips will I receive if I register before the tournament begins?</a><br>
//     <a href="URL1">Bonus Chips - What percentage bonus chips will I receive if I register during the fifth level of a tournament?</a><br>
//     <a href="URL1">Bonus Chips - What percentage bonus chips will I receive if I register during the fourth level of a tournament?</a><br>
//     <a href="URL1">Bonus Chips - What percentage bonus chips will I receive if I register during the second level of a tournament?</a><br>
//     <a href="URL1">Bonus Chips - What percentage bonus chips will I receive if I register during the third level of a tournament?</a><br>
//     <a href="URL1">Bonus Chips - What types of Bonus Chips are available?</a><br>
//     <a href="URL1">Bonus Chips - Which tournaments offer Early Bird Bonus Chips?</a><br>
//     <a href="URL1">Bubble Protection - Do I still get Fish Buffet points as well as Bubble Protection?</a><br>
//     <a href="URL1">Bubble Protection - Do backers share Bubble Protection?</a><br>
//     <a href="URL1">Bubble Protection - Does the way I register for a tournament affect Bubble Protection?</a><br>
//     <a href="URL1">Bubble Protection - How can I check I got paid my T$?</a><br>
//     <a href="URL1">Bubble Protection - How do I know if a tournament has Bubble Protection?</a><br>
//     <a href="URL1">Bubble Protection - How is my buy-in refunded via Bubble Protection?</a><br>
//     <a href="URL1">Bubble Protection - How many places before the money are considered to be the Bubble?</a><br>
//     <a href="URL1">Bubble Protection - How much of my buy-in goes to pay for this?</a><br>
//     <a href="URL1">Bubble Protection - I bought staking off a player and I believe they intentionally tried to finish on the Bubble to avoid paying me, what can I do?</a><br>
//     <a href="URL1">Bubble Protection - I finished on the bubble in an eligible tournament but have not received my payment. What's going wrong?</a><br>
//     <a href="URL1">Bubble Protection - I registered before an event started, was eliminated and wish to re-enter. Do I still have Bubble Protection?</a><br>
//     <a href="URL1">Bubble Protection - Is it available for Satellites?</a><br>
//     <a href="URL1">Bubble Protection - Is there a minimum/maximum number of players needed for Bubble Protection to be paid out?</a><br>
//     <a href="URL1">Bubble Protection - Terms and Conditions</a><br>
//     <a href="URL1">Bubble Protection - What happens if multiple players are eliminated at once around the bubble of the tournament?</a><br>
//     <a href="URL1">Bubble Protection - What is Bubble Protection?</a><br>
//     <a href="URL1">Bubble Protection - What tournament types are eligible for Bubble Protection?</a><br>
//     <a href="URL1">Bubble Protection - When does the Bubble Protection period end for each tournament?</a><br>
//     <a href="URL1">Early Bird Benefit - Bonus Chips - Frequently Asked Questions</a><br>
//     <a href="URL1">Early Bird Benefit - Bubble Protection - Frequently Asked Questions</a><br>
//     <a href="URL1">Early Bird Benefit - Bubble Protection - Summary</a><br>
//     `,

//     evCashout: `
//     <a href="URL1">Are there any extra fees in EV Cashout</a><br>
//     <a href="URL1">Details and Limitations - EV Cashout</a><br>
//     <a href="URL1">EV Cashout - Frequently Asked Questions</a><br>
//     <a href="URL1">EV Cashout - If I take the EV Cashout option am I still eligible for the Bad Beat Jackpot?</a><br>
//     <a href="URL1">EV Cashout - Summary</a><br>
//     <a href="URL1">EV Cashout - Why was EV Cashout not offered in my hand?</a><br>
//     <a href="URL1">EV Cashout in multiway pots</a><br>
//     <a href="URL1">How does EV Cashout work?</a><br>
//     <a href="URL1">How is EV Cashout calculated?</a><br>
//     <a href="URL1">I ran out of time and I didn't get to select EV Cashout - what happened?</a><br>
//     <a href="URL1">In which games does EV Cashout apply?</a><br>
//     <a href="URL1">What is EV Cashout?</a><br>
//     <a href="URL1">When does EV Cashout not apply?</a><br>
//     <a href="URL1">When will my EV Cashout be paid?</a><br>
//     <a href="URL1">Why was EV Cashout not applied to my hand?</a><br>
//     `,


//     otherFeatures: `
//     <a href="URL1">Audio Space - I have entered an Audio Space - can I control my microphone and speaker settings?</a><br>
//     <a href="URL2">Audio Space - Are Audio Space tables monitored?</a><br>
//     <a href="URL3">Audio Space - Can I enter an Audio Space if I have my Mute Helmet (Helmet Mode) on?</a><br>
//     <a href="URL4">Audio Space - Can I join more than one Audio Space?</a><br>
//     <a href="URL5">Audio Space - Can I leave an Audio Space?</a><br>
//     <a href="URL6">Audio Space - Do I have to sit in an Audio Space if it's open and active at my table?</a><br>
//     <a href="URL7">Audio Space - Frequently Asked Questions</a><br>
//     <a href="URL8">Audio Space - How do I join an Audio Space?</a><br>
//     <a href="URL9">Audio Space - How do I know if Audio Space is available at my table?</a><br>
//     <a href="URL10">Audio Space - Summary</a><br>
//     <a href="URL11">Audio Space - What is Audio Space?</a><br>
//     <a href="URL12">Audio Space - Who can create an Audio Space?</a><br>
//     <a href="URL13">Audio Space - Who can sit in an Audio Space?</a><br>
//     <a href="URL14">Audio Space - Why was Audio Space developed?</a><br>
//     <a href="URL15">Avatars - Can I change my avatar more than once?</a><br>
//     <a href="URL16">Avatars - Can player avatars be minimized and deselected entirely?</a><br>
//     <a href="URL17">Avatars - Can they be removed?</a><br>
//     <a href="URL18">Avatars - How to change Avatar</a><br>
//     <a href="URL19">Avatars - NFT Avatars</a><br>
//     <a href="URL20">Avatars - NFT Avatars - How to add an NFT Avatar</a><br>
//     <a href="URL21">Bet Muck - Frequently Asked Questions</a><br>
//     <a href="URL22">Bet Muck - I have actioned Bet Muck - can it be cancelled?</a><br>
//     <a href="URL23">Bet Muck - I have chosen Bet Muck but my opponent raises - what happens?</a><br>
//     <a href="URL24">Bet Muck - If I choose Bet Muck will my cards be revealed?</a><br>
//     <a href="URL25">Bet Muck - Is Bet Muck available in AoF Cash Games?</a><br>
//     <a href="URL26">Bet Muck - Is Bet Muck available in AoF Sit & Go?</a><br>
//     <a href="URL27">Bet Muck - Is Bet Muck available in Flip & Go?</a><br>
//     <a href="URL28">Bet Muck - Is Bet Muck available in Tournaments?</a><br>
//     <a href="URL29">Bet Muck - Summary</a><br>
//     <a href="URL30">Bet Muck - What does Bet Muck do?</a><br>
//     <a href="URL31">Bet Muck - What games is Bet Muck available in?</a><br>
//     <a href="URL32">Bet Muck - What is Bet Muck?</a><br>
//     <a href="URL33">Bet Muck - When can I Bet Muck?</a><br>
//     <a href="URL34">Bet on Flop - What is the minimum/maximum bet?</a><br>
//     <a href="URL35">Bet on Flop - Can I turn off Bet on Flop?</a><br>
//     <a href="URL36">Bet on Flop - Frequently Asked Questions</a><br>
//     <a href="URL37">Bet on Flop - I won a bet on Bet on Flop. Can this be checked?</a><br>
//     <a href="URL38">Bet on Flop - Payouts/Odds?</a><br>
//     <a href="URL39">Bet on Flop - Summary</a><br>
//     <a href="URL40">Bet on Flop - What games feature Bet on Flop?</a><br>
//     <a href="URL41">Bet on Flop - What happens when hands are ran multiple times?</a><br>
//     <a href="URL42">Bet on Flop - What is Bet on Flop?</a><br>
//     <a href="URL43">Bet on Flop - What types of betting are available?</a><br>
//     <a href="URL44">Bet on Flop - When can I place a bet?</a><br>
//     <a href="URL45">Bet on Flop - Who can participate in the Bet on Flop side game?</a><br>
//     <a href="URL46">Bet on Flop - Why can I not see this side game?</a><br>
//     <a href="URL47">Betting - Why does it show betting in BBs sometimes and percentages in others?</a><br>
//     <a href="URL48">Can I change suggested Smart Betting amounts?</a><br>
//     <a href="URL49">Can I reset tagged players colors?</a><br>
//     <a href="URL50">Can I turn off the river peel?</a><br>
//     <a href="URL51">Can observers hear an Audio Space?</a><br>
//     <a href="URL52">Chat - Chat bubbles/Emojis are blocking some info - can they be removed?</a><br>
//     <a href="URL53">Chat - Reporting Chat Abuse</a><br>
//     <a href="URL54">Chat - Understanding Table Chat</a><br>
//     <a href="URL55">Chat - Auto Translate</a><br>
//     <a href="URL56">Chat - Where can I find my table chat history?</a><br>
//     <a href="URL57">Check/Call Preselect</a><br>
//     <a href="URL58">Checking my player inbox</a><br>
//     <a href="URL59">Chip Stack BB display</a><br>
//     <a href="URL60">Chip Stack Currency</a><br>
//     <a href="URL61">Custom Table Layout - Frequently Asked Questions</a><br>
//     <a href="URL62">DNegs Splash Dance</a><br>
//     <a href="URL63">DNegs Splash Dance - Can I turn this feature off?</a><br>
//     <a href="URL64">Deactivating Squeeze Card</a><br>
//     <a href="URL65">Elky Dance</a><br>
//     <a href="URL66">Elky Dance - Can I turn this feature off?</a><br>
//     <a href="URL67">Final Table Betting - Frequently Asked Questions</a><br>
//     <a href="URL68">Final Table Betting - How are the odds calculated for Final Table Betting?</a><br>
//     <a href="URL69">Final Table Betting - How do I make a bet on the Final Table?</a><br>
//     <a href="URL70">Final Table Betting - I have made a bet on the Final Table but the odds have changed what happens?</a><br>
//     <a href="URL71">Final Table Betting - I have won a Final table bet - when will I be paid?</a><br>
//     <a href="URL72">Final Table Betting - If I am playing on a Final Table can I make a bet?</a><br>
//     <a href="URL73">Final Table Betting - If I qualify for a Final table - can I bet on myself?</a><br>
//     <a href="URL74">Final Table Betting - Is Final Table Betting available in all countries?</a><br>
//     <a href="URL75">Final Table Betting - Is Final Table Betting available in all tournaments?</a><br>
//     <a href="URL76">Final Table Betting - Summary</a><br>
//     <a href="URL77">Final Table Betting - What happens if not all participants participate in the final table?</a><br>
//     <a href="URL78">Final Table Betting - What is Final Table Betting?</a><br>
//     <a href="URL79">Final Table Betting - What is the minimum bet I can make?</a><br>
//     <a href="URL80">Final Table Betting - When does Final Table Betting close?</a><br>
//     <a href="URL81">Final Table Betting - When will the odds be calculated for Final Table Betting?</a><br>
//     <a href="URL82">Final Table Betting - Where can I see the results of any bets I've made on a Final Table?</a><br>
//     <a href="URL83">Four colour deck</a><br>
//     <a href="URL84">Group Join - Table Preferences via Group Join</a><br>
//     <a href="URL85">Helmet Mode - Can I turn certain things off with Helmet Mode for example, block emojis but still have table chat?</a><br>
//     <a href="URL86">Helmet Mode - Can I use Helmet Mode as an observer at a table?</a><br>
//     <a href="URL87">Helmet Mode - Frequently Asked Questions</a><br>
//     <a href="URL88">Helmet Mode - How do I switch Helmet Mode off (PC)</a><br>
//     <a href="URL89">Helmet Mode - How do I switch Helmet Mode on? (Mobile)</a><br>
//     <a href="URL90">Helmet Mode - How do I switch Helmet Mode on? (PC)</a><br>
//     <a href="URL91">Helmet Mode - I want to have my helmet mode set to 'on' all the time. Why is there no option to do this?</a><br>
//     <a href="URL92">Helmet Mode - If I am already seated with Helmet Mode on, will any new tables have it applied automatically?</a><br>
//     <a href="URL93">Helmet Mode - If I am using Helmet Mode, can I use chat or emojis?</a><br>
//     <a href="URL94">Helmet Mode - Is there an option to have Helmet Mode permanently on?</a><br>
//     <a href="URL95">Helmet Mode - Summary</a><br>
//     <a href="URL96">Helmet Mode - What does Helmet Mode block?</a><br>
//     <a href="URL97">Helmet Mode - What is Helmet Mode?</a><br>
//     <a href="URL98">Helmet Mode - When can I use this feature?</a><br>
//     <a href="URL99">Helmet Mode - Will other players know if I am using Helmet Mode?</a><br>
//     <a href="URL100">Hotkeys - Are Hotkeys available on all games?</a><br>
//     <a href="URL101">Hotkeys - Can I create custom hotkeys that are not offered on the Poker client?</a><br>
//     <a href="URL102">Hotkeys - Can I remove the green border around the table my mouse is hovering over</a><br>
//     <a href="URL103">Hotkeys - Are you going to introduce mouse buttons as hotkeys?</a><br>
//     <a href="URL104">Hotkeys - Can I show my set of hotkeys on the table?</a><br>
//     <a href="URL105">Hotkeys - Can I use any keyboard keys as my hotkeys?</a><br>
//     <a href="URL106">Hotkeys - Can I use mouse buttons as hotkeys?</a><br>
//     <a href="URL107">Hotkeys - Can I use third-party software to key bind a mouse button to a keyboard key to use it as a hotkey?</a><br>
//     <a href="URL108">Hotkeys - Frequently Asked Questions</a><br>
//     <a href="URL109">Hotkeys - How do I know which table is active to avoid misclicks?</a><br>
//     <a href="URL110">Hotkeys - Summary</a><br>
//     <a href="URL111">Hotkeys - What Game Functions can be set as a Hotkey?</a><br>
//     <a href="URL112">Hotkeys - What General Options can be set as a Hotkey?</a><br>
//     <a href="URL113">Hotkeys - What are Hotkeys</a><br>
//     <a href="URL114">Hotkeys - What table actions can be set as a Hotkey?</a><br>
//     <a href="URL115">Hotkeys - Why do Hotkeys exist?</a><br>
//     <a href="URL116">Is Smart Betting automatic?</a><br>
//     <a href="URL117">Like/Dislike table reaction</a><br>
//     <a href="URL118">Lobby Chat</a><br>
//     <a href="URL119">Next Hand Roulette - Can I turn off Next Hand Roulette?</a><br>
//     <a href="URL120">Next Hand Roulette - Details & Limitations</a><br>
//     <a href="URL121">Next Hand Roulette - Frequently Asked Questions</a><br>
//     <a href="URL122">Next Hand Roulette - Game Rules</a><br>
//     <a href="URL123">Next Hand Roulette - How does Next Hand Roulette work?</a><br>
//     <a href="URL124">Next Hand Roulette - I won on Next Hand Roulette but I have not been paid - can this be checked?</a><br>
//     <a href="URL125">Next Hand Roulette - Is Next Hand Roulette available on mobile/iOS devices?</a><br>
//     <a href="URL126">Next Hand Roulette - PC/Desktop display</a><br>
//     <a href="URL127">Next Hand Roulette - Summary</a><br>
//     <a href="URL128">Next Hand Roulette - Terms and Conditions</a><br>
//     <a href="URL129">Next Hand Roulette - What betting types are available?</a><br>
//     <a href="URL130">Next Hand Roulette - What games can I play Next Hand Roulette in?</a><br>
//     <a href="URL131">Next Hand Roulette - What is Next Hand Roulette?</a><br>
//     <a href="URL132">Next Hand Roulette - Where can I access Next Hand Roulette?</a><br>
//     <a href="URL133">No Look All-in - Performing a 'No Look All In' or blind bet</a><br>
//     <a href="URL134">No Turn, No Show - FAQ & Summary</a><br>
//     <a href="URL135">Play Money - Frequently Asked Questions</a><br>
//     <a href="URL136">Player Messages - How to access Player Messages</a><br>
//     <a href="URL137">RIMT (Run it Multiple Times)</a><br>
//     <a href="URL138">River Peel</a><br>
//     <a href="URL139">Sit out settings</a><br>
//     <a href="URL140">Smart Betting - Will Smart Betting make offers outside my typical bet ranges?</a><br>
//     <a href="URL141">Snapcam - Can I block other players' Snapcam broadcasts?</a><br>
//     <a href="URL142">Snapcam - Can I use Snapcam as an observer at a table?</a><br>
//     <a href="URL143">Snapcam - Can my access to Snapcam be removed?</a><br>
//     <a href="URL144">Snapcam - Does Snapcam keep recording when I switch tables?</a><br>
//     <a href="URL145">Snapcam - Frequently Asked Questions</a><br>
//     <a href="URL146">Snapcam - How do I use Snapcam?</a><br>
//     <a href="URL147">Snapcam - Is Snapcam available on mobile?</a><br>
//     <a href="URL148">Snapcam - Is Snapcam configured for both tournaments and cash games?</a><br>
//     <a href="URL149">Snapcam - Summary</a><br>
//     <a href="URL150">Snapcam - Terms and Conditions</a><br>
//     <a href="URL151">Snapcam - What Is Snapcam?</a><br>
//     <a href="URL152">Snapcam - What is the maximum Snapcam clip length?</a><br>
//     <a href="URL153">Snapcam - When seated, how many players can utilize Snapcam simultaneously?</a><br>
//     <a href="URL154">Snapcam - Where can I report players abusing Snapcam?</a><br>
//     <a href="URL155">Splash - Can I Splash the whole table at once?</a><br>
//     <a href="URL156">Splash - Can I pick who gets Splashed?</a><br>
//     <a href="URL157">Splash - Can I stop other players from throwing Splashes at me?</a><br>
//     <a href="URL158">Splash - Can I turn this feature off permanently?</a><br>
//     <a href="URL159">Splash - Does being in Helmet Mode prevent me from Splashing my opponents?</a><br>
//     <a href="URL160">Splash - Frequently Asked Questions</a><br>
//     <a href="URL161">Splash - How do I initiate a Splash?</a><br>
//     <a href="URL162">Splash - How do Splashes work?</a><br>
//     <a href="URL163">Splash - If someone uses a Splash on me, can I remove the animation from my screen?</a><br>
//     <a href="URL164">Splash - Summary</a><br>
//     <a href="URL165">Splash - What Splashes are available?</a><br>
//     <a href="URL166">Splash - What are the triggers to be able to use a Splash?</a><br>
//     <a href="URL167">Splash - What happens when I use a 'Splash'?</a><br>
//     <a href="URL168">Straddle - Frequently Asked Questions</a><br>
//     <a href="URL169">Streamer Mode - Can Streamer Mode be activated on individual tables?</a><br>
//     <a href="URL170">Streamer Mode - Frequently Asked Questions</a><br>
//     <a href="URL171">Streamer Mode - How can I become a GGPoker official streamer?</a><br>
//     <a href="URL172">Streamer Mode - How do I turn on Streamer Mode?</a><br>
//     <a href="URL173">Streamer Mode - How does Hide My Balance work in Streamer Mode?</a><br>
//     <a href="URL174">Streamer Mode - How does Hide My Hole Cards work in Streamer Mode?</a><br>
//     <a href="URL175">Streamer Mode - Is there a setting to have streamer mode 'Always On'?</a><br>
//     <a href="URL176">Streamer Mode - Summary</a><br>
//     <a href="URL177">Streamer Mode - What features does Streamer Mode offer?</a><br>
//     <a href="URL178">Streamer Mode - What is Streamer Mode?</a><br>
//     <a href="URL179">Table Arrangement - Are custom layouts interchangeable between Windows and Mac devices?</a><br>
//     <a href="URL180">Table Arrangement - Can I choose where any new tables I open whilst using a Custom Table Layout are displayed?</a><br>
//     <a href="URL181">Table Arrangement - Can I use Custom Table Layouts on a Tablet or Mobile?</a><br>
//     <a href="URL182">Table Arrangement - Frequently Asked Questions</a><br>
//     <a href="URL183">Table Arrangement - How do I adjust Table Size on desktop?</a><br>
//     <a href="URL184">Table Arrangement - How many Custom Table Layouts can I save?</a><br>
//     <a href="URL185">Table Arrangement - How many tables can I display on my screen?</a><br>
//     <a href="URL186">Table Arrangement - How to change the Background color</a><br>
//     <a href="URL187">Table Arrangement - How to change the Front and Back Deck design on the cards used in your games</a><br>
//     <a href="URL188">Table Arrangement - How to change the Table Felt Color</a><br>
//     <a href="URL189">Table Arrangement - What are Custom Table Layouts?</a><br>
//     <a href="URL190">Table Arrangement - What happens to my Custom Table Layouts if my screen resolution changes?</a><br>
//     <a href="URL191">Table Arrangement - What is the maximum number of tables I can play at GGPoker?</a><br>
//     <a href="URL192">Table Arrangement - Will my Custom Table Layouts be available across multiple devices?</a><br>
//     <a href="URL193">Table Chat - Can players speak in any language?</a><br>
//     <a href="URL194">Table Function - Sitout/Leave</a><br>
//     <a href="URL195">Table Settings - How to set Auto Rebuy controls</a><br>
//     <a href="URL196">Table backgrounds</a><br>
//     <a href="URL197">Understanding Deal Choice</a><br>
//     <a href="URL198">Understanding Move Table</a><br>
//     <a href="URL199">Understanding Move Table</a><br>
//     <a href="URL200">Understanding Rabbit Hunt</a><br>
//     <a href="URL201">Understanding Show Cards</a><br>
//     <a href="URL202">Understanding Universal Player Note</a><br>
//     <a href="URL203">Voice Message - Can I block Voice Messages?</a><br>
//     <a href="URL204">Voice Message - Can I translate Voice Notes in the client?</a><br>
//     <a href="URL205">Voice Message - Do Voice Messages have the same chat rules as typed notes?</a><br>
//     <a href="URL206">Voice Message - Do Voice Messages have to be in English?</a><br>
//     <a href="URL207">Voice Message - Frequently Asked Questions</a><br>
//     <a href="URL208">Voice Message - How can I report a Voice Message that breaks GGPoker's Table Chat policy?</a><br>
//     <a href="URL209">Voice Message - How do I leave a Voice Message?</a><br>
//     <a href="URL210">Voice Message - I'm trying to leave a Voice Message but it's silent, what is wrong?</a><br>
//     <a href="URL211">Voice Message - What is a Voice Message?</a><br>
//     <a href="URL212">Voice Message - Will Voice Messages play automatically or do I have to click on them?</a><br>
//     <a href="URL213">What does BGM mean? Can I deactivate this?</a><br>
//     <a href="URL214">What is Smart Betting?</a><br>
//     <a href="URL215">Where can Audio Space be used?</a><br>
//     `,

//     pokerCraft: `
//     <a href="URL1">All In Or Fold - Game History</a><br>
//     <a href="URL1">All In Or Fold - Sit & Go - Is my history shown in PokerCraft?</a><br>
//     <a href="URL1">All in or Fold (AoF) - Position</a><br>
//     <a href="URL1">All in or Fold - Download Hand Histories</a><br>
//     <a href="URL1">All-in EV</a><br>
//     <a href="URL1">All-in or Fold (AoF)</a><br>
//     <a href="URL1">All-in or Fold (AoF) - EV Graph</a><br>
//     <a href="URL1">All-in or Fold (AoF) - Luck</a><br>
//     <a href="URL1">All-in or Fold (AoF) - Opponents</a><br>
//     <a href="URL1">All-in or Fold (AoF) Strongest/Weakest positions</a><br>
//     <a href="URL1">All-in or Fold - What does All-in percentage mean?</a><br>
//     <a href="URL1">Are PokerCraft statistics displayed without rake?</a><br>
//     <a href="URL1">Are payments viewable through PokerCraft?</a><br>
//     <a href="URL1">Battle Royale</a><br>
//     <a href="URL1">Battle Royale - Downloading Game Summaries</a><br>
//     <a href="URL1">Battle Royale - Downloading Hand Histories</a><br>
//     <a href="URL1">Battle Royale - Final Average finish</a><br>
//     <a href="URL1">Battle Royale - Game History</a><br>
//     <a href="URL1">Battle Royale - I have played a recent Battle Royale and I want to find a specific hand</a><br>
//     <a href="URL1">Battle Royale - Total Games</a><br>
//     <a href="URL1">Battle Royale - Total Kills</a><br>
//     <a href="URL1">Can I access PokerCraft if I'm not logged into GGPoker?</a><br>
//     <a href="URL1">Can I export hand histories from PokerCraft?</a><br>
//     <a href="URL1">Can I make notes on players in PokerCraft?</a><br>
//     <a href="URL1">Can I request Hand Histories that are not available in Pokercraft?</a><br>
//     <a href="URL1">Can I reset my history?</a><br>
//     <a href="URL1">Can I reset or delete my PokerCraft history?</a><br>
//     <a href="URL1">Can I search by hand winner?</a><br>
//     <a href="URL1">Can I search for players within PokerCraft?</a><br>
//     <a href="URL1">Can I search game histories by Blind level in PokerCraft for PLO5 or PLO6?</a><br>
//     <a href="URL1">Can I search game histories by blind level in PokerCraft for Hold'em?</a><br>
//     <a href="URL1">Can I search game histories by blind level in PokerCraft for PLO?</a><br>
//     <a href="URL1">Can I search hands by hand value?</a><br>
//     <a href="URL1">Can I search hands by hole cards?</a><br>
//     <a href="URL1">Can I search hands quickly from my Hold'em sessions?</a><br>
//     <a href="URL1">Can I search hands quickly from my Omaha (All Variants) sessions?</a><br>
//     <a href="URL1">Can I search just Battle Royale games where I've finished ITM?</a><br>
//     <a href="URL1">Can I search old tournaments from years ago?</a><br>
//     <a href="URL1">Can I see my chat history in Pokercraft?</a><br>
//     <a href="URL1">Can I share my results or data online?</a><br>
//     <a href="URL1">Can I view all player notes at once?</a><br>
//     <a href="URL1">Can I view someone else's PokerCraft?</a><br>
//     <a href="URL1">Can my PokerCraft be viewed by another player?</a><br>
//     <a href="URL1">Can other players view my PokerCraft notes?</a><br>
//     <a href="URL1">Completed Tournaments</a><br>
//     <a href="URL1">Do I need to be logged into GGPoker to view PokerCraft?</a><br>
//     <a href="URL1">Does PokerCraft display rake?</a><br>
//     <a href="URL1">Does the EV graph in Pokercraft include non-showdown hands?</a><br>
//     <a href="URL1">Does the Hand history from PokerCraft show whether a player is sitting out?</a><br>
//     <a href="URL1">Downloading Hand Histories</a><br>
//     <a href="URL1">Hold'em</a><br>
//     <a href="URL1">Hold'em - Best & Worst Hand</a><br>
//     <a href="URL1">Hold'em - Download Hand Histories</a><br>
//     <a href="URL1">Hold'em - Game History</a><br>
//     <a href="URL1">Hold'em - Hole Card Matrix</a><br>
//     <a href="URL1">Hold'em - How can I search a session?</a><br>
//     <a href="URL1">Hold'em - Is there a limit on the number of Hold'em hands I can download on PokerCraft?</a><br>
//     <a href="URL1">Hold'em - Luck</a><br>
//     <a href="URL1">Hold'em - Opponents</a><br>
//     <a href="URL1">Hold'em - Position</a><br>
//     <a href="URL1">Hold'em - Strongest and Weakest position</a><br>
//     <a href="URL1">Hold'em EV Graph</a><br>
//     <a href="URL1">How can I access PokerCraft from the desktop application?</a><br>
//     <a href="URL1">How can I access PokerCraft from the mobile application?</a><br>
//     <a href="URL1">How can I check the hand histories of the hands I have played on Mobile?</a><br>
//     <a href="URL1">Luck Factors - how are they determined?</a><br>
//     <a href="URL1">My Tournaments - Average Buy-in</a><br>
//     <a href="URL1">My Tournaments - Can I search game histories by blind level in PokerCraft for My Tournaments</a><br>
//     <a href="URL1">My Tournaments - Chip Graph</a><br>
//     <a href="URL1">My Tournaments - Download Game Summaries</a><br>
//     <a href="URL1">My Tournaments - Download Hand Histories</a><br>
//     <a href="URL1">My Tournaments - Game History</a><br>
//     <a href="URL1">My Tournaments - Highest Buy-in</a><br>
//     <a href="URL1">My Tournaments - In the Money</a><br>
//     <a href="URL1">My Tournaments - Largest Winning</a><br>
//     <a href="URL1">My Tournaments - Lowest Buy-in</a><br>
//     <a href="URL1">My Tournaments - Summary</a><br>
//     <a href="URL1">My Tournaments - Total Winnings</a><br>
//     <a href="URL1">My Tournaments - Tournament Info</a><br>
//     <a href="URL1">Omaha (All Variants) - Download Hand Histories</a><br>
//     <a href="URL1">Omaha (All Variants) - EV Graph</a><br>
//     <a href="URL1">Omaha (All Variants) - Game History</a><br>
//     <a href="URL1">Omaha (All Variants) - Strongest & Weakest Position</a><br>
//     <a href="URL1">Omaha (All Variants) Summary</a><br>
//     <a href="URL1">Omaha (all variants) - Position</a><br>
//     <a href="URL1">Omaha (all variants)- How can I search a session?</a><br>
//     <a href="URL1">Omaha - Is there a limit on the number of Omaha hands I can download on PokerCraft?</a><br>
//     <a href="URL1">Omaha - Luck</a><br>
//     <a href="URL1">Omaha - Opponents</a><br>
//     <a href="URL1">Omaha - Why can I not find a PLO5 or PLO6 tab in PokerCraft?</a><br>
//     <a href="URL1">Player Stats & Notes</a><br>
//     <a href="URL1">PokerCraft - Battle Royale - How can I search a session?</a><br>
//     <a href="URL1">Rush & Cash - Downloading Hand Histories (Hold'em)</a><br>
//     <a href="URL1">Rush & Cash - Downloading Hand Histories (Omaha)</a><br>
//     <a href="URL1">Rush & Cash - EV Graphs</a><br>
//     <a href="URL1">Rush & Cash - Game History</a><br>
//     <a href="URL1">Rush & Cash - Hole Cards</a><br>
//     <a href="URL1">Rush & Cash - How can I search my RnC Hold'em history?</a><br>
//     <a href="URL1">Rush & Cash - How can I search my RnC Omaha history?</a><br>
//     <a href="URL1">Rush & Cash - Position</a><br>
//     <a href="URL1">Rush & Cash Summary</a><br>
//     <a href="URL1">Short Deck - Best & Worst hands</a><br>
//     <a href="URL1">Short Deck - Download Hand Histories</a><br>
//     <a href="URL1">Short Deck - EV Graph</a><br>
//     <a href="URL1">Short Deck - Game History</a><br>
//     <a href="URL1">Short Deck - Hole Card Matrix</a><br>
//     <a href="URL1">Short Deck - How can I search a session?</a><br>
//     <a href="URL1">Short Deck - Luck</a><br>
//     <a href="URL1">Short Deck - Opponent data</a><br>
//     <a href="URL1">Short Deck - Position</a><br>
//     <a href="URL1">Short Deck - Strongest & Weakest Position</a><br>
//     <a href="URL1">Short Deck Summary</a><br>
//     <a href="URL1">Spin & Gold - Download Game Summaries</a><br>
//     <a href="URL1">Spin & Gold - Downloading Hand Histories</a><br>
//     <a href="URL1">Spin & Gold - Game History</a><br>
//     <a href="URL1">Spin & Gold - How can I find a game I've played?</a><br>
//     <a href="URL1">Spin & Gold - I am selecting multiple Spin & Gold games to review but I get an error? Why?</a><br>
//     <a href="URL1">Spin & Gold - Is there anywhere I can check my Spin & Gold prize history?</a><br>
//     <a href="URL1">Spin & Gold - Summary</a><br>
//     <a href="URL1">Staking Profile - Average Markup</a><br>
//     <a href="URL1">Staking Profile - Can I add pictures to my Staking Profile in PokerCraft?</a><br>
//     <a href="URL1">Staking Profile - Can I delete comments from my Staking Profile on PokerCraft?</a><br>
//     <a href="URL1">Staking Profile - Can I edit my Staking Profile in PokerCraft?</a><br>
//     <a href="URL1">Staking Profile - Comment section/Staking Wall</a><br>
//     <a href="URL1">Staking Profile - ITM %</a><br>
//     <a href="URL1">Staking Profile - In the Money Distribution</a><br>
//     <a href="URL1">Staking Profile - Largest Return</a><br>
//     <a href="URL1">Staking Profile - Number of Profit</a><br>
//     <a href="URL1">Staking Profile - ROI</a><br>
//     <a href="URL1">Staking Profile - Staking History</a><br>
//     <a href="URL1">Staking Profile - Total Action Sold</a><br>
//     <a href="URL1">Staking Profile - Total Investment</a><br>
//     <a href="URL1">Staking Profile - Total Profit</a><br>
//     <a href="URL1">Staking Profile - Total Return</a><br>
//     <a href="URL1">Staking Profile - Total Winnings</a><br>
//     <a href="URL1">Staking Profile - Tournament History</a><br>
//     <a href="URL1">Staking Profile Summary</a><br>
//     <a href="URL1">Timeline - Fish Buffet</a><br>
//     <a href="URL1">Timeline - GGCare & GGCheers</a><br>
//     <a href="URL1">Timeline - Hand Highlights</a><br>
//     <a href="URL1">Timeline - Jackpots</a><br>
//     <a href="URL1">Timeline - Messages</a><br>
//     <a href="URL1">Timeline - My Mission</a><br>
//     <a href="URL1">Timeline - My Promotion</a><br>
//     <a href="URL1">Timeline - Starred</a><br>
//     <a href="URL1">Timeline - Tournaments</a><br>
//     <a href="URL1">Timeline - Transaction History</a><br>
//     <a href="URL1">Timeline - What is the PokerCraft Timeline?</a><br>
//     <a href="URL1">Tournaments - I'm selecting multiple Tournament games to review but I get an error? Why?</a><br>
//     <a href="URL1">Tournaments - Is there a limit on the number of My Tournament hands I can download on PokerCraft?</a><br>
//     <a href="URL1">Understanding Universal Player Note</a><br>
//     <a href="URL1">What is the difference between PokerCraft and a third party tracking software?</a><br>
//     <a href="URL1">What other languages are available in Pokercraft?</a><br>
//     <a href="URL1">What time zone does PokerCraft use?</a><br>
//     <a href="URL1">When do PokerCraft statistics update after play sessions?</a><br>
//     <a href="URL1">Why are my total winnings different on Smart HUD, Staking Profile and PokerCraft?</a><br>
//     <a href="URL1">Why does the number on the Pokercraft EV graph not match my actual results?</a><br>
//     <a href="URL1">Will PokerCraft log disconnections?</a><br>
//     <a href="URL1">Will the notes and labels I make on PokerCraft be visible at the tables?</a><br>
//     `,

//     gameIntegrity: `
//     <a href="URL1">Can I use HUD/tracking software on another site while GGPoker tables are active?</a><br>
//     <a href="URL1">Can I use a poker tracker/Hand 2 Note and/or any HUD?</a><br>
//     <a href="URL1">Can two or more people play on GGPoker from the same house/IP?</a><br>
//     <a href="URL1">How can I report to security a matter requiring investigation?</a><br>
//     <a href="URL1">I am concerned about GGPoker's RNG, is it verified by an entity?</a><br>
//     <a href="URL1">I feel like I am losing too many hands when I have a strong hand. How do I know the game is not fixed?</a><br>
//     `,

//     otherGameRelatedQueries: `
//     <a href="URL1">Final Table Betting - When can I bet on a Final Table?</a><br>
//     <a href="URL1">Play Money</a><br>
//     <a href="URL1">Refunding mis-clicks</a><br>
//     <a href="URL1">Straddle - What is a Straddle?</a><br>
//     <a href="URL1">Table Arrangement - If I have fewer tables open than my Custom Table Layout is for, can I still use it to position these tables?</a><br>
//     <a href="URL1">Understanding The Showdown</a><br>
//     `,

//     howToDeposit: `
//     <a href="URL1">How Can I Withdraw via Banco do Brasil/Bradesco/Caixa/Other Brazil Local Banks?</a><br>
//     <a href="URL2">How can I deposit via Banco do Brasil/Bradesco/Caixa/other Brazil local banks</a><br>
//     <a href="URL3">How can I deposit via Boleto?</a><br>
//     <a href="URL4">How to Deposit Using PaySafeCard</a><br>
//     <a href="URL5">How to Deposit Using Tether USDT (ERC20)</a><br>
//     <a href="URL6">How to Deposit Using Trustly</a><br>
//     <a href="URL7">How to Deposit Using USDC (BEP20)</a><br>
//     <a href="URL8">How to Deposit funds</a><br>
//     <a href="URL9">How to Deposit using Interac</a><br>
//     <a href="URL10">How to Deposit using MuchBetter</a><br>
//     <a href="URL11">How to Deposit using Neteller</a><br>
//     <a href="URL12">How to Deposit using PayPal</a><br>
//     <a href="URL13">How to Deposit using Pix</a><br>
//     <a href="URL14">How to Deposit using Skrill</a><br>
//     <a href="URL15">How to Deposit using Volt Wire Transfer</a><br>
//     <a href="URL16">How to Deposit using ecoPayz</a><br>
//     <a href="URL17">How to Place a Deposit</a><br>
//     <a href="URL18">How to deposit using MiFinity e-wallet?</a><br>
//     <a href="URL19">How to deposit using Pay4Fun e-Wallet</a>
//     `,

//     otherDepositQueries: `
//     <a href="URL20">AstroPay Document ID - What does this mean?</a><br>
//     <a href="URL21">Available Payment Methods</a><br>
//     <a href="URL22">BTC amount Received seems Wrong</a><br>
//     <a href="URL23">Can I Use a Prepaid Credit Card Gift Card?</a><br>
//     <a href="URL24">Can I deposit in Local Currency?</a><br>
//     <a href="URL25">Can I deposit in one Cryptocurrency and withdraw in another?</a><br>
//     <a href="URL26">Can I deposit or receive withdrawals on my Astropay Card?</a><br>
//     <a href="URL27">Can I use someone else's card to deposit funds?</a><br>
//     <a href="URL28">Cancellation of Deposit</a><br>
//     <a href="URL29">Credit Card Transaction and Posting Date Explained</a><br>
//     <a href="URL30">CryptoCurrency Transaction Errors</a><br>
//     <a href="URL31">Deposit Failure with EcoPayz?</a><br>
//     <a href="URL32">Deposit via Card suddenly not working</a><br>
//     <a href="URL33">Deposits - Processing Time</a><br>
//     <a href="URL34">Deposits via Vanilla (Pre-paid) Cards</a><br>
//     <a href="URL35">Does my card work?</a><br>
//     <a href="URL36">Duplicate Card Transactions</a><br>
//     <a href="URL37">Fees and Limits</a><br>
//     <a href="URL38">GWErrorCode: -1100</a><br>
//     <a href="URL39">How do I update my Credit Card Details?</a><br>
//     <a href="URL40">How long does it take for Interac transfers?</a><br>
//     <a href="URL41">How long does it take for the Interac refund?</a><br>
//     <a href="URL42">How long does it take to see a deposit made with debit/credit card on my account?</a><br>
//     <a href="URL43">How to View Reasons for Failed Deposit Transactions</a><br>
//     <a href="URL44">I cannot see any deposit or withdrawal options in my cashier. Why?</a><br>
//     <a href="URL45">Interac is not loading, what can I do?</a><br>
//     <a href="URL46">Locating the Interac Reference Number</a><br>
//     <a href="URL47">LuxonPay - Exchange Currencies</a><br>
//     <a href="URL48">Missing deposit</a><br>
//     <a href="URL49">MuchBetter Country Code Requirements</a><br>
//     <a href="URL50">My Card deposit was declined, why is this?</a><br>
//     <a href="URL51">My Credit/Debit Card was Charged but I Can’t See Money on my Account?</a><br>
//     <a href="URL52">My Deposit was Unsuccessful Due to “Do Not Honor” Error?</a><br>
//     <a href="URL53">My deposit via debit/credit card was unsuccessful, why?</a><br>
//     <a href="URL54">My deposit was unsuccessful due to 3D Authentication error (Card)</a><br>
//     <a href="URL55">Neteller (Payment Handle) error</a><br>
//     <a href="URL56">Neteller Verification Code</a><br>
//     <a href="URL57">Payment Service & (not credited) Transaction Confirmation</a><br>
//     <a href="URL58">Skrill/Neteller: Insufficient Funds</a><br>
//     <a href="URL59">Transaction Not Permitted to CardHolder</a><br>
//     <a href="URL60">Using Neteller to fund your GGPoker account</a><br>
//     <a href="URL61">Using Skrill to fund your GGPoker account</a><br>
//     <a href="URL62">What Cryptocurrencies does GGPoker accept?</a><br>
//     <a href="URL63">What are the Available Payment Options in my Country?</a><br>
//     <a href="URL64">What are the exchange rates when depositing?</a><br>
//     <a href="URL65">What are the payment methods available in my country?</a><br>
//     <a href="URL66">Why Haven’t I Received my Deposit Yet?</a><br>
//     <a href="URL67">Why The Exchange Rate You See Is Different To Google</a><br>
//     <a href="URL68">Why did my Deposit Fail to Process?</a><br>
//     <a href="URL69">Why was I charged a fee on deposit?</a><br>
//     <a href="URL70">Why was my Interac deposit declined?</a>
//     `,

//     howToWithdraw: `
//     <a href="URL1">How can I withdraw via local Mexican bank?</a><br>
//     <a href="URL2">How to Request a Withdrawal</a><br>
//     <a href="URL3">How to Withdraw Money Using PayPal?</a><br>
//     <a href="URL4">How to Withdraw Using Bitcoin</a><br>
//     <a href="URL5">How to Withdraw Using Trustly</a><br>
//     <a href="URL6">How to Withdraw Using USDC (BEP20)</a><br>
//     <a href="URL7">How to withdraw via Interac</a>
//     `,

//     otherWithdrawalQueries: `
//     <a href="URL8">Are My Online Transactions Secure?</a><br>
//     <a href="URL9">Available Payment Methods</a><br>
//     <a href="URL10">Balance Withdrawal Requirement</a><br>
//     <a href="URL11">CFT (Credit Funds Transfer) Enabled Card</a><br>
//     <a href="URL12">Can I deposit in one Cryptocurrency and withdraw in another?</a><br>
//     <a href="URL13">Can I deposit or receive withdrawals on my Astropay Card?</a><br>
//     <a href="URL14">Can I process multiple withdrawals simultaneously?</a><br>
//     <a href="URL15">Credit Card Transaction and Posting Date Explained</a><br>
//     <a href="URL16">Fees and Limits</a><br>
//     <a href="URL17">How Long Will My Withdrawal Take?</a><br>
//     <a href="URL18">How long does it take for Interac transfers?</a><br>
//     <a href="URL19">How many withdrawal requests can I have pending at once?</a><br>
//     <a href="URL20">I cannot see any deposit or withdrawal options in my cashier. Why?</a><br>
//     <a href="URL21">Interac is not loading, what can I do?</a><br>
//     <a href="URL22">My withdrawal is pending - what does this mean?</a><br>
//     <a href="URL23">My withdrawal states TBD - what does this mean?</a><br>
//     <a href="URL24">Payment Service & (not credited) Transaction Confirmation</a><br>
//     <a href="URL25">Tax Information (Withdrawals)</a><br>
//     <a href="URL26">What Cryptocurrencies does GGPoker accept?</a><br>
//     <a href="URL27">What are the Available Payment Options in my Country?</a><br>
//     <a href="URL28">Where to Find the Reason for Rejected Withdrawal</a><br>
//     <a href="URL29">Why Haven’t I Received my Withdrawal Yet?</a><br>
//     <a href="URL30">Why Is My Withdrawal Failing?</a><br>
//     <a href="URL31">Why The Exchange Rate You See Is Different To Google</a><br>
//     <a href="URL32">Why did my Withdrawal Fail?</a><br>
//     <a href="URL33">Why was my Withdrawal Rejected?</a><br>
//     <a href="URL34">Withdrawal Processing Time</a><br>
//     <a href="URL35">Withdrawals via Paysafecard</a><br>
//     <a href="URL36">Withdrawing after a player to player transfer</a><br>
//     <a href="URL37">Withdrawing without verifying</a>
//     `,

//     transactionHistory: `
//     <a href="URL1">How do I Check my Deposit and Withdrawal Transaction History?</a><br>
//     <a href="URL2">Payment History (Deposits/Withdrawals, etc.)</a>
//     `,

//     transfersQueries: `
//     <a href="URL3">Can I withdraw transferred (P2P) Funds?</a><br>
//     <a href="URL4">Player to Player transfers (Cash)</a><br>
//     <a href="URL5">Transferring C$</a><br>
//     <a href="URL6">Transferring T$</a><br>
//     <a href="URL7">Withdrawing after a player to player transfer</a>
//     `,

//     tCurrency: `
//     <a href="URL8">Tournament Dollars (T$) - Summary</a><br>
//     <a href="URL9">Transferring T$</a>
//     `,

//     cCurrency: `
//     <a href="URL10">C$ - Cash Game Dollars FAQ</a><br>
//     <a href="URL11">Cash Dollars (C$) - Summary</a><br>
//     <a href="URL12">Games in different currencies</a><br>
//     <a href="URL13">Transferring C$</a>
//     `,

//     tickets: `
//     <a href="URL14">Cash Game Tickets - Frequently Asked Questions</a><br>
//     <a href="URL15">How to check your tickets</a><br>
//     <a href="URL16">I have a ticket and would like to convert it to cash. Is this possible?</a><br>
//     <a href="URL17">I have a ticket that states it is irredeemable - why is this?</a><br>
//     <a href="URL18">Ticket Redeem Feature</a><br>
//     <a href="URL19">Tickets - Summary</a><br>
//     <a href="URL20">Transferring tournament tickets</a><br>
//     <a href="URL21">Where can I view my tickets expiration dates</a>
//     `,

//     otherCashierQueries: `
//     <a href="URL22">Are My Online Transactions Secure?</a><br>
//     <a href="URL23">My Cashier page is not loading</a><br>
//     <a href="URL24">Will I have to send Credit Card details through email?</a>
//     `,

//     connectionIssues: `
//     <a href="URL25">App Crashes/Freezing - Frequently Asked Questions</a><br>
//     <a href="URL26">Can I check the status of my network connection from within the poker client?</a><br>
//     <a href="URL27">Connection Issues and DNS Settings</a><br>
//     <a href="URL28">GGPoker is not loading correctly</a><br>
//     <a href="URL29">How to know if my connection is bad</a><br>
//     <a href="URL30">My Rush & Cash table/s are not closing. How can I fix this?</a><br>
//     <a href="URL31">Service issues - July 1st 2024</a><br>
//     <a href="URL32">Table problems resulting from app slowness</a><br>
//     <a href="URL33">What do I do when I have reason to believe that the chips on the table were not returned to my account upon leaving the table?</a><br>
//     <a href="URL34">What happens when I disconnect while involved in a hand?</a><br>
//     <a href="URL35">What happens when the software becomes unresponsive and I am not able to enter the tournament?</a><br>
//     <a href="URL36">What is BRAND INTERNAL ERROR?</a><br>
//     <a href="URL37">Why are some of my tables not working while others are running properly?</a>
//     `,

//     downloadInstallation: `
//     <a href="URL1">Can I use Android Emulator on GGPoker?</a><br>
//     <a href="URL2">Can I use GGPoker if I am running Windows 7</a><br>
//     <a href="URL3">Collision with anti-virus program</a><br>
//     <a href="URL4">How to Download and Install the Poker Client for Mac</a><br>
//     <a href="URL5">How to Download and Install the Poker Client for Windows</a><br>
//     <a href="URL6">How to Install the Mobile app onto my Android device</a>
//     `,

//     windowsClient: `
//     <a href="URL7">AMD Radeon graphic card driver issue [Black Screen]</a><br>
//     <a href="URL8">After updating the software, my anti-virus program states that it has found a Trojan. How can I resolve this?</a><br>
//     <a href="URL9">Can I continue playing my game if I switch between mobile and desktop apps? How do I switch from mobile to computer and vice versa?</a><br>
//     <a href="URL10">Can I use GGPoker if I am running Windows 7</a><br>
//     <a href="URL11">Collision with anti-virus program</a><br>
//     <a href="URL12">Does GGPoker support 'virtual machine'?</a><br>
//     <a href="URL13">Fatal Error - Fail to Rename DST</a><br>
//     <a href="URL14">Flushing DNS [Windows 10]</a><br>
//     <a href="URL15">GGPoker device specifications, requirements and play suggestions (Windows)</a><br>
//     <a href="URL16">How to Clear temporary files on Windows</a><br>
//     <a href="URL17">How to Download and Install the Poker Client for Windows</a><br>
//     <a href="URL18">How to Record your screen on your Windows PC or Mac</a><br>
//     <a href="URL19">How to clear Browser Cache on Windows</a><br>
//     <a href="URL20">My AntiVirus is blocking GGPoker</a><br>
//     <a href="URL21">Performing a clean installation (Windows)</a><br>
//     <a href="URL22">Taking a screenshot on a PC (Desktop)</a><br>
//     <a href="URL23">The tournament list is not displaying in the relevant colours. Can this be fixed?</a><br>
//     <a href="URL24">What is Error Code: 2503?</a><br>
//     <a href="URL25">What are the minimum system requirements / specifications for GGPoker?</a>
//     `,

//     macOSClient: `
//     <a href="URL26">Collision with anti-virus program</a><br>
//     <a href="URL27">Does GGPoker support 'virtual machine'?</a><br>
//     <a href="URL28">GGPoker device specifications, requirements and play suggestions (Mac)</a><br>
//     <a href="URL29">How to Download and Install the Poker Client for Mac</a><br>
//     <a href="URL30">How to Record your screen on your Windows PC or Mac</a><br>
//     <a href="URL31">How to clear Browser Cache on Mac</a><br>
//     <a href="URL32">My AntiVirus is blocking GGPoker</a><br>
//     <a href="URL33">Taking a screenshot on Apple device</a><br>
//     <a href="URL34">Taking a screenshot on a PC (Desktop)</a>
//     `,

//     androidApp: `
//     <a href="URL35">Can I continue playing my game if I switch between mobile and desktop apps? How do I switch from mobile to computer and vice versa?</a><br>
//     <a href="URL36">Can I turn off Haptic and Push notifications on mobile?</a><br>
//     <a href="URL37">Can I use Android Emulator on GGPoker?</a><br>
//     <a href="URL38">Does GGPoker offer a landscape mode</a><br>
//     <a href="URL39">GGPoker device specifications, requirements and play suggestions (Android)</a><br>
//     <a href="URL40">How to Install the Mobile app onto my Android device</a><br>
//     <a href="URL41">My AntiVirus is blocking GGPoker</a><br>
//     <a href="URL42">Outdated Android App</a><br>
//     <a href="URL43">Taking a screenshot on an Android Device</a><br>
//     <a href="URL44">What are the minimum system requirements / specifications for GGPoker?</a><br>
//     <a href="URL45">What is the connection stability like while using your mobile app?</a>
//     `,

//     iOSApp: `
//     <a href="URL46">Can I continue playing my game if I switch between mobile and desktop apps? How do I switch from mobile to computer and vice versa?</a><br>
//     <a href="URL47">Can I turn off Haptic and Push notifications on mobile?</a><br>
//     <a href="URL48">Deleting Your Account Via The iOS App</a><br>
//     <a href="URL49">Does GGPoker offer a landscape mode</a><br>
//     <a href="URL50">GGPoker device specifications, requirements and play suggestions (IOS)</a><br>
//     <a href="URL51">My AntiVirus is blocking GGPoker</a><br>
//     <a href="URL52">Taking a screenshot on Apple device</a><br>
//     <a href="URL53">What are the minimum system requirements / specifications for GGPoker?</a><br>
//     <a href="URL54">What is the connection stability like while using your mobile app?</a>
//     `,

//     gameCancellationRefundPolicy: `
//     <a href="URL1">My internet connection cut-off during a tournament and I could not get it working again. Will you reimburse my tournament buy-in?</a><br>
//     <a href="URL2">Understanding Game Cancellation, Interruption and Refund Policy</a>
//     `,

//     otherTechnicalQueries: `
//     <a href="URL3">After updating the software, my anti-virus program states that it has found a Trojan. How can I resolve this?</a><br>
//     <a href="URL4">Can I check the status of my network connection from within the poker client?</a><br>
//     <a href="URL5">Can I continue playing my game if I switch between mobile and desktop apps? How do I switch from mobile to computer and vice versa?</a><br>
//     <a href="URL6">Can I run the GGPoker app on Chromebook?</a><br>
//     <a href="URL7">Can I use Android Emulator on GGPoker?</a><br>
//     <a href="URL8">Can I use GGPoker if I am running Windows 7</a><br>
//     <a href="URL9">Collision with anti-virus program</a><br>
//     <a href="URL10">How to check my GGPoker app version</a><br>
//     <a href="URL11">How to fix pixelated client display</a><br>
//     <a href="URL12">How to solve ERROR_LOGIN_FAILED</a><br>
//     <a href="URL13">I see an error Failed to Patch. How can I resolve this?</a><br>
//     <a href="URL14">I tried updating the app but it keeps saying "Failed to update". What should I do?</a><br>
//     <a href="URL15">Table tiling issues</a><br>
//     <a href="URL16">Updating App keeps failing</a><br>
//     <a href="URL17">What do I do when my player notes are missing?</a><br>
//     <a href="URL18">What does a weak network status test result indicate?</a><br>
//     <a href="URL19">Where can I know about scheduled maintenance in advance?</a><br>
//     <a href="URL20">Why is the audio only working with headphones?</a>
//     `,

//     fishBuffet: `
//     <a href="URL21">Crab Level - Frequently Asked Questions</a><br>
//     <a href="URL22">Fish Buffet - Can I switch from Fish Buffet to Platinum Fish Buffet?</a><br>
//     <a href="URL23">Fish Buffet - Can I view my Fish Buffet History anywhere?</a><br>
//     <a href="URL24">Fish Buffet - Crab - Do I have to clear each tier individually?</a><br>
//     <a href="URL25">Fish Buffet - Crab - Do I receive a wheel spin for completing each tier or just when I complete Gold Crab?</a><br>
//     <a href="URL26">Fish Buffet - Crab - How many points do I have to earn to complete a tier?</a><br>
//     <a href="URL27">Fish Buffet - Crab - How much time do I have to earn the 12,000 Fish Points to move up?</a><br>
//     <a href="URL28">Fish Buffet - Crab - I am currently a "Crab" on the Fish Buffet - If I switch to Platinum Ranks - what level will I become?</a><br>
//     <a href="URL29">Fish Buffet - Crab - I did not make the required points to move up - what happens?</a><br>
//     <a href="URL30">Fish Buffet - Crab - I've completed Gold Crab and have been rewarded my cashback - what happens now?</a><br>
//     <a href="URL31">Fish Buffet - Crab - What are the rewards available on the Crab wheel?</a><br>
//     <a href="URL32">Fish Buffet - Do I get Fish Points (FPs) if a tournament overlays?</a><br>
//     <a href="URL33">Fish Buffet - Do I get Fish Points for buying another player's action?</a><br>
//     <a href="URL34">Fish Buffet - Do I have to opt-in for the Fish Buffet?</a><br>
//     <a href="URL35">Fish Buffet - Does each level only have one tier?</a><br>
//     <a href="URL36">Fish Buffet - Does selling my action result in amendments to the rate of Fish Point assignment?</a><br>
//     <a href="URL37">Fish Buffet - Fish Buffet levels</a><br>
//     <a href="URL38">Fish Buffet - Frequently Asked Questions</a><br>
//     <a href="URL39">Fish Buffet - Goldfish - How many points do I need to earn to get promoted to Bronze Shrimp?</a><br>
//     <a href="URL40">Fish Buffet - Goldfish - How much time do I have to earn the 1,500 Fish Points to move up to Bronze Shrimp?</a><br>
//     <a href="URL41">Fish Buffet - Goldfish - I did not make the required points to move up - what happens?</a><br>
//     <a href="URL42">Fish Buffet - Goldfish - I've completed it and have been rewarded my cashback - what happens now?</a><br>
//     <a href="URL43">Fish Buffet - Goldfish - What are the rewards available on the Goldfish wheel?</a><br>
//     <a href="URL44">Fish Buffet - How are Fish Points generated?</a><br>
//     <a href="URL45">Fish Buffet - How can I check my current Fish Buffet status?</a><br>
//     <a href="URL46">Fish Buffet - How do I move up the levels of the Fish Buffet?</a><br>
//     <a href="URL47">Fish Buffet - How do I switch from Fish Buffet to Platinum Fish Buffet?</a><br>
//     <a href="URL48">Fish Buffet - How do I switch from Platinum Fish Buffet to Fish Buffet?</a><br>
//     <a href="URL49">Fish Buffet - How does the reward system work on the regular Fish Buffet?</a><br>
//     <a href="URL50">Fish Buffet - How many Fish Points do I receive in casino games?</a><br>
//     <a href="URL51">Fish Buffet - I accidentally switched from Platinum Fish Buffet to Fish Buffet</a><br>
//     <a href="URL52">Fish Buffet - I am not going to reach my Fish Point target for the next level/tier - can my rewards be paid out earlier?</a><br>
//     <a href="URL53">Fish Buffet - I did not make the required points to reach the next level/tier - what happens now?</a><br>
//     <a href="URL54">Fish Buffet - I'm playing Rush & Cash and my Fish Points are not increasing - why is this?</a><br>
//     <a href="URL55">Fish Buffet - I've completed a Fish Buffet level/tier - what happens next?</a><br>
//     <a href="URL56">Fish Buffet - I've just exited a tournament - but my Fish Points did not update - why is this?</a><br>
//     <a href="URL57">Fish Buffet - I've moved from Fish Buffet to Platinum - I have not received my rewards - why is this?</a><br>
//     <a href="URL58">Fish Buffet - I've received a message that I have a Fish Buffet spin but I did not click it - what happens now?</a><br>
//     <a href="URL59">Fish Buffet - Is the Fish Buffet promotion available to all players?</a><br>
//     <a href="URL60">Fish Buffet - Octopus - How much time do I have to earn the 60,000 Fish Points to move up?</a><br>
//     <a href="URL61">Fish Buffet - Octopus - Do I have to clear each tier individually?</a><br>
//     <a href="URL62">Fish Buffet - Octopus - Do I receive a wheel spin for completing each tier or just when I complete Gold Octopus?</a><br>
//     <a href="URL63">Fish Buffet - Octopus - How many points do I have to earn to complete a tier?</a><br>
//     <a href="URL64">Fish Buffet - Octopus - I am currently an "Octopus" on the Fish Buffet - If I switch to Platinum Ranks - what level will I become?</a><br>
//     <a href="URL65">Fish Buffet - Octopus - I did not make the required points to move up - what happens?</a><br>
//     <a href="URL66">Fish Buffet - Octopus - I've completed Gold Octopus and have been rewarded my cashback - what happens now?</a><br>
//     <a href="URL67">Fish Buffet - Octopus - What are the rewards available on the Octopus wheel?</a><br>
//     <a href="URL68">Fish Buffet - Plankton - How many points do I need to earn to get promoted to Goldfish?</a><br>
//     <a href="URL69">Fish Buffet - Plankton - How much time do I have to earn the 750 Fish Points to move up to Goldfish?</a><br>
//     <a href="URL70">Fish Buffet - Plankton - I did not make the required points to move up - what happens?</a><br>
//     <a href="URL71">Fish Buffet - Plankton - I've completed it and have been rewarded my cashback - what happens now?</a><br>
//     <a href="URL72">Fish Buffet - Plankton - What are the rewards available on the Plankton wheel?</a><br>
//     <a href="URL73">Fish Buffet - Shrimp - Do I have to clear each tier individually?</a><br>
//     <a href="URL74">Fish Buffet - Shrimp - Do I receive a wheel spin for completing each tier or just when I complete Gold Shrimp?</a><br>
//     <a href="URL75">Fish Buffet - Shrimp - How many points do I have to earn to complete a tier?</a><br>
//     <a href="URL76">Fish Buffet - Shrimp - How much time do I have to earn the 6,000 Fish Points to move up?</a><br>
//     <a href="URL77">Fish Buffet - Shrimp - I am currently a "Shrimp" on the Fish Buffet - If I switch to Platinum Ranks - what level will I become?</a><br>
//     <a href="URL78">Fish Buffet - Shrimp - I did not make the required points to move up - what happens?</a><br>
//     <a href="URL79">Fish Buffet - Shrimp - I've completed Gold Shrimp and have been rewarded my cashback - what happens now?</a><br>
//     <a href="URL80">Fish Buffet - Shrimp - What are the rewards available on the Shrimp wheel?</a><br>
//     <a href="URL81">Fish Buffet - Summary</a><br>
//     <a href="URL82">Fish Buffet - Whale - Do I have to clear each tier and sub-tier individually?</a><br>
//     <a href="URL83">Fish Buffet - Whale - Do I receive a wheel spin for completing each tier or just when I complete Gold Whale 1?</a><br>
//     <a href="URL84">Fish Buffet - Whale - How many points do I have to earn to complete a sub-tier?</a><br>
//     <a href="URL85">Fish Buffet - Whale - How much time do I have to earn the 120,000 Fish Points to move up?</a><br>
//     <a href="URL86">Fish Buffet - Whale - I am currently a "Whale" on the Fish Buffet - If I switch to Platinum Ranks - what level will I become?</a><br>
//     <a href="URL87">Fish Buffet - Whale - I did not make the required points to move up - what happens?</a><br>
//     <a href="URL88">Fish Buffet - Whale - I've completed Gold Whale 1 and have been moved to Platinum Shark - what happened to my wheel spin?</a><br>
//     <a href="URL89">Fish Buffet - Whale - What are the rewards available on the Whale wheel?</a><br>
//     <a href="URL90">Fish Buffet - What does average cashback mean?</a><br>
//     <a href="URL91">Fish Buffet - What happens if I do not spin the Fish Buffet wheel - does it expire?</a><br>
//     <a href="URL92">Fish Buffet - What happens if I switch from Fish Buffet to Platinum Fish Buffet?</a><br>
//     <a href="URL93">Fish Buffet - What happens if I switch from Platinum Fish to the Fish Buffet?</a><br>
//     <a href="URL94">Fish Buffet - What is the Fish Buffet?</a><br>
//     <a href="URL95">Fish Buffet - What time zone is my Fish Buffet displayed in?</a><br>
//     <a href="URL96">Fish Buffet - What time zone is my Platinum Fish Buffet displayed in?</a><br>
//     <a href="URL97">GGPlatinum - Frequently Asked Questions</a><br>
//     <a href="URL98">GGPlatinum - How can I become GGPlatinum?</a><br>
//     <a href="URL99">GGPlatinum - How long does GGPlatinum last?</a><br>
//     <a href="URL100">Goldfish Level - Frequently Asked Questions</a><br>
//     <a href="URL101">Is it possible to collect my Fish Buffet rewards early upon request?</a><br>
//     <a href="URL102">My tournament was cancelled due to a tech issue, do I still get Fish Buffet points?</a><br>
//     <a href="URL103">Octopus Level - Frequently Asked Questions</a><br>
//     <a href="URL104">Plankton Level - Frequently Asked Questions</a><br>
//     <a href="URL105">Platinum - Can I climb Platinum Ranks?</a><br>
//     <a href="URL106">Platinum - Can I save my Platinum Rewards or must they be collected?</a><br>
//     <a href="URL107">Platinum - Can I switch from a Platinum Rank to Fish Buffet?</a><br>
//     <a href="URL108">Platinum - Can I view my Platinum Fish Buffet History anywhere?</a><br>
//     <a href="URL109">Platinum - How can I become a Platinum Fish?</a><br>
//     <a href="URL110">Platinum - How can I become a Platinum Octopus?</a><br>
//     <a href="URL111">Platinum - How does the reward system work on the Platinum Fish Buffet?</a><br>
//     <a href="URL112">Platinum - What are the Platinum Ranks?</a><br>
//     <a href="URL113">Platinum - What happens to my saved Platinum Rewards if I get promoted or demoted?</a><br>
//     <a href="URL114">Platinum - What is the Platinum Fish Buffet?</a><br>
//     <a href="URL115">Platinum - When are the Platinum Rewards paid?</a><br>
//     <a href="URL116">Platinum Fish - Frequently Asked Questions</a><br>
//     <a href="URL117">Platinum Fish Buffet - Frequently Asked Questions</a><br>
//     <a href="URL118">Platinum Fish Buffet - GGPlatinum - How much cashback do I receive at GGPlatinum?</a><br>
//     <a href="URL119">Platinum Fish Buffet - GGPlatinum - What happens if I don't earn the 5,000,000 FPs to retain GGPlatinum?</a><br>
//     <a href="URL120">Platinum Fish Buffet - Platinum Fish - How long does Platinum Fish status last for?</a><br>
//     <a href="URL121">Platinum Fish Buffet - Platinum Fish - How much cashback do I receive at Platinum Fish?</a><br>
//     <a href="URL122">Platinum Fish Buffet - Platinum Fish - I am currently Platinum Fish - I want to become Platinum Octopus - how can I do this?</a><br>
//     <a href="URL123">Platinum Fish Buffet - Platinum Fish - I've switched from Platinum Fish to the Fish Buffet but I did not receive any rewards - why is this?</a><br>
//     <a href="URL124">Platinum Fish Buffet - Platinum Fish - I've switched from Platinum Fish to the Fish Buffet but my Fish Points have gone - why is this?</a><br>
//     <a href="URL125">Platinum Fish Buffet - Platinum Octopus - How long does Platinum Octopus last?</a><br>
//     <a href="URL126">Platinum Fish Buffet - Platinum Octopus - How much cashback do I receive at Platinum Octopus?</a><br>
//     <a href="URL127">Platinum Fish Buffet - Platinum Octopus - I am currently Platinum Octopus - I want to become Platinum Whale - how can I do this?</a><br>
//     <a href="URL128">Platinum Fish Buffet - Platinum Octopus - I've switched from Platinum Octopus to the Fish Buffet but I did not receive my rewards - why is this?</a><br>
//     <a href="URL129">Platinum Fish Buffet - Platinum Octopus - I've switched from Platinum Octopus to the Fish Buffet but my Fish Points have gone - why is this?</a><br>
//     <a href="URL130">Platinum Fish Buffet - Platinum Octopus - What happens if I switch from Platinum Octopus to the Fish Buffet?</a><br>
//     <a href="URL131">Platinum Fish Buffet - Platinum Octopus - What happens when I reach the 750,000 FPs at Platinum Octopus?</a><br>
//     <a href="URL132">Platinum Fish Buffet - Platinum Shark - Can I climb from Platinum Shark to GGPlatinum?</a><br>
//     <a href="URL133">Platinum Fish Buffet - Platinum Shark - How can I become Platinum Shark?</a><br>
//     <a href="URL134">Platinum Fish Buffet - Platinum Shark - How long does Platinum Shark last?</a><br>
//     <a href="URL135">Platinum Fish Buffet - Platinum Shark - How much cashback do I receive at Platinum Shark?</a><br>
//     <a href="URL136">Platinum Fish Buffet - Platinum Shark - I've earned the 3,000,000 FPs to retain Platinum Shark - what happens next?</a><br>
//     <a href="URL137">Platinum Fish Buffet - Platinum Shark - What happens if I don't earn the 3,000,000 FPs to retain Platinum Shark?</a><br>
//     <a href="URL138">Platinum Fish Buffet - Platinum Whale - Can I climb from Platinum Whale to Platinum Shark?</a><br>
//     <a href="URL139">Platinum Fish Buffet - Platinum Whale - How can I become Platinum Whale?</a><br>
//     <a href="URL140">Platinum Fish Buffet - Platinum Whale - How long does Platinum Whale last?</a><br>
//     <a href="URL141">Platinum Fish Buffet - Platinum Whale - How much cashback do I receive at Platinum Whale?</a><br>
//     <a href="URL142">Platinum Fish Buffet - Platinum Whale - I've earned the 1,500,000 FPs to retain Platinum Whale - what happens next?</a><br>
//     <a href="URL143">Platinum Fish Buffet - Platinum Whale - What happens if I don't earn the 1,500,000 FPs to retain Platinum Whale?</a><br>
//     <a href="URL144">Platinum Fish Buffet - Summary</a><br>
//     <a href="URL145">Platinum Octopus - Frequently Asked Questions</a><br>
//     <a href="URL146">Platinum Shark - Frequently Asked Questions</a><br>
//     <a href="URL147">Platinum Whale - Frequently Asked Questions</a><br>
//     <a href="URL148">Shrimp Level - Frequently Asked Questions</a><br>
//     <a href="URL149">Whale Level - Frequently Asked Questions</a>
//     `,

//     honeymoonForNewcomers:`
//     <a href="URL1">Honeymoon - Are there any tournament types that I cannot use to complete a mission?</a><br>
//     <a href="URL2">Honeymoon - Can I opt-in whenever I want?</a><br>
//     <a href="URL3">Honeymoon - Can I use any game to complete any mission?</a><br>
//     <a href="URL4">Honeymoon - Do I have to participate?</a><br>
//     <a href="URL5">Honeymoon - Do Speed Racer tournaments count towards finishing the Bounty Hunters tournament mission?</a><br>
//     <a href="URL6">Honeymoon - Frequently Asked Questions</a><br>
//     <a href="URL7">Honeymoon - How can I be sure I am using the right game type?</a><br>
//     <a href="URL8">Honeymoon - How do I opt-in for the Honeymoon?</a><br>
//     <a href="URL9">Honeymoon - How long are reward tickets valid?</a><br>
//     <a href="URL10">Honeymoon - How long does the Honeymoon promotion last?</a><br>
//     <a href="URL11">Honeymoon - How will I know when a mission has been completed?</a><br>
//     <a href="URL12">Honeymoon - I am not able to play on a particular day, can I try that mission again tomorrow?</a><br>
//     <a href="URL13">Honeymoon - I cannot find this opt-in bubble - why is this?</a><br>
//     <a href="URL14">Honeymoon - I did not start my Honeymoon within the first 30 days, can it be manually reset?</a><br>
//     <a href="URL15">Honeymoon - I opted in but I didn't get 24 hours to complete my first mission, why is this?</a><br>
//     <a href="URL16">Honeymoon - I think I completed a mission but it's saying I failed, is there anywhere I can check?</a><br>
//     <a href="URL17">Honeymoon - If I miss a day, does that mean I cannot continue with the promotion?</a><br>
//     <a href="URL18">Honeymoon - If one of my reward tickets expires can I get a replacement?</a><br>
//     <a href="URL19">Honeymoon - If the site goes down for maintenance, do I get extra time to complete my mission?</a><br>
//     <a href="URL20">Honeymoon - Is the same Honeymoon mission given to all players, or randomized individually?</a><br>
//     <a href="URL21">Honeymoon - It says on the webpage that missions will be 'easy' is this true?</a><br>
//     <a href="URL22">Honeymoon - My Mission game type is 'Short Deck', what games can I play to complete this mission?</a><br>
//     <a href="URL23">Honeymoon - My mission game type is 'All-In Or Fold' - Sit & Go What games can I play to complete this mission?</a><br>
//     <a href="URL24">Honeymoon - My mission game type is 'AoF Holdem', what games can I play to complete this mission?</a><br>
//     <a href="URL25">Honeymoon - My mission game type is 'AoF PLO', what games can I play to complete this mission?</a><br>
//     <a href="URL26">Honeymoon - My mission game type is 'Flip & Go', what games can I play to complete this mission?</a><br>
//     <a href="URL27">Honeymoon - My mission game type is 'Hold'em', what games can I play to complete this mission?</a><br>
//     <a href="URL28">Honeymoon - My mission game type is 'Mystery Battle Royale', what games can I play to complete this mission?</a><br>
//     <a href="URL29">Honeymoon - My mission game type is 'PLO' what games can I play to complete this mission?</a><br>
//     <a href="URL30">Honeymoon - My mission game type is 'Rush & Cash', what games can I play to complete this mission?</a><br>
//     <a href="URL31">Honeymoon - My mission game type is 'Spin & Gold', what games can I play to complete this mission?</a><br>
//     <a href="URL32">Honeymoon - My mission game type is 'Tournament' what games can I play to complete this mission?</a><br>
//     <a href="URL33">Honeymoon - My mission is to win at showdown with a specific hand - what games can I play to complete this mission?</a><br>
//     <a href="URL34">Honeymoon - My mission today is to win a tournament, can I play in a satellite?</a><br>
//     <a href="URL35">Honeymoon - Summary</a><br>
//     <a href="URL36">Honeymoon - Terms and Conditions</a><br>
//     <a href="URL37">Honeymoon - What are some sample Honeymoon missions?</a><br>
//     <a href="URL38">Honeymoon - What are the rewards I can get for completing missions?</a><br>
//     <a href="URL39">Honeymoon - What happens when I opt in?</a><br>
//     <a href="URL40">Honeymoon - What is Honeymoon for Newcomers?</a><br>
//     <a href="URL41">Honeymoon - When does a 'day' run from and to?</a><br>
//     <a href="URL42">Honeymoon - When playing cash-based games to complete a mission, can I Run It Multiple Times?</a><br>
//     <a href="URL43">Honeymoon - When playing in cash-based games to complete a mission, can I play at any blind level?</a><br>
//     <a href="URL44">Honeymoon - When playing in cash-based games to complete a mission, do I have to use both hole cards?</a><br>
//     <a href="URL45">Honeymoon - Will making a withdrawal end my Honeymoon promotion?</a><br>
//     `,

//     welcomeBonus:`
//     <a href="URL1">Does GGPoker offer a Welcome Bonus to new players?</a><br>
//     <a href="URL2">I selected one Welcome Bonus offer but I have changed my mind, can I change it?</a><br>
//     <a href="URL3">Matched Bonus - Can I deposit multiple times to claim the full $600 Matched Bonus?</a><br>
//     <a href="URL4">Matched Bonus - Frequently Asked Questions</a><br>
//     <a href="URL5">Matched Bonus - How do I claim the Matched Bonus?</a><br>
//     <a href="URL6">Matched Bonus - How much must I deposit to claim the Matched Bonus?</a><br>
//     <a href="URL7">Matched Bonus - I have selected the Matched Bonus but I do not see any extra cash in my account, why is this?</a><br>
//     <a href="URL8">Matched Bonus - I have selected the Matched Welcome Bonus - but do not see any extra cash on my account?</a><br>
//     <a href="URL9">Matched Bonus - I've made a deposit but I forgot to select a Welcome Bonus, what can I do?</a><br>
//     <a href="URL10">Matched Bonus - Is there a time limit on claiming my Matched Bonus?</a><br>
//     <a href="URL11">Matched Bonus - Is there an expiry on my Matched Bonus?</a><br>
//     <a href="URL12">Matched Bonus - Summary</a><br>
//     <a href="URL13">Matched Bonus - What games count towards clearing the Matched Bonus?</a><br>
//     <a href="URL14">Matched Bonus - What is the Matched Bonus Welcome Bonus?</a><br>
//     <a href="URL15">Matched Bonus - Will a withdrawal invalidate my Matched Bonus?</a><br>
//     <a href="URL16">Up to $100 in Rewards Bonus - Frequently Asked Questions</a><br>
//     <a href="URL17">Up to $100 in Rewards Bonus - Summary</a><br>
//     <a href="URL18">Welcome Bonus - I have selected the Matched Welcome Bonus - but do not see any extra cash on my account?</a><br>
//     <a href="URL19">Welcome Bonus - Terms and Conditions</a><br>
//     <a href="URL20">Welcome Bonus - Up to $100 in Rewards Bonus - How do I claim the Rewards Bonus?</a><br>
//     <a href="URL21">Welcome Bonus - Up to $100 in Rewards Bonus - How much must I deposit to claim the Rewards Bonus?</a><br>
//     <a href="URL22">Welcome Bonus - Up to $100 in Rewards Bonus - I have selected the Rewards Bonus but I do not see any tickets in my account, why is this?</a><br>
//     <a href="URL23">Welcome Bonus - Up to $100 in Rewards Bonus - Is there a time limit on claiming my Rewards Bonus?</a><br>
//     <a href="URL24">Welcome Bonus - Up to $100 in Rewards Bonus - What is the Up to $100 in Rewards Welcome Bonus?</a><br>
//     `,
//     jackpots:`
//     <a href="URL25">All-in Fortune - Can I check my previous All-in Fortune wins?</a><br>
//     <a href="URL26">All-in Fortune - Do I need to reach a showdown to be eligible for a prize in All-in Fortune?</a><br>
//     <a href="URL27">All-in Fortune - How often does All-in Fortune payout?</a><br>
//     <a href="URL28">All-in Fortune - In which currency are All-in Fortune winnings credited?</a><br>
//     <a href="URL29">All-in Fortune - What prizes can I win?</a><br>
//     <a href="URL30">All-in Fortune - Are there any requirements other than going All-in?</a><br>
//     <a href="URL31">All-in Fortune - Frequently Asked Questions</a><br>
//     <a href="URL32">All-in Fortune - How do I become eligible to win in All-in Fortune?</a><br>
//     <a href="URL33">All-in Fortune - How is the All-in Fortune promotion funded?</a><br>
//     <a href="URL34">All-in Fortune - I won! How do I receive my payment?</a><br>
//     <a href="URL35">All-in Fortune - Summary</a><br>
//     <a href="URL36">All-in Fortune - What Is All-in Fortune?</a><br>
//     <a href="URL37">All-in Fortune - What happened to All-in or Fold Bingo?</a><br>
//     <a href="URL38">All-in or Fold Jackpot - Are there different Jackpot funds for Hold'em and Omaha games?</a><br>
//     <a href="URL39">All-in or Fold Jackpot - Can I opt out of this promotion and not pay the fees?</a><br>
//     <a href="URL40">All-in or Fold Jackpot - Can I win the AoF Jackpot in an AoF Sit & Go?</a><br>
//     <a href="URL41">All-in or Fold Jackpot - Frequently Asked Questions</a><br>
//     <a href="URL42">All-in or Fold Jackpot - How is the All-in or Fold Jackpot fund accumulated?</a><br>
//     <a href="URL43">All-in or Fold Jackpot - I made a straight flush playing All-in or Fold hold'em and didn't get an All-in or Fold Jackpot - Why?</a><br>
//     <a href="URL44">All-in or Fold Jackpot - I won an All-in or Fold Jackpot. What happens now?</a><br>
//     <a href="URL45">All-in or Fold Jackpot - If I get dealt a hand, go all in, and then get disconnected, would I be eligible to win the All-in or Fold Jackpot?</a><br>
//     <a href="URL46">All-in or Fold Jackpot - In AoF Hold'em does a hand have to a showdown to win a Jackpot?</a><br>
//     <a href="URL47">All-in or Fold Jackpot - In AoF Hold'em, What are the qualifying hands to win a jackpot?</a><br>
//     <a href="URL48">All-in or Fold Jackpot - In AoF Omaha, What are the qualifying hands to win a jackpot?</a><br>
//     <a href="URL49">All-in or Fold Jackpot - In AoF Omaha, does a hand have to go to a showdown to win a Jackpot?</a><br>
//     <a href="URL50">All-in or Fold Jackpot - Is All-in or Fold Sit & Go eligible for Jackpot payouts?</a><br>
//     <a href="URL51">All-in or Fold Jackpot - Is there any rake taken on All-in or Fold Jackpot contributions?</a><br>
//     <a href="URL52">All-in or Fold Jackpot - Summary</a><br>
//     <a href="URL53">All-in or Fold Jackpot - What are the terms and conditions for the All-in or Fold Jackpot?</a><br>
//     <a href="URL54">All-in or Fold Jackpot - What is the All-in or Fold Jackpot?</a><br>
//     <a href="URL55">Bad Beat Jackpot - In Omaha5 (PLO5) Cash Games, What are the qualifying criteria for a Bad Beat Jackpot to be awarded?</a><br>
//     <a href="URL56">Bad Beat Jackpot - A Bad Beat Jackpot was won at the table I was on, but I was sitting out. What happens?</a><br>
//     <a href="URL57">Bad Beat Jackpot - Can I opt out of the Bad Beat Jackpot and not contribute to the Bad Beat Jackpot fund?</a><br>
//     <a href="URL58">Bad Beat Jackpot - Do I have to put a certain amount in the pot to win the Bad Beat Jackpot?</a><br>
//     <a href="URL59">Bad Beat Jackpot - Does the hand have to go to showdown to award a Beat Jackpot?</a><br>
//     <a href="URL60">Bad Beat Jackpot - Frequently Asked Questions</a><br>
//     <a href="URL61">Bad Beat Jackpot - I got disconnected, and a Bad Beat Jackpot was won in the hand I was in. What happens here?</a><br>
//     <a href="URL62">Bad Beat Jackpot - I have played a hand and I am sure it qualified for the Bad Beat Jackpot - how can I have this checked?</a><br>
//     <a href="URL63">Bad Beat Jackpot - I made a Bad Beat Jackpot qualifying hand and got beaten at showdown in an eligible cash game. What happens now?</a><br>
//     <a href="URL64">Bad Beat Jackpot - I was dealt cards in a hand where a Bad Beat Jackpot was awarded. What happens now?</a><br>
//     <a href="URL65">Bad Beat Jackpot - I was sitting at a table where a Bad Beat Jackpot was awarded, Is that right that I get a share too?</a><br>
//     <a href="URL66">Bad Beat Jackpot - I won a hand against someone with a Bad Beat Jackpot qualifying hand at showdown in an eligible cash game. What happens now?</a><br>
//     <a href="URL67">Bad Beat Jackpot - I'm using both hole cards in a Holdem Game to make the best hand I have AK and the flop was AAA. Why didn't I get a Bad Beat Jackpot?</a><br>
//     <a href="URL68">Bad Beat Jackpot - If I choose to Run It Twice/Three times, can I still win a Bad Beat Jackpot?</a><br>
//     <a href="URL69">Bad Beat Jackpot - If I fold my hand and leave the table, would I still be eligible if a Bad Beat Jackpot was won in that hand?</a><br>
//     <a href="URL70">Bad Beat Jackpot - If I take EV Cashout, can I still win a Bad Beat Jackpot?</a><br>
//     <a href="URL71">Bad Beat Jackpot - In Hold'em Cash Games and Rush & Cash Games, What amount is contributed to the Bad Beat Jackpot Fund?</a><br>
//     <a href="URL72">Bad Beat Jackpot - In Hold'em Cash Games and Rush & Cash Games, What are the qualifying criteria for a Bad Beat Jackpot to be awarded?</a><br>
//     <a href="URL73">Bad Beat Jackpot - In Omaha (All variants) Cash Games, What amount is contributed to the Bad Beat Jackpot Fund?</a><br>
//     <a href="URL74">Bad Beat Jackpot - In Omaha (PLO) Cash Games and Rush & Cash Games, What are the qualifying criteria for a Bad Beat Jackpot to be awarded?</a><br>
//     <a href="URL75">Bad Beat Jackpot - In Omaha Cash Games and Rush & Cash Games, What amount is contributed to the Bad Beat Jackpot Fund?</a><br>
//     <a href="URL76">Bad Beat Jackpot - In Omaha6 (PLO6) Cash Games, What are the qualifying criteria for a Bad Beat Jackpot to be awarded?</a><br>
//     <a href="URL77">Bad Beat Jackpot - In Short Deck Cash Games, What amount is contributed to the Bad Beat Jackpot Fund?</a><br>
//     <a href="URL78">Bad Beat Jackpot - In Short Deck Cash Games, What are the qualifying criteria for a Bad Beat Jackpot to be awarded?</a><br>
//     <a href="URL79">Bad Beat Jackpot - Is the Bad Beat Jackpot awarded in All-In Or Fold (AoF) Games?</a><br>
//     <a href="URL80">Bad Beat Jackpot - Is the Bad Beat Jackpot awarded in Battle Royale Tournaments?</a><br>
//     <a href="URL81">Bad Beat Jackpot - Is the Bad Beat Jackpot awarded in Spin & Gold Tournaments?</a><br>
//     <a href="URL82">Bad Beat Jackpot - Is the Bad Beat Jackpot awarded in Tournaments?</a><br>
//     <a href="URL83">Bad Beat Jackpot - Is the Bad Beat Jackpot fund raked?</a><br>
//     <a href="URL84">Bad Beat Jackpot - Summary</a><br>
//     <a href="URL85">Bad Beat Jackpot - Three (or more) players all made Bad Beat Jackpot qualifying hands. What happens here?</a><br>
//     <a href="URL86">Bad Beat Jackpot - What are the terms and conditions?</a><br>
//     <a href="URL87">Bad Beat Jackpot - What games are the Bad Beat Jackpot awarded in?</a><br>
//     <a href="URL88">Bad Beat Jackpot - What is the Bad Beat Jackpot?</a><br>
//     <a href="URL89">Bad Beat Jackpot - Where does the money in the Bad Beat Jackpot fund come from?</a><br>
//     <a href="URL90">Bounty Jackpot - Removal</a><br>
//     `,
//     dailyFreebie:`
//     <a href="URL1">Daily Freebie - Can I exchange my Daily Freebie ticket for cash or another ticket?</a><br>
//     <a href="URL2">Daily Freebie - Can I transfer my Daily Freebie ticket to another player?</a><br>
//     <a href="URL3">Daily Freebie - Do I earn Fish Points when I use a Daily Freebie ticket?</a><br>
//     <a href="URL4">Daily Freebie - Does my account need to be verified to receive a Daily Freebie?</a><br>
//     <a href="URL5">Daily Freebie - Frequently Asked Questions</a><br>
//     <a href="URL6">Daily Freebie - How long does my Daily Freebie take to arrive in my account?</a><br>
//     <a href="URL7">Daily Freebie - How long have I got to use my Daily Freebie ticket?</a><br>
//     <a href="URL8">Daily Freebie - I am trying to claim my Daily Freebie and it says it has already been claimed, why is this?</a><br>
//     <a href="URL9">Daily Freebie - I and someone else in my household both have GGPoker accounts, can we both get a Daily Freebie?</a><br>
//     <a href="URL10">Daily Freebie - I and someone else with a GGPoker account share a computer. Can we both get a Daily Freebie?</a><br>
//     <a href="URL11">Daily Freebie - I cannot find where to claim the Daily Freebie on the GGPoker client?</a><br>
//     <a href="URL12">Daily Freebie - I get an error why claiming the Daily Freebie - who can help?</a><br>
//     <a href="URL13">Daily Freebie - I won some money from my Daily Freebie ticket, can I withdraw this immediately?</a><br>
//     <a href="URL14">Daily Freebie - It says I cannot claim, but it's not me who has claimed. Can I manually get a ticket?</a><br>
//     <a href="URL15">Daily Freebie - Summary</a><br>
//     <a href="URL16">Daily Freebie - Terms and Conditions</a><br>
//     <a href="URL17">Daily Freebie - There is nowhere to claim the Daily Freebie on the GGPoker Client, why is this?</a><br>
//     <a href="URL18">Daily Freebie - What Daily Freebies are available?</a><br>
//     <a href="URL19">Daily Freebie - What is the Daily Freebie on Friday?</a><br>
//     <a href="URL20">Daily Freebie - What is the Daily Freebie on Monday?</a><br>
//     <a href="URL21">Daily Freebie - What is the Daily Freebie on Saturday?</a><br>
//     <a href="URL22">Daily Freebie - What is the Daily Freebie on Sunday?</a><br>
//     <a href="URL23">Daily Freebie - What is the Daily Freebie on Thursday?</a><br>
//     <a href="URL24">Daily Freebie - What is the Daily Freebie on Tuesday?</a><br>
//     <a href="URL25">Daily Freebie - What is the Daily Freebie on Wednesday?</a><br>
//     <a href="URL26">Daily Freebie - What is the Daily Freebie?</a><br>
//     <a href="URL27">Daily Freebie - When can I claim my Daily Freebie?</a><br>
//     <a href="URL28">Daily Freebie - Will the Daily Freebie promotion end?</a><br>
//     `,
//     leaderboards:`
//     <a href="URL29">Daily Leaderboard - All-in or Fold Cash Games</a><br>
//     <a href="URL30">Daily Leaderboard - All-in or Fold Sit & Go</a><br>
//     <a href="URL31">Daily Leaderboard - Battle Royale</a><br>
//     <a href="URL32">Daily Leaderboard - Flip & Go</a><br>
//     <a href="URL33">Daily Leaderboard - Hold'em</a><br>
//     <a href="URL34">Daily Leaderboard - How can I participate in leaderboards?</a><br>
//     <a href="URL35">Daily Leaderboard - PLO</a><br>
//     <a href="URL36">Daily Leaderboard - Rush & Cash Hold'em</a><br>
//     <a href="URL37">Daily Leaderboard - Rush & Cash Omaha</a><br>
//     <a href="URL38">Daily Leaderboard - Short Deck</a><br>
//     <a href="URL39">Daily Leaderboard - Spin & Gold</a><br>
//     <a href="URL40">Daily Leaderboard - Summary</a><br>
//     <a href="URL41">Daily Leaderboard - When are they paid?</a><br>
//     `,
//     thanksGG:`
//     <a href="URL1">#ThanksGG (GGCare & GGCheers) - Frequently Asked Questions</a><br>
//     <a href="URL2">#ThanksGG (GGCare & GGCheers) - Summary</a><br>
//     <a href="URL3">#ThanksGG - Can I qualify for the #ThanksGG Daily Flipout by playing in Cash Games?</a><br>
//     <a href="URL4">#ThanksGG - Can I qualify for the #ThanksGG Daily Flipout by playing in Flip & Go?</a><br>
//     <a href="URL5">#ThanksGG - Can I qualify for the #ThanksGG Daily Flipout by playing in Mystery Battle Royale?</a><br>
//     <a href="URL6">#ThanksGG - Can I qualify for the #ThanksGG Daily Flipout by playing in Spin & Gold?</a><br>
//     <a href="URL7">#ThanksGG - Can I qualify for the #ThanksGG Daily Flipout by playing in Tournaments?</a><br>
//     <a href="URL8">#ThanksGG - Can I qualify for the same #ThanksGG Daily Flipout event more than once?</a><br>
//     <a href="URL9">#ThanksGG - Do I have to be online when the #ThanksGG Daily Flipout event begins?</a><br>
//     <a href="URL10">#ThanksGG - How do I get invited to the #ThanksGG Flipout tournament?</a><br>
//     <a href="URL11">#ThanksGG - How much prize money is given away each day in the #ThanksGG Flipout tournament?</a><br>
//     <a href="URL12">#ThanksGG - I had a Bad Beat - but I have not been invited to the #ThanksGG Daily Flipout - why is this?</a><br>
//     <a href="URL13">#ThanksGG - I had a Suck out - but I have not been invited to the #ThanksGG Daily Flipout - why is this?</a><br>
//     <a href="URL14">#ThanksGG - I had a bad beat and I want support to invite me to the #ThanksGG Daily Flipout event - can this be done?</a><br>
//     <a href="URL15">#ThanksGG - I had a cooler - but I have not been invited to the #ThanksGG Daily Flipout - why is this?</a><br>
//     <a href="URL16">#ThanksGG - I had a cooler and I want support to invite me to the #ThanksGG Daily Flipout event - can this be done?</a><br>
//     <a href="URL17">#ThanksGG - I had a suckout and I want support to invite me to the #ThanksGG Daily Flipout event - can this be done?</a><br>
//     <a href="URL18">#ThanksGG - I received an entry into the #ThanksGG Daily Flipout event - what happens next?</a><br>
//     <a href="URL19">#ThanksGG - I received an entry to the #ThanksGG Daily Flipout but cannot see the results - how do I find them?</a><br>
//     <a href="URL20">#ThanksGG - I won a big hand - but I have not been invited to the #ThanksGG Daily Flipout - why is this?</a><br>
//     <a href="URL21">#ThanksGG - I won a big pot - but I have not been invited to the #ThanksGG Daily Flipout - why is this?</a><br>
//     <a href="URL22">#ThanksGG - I won a big pot and Daniel Negreanu danced on the screen - but I have not been invited to the #ThanksGG Daily Flipout - why is this?</a><br>
//     <a href="URL23">#ThanksGG - PokerCraft tags my hand as a bad beat - but I have not been invited to the #ThanksGG Daily Flipout - why is this?</a><br>
//     <a href="URL24">#ThanksGG - PokerCraft tags my hand as a big hand - but I have not been invited to the #ThanksGG Daily Flipout - why is this?</a><br>
//     <a href="URL25">#ThanksGG - PokerCraft tags my hand as a big pot - but I have not been invited to the #ThanksGG Daily Flipout - why is this?</a><br>
//     <a href="URL26">#ThanksGG - PokerCraft tags my hand as a cooler - but I have not been invited to the #ThanksGG Daily Flipout - why is this?</a><br>
//     <a href="URL27">#ThanksGG - PokerCraft tags my hand as a suck out - but I have not been invited to the #ThanksGG Daily Flipout - why is this?</a><br>
//     <a href="URL28">#ThanksGG - What are the Terms and Conditions?</a><br>
//     <a href="URL29">#ThanksGG - What determines the amount of stack I get to enter the #ThanksGG Flipout tournament?</a><br>
//     <a href="URL30">#ThanksGG - What happens to the #ThanksGG Flipout event when there is maintenance?</a><br>
//     <a href="URL31">#ThanksGG - What is GGCare & GGCheers?</a><br>
//     <a href="URL32">#ThanksGG - What time does the daily #ThanksGG Flipout tournament take place?</a><br>
//     `,
//     casinoBonus:`
//     <a href="URL33">Casino Bonus - FAQ & Summary</a><br>
//     `,
//     otherPromotionsRewards:`
//     <a href="URL34">Community - I've won a giveaway on the GGTV Youtube stream. Who do I contact?</a><br>
//     <a href="URL35">Go for Gold - Frequently Asked Questions</a><br>
//     <a href="URL36">Halloween Party 2024</a><br>
//     <a href="URL37">How to enter a Coupon Code?</a><br>
//     <a href="URL38">I have a ticket that states it is irredeemable - why is this?</a><br>
//     <a href="URL39">I have received an email saying I've been issued a free ticket - what is the catch?</a><br>
//     <a href="URL40">I played in a tournament as my mission said, but it said I failed. Why is this?</a><br>
//     <a href="URL41">Is there a promotion for referring a friend to GGPoker?</a><br>
//     <a href="URL42">Mystery Envelope - At which games is the Mystery Envelope promotion available?</a><br>
//     <a href="URL43">Mystery Envelope - How is the Mystery Envelope promotion funded?</a><br>
//     <a href="URL44">When does the Mystery Envelope promotion end?</a><br>
//     `
//   };

//   document.getElementById('categoryDetails').innerHTML = contents[contentId] || 'No content available.';
//   document.getElementById('selectedCategoryTitle').textContent = contentId.replace(/([A-Z])/g, ' $1').trim();
// }

// function searchContent() {
//   const searchTerm = document.getElementById('searchInput').value.toLowerCase();
//   const searchResults = [];

//   const contents = {
//     accountVerification: [
//       "Account Verification - KYC - Frequently Asked Questions",
//       "Account Verification - KYC - Summary",
//       "How can I upload my documents [Desktop]?",
//       "How can I upload my documents through the app?",
//       "How do I know if the verification documents I am sending will be acceptable?",
//       "How do I update and correct Personal Information?",
//       "How long does it usually take until my account is KYC verified?",
//       "How to verify my GGPoker account?",
//       "I feel unsure about submitting verification documents",
//       "I have submitted proof of address but am not yet verified",
//       "I moved to another country. How do I update the flag in my account?",
//       "My verification documents won't upload inside the app",
//       "What documents are acceptable as Proof of Address?",
//       "What documents are required for KYC?",
//       "What is the best way to send verification documents?",
//       "What is the reason why my documents were rejected?",
//       "Withdrawing without verifying"
//     ]
//   };

//   for (const category in contents) {
//     contents[category].forEach(item => {
//       if (item.toLowerCase().includes(searchTerm)) {
//         searchResults.push(`<li><a href="URL1">${item}</a></li>`);
//       }
//     });
//   }

//   const categoryDetails = document.getElementById('categoryDetails');
//   if (searchResults.length > 0) {
//     categoryDetails.innerHTML = `<ul>${searchResults.join('')}</ul>`;
//     document.getElementById('selectedCategoryTitle').textContent = '検索結果';
//   } else {
//     categoryDetails.innerHTML = '<p>一致する結果は見つかりませんでした</p>';
//     document.getElementById('selectedCategoryTitle').textContent = '検索結果';
//   }
// }








































let currentlyOpenSubcategory = null;

// カテゴリごとにコンテンツを定義
const contents = {
    アカウント認証: `
    <a href="URL1">アカウント認証 - KYC - よくある質問</a><br>
    <a href="URL1">アカウント認証 - KYC - 概要</a><br>
    <a href="URL1">書類をどのようにアップロードできますか [デスクトップ]？</a><br>
    <a href="URL1">アプリを通して書類をアップロードする方法は？</a><br>
    <a href="URL1">送信した認証書類が受け入れられるかどうかを確認するにはどうすればよいですか？</a><br>
    <a href="URL1">個人情報の更新と修正方法は？</a><br>
    <a href="URL1">アカウントがKYC認証されるまでに通常どれくらいの時間がかかりますか？</a><br>
    <a href="URL1">GGPokerアカウントを認証するには？</a><br>
    <a href="URL1">認証書類を提出することに不安を感じています</a><br>
    <a href="URL1">住所証明を提出しましたが、まだ認証されていません</a><br>
    <a href="URL1">他の国に引っ越しました。アカウントの国旗をどうやって更新しますか？</a><br>
    <a href="URL1">アプリ内で認証書類をアップロードできません</a><br>
    <a href="URL1">住所証明として受け入れられる書類は何ですか？</a><br>
    <a href="URL1">KYCに必要な書類は何ですか？</a><br>
    <a href="URL1">認証書類を送信する最良の方法は？</a><br>
    <a href="URL1">私の書類が拒否された理由は何ですか？</a><br>
    <a href="URL1">認証せずに出金することはできますか？</a><br>
    `,
    アカウント認証: `
    <a href="URL1">アカウント認証 - KYC - よくある質問</a><br>
    <a href="URL1">アカウント認証 - KYC - 概要</a><br>
    <a href="URL1">書類をどのようにアップロードできますか [デスクトップ]？</a><br>
    <a href="URL1">アプリを通して書類をアップロードする方法は？</a><br>
    <a href="URL1">送信した認証書類が受け入れられるかどうかを確認するにはどうすればよいですか？</a><br>
    <a href="URL1">個人情報の更新と修正方法は？</a><br>
    <a href="URL1">アカウントがKYC認証されるまでに通常どれくらいの時間がかかりますか？</a><br>
    <a href="URL1">GGPokerアカウントを認証するには？</a><br>
    <a href="URL1">認証書類を提出することに不安を感じています</a><br>
    <a href="URL1">住所証明を提出しましたが、まだ認証されていません</a><br>
    <a href="URL1">他の国に引っ越しました。アカウントの国旗をどうやって更新しますか？</a><br>
    <a href="URL1">アプリ内で認証書類をアップロードできません</a><br>
    <a href="URL1">住所証明として受け入れられる書類は何ですか？</a><br>
    <a href="URL1">KYCに必要な書類は何ですか？</a><br>
    <a href="URL1">認証書類を送信する最良の方法は？</a><br>
    <a href="URL1">私の書類が拒否された理由は何ですか？</a><br>
    <a href="URL1">認証せずに出金することはできますか？</a><br>
    `,
    
    
    passwordQueries: `
        <a href="URL1">パスワード再設定のメールが届かないのはなぜですか？</a><br>
        <a href="URL1">ログイン情報を忘れました。新しいアカウントを作成できますか？</a><br>
        <a href="URL1">新しいアカウントを作成しましたが、GGPokerアプリがパスワードが間違っていると言います。なぜですか？</a><br>
        <a href="URL1">ログインパスワード</a><br>
        <a href="URL1">ログインパスワードを忘れた場合どうなりますか？</a><br>
        `,
    
    updateDetails: `
        <a href="URL1">個人情報の更新と修正方法は？</a><br>
        <a href="URL1">住所が変わりましたが、更新できません</a><br>
        <a href="URL1">携帯番号の更新方法</a><br>
        `,
    
    accountCreation: `
        <a href="URL1">第三者が、サインアップ用に2つ目のアカウントを作成できると言っていますが、可能ですか？</a><br>
        <a href="URL1">アカウントを閉鎖して新しいアカウントを作成できますか？</a><br>
        <a href="URL1">GGPokerでプレイするために移動できますか - 概要 & よくある質問</a><br>
        <a href="URL1">モバイルアプリからアカウントを登録できますか？</a><br>
        <a href="URL1">iOSアプリからのアカウント削除</a><br>
        <a href="URL1">アカウントを閉鎖する方法</a><br>
        <a href="URL1">新しいアカウントを登録しようとしていますが、メール確認コードが届きません</a><br>
        <a href="URL1">GGPokerの登録フォームで名前/メールが受け入れられません</a><br>
        <a href="URL1">他の国に恒久的に移住する場合</a><br>
        <a href="URL1">確認メールが届きません</a><br>
        `,
    
    marketingOptInOut: `
        <a href="URL1">マーケティングメールの受信を停止する方法</a><br>
        `,
    
    countryAvailability: `
        <a href="URL1">サインアップ時に国がリストに表示されないのはなぜですか？</a><br>
        <a href="URL1">しばらく国外にいます。他の地域からポーカーをプレイできますか？</a><br>
        <a href="URL1">オンタリオにいると言われていますが、実際には違います</a><br>
        <a href="URL1">レバノン - GGPokerのサービス終了 & Poker Arabiaへの移行</a><br>
        <a href="URL1">リトアニア - GGPokerのサービス終了 & Olybetへの移行</a><br>
        <a href="URL1">他の国に恒久的に移住する場合</a><br>
        <a href="URL1">登録/ログイン時に地域制限のメッセージが表示されます</a><br>
        <a href="URL1">許可されている地域/国のリストをどこで確認できますか？</a><br>
        `,
    
    dataRequest: `
        <a href="URL1">保有している私の情報を確認できますか？</a><br>
        <a href="URL1">私の個人情報はどのように使用されますか？</a><br>
        <a href="URL1">私の個人情報は、プレイしている場所の外に転送されますか？</a><br>
        <a href="URL1">プライバシーポリシーが更新されることはありますか？更新内容を受け入れる必要がありますか？</a><br>
        `,
    
        otherAccountQueries: `
        <a href="URL1">GGPokerは私のギブアウェイチケットを再発行できますか？</a><br>
        <a href="URL1">アフィリエイトを変更できますか？</a><br>
        <a href="URL1">私の個人情報の利用に関して同意を制限または変更できますか？</a><br>
        <a href="URL1">登録後にアカウントにタグを付けることはできますか？</a><br>
        <a href="URL1">私と同居するパートナーもGGPokerのアカウントを持つことができますか？</a><br>
        <a href="URL1">兄弟姉妹がGGPokerのアカウントを持つことは可能ですか？</a><br>
        <a href="URL1">Redditとカスタマーサポートへのメールの違いは何ですか？</a><br>
        <a href="URL1">GGPokerにはライブチャットサービスがありますか？</a><br>
        <a href="URL1">GGPass - よくある質問</a><br>
        <a href="URL1">GGPokerからのメールが届きません</a><br>
        <a href="URL1">GGPokerでサイト全体のダウンタイムが発生し、返金があると通知されました。いつ受け取れますか？</a><br>
        <a href="URL1">GGストア - GGのグッズを購入できますか？</a><br>
        <a href="URL1">GGストア - GGPokerアカウントの資金でアイテムを購入できますか？</a><br>
        <a href="URL1">メールアドレスを確認する方法</a><br>
        <a href="URL1">GGPokerネットワークの他のサイトに連絡する方法</a><br>
        <a href="URL1">GGPokerがメールに返信するまでの期間はどれくらいですか？</a><br>
        <a href="URL1">私の個人情報はどのように使用されますか？</a><br>
        <a href="URL1">GGPokerからのメールが受信箱に届きません。問題がありますか？</a><br>
        <a href="URL1">ログイン名を保存できますが、パスワードを記憶させる方法はありますか？</a><br>
        <a href="URL1">登録に使用したメールにアクセスできません。どうすればアカウントにアクセスできますか？</a><br>
        <a href="URL1">ユーザー名と詳細でログインできません</a><br>
        <a href="URL1">ユーザー名を忘れました。助けてもらえますか？</a><br>
        <a href="URL1">登録したメールアドレスにアクセスできません。どうすれば解決できますか？</a><br>
        <a href="URL1">サインアップコードを使用しましたが、報酬を受け取っていません/アフィリエイトを確認してもらう必要があります</a><br>
        <a href="URL1">オンタリオ州にいるというエラーが表示されますが、実際にはそうではありません</a><br>
        <a href="URL1">ログインの問題/パスワードまたはプレイヤー詳細エラー</a><br>
        <a href="URL1">テーブルを退出した後、残高が更新されませんでした</a><br>
        <a href="URL1">ニックネーム - よくある質問</a><br>
        <a href="URL1">ニックネーム - 一部のトーナメントはニックネームではなく実名ですか？</a><br>
        <a href="URL1">ニックネーム - 「変更不可」ルールに例外はありますか？</a><br>
        <a href="URL1">ニックネーム - ニックネームを変更できますか？</a><br>
        <a href="URL1">ニックネーム - 本名をニックネームとして使用できますか？</a><br>
        <a href="URL1">ニックネーム - 同じニックネームを持つプレイヤーが2人いる可能性はありますか？</a><br>
        <a href="URL1">ニックネーム - よくある質問</a><br>
        <a href="URL1">ニックネーム - オンラインで知られている名前にニックネームを変更できますか？</a><br>
        <a href="URL1">ニックネーム - GGPokerから本名への変更を求められましたが、これは正当な要求ですか？</a><br>
        <a href="URL1">ニックネーム - GGPokerからニックネームを変更するように求められました。どうすればよいですか？</a><br>
        <a href="URL1">ニックネーム - ニックネームとして使用できないものはありますか？</a><br>
        <a href="URL1">ニックネーム - 他のプレイヤーが使用しているニックネームを取得する方法はありますか？</a><br>
        <a href="URL1">ニックネーム - 不適切または受け入れられないニックネームを報告するには？</a><br>
        <a href="URL1">ニックネーム - ニックネーム/スクリーンネームとは？</a><br>
        <a href="URL1">ニックネーム - 「不適切」とみなされる基準は？</a><br>
        <a href="URL1">ニックネーム - ニックネームを選択するタイミングは？</a><br>
        <a href="URL1">ニックネーム - なぜ一部のニックネームに色がついているのですか？</a><br>
        <a href="URL1">ニックネーム - ニックネームに非ローマ字を使用できますか？</a><br>
        <a href="URL1">アフィリエイトプロモーション報酬の受け取り</a><br>
        <a href="URL1">ウェブサイトのログイン削除</a><br>
        <a href="URL1">ログイン時のセキュリティプロンプト</a><br>
        <a href="URL1">ユーザー名を忘れた場合はどうすればよいですか？</a><br>
        <a href="URL1">非アクティブまたは休眠アカウントとは何ですか？</a><br>
        <a href="URL1">ClubGGの質問に関するサポートはどこで受けられますか？</a><br>
        <a href="URL1">サイトの利用規約とルールの完全なリストはどこで確認できますか？</a><br>
        <a href="URL1">なぜ再度携帯番号の確認を求められますか？</a><br>
        <a href="URL1">なぜウェブサイト経由でのログインができなくなったのですか？</a><br>
        `,
    
    securityFeatures: `
        <a href="URL1">アカウントのセキュリティ - よくある質問</a><br>
        <a href="URL1">アカウントのセキュリティ - 概要</a><br>
        <a href="URL1">追加のセキュリティオプション</a><br>
        <a href="URL1">ファンドパスワード</a><br>
        <a href="URL1">2FAを設定するにはどうすればよいですか？</a><br>
        <a href="URL1">Google Authenticatorの使用方法</a><br>
        <a href="URL1">2FAが有効でもログインできるのはなぜですか？</a><br>
        <a href="URL1">他のデバイスからログインされているというエラーメッセージが表示されました</a><br>
        <a href="URL1">「再送信制限」のポップアップが表示されます。これは何ですか？</a><br>
        <a href="URL1">アカウントにはどのような2FAオプションがありますか？</a><br>
        <a href="URL1">GGPokerはどのようなアカウントセキュリティを提供していますか？</a><br>
        <a href="URL1">2FAのオプションは何ですか？</a><br>
        <a href="URL1">2FAが高に設定されている場合、どうなりますか？</a><br>
        <a href="URL1">2FAが低に設定されている場合、どうなりますか？</a><br>
        <a href="URL1">2FAが中に設定されている場合、どうなりますか？</a><br>
        `,
    
        otherAccountSecurityQueries: `
        <a href="URL1">ウェブサイト上の外部リンクは貴社の推奨と見なされますか？</a><br>
        <a href="URL1">生体認証</a><br>
        <a href="URL1">認証コードを手入力ではなく、コピー&ペーストで入力できますか？</a><br>
        <a href="URL1">複数回の認証失敗</a><br>
        <a href="URL1">ファンドパスワード - 忘れたファンドパスワード</a><br>
        <a href="URL1">調査が必要な事項をセキュリティに報告する方法</a><br>
        <a href="URL1">アカウントの安全を守るためにはどうすれば良いですか？</a><br>
        <a href="URL1">2FAのメールが全く届きません。原因は何でしょうか？</a><br>
        <a href="URL1">メールでコードが届かないのはなぜですか？</a><br>
        <a href="URL1">SMSでコードが届かないのはなぜですか？</a><br>
        <a href="URL1">アカウント認証に関するメールが届きましたが、すでに認証済みです。</a><br>
        <a href="URL1">GGPokerのサイトでの資金は安全ですか？</a><br>
        <a href="URL1">登録したメールアドレスと異なるメールアドレスで問い合わせると、GGPokerから返信が来ない理由は？</a><br>
        <a href="URL1">2FAのメールがスパムに振り分けられるのを防ぐには？</a><br>
        <a href="URL1">アカウントがブロックされ、セキュリティ調査が進行中との表示があります。どうすれば良いですか？</a><br>
        <a href="URL1">ログイン通知設定をオフにする方法</a><br>
        <a href="URL1">認証メールが届かない</a><br>
        `,
    
    unwantedAccess: `
        <a href="URL1">遅すぎました。フィッシング詐欺や偽のメール内のリンクをクリックしてしまいました。どうすれば良いですか？</a><br>
        <a href="URL1">ハッキングの可能性/アカウントの侵害</a><br>
        `,
    
    limitsIncrease: `
        <a href="URL1">アカウントにバイイン制限を設定できますか？</a><br>
        <a href="URL1">入金制限</a><br>
        <a href="URL1">入金制限を設定しましたがプレイしたい場合、早期適用は可能ですか？</a><br>
        <a href="URL1">制限が増加しても入金ができないのはなぜですか？</a><br>
        <a href="URL1">ゲーム制限</a><br>
        <a href="URL1">アプリ内で入金制限を設定する方法</a><br>
        <a href="URL1">損失制限 - 増加を依頼しましたが、早期適用は可能ですか？</a><br>
        <a href="URL1">損失制限 - 増加できますか？</a><br>
        <a href="URL1">アカウントには最大の確認済み入金制限がありますが、さらに増加できますか？</a><br>
        <a href="URL1">総ベット金額制限 - 増加を依頼しましたが、早期適用は可能ですか？</a><br>
        <a href="URL1">どこで入金制限を設定できますか？</a><br>
        `,
    
    limitsDecrease: `
        <a href="URL1">アカウントにバイイン制限を設定できますか？</a><br>
        <a href="URL1">入金制限</a><br>
        <a href="URL1">ゲーム制限</a><br>
        <a href="URL1">総ベット金額制限 - この制限を減少させたい</a><br>
        <a href="URL1">どこで入金制限を設定できますか？</a><br>
        `,
    
    timeOut: `
        <a href="URL1">アカウントの自己排除方法</a><br>
        <a href="URL1">アカウントを閉じる方法</a><br>
        <a href="URL1">タイムアウトをリクエストする方法</a><br>
        <a href="URL1">ギャンブルが生活に悪影響を及ぼし始めている</a><br>
        <a href="URL1">自己排除</a><br>
        <a href="URL1">自己排除 - 除外/アカウント閉鎖の要望</a><br>
        <a href="URL1">GGPokerで利用可能な排除の種類は？</a><br>
        `,
    
    
    
        permanentExclusion: `
        <a href="URL1">自己排除を早期に終了できますか？</a><br>
        <a href="URL1">アカウントを自己排除する方法</a><br>
        <a href="URL1">アカウントを閉じる方法</a><br>
        <a href="URL1">ギャンブルが自分に悪影響を与え始めていると感じています</a><br>
        <a href="URL1">自己排除</a><br>
        <a href="URL1">自己排除 - 排除/アカウント閉鎖を希望する</a><br>
        <a href="URL1">GGPokerで利用可能な排除の種類は？</a><br>
        `,
    
    otherResponsibleGamingQueries: `
        <a href="URL1">カジノゲームなど、アプリの特定の機能から自分を排除できますか？</a><br>
        <a href="URL1">自己排除を早期に終了できますか？</a><br>
        <a href="URL1">責任あるゲームのタブにアクセスする方法</a><br>
        <a href="URL1">GGPokerの入金制限はどのように機能しますか？</a><br>
        <a href="URL1">アカウントを自己排除する方法</a><br>
        <a href="URL1">アカウントを閉じる方法</a><br>
        <a href="URL1">タイムアウトをリクエストする方法</a><br>
        <a href="URL1">カジノゲームから自己排除したのに、クライアントで表示されるのはなぜですか？</a><br>
        <a href="URL1">ポーカー/カジノ/ライブカジノから自己排除しましたが、この制限を解除したいです。</a><br>
        <a href="URL1">ggcares@ggpoker.comからメールを受け取りましたが、これはGGPokerの正式なメールアドレスですか？</a><br>
        <a href="URL1">ggcares@ggpoker.euからメールを受け取りましたが、これはGGPokerの正式なメールアドレスですか？</a><br>
        <a href="URL1">ギャンブルが自分に悪影響を与え始めていると感じています</a><br>
        <a href="URL1">ゲーム制限のブロック解除をリクエストしましたが、Safer Gamblingチームからのフォローアップメールが届きません。なぜですか？</a><br>
        <a href="URL1">損失制限</a><br>
        <a href="URL1">損失制限 - この制限を減少させたい</a><br>
        <a href="URL1">損失制限 - 損失制限とは何ですか？</a><br>
        <a href="URL1">月間ログイン頻度</a><br>
        <a href="URL1">月間ログイン頻度 - この制限を減少させることはできますか？</a><br>
        <a href="URL1">月間ログイン頻度 - この制限の増加をリクエストしましたが、早期適用は可能ですか？</a><br>
        <a href="URL1">月間ログイン頻度 - 増加できますか？</a><br>
        <a href="URL1">再ログインの時間制限</a><br>
        <a href="URL1">再ログインの時間制限 - この制限を減少できますか？</a><br>
        <a href="URL1">再ログインの時間制限 - この制限を増加できますか？</a><br>
        <a href="URL1">リアリティチェック通知</a><br>
        <a href="URL1">責任あるゲーム - 総ベット額の制限 - この制限を増加できますか？</a><br>
        <a href="URL1">自己排除</a><br>
        <a href="URL1">自己排除 - 排除/アカウント閉鎖を希望する</a><br>
        <a href="URL1">シングルベットの制限額</a><br>
        <a href="URL1">シングルベットの制限額 - この制限を増加できますか？</a><br>
        <a href="URL1">シングルベットの制限額 - この制限を減少できますか？</a><br>
        <a href="URL1">シングルベットの制限額 - この制限の増加をリクエストしましたが、早期適用は可能ですか？</a><br>
        <a href="URL1">総ベット額 - 総ベット額の制限はどのように機能しますか？</a><br>
        <a href="URL1">総ベット額の制限</a><br>
        <a href="URL1">GGPokerの責任あるゲームのオプションは何ですか？</a><br>
        <a href="URL1">アフォーダビリティチェックとは何ですか？</a><br>
        <a href="URL1">GGPokerで利用可能な排除の種類は？</a><br>
        `,
    
    
        
        allInOrFold: `
        <a href="URL1">オールインまたはフォールド（キャッシュゲーム）- バイイン制限</a><br>
        <a href="URL1">オールインまたはフォールド（キャッシュゲーム）- 詳細と制限</a><br>
        <a href="URL1">オールインまたはフォールド（キャッシュゲーム）- ハンド履歴のダウンロード</a><br>
        <a href="URL1">オールインまたはフォールド（キャッシュゲーム）- ゲーム履歴</a><br>
        <a href="URL1">オールインまたはフォールド（キャッシュゲーム）- レイク＆手数料</a><br>
        <a href="URL1">オールインまたはフォールド（キャッシュゲーム）- 概要</a><br>
        <a href="URL1">オールインまたはフォールド（キャッシュゲーム）- テーブル情報</a><br>
        <a href="URL1">オールインまたはフォールド（キャッシュゲーム）- タイムバンク設定</a><br>
        <a href="URL1">オールインまたはフォールド（キャッシュゲーム）- ルールの理解</a><br>
        <a href="URL1">オールインまたはフォールド（キャッシュゲーム）- ブラインド構造、レイク、手数料の理解</a><br>
        <a href="URL1">オールインまたはフォールド（Sit & Go）- Sit & Goはホールデムプレイヤー限定ですか？</a><br>
        <a href="URL1">オールインまたはフォールド（Sit & Go）- 仕組み</a><br>
        <a href="URL1">オールインまたはフォールド（Sit & Go）- 開始チップ数</a><br>
        <a href="URL1">オールインまたはフォールド（Sit & Go）- 遅延登録は利用可能ですか？</a><br>
        <a href="URL1">オールインまたはフォールド（Sit & Go）- ポーカークラフトで履歴が確認できますか？</a><br>
        <a href="URL1">オールインまたはフォールド（Sit & Go）- 再エントリーは可能ですか？</a><br>
        <a href="URL1">オールインまたはフォールド（Sit & Go）- 賞金構造</a><br>
        <a href="URL1">オールインまたはフォールド（Sit & Go）- 概要</a><br>
        <a href="URL1">オールインまたはフォールド（Sit & Go）- タイムバンク設定</a><br>
        <a href="URL1">オールインまたはフォールド（Sit & Go）- チュートリアル</a><br>
        <a href="URL1">オールインまたはフォールド（Sit & Go）- 利用可能なバイインレベル</a><br>
        <a href="URL1">オールインまたはフォールド（Sit & Go）- ゲーム内容</a><br>
        <a href="URL1">オールインまたはフォールド キャッシュ - 概要と主要な詳細</a><br>
        <a href="URL1">オールインまたはフォールド Sit & Go - 概要と主要な詳細</a><br>
        <a href="URL1">キャッシュゲーム - キャッシュゲームとは？</a><br>
        <a href="URL1">テーブル移動の理解</a><br>
        <a href="URL1">チップ削除機能の理解</a><br>
        <a href="URL1">レイク付きハンドとは？</a><br>
        <a href="URL1">テーブルでの待機時間はどれくらいですか？</a><br>
        `,
    
    spinGold: `
    <a href="URL2">スピン＆ゴールド - デイリーチャレンジ - 参加方法</a><br>
    <a href="URL2">スピン＆ゴールド - デイリーチャレンジ - 追加料金について</a><br>
    <a href="URL2">スピン＆ゴールド - デイリーチャレンジ - ポーカークラフトでのチャレンジ履歴の確認方法</a><br>
    <a href="URL2">スピン＆ゴールド - デイリーチャレンジ - 他のプロモーションとの併用について</a><br>
    <a href="URL2">スピン＆ゴールド - デイリーチャレンジ - モバイルでの参加について</a><br>
    <a href="URL2">スピン＆ゴールド - デイリーチャレンジ - サポートへの問い合わせ方法</a><br>
    <a href="URL2">スピン＆ゴールド - デイリーチャレンジ - ポイントの獲得方法</a><br>
    <a href="URL2">スピン＆ゴールド - デイリーチャレンジ - 完了できない場合の報酬の取り扱い</a><br>
    <a href="URL2">スピン＆ゴールド - デイリーチャレンジ - 開始できない原因</a><br>
    <a href="URL2">スピン＆ゴールド - デイリーチャレンジ - メンテナンスやダウンタイムによる中断時の対応</a><br>
    <a href="URL2">スピン＆ゴールド - デイリーチャレンジ - チャレンジ期間の選択肢</a><br>
    <a href="URL2">スピン＆ゴールド - デイリーチャレンジ - チャレンジ内容</a><br>
    <a href="URL2">スピン＆ゴールド - デイリーチャレンジ - 獲得可能な報酬</a><br>
    <a href="URL2">スピン＆ゴールド - デイリーチャレンジ - チャレンジ進捗の確認方法</a><br>
    <a href="URL2">スピン＆ゴールド - デイリーチャレンジ - 利用可能なチャレンジの種類</a><br>
    <a href="URL2">スピン＆ゴールド - ELO - 低評価のプレイヤーが上手にプレイしているのは合法か？</a><br>
    <a href="URL2">スピン＆ゴールド - ELO - 高評価の報酬はあるか？</a><br>
    <a href="URL2">スピン＆ゴールド - ELO - 他のプレイヤーの評価を非表示にできるか？</a><br>
    <a href="URL2">スピン＆ゴールド - ELO - 他のプレイヤーの評価を見ることができるか？</a><br>
    <a href="URL2">スピン＆ゴールド - ELO - 評価のランキングから除外できるか？</a><br>
    <a href="URL2">スピン＆ゴールド - ELO - ゲーム開始前に評価ポイントを確認できるか？</a><br>
    <a href="URL2">スピン＆ゴールド - ELO - 評価が保存される期間</a><br>
    <a href="URL2">スピン＆ゴールド - ELO - 評価の正確性</a><br>
    <a href="URL2">スピン＆ゴールド - ELO - ランキングの仕組み</a><br>
    <a href="URL2">スピン＆ゴールド - ELO - 勝利した際の評価ポイントが少ない理由</a><br>
    <a href="URL2">スピン＆ゴールド - ELO - 最大評価は？</a><br>
    <a href="URL2">スピン＆ゴールド - ELO - ELO評価とは？</a><br>
    <a href="URL2">スピン＆ゴールド - ELO - ランキングの開始日</a><br>
    <a href="URL2">スピン＆ゴールド - ELO - プレイヤーの初期評価</a><br>
    <a href="URL2">スピン＆ゴールド - ELO - 評価がテーブルの組み合わせに影響するか？</a><br>
    <a href="URL2">スピン＆ゴールド - ゴーフォーゴールド - よくある質問</a><br>
    <a href="URL2">スピン＆ゴールド - 多数の登録により参加できない理由</a><br>
    <a href="URL2">スピン＆ゴールド - 登録解除後もバイインが課金される理由</a><br>
    <a href="URL2">スピン＆ゴールド - 保険 - モバイルクライアントで保険を購入できるか？</a><br>
    <a href="URL2">スピン＆ゴールド - 保険 - T$で保険を購入可能か？</a><br>
    <a href="URL2">スピン＆ゴールド - 保険 - 3人用ゲームで保険を購入できるか？</a><br>
    <a href="URL2">スピン＆ゴールド - 保険 - 6人用ゲームで保険を購入できるか？</a><br>
    <a href="URL2">スピン＆ゴールド - 保険 - ポーカークラフトで保険履歴の確認方法</a><br>
    <a href="URL2">スピン＆ゴールド - 保険 - 設定で保険のオプションを無効化できるか？</a><br>
    <a href="URL2">スピン＆ゴールド - 保険 - 保険の支払方法とタイミング</a><br>
    <a href="URL2">スピン＆ゴールド - 保険 - 保険の仕組み</a><br>
    <a href="URL2">スピン＆ゴールド - 保険 - 保険の費用</a><br>
    <a href="URL2">スピン＆ゴールド - 保険 - チケットで保険を購入できるか？</a><br>
    <a href="URL2">スピン＆ゴールド - 保険 - 登録後に進行しない場合の保険の払い戻し</a><br>
    <a href="URL2">スピン＆ゴールド - 保険 - 保険を購入したが支払われない理由</a><br>
    <a href="URL2">スピン＆ゴールド - 保険 - 保険履歴の確認方法</a><br>
    <a href="URL2">スピン＆ゴールド - ライブ - カードアップ表示があるか？</a><br>
    <a href="URL2">スピン＆ゴールド - ライブ - 観戦モードからの退出</a><br>
    <a href="URL2">スピン＆ゴールド - ライブ - 観戦中のチャット機能</a><br>
    <a href="URL2">スピン＆ゴールド - ライブ - リプレイは可能か？</a><br>
    <a href="URL2">スピン＆ゴールド - ライブ - 他のプレイヤーから観戦される理由</a><br>
    <a href="URL2">スピン＆ゴールド - ライブ - 観戦可能な条件</a><br>
    <a href="URL2">スピン＆ゴールド - ライブ - 観戦モードとは？</a><br>
    <a href="URL2">スピン＆ゴールド - 保険以外のサイドゲーム</a><br>
    <a href="URL2">スピン＆ゴールド - デイリーチャレンジ - よくある質問</a><br>
    <a href="URL2">スピン＆ゴールド - デイリーチャレンジ - 概要</a><br>
    <a href="URL2">スピン＆ゴールド - 切断時の延長時間（DET）</a><br>
    <a href="URL2">スピン＆ゴールド - ゲーム内のタイムバンク</a><br>
    <a href="URL2">スピン＆ゴールド - ELO - よくある質問</a><br>
    <a href="URL2">スピン＆ゴールド - ELO - 概要</a><br>
    <a href="URL2">スピン＆ゴールド - ゲーム概要</a><br>
    <a href="URL2">スピン＆ゴールド - プレイヤーの行動時間</a><br>
    <a href="URL2">スピン＆ゴールド - 保険 - よくある質問</a><br>
    <a href="URL2">スピン＆ゴールド - 保険 - 概要</a><br>
    <a href="URL2">スピン＆ゴールド - ライブ - よくある質問</a><br>
    <a href="URL2">スピン＆ゴールド - 概要と主要な詳細</a><br>
    <a href="URL2">スピン＆ゴールド - レイク/テーブル手数料</a><br>
    `,
    
    
    battleRoyale: `
        <a href="URL3">バトルロイヤル - ミステリーバトルロイヤル - よくある質問</a><br>
        <a href="URL3">バトルロイヤル - ミステリーバトルロイヤル - 概要</a><br>
        <a href="URL3">バトルロイヤル - テーブルでの待機時間の詳細</a><br>
        `,
    
    flipGo: `
    <a href="URL4">Flip & Go - フリップボーナス - よくある質問</a><br>
    <a href="URL4">Flip & Go - フリップボーナス - 概要</a><br>
    <a href="URL4">Flip & Go - フリップステージ - よくある質問</a><br>
    <a href="URL4">Flip & Go - フリップステージ - 概要</a><br>
    <a href="URL4">Flip & Go - よくある質問</a><br>
    <a href="URL4">Flip & Go - ゴーステージ - よくある質問</a><br>
    <a href="URL4">Flip & Go - ゴーステージ - 概要</a><br>
    <a href="URL4">Flip & Go - スタート時のチップ数</a><br>
    <a href="URL4">Flip & Go - Hold'emのみ利用可能ですか？</a><br>
    <a href="URL4">Flip & Go - 概要と主要な詳細</a><br>
    <a href="URL4">Flip & Go - 概要</a><br>
    <a href="URL4">Flip & Go - 利用可能なバイインレベル</a><br>
    <a href="URL4">Flip & Go - レイク/テーブル手数料</a><br>
    <a href="URL4">Flip & Go - ゲーム内容</a><br>
    <a href="URL4">Flip & Go Millionaire - フリップステージで勝利したら何が起こりますか？</a><br>
    <a href="URL4">Flip & Go Millionaire - アクションを売却できますか？</a><br>
    <a href="URL4">Flip & Go Millionaire - よくある質問</a><br>
    <a href="URL4">Flip & Go Millionaire - 各スタックの費用</a><br>
    <a href="URL4">Flip & Go Millionaire - ゴーステージに既に進出していますが、フリップステージをさらにプレイできますか？</a><br>
    <a href="URL4">Flip & Go Millionaire - 規約と条件</a><br>
    <a href="URL4">Flip & Go Millionaire - フリップステージで購入できる最大スタック数</a><br>
    <a href="URL4">Flip & Go Millionaire - ゲーム内容</a><br>
    <a href="URL4">Flip & Go Millionaire - フリップ＆ゴーミリオネアフライトの開始時期</a><br>
    <a href="URL4">Flip & Go Millionaire - イベント開催日</a><br>
    <a href="URL4">Flip & Go Millionaire - フリップボーナスプロモーションはミリオネアフリップステージでも利用可能ですか？</a><br>
    <a href="URL4">Flip & Go Millionaire - サテライトはありますか？</a><br>
    <a href="URL4">Flip Bonus - スタート時のスタック数</a><br>
    <a href="URL4">Flip Bonus - フリップボーナスとは？</a><br>
    <a href="URL4">Flip Bonus - いつフリップボーナスが付与されますか？</a><br>
    <a href="URL4">Flip Bonus - 対象となるハンド</a><br>
    <a href="URL4">Flip Stage - 勝利後の次のステップ</a><br>
    <a href="URL4">Flip Stage - フリップステージへの再登録は可能ですか？</a><br>
    <a href="URL4">Flip Stage - 残りすべてのフリップステージに登録できますか？</a><br>
    <a href="URL4">Flip Stage - チップの開始数</a><br>
    <a href="URL4">Flip Stage - スタックの費用</a><br>
    <a href="URL4">Flip Stage - 追加エントリーの理由</a><br>
    <a href="URL4">Flip Stage - タイマー切れ時の対応</a><br>
    <a href="URL4">Flip Stage - フリップステージとは？</a><br>
    <a href="URL4">Flip Stage - 購入可能なスタックの最大数</a><br>
    <a href="URL4">Flip Stage - 最小購入スタック数</a><br>
    <a href="URL4">Flip Stage - フリップステージの開催時間</a><br>
    <a href="URL4">Flip Stage - デュアルボードの理由</a><br>
    <a href="URL4">Go Stage - ゴーステージ到達時の報酬</a><br>
    <a href="URL4">Go Stage - 直接購入可能ですか？</a><br>
    <a href="URL4">Go Stage - ディールは可能ですか？</a><br>
    <a href="URL4">Go Stage - フリップボーナス利用可能ですか？</a><br>
    <a href="URL4">Go Stage - 開始予定時間の遅延理由</a><br>
    <a href="URL4">Go Stage - ゴーステージとは？</a><br>
    <a href="URL4">Go Stage - 開始時期</a><br>
    <a href="URL4">Go Stage - ゴーステージ進出時のスタック調整理由</a><br>
    `,
    
    rushCash: `
        <a href="URL1">Rush & Cash - オートフォールド - よくある質問</a><br>
        <a href="URL1">Rush & Cash - オートフォールド - 概要</a><br>
        <a href="URL1">Rush & Cash - キャッシュドロップ - よくある質問</a><br>
        <a href="URL1">Rush & Cash - キャッシュドロップ - 概要</a><br>
        <a href="URL1">キャッシュゲーム - プリフロップでレイクされるハンドについて</a><br>
        <a href="URL1">キャッシュゲーム - ブラインドグループ待機</a><br>
        <a href="URL1">キャッシュゲーム - ランイットスリータイムズについて</a><br>
        <a href="URL1">キャッシュゲーム - キャッシュゲームの概要</a><br>
        <a href="URL1">フィッシュビュッフェ - Rush & Cashでフィッシュポイントが増えない理由</a><br>
        <a href="URL1">Rush & Cash - アンチラソリング対策</a><br>
        <a href="URL1">Rush & Cash - オマハの概要</a><br>
        <a href="URL1">Rush & Cash - 概要と主要な詳細</a><br>
        <a href="URL1">Rush & Cash ゲームの概要</a><br>
        <a href="URL1">Rush & Cash - スワイプアップしてフォールド（モバイル）</a><br>
        <a href="URL1">Deal Choiceの理解</a><br>
        <a href="URL1">レイク付きハンドとは？</a><br>
        <a href="URL1">テーブルでの正確な待機時間は？</a><br>
        `,
    
    holdEm: `
        <a href="URL1">ノーリミットテキサスホールデムの紹介</a><br>
        <a href="URL1">キャッシュゲーム - テーブルを離れる際のペナルティ</a><br>
        <a href="URL1">キャッシュゲーム - プリフロップでレイクされるハンド</a><br>
        <a href="URL1">キャッシュゲーム - ブラインドグループ待機</a><br>
        <a href="URL1">キャッシュゲーム - テーブル離脱後のリエントリー制限</a><br>
        <a href="URL1">キャッシュゲーム - ランイットスリータイムズの理解</a><br>
        <a href="URL1">キャッシュゲーム - 概要</a><br>
        <a href="URL1">ホールデム - 概要と主要な詳細</a><br>
        <a href="URL1">ホールデム - 概要</a><br>
        <a href="URL1">切断時の延長時間（DET）の仕組み</a><br>
        <a href="URL1">ノーリミットホールデムのハンドランキング</a><br>
        <a href="URL1">ホールデムキャッシュゲームのタイムバンク設定</a><br>
        <a href="URL1">Deal Choiceの理解</a><br>
        <a href="URL1">Move Tableの理解</a><br>
        <a href="URL1">レイク付きハンドとは？</a><br>
        <a href="URL1">テーブルでの正確な待機時間</a><br>
        `,
    
        omaha: `
        <a href="URL1">ポットリミットオマハの紹介</a><br>
        <a href="URL1">キャッシュゲーム - テーブルを離れる際のペナルティ</a><br>
        <a href="URL1">キャッシュゲーム - プリフロップでレイクされるハンドについて</a><br>
        <a href="URL1">キャッシュゲーム - ブラインドグループ待機</a><br>
        <a href="URL1">キャッシュゲーム - テーブルを離れても同じ金額で再参加できますか？</a><br>
        <a href="URL1">キャッシュゲーム - ランイットスリータイムズの理解</a><br>
        <a href="URL1">キャッシュゲーム - キャッシュゲームとは？</a><br>
        <a href="URL1">切断時の延長時間（DET）の仕組み</a><br>
        <a href="URL1">オマハ（全バリアント） - 概要</a><br>
        <a href="URL1">オマハ - よくある質問</a><br>
        <a href="URL1">オマハ - ポットリミットオマハにおけるポットリミットの計算方法</a><br>
        <a href="URL1">PLO - 概要と主要な詳細</a><br>
        <a href="URL1">PLO-5 - 概要と主要な詳細</a><br>
        <a href="URL1">ポットリミットオマハのハンドランキング</a><br>
        <a href="URL1">PLOゲームのタイムバンク設定</a><br>
        <a href="URL1">Deal Choiceの理解</a><br>
        <a href="URL1">Move Tableの理解</a><br>
        <a href="URL1">オマハの理解</a><br>
        <a href="URL1">オマハのブラインド構造とレイクの理解</a><br>
        <a href="URL1">レイク付きハンドとは？</a><br>
        <a href="URL1">テーブルでの正確な待機時間は？</a><br>
        `,
    
    shortDeck: `
        <a href="URL1">ショートデッキの紹介</a><br>
        <a href="URL1">キャッシュゲーム - テーブルを離れる際のペナルティ</a><br>
        <a href="URL1">キャッシュゲーム - プリフロップでレイクされるハンドについて</a><br>
        <a href="URL1">キャッシュゲーム - ブラインドグループ待機</a><br>
        <a href="URL1">キャッシュゲーム - テーブルを離れても同じ金額で再参加できますか？</a><br>
        <a href="URL1">キャッシュゲーム - ランイットスリータイムズの理解</a><br>
        <a href="URL1">キャッシュゲーム - キャッシュゲームとは？</a><br>
        <a href="URL1">ショートデッキホールデムの仕組み</a><br>
        <a href="URL1">切断時の延長時間（DET）の仕組み</a><br>
        <a href="URL1">ショートデッキのハンドランキング</a><br>
        <a href="URL1">ショートデッキの概要と主要な詳細</a><br>
        <a href="URL1">ショートデッキキャッシュゲームのタイムバンク設定</a><br>
        <a href="URL1">Deal Choiceの理解</a><br>
        <a href="URL1">Move Tableの理解</a><br>
        <a href="URL1">チップ取り除き機能の理解</a><br>
        <a href="URL1">ショートデッキゲームで利用可能なGGPoker機能</a><br>
        <a href="URL1">ショートデッキポーカーとは？</a><br>
        <a href="URL1">レイク付きハンドとは？</a><br>
        <a href="URL1">テーブルでの正確な待機時間は？</a><br>
        <a href="URL1">ショートデッキで最小のストレートは何ですか？</a><br>
        `,
    
    casino: `
        <a href="URL1">バカラ - バカラの理解</a><br>
        <a href="URL1">ブラックジャック - ブラックジャックのルールの理解</a><br>
        <a href="URL1">ブラックジャック - ブラックジャックの理解</a><br>
        <a href="URL1">カジノゲームのマルチテーブルは可能ですか？</a><br>
        <a href="URL1">カジノボーナス - FAQと概要</a><br>
        <a href="URL1">クラップス - クラップスの理解</a><br>
        <a href="URL1">ラウンドIDの見つけ方</a><br>
        <a href="URL1">ルーレット - ルーレットの理解</a><br>
        <a href="URL1">シックボー - シックボーの理解</a><br>
        <a href="URL1">スロット - ゲームを後でプレイするために保存できますか？</a><br>
        <a href="URL1">スロット - スロットゲーム履歴はどこで確認できますか？</a><br>
        <a href="URL1">スロットの理解</a><br>
        <a href="URL1">ビデオポーカー - ビデオポーカーの理解</a><br>
        <a href="URL1">GGPokerで利用可能なカジノゲームは？</a><br>
        <a href="URL1">カジノゲームの履歴はどこで確認できますか？</a><br>
        `,
    
    otherGameTypes: `
        <a href="URL1">キャッシュゲーム - ブラインドグループ待機</a><br>
        <a href="URL1">チップスタック通貨</a><br>
        <a href="URL1">GGPokerにはSit & Goゲームはありますか？</a><br>
        <a href="URL1">エクスクルーシブゲーム - エクスクルーシブゲームへの招待の基準はありますか？</a><br>
        <a href="URL1">エクスクルーシブゲーム - ホストになる方法は？</a><br>
        <a href="URL1">エクスクルーシブゲーム - エクスクルーシブゲームとホストに関する問い合わせ</a><br>
        <a href="URL1">エクスクルーシブゲーム - エクスクルーシブゲームへの参加方法</a><br>
        <a href="URL1">エクスクルーシブゲームとは？</a><br>
        <a href="URL1">エクスクルーシブゲームへの招待が来なかった場合どうすればよいですか？</a><br>
        <a href="URL1">エクスクルーシブゲームの新機能が通常ゲームでも利用可能になりますか？</a><br>
        <a href="URL1">ミックスゲーム - 他のポーカーのバリアントを提供する予定はありますか？</a><br>
        <a href="URL1">プレイマネー - FAQと概要</a><br>
        `,
    
    dailyGuarantees: `
        <a href="URL1">ファイナルテーブルブラインドロールバック</a><br>
        <a href="URL1">ファイナルテーブルチェスクロック</a><br>
        <a href="URL1">ファイナルテーブルの機能</a><br>
        <a href="URL1">デイリー保証の理解</a><br>
        <a href="URL1">トーナメントの登録解除</a><br>
        `,
    
    bountyHunters: `
        <a href="URL1">バウンティハンターズシリーズ - 2024年10月/11月 - よくある質問</a><br>
        <a href="URL1">バウンティ賞金とディールが成立した場合</a><br>
        <a href="URL1">ファイナルテーブルブラインドロールバック</a><br>
        <a href="URL1">ファイナルテーブルチェスクロック</a><br>
        <a href="URL1">ファイナルテーブルの機能</a><br>
        <a href="URL1">GGPokerバウンティハンターの仕組みと例</a><br>
        <a href="URL1">トーナメントの登録解除</a><br>
        `,
    
    mysteryBounty: `
        <a href="URL1">複数のDay 1に参加できますか？</a><br>
        <a href="URL1">ファイナルフェーズ</a><br>
        <a href="URL1">ファイナルテーブルブラインドロールバック</a><br>
        <a href="URL1">ファイナルテーブルチェスクロック</a><br>
        <a href="URL1">ファイナルテーブルの機能</a><br>
        <a href="URL1">参加費はどれくらいですか？</a><br>
        <a href="URL1">プレイ方法</a><br>
        <a href="URL1">トーナメント賞品としてチケットを受け取りました。なぜですか？</a><br>
        <a href="URL1">初期フェーズ</a><br>
        <a href="URL1">利用規約</a><br>
        <a href="URL1">トーナメントの登録解除</a><br>
        <a href="URL1">複数のDay 1に参加し、複数回ファイナルフェーズに進出した場合どうなりますか？</a><br>
        <a href="URL1">ミステリーバウンティトーナメントと通常のバウンティトーナメントの違いは？</a><br>
        <a href="URL1">場所と日時</a><br>
        <a href="URL1">ミステリーバウンティトーナメントの賞金はどこで確認できますか？</a><br>
        `,
    
    ggMasters: `
        <a href="URL1">すべてのGGMastersイベントはフリーズアウトですか？</a><br>
        <a href="URL1">GGMastersにバウンティイベントはありますか？</a><br>
        <a href="URL1">GGMastersイベントにサテライトで参加できますか？</a><br>
        <a href="URL1">ファイナルテーブルブラインドロールバック</a><br>
        <a href="URL1">ファイナルテーブルチェスクロック</a><br>
        <a href="URL1">ファイナルテーブルの機能</a><br>
        <a href="URL1">GGMastersスケジュール</a><br>
        <a href="URL1">GGMasters開始スタックサイズ</a><br>
        <a href="URL1">オーバーレイエディション - GGMastersオーバーレイエディションとは？</a><br>
        <a href="URL1">トーナメントの登録解除</a><br>
        <a href="URL1">GGMastersとは？</a><br>
        <a href="URL1">フリーズアウトトーナメントとは？</a><br>
        <a href="URL1">GGMastersイベントのバイイン範囲は？</a><br>
        `,
    
    million: `
        <a href="URL1">ファイナルテーブルブラインドロールバック</a><br>
        <a href="URL1">ファイナルテーブルチェスクロック</a><br>
        <a href="URL1">ファイナルテーブルの機能</a><br>
        <a href="URL1">GGMillion$ - GGMillion$ファイナルデーに複数のDay 1で参加できますか？</a><br>
        <a href="URL1">GGMillion$ - GGMillion$にサテライトで参加できますか？</a><br>
        <a href="URL1">GGMillion$ - よくある質問</a><br>
        <a href="URL1">GGMillion$ - GGMillion$の保証金額は？</a><br>
        <a href="URL1">GGMillion$ - サテライトで複数のエントリーを獲得できますか？</a><br>
        <a href="URL1">GGMillion$ - GGMillion$でステーキングは可能ですか？</a><br>
        <a href="URL1">GGMillion$ - 今週のイベントが見つかりません。なぜですか？</a><br>
        <a href="URL1">GGMillion$とは？</a><br>
        <a href="URL1">GGMillion$の開催日程</a><br>
        <a href="URL1">MILLION$シリーズの詳細はどこで確認できますか？</a><br>
        <a href="URL1">GGMillion$概要</a><br>
        <a href="URL1">トーナメントの登録解除</a><br>
        `,
    
    satellites: `
        <a href="URL1">エクスプレスサテライト - All-in or Fold Sit & Go - FAQ</a><br>
        <a href="URL1">エクスプレスサテライト - アバター競争 - FAQ</a><br>
        <a href="URL1">エクスプレスサテライト - Flip & Go Sit & Goサテライト - FAQ</a><br>
        <a href="URL1">エクスプレスサテライト - FAQ</a><br>
        <a href="URL1">エクスプレスサテライト - ロシャムボ（ジャンケン） - FAQ</a><br>
        <a href="URL1">ファイナルテーブルブラインドロールバック</a><br>
        <a href="URL1">ファイナルテーブルチェスクロック</a><br>
        <a href="URL1">ファイナルテーブルの機能</a><br>
        <a href="URL1">トーナメント保証金額を超えた場合の賞金分配方法</a><br>
        <a href="URL1">サテライトトーナメントの登録で特定のイベントを確保するには？</a><br>
        <a href="URL1">サテライトに勝利しましたが、T$賞金が少なかったのはなぜですか？</a><br>
        <a href="URL1">サテライトエントリーで誤ったイベントに登録されました</a><br>
        <a href="URL1">ターゲットイベントに参加できない場合の対応</a><br>
        <a href="URL1">サテライトで獲得したシートをキャンセルできますか？</a><br>
        <a href="URL1">サテライト一時停止の理由</a><br>
        <a href="URL1">ターゲットスタックサテライト - 概要</a><br>
        <a href="URL1">ターゲットスタックサテライト - FAQ</a><br>
        <a href="URL1">サテライトで複数の登録時の対応</a><br>
        <a href="URL1">サテライトとは？</a><br>
        <a href="URL1">サテライトトーナメントでハンドフォーハンドが適用されるタイミングは？</a><br>
        <a href="URL1">サテライト参加中にターゲットトーナメントが変更されました。これはルール内ですか？</a><br>
        <a href="URL1">サテライトが一時停止した理由</a><br>
        <a href="URL1">サテライトの勝利で正しい額が支払われなかった理由</a><br>
        `,
    
    tournamentSeriesSpecialEvents: `
        <a href="URL1">バウンティハンターズシリーズ - 2024年10月/11月 - よくある質問</a><br>
        <a href="URL1">Flip & Go Millionaire - Flipステージをクリア後、Goステージへの進出時の対応</a><br>
        <a href="URL1">Flip & Go Millionaire - アクションの売却は可能ですか？</a><br>
        <a href="URL1">Flip & Go Millionaire - FAQ</a><br>
        <a href="URL1">Flip & Go Millionaire - Flipステージのスタック料金</a><br>
        <a href="URL1">Flip & Go Millionaire - Goステージ資格後の追加Flipステージのプレイ</a><br>
        <a href="URL1">Flip & Go Millionaire - 利用規約</a><br>
        <a href="URL1">Flip & Go Millionaire - Flipステージのスタック購入可能数</a><br>
        <a href="URL1">Flip & Go Millionaireとは？</a><br>
        <a href="URL1">Flip & Go Millionaire - Flip & Go Millionaireフライト開始日程</a><br>
        <a href="URL1">Flip & Go Millionaire - 開催日程</a><br>
        <a href="URL1">Flip & Go Millionaire - Flipボーナスプロモーションの適用</a><br>
        <a href="URL1">Flip & Go Millionaire - サテライトによる割安購入の有無</a><br>
        <a href="URL1">WSOP Paradise 2024 - FAQ</a><br>
        `,
    
        otherTournaments: `
        <a href="URL1">GGPokerのイベントはHendon Mobで追跡されていますか？</a><br>
        <a href="URL1">ロビーのレイトレジストトーナメントは、残りの登録時間で設定されていますか？</a><br>
        <a href="URL1">中国の十二支 - 多くの十二支トーナメントは勝利すると特別なアバターがもらえます。十二支バウンティイベントでもこの報酬は適用されますか？</a><br>
        <a href="URL1">中国の十二支 - 十二支トーナメントにはサテライトがありますか？</a><br>
        <a href="URL1">中国の十二支 - 特別アバター</a><br>
        <a href="URL1">中国の十二支 - 中国の十二支シリーズとは？</a><br>
        <a href="URL1">中国の十二支 - 十二支イベントの最終テーブルでディールが成立した場合、全員が動物アバターを獲得しますか、それともディール時にチップリーダーである参加者のみですか？</a><br>
        <a href="URL1">中国の十二支 - 十二支トーナメントはいつ開催されますか？</a><br>
        <a href="URL1">遅延開始</a><br>
        <a href="URL1">トーナメントはハンド・トゥ・ハンドプレイをサポートしていますか？</a><br>
        <a href="URL1">GGPokerには「オンデマンド」トーナメントがありますか？</a><br>
        <a href="URL1">エルキーダンス</a><br>
        <a href="URL1">エルキーダンス - この機能をオフにできますか？</a><br>
        <a href="URL1">推定期間</a><br>
        <a href="URL1">フィルタ改善 (2023年10月)</a><br>
        <a href="URL1">フィッシュビュッフェ - トーナメントを終了しましたが、フィッシュポイントが更新されないのはなぜですか？</a><br>
        <a href="URL1">GGPoker バウンティハンターの仕組みと例</a><br>
        <a href="URL1">登録していたトーナメントがキャンセルされたかどうかを確認するには？</a><br>
        <a href="URL1">登録したトーナメントを見つけるには？</a><br>
        <a href="URL1">チェスクロックの仕組み</a><br>
        <a href="URL1">現在のトーナメント位置ダッシュボードはプレイヤーにどのような役立ちがありますか？</a><br>
        <a href="URL1">同じトーナメントに2回バイインしたのに、なぜ1つしか登録されておらず、残高が2回引き落とされましたか？</a><br>
        <a href="URL1">GGPokerはトーナメントを¥で提供していますが、この通貨は何ですか？</a><br>
        <a href="URL1">トーナメントのレイトレジスト中であっても登録できない理由は？</a><br>
        <a href="URL1">トーナメントで連続してビッグブラインドになることはありますか？</a><br>
        <a href="URL1">技術的な問題でトーナメントがキャンセルされた場合もフィッシュビュッフェポイントはもらえますか？</a><br>
        <a href="URL1">フェーズイベント - Day 1イベントに登録しようとしたら、Day 2に既に登録しているため参加できないとのメッセージが表示されるのはなぜですか？</a><br>
        <a href="URL1">プライベートトーナメント - ロビーからのパートナーフリーロール</a><br>
        <a href="URL1">トーナメントのカスタムバイインフィルタの設定</a><br>
        <a href="URL1">トーナメント/MTTで座ったままにする</a><br>
        <a href="URL1">トーナメントのタイムバンク設定</a><br>
        <a href="URL1">トーナメントの排除ポリシー</a><br>
        <a href="URL1">トーナメントオーナーズ - 概要</a><br>
        <a href="URL1">トーナメントオーナーズ - メインロビーのトーナメントオーナーズで見つけられる内容は？</a><br>
        <a href="URL1">トーナメントオーナーズ - トーナメントオーナーズとは？</a><br>
        <a href="URL1">トーナメントオーナーズ - 最終テーブルのヘッズアップステージの特徴は？</a><br>
        <a href="URL1">トーナメントオーナーズ - 過去の結果がすべて表示されないのはなぜですか？</a><br>
        <a href="URL1">トーナメント利益グラフ</a><br>
        <a href="URL1">オマホリックの理解</a><br>
        <a href="URL1">リエントリーの理解</a><br>
        <a href="URL1">トーナメントタイプの理解</a><br>
        <a href="URL1">トーナメントの登録解除</a><br>
        <a href="URL1">可変レベルのトーナメントとは？</a><br>
        <a href="URL1">トーナメントが途中でキャンセルされた場合、バイインはどうなりますか？</a><br>
        <a href="URL1">フリーズアウトトーナメントとは？</a><br>
        <a href="URL1">サテライトとは？</a><br>
        <a href="URL1">オーバーレイとは？</a><br>
        <a href="URL1">アドオンやリバイを購入できるのはいつですか？</a><br>
        <a href="URL1">トーナメントのブレイクスケジュールはどこで確認できますか？</a><br>
        <a href="URL1">スタックを失った後、リバイやアドオンができなかった理由は？</a><br>
        <a href="URL1">GGPokerは従来のSit & Goトーナメントを提供していないのはなぜですか？</a><br>
        <a href="URL1">十二支トーナメント - USDでこれらのトーナメントに登録できますか？</a><br>
        `,
    
    stakingBacking: `
        <a href="URL1">調整済みマークアップ</a><br>
        <a href="URL1">自動登録解除</a><br>
        <a href="URL1">GGPokerはステーキング紛争で仲裁を行いますか？</a><br>
        <a href="URL1">出資したプレイヤー（ホース）とチャットできますか？</a><br>
        <a href="URL1">出資したプレイヤー（ホース）の進捗状況を確認できますか？</a><br>
        <a href="URL1">どこでステーキング履歴を確認できますか？</a><br>
        <a href="URL1">上限</a><br>
        <a href="URL1">指名バッカー - よくある質問</a><br>
        <a href="URL1">指名バッカー - 「指名バッカー」とは？</a><br>
        <a href="URL1">ホースがバブルプロテクションで入賞した場合、賞金の一部を受け取ることはできますか？</a><br>
        <a href="URL1">フィッシュビュッフェ - 他プレイヤーのアクションを購入するとフィッシュポイントがもらえますか？</a><br>
        <a href="URL1">好きなプレイヤーがトーナメントアクションを販売しているか確認するには？</a><br>
        <a href="URL1">イベントのステーキング結果を確認するには？</a><br>
        <a href="URL1">ステーキング目的でお気に入りのプレイヤーをフォローする方法は？</a><br>
        <a href="URL1">GGPokerのステーキング販売者リストはどのくらいの頻度で更新されますか？</a><br>
        <a href="URL1">ステーキングの購入方法</a><br>
        <a href="URL1">ステーキングの販売方法</a><br>
        <a href="URL1">ステーキングプロフィールの表示方法</a><br>
        <a href="URL1">ステーキングをキャンセルした場合、トーナメントの登録は解除されますか？</a><br>
        <a href="URL1">マルチエントリーステーキング</a><br>
        <a href="URL1">マルチエントリーステーキング - マルチエントリーの購入方法</a><br>
        <a href="URL1">マルチエントリーステーキング - 複数エントリーの販売方法</a><br>
        <a href="URL1">マルチエントリーステーキングに適用されるシェア希薄化の計算式</a><br>
        <a href="URL1">ステーキング - 概要</a><br>
        <a href="URL1">USD 5000+/CNY ¥5000+のバイインがあるステーキングトーナメント</a><br>
        <a href="URL1">ステーキングの理解</a><br>
        <a href="URL1">Day 2アクションを販売した後、別のDay 1でより大きなスタックを持って参加した場合どうなりますか？</a><br>
        <a href="URL1">設定できる最大上限は？</a><br>
        `,
    
        smartHUD: `
        <a href="URL1">Smart HUDの統計はこの統計と同じですか？</a><br>
        <a href="URL1">主要な統計の内訳 - 概要</a><br>
        <a href="URL1">Smart HUDをオプトアウトして他のプレイヤーに自分のデータを見せないようにできますか？</a><br>
        <a href="URL1">自分の統計をSmart HUDで確認できますか？</a><br>
        <a href="URL1">他のプレイヤーが私の全てのゲームプレイ統計を見ることができますか？</a><br>
        <a href="URL1">Smart HUDの統計はどのように計算されますか？</a><br>
        <a href="URL1">このようなツールを使うことは不正行為とみなされますか？</a><br>
        <a href="URL1">自分が見る統計と、他のプレイヤーが自分の統計を見る際の違いはありますか？</a><br>
        <a href="URL1">Smart HUD - よくある質問</a><br>
        <a href="URL1">Smart HUD - 概要</a><br>
        <a href="URL1">GGPokerが独自のHUDを持ち、商業的なHUDを許可しない理由は？</a><br>
        <a href="URL1">他のプレイヤーをSmart HUDで見る際に表示される基本的な統計とは？</a><br>
        <a href="URL1">3Betとは何ですか？</a><br>
        <a href="URL1">ATSとは何ですか？</a><br>
        <a href="URL1">CBとは何ですか？</a><br>
        <a href="URL1">CCBとは何ですか？</a><br>
        <a href="URL1">FCBとは何ですか？</a><br>
        <a href="URL1">Handsとは何ですか？</a><br>
        <a href="URL1">PFRとは何ですか？</a><br>
        <a href="URL1">RCBとは何ですか？</a><br>
        <a href="URL1">TAFとは何ですか？</a><br>
        <a href="URL1">VPIPとは何ですか？</a><br>
        <a href="URL1">WSDとは何ですか？</a><br>
        <a href="URL1">WTとは何ですか？</a><br>
        <a href="URL1">HUDとは何ですか？</a><br>
        <a href="URL1">GGPokerのSmart HUDとは何ですか？</a><br>
        <a href="URL1">自分の名前の横にある数字は何ですか？</a><br>
        <a href="URL1">他のプレイヤーのSmart HUDディスプレイを開いたときに何が見えますか？</a><br>
        <a href="URL1">Smart HUD、ステーキングプロファイル、PokerCraftでの合計勝利額が異なる理由は？</a><br>
        <a href="URL1">GGPokerが独自のHUDを持ち、商業的なHUDを許可しない理由は？</a><br>
        <a href="URL1">名前の横に炎や氷が表示される理由は？</a><br>
        `,
    
    propBets: `
        <a href="URL1">プロップベットはプライベートですか、それとも公開されますか？</a><br>
        <a href="URL1">バンクロールチャレンジ - FAQと概要</a><br>
        <a href="URL1">ポーカーをプレイしながらプロップベットを作成できますか？</a><br>
        <a href="URL1">プロップベットが開始後にキャンセルできますか？</a><br>
        <a href="URL1">プロップベットの進行状況をリアルタイムで確認できますか？</a><br>
        <a href="URL1">ELOチャレンジ - よくある質問</a><br>
        <a href="URL1">プロップベットの放棄について</a><br>
        <a href="URL1">プレイヤーが同時に保持できるプロップベットの数は？</a><br>
        <a href="URL1">ラストロンガー - よくある質問</a><br>
        <a href="URL1">プロップベットの最大/最小金額とマークアップ</a><br>
        <a href="URL1">プロップベットに関するプレイヤーの制限</a><br>
        <a href="URL1">プロップベット - FAQ</a><br>
        <a href="URL1">プロップベット - ラストロンガー - よくある質問</a><br>
        <a href="URL1">プロップベット - 概要</a><br>
        <a href="URL1">プロップベットの支払い方法</a><br>
        <a href="URL1">プロップベットからの登録解除</a><br>
        <a href="URL1">メンテナンス中のプロップベットの処理</a><br>
        <a href="URL1">ポーカーにおけるプロップベットとは？</a><br>
        <a href="URL1">プロップベットへの参加に何を使用できますか？</a><br>
        <a href="URL1">プロップベットを作成できるのは誰ですか？</a><br>
        `,
    
        earlyBirdBenefits: `
        <a href="URL1">ボーナスチップ - T$でバイインした場合、ボーナスチップはもらえますか？</a><br>
        <a href="URL1">ボーナスチップ - トーナメントの第1レベルに登録した場合のボーナスチップ率は？</a><br>
        <a href="URL1">ボーナスチップ - ボーナスチップはどのように計算されますか？</a><br>
        <a href="URL1">ボーナスチップ - トーナメントがアーリーバードボーナスチップを提供しているか確認する方法は？</a><br>
        <a href="URL1">ボーナスチップ - トーナメントのいくつのレベルまでボーナスチップが提供されますか？</a><br>
        <a href="URL1">ボーナスチップ - チケットでバイインした場合、ボーナスチップはもらえますか？</a><br>
        <a href="URL1">ボーナスチップ - 最初の登録でボーナスチップを受け取り、アーリーバードボーナスチップ期間後に再エントリーした場合、再度ボーナスをもらえますか？</a><br>
        <a href="URL1">ボーナスチップ - サテライトでトーナメントに当選し、アーリーバードボーナスチッププロモーション終了前にイベントに登録されている場合、ボーナスチップはもらえますか？</a><br>
        <a href="URL1">ボーナスチップ - アーリーバードベネフィットボーナスチップとは何ですか？</a><br>
        <a href="URL1">ボーナスチップ - トーナメント開始前に登録した場合のボーナスチップ率は？</a><br>
        <a href="URL1">ボーナスチップ - トーナメントの第5レベルに登録した場合のボーナスチップ率は？</a><br>
        <a href="URL1">ボーナスチップ - トーナメントの第4レベルに登録した場合のボーナスチップ率は？</a><br>
        <a href="URL1">ボーナスチップ - トーナメントの第2レベルに登録した場合のボーナスチップ率は？</a><br>
        <a href="URL1">ボーナスチップ - トーナメントの第3レベルに登録した場合のボーナスチップ率は？</a><br>
        <a href="URL1">ボーナスチップ - 利用可能なボーナスチップの種類は？</a><br>
        <a href="URL1">ボーナスチップ - アーリーバードボーナスチップを提供するトーナメントはどれですか？</a><br>
        <a href="URL1">バブルプロテクション - フィッシュビュッフェポイントも獲得できますか？</a><br>
        <a href="URL1">バブルプロテクション - バッカーもバブルプロテクションを共有しますか？</a><br>
        <a href="URL1">バブルプロテクション - トーナメントの登録方法がバブルプロテクションに影響しますか？</a><br>
        <a href="URL1">バブルプロテクション - T$の支払い確認方法は？</a><br>
        <a href="URL1">バブルプロテクション - トーナメントがバブルプロテクションを提供しているか確認する方法は？</a><br>
        <a href="URL1">バブルプロテクション - バイインはどのように返金されますか？</a><br>
        <a href="URL1">バブルプロテクション - バブルに入る前の順位は何位までですか？</a><br>
        <a href="URL1">バブルプロテクション - バイインのどの部分が支払われるか？</a><br>
        <a href="URL1">バブルプロテクション - 購入したプレイヤーが意図的にバブルで終わらせた場合の対応は？</a><br>
        <a href="URL1">バブルプロテクション - バブルで終了しましたが、支払いが行われません。原因は？</a><br>
        <a href="URL1">バブルプロテクション - イベント開始前に登録し、バブルで敗退した場合、再エントリーしたらバブルプロテクションは維持されますか？</a><br>
        <a href="URL1">バブルプロテクション - サテライトでも利用できますか？</a><br>
        <a href="URL1">バブルプロテクション - バブルプロテクション支払いに必要なプレイヤー数の最小/最大は？</a><br>
        <a href="URL1">バブルプロテクション - 規約と条件</a><br>
        <a href="URL1">バブルプロテクション - 複数のプレイヤーが同時に敗退した場合の対応は？</a><br>
        <a href="URL1">バブルプロテクション - バブルプロテクションとは？</a><br>
        <a href="URL1">バブルプロテクション - バブルプロテクション対象のトーナメントは？</a><br>
        <a href="URL1">バブルプロテクション - 各トーナメントのバブルプロテクション期間終了時は？</a><br>
        <a href="URL1">アーリーバードベネフィット - ボーナスチップ - よくある質問</a><br>
        <a href="URL1">アーリーバードベネフィット - バブルプロテクション - よくある質問</a><br>
        <a href="URL1">アーリーバードベネフィット - バブルプロテクション - 概要</a><br>
        `,
    
    evCashout: `
        <a href="URL1">EVキャッシュアウトに追加料金はかかりますか？</a><br>
        <a href="URL1">EVキャッシュアウトの詳細と制限</a><br>
        <a href="URL1">EVキャッシュアウト - よくある質問</a><br>
        <a href="URL1">EVキャッシュアウト - EVキャッシュアウトを選択してもバッドビートジャックポットの対象となりますか？</a><br>
        <a href="URL1">EVキャッシュアウト - 概要</a><br>
        <a href="URL1">EVキャッシュアウト - ハンドでEVキャッシュアウトが提供されなかった理由は？</a><br>
        <a href="URL1">マルチウェイポットでのEVキャッシュアウト</a><br>
        <a href="URL1">EVキャッシュアウトの仕組み</a><br>
        <a href="URL1">EVキャッシュアウトの計算方法は？</a><br>
        <a href="URL1">時間切れでEVキャッシュアウトを選択できなかった場合は？</a><br>
        <a href="URL1">EVキャッシュアウトが適用されるゲームは？</a><br>
        <a href="URL1">EVキャッシュアウトとは何ですか？</a><br>
        <a href="URL1">EVキャッシュアウトが適用されない場合は？</a><br>
        <a href="URL1">EVキャッシュアウトはいつ支払われますか？</a><br>
        <a href="URL1">ハンドでEVキャッシュアウトが適用されなかった理由は？</a><br>
        `,
    
        
    
        otherFeatures: `
            <a href="URL1">オーディオスペース - オーディオスペースに参加した場合、マイクとスピーカーの設定を制御できますか？</a><br>
            <a href="URL2">オーディオスペース - オーディオスペースのテーブルは監視されていますか？</a><br>
            <a href="URL3">オーディオスペース - ヘルメットモードを有効にした状態でオーディオスペースに参加できますか？</a><br>
            <a href="URL4">オーディオスペース - 複数のオーディオスペースに参加できますか？</a><br>
            <a href="URL5">オーディオスペース - オーディオスペースから退出できますか？</a><br>
            <a href="URL6">オーディオスペース - オーディオスペースが開かれている場合、必ず座らなければなりませんか？</a><br>
            <a href="URL7">オーディオスペース - よくある質問</a><br>
            <a href="URL8">オーディオスペース - オーディオスペースに参加するには？</a><br>
            <a href="URL9">オーディオスペース - オーディオスペースが利用可能かどうかはどう確認できますか？</a><br>
            <a href="URL10">オーディオスペース - 概要</a><br>
            <a href="URL11">オーディオスペースとは何ですか？</a><br>
            <a href="URL12">オーディオスペースを作成できるのは誰ですか？</a><br>
            <a href="URL13">オーディオスペースに座れるのは誰ですか？</a><br>
            <a href="URL14">オーディオスペースはなぜ開発されましたか？</a><br>
            <a href="URL15">アバター - アバターは何回変更できますか？</a><br>
            <a href="URL16">アバター - アバターを最小化して非表示にすることは可能ですか？</a><br>
            <a href="URL17">アバター - アバターを削除できますか？</a><br>
            <a href="URL18">アバター - アバターを変更する方法</a><br>
            <a href="URL19">アバター - NFTアバター</a><br>
            <a href="URL20">アバター - NFTアバターの追加方法</a><br>
            <a href="URL21">ベットマック - よくある質問</a><br>
            <a href="URL22">ベットマック - ベットマックをキャンセルできますか？</a><br>
            <a href="URL23">ベットマック選択後に相手がレイズした場合どうなりますか？</a><br>
            <a href="URL24">ベットマック選択時にカードが公開されますか？</a><br>
            <a href="URL25">ベットマック - AoFキャッシュゲームで利用可能ですか？</a><br>
            <a href="URL26">ベットマック - AoF Sit & Goで利用可能ですか？</a><br>
            <a href="URL27">ベットマック - Flip & Goで利用可能ですか？</a><br>
            <a href="URL28">ベットマック - トーナメントで利用可能ですか？</a><br>
            <a href="URL29">ベットマック - 概要</a><br>
            <a href="URL30">ベットマックの機能とは？</a><br>
            <a href="URL31">ベットマックが利用可能なゲーム</a><br>
            <a href="URL32">ベットマックとは何ですか？</a><br>
            <a href="URL33">いつベットマックできますか？</a><br>
            <a href="URL34">フロップベット - 最低/最大ベット額</a><br>
            <a href="URL35">フロップベット機能をオフにできますか？</a><br>
            <a href="URL36">フロップベット - よくある質問</a><br>
            <a href="URL37">フロップベット - 勝利したフロップベットを確認できますか？</a><br>
            <a href="URL38">フロップベット - 配当/オッズ</a><br>
            <a href="URL39">フロップベット - 概要</a><br>
            <a href="URL40">フロップベットが利用可能なゲーム</a><br>
            <a href="URL41">ハンドが複数回実行された場合どうなりますか？</a><br>
            <a href="URL42">フロップベットとは何ですか？</a><br>
            <a href="URL43">利用可能なベッティングタイプ</a><br>
            <a href="URL44">いつベットできますか？</a><br>
            <a href="URL45">フロップベットに参加できるのは誰ですか？</a><br>
            <a href="URL46">フロップベットが表示されない理由は？</a><br>
            <a href="URL47">ベット表示 - BBとパーセンテージの切り替え</a><br>
            <a href="URL48">スマートベッティングの提案金額を変更できますか？</a><br>
            <a href="URL49">タグ付きプレイヤーの色をリセットできますか？</a><br>
            <a href="URL50">リバーピールをオフにできますか？</a><br>
            <a href="URL51">オーディオスペースを観戦者が聞くことはできますか？</a><br>
            <a href="URL52">チャット - チャットバブルや絵文字が情報を遮っています。削除可能ですか？</a><br>
            <a href="URL53">チャット - チャットの悪用を報告する方法</a><br>
            <a href="URL54">チャット - テーブルチャットの理解</a><br>
            <a href="URL55">チャット - 自動翻訳機能</a><br>
            <a href="URL56">チャット履歴の確認方法</a><br>
            <a href="URL57">チェック/コール事前選択</a><br>
            <a href="URL58">プレイヤーインボックスの確認方法</a><br>
            <a href="URL59">チップスタックのBB表示</a><br>
            <a href="URL60">チップスタックの通貨表示</a><br>
            <a href="URL61">カスタムテーブルレイアウト - よくある質問</a><br>
            <a href="URL62">DNegsスプラッシュダンス</a><br>
            <a href="URL63">DNegsスプラッシュダンス - 機能オフにする方法</a><br>
            <a href="URL64">スクイーズカードの無効化</a><br>
            <a href="URL65">Elkyダンス</a><br>
            <a href="URL66">Elkyダンス - 機能オフにする方法</a><br>
            <a href="URL67">ファイナルテーブルベッティング - よくある質問</a><br>
            <a href="URL68">ファイナルテーブルベッティング - オッズ計算方法</a><br>
            <a href="URL69">ファイナルテーブルにベットする方法</a><br>
            <a href="URL70">ベット後にオッズが変更された場合の対応</a><br>
            <a href="URL71">ファイナルテーブルベットの支払いタイミング</a><br>
            <a href="URL72">ファイナルテーブル参加時にベットは可能ですか？</a><br>
            <a href="URL73">ファイナルテーブルに進出した場合、自分にベットできますか？</a><br>
            <a href="URL74">ファイナルテーブルベッティング - 全ての国で利用可能ですか？</a><br>
            <a href="URL75">ファイナルテーブルベッティング - 全てのトーナメントで利用可能ですか？</a><br>
            <a href="URL76">ファイナルテーブルベッティング - 概要</a><br>
            <a href="URL77">参加者がファイナルテーブルに参加しない場合</a><br>
            <a href="URL78">ファイナルテーブルベッティングとは何ですか？</a><br>
            <a href="URL79">最低ベット額</a><br>
            <a href="URL80">ファイナルテーブルベッティングの締切時刻</a><br>
            <a href="URL81">ファイナルテーブルベッティングのオッズ計算タイミング</a><br>
            <a href="URL82">ベット結果の確認方法</a><br>
            <a href="URL83">4色デッキ</a><br>
            <a href="URL84">グループジョインによるテーブル設定</a><br>
            <a href="URL85">ヘルメットモード - チャットをブロックしつつ絵文字を保持できますか？</a><br>
            <a href="URL86">観戦時にヘルメットモードは有効ですか？</a><br>
            <a href="URL87">ヘルメットモード - よくある質問</a><br>
            <a href="URL88">ヘルメットモードをオフにする方法（PC）</a><br>
            <a href="URL89">ヘルメットモードをオンにする方法（モバイル）</a><br>
            <a href="URL90">ヘルメットモードをオンにする方法（PC）</a><br>
            <a href="URL91">ヘルメットモードを常時オンに設定できない理由</a><br>
            <a href="URL92">ヘルメットモード使用中、新しいテーブルにも適用されますか？</a><br>
            <a href="URL93">ヘルメットモード中にチャットや絵文字を利用できますか？</a><br>
            <a href="URL94">ヘルメットモードを常時オンにするオプションはありますか？</a><br>
            <a href="URL95">ヘルメットモード - 概要</a><br>
            <a href="URL96">ヘルメットモードのブロック機能</a><br>
            <a href="URL97">ヘルメットモードとは何ですか？</a><br>
            <a href="URL98">ヘルメットモード利用タイミング</a><br>
            <a href="URL99">他プレイヤーにヘルメットモード使用がわかるか？</a><br>
            <a href="URL100">ホットキー - 全てのゲームで利用可能ですか？</a><br>
            <a href="URL101">ホットキーにカスタムキーを設定できますか？</a><br>
            <a href="URL102">マウスがホバーするテーブルの緑枠を非表示にする方法</a><br>
            <a href="URL103">マウスボタンをホットキーとして利用する計画はありますか？</a><br>
            <a href="URL104">テーブルにホットキー設定を表示できますか？</a><br>
            <a href="URL105">任意のキーボードキーをホットキーとして利用できますか？</a><br>
            <a href="URL106">マウスボタンをホットキーとして使用できますか？</a><br>
            <a href="URL107">サードパーティソフトでマウスボタンをホットキーにできますか？</a><br>
            <a href="URL108">ホットキー - よくある質問</a><br>
            <a href="URL109">アクティブなテーブルの確認方法</a><br>
            <a href="URL110">ホットキー - 概要</a><br>
            <a href="URL111">ホットキー設定可能なゲーム機能</a><br>
            <a href="URL112">ホットキー設定可能な一般オプション</a><br>
            <a href="URL113">ホットキーとは何ですか？</a><br>
            <a href="URL114">ホットキーで設定可能なテーブル操作</a><br>
            <a href="URL115">ホットキーの存在理由</a><br>
            <a href="URL116">スマートベッティングは自動ですか？</a><br>
            <a href="URL117">テーブルの「いいね/嫌い」リアクション</a><br>
            <a href="URL118">ロビーチャット</a><br>
            <a href="URL119">次のハンドルーレットをオフにする方法</a><br>
            <a href="URL120">次のハンドルーレット - 詳細と制限</a><br>
            <a href="URL121">次のハンドルーレット - よくある質問</a><br>
            <a href="URL122">次のハンドルーレット - ゲームルール</a><br>
            <a href="URL123">次のハンドルーレットの仕組み</a><br>
            <a href="URL124">次のハンドルーレットで勝利したが未支払い</a><br>
            <a href="URL125">モバイルでの次のハンドルーレット</a><br>
            <a href="URL126">PC/デスクトップ表示の次のハンドルーレット</a><br>
            <a href="URL127">次のハンドルーレット - 概要</a><br>
            <a href="URL128">次のハンドルーレット - 規約</a><br>
            <a href="URL129">次のハンドルーレット - ベッティングタイプ</a><br>
            <a href="URL130">次のハンドルーレットをプレイできるゲーム</a><br>
            <a href="URL131">次のハンドルーレットとは？</a><br>
            <a href="URL132">次のハンドルーレットのアクセス方法</a><br>
            <a href="URL133">ノールックオールインの実行</a><br>
            <a href="URL134">ノーターン・ノーショー - FAQと概要</a><br>
            <a href="URL135">プレイマネー - よくある質問</a><br>
            <a href="URL136">プレイヤーメッセージの確認方法</a><br>
            <a href="URL137">RIMT（複数回実行）</a><br>
            <a href="URL138">リバーピール</a><br>
            <a href="URL139">座席外設定</a><br>
            <a href="URL140">スマートベッティングが通常の範囲外を提示することはありますか？</a><br>
            <a href="URL141">スナップカム - 他プレイヤーのスナップカム配信をブロックできますか？</a><br>
            <a href="URL142">観戦者としてスナップカムを利用できますか？</a><br>
            <a href="URL143">スナップカムのアクセスを制限できますか？</a><br>
            <a href="URL144">スナップカム - テーブルを移動しても録画を続けますか？</a><br>
            <a href="URL145">スナップカム - よくある質問</a><br>
            <a href="URL146">スナップカムの使用方法</a><br>
            <a href="URL147">スナップカム - モバイルで利用可能ですか？</a><br>
            <a href="URL148">スナップカム - トーナメントとキャッシュゲームで利用可能ですか？</a><br>
            <a href="URL149">スナップカム - 概要</a><br>
            <a href="URL150">スナップカム - 規約</a><br>
            <a href="URL151">スナップカムとは？</a><br>
            <a href="URL152">スナップカムの最大クリップ長</a><br>
            <a href="URL153">スナップカムを同時に利用できるプレイヤー数</a><br>
            <a href="URL154">スナップカム悪用報告方法</a><br>
            <a href="URL155">スプラッシュ - テーブル全体に一斉にスプラッシュできますか？</a><br>
            <a href="URL156">スプラッシュ - 対象を指定してスプラッシュできますか？</a><br>
            <a href="URL157">他プレイヤーからのスプラッシュをブロックできますか？</a><br>
            <a href="URL158">スプラッシュ - 永続的にオフにできますか？</a><br>
            <a href="URL159">ヘルメットモードでスプラッシュを使用できますか？</a><br>
            <a href="URL160">スプラッシュ - よくある質問</a><br>
            <a href="URL161">スプラッシュの使用方法</a><br>
            <a href="URL162">スプラッシュの仕組み</a><br>
            <a href="URL163">スプラッシュアニメーションを削除できますか？</a><br>
            <a href="URL164">スプラッシュ - 概要</a><br>
            <a href="URL165">利用可能なスプラッシュ</a><br>
            <a href="URL166">スプラッシュ利用のトリガー</a><br>
            <a href="URL167">スプラッシュ使用時の効果</a><br>
            <a href="URL168">ストラドル - よくある質問</a><br>
            <a href="URL169">ストリーマーモード - 各テーブルで個別にオンできますか？</a><br>
            <a href="URL170">ストリーマーモード - よくある質問</a><br>
            <a href="URL171">公式ストリーマーになるには？</a><br>
            <a href="URL172">ストリーマーモードをオンにする方法</a><br>
            <a href="URL173">バランス非表示機能</a><br>
            <a href="URL174">ホールカード非表示機能</a><br>
            <a href="URL175">常時オン設定はありますか？</a><br>
            <a href="URL176">ストリーマーモード - 概要</a><br>
            <a href="URL177">ストリーマーモードの機能</a><br>
            <a href="URL178">ストリーマーモードとは？</a><br>
            <a href="URL179">テーブル配置 - カスタムレイアウトの互換性</a><br>
            <a href="URL180">新規テーブル配置の調整</a><br>
            <a href="URL181">タブレット/モバイルでカスタムレイアウト使用可能？</a><br>
            <a href="URL182">テーブル配置 - よくある質問</a><br>
            <a href="URL183">デスクトップでのテーブルサイズ調整方法</a><br>
            <a href="URL184">保存可能なカスタムレイアウト数</a><br>
            <a href="URL185">画面上に表示可能なテーブル数</a><br>
            <a href="URL186">背景色変更方法</a><br>
            <a href="URL187">カードデザインの変更方法</a><br>
            <a href="URL188">テーブルフェルトの色変更方法</a><br>
            <a href="URL189">カスタムレイアウトとは？</a><br>
            <a href="URL190">画面解像度変化時のカスタムレイアウトの動作</a><br>
            <a href="URL191">GGPokerでの最大プレイテーブル数</a><br>
            <a href="URL192">デバイス間でカスタムレイアウトを共有可能？</a><br>
            <a href="URL193">テーブルチャット - どの言語でも発言できますか？</a><br>
            <a href="URL194">テーブル機能 - 座席外/退席</a><br>
            <a href="URL195">自動リバイ設定方法</a><br>
            <a href="URL196">テーブル背景</a><br>
            <a href="URL197">取引選択の理解</a><br>
            <a href="URL198">テーブル移動の理解</a><br>
            <a href="URL199">テーブル移動の理解</a><br>
            <a href="URL200">ラビットハントの理解</a><br>
            <a href="URL201">カード表示の理解</a><br>
            <a href="URL202">プレイヤーノートの理解</a><br>
            <a href="URL203">音声メッセージのブロック方法</a><br>
            <a href="URL204">クライアントでの音声メッセージの翻訳方法</a><br>
            <a href="URL205">音声メッセージにチャットルールが適用されるか？</a><br>
            <a href="URL206">音声メッセージ - 英語限定ですか？</a><br>
            <a href="URL207">音声メッセージ - よくある質問</a><br>
            <a href="URL208">チャットポリシー違反報告方法</a><br>
            <a href="URL209">音声メッセージの送信方法</a><br>
            <a href="URL210">無音の音声メッセージが送信される原因</a><br>
            <a href="URL211">音声メッセージとは？</a><br>
            <a href="URL212">音声メッセージは自動再生されますか？</a><br>
            <a href="URL213">BGMの意味と無効化方法</a><br>
            <a href="URL214">スマートベッティングとは？</a><br>
            <a href="URL215">オーディオスペースの利用場所</a><br>
        `,
    
        pokerCraft: `
        <a href="URL1">オールインまたはフォールド - ゲーム履歴</a><br>
        <a href="URL1">オールインまたはフォールド - Sit & Go - PokerCraftに履歴が表示されますか？</a><br>
        <a href="URL1">オールインまたはフォールド (AoF) - ポジション</a><br>
        <a href="URL1">オールインまたはフォールド - ハンド履歴をダウンロードする方法</a><br>
        <a href="URL1">オールインEV</a><br>
        <a href="URL1">オールインまたはフォールド (AoF)</a><br>
        <a href="URL1">オールインまたはフォールド (AoF) - EVグラフ</a><br>
        <a href="URL1">オールインまたはフォールド (AoF) - ラック</a><br>
        <a href="URL1">オールインまたはフォールド (AoF) - 対戦相手</a><br>
        <a href="URL1">オールインまたはフォールド - 最も強い/弱いポジション</a><br>
        <a href="URL1">オールイン率とは何ですか？</a><br>
        <a href="URL1">PokerCraftに表示される統計はレイクを含みますか？</a><br>
        <a href="URL1">PokerCraftで支払いを見ることができますか？</a><br>
        <a href="URL1">バトルロイヤル</a><br>
        <a href="URL1">バトルロイヤル - ゲームサマリーのダウンロード</a><br>
        <a href="URL1">バトルロイヤル - ハンド履歴のダウンロード</a><br>
        <a href="URL1">バトルロイヤル - 最終平均成績</a><br>
        <a href="URL1">バトルロイヤル - ゲーム履歴</a><br>
        <a href="URL1">バトルロイヤルで特定のハンドを検索したい場合</a><br>
        <a href="URL1">バトルロイヤル - 総ゲーム数</a><br>
        <a href="URL1">バトルロイヤル - 総キル数</a><br>
        <a href="URL1">GGPokerにログインしていない場合でもPokerCraftにアクセスできますか？</a><br>
        <a href="URL1">PokerCraftからハンド履歴をエクスポートできますか？</a><br>
        <a href="URL1">PokerCraftでプレイヤーのメモを作成できますか？</a><br>
        <a href="URL1">PokerCraftにないハンド履歴をリクエストできますか？</a><br>
        <a href="URL1">履歴をリセットすることはできますか？</a><br>
        <a href="URL1">PokerCraftの履歴をリセットまたは削除できますか？</a><br>
        <a href="URL1">勝利したハンドで検索できますか？</a><br>
        <a href="URL1">PokerCraft内でプレイヤーを検索できますか？</a><br>
        <a href="URL1">PokerCraftでブラインドレベルでゲーム履歴を検索できますか？ (PLO5またはPLO6)</a><br>
        <a href="URL1">PokerCraftでHold'emのブラインドレベルでゲーム履歴を検索できますか？</a><br>
        <a href="URL1">PokerCraftでPLOのブラインドレベルでゲーム履歴を検索できますか？</a><br>
        <a href="URL1">ハンドバリューで検索できますか？</a><br>
        <a href="URL1">ホールカードで検索できますか？</a><br>
        <a href="URL1">Hold'emセッションのハンドをすばやく検索できますか？</a><br>
        <a href="URL1">オマハ（全バリアント）のセッションのハンドをすばやく検索できますか？</a><br>
        <a href="URL1">ITMで終了したバトルロイヤルゲームだけを検索できますか？</a><br>
        <a href="URL1">過去のトーナメントを年別に検索できますか？</a><br>
        <a href="URL1">PokerCraftでチャット履歴を確認できますか？</a><br>
        <a href="URL1">結果やデータをオンラインで共有できますか？</a><br>
        <a href="URL1">すべてのプレイヤーノートを一度に表示できますか？</a><br>
        <a href="URL1">他人のPokerCraftを閲覧できますか？</a><br>
        <a href="URL1">他のプレイヤーが私のPokerCraftを閲覧できますか？</a><br>
        <a href="URL1">他のプレイヤーが私のPokerCraftノートを閲覧できますか？</a><br>
        <a href="URL1">完了したトーナメント</a><br>
        <a href="URL1">PokerCraftを表示するにはGGPokerにログインする必要がありますか？</a><br>
        <a href="URL1">PokerCraftはレイクを表示しますか？</a><br>
        <a href="URL1">PokerCraftのEVグラフには非ショーダウンハンドが含まれますか？</a><br>
        <a href="URL1">PokerCraftのハンド履歴はプレイヤーが欠席中であるかどうかを示しますか？</a><br>
        <a href="URL1">ハンド履歴をダウンロードする方法</a><br>
        <a href="URL1">Hold'em</a><br>
        <a href="URL1">Hold'em - ベスト&ワーストハンド</a><br>
        <a href="URL1">Hold'em - ハンド履歴のダウンロード</a><br>
        <a href="URL1">Hold'em - ゲーム履歴</a><br>
        <a href="URL1">Hold'em - ホールカードマトリックス</a><br>
        <a href="URL1">Hold'em - セッションの検索方法</a><br>
        <a href="URL1">PokerCraftでダウンロード可能なHold'emハンド数の制限はありますか？</a><br>
        <a href="URL1">Hold'em - ラック</a><br>
        <a href="URL1">Hold'em - 対戦相手</a><br>
        <a href="URL1">Hold'em - ポジション</a><br>
        <a href="URL1">Hold'em - 最強と最弱のポジション</a><br>
        <a href="URL1">Hold'em EVグラフ</a><br>
        <a href="URL1">デスクトップアプリケーションからPokerCraftにアクセスする方法</a><br>
        <a href="URL1">モバイルアプリケーションからPokerCraftにアクセスする方法</a><br>
        <a href="URL1">モバイルでプレイしたハンドの履歴を確認する方法</a><br>
        <a href="URL1">ラックファクターの決定方法</a><br>
        <a href="URL1">トーナメント - 平均バイイン</a><br>
        <a href="URL1">トーナメント - ブラインドレベルでの検索方法</a><br>
        <a href="URL1">トーナメント - チップグラフ</a><br>
        <a href="URL1">トーナメント - ゲームサマリーのダウンロード</a><br>
        <a href="URL1">トーナメント - ハンド履歴のダウンロード</a><br>
        <a href="URL1">トーナメント - ゲーム履歴</a><br>
        <a href="URL1">トーナメント - 最高バイイン</a><br>
        <a href="URL1">トーナメント - ITM</a><br>
        <a href="URL1">トーナメント - 最大勝利額</a><br>
        <a href="URL1">トーナメント - 最低バイイン</a><br>
        <a href="URL1">トーナメント - 概要</a><br>
        <a href="URL1">トーナメント - 総賞金</a><br>
        <a href="URL1">トーナメント - トーナメント情報</a><br>
        <a href="URL1">オマハ（全バリアント） - ハンド履歴のダウンロード</a><br>
        <a href="URL1">オマハ（全バリアント） - EVグラフ</a><br>
        <a href="URL1">オマハ（全バリアント） - ゲーム履歴</a><br>
        <a href="URL1">オマハ（全バリアント） - 最強と最弱のポジション</a><br>
        <a href="URL1">オマハ（全バリアント） - 概要</a><br>
        <a href="URL1">オマハ（全バリアント） - ポジション</a><br>
        <a href="URL1">オマハセッションの検索方法</a><br>
        <a href="URL1">PokerCraftにダウンロード可能なオマハハンド数の制限はありますか？</a><br>
        <a href="URL1">オマハ - ラック</a><br>
        <a href="URL1">オマハ - 対戦相手</a><br>
        <a href="URL1">PokerCraftでPLO5やPLO6のタブが見つからない理由</a><br>
        <a href="URL1">プレイヤースタッツ&メモ</a><br>
        <a href="URL1">バトルロイヤル - セッションの検索方法</a><br>
        <a href="URL1">Rush & Cash - Hold'emハンド履歴のダウンロード</a><br>
        <a href="URL1">Rush & Cash - オマハハンド履歴のダウンロード</a><br>
        <a href="URL1">Rush & Cash - EVグラフ</a><br>
        <a href="URL1">Rush & Cash - ゲーム履歴</a><br>
        <a href="URL1">Rush & Cash - ホールカード</a><br>
        <a href="URL1">Rush & Cash - Hold'emの履歴検索方法</a><br>
        <a href="URL1">Rush & Cash - オマハの履歴検索方法</a><br>
        <a href="URL1">Rush & Cash - ポジション</a><br>
        <a href="URL1">Rush & Cash 概要</a><br>
        <a href="URL1">ショートデッキ - ベスト&ワーストハンド</a><br>
        <a href="URL1">ショートデッキ - ハンド履歴のダウンロード</a><br>
        <a href="URL1">ショートデッキ - EVグラフ</a><br>
        <a href="URL1">ショートデッキ - ゲーム履歴</a><br>
        <a href="URL1">ショートデッキ - ホールカードマトリックス</a><br>
        <a href="URL1">ショートデッキ - セッションの検索方法</a><br>
        <a href="URL1">ショートデッキ - ラック</a><br>
        <a href="URL1">ショートデッキ - 対戦相手データ</a><br>
        <a href="URL1">ショートデッキ - ポジション</a><br>
        <a href="URL1">ショートデッキ - 最強と最弱のポジション</a><br>
        <a href="URL1">ショートデッキ 概要</a><br>
        <a href="URL1">Spin & Gold - ゲームサマリーのダウンロード</a><br>
        <a href="URL1">Spin & Gold - ハンド履歴のダウンロード</a><br>
        <a href="URL1">Spin & Gold - ゲーム履歴</a><br>
        <a href="URL1">Spin & Goldでプレイしたゲームの検索方法</a><br>
        <a href="URL1">Spin & Goldで複数ゲームを選択してレビューするとエラーが発生する理由</a><br>
        <a href="URL1">Spin & Goldの賞金履歴を確認できる場所は？</a><br>
        <a href="URL1">Spin & Gold - 概要</a><br>
        <a href="URL1">ステーキングプロファイル - 平均マークアップ</a><br>
        <a href="URL1">ステーキングプロファイルに画像を追加できますか？</a><br>
        <a href="URL1">ステーキングプロファイルのコメントを削除できますか？</a><br>
        <a href="URL1">PokerCraftでステーキングプロファイルを編集できますか？</a><br>
        <a href="URL1">ステーキングプロファイル - コメントセクション/ステーキングウォール</a><br>
        <a href="URL1">ステーキングプロファイル - ITM %</a><br>
        <a href="URL1">ステーキングプロファイル - プロフィット数</a><br>
        <a href="URL1">ステーキングプロファイル - ROI</a><br>
        <a href="URL1">ステーキングプロファイル - ステーキング履歴</a><br>
        <a href="URL1">ステーキングプロファイル - 総投資額</a><br>
        <a href="URL1">ステーキングプロファイル - 総利益</a><br>
        <a href="URL1">ステーキングプロファイル - 総リターン</a><br>
        <a href="URL1">ステーキングプロファイル - 総賞金</a><br>
        <a href="URL1">ステーキングプロファイル - トーナメント履歴</a><br>
        <a href="URL1">ステーキングプロファイル概要</a><br>
        <a href="URL1">タイムライン - フィッシュビュッフェ</a><br>
        <a href="URL1">タイムライン - GGCare & GGCheers</a><br>
        <a href="URL1">タイムライン - ハイライト</a><br>
        <a href="URL1">タイムライン - ジャックポット</a><br>
        <a href="URL1">タイムライン - メッセージ</a><br>
        <a href="URL1">タイムライン - マイミッション</a><br>
        <a href="URL1">タイムライン - マイプロモーション</a><br>
        <a href="URL1">タイムライン - お気に入り</a><br>
        <a href="URL1">タイムライン - トーナメント</a><br>
        <a href="URL1">タイムライン - 取引履歴</a><br>
        <a href="URL1">タイムライン - PokerCraftタイムラインとは？</a><br>
        <a href="URL1">トーナメント - 複数のトーナメントゲームを選択してレビューするとエラーが発生する理由</a><br>
        <a href="URL1">PokerCraftでダウンロード可能なトーナメントハンド数に制限はありますか？</a><br>
        <a href="URL1">ユニバーサルプレイヤーノートの理解</a><br>
        <a href="URL1">PokerCraftとサードパーティのトラッキングソフトウェアの違い</a><br>
        <a href="URL1">PokerCraftはどの言語に対応していますか？</a><br>
        <a href="URL1">PokerCraftはどのタイムゾーンを使用していますか？</a><br>
        <a href="URL1">PokerCraftの統計はプレイセッション後いつ更新されますか？</a><br>
        <a href="URL1">Smart HUD、ステーキングプロファイル、PokerCraftで賞金額が異なる理由</a><br>
        <a href="URL1">PokerCraftのEVグラフが実際の結果と一致しない理由</a><br>
        <a href="URL1">PokerCraftは切断をログに記録しますか？</a><br>
        <a href="URL1">PokerCraftで作成したメモとラベルはテーブルで表示されますか？</a><br>
        `,
    
        gameIntegrity: `
        <a href="URL1">他のサイトでHUD/トラッキングソフトを使用している間、GGPokerのテーブルを開くことはできますか？</a><br>
        <a href="URL1">ポーカートラッカー/Hand 2 Note、もしくはその他のHUDを使用してもいいですか？</a><br>
        <a href="URL1">同じ家/IPから複数の人がGGPokerでプレイできますか？</a><br>
        <a href="URL1">調査が必要な事案をセキュリティ部門に報告するにはどうすればいいですか？</a><br>
        <a href="URL1">GGPokerのRNG（乱数生成器）に疑問がありますが、第三者機関により検証されていますか？</a><br>
        <a href="URL1">強い手で負けることが多いと感じます。ゲームが公平であることはどう確認できますか？</a><br>
        `,
    
    otherGameRelatedQueries: `
        <a href="URL1">ファイナルテーブルベッティング - いつファイナルテーブルで賭けを行うことができますか？</a><br>
        <a href="URL1">プレイマネー</a><br>
        <a href="URL1">ミスクリックの払い戻し</a><br>
        <a href="URL1">ストラドル - ストラドルとは何ですか？</a><br>
        <a href="URL1">テーブル配置 - カスタムテーブルレイアウトより少ないテーブルを開いている場合でも配置できますか？</a><br>
        <a href="URL1">ショーダウンの理解</a><br>
        `,
    
    howToDeposit: `
        <a href="URL1">ブラジルのBanco do Brasil、Bradesco、Caixa、その他の地元銀行で出金するにはどうすればいいですか？</a><br>
        <a href="URL2">ブラジルのBanco do Brasil、Bradesco、Caixa、その他の地元銀行で入金する方法</a><br>
        <a href="URL3">Boletoでの入金方法</a><br>
        <a href="URL4">PaySafeCardを使用した入金方法</a><br>
        <a href="URL5">Tether USDT (ERC20)での入金方法</a><br>
        <a href="URL6">Trustlyを使用した入金方法</a><br>
        <a href="URL7">USDC (BEP20)での入金方法</a><br>
        <a href="URL8">資金を入金する方法</a><br>
        <a href="URL9">Interacを使用した入金方法</a><br>
        <a href="URL10">MuchBetterを使用した入金方法</a><br>
        <a href="URL11">Netellerを使用した入金方法</a><br>
        <a href="URL12">PayPalを使用した入金方法</a><br>
        <a href="URL13">Pixを使用した入金方法</a><br>
        <a href="URL14">Skrillを使用した入金方法</a><br>
        <a href="URL15">Volt Wire Transferを使用した入金方法</a><br>
        <a href="URL16">ecoPayzを使用した入金方法</a><br>
        <a href="URL17">入金の方法</a><br>
        <a href="URL18">MiFinity e-walletでの入金方法</a><br>
        <a href="URL19">Pay4Fun e-Walletを使用した入金方法</a>
        `,
    
        otherDepositQueries: `
        <a href="URL20">AstroPay ドキュメント ID - これは何を意味しますか？</a><br>
        <a href="URL21">利用可能な支払い方法</a><br>
        <a href="URL22">受け取ったBTCの金額が正しくないようです</a><br>
        <a href="URL23">プリペイドクレジットカードやギフトカードを使用できますか？</a><br>
        <a href="URL24">現地通貨で入金できますか？</a><br>
        <a href="URL25">ある暗号通貨で入金し、別の暗号通貨で出金できますか？</a><br>
        <a href="URL26">AstroPayカードで入金または出金を受け取ることができますか？</a><br>
        <a href="URL27">他人のカードを使用して入金できますか？</a><br>
        <a href="URL28">入金のキャンセル</a><br>
        <a href="URL29">クレジットカード取引と記載日についての説明</a><br>
        <a href="URL30">暗号通貨取引のエラー</a><br>
        <a href="URL31">EcoPayzでの入金が失敗しましたか？</a><br>
        <a href="URL32">カードでの入金が突然できなくなりました</a><br>
        <a href="URL33">入金の処理時間</a><br>
        <a href="URL34">Vanilla (プリペイド) カードでの入金</a><br>
        <a href="URL35">カードは使用可能ですか？</a><br>
        <a href="URL36">重複したカード取引</a><br>
        <a href="URL37">手数料と限度額</a><br>
        <a href="URL38">GWエラーコード: -1100</a><br>
        <a href="URL39">クレジットカード情報の更新方法</a><br>
        <a href="URL40">Interacの振込にはどれくらい時間がかかりますか？</a><br>
        <a href="URL41">Interac返金にはどれくらい時間がかかりますか？</a><br>
        <a href="URL42">デビット/クレジットカードでの入金がアカウントに反映されるまでの時間</a><br>
        <a href="URL43">入金取引の失敗理由を確認する方法</a><br>
        <a href="URL44">キャッシャーに入金や出金のオプションが表示されません。なぜですか？</a><br>
        <a href="URL45">Interacが読み込まれない場合の対処法</a><br>
        <a href="URL46">Interac参照番号の場所</a><br>
        <a href="URL47">LuxonPay - 通貨の交換</a><br>
        <a href="URL48">入金が見つかりません</a><br>
        <a href="URL49">MuchBetter 国コードの要件</a><br>
        <a href="URL50">カード入金が拒否された理由は何ですか？</a><br>
        <a href="URL51">クレジット/デビットカードが請求されましたが、アカウントに反映されません</a><br>
        <a href="URL52">「Do Not Honor」エラーにより入金が失敗しました</a><br>
        <a href="URL53">デビット/クレジットカードでの入金が失敗した理由</a><br>
        <a href="URL54">3D認証エラー（カード）により入金が失敗しました</a><br>
        <a href="URL55">Neteller（決済ハンドル）エラー</a><br>
        <a href="URL56">Neteller認証コード</a><br>
        <a href="URL57">支払いサービス &（未クレジット）取引確認</a><br>
        <a href="URL58">Skrill/Neteller：残高不足</a><br>
        <a href="URL59">カード所有者に対して取引が許可されていません</a><br>
        <a href="URL60">Netellerを使用してGGPokerアカウントに資金を提供する方法</a><br>
        <a href="URL61">Skrillを使用してGGPokerアカウントに資金を提供する方法</a><br>
        <a href="URL62">GGPokerはどの暗号通貨を受け入れていますか？</a><br>
        <a href="URL63">自国で利用可能な支払いオプションは何ですか？</a><br>
        <a href="URL64">入金時の為替レートはどうなっていますか？</a><br>
        <a href="URL65">自国で利用可能な支払い方法は何ですか？</a><br>
        <a href="URL66">まだ入金が反映されていないのはなぜですか？</a><br>
        <a href="URL67">表示されている為替レートがGoogleと異なる理由</a><br>
        <a href="URL68">なぜ入金が処理されなかったのですか？</a><br>
        <a href="URL69">入金時に手数料がかかったのはなぜですか？</a><br>
        <a href="URL70">Interacの入金が拒否された理由</a>
        `,
    
    howToWithdraw: `
        <a href="URL1">メキシコの現地銀行経由での出金方法</a><br>
        <a href="URL2">出金リクエストの方法</a><br>
        <a href="URL3">PayPalでの出金方法</a><br>
        <a href="URL4">ビットコインを使用した出金方法</a><br>
        <a href="URL5">Trustlyを使用した出金方法</a><br>
        <a href="URL6">USDC (BEP20) を使用した出金方法</a><br>
        <a href="URL7">Interac経由での出金方法</a>
        `,
    
        otherWithdrawalQueries: `
        <a href="URL8">オンライン取引は安全ですか？</a><br>
        <a href="URL9">利用可能な支払い方法</a><br>
        <a href="URL10">残高引き出し要件</a><br>
        <a href="URL11">CFT（クレジット資金送金）対応カード</a><br>
        <a href="URL12">ある暗号通貨で入金して、別の暗号通貨で出金できますか？</a><br>
        <a href="URL13">Astropayカードでの入金や出金は可能ですか？</a><br>
        <a href="URL14">複数の引き出しを同時に処理できますか？</a><br>
        <a href="URL15">クレジットカードの取引と処理日についての説明</a><br>
        <a href="URL16">手数料と限度額</a><br>
        <a href="URL17">引き出しにはどれくらい時間がかかりますか？</a><br>
        <a href="URL18">Interac転送にはどれくらいの時間がかかりますか？</a><br>
        <a href="URL19">同時に保留できる引き出しリクエストの数は？</a><br>
        <a href="URL20">キャッシャーに入金や出金のオプションが表示されないのはなぜですか？</a><br>
        <a href="URL21">Interacが読み込まれません。どうすれば良いですか？</a><br>
        <a href="URL22">引き出しが保留中です - これは何を意味しますか？</a><br>
        <a href="URL23">引き出しにTBDと表示されています - これは何を意味しますか？</a><br>
        <a href="URL24">支払いサービスと（未入金）取引確認</a><br>
        <a href="URL25">税金情報（引き出し）</a><br>
        <a href="URL26">GGPokerが対応する暗号通貨は何ですか？</a><br>
        <a href="URL27">自国で利用可能な支払いオプションは何ですか？</a><br>
        <a href="URL28">引き出しが拒否された理由を確認する場所</a><br>
        <a href="URL29">なぜ引き出しがまだ届かないのですか？</a><br>
        <a href="URL30">なぜ引き出しが失敗するのですか？</a><br>
        <a href="URL31">Googleと異なる為替レートの理由</a><br>
        <a href="URL32">なぜ引き出しが失敗しましたか？</a><br>
        <a href="URL33">なぜ引き出しが拒否されましたか？</a><br>
        <a href="URL34">引き出しの処理時間</a><br>
        <a href="URL35">Paysafecardによる引き出し</a><br>
        <a href="URL36">プレイヤー間の送金後の引き出し</a><br>
        <a href="URL37">本人確認なしでの引き出し</a><br>
        `,
    
    transactionHistory: `
        <a href="URL1">入金と引き出しの取引履歴の確認方法</a><br>
        <a href="URL2">支払い履歴（入金/引き出し等）</a>
        `,
    
    transfersQueries: `
        <a href="URL3">転送された（P2P）資金を引き出せますか？</a><br>
        <a href="URL4">プレイヤー間の送金（現金）</a><br>
        <a href="URL5">C$の転送</a><br>
        <a href="URL6">T$の転送</a><br>
        <a href="URL7">プレイヤー間の送金後の引き出し</a>
        `,
    
    tCurrency: `
        <a href="URL8">トーナメントドル（T$）- 概要</a><br>
        <a href="URL9">T$の転送</a>
        `,
    
    cCurrency: `
        <a href="URL10">C$ - キャッシュゲームドル FAQ</a><br>
        <a href="URL11">キャッシュドル（C$） - 概要</a><br>
        <a href="URL12">異なる通貨でのゲームについて</a><br>
        <a href="URL13">C$の転送</a>
        `,
    
    tickets: `
        <a href="URL14">キャッシュゲームチケット - よくある質問</a><br>
        <a href="URL15">チケットの確認方法</a><br>
        <a href="URL16">チケットを現金に交換できますか？</a><br>
        <a href="URL17">チケットが「交換不可」と表示される理由は？</a><br>
        <a href="URL18">チケットの交換機能</a><br>
        <a href="URL19">チケット - 概要</a><br>
        <a href="URL20">トーナメントチケットの転送</a><br>
        <a href="URL21">チケットの有効期限を確認する場所</a>
        `,
    
    
    otherCashierQueries: `
        <a href="URL22">オンライン取引の安全性は確保されていますか？</a><br>
        <a href="URL23">キャッシャーページが読み込まれません</a><br>
        <a href="URL24">クレジットカード情報をメールで送信する必要がありますか？</a>
        `,
    
    connectionIssues: `
        <a href="URL25">アプリがクラッシュ/フリーズする - よくある質問</a><br>
        <a href="URL26">ポーカークライアント内でネットワーク接続状況を確認できますか？</a><br>
        <a href="URL27">接続問題とDNS設定</a><br>
        <a href="URL28">GGPokerが正しく読み込まれない</a><br>
        <a href="URL29">接続が悪いかどうかを知る方法</a><br>
        <a href="URL30">Rush & Cashテーブルが閉じない場合の対処法</a><br>
        <a href="URL31">サービス障害 - 2024年7月1日</a><br>
        <a href="URL32">アプリの遅延に起因するテーブルの問題</a><br>
        <a href="URL33">テーブルを離れたときにチップがアカウントに戻されていないと思われる場合の対処法</a><br>
        <a href="URL34">ハンド中に切断した場合の対処法</a><br>
        <a href="URL35">ソフトウェアが応答しなくなり、トーナメントに参加できない場合の対処法</a><br>
        <a href="URL36">BRAND INTERNAL ERRORとは何ですか？</a><br>
        <a href="URL37">一部のテーブルは動作しているが、他のテーブルが機能しない理由</a>
        `,
    
    downloadInstallation: `
        <a href="URL1">GGPokerでAndroidエミュレーターを使用できますか？</a><br>
        <a href="URL2">Windows 7でGGPokerを利用できますか？</a><br>
        <a href="URL3">アンチウイルスプログラムとの衝突</a><br>
        <a href="URL4">Mac用のポーカークライアントのダウンロードとインストール方法</a><br>
        <a href="URL5">Windows用のポーカークライアントのダウンロードとインストール方法</a><br>
        <a href="URL6">Androidデバイスへのモバイルアプリのインストール方法</a>
        `,
    
    windowsClient: `
        <a href="URL7">AMD Radeonグラフィックカードのドライバ問題 [黒画面]</a><br>
        <a href="URL8">ソフトウェアを更新後、アンチウイルスがトロイの木馬を検出した場合の対処法</a><br>
        <a href="URL9">モバイルとデスクトップ間でアプリを切り替えてもゲームを続行できますか？</a><br>
        <a href="URL10">Windows 7でGGPokerを利用できますか？</a><br>
        <a href="URL11">アンチウイルスプログラムとの衝突</a><br>
        <a href="URL12">GGPokerは仮想マシンをサポートしていますか？</a><br>
        <a href="URL13">致命的なエラー - DSTのリネームに失敗しました</a><br>
        <a href="URL14">DNSのフラッシュ [Windows 10]</a><br>
        <a href="URL15">GGPokerのデバイス仕様、要件、おすすめのプレイ設定（Windows）</a><br>
        <a href="URL16">Windowsでの一時ファイルのクリア方法</a><br>
        <a href="URL17">Windows用のポーカークライアントのダウンロードとインストール方法</a><br>
        <a href="URL18">Windows PCやMacでの画面録画方法</a><br>
        <a href="URL19">Windowsでのブラウザキャッシュのクリア方法</a><br>
        <a href="URL20">アンチウイルスがGGPokerをブロックしている場合の対処法</a><br>
        <a href="URL21">クリーンインストールの実施方法（Windows）</a><br>
        <a href="URL22">PC（デスクトップ）でのスクリーンショットの撮り方</a><br>
        <a href="URL23">トーナメントリストの色が表示されない場合の対処法</a><br>
        <a href="URL24">エラーコード: 2503とは？</a><br>
        <a href="URL25">GGPokerの最低システム要件/仕様とは？</a>
        `,
    
    macOSClient: `
        <a href="URL26">アンチウイルスプログラムとの衝突</a><br>
        <a href="URL27">GGPokerは仮想マシンをサポートしていますか？</a><br>
        <a href="URL28">GGPokerのデバイス仕様、要件、おすすめのプレイ設定（Mac）</a><br>
        <a href="URL29">Mac用のポーカークライアントのダウンロードとインストール方法</a><br>
        <a href="URL30">Windows PCやMacでの画面録画方法</a><br>
        <a href="URL31">Macでのブラウザキャッシュのクリア方法</a><br>
        <a href="URL32">アンチウイルスがGGPokerをブロックしている場合の対処法</a><br>
        <a href="URL33">Appleデバイスでのスクリーンショットの撮り方</a><br>
        <a href="URL34">PC（デスクトップ）でのスクリーンショットの撮り方</a>
        `,
    
    androidApp: `
        <a href="URL35">モバイルとデスクトップ間でアプリを切り替えてもゲームを続行できますか？</a><br>
        <a href="URL36">モバイルでハプティクスとプッシュ通知をオフにできますか？</a><br>
        <a href="URL37">GGPokerでAndroidエミュレーターを使用できますか？</a><br>
        <a href="URL38">GGPokerにランドスケープモードはありますか？</a><br>
        <a href="URL39">GGPokerのデバイス仕様、要件、おすすめのプレイ設定（Android）</a><br>
        <a href="URL40">Androidデバイスへのモバイルアプリのインストール方法</a><br>
        <a href="URL41">アンチウイルスがGGPokerをブロックしている場合の対処法</a><br>
        <a href="URL42">古いAndroidアプリのバージョン</a><br>
        <a href="URL43">Androidデバイスでのスクリーンショットの撮り方</a><br>
        <a href="URL44">GGPokerの最低システム要件/仕様とは？</a><br>
        <a href="URL45">モバイルアプリの接続安定性はどの程度ですか？</a>
        `,
    
    iOSApp: `
        <a href="URL46">モバイルとデスクトップアプリを切り替えながらプレイを続けられますか？ モバイルからコンピュータ、またはその逆への切り替え方法は？</a><br>
        <a href="URL47">モバイルで触覚フィードバックとプッシュ通知をオフにできますか？</a><br>
        <a href="URL48">iOSアプリでのアカウント削除</a><br>
        <a href="URL49">GGPokerは横向きモードに対応していますか？</a><br>
        <a href="URL50">GGPokerのデバイス仕様、要件、おすすめのプレイ環境（iOS）</a><br>
        <a href="URL51">アンチウイルスソフトがGGPokerをブロックしています</a><br>
        <a href="URL52">Appleデバイスでのスクリーンショットの撮り方</a><br>
        <a href="URL53">GGPokerの最小システム要件/仕様は何ですか？</a><br>
        <a href="URL54">モバイルアプリの接続安定性はどのようになっていますか？</a>
        `,
    
    gameCancellationRefundPolicy: `
        <a href="URL1">トーナメント中にインターネット接続が切れて復旧できませんでした。トーナメントのバイインは返金されますか？</a><br>
        <a href="URL2">ゲームのキャンセル、途中中断、および返金ポリシーの理解</a>
        `,
    
    otherTechnicalQueries: `
        <a href="URL3">ソフトウェアを更新した後、アンチウイルスプログラムがトロイの木馬を検出したと表示されます。どう対処すれば良いですか？</a><br>
        <a href="URL4">ポーカークライアント内でネットワーク接続状況を確認できますか？</a><br>
        <a href="URL5">モバイルとデスクトップアプリを切り替えながらプレイを続けられますか？モバイルからコンピュータ、またはその逆への切り替え方法は？</a><br>
        <a href="URL6">GGPokerアプリをChromebookで使用できますか？</a><br>
        <a href="URL7">AndroidエミュレーターをGGPokerで使用できますか？</a><br>
        <a href="URL8">Windows 7でGGPokerを利用できますか？</a><br>
        <a href="URL9">アンチウイルスプログラムとの衝突</a><br>
        <a href="URL10">GGPokerアプリのバージョンを確認する方法</a><br>
        <a href="URL11">クライアント表示がピクセル化している問題を修正する方法</a><br>
        <a href="URL12">ERROR_LOGIN_FAILEDを解決する方法</a><br>
        <a href="URL13">「Failed to Patch」というエラーが表示されます。どう対処すれば良いですか？</a><br>
        <a href="URL14">アプリの更新を試みましたが、「更新に失敗しました」と表示され続けます。どうすれば良いですか？</a><br>
        <a href="URL15">テーブルのタイル配置に関する問題</a><br>
        <a href="URL16">アプリの更新が何度も失敗します</a><br>
        <a href="URL17">プレイヤーノートが見当たりません。どうすれば良いですか？</a><br>
        <a href="URL18">弱いネットワークステータスのテスト結果は何を示していますか？</a><br>
        <a href="URL19">事前にスケジュールされたメンテナンス情報はどこで確認できますか？</a><br>
        <a href="URL20">なぜオーディオはヘッドフォンでしか動作しないのですか？</a>
        `,
    
        fishBuffet: `
        <a href="URL21">クラブレベル - よくある質問</a><br>
        <a href="URL22">フィッシュビュッフェ - フィッシュビュッフェからプラチナムフィッシュビュッフェに変更できますか？</a><br>
        <a href="URL23">フィッシュビュッフェ - フィッシュビュッフェの履歴をどこで確認できますか？</a><br>
        <a href="URL24">フィッシュビュッフェ - クラブ - 各ティアを個別にクリアする必要がありますか？</a><br>
        <a href="URL25">フィッシュビュッフェ - クラブ - 各ティアの完了時またはゴールドクラブ完了時にホイールスピンが獲得されますか？</a><br>
        <a href="URL26">フィッシュビュッフェ - クラブ - ティア完了に必要なポイント数は？</a><br>
        <a href="URL27">フィッシュビュッフェ - クラブ - 上昇するために必要な12,000フィッシュポイントの獲得期限は？</a><br>
        <a href="URL28">フィッシュビュッフェ - クラブ - 現在「クラブ」の場合、プラチナムランクに切り替えた場合のレベルは？</a><br>
        <a href="URL29">フィッシュビュッフェ - クラブ - 必要なポイントを達成できなかった場合は？</a><br>
        <a href="URL30">フィッシュビュッフェ - クラブ - ゴールドクラブを完了してキャッシュバックを受け取った後の流れは？</a><br>
        <a href="URL31">フィッシュビュッフェ - クラブ - クラブホイールで得られる報酬は？</a><br>
        <a href="URL32">フィッシュビュッフェ - トーナメントがオーバーレイした場合、フィッシュポイント（FP）は得られますか？</a><br>
        <a href="URL33">フィッシュビュッフェ - 他のプレイヤーのアクションを購入してもフィッシュポイントは得られますか？</a><br>
        <a href="URL34">フィッシュビュッフェ - フィッシュビュッフェに参加するためにはオプトインが必要ですか？</a><br>
        <a href="URL35">フィッシュビュッフェ - 各レベルにはティアが1つしかありませんか？</a><br>
        <a href="URL36">フィッシュビュッフェ - アクションの販売がフィッシュポイント割当率に影響を及ぼすことはありますか？</a><br>
        <a href="URL37">フィッシュビュッフェ - フィッシュビュッフェのレベル</a><br>
        <a href="URL38">フィッシュビュッフェ - よくある質問</a><br>
        <a href="URL39">フィッシュビュッフェ - ゴールドフィッシュ - ブロンズシュリンプに昇格するために必要なポイント数は？</a><br>
        <a href="URL40">フィッシュビュッフェ - ゴールドフィッシュ - ブロンズシュリンプに昇格するために必要な1,500フィッシュポイントの獲得期限は？</a><br>
        <a href="URL41">フィッシュビュッフェ - ゴールドフィッシュ - 必要なポイントを達成できなかった場合は？</a><br>
        <a href="URL42">フィッシュビュッフェ - ゴールドフィッシュ - 完了後にキャッシュバックが与えられました。その後の流れは？</a><br>
        <a href="URL43">フィッシュビュッフェ - ゴールドフィッシュ - ゴールドフィッシュホイールで得られる報酬は？</a><br>
        <a href="URL44">フィッシュビュッフェ - フィッシュポイントはどのように生成されますか？</a><br>
        <a href="URL45">フィッシュビュッフェ - 現在のフィッシュビュッフェのステータスはどこで確認できますか？</a><br>
        <a href="URL46">フィッシュビュッフェ - レベルの上昇方法</a><br>
        <a href="URL47">フィッシュビュッフェ - フィッシュビュッフェからプラチナムフィッシュビュッフェへの切り替え方法</a><br>
        <a href="URL48">フィッシュビュッフェ - プラチナムフィッシュビュッフェからフィッシュビュッフェへの切り替え方法</a><br>
        <a href="URL49">フィッシュビュッフェ - 通常のフィッシュビュッフェにおける報酬システムの仕組み</a><br>
        <a href="URL50">フィッシュビュッフェ - カジノゲームで獲得できるフィッシュポイント数は？</a><br>
        <a href="URL51">フィッシュビュッフェ - プラチナムフィッシュビュッフェからフィッシュビュッフェへ誤って変更しました</a><br>
        <a href="URL52">フィッシュビュッフェ - 次のレベル/ティアのためのフィッシュポイント目標に達しない場合、報酬を早めに支払ってもらえますか？</a><br>
        <a href="URL53">フィッシュビュッフェ - 次のレベル/ティアに到達するために必要なポイントを達成できなかった場合は？</a><br>
        <a href="URL54">フィッシュビュッフェ - ラッシュ＆キャッシュをプレイしているのにフィッシュポイントが増加しないのはなぜですか？</a><br>
        <a href="URL55">フィッシュビュッフェ - フィッシュビュッフェのレベル/ティアを完了しました。次は？</a><br>
        <a href="URL56">フィッシュビュッフェ - トーナメントから退出しましたがフィッシュポイントが更新されませんでした。理由は？</a><br>
        <a href="URL57">フィッシュビュッフェ - フィッシュビュッフェからプラチナムに移行しましたが報酬を受け取っていません。理由は？</a><br>
        <a href="URL58">フィッシュビュッフェ - フィッシュビュッフェスピンのメッセージを受け取りましたが、クリックしませんでした。結果は？</a><br>
        <a href="URL59">フィッシュビュッフェ - フィッシュビュッフェプロモーションはすべてのプレイヤーが利用可能ですか？</a><br>
        <a href="URL60">フィッシュビュッフェ - オクトパス - 60,000フィッシュポイントを獲得するための期限は？</a><br>
        <a href="URL61">フィッシュビュッフェ - オクトパス - 各ティアを個別にクリアする必要がありますか？</a><br>
        <a href="URL62">フィッシュビュッフェ - オクトパス - 各ティア完了時またはゴールドオクトパス完了時にホイールスピンが得られますか？</a><br>
        <a href="URL63">フィッシュビュッフェ - オクトパス - ティア完了に必要なポイント数は？</a><br>
        <a href="URL64">フィッシュビュッフェ - オクトパス - 現在オクトパスの場合、プラチナムランクに変更した場合のレベルは？</a><br>
        <a href="URL65">フィッシュビュッフェ - オクトパス - 必要なポイントを達成できなかった場合は？</a><br>
        <a href="URL66">フィッシュビュッフェ - オクトパス - ゴールドオクトパスを完了してキャッシュバックを受け取った後の流れは？</a><br>
        <a href="URL67">フィッシュビュッフェ - オクトパス - オクトパスホイールで得られる報酬は？</a><br>
        <a href="URL68">フィッシュビュッフェ - プランクトン - ゴールドフィッシュに昇格するために必要なポイント数は？</a><br>
        <a href="URL69">フィッシュビュッフェ - プランクトン - 750フィッシュポイントを獲得してゴールドフィッシュに昇格するまでの時間は？</a><br>
        <a href="URL70">フィッシュビュッフェ - プランクトン - 必要なポイントを獲得できなかった場合は？</a><br>
        <a href="URL71">フィッシュビュッフェ - プランクトン - 完了してキャッシュバックを受け取った後は？</a><br>
        <a href="URL72">フィッシュビュッフェ - プランクトン - プランクトンホイールで得られる報酬は？</a><br>
        <a href="URL73">フィッシュビュッフェ - シュリンプ - 各ティアを個別にクリアする必要がありますか？</a><br>
        <a href="URL74">フィッシュビュッフェ - シュリンプ - 各ティア完了時またはゴールドシュリンプ完了時にホイールスピンが得られますか？</a><br>
        <a href="URL75">フィッシュビュッフェ - シュリンプ - ティア完了に必要なポイント数は？</a><br>
        <a href="URL76">フィッシュビュッフェ - シュリンプ - 上昇するために必要な6,000フィッシュポイントの獲得期限は？</a><br>
        <a href="URL77">フィッシュビュッフェ - シュリンプ - 現在「シュリンプ」の場合、プラチナムランクに変更した場合のレベルは？</a><br>
        <a href="URL78">フィッシュビュッフェ - シュリンプ - 必要なポイントを獲得できなかった場合は？</a><br>
        <a href="URL79">フィッシュビュッフェ - シュリンプ - ゴールドシュリンプを完了してキャッシュバックを受け取った後は？</a><br>
        <a href="URL80">フィッシュビュッフェ - シュリンプ - シュリンプホイールで得られる報酬は？</a><br>
        <a href="URL81">フィッシュビュッフェ - 概要</a><br>
        <a href="URL82">フィッシュビュッフェ - ホエール - 各ティアとサブティアを個別にクリアする必要がありますか？</a><br>
        <a href="URL83">フィッシュビュッフェ - ホエール - 各ティア完了時またはゴールドホエール1完了時にホイールスピンを受け取れますか？</a><br>
        <a href="URL84">フィッシュビュッフェ - ホエール - サブティア完了に必要なポイント数は？</a><br>
        <a href="URL85">フィッシュビュッフェ - ホエール - 上昇するために必要な120,000フィッシュポイントの期限は？</a><br>
        <a href="URL86">フィッシュビュッフェ - ホエール - 現在「ホエール」の場合、プラチナムランクに変更すると何レベルになりますか？</a><br>
        <a href="URL87">フィッシュビュッフェ - ホエール - 必要なポイントを達成できなかった場合はどうなりますか？</a><br>
        <a href="URL88">フィッシュビュッフェ - ホエール - ゴールドホエール1を完了しプラチナシャークに昇格しました。ホイールスピンはどうなりますか？</a><br>
        <a href="URL89">フィッシュビュッフェ - ホエール - ホエールホイールで得られる報酬は？</a><br>
        <a href="URL90">フィッシュビュッフェ - 平均キャッシュバックの意味は？</a><br>
        <a href="URL91">フィッシュビュッフェ - ホイールスピンをしなかった場合の有効期限は？</a><br>
        <a href="URL92">フィッシュビュッフェ - フィッシュビュッフェからプラチナムフィッシュビュッフェに切り替えた場合の結果は？</a><br>
        <a href="URL93">フィッシュビュッフェ - プラチナムフィッシュからフィッシュビュッフェに切り替えた場合の結果は？</a><br>
        <a href="URL94">フィッシュビュッフェとは？</a><br>
        <a href="URL95">フィッシュビュッフェの表示タイムゾーンは？</a><br>
        <a href="URL96">プラチナムフィッシュビュッフェの表示タイムゾーンは？</a><br>
        <a href="URL97">GGPlatinum - よくある質問</a><br>
        <a href="URL98">GGPlatinumになる方法</a><br>
        <a href="URL99">GGPlatinumの期間は？</a><br>
        <a href="URL100">ゴールドフィッシュレベル - よくある質問</a><br>
        <a href="URL101">フィッシュビュッフェ報酬を早期に受け取ることは可能ですか？</a><br>
        <a href="URL102">技術的な問題でトーナメントがキャンセルされた場合、フィッシュビュッフェポイントは得られますか？</a><br>
        <a href="URL103">オクトパスレベル - よくある質問</a><br>
        <a href="URL104">プランクトンレベル - よくある質問</a><br>
        <a href="URL105">プラチナムランクを昇進することは可能ですか？</a><br>
        <a href="URL106">プラチナム報酬を保存できますか？それとも受け取る必要がありますか？</a><br>
        <a href="URL107">プラチナムランクからフィッシュビュッフェに切り替えることは可能ですか？</a><br>
        <a href="URL108">プラチナムフィッシュビュッフェ履歴はどこで確認できますか？</a><br>
        <a href="URL109">プラチナムフィッシュになる方法</a><br>
        <a href="URL110">プラチナムオクトパスになる方法</a><br>
        <a href="URL111">プラチナムフィッシュビュッフェの報酬システムの仕組み</a><br>
        <a href="URL112">プラチナムランクとは？</a><br>
        <a href="URL113">昇進または降格した場合、保存されたプラチナム報酬はどうなりますか？</a><br>
        <a href="URL114">プラチナムフィッシュビュッフェとは？</a><br>
        <a href="URL115">プラチナム報酬の支払時期は？</a><br>
        <a href="URL116">プラチナムフィッシュ - よくある質問</a><br>
        <a href="URL117">プラチナムフィッシュビュッフェ - よくある質問</a><br>
        <a href="URL118">GGPlatinumでのキャッシュバック額は？</a><br>
        <a href="URL119">GGPlatinumを維持するために5,000,000FPを獲得できなかった場合は？</a><br>
        <a href="URL120">プラチナムフィッシュステータスの期間は？</a><br>
        <a href="URL121">プラチナムフィッシュでのキャッシュバック額は？</a><br>
        <a href="URL122">現在プラチナムフィッシュですが、プラチナムオクトパスになるには？</a><br>
        <a href="URL123">プラチナムフィッシュからフィッシュビュッフェに切り替えましたが、報酬を受け取れませんでした。理由は？</a><br>
        <a href="URL124">プラチナムフィッシュからフィッシュビュッフェに切り替えましたが、フィッシュポイントが消えました。理由は？</a><br>
        <a href="URL125">プラチナムオクトパスの期間は？</a><br>
        <a href="URL126">プラチナムオクトパスでのキャッシュバック額は？</a><br>
        <a href="URL127">現在プラチナムオクトパスですが、プラチナムホエールになるには？</a><br>
        <a href="URL128">プラチナムオクトパスからフィッシュビュッフェに切り替えましたが、報酬を受け取れませんでした。理由は？</a><br>
        <a href="URL129">プラチナムオクトパスからフィッシュビュッフェに切り替えましたが、フィッシュポイントが消えました。理由は？</a><br>
        <a href="URL130">プラチナムオクトパスからフィッシュビュッフェに切り替えた場合の結果は？</a><br>
        <a href="URL131">プラチナムオクトパスで750,000FPに到達した場合は？</a><br>
        <a href="URL132">プラチナムシャークからGGPlatinumに昇進することは可能ですか？</a><br>
        <a href="URL133">プラチナムシャークになる方法</a><br>
        <a href="URL134">プラチナムシャークの期間は？</a><br>
        <a href="URL135">プラチナムシャークでのキャッシュバック額は？</a><br>
        <a href="URL136">プラチナムシャークを維持するために3,000,000FPを獲得しましたが、次のステップは？</a><br>
        <a href="URL137">プラチナムシャークを維持するために3,000,000FPを獲得できなかった場合は？</a><br>
        <a href="URL138">プラチナムホエールからプラチナムシャークへの昇進は可能ですか？</a><br>
        <a href="URL139">プラチナムホエールになる方法</a><br>
        <a href="URL140">プラチナムホエールの期間は？</a><br>
        <a href="URL141">プラチナムホエールでのキャッシュバック額は？</a><br>
        <a href="URL142">プラチナムホエールを維持するために1,500,000FPを獲得しましたが、次のステップは？</a><br>
        <a href="URL143">プラチナムホエールを維持するために1,500,000FPを獲得できなかった場合は？</a><br>
        <a href="URL144">プラチナムフィッシュビュッフェ - 概要</a><br>
        <a href="URL145">プラチナムオクトパス - よくある質問</a><br>
        <a href="URL146">プラチナムシャーク - よくある質問</a><br>
        <a href="URL147">プラチナムホエール - よくある質問</a><br>
        <a href="URL148">シュリンプレベル - よくある質問</a><br>
        <a href="URL149">ホエールレベル - よくある質問</a>
        `,
    
        honeymoonForNewcomers:`
        <a href="URL1">ハネムーン - ミッション達成に利用できないトーナメントタイプはありますか？</a><br>
        <a href="URL2">ハネムーン - 任意のタイミングで参加できますか？</a><br>
        <a href="URL3">ハネムーン - 任意のゲームでミッションを達成できますか？</a><br>
        <a href="URL4">ハネムーン - 参加は必須ですか？</a><br>
        <a href="URL5">ハネムーン - スピードレーサートーナメントはバウンティハンターズトーナメントミッション達成に含まれますか？</a><br>
        <a href="URL6">ハネムーン - よくある質問</a><br>
        <a href="URL7">ハネムーン - 正しいゲームタイプを利用しているか確認する方法は？</a><br>
        <a href="URL8">ハネムーン - ハネムーンに参加するにはどうすればよいですか？</a><br>
        <a href="URL9">ハネムーン - 報酬チケットの有効期限はどれくらいですか？</a><br>
        <a href="URL10">ハネムーン - プロモーションの期間はどれくらいですか？</a><br>
        <a href="URL11">ハネムーン - ミッションが完了したかどうかはどのように確認できますか？</a><br>
        <a href="URL12">ハネムーン - 特定の日にプレイできなかった場合、そのミッションを翌日に再挑戦できますか？</a><br>
        <a href="URL13">ハネムーン - オプトインボタンが見つかりません。なぜでしょうか？</a><br>
        <a href="URL14">ハネムーン - 開始から30日以内にハネムーンを開始しなかった場合、手動でリセット可能ですか？</a><br>
        <a href="URL15">ハネムーン - オプトインしたが、最初のミッションを完了するための24時間が与えられなかったのはなぜですか？</a><br>
        <a href="URL16">ハネムーン - ミッションを達成したと思いましたが、「失敗」と表示されます。確認できる場所はありますか？</a><br>
        <a href="URL17">ハネムーン - 1日を逃した場合、プロモーションを続行できなくなりますか？</a><br>
        <a href="URL18">ハネムーン - 報酬チケットの有効期限が切れた場合、再発行可能ですか？</a><br>
        <a href="URL19">ハネムーン - サイトメンテナンス中にミッションが完了できない場合、追加時間はありますか？</a><br>
        <a href="URL20">ハネムーン - 同じミッションが全員に配布されるのか、プレイヤーごとに異なりますか？</a><br>
        <a href="URL21">ハネムーン - ウェブページに「ミッションは簡単」とありますが、これは本当ですか？</a><br>
        <a href="URL22">ハネムーン - ミッションゲームタイプが「ショートデッキ」の場合、どのゲームで達成できますか？</a><br>
        <a href="URL23">ハネムーン - ミッションゲームタイプが「オールインまたはフォールド - シット & ゴー」の場合、どのゲームで達成できますか？</a><br>
        <a href="URL24">ハネムーン - ミッションゲームタイプが「AoF ホールデム」の場合、どのゲームで達成できますか？</a><br>
        <a href="URL25">ハネムーン - ミッションゲームタイプが「AoF PLO」の場合、どのゲームで達成できますか？</a><br>
        <a href="URL26">ハネムーン - ミッションゲームタイプが「フリップ & ゴー」の場合、どのゲームで達成できますか？</a><br>
        <a href="URL27">ハネムーン - ミッションゲームタイプが「ホールデム」の場合、どのゲームで達成できますか？</a><br>
        <a href="URL28">ハネムーン - ミッションゲームタイプが「ミステリーバトルロイヤル」の場合、どのゲームで達成できますか？</a><br>
        <a href="URL29">ハネムーン - ミッションゲームタイプが「PLO」の場合、どのゲームで達成できますか？</a><br>
        <a href="URL30">ハネムーン - ミッションゲームタイプが「ラッシュ & キャッシュ」の場合、どのゲームで達成できますか？</a><br>
        <a href="URL31">ハネムーン - ミッションゲームタイプが「スピン & ゴールド」の場合、どのゲームで達成できますか？</a><br>
        <a href="URL32">ハネムーン - ミッションゲームタイプが「トーナメント」の場合、どのゲームで達成できますか？</a><br>
        <a href="URL33">ハネムーン - 特定のハンドでショーダウンで勝つミッションは、どのゲームで達成できますか？</a><br>
        <a href="URL34">ハネムーン - 今日のミッションがトーナメントでの優勝ですが、サテライトで達成できますか？</a><br>
        <a href="URL35">ハネムーン - 概要</a><br>
        <a href="URL36">ハネムーン - 利用規約</a><br>
        <a href="URL37">ハネムーン - いくつかのミッション例</a><br>
        <a href="URL38">ハネムーン - ミッション達成で得られる報酬は？</a><br>
        <a href="URL39">ハネムーン - オプトインするとどうなりますか？</a><br>
        <a href="URL40">ハネムーン - 新規プレイヤー向けのハネムーンとは？</a><br>
        <a href="URL41">ハネムーン - 1日はいつからいつまでですか？</a><br>
        <a href="URL42">ハネムーン - キャッシュゲームでミッションを完了する場合、「Run It Multiple Times」を使用できますか？</a><br>
        <a href="URL43">ハネムーン - キャッシュゲームでミッションを完了する場合、任意のブラインドレベルでプレイできますか？</a><br>
        <a href="URL44">ハネムーン - キャッシュゲームでミッションを完了する場合、両方のホールカードを使う必要がありますか？</a><br>
        <a href="URL45">ハネムーン - 出金するとハネムーンプロモーションは終了しますか？</a><br>
        `,
    
    welcomeBonus:`
        <a href="URL1">GGPokerでは新規プレイヤー向けにウェルカムボーナスを提供していますか？</a><br>
        <a href="URL2">1つのウェルカムボーナスを選択しましたが、変更できますか？</a><br>
        <a href="URL3">マッチボーナス - 複数回の入金で$600のマッチボーナスを全額獲得できますか？</a><br>
        <a href="URL4">マッチボーナス - よくある質問</a><br>
        <a href="URL5">マッチボーナス - マッチボーナスを獲得するにはどうすればよいですか？</a><br>
        <a href="URL6">マッチボーナス - ボーナスを獲得するためにいくら入金する必要がありますか？</a><br>
        <a href="URL7">マッチボーナス - マッチボーナスを選択しましたが、口座に追加のキャッシュが表示されません。なぜでしょうか？</a><br>
        <a href="URL8">マッチボーナス - マッチウェルカムボーナスを選択しましたが、追加キャッシュが口座に反映されません。なぜでしょうか？</a><br>
        <a href="URL9">マッチボーナス - 入金しましたが、ウェルカムボーナスを選択し忘れました。どうすればいいですか？</a><br>
        <a href="URL10">マッチボーナス - マッチボーナスの取得期限はありますか？</a><br>
        <a href="URL11">マッチボーナス - マッチボーナスの有効期限はありますか？</a><br>
        <a href="URL12">マッチボーナス - 概要</a><br>
        <a href="URL13">マッチボーナス - マッチボーナスのクリアにカウントされるゲームは？</a><br>
        <a href="URL14">マッチボーナス - マッチボーナスウェルカムボーナスとは？</a><br>
        <a href="URL15">マッチボーナス - 出金するとマッチボーナスは無効になりますか？</a><br>
        <a href="URL16">最大$100リワードボーナス - よくある質問</a><br>
        <a href="URL17">最大$100リワードボーナス - 概要</a><br>
        <a href="URL18">ウェルカムボーナス - マッチウェルカムボーナスを選択しましたが、追加キャッシュが口座に表示されません。なぜでしょうか？</a><br>
        <a href="URL19">ウェルカムボーナス - 利用規約</a><br>
        <a href="URL20">ウェルカムボーナス - 最大$100リワードボーナス - リワードボーナスを獲得するにはどうすればいいですか？</a><br>
        <a href="URL21">ウェルカムボーナス - 最大$100リワードボーナス - リワードボーナスを得るためにいくら入金する必要がありますか？</a><br>
        <a href="URL22">ウェルカムボーナス - 最大$100リワードボーナス - リワードボーナスを選択しましたが、口座にチケットが表示されません。なぜでしょうか？</a><br>
        <a href="URL23">ウェルカムボーナス - 最大$100リワードボーナス - リワードボーナスの取得期限はありますか？</a><br>
        <a href="URL24">ウェルカムボーナス - 最大$100リワードウェルカムボーナスとは？</a><br>
        `,
        jackpots:`
        <a href="URL25">オールインフォーチュン - 過去のオールインフォーチュンの勝利履歴を確認できますか？</a><br>
        <a href="URL26">オールインフォーチュン - オールインフォーチュンで賞金を獲得するためには、ショーダウンに到達する必要がありますか？</a><br>
        <a href="URL27">オールインフォーチュン - オールインフォーチュンはどのくらいの頻度で支払われますか？</a><br>
        <a href="URL28">オールインフォーチュン - オールインフォーチュンの賞金はどの通貨で支払われますか？</a><br>
        <a href="URL29">オールインフォーチュン - 獲得できる賞品は何ですか？</a><br>
        <a href="URL30">オールインフォーチュン - オールイン以外に必要な条件はありますか？</a><br>
        <a href="URL31">オールインフォーチュン - よくある質問</a><br>
        <a href="URL32">オールインフォーチュン - オールインフォーチュンで賞金を獲得するための条件は？</a><br>
        <a href="URL33">オールインフォーチュン - オールインフォーチュンのプロモーション資金はどのように積み立てられていますか？</a><br>
        <a href="URL34">オールインフォーチュン - 勝利しました！支払いはどのように受け取りますか？</a><br>
        <a href="URL35">オールインフォーチュン - 概要</a><br>
        <a href="URL36">オールインフォーチュン - オールインフォーチュンとは何ですか？</a><br>
        <a href="URL37">オールインフォーチュン - オールインオアフォールドビンゴはどうなりましたか？</a><br>
        <a href="URL38">オールインオアフォールドジャックポット - ホールデムとオマハのジャックポットファンドは異なりますか？</a><br>
        <a href="URL39">オールインオアフォールドジャックポット - このプロモーションからオプトアウトして料金を支払わないことはできますか？</a><br>
        <a href="URL40">オールインオアフォールドジャックポット - AoF Sit & GoでAoFジャックポットを獲得できますか？</a><br>
        <a href="URL41">オールインオアフォールドジャックポット - よくある質問</a><br>
        <a href="URL42">オールインオアフォールドジャックポット - オールインオアフォールドジャックポットファンドはどのように積み立てられていますか？</a><br>
        <a href="URL43">オールインオアフォールドジャックポット - オールインオアフォールドホールデムでストレートフラッシュを作りましたが、ジャックポットを獲得できませんでした。なぜですか？</a><br>
        <a href="URL44">オールインオアフォールドジャックポット - オールインオアフォールドジャックポットを獲得しました。次は何が起こりますか？</a><br>
        <a href="URL45">オールインオアフォールドジャックポット - 手が配られ、オールインしてから接続が切れた場合、ジャックポットを獲得する資格はありますか？</a><br>
        <a href="URL46">オールインオアフォールドジャックポット - AoFホールデムでは、ジャックポットを獲得するにはショーダウンまで手を持ちこたえる必要がありますか？</a><br>
        <a href="URL47">オールインオアフォールドジャックポット - AoFホールデムでジャックポットを獲得するための資格がある手は何ですか？</a><br>
        <a href="URL48">オールインオアフォールドジャックポット - AoFオマハでジャックポットを獲得するための資格がある手は何ですか？</a><br>
        <a href="URL49">オールインオアフォールドジャックポット - AoFオマハではショーダウンまで手を持ちこたえる必要がありますか？</a><br>
        <a href="URL50">オールインオアフォールドジャックポット - AoF Sit & Goはジャックポットの支払い対象ですか？</a><br>
        <a href="URL51">オールインオアフォールドジャックポット - ジャックポットの拠出に手数料がかかりますか？</a><br>
        <a href="URL52">オールインオアフォールドジャックポット - 概要</a><br>
        <a href="URL53">オールインオアフォールドジャックポット - 条件は？</a><br>
        <a href="URL54">オールインオアフォールドジャックポット - ジャックポットとは何ですか？</a><br>
        <a href="URL55">バッドビートジャックポット - Omaha5 (PLO5)キャッシュゲームでバッドビートジャックポットを獲得するための条件は？</a><br>
        <a href="URL56">バッドビートジャックポット - テーブルでバッドビートジャックポットが獲得されたとき、着席していましたが、その時点で休憩中でした。どうなりますか？</a><br>
        <a href="URL57">バッドビートジャックポット - バッドビートジャックポットのファンドへの拠出を避けることはできますか？</a><br>
        <a href="URL58">バッドビートジャックポット - ポットに一定の金額を入れる必要がありますか？</a><br>
        <a href="URL59">バッドビートジャックポット - バッドビートジャックポットを獲得するにはショーダウンまで手を持ちこたえる必要がありますか？</a><br>
        <a href="URL60">バッドビートジャックポット - よくある質問</a><br>
        <a href="URL61">バッドビートジャックポット - 接続が切れている間にバッドビートジャックポットが獲得されました。この場合はどうなりますか？</a><br>
        <a href="URL62">バッドビートジャックポット - 確認が必要なバッドビートジャックポットの資格を満たすハンドをプレイしました。確認方法は？</a><br>
        <a href="URL63">バッドビートジャックポット - 資格を満たすハンドでショーダウンで負けました。次は何が起こりますか？</a><br>
        <a href="URL64">バッドビートジャックポット - テーブルに座っている間にジャックポットが獲得されました。この場合、シェアを受け取りますか？</a><br>
        <a href="URL65">バッドビートジャックポット - 自分が座っていたテーブルでバッドビートジャックポットが当たりました。私も分配を受けられますか？</a><br>
        <a href="URL66">バッドビートジャックポット - ショーダウンでバッドビートジャックポットの資格を満たす手を持つ相手に勝ちました。この後どうなりますか？</a><br>
        <a href="URL67">バッドビートジャックポット - ホールデムゲームで両方のホールカードを使って最高の手を作り、AKを持ってフロップでAAAになりました。なぜバッドビートジャックポットがもらえないのですか？</a><br>
        <a href="URL68">バッドビートジャックポット - 「Run It Twice/Three Times」を選択してもバッドビートジャックポットを獲得できますか？</a><br>
        <a href="URL69">バッドビートジャックポット - 手をフォールドしてテーブルを離れた場合、その手でバッドビートジャックポットが当たったら私は資格がありますか？</a><br>
        <a href="URL70">バッドビートジャックポット - EVキャッシュアウトを取った場合、バッドビートジャックポットを獲得できますか？</a><br>
        <a href="URL71">バッドビートジャックポット - ホールデムキャッシュゲームとラッシュ&キャッシュゲームでは、バッドビートジャックポットファンドにいくら拠出されますか？</a><br>
        <a href="URL72">バッドビートジャックポット - ホールデムキャッシュゲームとラッシュ&キャッシュゲームでバッドビートジャックポットが授与されるための条件は？</a><br>
        <a href="URL73">バッドビートジャックポット - オマハ（すべてのバリエーション）キャッシュゲームで、バッドビートジャックポットファンドにいくら拠出されますか？</a><br>
        <a href="URL74">バッドビートジャックポット - オマハ（PLO）キャッシュゲームおよびラッシュ&キャッシュゲームでバッドビートジャックポットが授与されるための条件は？</a><br>
        <a href="URL75">バッドビートジャックポット - オマハキャッシュゲームとラッシュ&キャッシュゲームで、バッドビートジャックポットファンドにいくら拠出されますか？</a><br>
        <a href="URL76">バッドビートジャックポット - オマハ6（PLO6）キャッシュゲームでバッドビートジャックポットが授与されるための条件は？</a><br>
        <a href="URL77">バッドビートジャックポット - ショートデッキキャッシュゲームで、バッドビートジャックポットファンドにいくら拠出されますか？</a><br>
        <a href="URL78">バッドビートジャックポット - ショートデッキキャッシュゲームでバッドビートジャックポットが授与されるための条件は？</a><br>
        <a href="URL79">バッドビートジャックポット - オールインオアフォールド（AoF）ゲームでバッドビートジャックポットは授与されますか？</a><br>
        <a href="URL80">バッドビートジャックポット - バトルロイヤルトーナメントでバッドビートジャックポットは授与されますか？</a><br>
        <a href="URL81">バッドビートジャックポット - スピン&ゴールドトーナメントでバッドビートジャックポットは授与されますか？</a><br>
        <a href="URL82">バッドビートジャックポット - トーナメントでバッドビートジャックポットは授与されますか？</a><br>
        <a href="URL83">バッドビートジャックポット - バッドビートジャックポットファンドに手数料はかかりますか？</a><br>
        <a href="URL84">バッドビートジャックポット - 概要</a><br>
        <a href="URL85">バッドビートジャックポット - 3人以上のプレイヤーがバッドビートジャックポットの資格を満たす手を作りました。どうなりますか？</a><br>
        <a href="URL86">バッドビートジャックポット - 利用条件は？</a><br>
        <a href="URL87">バッドビートジャックポット - バッドビートジャックポットが授与されるゲームは？</a><br>
        <a href="URL88">バッドビートジャックポット - バッドビートジャックポットとは何ですか？</a><br>
        <a href="URL89">バッドビートジャックポット - バッドビートジャックポットファンドの資金源はどこですか？</a><br>
        <a href="URL90">バウンティジャックポット - 削除</a><br>
        `,
        dailyFreebie:`
        <a href="URL1">デイリーフリービー - デイリーフリービーチケットを現金または別のチケットに交換できますか？</a><br>
        <a href="URL2">デイリーフリービー - デイリーフリービーチケットを他のプレイヤーに譲渡できますか？</a><br>
        <a href="URL3">デイリーフリービー - デイリーフリービーチケットを使用した際にフィッシュポイントを獲得できますか？</a><br>
        <a href="URL4">デイリーフリービー - アカウントが認証されていないとデイリーフリービーを受け取れませんか？</a><br>
        <a href="URL5">デイリーフリービー - よくある質問</a><br>
        <a href="URL6">デイリーフリービー - デイリーフリービーがアカウントに届くまでどのくらいかかりますか？</a><br>
        <a href="URL7">デイリーフリービー - デイリーフリービーチケットの使用期限はどのくらいですか？</a><br>
        <a href="URL8">デイリーフリービー - デイリーフリービーを請求しようとしたら「既に請求済み」と表示されました。なぜですか？</a><br>
        <a href="URL9">デイリーフリービー - 家族と共にGGPokerのアカウントを持っていますが、二人ともデイリーフリービーを受け取れますか？</a><br>
        <a href="URL10">デイリーフリービー - 家族と同じコンピュータを使用していますが、デイリーフリービーを両方とも受け取れますか？</a><br>
        <a href="URL11">デイリーフリービー - GGPokerクライアントでデイリーフリービーを請求する場所が見つかりません。なぜですか？</a><br>
        <a href="URL12">デイリーフリービー - 請求時にエラーが発生します。誰に問い合わせればよいですか？</a><br>
        <a href="URL13">デイリーフリービー - デイリーフリービーチケットで得たお金をすぐに引き出せますか？</a><br>
        <a href="URL14">デイリーフリービー - 自分で請求していないのに「請求できない」と表示されます。手動でチケットを取得できますか？</a><br>
        <a href="URL15">デイリーフリービー - 概要</a><br>
        <a href="URL16">デイリーフリービー - 利用規約</a><br>
        <a href="URL17">デイリーフリービー - GGPokerクライアントでデイリーフリービーを請求する場所がありません。なぜですか？</a><br>
        <a href="URL18">デイリーフリービー - どのデイリーフリービーが利用可能ですか？</a><br>
        <a href="URL19">デイリーフリービー - 金曜日のデイリーフリービーとは？</a><br>
        <a href="URL20">デイリーフリービー - 月曜日のデイリーフリービーとは？</a><br>
        <a href="URL21">デイリーフリービー - 土曜日のデイリーフリービーとは？</a><br>
        <a href="URL22">デイリーフリービー - 日曜日のデイリーフリービーとは？</a><br>
        <a href="URL23">デイリーフリービー - 木曜日のデイリーフリービーとは？</a><br>
        <a href="URL24">デイリーフリービー - 火曜日のデイリーフリービーとは？</a><br>
        <a href="URL25">デイリーフリービー - 水曜日のデイリーフリービーとは？</a><br>
        <a href="URL26">デイリーフリービー - デイリーフリービーとは？</a><br>
        <a href="URL27">デイリーフリービー - デイリーフリービーはいつ請求できますか？</a><br>
        <a href="URL28">デイリーフリービー - デイリーフリービープロモーションは終了しますか？</a><br>
        `,
    
        leaderboards:`
        <a href="URL29">デイリーリーダーボード - オールインまたはフォールドキャッシュゲーム</a><br>
        <a href="URL30">デイリーリーダーボード - オールインまたはフォールドSit & Go</a><br>
        <a href="URL31">デイリーリーダーボード - バトルロイヤル</a><br>
        <a href="URL32">デイリーリーダーボード - フリップ & ゴー</a><br>
        <a href="URL33">デイリーリーダーボード - ホールデム</a><br>
        <a href="URL34">デイリーリーダーボード - リーダーボードへの参加方法</a><br>
        <a href="URL35">デイリーリーダーボード - PLO</a><br>
        <a href="URL36">デイリーリーダーボード - ラッシュ & キャッシュ ホールデム</a><br>
        <a href="URL37">デイリーリーダーボード - ラッシュ & キャッシュ オマハ</a><br>
        <a href="URL38">デイリーリーダーボード - ショートデッキ</a><br>
        <a href="URL39">デイリーリーダーボード - スピン & ゴールド</a><br>
        <a href="URL40">デイリーリーダーボード - 概要</a><br>
        <a href="URL41">デイリーリーダーボード - 支払いタイミングはいつですか？</a><br>
    `,
    
    thanksGG:`
        <a href="URL1">#ThanksGG（GGCare & GGCheers） - よくある質問</a><br>
        <a href="URL2">#ThanksGG（GGCare & GGCheers） - 概要</a><br>
        <a href="URL3">#ThanksGG - キャッシュゲームで#ThanksGGデイリーフリップアウトに参加資格を得られますか？</a><br>
        <a href="URL4">#ThanksGG - Flip & Goをプレイして#ThanksGGデイリーフリップアウトに参加資格を得られますか？</a><br>
        <a href="URL5">#ThanksGG - ミステリーバトルロイヤルで#ThanksGGデイリーフリップアウトに参加資格を得られますか？</a><br>
        <a href="URL6">#ThanksGG - Spin & Goldをプレイして#ThanksGGデイリーフリップアウトに参加資格を得られますか？</a><br>
        <a href="URL7">#ThanksGG - トーナメントで#ThanksGGデイリーフリップアウトに参加資格を得られますか？</a><br>
        <a href="URL8">#ThanksGG - 同じ#ThanksGGデイリーフリップアウトイベントに複数回参加できますか？</a><br>
        <a href="URL9">#ThanksGG - #ThanksGGデイリーフリップアウトが始まる時にオンラインである必要はありますか？</a><br>
        <a href="URL10">#ThanksGG - #ThanksGGフリップアウトトーナメントへの招待はどうすれば受け取れますか？</a><br>
        <a href="URL11">#ThanksGG - #ThanksGGフリップアウトトーナメントの賞金総額はいくらですか？</a><br>
        <a href="URL12">#ThanksGG - バッドビートがありましたが、#ThanksGGデイリーフリップアウトに招待されませんでした。なぜですか？</a><br>
        <a href="URL13">#ThanksGG - サックアウトがありましたが、#ThanksGGデイリーフリップアウトに招待されませんでした。なぜですか？</a><br>
        <a href="URL14">#ThanksGG - バッドビートがあったので、サポートに#ThanksGGデイリーフリップアウトイベントに招待してもらえますか？</a><br>
        <a href="URL15">#ThanksGG - クーラーがありましたが、#ThanksGGデイリーフリップアウトに招待されませんでした。なぜですか？</a><br>
        <a href="URL16">#ThanksGG - クーラーがあったので、サポートに#ThanksGGデイリーフリップアウトイベントに招待してもらえますか？</a><br>
        <a href="URL17">#ThanksGG - サックアウトがあったので、サポートに#ThanksGGデイリーフリップアウトイベントに招待してもらえますか？</a><br>
        <a href="URL18">#ThanksGG - #ThanksGGデイリーフリップアウトイベントへのエントリーを受け取りましたが、次は何ですか？</a><br>
        <a href="URL19">#ThanksGG - #ThanksGGデイリーフリップアウトへのエントリーを受け取りましたが、結果が見えません。どこで確認できますか？</a><br>
        <a href="URL20">#ThanksGG - 大きなハンドを獲得しましたが、#ThanksGGデイリーフリップアウトに招待されませんでした。なぜですか？</a><br>
        <a href="URL21">#ThanksGG - 大きなポットを獲得しましたが、#ThanksGGデイリーフリップアウトに招待されませんでした。なぜですか？</a><br>
        <a href="URL22">#ThanksGG - 大きなポットを獲得し、画面上でダニエル・ネグラヌがダンスしましたが、#ThanksGGデイリーフリップアウトに招待されませんでした。なぜですか？</a><br>
        <a href="URL23">#ThanksGG - PokerCraftが私の手をバッドビートとしてタグ付けしましたが、#ThanksGGデイリーフリップアウトに招待されませんでした。なぜですか？</a><br>
        <a href="URL24">#ThanksGG - PokerCraftが私の手を大きなハンドとしてタグ付けしましたが、#ThanksGGデイリーフリップアウトに招待されませんでした。なぜですか？</a><br>
        <a href="URL25">#ThanksGG - PokerCraftが私の手を大きなポットとしてタグ付けしましたが、#ThanksGGデイリーフリップアウトに招待されませんでした。なぜですか？</a><br>
        <a href="URL26">#ThanksGG - PokerCraftが私の手をクーラーとしてタグ付けしましたが、#ThanksGGデイリーフリップアウトに招待されませんでした。なぜですか？</a><br>
        <a href="URL27">#ThanksGG - PokerCraftが私の手をサックアウトとしてタグ付けしましたが、#ThanksGGデイリーフリップアウトに招待されませんでした。なぜですか？</a><br>
        <a href="URL28">#ThanksGG - 利用規約はどこで確認できますか？</a><br>
        <a href="URL29">#ThanksGG - #ThanksGGフリップアウトトーナメントへの参加スタック量はどう決まりますか？</a><br>
        <a href="URL30">#ThanksGG - メンテナンス時の#ThanksGGフリップアウトイベントはどうなりますか？</a><br>
        <a href="URL31">#ThanksGG - GGCare & GGCheersとは？</a><br>
        <a href="URL32">#ThanksGG - デイリー#ThanksGGフリップアウトトーナメントの開催時間は？</a><br>
        `,
    
    casinoBonus:`
        <a href="URL33">カジノボーナス - FAQと概要</a><br>
        `,
    
    otherPromotionsRewards:`
        <a href="URL34">コミュニティ - GGTV YouTube配信でのギブアウェイに当選しました。連絡先は？</a><br>
        <a href="URL35">Go for Gold - よくある質問</a><br>
        <a href="URL36">ハロウィンパーティー 2024</a><br>
        <a href="URL37">クーポンコードを入力する方法は？</a><br>
        <a href="URL38">引き換え不可と表示されるチケットがあります。理由は何ですか？</a><br>
        <a href="URL39">無料チケット発行のメールを受け取りましたが、何か条件はありますか？</a><br>
        <a href="URL40">ミッションで指示されたトーナメントに参加しましたが、失敗と表示されました。理由は？</a><br>
        <a href="URL41">GGPokerに友人を紹介するためのプロモーションはありますか？</a><br>
        <a href="URL42">ミステリーエンベロープ - プロモーションが利用できるゲームは？</a><br>
        <a href="URL43">ミステリーエンベロープ - プロモーションの資金はどのように確保されていますか？</a><br>
        <a href="URL44">ミステリーエンベローププロモーションはいつ終了しますか？</a><br>
        `
    
    
    
    
    

  // 他のカテゴリーも同様に追加可能
};

function showSubcategories(categoryId) {
  document.querySelectorAll('.subcategory, .subsubcategory').forEach(subcategory => {
    subcategory.style.display = 'none';
  });
  document.getElementById(categoryId).style.display = 'block';
  currentlyOpenSubcategory = null;
}

function toggleSubSubcategory(subSubcategoryId) {
  const subsubcategory = document.getElementById(subSubcategoryId);
  if (!subsubcategory) {
    console.warn(`No sub-subcategory found with ID ${subSubcategoryId}`);
    return;
  }

  if (currentlyOpenSubcategory === subSubcategoryId) {
    subsubcategory.style.display = 'none';
    currentlyOpenSubcategory = null;
  } else {
    document.querySelectorAll('.subsubcategory').forEach(sub => {
      sub.style.display = 'none';
    });
    subsubcategory.style.display = 'block';
    currentlyOpenSubcategory = subSubcategoryId;
  }
}

function showContent(contentId) {
  document.getElementById('categoryDetails').innerHTML = contents[contentId] || 'No content available.';
  document.getElementById('selectedCategoryTitle').textContent = contentId.replace(/([A-Z])/g, ' $1').trim();
}

function searchContent() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const searchResults = [];

  // すべてのカテゴリから検索
  for (const category in contents) {
    const contentItems = contents[category].split('<br>');
    contentItems.forEach(item => {
      if (item.toLowerCase().includes(searchTerm)) {
        searchResults.push(`<li>${item}</li>`);
      }
    });
  }

const categoryDetails = document.getElementById('categoryDetails');
if (searchResults.length > 0) {
    categoryDetails.innerHTML = `<ul>${searchResults.join('')}</ul>`;
    document.getElementById('selectedCategoryTitle').textContent = '検索結果';
} else {
    categoryDetails.innerHTML = '<p>一致する結果は見つかりませんでした</p>';
    document.getElementById('selectedCategoryTitle').textContent = '検索結果';
}
}