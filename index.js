const readlineSync= require('readline-sync');
const chalk= require('chalk');

//Harry potter quiz:
console.log(chalk.blueBright.bgMagenta("Welcome to the Harry Potter Quiz \n"));

const userName= readlineSync.question(chalk.cyanBright("May i know your name? "), {
 hideEchoBack: true,
 mask: chalk.cyanBright('\u2665')
});

console.log(chalk.hex('#DEADED')("\nHi "+userName+". Let's get started. \nEnter a/ b/ c for each question to answer"));

//variable declaration for score and question-answers
let score=0;

const question1={
 que: "Which Harry Potter word is now in the Oxford English Dictionary? \na.Hogwartz \nb.Muggle \nc.Voldemort",
 ans: "b"
};

const question2={
 que: "Who were Harry's parents? \na.Henry and Maggie Potter \nb.William and Elizabeth Potter \nc.James and Lily Potter ",
 ans: "c"
};
const question3={
 que: "Which of these Hogwarts professors teaches Transfiguration? \na.Snape \nb.Sprout \nc.McGonagall",
 ans: "c"
};
const question4={
 que: "At the end of Harry Potter and the Sorcerer's Stone, which professor removes his turban to reveal Voldemort on the back of his head? \na.Quirrell \nb.Lockhart \nc.snape",
 ans: "a"
};
const question5={
 que: "Who first shows Harry the diary of Tom Riddle? \na.Moaning Myrtle \nb.Fawkes \nc.Nearly headless nick",
 ans: "a"
};
const question6={
 que: "Who was Tom Marvolo Riddle? \na.The ghost of sirius black \nb.Haryy's Father \nc.Voldemort",
 ans: "c"
};
const question7={
 que: "What Hogwarts student is killed in Little Hangleton graveyard at the end of The Goblet of Fire? \na.Draco Malfoy \nb.Naville Longbottom \nc.Cedric Diggory",
 ans: "c"
};
const question8={
 que: "Who was NOT a member of the Order of the Phoenix? \na.Mad-eye Moody \nb.Bellatrix Lestarnge \nc.Sirius Black",
 ans: "b"
};
const question9={
 que: "Who kills Dumbledore at the end of The Half-Blood Prince? \na.Lucius Malfoy \nb.Draco Malfoy \nc.Snape ",
 ans: "c"
};
const question10={
 que: "In the epilogue to Harry Potter and the Deathly Hallows, to whom is Harry married? \na.Hermoine Granger \nb.Ginny Weasely \nc.Cho Chang",
 ans: "b"
};

//saving all questions in array
const questionSet=[question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

//defining Leaderboard
let highScore=[
 {nameH:"Ankita", scoreH:"9"},
 {nameH:"Atharva", scoreH:"8"}
];

//posting qiz and validating answers
for(let i=0; i<questionSet.length; i++){
checkScore(i+1,questionSet[i].que, questionSet[i].ans);
}

//posting leaderboard
console.log(chalk.keyword('orange').bold("\n*****Check out Leaderboard*****"));
let scoreBeaten=false;
for(let i=0; i<highScore.length; i++){
 console.log(chalk.keyword('orange').bold(highScore[i].nameH+" : " +highScore[i].scoreH));

 if(score>=highScore[i].scoreH){
   scoreBeaten=true;
 }
}
console.log('---------------------------------')

//Printin final score
console.log(chalk.hex('#DEADED').bold("Yay! This is Your Final Score: "+score));

//if score is beaten, print leaderboard with username and score
//positionToInsertInsideLeaderboard var
let posnInsert =0;
if(scoreBeaten){
 console.log(chalk.bold.italic.keyword('pink')("*******Congratulations "+userName+", you have beaten the high Score*******"));
 
 console.log(chalk.keyword('orange').bold("\n*****Leaderboard*****"));
 
 if(score>=highScore[0].scoreH){
   posnInsert=0;
 }
 else if(score>=highScore[1].scoreH){
   posnInsert=1;
 }
 highScore.splice(posnInsert, 0, {nameH:`${userName}`, scoreH:`${score}`});
 
 for(let i=0; i<highScore.length; i++){
   console.log(chalk.keyword('orange').bold(highScore[i].nameH+" : " +highScore[i].scoreH));
 }

}
else{
 console.log(chalk.bold.hex('#DEADED')("Sorry "+userName+", you have not beaten the high score :( "))
}

//function to validate answers and update score
function checkScore(queNo, checkQue, checkAns){
 
 let userAns= readlineSync.keyIn(chalk.cyanBright("\n"+queNo+") "+checkQue+ "\n"),{limit: '$<a-c>'});
 if(userAns===checkAns){
   console.log(chalk.green("Your answer is right"));
   score++;
 }
 else{
   console.log(chalk.redBright("Your answer is wrong"));
   console.log(chalk.yellowBright(`Correct answer is ${checkAns}`));
   score--;
 }
 console.log(chalk.yellowBright("Your current score is " +score));
 console.log('---------------------\n');

}