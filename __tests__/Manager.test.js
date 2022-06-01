const Manager = require("../lib/Manager");

describe("Manager class", () => {
    describe("Initialization", () => {
        //
        it("should create an object with a name, id and email with the new keyword", () => {
            const name = "Hai Duong";
            const id = "5";
            const email = "hduong@sdccd.edu";
            const officeNum = "2";
            const t = new Manager(id, name, email, officeNum);
            // verify object has correct properties
            expect(t.id).toEqual(id);
            expect(t.name).toEqual(name);
            expect(t.email).toEqual(email);
            expect(t.officeNum).toEqual(officeNum);
        });

        it("its properties are undefined if provided no arguments", () => {
            const t = new Manager();
            // verify object throw error when there is no argument passed on
            expect(t.id).toBe(undefined);
            expect(t.name).toBe(undefined);
            expect(t.email).toBe(undefined);
            expect(t.officeNum).toBe(undefined);
        });

        it("its email and officeNumb is undefined if provided only 2 arguments", () => {
            const t = new Manager("hai", "hai2");
            expect(t.email).toBe(undefined);
            expect(t.officeNum).toBe(undefined);
        });

        it("its email name and officeNum are undefined if provided only 1 argument", () => {
            const t = new Manager("hai");
            expect(t.name).toBe(undefined);
            expect(t.email).toBe(undefined);
            expect(t.officeNum).toBe(undefined);
        });

        // all 3 properties are string since we dont need numeric operation on data
        it("its prarameters are string", () => {
            const t = new Manager("5", "hai", "caubenondo@gmail.com", "4");
            expect(typeof t.id).toBe("string");
            expect(typeof t.name).toBe("string");
            expect(typeof t.email).toBe("string");
            expect(typeof t.officeNum).toBe("string");
        });
    });

    describe("Class getter methods", () => {
        const t = new Manager("2", "hai", "caubenondo@gmail.com", "5");
        it("should return role Manager when getRole() method is called", () => {
            expect(t.getRole()).toBe("Manager");
        });
        it("should return object id when getId() is called", () => {
            expect(t.getId()).toBe("2");
        });
        it("should return object name when getName() is called", () => {
            expect(t.getName()).toBe("hai");
        });
        it("should return object name when getEmail() is called", () => {
            expect(t.getEmail()).toBe("caubenondo@gmail.com");
        });
    });
});
