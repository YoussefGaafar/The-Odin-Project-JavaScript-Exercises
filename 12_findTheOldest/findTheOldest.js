const findTheOldest = function (people) {
    return people.map((person) => {
        if (!person.yearOfDeath) {// If the Person is still Alive..., Consider his death is this year.
            person.yearOfDeath = new Date().getFullYear();
        }
        person.deathYears = person.yearOfDeath - person.yearOfBirth;
        return person; //After Applying the Changes, return the newly calculated person object that has deathYears property
    }).reduce((max, person) => {
        return person.deathYears > max.deathYears ? person : max
    });
};

// Do not edit below this line
module.exports = findTheOldest;
