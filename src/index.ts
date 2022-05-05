import inquirer from './inquirer-facade';

(async () => {
  const genderOptions = [
    {
      name: 'Male',
      value: 0,
    },
    {
      name: 'Female',
      value: 1,
    },
    {
      name: 'Another',
      value: 2,
    },
  ];

  const foodOptions = [
    {
      name: 'Pizza',
      value: 'R1248'
    }, {
      name: 'Spaghetti',
      value: 'R086'
    }, {
      name: 'Ice-cream',
      value: 'F2879'
    }, {
      name: 'Chocolate',
      value: 'G4957'
    }
  ]

  const name = await inquirer.askForText('Whats your name?');
  const age = await inquirer.askForNumber('How old are you?');
  const continues = await inquirer.askToConfirm('Do you want to continue?')
  const gender = await inquirer.askToChooseOne('Pick your gender:', genderOptions);
  const foods = await inquirer.askToChooseMany('Pick the foods you like:', foodOptions);
  
  console.log(name, age, continues, gender, foods);
})()
