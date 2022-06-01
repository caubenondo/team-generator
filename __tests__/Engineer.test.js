const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
    describe("Initialization", () => {
        //
        it("should create an object with a name, id and email with the new keyword", () => {
            const name = "Hai Duong";
            const id = "5";
            const email = "hduong@sdccd.edu";
            const gitHub = "caubenondo";
            const t = new Engineer(id, name, email, gitHub);
            // verify object has correct properties
            expect(t.id).toEqual(id);
            expect(t.name).toEqual(name);
            expect(t.email).toEqual(email);
            expect(t.gitHub).toEqual(gitHub);
        });

        it("its properties are undefined if provided no arguments", () => {
            const t = new Engineer();
            // verify object throw error when there is no argument passed on
            expect(t.id).toBe(undefined);
            expect(t.name).toBe(undefined);
            expect(t.email).toBe(undefined);
            expect(t.gitHub).toBe(undefined);
        });

        it("its email and gitHub is undefined if provided only 2 arguments", () => {
            const t = new Engineer("hai", "hai2");
            expect(t.email).toBe(undefined);
            expect(t.gitHub).toBe(undefined);
        });

        it("its email name and gitHub are undefined if provided only 1 argument", () => {
            const t = new Engineer("hai");
            expect(t.name).toBe(undefined);
            expect(t.email).toBe(undefined);
            expect(t.gitHub).toBe(undefined);
        });

        // all 3 properties are string since we dont need numeric operation on data
        it("its prarameters are string", () => {
            const t = new Engineer(
                "5",
                "hai",
                "caubenondo@gmail.com",
                "caubenondo"
            );
            expect(typeof t.id).toBe("string");
            expect(typeof t.name).toBe("string");
            expect(typeof t.email).toBe("string");
            expect(typeof t.gitHub).toBe("string");
        });
    });

    describe("Class getter methods", () => {
        const t = new Engineer(
            "2",
            "hai",
            "caubenondo@gmail.com",
            "caubenondo"
        );
        it("should return role Engineer when getRole() method is called", () => {
            expect(t.getRole()).toBe("Engineer");
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
        it("should return gitHub username when getGithub() is called", () => {
            expect(t.getGithub()).toBe("caubenondo");
        });
    });
});
