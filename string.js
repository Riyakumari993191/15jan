let name ="riya tripathy"
let repocount = 50
console.log(name+  repocount +"congrasulation")
console.log(`hello my name is ${name} & i have  ${repocount} repocount  & i want to say congrasulation to my self `)

const gamename = new String('riyas-game')
console.log(gamename[0]);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.toUpperCase());
console. log(gamename.indexOf('g'));
console.log(gamename.charAt(5));

const newsreting = gamename.substring(0,7)
console.log(newsreting)
const anothertstring = gamename.slice(0,7)
const anothetstring = gamename.slice(-8,4)
console.log(anothertstring);
console.log(anothetstring);

const URL="https://riya.com/riya%20tripathi"
console.log(URL.replace('%20', '*'))
console.log(URL.includes('shalu'))
console.log(URL.split('-'))