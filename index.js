function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = '*') {
  return function(zamzam = 'special') {
    return `You are ${flair}${zamzam}${flair}!`;
  };
}
