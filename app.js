new Vue({
    el: '#app',
    data: {
        gameStarted: false,
        playerHealth: 100,
        monsterHealth: 100,
        attackLog: []
    },
    watch: {
        playerHealth: function(value) {
            if(value <= 0) {
                let answer = confirm('You Lose. Try again?');
                if (answer) {
                    this.startNewGame();
                }
                else {
                    this.gameStarted = !this.gameStarted;
                }
            }
        },
        monsterHealth: function(value) {
            if (value <= 0) {
                let answer = confirm('You won!! Play again?');
                if (answer) {
                    this.startNewGame();
                }
                else {
                    this.gameStarted = !this.gameStarted;
                }
            }
        }
    },
    methods: {
        startNewGame: function() {
            this.gameStarted = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.attackLog = [];
        },
        attack: function() {
            let playerAttack = this.calculateDamage(3, 10);
            let monsterAttack = this.calculateDamage(5, 12);

            this.playerHealth -= monsterAttack;
            this.monsterHealth -= playerAttack;

            this.attackLog.unshift({
                pAttack: `Player hits monster with ${playerAttack} damage`,
                mAttack: `Monster hits player with ${monsterAttack} damage`
            });
        },
        specialAttack: function() {
            let playerAttack = this.calculateDamage(7, 15);
            let monsterAttack = this.calculateDamage(5, 12);

            this.playerHealth -= monsterAttack;
            this.monsterHealth -= playerAttack;

            this.attackLog.unshift({
                pAttack: `Player hits monster with a special attack causing ${playerAttack} damage`,
                mAttack: `Monster hits player with ${monsterAttack} damage`
            });
        },
        heal: function() {
            let monsterAttack = this.calculateDamage(5, 12);
            let message;
            this.playerHealth -= monsterAttack;
            if (this.playerHealth + 10 > 100) {
                message = `Player healed themself by ${100 - this.playerHealth}`;
                this.playerHealth = 100;
            }
            else {
                this.playerHealth += 10;
                message = `Player healed themself by 10`;
            }

            this.attackLog.unshift({
                pAttack: message,
                mAttack: `Monster hits player with ${monsterAttack} damage`
            });
        }, 
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        }
    }
});
