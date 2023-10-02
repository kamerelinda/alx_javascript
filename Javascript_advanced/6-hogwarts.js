function studentHogwarts() {
    let privateScore = 0;
    let name = null;

    //private method
    function changeScoreBy(points) {
        privateScore += points;
    }

    // public methods
    return {
       setName: function (newName) {
           name = newName;
       },
        rewardStudent: function () {
            changeScoreBy(1);
        },
        penalizeStudent: function () {
           changeScoreBy(-1);
        },
        getScore: function () {
           return `${name}: ${privateScore}` ;
        }
    };
}
// Harry,instance of Hogwarts
const harry = studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.getScore();
// Log the name and score for Harry
console.log(harry.getScore());

// Draco
const draco = studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.getScore();

// Log the name and score for Draco
console.log(draco.getScore());