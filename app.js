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
            this.gameStarted = !this.gameStarted;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.attackLog = [];
        },
        attack: function() {
            let playerAttack = Math.floor(Math.random() * 10);
            let monsterAttack = Math.floor(Math.random() * 10);

            this.playerHealth -= monsterAttack;
            this.monsterHealth -= playerAttack;

            this.attackLog.unshift({
                pAttack: `Player hits monster with ${playerAttack} damage`,
                mAttack: `Monster hits player with ${monsterAttack} damage`
            });
        },
        specialAttack: function() {
            let playerAttack = Math.floor(Math.random() * 10) + 10;
            let monsterAttack = Math.floor(Math.random() * 10);

            this.playerHealth -= monsterAttack;
            this.monsterHealth -= playerAttack;

            this.attackLog.unshift({
                pAttack: `Player hits monster with a special attack causing ${playerAttack} damage`,
                mAttack: `Monster hits player with ${monsterAttack} damage`
            });
        }
    }
});
