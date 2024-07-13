// import { log } from "console";
import inquirer from "inquirer";
// import Choice from "inquirer/lib/objects/choice.js";

let myName = "Hamza Nasir";
let Balance = 10000 //* Dollar
console.log("Welcome To Our Atm");

const answer = await inquirer.prompt(
    {
        name:"myName1",
        type: "input",
        message:"What Is Your Name?"
    }
)
if(answer.myName1 === myName){
    const answer2 = await inquirer.prompt(
        {
            name:"Choice",
            type:"list",
            message:"Plz Select An Option!",
            choices:[
                {name:"Withdrawl",value:"Withdrawl"},
                {name:"Fast Cash",value:"Fast Cash"},
                {name:"Balance Check",value:"Balance Check"}
            ]
        }
    );
    if(answer2.Choice === "Balance Check"){
        console.log(`Your Balance Is ${Balance} Dollar!`);
        console.log("Exit");
    }else if(answer2.Choice === "Fast Cash"){
        console.log("Successfully!");
        console.log(`Your Balance Is ${Balance} Dollar`);
        const howMuch = await inquirer.prompt(
            {
                name:"howmuch2",
                type:"number",
                message:"Plz Tell Us How Much You Want To Withdrawl"
            }
        );
        let result = Balance - howMuch.howmuch2;
        console.log(`Now You Have ${result} Dollar left `);

    }else if (answer2.Choice === "Withdrawl"){
        const choice2 = await inquirer.prompt(
            {
                name:"choice2",
                type:"list",
                message:"Plz Select An Option!",
                choices:[
                    {name:"500",value:"500"},
                    {name:"1000",value:"1000"},
                    {name:"1500",value:"1500"},
                    {name:"2000",value:"2000"}
                ]
            }
        );
        console.log(`${choice2.choice2} Is Successfully Withdrawl!`);
       let  result = Balance - choice2.choice2;
       console.log(`Now You Have ${result} Dollar left`);
        
        
    }
    
}else{
    console.log("Plz Give A Valid Name;");
    
}

