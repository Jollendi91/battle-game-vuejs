new Vue({
    el: '#app',
    data: {
        gameStarted: false,
        playerHealth: 100,
        monsterHealth: 100,
        attackLog: []
    },
    methods: {
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
