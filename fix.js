let currentlyOpenSubcategory = null;

function showSubcategories(categoryId) {
  // Hide all subcategories and subsubcategories
document.querySelectorAll('.subcategory, .subsubcategory').forEach(subcategory => {
    subcategory.style.display = 'none';
});

  // Display the selected subcategory
document.getElementById(categoryId).style.display = 'block';
  currentlyOpenSubcategory = null; // Reset when a new main category is opened
}

function toggleSubSubcategory(subcategoryId) {
const subsubcategory = document.getElementById(subcategoryId);

  // If the subsubcategory is already open, close it and reset
if (currentlyOpenSubcategory === subcategoryId) {
    subsubcategory.style.display = 'none';
    currentlyOpenSubcategory = null;
} else {
    // Hide all subsubcategories
    document.querySelectorAll('.subsubcategory').forEach(sub => {
sub.style.display = 'none';
    });

    // Show the selected subsubcategory and set it as the current open subsubcategory
    subsubcategory.style.display = 'block';
    currentlyOpenSubcategory = subcategoryId;
}
}

function showContent(contentId) {
const contents = {
    accountVerification: `
    <a href="URL1">Account Verification - KYC - Frequently Asked Questions</a><br>
    <a href="URL1">Account Verification - KYC - Summary</a><br>
    <a href="URL1">How can I upload my documents [Desktop]?</a><br>
    <a href="URL1">How can I upload my documents through the app?</a><br>
    <a href="URL1">How do I know if the verification documents I am sending will be acceptable?</a><br>
    <a href="URL1">How do I update and correct Personal Information?</a><br>
    <a href="URL1">How long does it usually take until my account is KYC verified?</a><br>
    <a href="URL1">How to verify my GGPoker account?</a><br>
    <a href="URL1">I feel unsure about submitting verification documents</a><br>
    <a href="URL1">I have submitted proof of address but am not yet verified</a><br>
    <a href="URL1">I moved to another country. How do I update the flag in my account?</a><br>
    <a href="URL1">My verification documents won't upload inside the app</a><br>
    <a href="URL1">What documents are acceptable as Proof of Address?</a><br>
    <a href="URL1">What documents are required for KYC?</a><br>
    <a href="URL1">What is the best way to send verification documents?</a><br>
    <a href="URL1">What is the reason why my documents were rejected?</a><br>
    <a href="URL1">Withdrawing without verifying</a><br>
    `,



    passwordQueries: `
    <a href="URL1">Forgotten password email is not arriving, why?</a><br>
    <a href="URL1">I forgot my login details. Can I open a new account?</a><br>
    <a href="URL1">I just created a new account but GGPoker's app is saying my password is incorrect, why is this?</a><br>
    <a href="URL1">Login Password</a><br>
    <a href="URL1">What happens if I forgot my login password?</a><br>
    `,
    updateDetails: `
    <a href="URL1">How do I update and correct Personal Information?</a><br>
    <a href="URL1">I have changed my address but I cannot update it?</a><br>
    <a href="URL1">Mobile number - Updating my mobile number</a><br>
    `,
    accountCreation: `
    <a href="URL1">A third party is telling me I can create a second account to sign up with them, is this possible?</a><br>
    <a href="URL1">Can I Close My Account and Open a New One?</a><br>
    <a href="URL1">Can I travel to play at GGPoker - Summary & Frequently Asked Questions</a><br>
    <a href="URL1">Can you register for an account from inside the mobile app?</a><br>
    <a href="URL1">Deleting Your Account Via The iOS App</a><br>
    <a href="URL1">How to close your account</a><br>
    <a href="URL1">I am trying to sign up a new account but I am not receiving the email verification code?</a><br>
    <a href="URL1">On GGPoker’s registration form, my name/email is not accepted</a><br>
    <a href="URL1">Permanently relocating to another country</a><br>
    <a href="URL1">Validation email never arrived</a><br>
    `,

    marketingOptInOut: `
    <a href="URL1">How to stop receiving marketing emails</a><br>
    `,
    countryAvailability: `
    <a href="URL1">I cannot see my country on the list when signing up - why?</a><br>
    <a href="URL1">I will be out of the country for a while. Can I still play poker from another region?</a><br>
    <a href="URL1">I'm getting an error saying I'm in Ontario when I'm not</a><br>
    <a href="URL1">Lebanon - Removal of Service for GGPoker & Transition to Poker Arabia</a><br>
    <a href="URL1">Lithuania - Removal of Service for GGPoker & Transition to Olybet</a><br>
    <pPermanently relocating to another country</a><br>
    <a href="URL1">Region Restriction prompt upon registration/account login</a><br>
    <a href="URL1">Where can I view a list of accepted regions/countries?</a><br>      
    `,
    dataRequest: `
    <a href="URL1">Can I see a copy of the information you have about me?</a><br>
    <a href="URL1">How will you use my personal information?</a><br>
    <a href="URL1">Will my personal information be transferred to locations outside where I am playing from?</a><br>
    <a href="URL1">Will your site ever update the privacy policy? Will I have to accept any amendments to the policy to continue playing?</a><br>
    `,
    otherAccountQueries: `
    <a href="URL1">Can GGPoker replace my giveaway ticket?</a><br>
    <a href="URL1">Can I change my affiliate?</a><br>
    <a href="URL1">Can I limit or modify the consent I give your website to use my personal information?</a><br>
    <a href="URL1">Can I tag my account after registration?</a><br>
    <a href="URL1">Can my partner have an account on GGPoker as well as me?</a><br>
    <a href="URL1">Can my sibling have an account on GGPoker if I do?</a><br>
    <a href="URL1">Difference between Reddit and Emailing customer support</a><br>
    <a href="URL1">Does GGPoker have a Live Chat service?</a><br>
    <a href="URL1">GGPass - Frequently Asked Questions</a><br>
    <a href="URL1">GGPoker are not responding to my emails</a><br>
    <a href="URL1">GGPoker experienced site-wide downtime and informed me a refund was forthcoming. When can I expect this?</a><br>
    <a href="URL1">GGStore - Can I buy GG merchandise anywhere?</a><br>
    <a href="URL1">GGStore - Can I buy items from the GGStore with the funds from my GGPoker account?</a><br>
    <a href="URL1">How Can I verify My Email address</a><br>
    <a href="URL1">How do I contact another site on the GGPoker Network</a><br>
    <a href="URL1">How long do GGPoker take to answer emails?</a><br>
    <a href="URL1">How will you use my personal information?</a><br>
    <a href="URL1">I am not getting your emails delivered to my inbox, is something wrong?</a><br>
    <a href="URL1">I can save my login name. Where can I save or have the client remember my Password?</a><br>
    <a href="URL1">I cannot access the email I used to register. How can I access my account?</a><br>
    <a href="URL1">I cannot log in using my username and details</a><br>
    <a href="URL1">I forgot my username, can you help?</a><br>
    <a href="URL1">I no longer have access to my registered email address - how can I resolve this?</a><br>
    <a href="URL1">I used a sign-up code but didn’t receive rewards/I need someone to confirm my affiliation</a><br>
    <a href="URL1">I'm getting an error saying I'm in Ontario when I'm not</a><br>
    <a href="URL1">Login problems/password or player detail error</a><br>
    <a href="URL1">My balance did not update after leaving a table.</a><br>
    <a href="URL1">Nickname - Frequently Asked Questions</a><br>
    <a href="URL1">Nicknames - Are some tournaments 'real name' instead of nickname?</a><br>
    <a href="URL1">Nicknames - Are there any scenarios that an exception would be made to the 'no change' nickname rule?</a><br>
    <a href="URL1">Nicknames - Can I request to change my nickname?</a><br>
    <a href="URL1">Nicknames - Can I use my real name as my nickname?</a><br>
    <a href="URL1">Nicknames - Could two players have the same nickname?</a><br>
    <a href="URL1">Nicknames - Frequently Asked Questions</a><br>
    <a href="URL1">Nicknames - Frequently Asked Questions</a><br>
    <a href="URL1">Nicknames - I am known by a certain name online, can I change my nickname to match this name?</a><br>
    <a href="URL1">Nicknames - I have been contacted by GGPoker and said that I must change my nickname to my real name, is this a legit request?</a><br>
    <a href="URL1">Nicknames - I've been told by GGPoker I need to change my nickname what do I do now?</a><br>
    <a href="URL1">Nicknames - Is there anything I cannot use as a Nickname?</a><br>
    <a href="URL1">Nicknames - Someone else has already registered the nickname I want, is there any way I can get it?</a><br>
    <a href="URL1">Nicknames - There is a nickname I believe is offensive or unacceptable, how do I report this?</a><br>
    <a href="URL1">Nicknames - What are Nicknames / Screen Names?</a><br>
    <a href="URL1">Nicknames - What counts as 'offensive' or 'Unacceptable' in terms of Nicknames?</a><br>
    <a href="URL1">Nicknames - When do I choose my Nickname?</a><br>
    <a href="URL1">Nicknames - Why are some nicknames coloured?</a><br>
    <a href="URL1">Nicknames - ​Can I use non-roman characters in a Nickname?</a><br>
    <a href="URL1">Receiving affiliate promotion rewards</a><br>
    <a href="URL1">Removal of Website Login</a><br>
    <a href="URL1">Security prompt upon login</a><br>
    <a href="URL1">What do I do if I cannot remember my username?</a><br>
    <a href="URL1">What is an Inactive or Dormant Account?</a><br>
    <a href="URL1">Where can I get assistance for ClubGG questions?</a><br>
    <a href="URL1">Where can I view a full list of site terms and rules?</a><br>
    <a href="URL1">Why am I being asked to verify my mobile number again?</a><br>
    <a href="URL1">Why can I no longer login via the website?</a><br>

    `,
    securityFeatures: `
    <a href="URL1">Account Security - Frequently Asked Questions</a><br>
    <a href="URL1">Account Security - Summary</a><br>
    <a href="URL1">Additional security options</a><br>
    <a href="URL1">Fund Password</a><br>
    <a href="URL1">How can I set up 2FA?</a><br>
    <a href="URL1">How to use Google Authenticator</a><br>
    <a href="URL1">I have 2FA on my account but I can login without it. Why?</a><br>
    <a href="URL1">I have received an error message informing me that I am logged in from another device?</a><br>
    <a href="URL1">I'm getting a pop up that says RESEND LIMITED. What does this mean?</a><br>
    <a href="URL1">What 2FA options are available for my account?</a><br>
    <a href="URL1">What account security does GGPoker offer?</a><br>
    <a href="URL1">What are my options for 2FA?</a><br>
    <a href="URL1">What happens if my 2FA is set to High?</a><br>
    <a href="URL1">What happens if my 2FA is set to Low?</a><br>
    <a href="URL1">What happens if my 2FA is set to Medium?</a><br>
    `,
    otherAccountSecurityQueries: `
    <a href="URL1">Are external links on the website considered endorsements from your company?</a><br>
    <a href="URL1">Biometric Authentication</a><br>
    <a href="URL1">Can I copy and paste authentication codes instead of manual input?</a><br>
    <a href="URL1">Failed multiple verification attempts</a><br>
    <a href="URL1">Fund Password - Forgotten Fund Password</a><br>
    <a href="URL1">How can I report to security a matter requiring investigation?</a><br>
    <a href="URL1">How do I keep my account safe?</a><br>
    <a href="URL1">I am not getting my 2FA emails at all, what could be wrong?</a><br>
    <a href="URL1">I am not receiving my code by email?</a><br>
    <a href="URL1">I am not receiving the code by text, why is this?</a><br>
    <a href="URL1">I have received an email regarding account verification - but my account is verified?</a><br>
    <a href="URL1">Is my money safe on your site?</a><br>
    <a href="URL1">Is there a reason why GGPoker won't answer my account-related question if I send them an email from an email address that is different from the one that I registered with?</a><br>
    <a href="URL1">My 2FA emails are ending up in spam, how do I fix this?</a><br>
    <a href="URL1">My account is blocked. A prompt tells me a security investigation is ongoing. What can I do?</a><br>
    <a href="URL1">Turning off login notification settings</a><br>
    <a href="URL1">Validation email never arrived</a><br>
    `,
    unwantedAccess: `
    <a href="URL1">It is too late, I already clicked a link in a phishing scam/false email. What can I do?</a><br>
    <a href="URL1">Potential hack/account violation</a><br>
    `,
    limitsIncrease: `
    <a href="URL1">Can I set a buy-in limit for my account?</a><br>
    <a href="URL1">Deposit Limits</a><br>
    <a href="URL1">Deposit Limits - I've set a deposit limit and I want to play - can this be fast-tracked?</a><br>
    <a href="URL1">Even after my limit has been raised I'm unable to deposit, why?</a><br>
    <a href="URL1">Game Limits</a><br>
    <a href="URL1">How can I set deposit limits within the app?</a><br>
    <a href="URL1">Loss Limits - I've requested an increase to this limit - can this request be expedited?</a><br>
    <a href="URL1">Loss limits - can they be increased?</a><br>
    <a href="URL1">My account has the maximum verified deposit limits - can these be increased further?</a><br>
    <a href="URL1">Total Bet Amount Limits - I've requested to increase this limit. Can it be expedited?</a><br>
    <a href="URL1">Where can I set deposit limits?</a><br>
    `,
    limitsDecrease: `
    <a href="URL1">Can I set a buy-in limit for my account?</a><br>
    <a href="URL1">Deposit Limits</a><br>
    <a href="URL1">Game Limits</a><br>
    <a href="URL1">Total Bet Amount Limit - I'd like to decrease this limit</a><br>
    <a href="URL1">Where can I set deposit limits?</a><br>
    `,
    timeOut: `
    <a href="URL1">How to Self Exclude your account</a><br>
    <a href="URL1">How to close your account</a><br>
    <a href="URL1">How to request for Timeout</a><br>
    <a href="URL1">I'm beginning to feel negatively affected by gambling</a><br>
    <a href="URL1">Self Exclusion</a><br>
    <a href="URL1">Self Exclusion - Seeking exclusion/account closure</a><br>
    <a href="URL1">What type of exclusions are available at GGPoker?</a><br>
    `,
    permanentExclusion: `
    <a href="URL1">Can I prematurely conclude my exclusion?</a><br>
    <a href="URL1">How to Self Exclude your account</a><br>
    <a href="URL1">How to close your account</a><br>
    <a href="URL1">I'm beginning to feel negatively affected by gambling</a><br>
    <a href="URL1">Self Exclusion</a><br>
    <a href="URL1">Self Exclusion - Seeking exclusion/account closure</a><br>
    <a href="URL1">What type of exclusions are available at GGPoker?</a><br>
    `,
    otherResponsibleGamingQueries: `
    <a href="URL1">Can I exclude myself from certain features of the application such as casino games?</a><br>
    <a href="URL1">Can I prematurely conclude my exclusion?</a><br>
    <a href="URL1">How can I access the Responsible Gaming Tab?</a><br>
    <a href="URL1">How do GGPoker's deposit limits work?</a><br>
    <a href="URL1">How to Self Exclude your account</a><br>
    <a href="URL1">How to close your account</a><br>
    <a href="URL1">How to request for Timeout</a><br>
    <a href="URL1">I excluded myself from Casino games, but I can still see them in the client. Why?</a><br>
    <a href="URL1">I have excluded from Poker/Casino/Live Casino and I wish to lift this restriction.</a><br>
    <a href="URL1">I have received an email from ggcares@ggpoker.com - is this a verified GGPoker email address?</a><br>
    <a href="URL1">I have received an email from ggcares@ggpoker.eu - is this a verified GGPoker email address?</a><br>
    <a href="URL1">I'm beginning to feel negatively affected by gambling</a><br>
    <a href="URL1">I've made a request to overturn a Game limit block, however, I have not received a follow-up email from the Safer Gambling team. Why is this?</a><br>
    <a href="URL1">Loss Limit</a><br>
    <a href="URL1">Loss Limit - I'd like to decrease this limit</a><br>
    <a href="URL1">Loss Limits - What does loss limit mean?</a><br>
    <a href="URL1">Monthly Login Frequency</a><br>
    <a href="URL1">Monthly Login Frequency - Can this limit be decreased?</a><br>
    <a href="URL1">Monthly Login Frequency - I've requested an increase to this limit - can it be expedited?</a><br>
    <a href="URL1">Monthly Login Frequency - can this be increased?</a><br>
    <a href="URL1">Re-Login Time Limit</a><br>
    <a href="URL1">Re-Login Time Limit - Can this be decreased?</a><br>
    <a href="URL1">Re-Login Time Limit - Can this be increased?</a><br>
    <a href="URL1">Reality Check Notification</a><br>
    <a href="URL1">Responsible Gaming - Total Bet Amount Limits - Can this limit be increased?</a><br>
    <a href="URL1">Self Exclusion</a><br>
    <a href="URL1">Self Exclusion - Seeking exclusion/account closure</a><br>
    <a href="URL1">Single Bet Amount Limit</a><br>
    <a href="URL1">Single Bet Amount Limit - Can this be increased?</a><br>
    <a href="URL1">Single Bet Amount Limit - Can this limit be decreased?</a><br>
    <a href="URL1">Single Bet Amount Limit - I've requested to increase this limit. Can it be expedited?</a><br>
    <a href="URL1">Total Bet Amount - What does Total Bet Amount Limit do?</a><br>
    <a href="URL1">Total Bet Amount Limit</a><br>
    <a href="URL1">What Responsible Gaming Options does GGPoker provide?</a><br>
    <a href="URL1">What is an affordability check?</a><br>
    <a href="URL1">What type of exclusions are available at GGPoker?</a><br>
    `,

    allInOrFold: `
    <a href="URL1">All-in or Fold (Cash Games) - Buy-in limits</a><br>
    <a href="URL1">All-in or Fold (Cash Games) - Details and Limitations</a><br>
    <a href="URL1">All-in or Fold (Cash Games) - Download Hand Histories</a><br>
    <a href="URL1">All-in or Fold (Cash Games) - Game History</a><br>
    <a href="URL1">All-in or Fold (Cash Games) - Rake & Fees</a><br>
    <a href="URL1">All-in or Fold (Cash Games) - Summary</a><br>
    <a href="URL1">All-in or Fold (Cash Games) - Table Information</a><br>
    <a href="URL1">All-in or Fold (Cash Games) - Time Bank settings</a><br>
    <a href="URL1">All-in or Fold (Cash Games) - Understanding All-In or Fold game rules</a><br>
    <a href="URL1">All-in or Fold (Cash Games) - Understanding Blind Structure, Rake and Fees</a><br>
    <a href="URL1">All-in or Fold (Sit & Go) - Are the Sit & Go's available to only Hold'em players?</a><br>
    <a href="URL1">All-in or Fold (Sit & Go) - How does it work?</a><br>
    <a href="URL1">All-in or Fold (Sit & Go) - How many chips do I start with?</a><br>
    <a href="URL1">All-in or Fold (Sit & Go) - Is late registration available?</a><br>
    <a href="URL1">All-in or Fold (Sit & Go) - Is my history shown in PokerCraft?</a><br>
    <a href="URL1">All-in or Fold (Sit & Go) - Is re-entry available?</a><br>
    <a href="URL1">All-in or Fold (Sit & Go) - Prize Structure</a><br>
    <a href="URL1">All-in or Fold (Sit & Go) - Summary</a><br>
    <a href="URL1">All-in or Fold (Sit & Go) - Time Bank settings for AoF Sit & Go</a><br>
    <a href="URL1">All-in or Fold (Sit & Go) - Tutorial</a><br>
    <a href="URL1">All-in or Fold (Sit & Go) - What buy-in levels are available?</a><br>
    <a href="URL1">All-in or Fold (Sit & Go) - What is All In Or Fold Sit & Go?</a><br>
    <a href="URL1">All-in or Fold Cash - Overview & Key Details</a><br>
    <a href="URL1">All-in or Fold Sit & Go - Overview & Key Details</a><br>
    <a href="URL1">Cash Games - What is a Cash Game?</a><br>
    <a href="URL1">Understanding Move Table</a><br>
    <a href="URL1">Understanding Remove Chips feature</a><br>
    <a href="URL1">What is a raked hand?</a><br>
    <a href="URL1">What is the exact sit-out time I have at the table?</a><br>
    `,

    rushAndCash: `
    <a href="URL1">Auto Fold in Rush & Cash - Frequently Asked Questions</a><br>
    <a href="URL1">Auto Fold in Rush & Cash - Summary</a><br>
    <a href="URL1">Cash Drops in Rush & Cash - Frequently Asked Questions</a><br>
    <a href="URL1">Cash Drops in Rush & Cash - Summary</a><br>
    <a href="URL1">Cash Games - Are hands raked pre-flop?</a><br>
    <a href="URL1">Cash Games - Blind Group Waiting</a><br>
    <a href="URL1">Cash Games - Understanding Run It Three Times</a><br>
    <a href="URL1">Cash Games - What is a Cash Game?</a><br>
    <a href="URL1">Fish Buffet - I'm playing Rush & Cash and my Fish Points are not increasing - why is this?</a><br>
    <a href="URL1">Rush & Cash - Anti-Ratholing Measures</a><br>
    <a href="URL1">Rush & Cash - Omaha Summary</a><br>
    <a href="URL1">Rush & Cash - Overview & Key Details</a><br>
    <a href="URL1">Rush & Cash Games - Summary</a><br>
    <a href="URL1">Swipe up to Fold in Rush & Cash (Mobile)</a><br>
    <a href="URL1">Understanding Deal Choice</a><br>
    <a href="URL1">What is a raked hand?</a><br>
    <a href="URL1">What is the exact sit-out time I have at the table?</a><br>
    `,

    holdem: `
    <a href="URL1">An Introduction to No Limit Texas Hold'em</a><br>
    <a href="URL1">Cash Game - Leave Table Penalty</a><br>
    <a href="URL1">Cash Games - Are hands raked pre-flop?</a><br>
    <a href="URL1">Cash Games - Blind Group Waiting</a><br>
    <a href="URL1">Cash Games - If I leave a table, can I enter the same table with the original amount that I had bought in with?</a><br>
    <a href="URL1">Cash Games - Understanding Run It Three Times</a><br>
    <a href="URL1">Cash Games - What is a Cash Game?</a><br>
    <a href="URL1">Hold'em - Overview & Key Details</a><br>
    <a href="URL1">Hold'em - Summary</a><br>
    <a href="URL1">How does Disconnect Extra Time (DET) work?</a><br>
    <a href="URL1">No Limit Hold'em Hand Rankings</a><br>
    <a href="URL1">Time Bank settings for Hold'em cash games</a><br>
    <a href="URL1">Understanding Deal Choice</a><br>
    <a href="URL1">Understanding Move Table</a><br>
    <a href="URL1">What is a raked hand?</a><br>
    <a href="URL1">What is the exact sit-out time I have at the table?</a><br>
    `,

    omaha: `
    <a href="URL1">An introduction to Pot Limit Omaha</a><br>
    <a href="URL1">Cash Game - Leave Table Penalty</a><br>
    <a href="URL1">Cash Games - Are hands raked pre-flop?</a><br>
    <a href="URL1">Cash Games - Blind Group Waiting</a><br>
    <a href="URL1">Cash Games - If I leave a table, can I enter the same table with the original amount that I had bought in with?</a><br>
    <a href="URL1">Cash Games - Understanding Run It Three Times</a><br>
    <a href="URL1">Cash Games - What is a Cash Game?</a><br>
    <a href="URL1">How does Disconnect Extra Time (DET) work?</a><br>
    <a href="URL1">Omaha (All Variants) - Summary</a><br>
    <a href="URL1">Omaha - Frequently Asked Questions</a><br>
    <a href="URL1">Omaha - How is The Pot Limit calculated in Pot Limit Omaha?</a><br>
    <a href="URL1">PLO - Overview & Key Details</a><br>
    <a href="URL1">PLO-5 - Overview & Key Details</a><br>
    <a href="URL1">Pot Limit Omaha - Hand Rankings</a><br>
    <a href="URL1">Time Bank settings for PLO games</a><br>
    <a href="URL1">Understanding Deal Choice</a><br>
    <a href="URL1">Understanding Move Table</a><br>
    <a href="URL1">Understanding Omaha</a><br>
    <a href="URL1">Understanding Omaha Blind Structure and Rake</a><br>
    <a href="URL1">What is a raked hand?</a><br>
    <a href="URL1">What is the exact sit-out time I have at the table?</a><br>
    `,

    shortDeck: `
    <a href="URL1">An Introduction To Short Deck</a><br>
    <a href="URL1">Cash Game - Leave Table Penalty</a><br>
    <a href="URL1">Cash Games - Are hands raked pre-flop?</a><br>
    <a href="URL1">Cash Games - Blind Group Waiting</a><br>
    <a href="URL1">Cash Games - If I leave a table, can I enter the same table with the original amount that I had bought in with?</a><br>
    <a href="URL1">Cash Games - Understanding Run It Three Times</a><br>
    <a href="URL1">Cash Games - What is a Cash Game?</a><br>
    <a href="URL1">How Short Deck Hold’em works</a><br>
    <a href="URL1">How does Disconnect Extra Time (DET) work?</a><br>
    <a href="URL1">Short Deck - Hand Rankings</a><br>
    <a href="URL1">Short Deck - Overview & Key Details</a><br>
    <a href="URL1">Time Bank settings for Short Deck cash games</a><br>
    <a href="URL1">Understanding Deal Choice</a><br>
    <a href="URL1">Understanding Move Table</a><br>
    <a href="URL1">Understanding Remove Chips feature</a><br>
    <a href="URL1">What GGPoker features are available at Short Deck games?</a><br>
    <a href="URL1">What is Short Deck Poker?</a><br>
    <a href="URL1">What is a raked hand?</a><br>
    <a href="URL1">What is the exact sit-out time I have at the table?</a><br>
    <a href="URL1">What is the lowest straight possible in Short Deck?</a><br>
    `,

    casino: `
    <a href="URL1">Baccarat - Understanding Baccarat</a><br>
    <a href="URL1">BlackJack - Understanding Blackjack Game Rules</a><br>
    <a href="URL1">Blackjack - Understanding Blackjack</a><br>
    <a href="URL1">Can I multi-table casino games?</a><br>
    <a href="URL1">Casino Bonus - FAQ & Summary</a><br>
    <a href="URL1">Craps - Understanding Craps</a><br>
    <a href="URL1">Locating a Round ID</a><br>
    <a href="URL1">Roulette - Understanding Roulette</a><br>
    <a href="URL1">Sic Bo - Understanding Sic Bo</a><br>
    <a href="URL1">Slots - Can I save games to play at a later date?</a><br>
    <a href="URL1">Slots - Where can I find my slot game histories?</a><br>
    <a href="URL1">Understanding Slots</a><br>
    <a href="URL1">Video Poker - Understanding Video Poker</a><br>
    <a href="URL1">What casino games are available at GGPoker?</a><br>
    <a href="URL1">Where can I find my casino games histories?</a><br>
    `,

    otherGameTypes: `
    <a href="URL1">Cash Games - Blind Group Waiting</a><br>
    <a href="URL1">Chip Stack Currency</a><br>
    <a href="URL1">Does GGPoker offer Sit & Go Games?</a><br>
    <a href="URL1">Exclusive Games - Are there any criteria for receiving an invitation to Exclusive games?</a><br>
    <a href="URL1">Exclusive Games - How can I become a Host?</a><br>
    <a href="URL1">Exclusive Games - How can I inquire about Exclusive Games & Hosts?</a><br>
    <a href="URL1">Exclusive Games - How can I participate in Exclusive Games?</a><br>
    <a href="URL1">Exclusive Games - What are Exclusive Games?</a><br>
    <a href="URL1">Exclusive Games - What should I do if I don’t receive an invitation but want to participate?</a><br>
    <a href="URL1">Exclusive Games - Will new features in the Exclusive Games be available in regular games?</a><br>
    <a href="URL1">Mixed Games - Are there plans to offer other Poker variants?</a><br>
    <a href="URL1">Play Money - FAQ & Summary</a><br>
    `,
    dailyGuarantees: `
    <a href="URL1">Final Table Blind Rollback</a><br>
    <a href="URL1">Final Table Chess Clock</a><br>
    <a href="URL1">Final Table Features</a><br>
    <a href="URL1">Understanding Daily Guarantees</a><br>
    <a href="URL1">Unregistering from a tournament</a><br>
    `,

    bountyHunters: `
    <a href="URL1">Bounty Hunters Series - October/November 2024 - Frequently Asked Questions</a><br>
    <a href="URL1">Bounty prizes when a deal is made</a><br>
    <a href="URL1">Final Table Blind Rollback</a><br>
    <a href="URL1">Final Table Chess Clock</a><br>
    <a href="URL1">Final Table Features</a><br>
    <a href="URL1">GGPoker Bounty Hunters mechanic and worked example</a><br>
    <a href="URL1">Unregistering from a tournament</a><br>
    `,

    mysteryBounty: `
    <a href="URL1">Can I play multiple Day 1s?</a><br>
    <a href="URL1">Final Phase</a><br>
    <a href="URL1">Final Table Blind Rollback</a><br>
    <a href="URL1">Final Table Chess Clock</a><br>
    <a href="URL1">Final Table Features</a><br>
    <a href="URL1">How much is it to enter?</a><br>
    <a href="URL1">How to play?</a><br>
    <a href="URL1">I've won a tournament ticket as my prize. Why is this?</a><br>
    <a href="URL1">Initial Phase</a><br>
    <a href="URL1">Terms and Conditions</a><br>
    <a href="URL1">Unregistering from a tournament</a><br>
    <a href="URL1">What happens if I play multiple Day 1s and qualify on multiple occasions for the Final Day (Final Phase)?</a><br>
    <a href="URL1">What is the difference between Mystery Bounty tournaments and regular Bounty Tournaments?</a><br>
    <a href="URL1">Where and When?</a><br>
    <a href="URL1">Where can I see the bounties available in a Mystery Bounty tournament?</a><br>
    `,

    ggMasters: `
    <a href="URL1">Are all GGMasters events freezeout?</a><br>
    <a href="URL1">Are there any bounty events within GGMasters?</a><br>
    <a href="URL1">Can I satellite into GGMasters events?</a><br>
    <a href="URL1">Final Table Blind Rollback</a><br>
    <a href="URL1">Final Table Chess Clock</a><br>
    <a href="URL1">Final Table Features</a><br>
    <a href="URL1">GGMasters Schedule</a><br>
    <a href="URL1">GGMasters Starting Stack Size</a><br>
    <a href="URL1">Overlay Edition - What is the GGMasters Overlay Edition?</a><br>
    <a href="URL1">Unregistering from a tournament</a><br>
    <a href="URL1">What are the GGMasters?</a><br>
    <a href="URL1">What is a freezeout tournament?</a><br>
    <a href="URL1">What range of buy-ins are the GGMasters events?</a><br>
    `,

    millionDollar: `
    <a href="URL1">Final Table Blind Rollback</a><br>
    <a href="URL1">Final Table Chess Clock</a><br>
    <a href="URL1">Final Table Features</a><br>
    <a href="URL1">GGMillion$ - Can I play multiple Day 1's to the GGMillion$ Final Day?</a><br>
    <a href="URL1">GGMillion$ - Can I satellite into any GGMillion$?</a><br>
    <a href="URL1">GGMillion$ - Frequently Asked Questions</a><br>
    <a href="URL1">GGMillion$ - How much money is guaranteed in the GGMillion$?</a><br>
    <a href="URL1">GGMillion$ - I have qualified for the GGMillion$ via a satellite, can I win another entry via a different satellite?</a><br>
    <a href="URL1">GGMillion$ - Is staking available in the GGMillion$?</a><br>
    <a href="URL1">GGMillion$ - This event runs weekly, however, I cannot find one for this week. Why?</a><br>
    <a href="URL1">GGMillion$ - What is the GGMillion$?</a><br>
    <a href="URL1">GGMillion$ - When does the GGMillion$ take place?</a><br>
    <a href="URL1">GGMillion$ - Where can I find more information on the MILLION$ series?</a><br>
    <a href="URL1">GGMillion$ Summary</a><br>
    <a href="URL1">Unregistering from a tournament</a><br>
    `,

    satellites: `
    <a href="URL1">Express Satellites - All-in or Fold Sit & Go - Frequently Asked Questions</a><br>
    <a href="URL1">Express Satellites - Avatar Race - Frequently Asked Questions</a><br>
    <a href="URL1">Express Satellites - Flip & Go Sit & Go Satellites - Frequently Asked Questions</a><br>
    <a href="URL1">Express Satellites - Frequently Asked Questions</a><br>
    <a href="URL1">Express Satellites - Roshambo (Rock, Paper, Scissors) - Frequently Asked Questions</a><br>
    <a href="URL1">Final Table Blind Rollback</a><br>
    <a href="URL1">Final Table Chess Clock</a><br>
    <a href="URL1">Final Table Features</a><br>
    <a href="URL1">How is the cash prize distributed if the guarantee of a specific tournament is exceeded?</a><br>
    <a href="URL1">I want to play a certain event. How can I ensure my satellite tournament will register me in my preferred game?</a><br>
    <a href="URL1">I won a satellite but I was given a T$ prize of less value - why is this?</a><br>
    <a href="URL1">I won a satellite entry and was registered for the wrong event</a><br>
    <a href="URL1">I won a satellite, but cannot participate in the target event.</a><br>
    <a href="URL1">I won a seat in an event via a satellite, can I unregister?</a><br>
    <a href="URL1">Satellite Pausing</a><br>
    <a href="URL1">Target Stack Satellite - Summary</a><br>
    <a href="URL1">Target Stack Satellites - FAQ</a><br>
    <a href="URL1">What happens if I'm registered in a tournament and win another satellite?</a><br>
    <a href="URL1">What is a satellite?</a><br>
    <a href="URL1">When is hand for hand active in satellite tournaments?</a><br>
    <a href="URL1">When playing a satellite, the target tournament changed. Is this within the rules or a bug?</a><br>
    <a href="URL1">Why did my satellite pause?</a><br>
    <a href="URL1">Why was I not paid the correct amount for my satellite win?</a><br>
    `,

    tournamentSeriesSpecialEvents: `
    <a href="URL1">Bounty Hunters Series - October/November 2024 - Frequently Asked Questions</a><br>
    <a href="URL1">Flip & Go Millionaire - What happens if I win the Flip Stage and proceed to the Go Stage?</a><br>
    <a href="URL1">Flip & Go Millionaire - Can I sell action?</a><br>
    <a href="URL1">Flip & Go Millionaire - Frequently Asked Questions</a><br>
    <a href="URL1">Flip & Go Millionaire - How much does each stack cost in the Flip Stage?</a><br>
    <a href="URL1">Flip & Go Millionaire - I have already qualified for the Go Stage - can I play more Flip Stages?</a><br>
    <a href="URL1">Flip & Go Millionaire - Terms and Conditions</a><br>
    <a href="URL1">Flip & Go Millionaire - What are the maximum amount of stacks I can buy per Flip Stage?</a><br>
    <a href="URL1">Flip & Go Millionaire - What is Flip & Go Millionaire?</a><br>
    <a href="URL1">Flip & Go Millionaire - When do the Flip & Go Millionaire Flights begin?</a><br>
    <a href="URL1">Flip & Go Millionaire - When does the Flip & Go Millionaire event take place?</a><br>
    <a href="URL1">Flip & Go Millionaire - Will the Flip Bonus promotion also be present in the Flip & Go Millionaire Flip Stages?</a><br>
    <a href="URL1">Flip & Go Millionaire - Will there be satellites so I can buy-in cheaper?</a><br>
    <a href="URL1">WSOP Paradise 2024 - Frequently Asked Questions</a><br>
    `,

    otherTournaments: `
    <a href="URL1">Are any GGPoker events tracked on Hendon Mob?</a><br>
    <a href="URL1">Are late registration tournaments in the lobby configured by remaining registration time?</a><br>
    <a href="URL1">Chinese Zodiac - Most Zodiac tournaments offer a specialized avatar for victory. Do these reward mechanics apply for Zodiac Bounty events?</a><br>
    <a href="URL1">Chinese Zodiac - Are there any satellites available for Chinese Zodiac tournaments?</a><br>
    <a href="URL1">Chinese Zodiac - Special Avatars</a><br>
    <a href="URL1">Chinese Zodiac - What is the Chinese Zodiac Series?</a><br>
    <a href="URL1">Chinese Zodiac - When a deal is made at the final table of a Zodiac event, do all players win an animal avatar or just the participant holding the most chips when the deal is made?</a><br>
    <a href="URL1">Chinese Zodiac - When do the Chinese Zodiac Tournaments run?</a><br>
    <a href="URL1">Delayed Start</a><br>
    <a href="URL1">Do tournaments support hand-to-hand play?</a><br>
    <a href="URL1">Does GGPoker offer "On Demand" Tournaments?</a><br>
    <a href="URL1">Elky Dance</a><br>
    <a href="URL1">Elky Dance - Can I turn this feature off?</a><br>
    <a href="URL1">Estimated duration</a><br>
    <a href="URL1">Filter Improvement (October 2023)</a><br>
    <a href="URL1">Fish Buffet - I've just exited a tournament - but my Fish Points did not update - why is this?</a><br>
    <a href="URL1">GGPoker Bounty Hunters mechanic and worked example</a><br>
    <a href="URL1">How can I find out if a tournament that I had registered for was cancelled?</a><br>
    <a href="URL1">How do I find the tournament that I had registered for?</a><br>
    <a href="URL1">How does the chess clock work?</a><br>
    <a href="URL1">How does the current Tournament position dashboard help players?</a><br>
    <a href="URL1">I bought into the same tournament twice, but why is it that I am only registered for one tournament and that my balance was debited twice?</a><br>
    <a href="URL1">I see GGPoker offers tournaments in ¥, what currency is this?</a><br>
    <a href="URL1">In a tournament why can I not register if the tournament is still in late registration?</a><br>
    <a href="URL1">Is it possible to be Big Blind in back to back hands in a tournament?</a><br>
    <a href="URL1">My tournament was cancelled due to a tech issue, do I still get Fish Buffet points?</a><br>
    <a href="URL1">Phased Events - I'm trying to register for a Day 1 event but get a message saying I am already registered for Day 2 and cannot enter. Why is this?</a><br>
    <a href="URL1">Private Tournaments - Partner freerolls from the lobby</a><br>
    <a href="URL1">Setting Custom Buy-in Filters for tournaments</a><br>
    <a href="URL1">Sitting out in a tournament/MTT</a><br>
    <a href="URL1">Timebank settings for Tournaments</a><br>
    <a href="URL1">Tournament Elimination Policy</a><br>
    <a href="URL1">Tournament Honours - Summary</a><br>
    <a href="URL1">Tournament Honours - What can I find in the Main Lobby under Tournament Honours?</a><br>
    <a href="URL1">Tournament Honours - What is Tournament Honours?</a><br>
    <a href="URL1">Tournament Honours - What's special about the Heads-Up stage at the final table?</a><br>
    <a href="URL1">Tournament Honours - Why are all my previous results not shown?</a><br>
    <a href="URL1">Tournament Profit Graph</a><br>
    <a href="URL1">Understanding Omaholics</a><br>
    <a href="URL1">Understanding Re-Entry</a><br>
    <a href="URL1">Understanding Tournament Types</a><br>
    <a href="URL1">Unregistering from a tournament</a><br>
    <a href="URL1">What are Variable Level tournaments?</a><br>
    <a href="URL1">What happens to my Buy-in if a tournament is cancelled mid-tournament?</a><br>
    <a href="URL1">What is a freezeout tournament?</a><br>
    <a href="URL1">What is a satellite?</a><br>
    <a href="URL1">What is an Overlay?</a><br>
    <a href="URL1">When is it possible to buy an add-on or rebuy?</a><br>
    <a href="URL1">Where can the Tournament Break Schedule be found from the client?</a><br>
    <a href="URL1">Why could I not make a rebuy and an add-on after I lost my stack?</a><br>
    <a href="URL1">Why does GGPoker not have old style Sit & Go tournaments?</a><br>
    <a href="URL1">Zodiac Tournaments - Can I register for these tournaments in USD?</a><br>
    `,


    stakingBacking: `
    <a href="URL1">Adjusted Mark Up</a><br>
    <a href="URL1">Auto Unregister</a><br>
    <a href="URL1">Can GGPoker act as an arbitrator in a staking dispute?</a><br>
    <a href="URL1">Can I chat with horses I've staked?</a><br>
    <a href="URL1">Can I see how a horse (player I've staked) is doing?</a><br>
    <a href="URL1">Can I see my staking history anywhere?</a><br>
    <a href="URL1">Cap</a><br>
    <a href="URL1">Designated Backer - Frequently Asked Questions</a><br>
    <a href="URL1">Designated Backer - What is 'Designated Backer'</a><br>
    <a href="URL1">Do I get a percentage of the prize if my horse finishes in the Bubble Protection places?</a><br>
    <a href="URL1">Fish Buffet - Do I get Fish Points for buying another player's action?</a><br>
    <a href="URL1">How can I find out if my favourite player is selling tournament action?</a><br>
    <a href="URL1">How can I find the staking results for an event?</a><br>
    <a href="URL1">How do I follow my favourite players for staking purposes?</a><br>
    <a href="URL1">How often does GGPoker’s Staking Seller list refresh?</a><br>
    <a href="URL1">How to buy Staking?</a><br>
    <a href="URL1">How to sell Staking?</a><br>
    <a href="URL1">How to view Staking Profile?</a><br>
    <a href="URL1">If I cancel staking am I unregistered from the tournament?</a><br>
    <a href="URL1">Multi Entry Staking</a><br>
    <a href="URL1">Multi Entry Staking - How do I buy for Multi Entry Staking?</a><br>
    <a href="URL1">Multi Entry Staking - How do I sell for multiple entries?</a><br>
    <a href="URL1">Multi Entry Staking - What is the Share Dilution formula applied to Multi-Entry Staking</a><br>
    <a href="URL1">Staking - Summary</a><br>
    <a href="URL1">Staking tournaments with buy-ins exceeding USD $5000+/CNY ¥5000+</a><br>
    <a href="URL1">Understanding Staking</a><br>
    <a href="URL1">What happens if I sell Day 2 action but I play another Day 1 and bring a bigger stack?</a><br>
    <a href="URL1">What is the maximum cap I can set?</a><br>
    `,

    smartHUD: `
    <a href="URL1">Are Smart HUD stats the same as these?</a><br>
    <a href="URL1">Breakdown of key Statistics - Summary</a><br>
    <a href="URL1">Can I opt out of Smart HUD and stop other players from seeing my data?</a><br>
    <a href="URL1">Can I view my stats on Smart HUD?</a><br>
    <a href="URL1">Can other players see my entire gameplay stats?</a><br>
    <a href="URL1">How Are Smart HUD stats calculated?</a><br>
    <a href="URL1">Is having a tool like this regarded as cheating?</a><br>
    <a href="URL1">Is there a difference between what I can see when I look at my stats and what other players see when they look at mine?</a><br>
    <a href="URL1">Smart HUD - Frequently Asked Questions</a><br>
    <a href="URL1">Smart HUD - Summary</a><br>
    <a href="URL1">Smart HUD - Why does GGPoker have its own HUD and not just allow commercially available HUDs?</a><br>
    <a href="URL1">What are the basic stats that you can see using Smart HUD when viewing other players?</a><br>
    <a href="URL1">What does 3Bet mean?</a><br>
    <a href="URL1">What does ATS mean?</a><br>
    <a href="URL1">What does CB mean?</a><br>
    <a href="URL1">What does CCB mean?</a><br>
    <a href="URL1">What does FCB mean?</a><br>
    <a href="URL1">What does Hands mean?</a><br>
    <a href="URL1">What does PFR mean?</a><br>
    <a href="URL1">What does RCB mean?</a><br>
    <a href="URL1">What does TAF mean?</a><br>
    <a href="URL1">What does VPIP mean?</a><br>
    <a href="URL1">What does WSD mean?</a><br>
    <a href="URL1">What does WT mean?</a><br>
    <a href="URL1">What is a HUD?</a><br>
    <a href="URL1">What is the Smart HUD on GGPoker?</a><br>
    <a href="URL1">What is the number next to my name?</a><br>
    <a href="URL1">What will I see when I open another player's Smart HUD display?</a><br>
    <a href="URL1">Why are my total winnings different on Smart HUD, Staking Profile and PokerCraft?</a><br>
    <a href="URL1">Why does GGPoker have its own HUD and not just allow commercially available HUDs?</a><br>
    <a href="URL1">Why is there fire or ice around the number next to my name?</a><br>
    `,

    propBets: `
    <a href="URL1">Are prop bets private or public?</a><br>
    <a href="URL1">Bankroll Challenge - FAQ & Summary</a><br>
    <a href="URL1">Can Prop Bets be created while playing poker?</a><br>
    <a href="URL1">Can prop bets be cancelled once they go in play?</a><br>
    <a href="URL1">Can prop bets be tracked live?</a><br>
    <a href="URL1">ELO Challenge - Frequently Asked Questions</a><br>
    <a href="URL1">Forfeiting a Prop Bet</a><br>
    <a href="URL1">How many prop bets can players be in at the same time?</a><br>
    <a href="URL1">Last Longer - Frequently Asked Questions</a><br>
    <a href="URL1">Maximum/minimum Prop Bet amounts and markup</a><br>
    <a href="URL1">Player limits on Prop Bets.</a><br>
    <a href="URL1">Prop Bets - FAQ</a><br>
    <a href="URL1">Prop Bets - Last Longer - Frequently Asked Questions</a><br>
    <a href="URL1">Prop Bets - Summary</a><br>
    <a href="URL1">Prop bet payouts</a><br>
    <a href="URL1">Unregistering from a prop bet</a><br>
    <a href="URL1">What Happens to Prop Bets During Maintenance</a><br>
    <a href="URL1">What are Prop Bets In Poker?</a><br>
    <a href="URL1">What can I use to buy into Prop bets?</a><br>
    <a href="URL1">Who can create prop bets?</a><br>
    `,

    earlyBirdBenefits: `
    <a href="URL1">Bonus Chips - If I buy-in with T$ am I eligible for Bonus Chips?</a><br>
    <a href="URL1">Bonus Chips - What percentage bonus chips will I receive if I register during the first level of a tournament?</a><br>
    <a href="URL1">Bonus Chips - How are bonus chips calculated?</a><br>
    <a href="URL1">Bonus Chips - How do I know if a tournament offers Early Bird Bonus Chips?</a><br>
    <a href="URL1">Bonus Chips - How many levels into a tournament are bonus chips offered?</a><br>
    <a href="URL1">Bonus Chips - If I buy-in with a ticket am I eligible for Bonus Chips?</a><br>
    <a href="URL1">Bonus Chips - If I receive Bonus Chips for my first registration and get eliminated after the Early Bird Bonus Chip window - will I receive the bonus again if I re-enter?</a><br>
    <a href="URL1">Bonus Chips - If I receive Bonus Chips for my first registration and get eliminated before the Early Bird Bonus Chip window closes - will I receive the bonus again if I re-enter?</a><br>
    <a href="URL1">Bonus Chips - If I win a satellite to a tournament and are registered into the event before the Early Bird Bonus chip promotion ends - will I receive my bonus chip %?</a><br>
    <a href="URL1">Bonus Chips - What is Early Bird Benefit Bonus Chips?</a><br>
    <a href="URL1">Bonus Chips - What percentage bonus chips will I receive if I register before the tournament begins?</a><br>
    <a href="URL1">Bonus Chips - What percentage bonus chips will I receive if I register during the fifth level of a tournament?</a><br>
    <a href="URL1">Bonus Chips - What percentage bonus chips will I receive if I register during the fourth level of a tournament?</a><br>
    <a href="URL1">Bonus Chips - What percentage bonus chips will I receive if I register during the second level of a tournament?</a><br>
    <a href="URL1">Bonus Chips - What percentage bonus chips will I receive if I register during the third level of a tournament?</a><br>
    <a href="URL1">Bonus Chips - What types of Bonus Chips are available?</a><br>
    <a href="URL1">Bonus Chips - Which tournaments offer Early Bird Bonus Chips?</a><br>
    <a href="URL1">Bubble Protection - Do I still get Fish Buffet points as well as Bubble Protection?</a><br>
    <a href="URL1">Bubble Protection - Do backers share Bubble Protection?</a><br>
    <a href="URL1">Bubble Protection - Does the way I register for a tournament affect Bubble Protection?</a><br>
    <a href="URL1">Bubble Protection - How can I check I got paid my T$?</a><br>
    <a href="URL1">Bubble Protection - How do I know if a tournament has Bubble Protection?</a><br>
    <a href="URL1">Bubble Protection - How is my buy-in refunded via Bubble Protection?</a><br>
    <a href="URL1">Bubble Protection - How many places before the money are considered to be the Bubble?</a><br>
    <a href="URL1">Bubble Protection - How much of my buy-in goes to pay for this?</a><br>
    <a href="URL1">Bubble Protection - I bought staking off a player and I believe they intentionally tried to finish on the Bubble to avoid paying me, what can I do?</a><br>
    <a href="URL1">Bubble Protection - I finished on the bubble in an eligible tournament but have not received my payment. What's going wrong?</a><br>
    <a href="URL1">Bubble Protection - I registered before an event started, was eliminated and wish to re-enter. Do I still have Bubble Protection?</a><br>
    <a href="URL1">Bubble Protection - Is it available for Satellites?</a><br>
    <a href="URL1">Bubble Protection - Is there a minimum/maximum number of players needed for Bubble Protection to be paid out?</a><br>
    <a href="URL1">Bubble Protection - Terms and Conditions</a><br>
    <a href="URL1">Bubble Protection - What happens if multiple players are eliminated at once around the bubble of the tournament?</a><br>
    <a href="URL1">Bubble Protection - What is Bubble Protection?</a><br>
    <a href="URL1">Bubble Protection - What tournament types are eligible for Bubble Protection?</a><br>
    <a href="URL1">Bubble Protection - When does the Bubble Protection period end for each tournament?</a><br>
    <a href="URL1">Early Bird Benefit - Bonus Chips - Frequently Asked Questions</a><br>
    <a href="URL1">Early Bird Benefit - Bubble Protection - Frequently Asked Questions</a><br>
    <a href="URL1">Early Bird Benefit - Bubble Protection - Summary</a><br>
    `,

    evCashout: `
    <a href="URL1">Are there any extra fees in EV Cashout</a><br>
    <a href="URL1">Details and Limitations - EV Cashout</a><br>
    <a href="URL1">EV Cashout - Frequently Asked Questions</a><br>
    <a href="URL1">EV Cashout - If I take the EV Cashout option am I still eligible for the Bad Beat Jackpot?</a><br>
    <a href="URL1">EV Cashout - Summary</a><br>
    <a href="URL1">EV Cashout - Why was EV Cashout not offered in my hand?</a><br>
    <a href="URL1">EV Cashout in multiway pots</a><br>
    <a href="URL1">How does EV Cashout work?</a><br>
    <a href="URL1">How is EV Cashout calculated?</a><br>
    <a href="URL1">I ran out of time and I didn't get to select EV Cashout - what happened?</a><br>
    <a href="URL1">In which games does EV Cashout apply?</a><br>
    <a href="URL1">What is EV Cashout?</a><br>
    <a href="URL1">When does EV Cashout not apply?</a><br>
    <a href="URL1">When will my EV Cashout be paid?</a><br>
    <a href="URL1">Why was EV Cashout not applied to my hand?</a><br>
    `,


    otherFeatures: `
    <a href="URL1">Audio Space - I have entered an Audio Space - can I control my microphone and speaker settings?</a><br>
    <a href="URL2">Audio Space - Are Audio Space tables monitored?</a><br>
    <a href="URL3">Audio Space - Can I enter an Audio Space if I have my Mute Helmet (Helmet Mode) on?</a><br>
    <a href="URL4">Audio Space - Can I join more than one Audio Space?</a><br>
    <a href="URL5">Audio Space - Can I leave an Audio Space?</a><br>
    <a href="URL6">Audio Space - Do I have to sit in an Audio Space if it's open and active at my table?</a><br>
    <a href="URL7">Audio Space - Frequently Asked Questions</a><br>
    <a href="URL8">Audio Space - How do I join an Audio Space?</a><br>
    <a href="URL9">Audio Space - How do I know if Audio Space is available at my table?</a><br>
    <a href="URL10">Audio Space - Summary</a><br>
    <a href="URL11">Audio Space - What is Audio Space?</a><br>
    <a href="URL12">Audio Space - Who can create an Audio Space?</a><br>
    <a href="URL13">Audio Space - Who can sit in an Audio Space?</a><br>
    <a href="URL14">Audio Space - Why was Audio Space developed?</a><br>
    <a href="URL15">Avatars - Can I change my avatar more than once?</a><br>
    <a href="URL16">Avatars - Can player avatars be minimized and deselected entirely?</a><br>
    <a href="URL17">Avatars - Can they be removed?</a><br>
    <a href="URL18">Avatars - How to change Avatar</a><br>
    <a href="URL19">Avatars - NFT Avatars</a><br>
    <a href="URL20">Avatars - NFT Avatars - How to add an NFT Avatar</a><br>
    <a href="URL21">Bet Muck - Frequently Asked Questions</a><br>
    <a href="URL22">Bet Muck - I have actioned Bet Muck - can it be cancelled?</a><br>
    <a href="URL23">Bet Muck - I have chosen Bet Muck but my opponent raises - what happens?</a><br>
    <a href="URL24">Bet Muck - If I choose Bet Muck will my cards be revealed?</a><br>
    <a href="URL25">Bet Muck - Is Bet Muck available in AoF Cash Games?</a><br>
    <a href="URL26">Bet Muck - Is Bet Muck available in AoF Sit & Go?</a><br>
    <a href="URL27">Bet Muck - Is Bet Muck available in Flip & Go?</a><br>
    <a href="URL28">Bet Muck - Is Bet Muck available in Tournaments?</a><br>
    <a href="URL29">Bet Muck - Summary</a><br>
    <a href="URL30">Bet Muck - What does Bet Muck do?</a><br>
    <a href="URL31">Bet Muck - What games is Bet Muck available in?</a><br>
    <a href="URL32">Bet Muck - What is Bet Muck?</a><br>
    <a href="URL33">Bet Muck - When can I Bet Muck?</a><br>
    <a href="URL34">Bet on Flop - What is the minimum/maximum bet?</a><br>
    <a href="URL35">Bet on Flop - Can I turn off Bet on Flop?</a><br>
    <a href="URL36">Bet on Flop - Frequently Asked Questions</a><br>
    <a href="URL37">Bet on Flop - I won a bet on Bet on Flop. Can this be checked?</a><br>
    <a href="URL38">Bet on Flop - Payouts/Odds?</a><br>
    <a href="URL39">Bet on Flop - Summary</a><br>
    <a href="URL40">Bet on Flop - What games feature Bet on Flop?</a><br>
    <a href="URL41">Bet on Flop - What happens when hands are ran multiple times?</a><br>
    <a href="URL42">Bet on Flop - What is Bet on Flop?</a><br>
    <a href="URL43">Bet on Flop - What types of betting are available?</a><br>
    <a href="URL44">Bet on Flop - When can I place a bet?</a><br>
    <a href="URL45">Bet on Flop - Who can participate in the Bet on Flop side game?</a><br>
    <a href="URL46">Bet on Flop - Why can I not see this side game?</a><br>
    <a href="URL47">Betting - Why does it show betting in BBs sometimes and percentages in others?</a><br>
    <a href="URL48">Can I change suggested Smart Betting amounts?</a><br>
    <a href="URL49">Can I reset tagged players colors?</a><br>
    <a href="URL50">Can I turn off the river peel?</a><br>
    <a href="URL51">Can observers hear an Audio Space?</a><br>
    <a href="URL52">Chat - Chat bubbles/Emojis are blocking some info - can they be removed?</a><br>
    <a href="URL53">Chat - Reporting Chat Abuse</a><br>
    <a href="URL54">Chat - Understanding Table Chat</a><br>
    <a href="URL55">Chat - Auto Translate</a><br>
    <a href="URL56">Chat - Where can I find my table chat history?</a><br>
    <a href="URL57">Check/Call Preselect</a><br>
    <a href="URL58">Checking my player inbox</a><br>
    <a href="URL59">Chip Stack BB display</a><br>
    <a href="URL60">Chip Stack Currency</a><br>
    <a href="URL61">Custom Table Layout - Frequently Asked Questions</a><br>
    <a href="URL62">DNegs Splash Dance</a><br>
    <a href="URL63">DNegs Splash Dance - Can I turn this feature off?</a><br>
    <a href="URL64">Deactivating Squeeze Card</a><br>
    <a href="URL65">Elky Dance</a><br>
    <a href="URL66">Elky Dance - Can I turn this feature off?</a><br>
    <a href="URL67">Final Table Betting - Frequently Asked Questions</a><br>
    <a href="URL68">Final Table Betting - How are the odds calculated for Final Table Betting?</a><br>
    <a href="URL69">Final Table Betting - How do I make a bet on the Final Table?</a><br>
    <a href="URL70">Final Table Betting - I have made a bet on the Final Table but the odds have changed what happens?</a><br>
    <a href="URL71">Final Table Betting - I have won a Final table bet - when will I be paid?</a><br>
    <a href="URL72">Final Table Betting - If I am playing on a Final Table can I make a bet?</a><br>
    <a href="URL73">Final Table Betting - If I qualify for a Final table - can I bet on myself?</a><br>
    <a href="URL74">Final Table Betting - Is Final Table Betting available in all countries?</a><br>
    <a href="URL75">Final Table Betting - Is Final Table Betting available in all tournaments?</a><br>
    <a href="URL76">Final Table Betting - Summary</a><br>
    <a href="URL77">Final Table Betting - What happens if not all participants participate in the final table?</a><br>
    <a href="URL78">Final Table Betting - What is Final Table Betting?</a><br>
    <a href="URL79">Final Table Betting - What is the minimum bet I can make?</a><br>
    <a href="URL80">Final Table Betting - When does Final Table Betting close?</a><br>
    <a href="URL81">Final Table Betting - When will the odds be calculated for Final Table Betting?</a><br>
    <a href="URL82">Final Table Betting - Where can I see the results of any bets I've made on a Final Table?</a><br>
    <a href="URL83">Four colour deck</a><br>
    <a href="URL84">Group Join - Table Preferences via Group Join</a><br>
    <a href="URL85">Helmet Mode - Can I turn certain things off with Helmet Mode for example, block emojis but still have table chat?</a><br>
    <a href="URL86">Helmet Mode - Can I use Helmet Mode as an observer at a table?</a><br>
    <a href="URL87">Helmet Mode - Frequently Asked Questions</a><br>
    <a href="URL88">Helmet Mode - How do I switch Helmet Mode off (PC)</a><br>
    <a href="URL89">Helmet Mode - How do I switch Helmet Mode on? (Mobile)</a><br>
    <a href="URL90">Helmet Mode - How do I switch Helmet Mode on? (PC)</a><br>
    <a href="URL91">Helmet Mode - I want to have my helmet mode set to 'on' all the time. Why is there no option to do this?</a><br>
    <a href="URL92">Helmet Mode - If I am already seated with Helmet Mode on, will any new tables have it applied automatically?</a><br>
    <a href="URL93">Helmet Mode - If I am using Helmet Mode, can I use chat or emojis?</a><br>
    <a href="URL94">Helmet Mode - Is there an option to have Helmet Mode permanently on?</a><br>
    <a href="URL95">Helmet Mode - Summary</a><br>
    <a href="URL96">Helmet Mode - What does Helmet Mode block?</a><br>
    <a href="URL97">Helmet Mode - What is Helmet Mode?</a><br>
    <a href="URL98">Helmet Mode - When can I use this feature?</a><br>
    <a href="URL99">Helmet Mode - Will other players know if I am using Helmet Mode?</a><br>
    <a href="URL100">Hotkeys - Are Hotkeys available on all games?</a><br>
    <a href="URL101">Hotkeys - Can I create custom hotkeys that are not offered on the Poker client?</a><br>
    <a href="URL102">Hotkeys - Can I remove the green border around the table my mouse is hovering over</a><br>
    <a href="URL103">Hotkeys - Are you going to introduce mouse buttons as hotkeys?</a><br>
    <a href="URL104">Hotkeys - Can I show my set of hotkeys on the table?</a><br>
    <a href="URL105">Hotkeys - Can I use any keyboard keys as my hotkeys?</a><br>
    <a href="URL106">Hotkeys - Can I use mouse buttons as hotkeys?</a><br>
    <a href="URL107">Hotkeys - Can I use third-party software to key bind a mouse button to a keyboard key to use it as a hotkey?</a><br>
    <a href="URL108">Hotkeys - Frequently Asked Questions</a><br>
    <a href="URL109">Hotkeys - How do I know which table is active to avoid misclicks?</a><br>
    <a href="URL110">Hotkeys - Summary</a><br>
    <a href="URL111">Hotkeys - What Game Functions can be set as a Hotkey?</a><br>
    <a href="URL112">Hotkeys - What General Options can be set as a Hotkey?</a><br>
    <a href="URL113">Hotkeys - What are Hotkeys</a><br>
    <a href="URL114">Hotkeys - What table actions can be set as a Hotkey?</a><br>
    <a href="URL115">Hotkeys - Why do Hotkeys exist?</a><br>
    <a href="URL116">Is Smart Betting automatic?</a><br>
    <a href="URL117">Like/Dislike table reaction</a><br>
    <a href="URL118">Lobby Chat</a><br>
    <a href="URL119">Next Hand Roulette - Can I turn off Next Hand Roulette?</a><br>
    <a href="URL120">Next Hand Roulette - Details & Limitations</a><br>
    <a href="URL121">Next Hand Roulette - Frequently Asked Questions</a><br>
    <a href="URL122">Next Hand Roulette - Game Rules</a><br>
    <a href="URL123">Next Hand Roulette - How does Next Hand Roulette work?</a><br>
    <a href="URL124">Next Hand Roulette - I won on Next Hand Roulette but I have not been paid - can this be checked?</a><br>
    <a href="URL125">Next Hand Roulette - Is Next Hand Roulette available on mobile/iOS devices?</a><br>
    <a href="URL126">Next Hand Roulette - PC/Desktop display</a><br>
    <a href="URL127">Next Hand Roulette - Summary</a><br>
    <a href="URL128">Next Hand Roulette - Terms and Conditions</a><br>
    <a href="URL129">Next Hand Roulette - What betting types are available?</a><br>
    <a href="URL130">Next Hand Roulette - What games can I play Next Hand Roulette in?</a><br>
    <a href="URL131">Next Hand Roulette - What is Next Hand Roulette?</a><br>
    <a href="URL132">Next Hand Roulette - Where can I access Next Hand Roulette?</a><br>
    <a href="URL133">No Look All-in - Performing a 'No Look All In' or blind bet</a><br>
    <a href="URL134">No Turn, No Show - FAQ & Summary</a><br>
    <a href="URL135">Play Money - Frequently Asked Questions</a><br>
    <a href="URL136">Player Messages - How to access Player Messages</a><br>
    <a href="URL137">RIMT (Run it Multiple Times)</a><br>
    <a href="URL138">River Peel</a><br>
    <a href="URL139">Sit out settings</a><br>
    <a href="URL140">Smart Betting - Will Smart Betting make offers outside my typical bet ranges?</a><br>
    <a href="URL141">Snapcam - Can I block other players' Snapcam broadcasts?</a><br>
    <a href="URL142">Snapcam - Can I use Snapcam as an observer at a table?</a><br>
    <a href="URL143">Snapcam - Can my access to Snapcam be removed?</a><br>
    <a href="URL144">Snapcam - Does Snapcam keep recording when I switch tables?</a><br>
    <a href="URL145">Snapcam - Frequently Asked Questions</a><br>
    <a href="URL146">Snapcam - How do I use Snapcam?</a><br>
    <a href="URL147">Snapcam - Is Snapcam available on mobile?</a><br>
    <a href="URL148">Snapcam - Is Snapcam configured for both tournaments and cash games?</a><br>
    <a href="URL149">Snapcam - Summary</a><br>
    <a href="URL150">Snapcam - Terms and Conditions</a><br>
    <a href="URL151">Snapcam - What Is Snapcam?</a><br>
    <a href="URL152">Snapcam - What is the maximum Snapcam clip length?</a><br>
    <a href="URL153">Snapcam - When seated, how many players can utilize Snapcam simultaneously?</a><br>
    <a href="URL154">Snapcam - Where can I report players abusing Snapcam?</a><br>
    <a href="URL155">Splash - Can I Splash the whole table at once?</a><br>
    <a href="URL156">Splash - Can I pick who gets Splashed?</a><br>
    <a href="URL157">Splash - Can I stop other players from throwing Splashes at me?</a><br>
    <a href="URL158">Splash - Can I turn this feature off permanently?</a><br>
    <a href="URL159">Splash - Does being in Helmet Mode prevent me from Splashing my opponents?</a><br>
    <a href="URL160">Splash - Frequently Asked Questions</a><br>
    <a href="URL161">Splash - How do I initiate a Splash?</a><br>
    <a href="URL162">Splash - How do Splashes work?</a><br>
    <a href="URL163">Splash - If someone uses a Splash on me, can I remove the animation from my screen?</a><br>
    <a href="URL164">Splash - Summary</a><br>
    <a href="URL165">Splash - What Splashes are available?</a><br>
    <a href="URL166">Splash - What are the triggers to be able to use a Splash?</a><br>
    <a href="URL167">Splash - What happens when I use a 'Splash'?</a><br>
    <a href="URL168">Straddle - Frequently Asked Questions</a><br>
    <a href="URL169">Streamer Mode - Can Streamer Mode be activated on individual tables?</a><br>
    <a href="URL170">Streamer Mode - Frequently Asked Questions</a><br>
    <a href="URL171">Streamer Mode - How can I become a GGPoker official streamer?</a><br>
    <a href="URL172">Streamer Mode - How do I turn on Streamer Mode?</a><br>
    <a href="URL173">Streamer Mode - How does Hide My Balance work in Streamer Mode?</a><br>
    <a href="URL174">Streamer Mode - How does Hide My Hole Cards work in Streamer Mode?</a><br>
    <a href="URL175">Streamer Mode - Is there a setting to have streamer mode 'Always On'?</a><br>
    <a href="URL176">Streamer Mode - Summary</a><br>
    <a href="URL177">Streamer Mode - What features does Streamer Mode offer?</a><br>
    <a href="URL178">Streamer Mode - What is Streamer Mode?</a><br>
    <a href="URL179">Table Arrangement - Are custom layouts interchangeable between Windows and Mac devices?</a><br>
    <a href="URL180">Table Arrangement - Can I choose where any new tables I open whilst using a Custom Table Layout are displayed?</a><br>
    <a href="URL181">Table Arrangement - Can I use Custom Table Layouts on a Tablet or Mobile?</a><br>
    <a href="URL182">Table Arrangement - Frequently Asked Questions</a><br>
    <a href="URL183">Table Arrangement - How do I adjust Table Size on desktop?</a><br>
    <a href="URL184">Table Arrangement - How many Custom Table Layouts can I save?</a><br>
    <a href="URL185">Table Arrangement - How many tables can I display on my screen?</a><br>
    <a href="URL186">Table Arrangement - How to change the Background color</a><br>
    <a href="URL187">Table Arrangement - How to change the Front and Back Deck design on the cards used in your games</a><br>
    <a href="URL188">Table Arrangement - How to change the Table Felt Color</a><br>
    <a href="URL189">Table Arrangement - What are Custom Table Layouts?</a><br>
    <a href="URL190">Table Arrangement - What happens to my Custom Table Layouts if my screen resolution changes?</a><br>
    <a href="URL191">Table Arrangement - What is the maximum number of tables I can play at GGPoker?</a><br>
    <a href="URL192">Table Arrangement - Will my Custom Table Layouts be available across multiple devices?</a><br>
    <a href="URL193">Table Chat - Can players speak in any language?</a><br>
    <a href="URL194">Table Function - Sitout/Leave</a><br>
    <a href="URL195">Table Settings - How to set Auto Rebuy controls</a><br>
    <a href="URL196">Table backgrounds</a><br>
    <a href="URL197">Understanding Deal Choice</a><br>
    <a href="URL198">Understanding Move Table</a><br>
    <a href="URL199">Understanding Move Table</a><br>
    <a href="URL200">Understanding Rabbit Hunt</a><br>
    <a href="URL201">Understanding Show Cards</a><br>
    <a href="URL202">Understanding Universal Player Note</a><br>
    <a href="URL203">Voice Message - Can I block Voice Messages?</a><br>
    <a href="URL204">Voice Message - Can I translate Voice Notes in the client?</a><br>
    <a href="URL205">Voice Message - Do Voice Messages have the same chat rules as typed notes?</a><br>
    <a href="URL206">Voice Message - Do Voice Messages have to be in English?</a><br>
    <a href="URL207">Voice Message - Frequently Asked Questions</a><br>
    <a href="URL208">Voice Message - How can I report a Voice Message that breaks GGPoker's Table Chat policy?</a><br>
    <a href="URL209">Voice Message - How do I leave a Voice Message?</a><br>
    <a href="URL210">Voice Message - I'm trying to leave a Voice Message but it's silent, what is wrong?</a><br>
    <a href="URL211">Voice Message - What is a Voice Message?</a><br>
    <a href="URL212">Voice Message - Will Voice Messages play automatically or do I have to click on them?</a><br>
    <a href="URL213">What does BGM mean? Can I deactivate this?</a><br>
    <a href="URL214">What is Smart Betting?</a><br>
    <a href="URL215">Where can Audio Space be used?</a><br>
    `,

    pokercraft: `
    <a href="URL1">All In Or Fold - Game History</a><br>
    <a href="URL1">All In Or Fold - Sit & Go - Is my history shown in PokerCraft?</a><br>
    <a href="URL1">All in or Fold (AoF) - Position</a><br>
    <a href="URL1">All in or Fold - Download Hand Histories</a><br>
    <a href="URL1">All-in EV</a><br>
    <a href="URL1">All-in or Fold (AoF)</a><br>
    <a href="URL1">All-in or Fold (AoF) - EV Graph</a><br>
    <a href="URL1">All-in or Fold (AoF) - Luck</a><br>
    <a href="URL1">All-in or Fold (AoF) - Opponents</a><br>
    <a href="URL1">All-in or Fold (AoF) Strongest/Weakest positions</a><br>
    <a href="URL1">All-in or Fold - What does All-in percentage mean?</a><br>
    <a href="URL1">Are PokerCraft statistics displayed without rake?</a><br>
    <a href="URL1">Are payments viewable through PokerCraft?</a><br>
    <a href="URL1">Battle Royale</a><br>
    <a href="URL1">Battle Royale - Downloading Game Summaries</a><br>
    <a href="URL1">Battle Royale - Downloading Hand Histories</a><br>
    <a href="URL1">Battle Royale - Final Average finish</a><br>
    <a href="URL1">Battle Royale - Game History</a><br>
    <a href="URL1">Battle Royale - I have played a recent Battle Royale and I want to find a specific hand</a><br>
    <a href="URL1">Battle Royale - Total Games</a><br>
    <a href="URL1">Battle Royale - Total Kills</a><br>
    <a href="URL1">Can I access PokerCraft if I'm not logged into GGPoker?</a><br>
    <a href="URL1">Can I export hand histories from PokerCraft?</a><br>
    <a href="URL1">Can I make notes on players in PokerCraft?</a><br>
    <a href="URL1">Can I request Hand Histories that are not available in Pokercraft?</a><br>
    <a href="URL1">Can I reset my history?</a><br>
    <a href="URL1">Can I reset or delete my PokerCraft history?</a><br>
    <a href="URL1">Can I search by hand winner?</a><br>
    <a href="URL1">Can I search for players within PokerCraft?</a><br>
    <a href="URL1">Can I search game histories by Blind level in PokerCraft for PLO5 or PLO6?</a><br>
    <a href="URL1">Can I search game histories by blind level in PokerCraft for Hold'em?</a><br>
    <a href="URL1">Can I search game histories by blind level in PokerCraft for PLO?</a><br>
    <a href="URL1">Can I search hands by hand value?</a><br>
    <a href="URL1">Can I search hands by hole cards?</a><br>
    <a href="URL1">Can I search hands quickly from my Hold'em sessions?</a><br>
    <a href="URL1">Can I search hands quickly from my Omaha (All Variants) sessions?</a><br>
    <a href="URL1">Can I search just Battle Royale games where I've finished ITM?</a><br>
    <a href="URL1">Can I search old tournaments from years ago?</a><br>
    <a href="URL1">Can I see my chat history in Pokercraft?</a><br>
    <a href="URL1">Can I share my results or data online?</a><br>
    <a href="URL1">Can I view all player notes at once?</a><br>
    <a href="URL1">Can I view someone else's PokerCraft?</a><br>
    <a href="URL1">Can my PokerCraft be viewed by another player?</a><br>
    <a href="URL1">Can other players view my PokerCraft notes?</a><br>
    <a href="URL1">Completed Tournaments</a><br>
    <a href="URL1">Do I need to be logged into GGPoker to view PokerCraft?</a><br>
    <a href="URL1">Does PokerCraft display rake?</a><br>
    <a href="URL1">Does the EV graph in Pokercraft include non-showdown hands?</a><br>
    <a href="URL1">Does the Hand history from PokerCraft show whether a player is sitting out?</a><br>
    <a href="URL1">Downloading Hand Histories</a><br>
    <a href="URL1">Hold'em</a><br>
    <a href="URL1">Hold'em - Best & Worst Hand</a><br>
    <a href="URL1">Hold'em - Download Hand Histories</a><br>
    <a href="URL1">Hold'em - Game History</a><br>
    <a href="URL1">Hold'em - Hole Card Matrix</a><br>
    <a href="URL1">Hold'em - How can I search a session?</a><br>
    <a href="URL1">Hold'em - Is there a limit on the number of Hold'em hands I can download on PokerCraft?</a><br>
    <a href="URL1">Hold'em - Luck</a><br>
    <a href="URL1">Hold'em - Opponents</a><br>
    <a href="URL1">Hold'em - Position</a><br>
    <a href="URL1">Hold'em - Strongest and Weakest position</a><br>
    <a href="URL1">Hold'em EV Graph</a><br>
    <a href="URL1">How can I access PokerCraft from the desktop application?</a><br>
    <a href="URL1">How can I access PokerCraft from the mobile application?</a><br>
    <a href="URL1">How can I check the hand histories of the hands I have played on Mobile?</a><br>
    <a href="URL1">Luck Factors - how are they determined?</a><br>
    <a href="URL1">My Tournaments - Average Buy-in</a><br>
    <a href="URL1">My Tournaments - Can I search game histories by blind level in PokerCraft for My Tournaments</a><br>
    <a href="URL1">My Tournaments - Chip Graph</a><br>
    <a href="URL1">My Tournaments - Download Game Summaries</a><br>
    <a href="URL1">My Tournaments - Download Hand Histories</a><br>
    <a href="URL1">My Tournaments - Game History</a><br>
    <a href="URL1">My Tournaments - Highest Buy-in</a><br>
    <a href="URL1">My Tournaments - In the Money</a><br>
    <a href="URL1">My Tournaments - Largest Winning</a><br>
    <a href="URL1">My Tournaments - Lowest Buy-in</a><br>
    <a href="URL1">My Tournaments - Summary</a><br>
    <a href="URL1">My Tournaments - Total Winnings</a><br>
    <a href="URL1">My Tournaments - Tournament Info</a><br>
    <a href="URL1">Omaha (All Variants) - Download Hand Histories</a><br>
    <a href="URL1">Omaha (All Variants) - EV Graph</a><br>
    <a href="URL1">Omaha (All Variants) - Game History</a><br>
    <a href="URL1">Omaha (All Variants) - Strongest & Weakest Position</a><br>
    <a href="URL1">Omaha (All Variants) Summary</a><br>
    <a href="URL1">Omaha (all variants) - Position</a><br>
    <a href="URL1">Omaha (all variants)- How can I search a session?</a><br>
    <a href="URL1">Omaha - Is there a limit on the number of Omaha hands I can download on PokerCraft?</a><br>
    <a href="URL1">Omaha - Luck</a><br>
    <a href="URL1">Omaha - Opponents</a><br>
    <a href="URL1">Omaha - Why can I not find a PLO5 or PLO6 tab in PokerCraft?</a><br>
    <a href="URL1">Player Stats & Notes</a><br>
    <a href="URL1">PokerCraft - Battle Royale - How can I search a session?</a><br>
    <a href="URL1">Rush & Cash - Downloading Hand Histories (Hold'em)</a><br>
    <a href="URL1">Rush & Cash - Downloading Hand Histories (Omaha)</a><br>
    <a href="URL1">Rush & Cash - EV Graphs</a><br>
    <a href="URL1">Rush & Cash - Game History</a><br>
    <a href="URL1">Rush & Cash - Hole Cards</a><br>
    <a href="URL1">Rush & Cash - How can I search my RnC Hold'em history?</a><br>
    <a href="URL1">Rush & Cash - How can I search my RnC Omaha history?</a><br>
    <a href="URL1">Rush & Cash - Position</a><br>
    <a href="URL1">Rush & Cash Summary</a><br>
    <a href="URL1">Short Deck - Best & Worst hands</a><br>
    <a href="URL1">Short Deck - Download Hand Histories</a><br>
    <a href="URL1">Short Deck - EV Graph</a><br>
    <a href="URL1">Short Deck - Game History</a><br>
    <a href="URL1">Short Deck - Hole Card Matrix</a><br>
    <a href="URL1">Short Deck - How can I search a session?</a><br>
    <a href="URL1">Short Deck - Luck</a><br>
    <a href="URL1">Short Deck - Opponent data</a><br>
    <a href="URL1">Short Deck - Position</a><br>
    <a href="URL1">Short Deck - Strongest & Weakest Position</a><br>
    <a href="URL1">Short Deck Summary</a><br>
    <a href="URL1">Spin & Gold - Download Game Summaries</a><br>
    <a href="URL1">Spin & Gold - Downloading Hand Histories</a><br>
    <a href="URL1">Spin & Gold - Game History</a><br>
    <a href="URL1">Spin & Gold - How can I find a game I've played?</a><br>
    <a href="URL1">Spin & Gold - I am selecting multiple Spin & Gold games to review but I get an error? Why?</a><br>
    <a href="URL1">Spin & Gold - Is there anywhere I can check my Spin & Gold prize history?</a><br>
    <a href="URL1">Spin & Gold - Summary</a><br>
    <a href="URL1">Staking Profile - Average Markup</a><br>
    <a href="URL1">Staking Profile - Can I add pictures to my Staking Profile in PokerCraft?</a><br>
    <a href="URL1">Staking Profile - Can I delete comments from my Staking Profile on PokerCraft?</a><br>
    <a href="URL1">Staking Profile - Can I edit my Staking Profile in PokerCraft?</a><br>
    <a href="URL1">Staking Profile - Comment section/Staking Wall</a><br>
    <a href="URL1">Staking Profile - ITM %</a><br>
    <a href="URL1">Staking Profile - In the Money Distribution</a><br>
    <a href="URL1">Staking Profile - Largest Return</a><br>
    <a href="URL1">Staking Profile - Number of Profit</a><br>
    <a href="URL1">Staking Profile - ROI</a><br>
    <a href="URL1">Staking Profile - Staking History</a><br>
    <a href="URL1">Staking Profile - Total Action Sold</a><br>
    <a href="URL1">Staking Profile - Total Investment</a><br>
    <a href="URL1">Staking Profile - Total Profit</a><br>
    <a href="URL1">Staking Profile - Total Return</a><br>
    <a href="URL1">Staking Profile - Total Winnings</a><br>
    <a href="URL1">Staking Profile - Tournament History</a><br>
    <a href="URL1">Staking Profile Summary</a><br>
    <a href="URL1">Timeline - Fish Buffet</a><br>
    <a href="URL1">Timeline - GGCare & GGCheers</a><br>
    <a href="URL1">Timeline - Hand Highlights</a><br>
    <a href="URL1">Timeline - Jackpots</a><br>
    <a href="URL1">Timeline - Messages</a><br>
    <a href="URL1">Timeline - My Mission</a><br>
    <a href="URL1">Timeline - My Promotion</a><br>
    <a href="URL1">Timeline - Starred</a><br>
    <a href="URL1">Timeline - Tournaments</a><br>
    <a href="URL1">Timeline - Transaction History</a><br>
    <a href="URL1">Timeline - What is the PokerCraft Timeline?</a><br>
    <a href="URL1">Tournaments - I'm selecting multiple Tournament games to review but I get an error? Why?</a><br>
    <a href="URL1">Tournaments - Is there a limit on the number of My Tournament hands I can download on PokerCraft?</a><br>
    <a href="URL1">Understanding Universal Player Note</a><br>
    <a href="URL1">What is the difference between PokerCraft and a third party tracking software?</a><br>
    <a href="URL1">What other languages are available in Pokercraft?</a><br>
    <a href="URL1">What time zone does PokerCraft use?</a><br>
    <a href="URL1">When do PokerCraft statistics update after play sessions?</a><br>
    <a href="URL1">Why are my total winnings different on Smart HUD, Staking Profile and PokerCraft?</a><br>
    <a href="URL1">Why does the number on the Pokercraft EV graph not match my actual results?</a><br>
    <a href="URL1">Will PokerCraft log disconnections?</a><br>
    <a href="URL1">Will the notes and labels I make on PokerCraft be visible at the tables?</a><br>
    `,

    gameIntegrity: `
    <a href="URL1">Can I use HUD/tracking software on another site while GGPoker tables are active?</a><br>
    <a href="URL1">Can I use a poker tracker/Hand 2 Note and/or any HUD?</a><br>
    <a href="URL1">Can two or more people play on GGPoker from the same house/IP?</a><br>
    <a href="URL1">How can I report to security a matter requiring investigation?</a><br>
    <a href="URL1">I am concerned about GGPoker's RNG, is it verified by an entity?</a><br>
    <a href="URL1">I feel like I am losing too many hands when I have a strong hand. How do I know the game is not fixed?</a><br>
    `,

    otherGameRelatedQueries: `
    <a href="URL1">Final Table Betting - When can I bet on a Final Table?</a><br>
    <a href="URL1">Play Money</a><br>
    <a href="URL1">Refunding mis-clicks</a><br>
    <a href="URL1">Straddle - What is a Straddle?</a><br>
    <a href="URL1">Table Arrangement - If I have fewer tables open than my Custom Table Layout is for, can I still use it to position these tables?</a><br>
    <a href="URL1">Understanding The Showdown</a><br>
    `,

    howToDeposit: `
    <a href="URL1">How Can I Withdraw via Banco do Brasil/Bradesco/Caixa/Other Brazil Local Banks?</a><br>
    <a href="URL2">How can I deposit via Banco do Brasil/Bradesco/Caixa/other Brazil local banks</a><br>
    <a href="URL3">How can I deposit via Boleto?</a><br>
    <a href="URL4">How to Deposit Using PaySafeCard</a><br>
    <a href="URL5">How to Deposit Using Tether USDT (ERC20)</a><br>
    <a href="URL6">How to Deposit Using Trustly</a><br>
    <a href="URL7">How to Deposit Using USDC (BEP20)</a><br>
    <a href="URL8">How to Deposit funds</a><br>
    <a href="URL9">How to Deposit using Interac</a><br>
    <a href="URL10">How to Deposit using MuchBetter</a><br>
    <a href="URL11">How to Deposit using Neteller</a><br>
    <a href="URL12">How to Deposit using PayPal</a><br>
    <a href="URL13">How to Deposit using Pix</a><br>
    <a href="URL14">How to Deposit using Skrill</a><br>
    <a href="URL15">How to Deposit using Volt Wire Transfer</a><br>
    <a href="URL16">How to Deposit using ecoPayz</a><br>
    <a href="URL17">How to Place a Deposit</a><br>
    <a href="URL18">How to deposit using MiFinity e-wallet?</a><br>
    <a href="URL19">How to deposit using Pay4Fun e-Wallet</a>
    `,

    otherDepositQueries: `
    <a href="URL20">AstroPay Document ID - What does this mean?</a><br>
    <a href="URL21">Available Payment Methods</a><br>
    <a href="URL22">BTC amount Received seems Wrong</a><br>
    <a href="URL23">Can I Use a Prepaid Credit Card Gift Card?</a><br>
    <a href="URL24">Can I deposit in Local Currency?</a><br>
    <a href="URL25">Can I deposit in one Cryptocurrency and withdraw in another?</a><br>
    <a href="URL26">Can I deposit or receive withdrawals on my Astropay Card?</a><br>
    <a href="URL27">Can I use someone else's card to deposit funds?</a><br>
    <a href="URL28">Cancellation of Deposit</a><br>
    <a href="URL29">Credit Card Transaction and Posting Date Explained</a><br>
    <a href="URL30">CryptoCurrency Transaction Errors</a><br>
    <a href="URL31">Deposit Failure with EcoPayz?</a><br>
    <a href="URL32">Deposit via Card suddenly not working</a><br>
    <a href="URL33">Deposits - Processing Time</a><br>
    <a href="URL34">Deposits via Vanilla (Pre-paid) Cards</a><br>
    <a href="URL35">Does my card work?</a><br>
    <a href="URL36">Duplicate Card Transactions</a><br>
    <a href="URL37">Fees and Limits</a><br>
    <a href="URL38">GWErrorCode: -1100</a><br>
    <a href="URL39">How do I update my Credit Card Details?</a><br>
    <a href="URL40">How long does it take for Interac transfers?</a><br>
    <a href="URL41">How long does it take for the Interac refund?</a><br>
    <a href="URL42">How long does it take to see a deposit made with debit/credit card on my account?</a><br>
    <a href="URL43">How to View Reasons for Failed Deposit Transactions</a><br>
    <a href="URL44">I cannot see any deposit or withdrawal options in my cashier. Why?</a><br>
    <a href="URL45">Interac is not loading, what can I do?</a><br>
    <a href="URL46">Locating the Interac Reference Number</a><br>
    <a href="URL47">LuxonPay - Exchange Currencies</a><br>
    <a href="URL48">Missing deposit</a><br>
    <a href="URL49">MuchBetter Country Code Requirements</a><br>
    <a href="URL50">My Card deposit was declined, why is this?</a><br>
    <a href="URL51">My Credit/Debit Card was Charged but I Can’t See Money on my Account?</a><br>
    <a href="URL52">My Deposit was Unsuccessful Due to “Do Not Honor” Error?</a><br>
    <a href="URL53">My deposit via debit/credit card was unsuccessful, why?</a><br>
    <a href="URL54">My deposit was unsuccessful due to 3D Authentication error (Card)</a><br>
    <a href="URL55">Neteller (Payment Handle) error</a><br>
    <a href="URL56">Neteller Verification Code</a><br>
    <a href="URL57">Payment Service & (not credited) Transaction Confirmation</a><br>
    <a href="URL58">Skrill/Neteller: Insufficient Funds</a><br>
    <a href="URL59">Transaction Not Permitted to CardHolder</a><br>
    <a href="URL60">Using Neteller to fund your GGPoker account</a><br>
    <a href="URL61">Using Skrill to fund your GGPoker account</a><br>
    <a href="URL62">What Cryptocurrencies does GGPoker accept?</a><br>
    <a href="URL63">What are the Available Payment Options in my Country?</a><br>
    <a href="URL64">What are the exchange rates when depositing?</a><br>
    <a href="URL65">What are the payment methods available in my country?</a><br>
    <a href="URL66">Why Haven’t I Received my Deposit Yet?</a><br>
    <a href="URL67">Why The Exchange Rate You See Is Different To Google</a><br>
    <a href="URL68">Why did my Deposit Fail to Process?</a><br>
    <a href="URL69">Why was I charged a fee on deposit?</a><br>
    <a href="URL70">Why was my Interac deposit declined?</a>
    `,

    howToWithdraw: `
    <a href="URL1">How can I withdraw via local Mexican bank?</a><br>
    <a href="URL2">How to Request a Withdrawal</a><br>
    <a href="URL3">How to Withdraw Money Using PayPal?</a><br>
    <a href="URL4">How to Withdraw Using Bitcoin</a><br>
    <a href="URL5">How to Withdraw Using Trustly</a><br>
    <a href="URL6">How to Withdraw Using USDC (BEP20)</a><br>
    <a href="URL7">How to withdraw via Interac</a>
    `,

    otherWithdrawalQueries: `
    <a href="URL8">Are My Online Transactions Secure?</a><br>
    <a href="URL9">Available Payment Methods</a><br>
    <a href="URL10">Balance Withdrawal Requirement</a><br>
    <a href="URL11">CFT (Credit Funds Transfer) Enabled Card</a><br>
    <a href="URL12">Can I deposit in one Cryptocurrency and withdraw in another?</a><br>
    <a href="URL13">Can I deposit or receive withdrawals on my Astropay Card?</a><br>
    <a href="URL14">Can I process multiple withdrawals simultaneously?</a><br>
    <a href="URL15">Credit Card Transaction and Posting Date Explained</a><br>
    <a href="URL16">Fees and Limits</a><br>
    <a href="URL17">How Long Will My Withdrawal Take?</a><br>
    <a href="URL18">How long does it take for Interac transfers?</a><br>
    <a href="URL19">How many withdrawal requests can I have pending at once?</a><br>
    <a href="URL20">I cannot see any deposit or withdrawal options in my cashier. Why?</a><br>
    <a href="URL21">Interac is not loading, what can I do?</a><br>
    <a href="URL22">My withdrawal is pending - what does this mean?</a><br>
    <a href="URL23">My withdrawal states TBD - what does this mean?</a><br>
    <a href="URL24">Payment Service & (not credited) Transaction Confirmation</a><br>
    <a href="URL25">Tax Information (Withdrawals)</a><br>
    <a href="URL26">What Cryptocurrencies does GGPoker accept?</a><br>
    <a href="URL27">What are the Available Payment Options in my Country?</a><br>
    <a href="URL28">Where to Find the Reason for Rejected Withdrawal</a><br>
    <a href="URL29">Why Haven’t I Received my Withdrawal Yet?</a><br>
    <a href="URL30">Why Is My Withdrawal Failing?</a><br>
    <a href="URL31">Why The Exchange Rate You See Is Different To Google</a><br>
    <a href="URL32">Why did my Withdrawal Fail?</a><br>
    <a href="URL33">Why was my Withdrawal Rejected?</a><br>
    <a href="URL34">Withdrawal Processing Time</a><br>
    <a href="URL35">Withdrawals via Paysafecard</a><br>
    <a href="URL36">Withdrawing after a player to player transfer</a><br>
    <a href="URL37">Withdrawing without verifying</a>
    `,

    transactionHistory: `
    <a href="URL1">How do I Check my Deposit and Withdrawal Transaction History?</a><br>
    <a href="URL2">Payment History (Deposits/Withdrawals, etc.)</a>
    `,

    transfersQueries: `
    <a href="URL3">Can I withdraw transferred (P2P) Funds?</a><br>
    <a href="URL4">Player to Player transfers (Cash)</a><br>
    <a href="URL5">Transferring C$</a><br>
    <a href="URL6">Transferring T$</a><br>
    <a href="URL7">Withdrawing after a player to player transfer</a>
    `,

    tCurrency: `
    <a href="URL8">Tournament Dollars (T$) - Summary</a><br>
    <a href="URL9">Transferring T$</a>
    `,

    cCurrency: `
    <a href="URL10">C$ - Cash Game Dollars FAQ</a><br>
    <a href="URL11">Cash Dollars (C$) - Summary</a><br>
    <a href="URL12">Games in different currencies</a><br>
    <a href="URL13">Transferring C$</a>
    `,

    tickets: `
    <a href="URL14">Cash Game Tickets - Frequently Asked Questions</a><br>
    <a href="URL15">How to check your tickets</a><br>
    <a href="URL16">I have a ticket and would like to convert it to cash. Is this possible?</a><br>
    <a href="URL17">I have a ticket that states it is irredeemable - why is this?</a><br>
    <a href="URL18">Ticket Redeem Feature</a><br>
    <a href="URL19">Tickets - Summary</a><br>
    <a href="URL20">Transferring tournament tickets</a><br>
    <a href="URL21">Where can I view my tickets expiration dates</a>
    `,

    otherCashierQueries: `
    <a href="URL22">Are My Online Transactions Secure?</a><br>
    <a href="URL23">My Cashier page is not loading</a><br>
    <a href="URL24">Will I have to send Credit Card details through email?</a>
    `,

    connectionIssues: `
    <a href="URL25">App Crashes/Freezing - Frequently Asked Questions</a><br>
    <a href="URL26">Can I check the status of my network connection from within the poker client?</a><br>
    <a href="URL27">Connection Issues and DNS Settings</a><br>
    <a href="URL28">GGPoker is not loading correctly</a><br>
    <a href="URL29">How to know if my connection is bad</a><br>
    <a href="URL30">My Rush & Cash table/s are not closing. How can I fix this?</a><br>
    <a href="URL31">Service issues - July 1st 2024</a><br>
    <a href="URL32">Table problems resulting from app slowness</a><br>
    <a href="URL33">What do I do when I have reason to believe that the chips on the table were not returned to my account upon leaving the table?</a><br>
    <a href="URL34">What happens when I disconnect while involved in a hand?</a><br>
    <a href="URL35">What happens when the software becomes unresponsive and I am not able to enter the tournament?</a><br>
    <a href="URL36">What is BRAND INTERNAL ERROR?</a><br>
    <a href="URL37">Why are some of my tables not working while others are running properly?</a>
    `,

    downloadInstallation: `
    <a href="URL1">Can I use Android Emulator on GGPoker?</a><br>
    <a href="URL2">Can I use GGPoker if I am running Windows 7</a><br>
    <a href="URL3">Collision with anti-virus program</a><br>
    <a href="URL4">How to Download and Install the Poker Client for Mac</a><br>
    <a href="URL5">How to Download and Install the Poker Client for Windows</a><br>
    <a href="URL6">How to Install the Mobile app onto my Android device</a>
    `,

    windowsClient: `
    <a href="URL7">AMD Radeon graphic card driver issue [Black Screen]</a><br>
    <a href="URL8">After updating the software, my anti-virus program states that it has found a Trojan. How can I resolve this?</a><br>
    <a href="URL9">Can I continue playing my game if I switch between mobile and desktop apps? How do I switch from mobile to computer and vice versa?</a><br>
    <a href="URL10">Can I use GGPoker if I am running Windows 7</a><br>
    <a href="URL11">Collision with anti-virus program</a><br>
    <a href="URL12">Does GGPoker support 'virtual machine'?</a><br>
    <a href="URL13">Fatal Error - Fail to Rename DST</a><br>
    <a href="URL14">Flushing DNS [Windows 10]</a><br>
    <a href="URL15">GGPoker device specifications, requirements and play suggestions (Windows)</a><br>
    <a href="URL16">How to Clear temporary files on Windows</a><br>
    <a href="URL17">How to Download and Install the Poker Client for Windows</a><br>
    <a href="URL18">How to Record your screen on your Windows PC or Mac</a><br>
    <a href="URL19">How to clear Browser Cache on Windows</a><br>
    <a href="URL20">My AntiVirus is blocking GGPoker</a><br>
    <a href="URL21">Performing a clean installation (Windows)</a><br>
    <a href="URL22">Taking a screenshot on a PC (Desktop)</a><br>
    <a href="URL23">The tournament list is not displaying in the relevant colours. Can this be fixed?</a><br>
    <a href="URL24">What is Error Code: 2503?</a><br>
    <a href="URL25">What are the minimum system requirements / specifications for GGPoker?</a>
    `,

    macOSClient: `
    <a href="URL26">Collision with anti-virus program</a><br>
    <a href="URL27">Does GGPoker support 'virtual machine'?</a><br>
    <a href="URL28">GGPoker device specifications, requirements and play suggestions (Mac)</a><br>
    <a href="URL29">How to Download and Install the Poker Client for Mac</a><br>
    <a href="URL30">How to Record your screen on your Windows PC or Mac</a><br>
    <a href="URL31">How to clear Browser Cache on Mac</a><br>
    <a href="URL32">My AntiVirus is blocking GGPoker</a><br>
    <a href="URL33">Taking a screenshot on Apple device</a><br>
    <a href="URL34">Taking a screenshot on a PC (Desktop)</a>
    `,

    androidApp: `
    <a href="URL35">Can I continue playing my game if I switch between mobile and desktop apps? How do I switch from mobile to computer and vice versa?</a><br>
    <a href="URL36">Can I turn off Haptic and Push notifications on mobile?</a><br>
    <a href="URL37">Can I use Android Emulator on GGPoker?</a><br>
    <a href="URL38">Does GGPoker offer a landscape mode</a><br>
    <a href="URL39">GGPoker device specifications, requirements and play suggestions (Android)</a><br>
    <a href="URL40">How to Install the Mobile app onto my Android device</a><br>
    <a href="URL41">My AntiVirus is blocking GGPoker</a><br>
    <a href="URL42">Outdated Android App</a><br>
    <a href="URL43">Taking a screenshot on an Android Device</a><br>
    <a href="URL44">What are the minimum system requirements / specifications for GGPoker?</a><br>
    <a href="URL45">What is the connection stability like while using your mobile app?</a>
    `,

    iosApp: `
    <a href="URL46">Can I continue playing my game if I switch between mobile and desktop apps? How do I switch from mobile to computer and vice versa?</a><br>
    <a href="URL47">Can I turn off Haptic and Push notifications on mobile?</a><br>
    <a href="URL48">Deleting Your Account Via The iOS App</a><br>
    <a href="URL49">Does GGPoker offer a landscape mode</a><br>
    <a href="URL50">GGPoker device specifications, requirements and play suggestions (IOS)</a><br>
    <a href="URL51">My AntiVirus is blocking GGPoker</a><br>
    <a href="URL52">Taking a screenshot on Apple device</a><br>
    <a href="URL53">What are the minimum system requirements / specifications for GGPoker?</a><br>
    <a href="URL54">What is the connection stability like while using your mobile app?</a>
    `,

    gameCancellationRefundPolicy: `
    <a href="URL1">My internet connection cut-off during a tournament and I could not get it working again. Will you reimburse my tournament buy-in?</a><br>
    <a href="URL2">Understanding Game Cancellation, Interruption and Refund Policy</a>
    `,

    otherTechnicalQueries: `
    <a href="URL3">After updating the software, my anti-virus program states that it has found a Trojan. How can I resolve this?</a><br>
    <a href="URL4">Can I check the status of my network connection from within the poker client?</a><br>
    <a href="URL5">Can I continue playing my game if I switch between mobile and desktop apps? How do I switch from mobile to computer and vice versa?</a><br>
    <a href="URL6">Can I run the GGPoker app on Chromebook?</a><br>
    <a href="URL7">Can I use Android Emulator on GGPoker?</a><br>
    <a href="URL8">Can I use GGPoker if I am running Windows 7</a><br>
    <a href="URL9">Collision with anti-virus program</a><br>
    <a href="URL10">How to check my GGPoker app version</a><br>
    <a href="URL11">How to fix pixelated client display</a><br>
    <a href="URL12">How to solve ERROR_LOGIN_FAILED</a><br>
    <a href="URL13">I see an error Failed to Patch. How can I resolve this?</a><br>
    <a href="URL14">I tried updating the app but it keeps saying "Failed to update". What should I do?</a><br>
    <a href="URL15">Table tiling issues</a><br>
    <a href="URL16">Updating App keeps failing</a><br>
    <a href="URL17">What do I do when my player notes are missing?</a><br>
    <a href="URL18">What does a weak network status test result indicate?</a><br>
    <a href="URL19">Where can I know about scheduled maintenance in advance?</a><br>
    <a href="URL20">Why is the audio only working with headphones?</a>
    `,

    fishBuffet: `
    <a href="URL21">Crab Level - Frequently Asked Questions</a><br>
    <a href="URL22">Fish Buffet - Can I switch from Fish Buffet to Platinum Fish Buffet?</a><br>
    <a href="URL23">Fish Buffet - Can I view my Fish Buffet History anywhere?</a><br>
    <a href="URL24">Fish Buffet - Crab - Do I have to clear each tier individually?</a><br>
    <a href="URL25">Fish Buffet - Crab - Do I receive a wheel spin for completing each tier or just when I complete Gold Crab?</a><br>
    <a href="URL26">Fish Buffet - Crab - How many points do I have to earn to complete a tier?</a><br>
    <a href="URL27">Fish Buffet - Crab - How much time do I have to earn the 12,000 Fish Points to move up?</a><br>
    <a href="URL28">Fish Buffet - Crab - I am currently a "Crab" on the Fish Buffet - If I switch to Platinum Ranks - what level will I become?</a><br>
    <a href="URL29">Fish Buffet - Crab - I did not make the required points to move up - what happens?</a><br>
    <a href="URL30">Fish Buffet - Crab - I've completed Gold Crab and have been rewarded my cashback - what happens now?</a><br>
    <a href="URL31">Fish Buffet - Crab - What are the rewards available on the Crab wheel?</a><br>
    <a href="URL32">Fish Buffet - Do I get Fish Points (FPs) if a tournament overlays?</a><br>
    <a href="URL33">Fish Buffet - Do I get Fish Points for buying another player's action?</a><br>
    <a href="URL34">Fish Buffet - Do I have to opt-in for the Fish Buffet?</a><br>
    <a href="URL35">Fish Buffet - Does each level only have one tier?</a><br>
    <a href="URL36">Fish Buffet - Does selling my action result in amendments to the rate of Fish Point assignment?</a><br>
    <a href="URL37">Fish Buffet - Fish Buffet levels</a><br>
    <a href="URL38">Fish Buffet - Frequently Asked Questions</a><br>
    <a href="URL39">Fish Buffet - Goldfish - How many points do I need to earn to get promoted to Bronze Shrimp?</a><br>
    <a href="URL40">Fish Buffet - Goldfish - How much time do I have to earn the 1,500 Fish Points to move up to Bronze Shrimp?</a><br>
    <a href="URL41">Fish Buffet - Goldfish - I did not make the required points to move up - what happens?</a><br>
    <a href="URL42">Fish Buffet - Goldfish - I've completed it and have been rewarded my cashback - what happens now?</a><br>
    <a href="URL43">Fish Buffet - Goldfish - What are the rewards available on the Goldfish wheel?</a><br>
    <a href="URL44">Fish Buffet - How are Fish Points generated?</a><br>
    <a href="URL45">Fish Buffet - How can I check my current Fish Buffet status?</a><br>
    <a href="URL46">Fish Buffet - How do I move up the levels of the Fish Buffet?</a><br>
    <a href="URL47">Fish Buffet - How do I switch from Fish Buffet to Platinum Fish Buffet?</a><br>
    <a href="URL48">Fish Buffet - How do I switch from Platinum Fish Buffet to Fish Buffet?</a><br>
    <a href="URL49">Fish Buffet - How does the reward system work on the regular Fish Buffet?</a><br>
    <a href="URL50">Fish Buffet - How many Fish Points do I receive in casino games?</a><br>
    <a href="URL51">Fish Buffet - I accidentally switched from Platinum Fish Buffet to Fish Buffet</a><br>
    <a href="URL52">Fish Buffet - I am not going to reach my Fish Point target for the next level/tier - can my rewards be paid out earlier?</a><br>
    <a href="URL53">Fish Buffet - I did not make the required points to reach the next level/tier - what happens now?</a><br>
    <a href="URL54">Fish Buffet - I'm playing Rush & Cash and my Fish Points are not increasing - why is this?</a><br>
    <a href="URL55">Fish Buffet - I've completed a Fish Buffet level/tier - what happens next?</a><br>
    <a href="URL56">Fish Buffet - I've just exited a tournament - but my Fish Points did not update - why is this?</a><br>
    <a href="URL57">Fish Buffet - I've moved from Fish Buffet to Platinum - I have not received my rewards - why is this?</a><br>
    <a href="URL58">Fish Buffet - I've received a message that I have a Fish Buffet spin but I did not click it - what happens now?</a><br>
    <a href="URL59">Fish Buffet - Is the Fish Buffet promotion available to all players?</a><br>
    <a href="URL60">Fish Buffet - Octopus - How much time do I have to earn the 60,000 Fish Points to move up?</a><br>
    <a href="URL61">Fish Buffet - Octopus - Do I have to clear each tier individually?</a><br>
    <a href="URL62">Fish Buffet - Octopus - Do I receive a wheel spin for completing each tier or just when I complete Gold Octopus?</a><br>
    <a href="URL63">Fish Buffet - Octopus - How many points do I have to earn to complete a tier?</a><br>
    <a href="URL64">Fish Buffet - Octopus - I am currently an "Octopus" on the Fish Buffet - If I switch to Platinum Ranks - what level will I become?</a><br>
    <a href="URL65">Fish Buffet - Octopus - I did not make the required points to move up - what happens?</a><br>
    <a href="URL66">Fish Buffet - Octopus - I've completed Gold Octopus and have been rewarded my cashback - what happens now?</a><br>
    <a href="URL67">Fish Buffet - Octopus - What are the rewards available on the Octopus wheel?</a><br>
    <a href="URL68">Fish Buffet - Plankton - How many points do I need to earn to get promoted to Goldfish?</a><br>
    <a href="URL69">Fish Buffet - Plankton - How much time do I have to earn the 750 Fish Points to move up to Goldfish?</a><br>
    <a href="URL70">Fish Buffet - Plankton - I did not make the required points to move up - what happens?</a><br>
    <a href="URL71">Fish Buffet - Plankton - I've completed it and have been rewarded my cashback - what happens now?</a><br>
    <a href="URL72">Fish Buffet - Plankton - What are the rewards available on the Plankton wheel?</a><br>
    <a href="URL73">Fish Buffet - Shrimp - Do I have to clear each tier individually?</a><br>
    <a href="URL74">Fish Buffet - Shrimp - Do I receive a wheel spin for completing each tier or just when I complete Gold Shrimp?</a><br>
    <a href="URL75">Fish Buffet - Shrimp - How many points do I have to earn to complete a tier?</a><br>
    <a href="URL76">Fish Buffet - Shrimp - How much time do I have to earn the 6,000 Fish Points to move up?</a><br>
    <a href="URL77">Fish Buffet - Shrimp - I am currently a "Shrimp" on the Fish Buffet - If I switch to Platinum Ranks - what level will I become?</a><br>
    <a href="URL78">Fish Buffet - Shrimp - I did not make the required points to move up - what happens?</a><br>
    <a href="URL79">Fish Buffet - Shrimp - I've completed Gold Shrimp and have been rewarded my cashback - what happens now?</a><br>
    <a href="URL80">Fish Buffet - Shrimp - What are the rewards available on the Shrimp wheel?</a><br>
    <a href="URL81">Fish Buffet - Summary</a><br>
    <a href="URL82">Fish Buffet - Whale - Do I have to clear each tier and sub-tier individually?</a><br>
    <a href="URL83">Fish Buffet - Whale - Do I receive a wheel spin for completing each tier or just when I complete Gold Whale 1?</a><br>
    <a href="URL84">Fish Buffet - Whale - How many points do I have to earn to complete a sub-tier?</a><br>
    <a href="URL85">Fish Buffet - Whale - How much time do I have to earn the 120,000 Fish Points to move up?</a><br>
    <a href="URL86">Fish Buffet - Whale - I am currently a "Whale" on the Fish Buffet - If I switch to Platinum Ranks - what level will I become?</a><br>
    <a href="URL87">Fish Buffet - Whale - I did not make the required points to move up - what happens?</a><br>
    <a href="URL88">Fish Buffet - Whale - I've completed Gold Whale 1 and have been moved to Platinum Shark - what happened to my wheel spin?</a><br>
    <a href="URL89">Fish Buffet - Whale - What are the rewards available on the Whale wheel?</a><br>
    <a href="URL90">Fish Buffet - What does average cashback mean?</a><br>
    <a href="URL91">Fish Buffet - What happens if I do not spin the Fish Buffet wheel - does it expire?</a><br>
    <a href="URL92">Fish Buffet - What happens if I switch from Fish Buffet to Platinum Fish Buffet?</a><br>
    <a href="URL93">Fish Buffet - What happens if I switch from Platinum Fish to the Fish Buffet?</a><br>
    <a href="URL94">Fish Buffet - What is the Fish Buffet?</a><br>
    <a href="URL95">Fish Buffet - What time zone is my Fish Buffet displayed in?</a><br>
    <a href="URL96">Fish Buffet - What time zone is my Platinum Fish Buffet displayed in?</a><br>
    <a href="URL97">GGPlatinum - Frequently Asked Questions</a><br>
    <a href="URL98">GGPlatinum - How can I become GGPlatinum?</a><br>
    <a href="URL99">GGPlatinum - How long does GGPlatinum last?</a><br>
    <a href="URL100">Goldfish Level - Frequently Asked Questions</a><br>
    <a href="URL101">Is it possible to collect my Fish Buffet rewards early upon request?</a><br>
    <a href="URL102">My tournament was cancelled due to a tech issue, do I still get Fish Buffet points?</a><br>
    <a href="URL103">Octopus Level - Frequently Asked Questions</a><br>
    <a href="URL104">Plankton Level - Frequently Asked Questions</a><br>
    <a href="URL105">Platinum - Can I climb Platinum Ranks?</a><br>
    <a href="URL106">Platinum - Can I save my Platinum Rewards or must they be collected?</a><br>
    <a href="URL107">Platinum - Can I switch from a Platinum Rank to Fish Buffet?</a><br>
    <a href="URL108">Platinum - Can I view my Platinum Fish Buffet History anywhere?</a><br>
    <a href="URL109">Platinum - How can I become a Platinum Fish?</a><br>
    <a href="URL110">Platinum - How can I become a Platinum Octopus?</a><br>
    <a href="URL111">Platinum - How does the reward system work on the Platinum Fish Buffet?</a><br>
    <a href="URL112">Platinum - What are the Platinum Ranks?</a><br>
    <a href="URL113">Platinum - What happens to my saved Platinum Rewards if I get promoted or demoted?</a><br>
    <a href="URL114">Platinum - What is the Platinum Fish Buffet?</a><br>
    <a href="URL115">Platinum - When are the Platinum Rewards paid?</a><br>
    <a href="URL116">Platinum Fish - Frequently Asked Questions</a><br>
    <a href="URL117">Platinum Fish Buffet - Frequently Asked Questions</a><br>
    <a href="URL118">Platinum Fish Buffet - GGPlatinum - How much cashback do I receive at GGPlatinum?</a><br>
    <a href="URL119">Platinum Fish Buffet - GGPlatinum - What happens if I don't earn the 5,000,000 FPs to retain GGPlatinum?</a><br>
    <a href="URL120">Platinum Fish Buffet - Platinum Fish - How long does Platinum Fish status last for?</a><br>
    <a href="URL121">Platinum Fish Buffet - Platinum Fish - How much cashback do I receive at Platinum Fish?</a><br>
    <a href="URL122">Platinum Fish Buffet - Platinum Fish - I am currently Platinum Fish - I want to become Platinum Octopus - how can I do this?</a><br>
    <a href="URL123">Platinum Fish Buffet - Platinum Fish - I've switched from Platinum Fish to the Fish Buffet but I did not receive any rewards - why is this?</a><br>
    <a href="URL124">Platinum Fish Buffet - Platinum Fish - I've switched from Platinum Fish to the Fish Buffet but my Fish Points have gone - why is this?</a><br>
    <a href="URL125">Platinum Fish Buffet - Platinum Octopus - How long does Platinum Octopus last?</a><br>
    <a href="URL126">Platinum Fish Buffet - Platinum Octopus - How much cashback do I receive at Platinum Octopus?</a><br>
    <a href="URL127">Platinum Fish Buffet - Platinum Octopus - I am currently Platinum Octopus - I want to become Platinum Whale - how can I do this?</a><br>
    <a href="URL128">Platinum Fish Buffet - Platinum Octopus - I've switched from Platinum Octopus to the Fish Buffet but I did not receive my rewards - why is this?</a><br>
    <a href="URL129">Platinum Fish Buffet - Platinum Octopus - I've switched from Platinum Octopus to the Fish Buffet but my Fish Points have gone - why is this?</a><br>
    <a href="URL130">Platinum Fish Buffet - Platinum Octopus - What happens if I switch from Platinum Octopus to the Fish Buffet?</a><br>
    <a href="URL131">Platinum Fish Buffet - Platinum Octopus - What happens when I reach the 750,000 FPs at Platinum Octopus?</a><br>
    <a href="URL132">Platinum Fish Buffet - Platinum Shark - Can I climb from Platinum Shark to GGPlatinum?</a><br>
    <a href="URL133">Platinum Fish Buffet - Platinum Shark - How can I become Platinum Shark?</a><br>
    <a href="URL134">Platinum Fish Buffet - Platinum Shark - How long does Platinum Shark last?</a><br>
    <a href="URL135">Platinum Fish Buffet - Platinum Shark - How much cashback do I receive at Platinum Shark?</a><br>
    <a href="URL136">Platinum Fish Buffet - Platinum Shark - I've earned the 3,000,000 FPs to retain Platinum Shark - what happens next?</a><br>
    <a href="URL137">Platinum Fish Buffet - Platinum Shark - What happens if I don't earn the 3,000,000 FPs to retain Platinum Shark?</a><br>
    <a href="URL138">Platinum Fish Buffet - Platinum Whale - Can I climb from Platinum Whale to Platinum Shark?</a><br>
    <a href="URL139">Platinum Fish Buffet - Platinum Whale - How can I become Platinum Whale?</a><br>
    <a href="URL140">Platinum Fish Buffet - Platinum Whale - How long does Platinum Whale last?</a><br>
    <a href="URL141">Platinum Fish Buffet - Platinum Whale - How much cashback do I receive at Platinum Whale?</a><br>
    <a href="URL142">Platinum Fish Buffet - Platinum Whale - I've earned the 1,500,000 FPs to retain Platinum Whale - what happens next?</a><br>
    <a href="URL143">Platinum Fish Buffet - Platinum Whale - What happens if I don't earn the 1,500,000 FPs to retain Platinum Whale?</a><br>
    <a href="URL144">Platinum Fish Buffet - Summary</a><br>
    <a href="URL145">Platinum Octopus - Frequently Asked Questions</a><br>
    <a href="URL146">Platinum Shark - Frequently Asked Questions</a><br>
    <a href="URL147">Platinum Whale - Frequently Asked Questions</a><br>
    <a href="URL148">Shrimp Level - Frequently Asked Questions</a><br>
    <a href="URL149">Whale Level - Frequently Asked Questions</a>
    `,

    honeymoonForNewcomers:`
    <a href="URL1">Honeymoon - Are there any tournament types that I cannot use to complete a mission?</a><br>
    <a href="URL2">Honeymoon - Can I opt-in whenever I want?</a><br>
    <a href="URL3">Honeymoon - Can I use any game to complete any mission?</a><br>
    <a href="URL4">Honeymoon - Do I have to participate?</a><br>
    <a href="URL5">Honeymoon - Do Speed Racer tournaments count towards finishing the Bounty Hunters tournament mission?</a><br>
    <a href="URL6">Honeymoon - Frequently Asked Questions</a><br>
    <a href="URL7">Honeymoon - How can I be sure I am using the right game type?</a><br>
    <a href="URL8">Honeymoon - How do I opt-in for the Honeymoon?</a><br>
    <a href="URL9">Honeymoon - How long are reward tickets valid?</a><br>
    <a href="URL10">Honeymoon - How long does the Honeymoon promotion last?</a><br>
    <a href="URL11">Honeymoon - How will I know when a mission has been completed?</a><br>
    <a href="URL12">Honeymoon - I am not able to play on a particular day, can I try that mission again tomorrow?</a><br>
    <a href="URL13">Honeymoon - I cannot find this opt-in bubble - why is this?</a><br>
    <a href="URL14">Honeymoon - I did not start my Honeymoon within the first 30 days, can it be manually reset?</a><br>
    <a href="URL15">Honeymoon - I opted in but I didn't get 24 hours to complete my first mission, why is this?</a><br>
    <a href="URL16">Honeymoon - I think I completed a mission but it's saying I failed, is there anywhere I can check?</a><br>
    <a href="URL17">Honeymoon - If I miss a day, does that mean I cannot continue with the promotion?</a><br>
    <a href="URL18">Honeymoon - If one of my reward tickets expires can I get a replacement?</a><br>
    <a href="URL19">Honeymoon - If the site goes down for maintenance, do I get extra time to complete my mission?</a><br>
    <a href="URL20">Honeymoon - Is the same Honeymoon mission given to all players, or randomized individually?</a><br>
    <a href="URL21">Honeymoon - It says on the webpage that missions will be 'easy' is this true?</a><br>
    <a href="URL22">Honeymoon - My Mission game type is 'Short Deck', what games can I play to complete this mission?</a><br>
    <a href="URL23">Honeymoon - My mission game type is 'All-In Or Fold' - Sit & Go What games can I play to complete this mission?</a><br>
    <a href="URL24">Honeymoon - My mission game type is 'AoF Holdem', what games can I play to complete this mission?</a><br>
    <a href="URL25">Honeymoon - My mission game type is 'AoF PLO', what games can I play to complete this mission?</a><br>
    <a href="URL26">Honeymoon - My mission game type is 'Flip & Go', what games can I play to complete this mission?</a><br>
    <a href="URL27">Honeymoon - My mission game type is 'Hold'em', what games can I play to complete this mission?</a><br>
    <a href="URL28">Honeymoon - My mission game type is 'Mystery Battle Royale', what games can I play to complete this mission?</a><br>
    <a href="URL29">Honeymoon - My mission game type is 'PLO' what games can I play to complete this mission?</a><br>
    <a href="URL30">Honeymoon - My mission game type is 'Rush & Cash', what games can I play to complete this mission?</a><br>
    <a href="URL31">Honeymoon - My mission game type is 'Spin & Gold', what games can I play to complete this mission?</a><br>
    <a href="URL32">Honeymoon - My mission game type is 'Tournament' what games can I play to complete this mission?</a><br>
    <a href="URL33">Honeymoon - My mission is to win at showdown with a specific hand - what games can I play to complete this mission?</a><br>
    <a href="URL34">Honeymoon - My mission today is to win a tournament, can I play in a satellite?</a><br>
    <a href="URL35">Honeymoon - Summary</a><br>
    <a href="URL36">Honeymoon - Terms and Conditions</a><br>
    <a href="URL37">Honeymoon - What are some sample Honeymoon missions?</a><br>
    <a href="URL38">Honeymoon - What are the rewards I can get for completing missions?</a><br>
    <a href="URL39">Honeymoon - What happens when I opt in?</a><br>
    <a href="URL40">Honeymoon - What is Honeymoon for Newcomers?</a><br>
    <a href="URL41">Honeymoon - When does a 'day' run from and to?</a><br>
    <a href="URL42">Honeymoon - When playing cash-based games to complete a mission, can I Run It Multiple Times?</a><br>
    <a href="URL43">Honeymoon - When playing in cash-based games to complete a mission, can I play at any blind level?</a><br>
    <a href="URL44">Honeymoon - When playing in cash-based games to complete a mission, do I have to use both hole cards?</a><br>
    <a href="URL45">Honeymoon - Will making a withdrawal end my Honeymoon promotion?</a><br>
    `,

    welcomeBonus:`
    <a href="URL1">Does GGPoker offer a Welcome Bonus to new players?</a><br>
    <a href="URL2">I selected one Welcome Bonus offer but I have changed my mind, can I change it?</a><br>
    <a href="URL3">Matched Bonus - Can I deposit multiple times to claim the full $600 Matched Bonus?</a><br>
    <a href="URL4">Matched Bonus - Frequently Asked Questions</a><br>
    <a href="URL5">Matched Bonus - How do I claim the Matched Bonus?</a><br>
    <a href="URL6">Matched Bonus - How much must I deposit to claim the Matched Bonus?</a><br>
    <a href="URL7">Matched Bonus - I have selected the Matched Bonus but I do not see any extra cash in my account, why is this?</a><br>
    <a href="URL8">Matched Bonus - I have selected the Matched Welcome Bonus - but do not see any extra cash on my account?</a><br>
    <a href="URL9">Matched Bonus - I've made a deposit but I forgot to select a Welcome Bonus, what can I do?</a><br>
    <a href="URL10">Matched Bonus - Is there a time limit on claiming my Matched Bonus?</a><br>
    <a href="URL11">Matched Bonus - Is there an expiry on my Matched Bonus?</a><br>
    <a href="URL12">Matched Bonus - Summary</a><br>
    <a href="URL13">Matched Bonus - What games count towards clearing the Matched Bonus?</a><br>
    <a href="URL14">Matched Bonus - What is the Matched Bonus Welcome Bonus?</a><br>
    <a href="URL15">Matched Bonus - Will a withdrawal invalidate my Matched Bonus?</a><br>
    <a href="URL16">Up to $100 in Rewards Bonus - Frequently Asked Questions</a><br>
    <a href="URL17">Up to $100 in Rewards Bonus - Summary</a><br>
    <a href="URL18">Welcome Bonus - I have selected the Matched Welcome Bonus - but do not see any extra cash on my account?</a><br>
    <a href="URL19">Welcome Bonus - Terms and Conditions</a><br>
    <a href="URL20">Welcome Bonus - Up to $100 in Rewards Bonus - How do I claim the Rewards Bonus?</a><br>
    <a href="URL21">Welcome Bonus - Up to $100 in Rewards Bonus - How much must I deposit to claim the Rewards Bonus?</a><br>
    <a href="URL22">Welcome Bonus - Up to $100 in Rewards Bonus - I have selected the Rewards Bonus but I do not see any tickets in my account, why is this?</a><br>
    <a href="URL23">Welcome Bonus - Up to $100 in Rewards Bonus - Is there a time limit on claiming my Rewards Bonus?</a><br>
    <a href="URL24">Welcome Bonus - Up to $100 in Rewards Bonus - What is the Up to $100 in Rewards Welcome Bonus?</a><br>
    `,
    jackpots:`
    <a href="URL25">All-in Fortune - Can I check my previous All-in Fortune wins?</a><br>
    <a href="URL26">All-in Fortune - Do I need to reach a showdown to be eligible for a prize in All-in Fortune?</a><br>
    <a href="URL27">All-in Fortune - How often does All-in Fortune payout?</a><br>
    <a href="URL28">All-in Fortune - In which currency are All-in Fortune winnings credited?</a><br>
    <a href="URL29">All-in Fortune - What prizes can I win?</a><br>
    <a href="URL30">All-in Fortune - Are there any requirements other than going All-in?</a><br>
    <a href="URL31">All-in Fortune - Frequently Asked Questions</a><br>
    <a href="URL32">All-in Fortune - How do I become eligible to win in All-in Fortune?</a><br>
    <a href="URL33">All-in Fortune - How is the All-in Fortune promotion funded?</a><br>
    <a href="URL34">All-in Fortune - I won! How do I receive my payment?</a><br>
    <a href="URL35">All-in Fortune - Summary</a><br>
    <a href="URL36">All-in Fortune - What Is All-in Fortune?</a><br>
    <a href="URL37">All-in Fortune - What happened to All-in or Fold Bingo?</a><br>
    <a href="URL38">All-in or Fold Jackpot - Are there different Jackpot funds for Hold'em and Omaha games?</a><br>
    <a href="URL39">All-in or Fold Jackpot - Can I opt out of this promotion and not pay the fees?</a><br>
    <a href="URL40">All-in or Fold Jackpot - Can I win the AoF Jackpot in an AoF Sit & Go?</a><br>
    <a href="URL41">All-in or Fold Jackpot - Frequently Asked Questions</a><br>
    <a href="URL42">All-in or Fold Jackpot - How is the All-in or Fold Jackpot fund accumulated?</a><br>
    <a href="URL43">All-in or Fold Jackpot - I made a straight flush playing All-in or Fold hold'em and didn't get an All-in or Fold Jackpot - Why?</a><br>
    <a href="URL44">All-in or Fold Jackpot - I won an All-in or Fold Jackpot. What happens now?</a><br>
    <a href="URL45">All-in or Fold Jackpot - If I get dealt a hand, go all in, and then get disconnected, would I be eligible to win the All-in or Fold Jackpot?</a><br>
    <a href="URL46">All-in or Fold Jackpot - In AoF Hold'em does a hand have to a showdown to win a Jackpot?</a><br>
    <a href="URL47">All-in or Fold Jackpot - In AoF Hold'em, What are the qualifying hands to win a jackpot?</a><br>
    <a href="URL48">All-in or Fold Jackpot - In AoF Omaha, What are the qualifying hands to win a jackpot?</a><br>
    <a href="URL49">All-in or Fold Jackpot - In AoF Omaha, does a hand have to go to a showdown to win a Jackpot?</a><br>
    <a href="URL50">All-in or Fold Jackpot - Is All-in or Fold Sit & Go eligible for Jackpot payouts?</a><br>
    <a href="URL51">All-in or Fold Jackpot - Is there any rake taken on All-in or Fold Jackpot contributions?</a><br>
    <a href="URL52">All-in or Fold Jackpot - Summary</a><br>
    <a href="URL53">All-in or Fold Jackpot - What are the terms and conditions for the All-in or Fold Jackpot?</a><br>
    <a href="URL54">All-in or Fold Jackpot - What is the All-in or Fold Jackpot?</a><br>
    <a href="URL55">Bad Beat Jackpot - In Omaha5 (PLO5) Cash Games, What are the qualifying criteria for a Bad Beat Jackpot to be awarded?</a><br>
    <a href="URL56">Bad Beat Jackpot - A Bad Beat Jackpot was won at the table I was on, but I was sitting out. What happens?</a><br>
    <a href="URL57">Bad Beat Jackpot - Can I opt out of the Bad Beat Jackpot and not contribute to the Bad Beat Jackpot fund?</a><br>
    <a href="URL58">Bad Beat Jackpot - Do I have to put a certain amount in the pot to win the Bad Beat Jackpot?</a><br>
    <a href="URL59">Bad Beat Jackpot - Does the hand have to go to showdown to award a Beat Jackpot?</a><br>
    <a href="URL60">Bad Beat Jackpot - Frequently Asked Questions</a><br>
    <a href="URL61">Bad Beat Jackpot - I got disconnected, and a Bad Beat Jackpot was won in the hand I was in. What happens here?</a><br>
    <a href="URL62">Bad Beat Jackpot - I have played a hand and I am sure it qualified for the Bad Beat Jackpot - how can I have this checked?</a><br>
    <a href="URL63">Bad Beat Jackpot - I made a Bad Beat Jackpot qualifying hand and got beaten at showdown in an eligible cash game. What happens now?</a><br>
    <a href="URL64">Bad Beat Jackpot - I was dealt cards in a hand where a Bad Beat Jackpot was awarded. What happens now?</a><br>
    <a href="URL65">Bad Beat Jackpot - I was sitting at a table where a Bad Beat Jackpot was awarded, Is that right that I get a share too?</a><br>
    <a href="URL66">Bad Beat Jackpot - I won a hand against someone with a Bad Beat Jackpot qualifying hand at showdown in an eligible cash game. What happens now?</a><br>
    <a href="URL67">Bad Beat Jackpot - I'm using both hole cards in a Holdem Game to make the best hand I have AK and the flop was AAA. Why didn't I get a Bad Beat Jackpot?</a><br>
    <a href="URL68">Bad Beat Jackpot - If I choose to Run It Twice/Three times, can I still win a Bad Beat Jackpot?</a><br>
    <a href="URL69">Bad Beat Jackpot - If I fold my hand and leave the table, would I still be eligible if a Bad Beat Jackpot was won in that hand?</a><br>
    <a href="URL70">Bad Beat Jackpot - If I take EV Cashout, can I still win a Bad Beat Jackpot?</a><br>
    <a href="URL71">Bad Beat Jackpot - In Hold'em Cash Games and Rush & Cash Games, What amount is contributed to the Bad Beat Jackpot Fund?</a><br>
    <a href="URL72">Bad Beat Jackpot - In Hold'em Cash Games and Rush & Cash Games, What are the qualifying criteria for a Bad Beat Jackpot to be awarded?</a><br>
    <a href="URL73">Bad Beat Jackpot - In Omaha (All variants) Cash Games, What amount is contributed to the Bad Beat Jackpot Fund?</a><br>
    <a href="URL74">Bad Beat Jackpot - In Omaha (PLO) Cash Games and Rush & Cash Games, What are the qualifying criteria for a Bad Beat Jackpot to be awarded?</a><br>
    <a href="URL75">Bad Beat Jackpot - In Omaha Cash Games and Rush & Cash Games, What amount is contributed to the Bad Beat Jackpot Fund?</a><br>
    <a href="URL76">Bad Beat Jackpot - In Omaha6 (PLO6) Cash Games, What are the qualifying criteria for a Bad Beat Jackpot to be awarded?</a><br>
    <a href="URL77">Bad Beat Jackpot - In Short Deck Cash Games, What amount is contributed to the Bad Beat Jackpot Fund?</a><br>
    <a href="URL78">Bad Beat Jackpot - In Short Deck Cash Games, What are the qualifying criteria for a Bad Beat Jackpot to be awarded?</a><br>
    <a href="URL79">Bad Beat Jackpot - Is the Bad Beat Jackpot awarded in All-In Or Fold (AoF) Games?</a><br>
    <a href="URL80">Bad Beat Jackpot - Is the Bad Beat Jackpot awarded in Battle Royale Tournaments?</a><br>
    <a href="URL81">Bad Beat Jackpot - Is the Bad Beat Jackpot awarded in Spin & Gold Tournaments?</a><br>
    <a href="URL82">Bad Beat Jackpot - Is the Bad Beat Jackpot awarded in Tournaments?</a><br>
    <a href="URL83">Bad Beat Jackpot - Is the Bad Beat Jackpot fund raked?</a><br>
    <a href="URL84">Bad Beat Jackpot - Summary</a><br>
    <a href="URL85">Bad Beat Jackpot - Three (or more) players all made Bad Beat Jackpot qualifying hands. What happens here?</a><br>
    <a href="URL86">Bad Beat Jackpot - What are the terms and conditions?</a><br>
    <a href="URL87">Bad Beat Jackpot - What games are the Bad Beat Jackpot awarded in?</a><br>
    <a href="URL88">Bad Beat Jackpot - What is the Bad Beat Jackpot?</a><br>
    <a href="URL89">Bad Beat Jackpot - Where does the money in the Bad Beat Jackpot fund come from?</a><br>
    <a href="URL90">Bounty Jackpot - Removal</a><br>
    `,
    dailyFreebie:`
    <a href="URL1">Daily Freebie - Can I exchange my Daily Freebie ticket for cash or another ticket?</a><br>
    <a href="URL2">Daily Freebie - Can I transfer my Daily Freebie ticket to another player?</a><br>
    <a href="URL3">Daily Freebie - Do I earn Fish Points when I use a Daily Freebie ticket?</a><br>
    <a href="URL4">Daily Freebie - Does my account need to be verified to receive a Daily Freebie?</a><br>
    <a href="URL5">Daily Freebie - Frequently Asked Questions</a><br>
    <a href="URL6">Daily Freebie - How long does my Daily Freebie take to arrive in my account?</a><br>
    <a href="URL7">Daily Freebie - How long have I got to use my Daily Freebie ticket?</a><br>
    <a href="URL8">Daily Freebie - I am trying to claim my Daily Freebie and it says it has already been claimed, why is this?</a><br>
    <a href="URL9">Daily Freebie - I and someone else in my household both have GGPoker accounts, can we both get a Daily Freebie?</a><br>
    <a href="URL10">Daily Freebie - I and someone else with a GGPoker account share a computer. Can we both get a Daily Freebie?</a><br>
    <a href="URL11">Daily Freebie - I cannot find where to claim the Daily Freebie on the GGPoker client?</a><br>
    <a href="URL12">Daily Freebie - I get an error why claiming the Daily Freebie - who can help?</a><br>
    <a href="URL13">Daily Freebie - I won some money from my Daily Freebie ticket, can I withdraw this immediately?</a><br>
    <a href="URL14">Daily Freebie - It says I cannot claim, but it's not me who has claimed. Can I manually get a ticket?</a><br>
    <a href="URL15">Daily Freebie - Summary</a><br>
    <a href="URL16">Daily Freebie - Terms and Conditions</a><br>
    <a href="URL17">Daily Freebie - There is nowhere to claim the Daily Freebie on the GGPoker Client, why is this?</a><br>
    <a href="URL18">Daily Freebie - What Daily Freebies are available?</a><br>
    <a href="URL19">Daily Freebie - What is the Daily Freebie on Friday?</a><br>
    <a href="URL20">Daily Freebie - What is the Daily Freebie on Monday?</a><br>
    <a href="URL21">Daily Freebie - What is the Daily Freebie on Saturday?</a><br>
    <a href="URL22">Daily Freebie - What is the Daily Freebie on Sunday?</a><br>
    <a href="URL23">Daily Freebie - What is the Daily Freebie on Thursday?</a><br>
    <a href="URL24">Daily Freebie - What is the Daily Freebie on Tuesday?</a><br>
    <a href="URL25">Daily Freebie - What is the Daily Freebie on Wednesday?</a><br>
    <a href="URL26">Daily Freebie - What is the Daily Freebie?</a><br>
    <a href="URL27">Daily Freebie - When can I claim my Daily Freebie?</a><br>
    <a href="URL28">Daily Freebie - Will the Daily Freebie promotion end?</a><br>
    `,
    leaderboards:`
    <a href="URL29">Daily Leaderboard - All-in or Fold Cash Games</a><br>
    <a href="URL30">Daily Leaderboard - All-in or Fold Sit & Go</a><br>
    <a href="URL31">Daily Leaderboard - Battle Royale</a><br>
    <a href="URL32">Daily Leaderboard - Flip & Go</a><br>
    <a href="URL33">Daily Leaderboard - Hold'em</a><br>
    <a href="URL34">Daily Leaderboard - How can I participate in leaderboards?</a><br>
    <a href="URL35">Daily Leaderboard - PLO</a><br>
    <a href="URL36">Daily Leaderboard - Rush & Cash Hold'em</a><br>
    <a href="URL37">Daily Leaderboard - Rush & Cash Omaha</a><br>
    <a href="URL38">Daily Leaderboard - Short Deck</a><br>
    <a href="URL39">Daily Leaderboard - Spin & Gold</a><br>
    <a href="URL40">Daily Leaderboard - Summary</a><br>
    <a href="URL41">Daily Leaderboard - When are they paid?</a><br>
    `,
    thanksGG:`
    <a href="URL1">#ThanksGG (GGCare & GGCheers) - Frequently Asked Questions</a><br>
    <a href="URL2">#ThanksGG (GGCare & GGCheers) - Summary</a><br>
    <a href="URL3">#ThanksGG - Can I qualify for the #ThanksGG Daily Flipout by playing in Cash Games?</a><br>
    <a href="URL4">#ThanksGG - Can I qualify for the #ThanksGG Daily Flipout by playing in Flip & Go?</a><br>
    <a href="URL5">#ThanksGG - Can I qualify for the #ThanksGG Daily Flipout by playing in Mystery Battle Royale?</a><br>
    <a href="URL6">#ThanksGG - Can I qualify for the #ThanksGG Daily Flipout by playing in Spin & Gold?</a><br>
    <a href="URL7">#ThanksGG - Can I qualify for the #ThanksGG Daily Flipout by playing in Tournaments?</a><br>
    <a href="URL8">#ThanksGG - Can I qualify for the same #ThanksGG Daily Flipout event more than once?</a><br>
    <a href="URL9">#ThanksGG - Do I have to be online when the #ThanksGG Daily Flipout event begins?</a><br>
    <a href="URL10">#ThanksGG - How do I get invited to the #ThanksGG Flipout tournament?</a><br>
    <a href="URL11">#ThanksGG - How much prize money is given away each day in the #ThanksGG Flipout tournament?</a><br>
    <a href="URL12">#ThanksGG - I had a Bad Beat - but I have not been invited to the #ThanksGG Daily Flipout - why is this?</a><br>
    <a href="URL13">#ThanksGG - I had a Suck out - but I have not been invited to the #ThanksGG Daily Flipout - why is this?</a><br>
    <a href="URL14">#ThanksGG - I had a bad beat and I want support to invite me to the #ThanksGG Daily Flipout event - can this be done?</a><br>
    <a href="URL15">#ThanksGG - I had a cooler - but I have not been invited to the #ThanksGG Daily Flipout - why is this?</a><br>
    <a href="URL16">#ThanksGG - I had a cooler and I want support to invite me to the #ThanksGG Daily Flipout event - can this be done?</a><br>
    <a href="URL17">#ThanksGG - I had a suckout and I want support to invite me to the #ThanksGG Daily Flipout event - can this be done?</a><br>
    <a href="URL18">#ThanksGG - I received an entry into the #ThanksGG Daily Flipout event - what happens next?</a><br>
    <a href="URL19">#ThanksGG - I received an entry to the #ThanksGG Daily Flipout but cannot see the results - how do I find them?</a><br>
    <a href="URL20">#ThanksGG - I won a big hand - but I have not been invited to the #ThanksGG Daily Flipout - why is this?</a><br>
    <a href="URL21">#ThanksGG - I won a big pot - but I have not been invited to the #ThanksGG Daily Flipout - why is this?</a><br>
    <a href="URL22">#ThanksGG - I won a big pot and Daniel Negreanu danced on the screen - but I have not been invited to the #ThanksGG Daily Flipout - why is this?</a><br>
    <a href="URL23">#ThanksGG - PokerCraft tags my hand as a bad beat - but I have not been invited to the #ThanksGG Daily Flipout - why is this?</a><br>
    <a href="URL24">#ThanksGG - PokerCraft tags my hand as a big hand - but I have not been invited to the #ThanksGG Daily Flipout - why is this?</a><br>
    <a href="URL25">#ThanksGG - PokerCraft tags my hand as a big pot - but I have not been invited to the #ThanksGG Daily Flipout - why is this?</a><br>
    <a href="URL26">#ThanksGG - PokerCraft tags my hand as a cooler - but I have not been invited to the #ThanksGG Daily Flipout - why is this?</a><br>
    <a href="URL27">#ThanksGG - PokerCraft tags my hand as a suck out - but I have not been invited to the #ThanksGG Daily Flipout - why is this?</a><br>
    <a href="URL28">#ThanksGG - What are the Terms and Conditions?</a><br>
    <a href="URL29">#ThanksGG - What determines the amount of stack I get to enter the #ThanksGG Flipout tournament?</a><br>
    <a href="URL30">#ThanksGG - What happens to the #ThanksGG Flipout event when there is maintenance?</a><br>
    <a href="URL31">#ThanksGG - What is GGCare & GGCheers?</a><br>
    <a href="URL32">#ThanksGG - What time does the daily #ThanksGG Flipout tournament take place?</a><br>
    `,
    casinoBonus:`
    <a href="URL33">Casino Bonus - FAQ & Summary</a><br>
    `,
    otherPromotionsRewards:`
    <a href="URL34">Community - I've won a giveaway on the GGTV Youtube stream. Who do I contact?</a><br>
    <a href="URL35">Go for Gold - Frequently Asked Questions</a><br>
    <a href="URL36">Halloween Party 2024</a><br>
    <a href="URL37">How to enter a Coupon Code?</a><br>
    <a href="URL38">I have a ticket that states it is irredeemable - why is this?</a><br>
    <a href="URL39">I have received an email saying I've been issued a free ticket - what is the catch?</a><br>
    <a href="URL40">I played in a tournament as my mission said, but it said I failed. Why is this?</a><br>
    <a href="URL41">Is there a promotion for referring a friend to GGPoker?</a><br>
    <a href="URL42">Mystery Envelope - At which games is the Mystery Envelope promotion available?</a><br>
    <a href="URL43">Mystery Envelope - How is the Mystery Envelope promotion funded?</a><br>
    <a href="URL44">When does the Mystery Envelope promotion end?</a><br>
    `

    // Continue defining other content sections as needed...
};

  // Update the main content area with the selected subcategory content
document.getElementById('categoryDetails').innerHTML = contents[contentId];

  // Update the title
const formattedTitle = contentId.replace(/([A-Z])/g, ' $1').trim();
document.getElementById('selectedCategoryTitle').textContent = formattedTitle.charAt(0).toUpperCase() + formattedTitle.slice(1);
}