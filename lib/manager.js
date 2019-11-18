const Employee = require("../employee");

class Manager extends Employee {
    constructor(officeNum) {
        super(name, id, email);
        this.officeNum
    }

    getofficeNum() {
        return (this.officeNum);
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;