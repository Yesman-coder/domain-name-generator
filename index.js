let pronoun = ['the','our'];
  let adj = ['great', 'big' ];
  let noun = ['jogger','racoon'];

for (let pronouns of pronoun) {
        for(let adjs of adj) {
            for(let nouns of noun) {
                console.log(pronouns+adjs+nouns);
            }
        }
    }