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
                text: 'Ziemia terraformuje Marsa za '+ damage
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
                text: 'Ziemia zrzuca meteoryt na Marsa za '+ damage
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
                text: 'Ziemia się leczy '+ heal
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
                text: 'Mars wysyła czerwony piach za '+ damage
            });
            this.checkWin();
        },
        calculateDamage: function(max, min) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function(){
            if(this.monsterHealth <=0){
                    if(confirm('Sterraformowałeś Marsa! Nowa gra?')){
                        this.startGame();
                    } else{
                    this.gameIsRunning = false;
                    }
                    return true;
            } else if(this.playerHealth <=0){
                    if(confirm('Mars wygrywa! Nowa gra?')){
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