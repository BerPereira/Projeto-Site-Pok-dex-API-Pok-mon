var app = new Vue({
  el: '#app',
  data: {
     userPokemonSrc: "http://guidesmedia.ign.com/guides/059687/images/blackwhite/pokemans_006.gif",
     opponentPokemonSrc: "https://guidesmedia.ign.com/guides/059687/images/blackwhite/pokemans_009.gif",
     userPokemon: "Charizard",
     opponentPokemon: "Blastoise",
     userAlive: true,
     opponentAlive: true,
     opponentFill: 100,
     userFill: 100,
     userHP: 100,
     startUserHP: 100,
     opponentHP: 100,
     userLevel: 50,
     opponentLevel: 50,
     battleText: "What will Charizard do?",
     battleOptions: ["Fight", "Pokemon", "Item", "Run"],
     userAttackDamage: [15,40,50,25],
     opponentAttacks: ["Tackle", "Skull Bash", "Hydro Pump", "Water Gun"],
     opponentAttackDamage: [15,40,50,25],
     fightOptions: ["Scratch", "Fly", "Flamethrower", "Ember"],
     endOptions: ["Yes", "No"],
     fightOn: false,
     optionsOn: true,
     endOn: false,
  userHpBar: {
    width: "100%"
  },
  opponentHpBar: {
    width: "100%"
  }
 },
  methods:{
    processOption: function(option){
      switch(option){
        case 1:
          //lida com a luta
          this.optionsOn = false
          this.fightOn = true
        break;
        case 2:
          //lida com pokémon
          setTimeout(() => {
          this.battleText = "What will " + this.userPokemon + " do?"
      }, 2000);
          
          this.battleText = "You don't have other Pokémon!"
          
        break;
        case 3:
          //lida com item
          setTimeout(() => {
          this.battleText = "What will " + this.userPokemon + " do?"
      }, 2000);
          this.battleText = "No items in bag."
        break;
        case 4:
          //lida com correr
          setTimeout(() => {
          this.battleText = "What will " + this.userPokemon + " do?"
      }, 2000);
          this.battleText = "Can't escape."
        break;
      }
    },
    processAttack: function(attack){
      switch(attack){
        case 1:
          //lida com scratch
          this.opponentHP -= this.userAttackDamage[attack-1]
          //editar se o HP !== 0
          this.opponentFill -= (this.userAttackDamage[attack-1])
          if(this.opponentFill <= 0){
            this.opponentHpBar.width = "0%"
          } else{
            this.opponentHpBar.width = this.opponentFill + "%"
          }   
          if(this.checkOpponentHp()){
            this.battleText = this.opponentPokemon + " fainted! Play again?"
            this.processFaint(1)
          } else if(this.checkOpponentHp() === false) {
            
              setTimeout(() => {
              this.processOpponentAttack()
              }, 2000);
          
            this.battleText = this.userPokemon + " used " + this.fightOptions[attack-1] + "!"
            //chama a funcao de ataque do oponente
          setTimeout(() => { 
            if(this.userAlive){
              setTimeout(() => {this.battleText = "What will " + this.userPokemon + " do?"
              }, 2000);
            }
           }, 2000);
          }
        break;
        case 2:
          //lida com fly
           this.opponentHP -= this.userAttackDamage[attack-1]
           //editar se HP !== 0
          this.opponentFill -= (this.userAttackDamage[attack-1])
          if(this.opponentFill <= 0){
            this.opponentHpBar.width = "0%"
          } else{
            this.opponentHpBar.width = this.opponentFill + "%"
          }
            if(this.checkOpponentHp()){
            this.battleText = this.opponentPokemon + " fainted! Play again?"
            this.processFaint(1)
          } else if(this.checkOpponentHp() === false) {
            
              setTimeout(() => {
              this.processOpponentAttack()
              }, 2000);
          
            this.battleText = this.userPokemon + " used " + this.fightOptions[attack-1] + "!"
            //chama a funcao de ataque do oponente
          setTimeout(() => { 
            if(this.userAlive){
              setTimeout(() => {this.battleText = "What will " + this.userPokemon + " do?"
              }, 2000);
            }
           }, 2000);
          }
        break;
        case 3:
          //lida com flamethrower
           this.opponentHP -= this.userAttackDamage[attack-1]
           //editar se o HP !== 0
          this.opponentFill -= (this.userAttackDamage[attack-1])
          if(this.opponentFill <= 0){
            this.opponentHpBar.width = "0%"
          } else{
            this.opponentHpBar.width = this.opponentFill + "%"
          }
            if(this.checkOpponentHp()){
            this.battleText = this.opponentPokemon + " fainted! Play again?"
            this.processFaint(1)
          } else if(this.checkOpponentHp() === false) {
            
              setTimeout(() => {
              this.processOpponentAttack()
              }, 2000);
          
            this.battleText = this.userPokemon + " used " + this.fightOptions[attack-1] + "!"
            //chama a funcao de ataque do oponente
          setTimeout(() => { 
            if(this.userAlive){
              setTimeout(() => {this.battleText = "What will " + this.userPokemon + " do?"
              }, 2000);
            }
           }, 2000);
          }
        break;
        case 4:
          //lida com ember
           this.opponentHP -= this.userAttackDamage[attack-1]
           //editar se o HP !== 0
          this.opponentFill -= (this.userAttackDamage[attack-1])
          if(this.opponentFill <= 0){
            this.opponentHpBar.width = "0%"
          } else{
            this.opponentHpBar.width = this.opponentFill + "%"
          }
          if(this.checkOpponentHp()){
            this.battleText = this.opponentPokemon + " fainted! Play again?"
            this.processFaint(1)
          } else if(this.checkOpponentHp() === false) {
            
              setTimeout(() => {
              this.processOpponentAttack()
              }, 2000);
          
            this.battleText = this.userPokemon + " used " + this.fightOptions[attack-1] + "!"
            //chama a funcao de ataque do oponente
          setTimeout(() => { 
            if(this.userAlive){
              setTimeout(() => {this.battleText = "What will " + this.userPokemon + " do?"
              }, 2000);
            }
           }, 2000);
          }
        break;
      }
    },
    checkOpponentHp: function(){
      if(this.opponentHP <= 0){
        //fora de combate
        return true
        
      } else{
        //a batalha continua
        return false
      }
    },
    processFaint: function(pokemon){
      this.fightOn = false
      this.endOn = true;
      if(pokemon === 1){
        this.opponentAlive = false
      } else {
        this.userHP = 0
        this.userAlive = false
      }
    },
    processOpponentAttack: function(){
      //gera um numero aleatorio
      var random = Math.floor((Math.random() * 4) + 1)
      //dando ao usuario
      this.userHP -=  this.opponentAttackDamage[random-1]
      this.userFill -= (this.opponentAttackDamage[random-1])
      if(this.userFill <= 0){
        this.userHpBar.width = "0%"
      } else{
        this.userHpBar.width = this.userFill + "%"
      } 
       if(this.checkUserHp()){
         //adiciona texto de batalha
         this.battleText = this.userPokemon + " fainted! Play again?"
         this.processFaint(2)
       } else if(this.checkOpponentHp() === false) {  
         //continua a batalha
         this.battleText = this.opponentPokemon + " used " + this.opponentAttacks[random-1]  + "!"
         this.fightOn = false
         this.optionsOn = true
       }
    },
    checkUserHp: function(){
       if(this.userHP <= 0){
        //fora de combate
        return true
        
      } else{
        //a batalha continua
        return false
      }
    },
    resetBattle: function(){
      //reinicia os dados para comecar um novo jogo
      this.endOn = false;
      this.fightOn = false;
      this.optionsOn = true;
      this.battleText = "What will Charizard do?"
      this.userAlive = true
      this.opponentAlive = true
      this.userHP = 100
      this.opponentHP = 100
      this.userFill = 100
      this.opponentFill = 100
      this.userHpBar.width = "100%"
      this.opponentHpBar.width = "100%"
    }
  }
  
})