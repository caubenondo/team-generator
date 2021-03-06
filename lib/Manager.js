const Employee = require("./Employee");

class Manager extends Employee {
    constructor(id, name, email, officeNum) {
        super(id, name, email);
        this.officeNum = officeNum;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;
