Function Talk(){
Var Know = {
"Who Are You" : "Hello, Codewith_random Here ",
"How Are You" : "Good :)",
"What Can I Do For You" : "Please Give Us A Follow & Like.",
"Your Followers" : "I Have My Family Of 5000 Members, I Don't Have Follower ,Have Supportive Famiy ",
"Ok" : "Thank You So Much ",
"Bye" : "Okay! Will Meet Soon.."
};
Var User = Document.GetElementById('UserBox').Value;
Document.GetElementById('ChatLog').InnerHTML = User + "<Br>";
If (User In Know) {
Document.GetElementById('ChatLog').InnerHTML = Know[User] + "<Br>";
}Else{
Document.GetElementById('ChatLog').InnerHTML = "Sorry,I Didn't Understand <Br>";
}
}
