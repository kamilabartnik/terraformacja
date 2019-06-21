new Vue({
    el:'#app',
    data: {
        playerHealth:100,
        monsterHealth: 100,
        gameIsRunning: false,
        random: 10,
        turns: []
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = []
        },
        attack: function() {
            var damage = this.calculateDamage(10, 3)
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player terraforms Mars for '+ damage
            });
            if(this.checkWin()){
                return;
            }
            this.monsterAttack();
        },
        specialAttack: function() {
            var damage = this.calculateDamage(15, 0)
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player terraforms Mars hard for '+ damage
            });
            if(this.checkWin()){
                return;
            }
            this.monsterAttack();
        },
        heal: function() {
            var heal = this.calculateDamage(10, 7)
            if (this.playerHealth <90){
                this.playerHealth += heal;
            }else{
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for '+ heal
            });
            this.monsterAttack();
        },
        giveUp: function() {
            this.playerHealth = 0;
            this.checkWin();
        },
        monsterAttack: function(){
            var damage = this.calculateDamage(12,4)
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: 'Mars hits Player for '+ damage
            });
            this.checkWin();
        },
        calculateDamage: function(max, min) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function(){
            if(this.monsterHealth <=0){
                    if(confirm('You terraforms Mars! New game?')){
                        this.startGame();
                    } else{
                    this.gameIsRunning = false;
                    }
                    return true;
            } else if(this.playerHealth <=0){
                    if(confirm('You lost! New game?')){
                        this.startGame();
                    } else{
                    this.gameIsRunning = false;
                    }
                    return true;
                }
            return false;
        }
    }
});