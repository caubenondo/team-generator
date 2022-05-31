const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(id,name,email,gitHub){
        super(id,name,email);
        this.gitHub = gitHub;
    }
    getRole(){
        return 'Engineer';
    }
    getGithub(){
        return this.gitHub;
    }
}


module.exports = Engineer;