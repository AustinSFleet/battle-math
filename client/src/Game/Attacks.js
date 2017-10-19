export default {
  subtractHeal: () => {
    let A = Math.floor(Math.random()*(10));
    let B = Math.floor(Math.random()*(10));
    let C;
    if (B > A) {
      C = A;
      A = B;
      B = C;
    }
    let answer = A - B;
    let heal = 4 + Math.floor(Math.random() * 3);
    return ({problemDisplay:`${A} - ${B}`,
    answer: answer,
    CoMeHP: +(heal),
    CoMonHP: 0,
    CoMeHead: "Correct Answer!",
    CoMeSub: "You healed " + (heal) + " points!",

    WrMeHP: 0,
    WrMonHP: 0,
    WrMeHead: "Wrong Answer!",
    WrMeSub: "The correct answer was " + answer +".",})
  },

  addAttack: () => {
     let A = Math.floor(Math.random()*(10));
     let B = Math.floor(Math.random()*(10));
     let answer = A + B;
     let damage = 4 + Math.floor(Math.random() * 3);
     return ({
       problemDisplay:`${A} + ${B}`,
       answer: answer,
       CoMeHP: 0,
       CoMonHP: -(damage),
       CoMeHead: "Correct Answer!",
       CoMeSub: `You did ${damage} damage!`,

       WrMeHP: 0,
       WrMonHP: 0,
       WrMeHead: "Wrong Answer!",
       WrMeSub: "The correct answer was " + answer +".",})
    }
  };