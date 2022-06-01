const Intern = require("../lib/Intern");

describe("Intern class", () => {
    describe("Initialization", () => {
        //
        it("should create an object with a name, id and email with the new keyword", () => {
            const name = "Hai Duong";
            const id = "5";
            const email = "hduong@sdccd.edu";
            const school = "UCSD";
            const t = new Intern(id, name, email, school);
            // verify object has correct properties
            expect(t.id).toEqual(id);
            expect(t.name).toEqual(name);
            expect(t.email).toEqual(email);
            expect(t.school).toEqual(school);
        });

        it("its properties are undefined if provided no arguments", () => {
            const t = new Intern();
            // verify object throw error when there is no argument passed on
            expect(t.id).toBe(undefined);
            expect(t.name).toBe(undefined);
            expect(t.email).toBe(undefined);
            expect(t.school).toBe(undefined);
        });

        it("its email and school is undefined if provided only 2 arguments", () => {
            const t = new Intern("hai", "hai2");
            expect(t.email).toBe(undefined);
            expect(t.school).toBe(undefined);
        });

        it("its email name and school are undefined if provided only 1 argument", () => {
            const t = new Intern("hai");
            expect(t.name).toBe(undefined);
            expect(t.email).toBe(undefined);
            expect(t.school).toBe(undefined);
        });

        // all 3 properties are string since we dont need numeric operation on data
        it("its prarameters are string", () => {
            const t = new Intern(
                "5",
                "hai",
                "caubenondo@gmail.com",
                "caubenondo"
            );
            expect(typeof t.id).toBe("string");
            expect(typeof t.name).toBe("string");
            expect(typeof t.email).toBe("string");
            expect(typeof t.school).toBe("string");
        });
    });

    describe("Class getter methods", () => {
        const t = new Intern("2", "hai", "caubenondo@gmail.com", "UCSD");
        it("should return role Engineer when getRole() method is called", () => {
            expect(t.getRole()).toBe("Intern");
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
        it("should return gitHub username when getSchool() is called", () => {
            expect(t.getSchool()).toBe("UCSD");
        });
    });
});
