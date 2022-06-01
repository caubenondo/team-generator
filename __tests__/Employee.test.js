const Employee = require("../lib/Employee");

describe("Employee class", () => {
    describe("Initialization", () => {
        //
        it("should create an object with a name, id and email with the new keyword", () => {
            const name = "Hai Duong";
            const id = "5";
            const email = "hduong@sdccd.edu";

            const employee = new Employee(id, name, email);
            // verify object has correct properties
            expect(employee.id).toEqual(id);
            expect(employee.name).toEqual(name);
            expect(employee.email).toEqual(email);
        });

        it("its properties are undefined if provided no arguments", () => {
            const employee = new Employee();
            // verify object throw error when there is no argument passed on
            expect(employee.id).toBe(undefined);
            expect(employee.name).toBe(undefined);
            expect(employee.email).toBe(undefined);
        });

        it("its email is undefined if provided only 2 arguments", () => {
            const employee = new Employee("hai", "hai2");
            expect(employee.email).toBe(undefined);
        });

        it("its email and name are undefined if provided only 1 argument", () => {
            const employee = new Employee("hai");
            expect(employee.name).toBe(undefined);
            expect(employee.email).toBe(undefined);
        });

        // all 3 properties are string since we dont need numeric operation on data
        it("its prarameters are string", () => {
            const employee = new Employee("5", "hai", "caubenondo@gmail.com");
            expect(typeof employee.id).toBe("string");
            expect(typeof employee.name).toBe("string");
            expect(typeof employee.email).toBe("string");
        });
    });

    describe("Class getter methods", () => {
        const e = new Employee("2", "hai", "caubenondo@gmail.com");
        it("should return role Employee when getRole() method is called", () => {
            expect(e.getRole()).toBe("Employee");
        });
        it("should return object id when getId() is called", () => {
            expect(e.getId()).toBe("2");
        });
        it("should return object name when getName() is called", () => {
            expect(e.getName()).toBe("hai");
        });
        it("should return object name when getEmail() is called", () => {
            expect(e.getEmail()).toBe("caubenondo@gmail.com");
        });
    });
});
