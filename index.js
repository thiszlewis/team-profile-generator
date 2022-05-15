const { info } = require('console');
const inquirer = require('inquirer');
const { title } = require("process"); 
const questions = [
    {
      name: "title",
      type:"input",
      message:"what is the title of the project?"
    },
    {
        name:"team",
        type :"list",
        choices:["manager","engineer","student","doctor","tutor"],
        message:"what type of team member do they wanna create?"
    },
    {
        name:"info",
        type:"input",
        message:"what is the user email?"
    },
    {
        name:"github",
        type:"input",
    message:"what is your github username?"

    }
      

    
]
inquirer

  .prompt(
      questions
    /* Pass your questions in here */
  )
  .then((answers) => {
      console.log(answers);
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
        console.log(error);
      // Prompt couldn't be rendered in the current environment
    } else {
        console.log(error);
      // Something else went wrong
    }
  });
  info(

  )

