export default {

  abilities: [

    {
      name: "Addition Attack",
      level: 1,
      myAnimation: "",
      enemyAnimation: "/images/sparkles.gif",
      problem: () => {
       const A = Math.floor(Math.random()*(10));
       const B = Math.floor(Math.random()*(10));
       const answer = A + B;
       const damage = 4 + Math.floor(Math.random() * 3);
       const heal = 0
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
    },
    {
      name: "Subtraction Heal",
      level: 2,
      myAnimation: "/images/bubbles.gif",
      enemyAnimation: "",
      problem: () => {
        let A = Math.floor(Math.random()*(10));
        let B = Math.floor(Math.random()*(10));
        let C;
        if (B > A) {
          C = A;
          A = B;
          B = C;
        }
        const answer = A - B;
        const heal = 4 + Math.floor(Math.random() * 3);
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
      }

    },
    {
      name: "Advanced + Attack",
      level: 3,
      myAnimation: "",
      enemyAnimation: "/images/explode_across.gif",
      problem: () => {
       const A = Math.floor(Math.random()*(10));
       const B = Math.floor(Math.random()*(10));
       const C = Math.floor(Math.random()*(10));
       const answer = A + B + C;
       const damage = 10 + Math.floor(Math.random() * 10);
       const heal = 0;
       return ({
         problemDisplay:`${A} + ${B} + ${C}`,
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
    },
    {
      name: "Critical + Attack",
      level: 4,
      myAnimation: "",
      enemyAnimation: "/images/loop2.gif",
      problem: () => {
       const A = Math.floor(Math.random()*(100));
       const B = Math.floor(Math.random()*(100));
       const answer = A + B;
       const damage = 30 + Math.floor(Math.random() * 10);
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
    }
    ]
  };
