//Build Test Users from Arrays
// Write a JavaScript function that receives two arrays: one with names and one with roles. Return a new array of user objects in the format `{ username, email, role }`. The username should be lowercase with spaces replaced by underscores, and the email should use the domain `@playwrightbatch.com`.

// Examples:
// Input:
// names = ["Amit Kumar", "Neha Singh"], roles = ["admin", "viewer"]
// Output:
// [{ username: "amit_kumar", email: "amit_kumar@playwrightbatch.com", role: "admin" }, { username: "neha_singh", email: "neha_singh@playwrightbatch.com", role: "viewer" }]
// 💡 Explanation:Each name is normalized into a username and reused to build the email.

function buildUsers(names, roles) {
    return names.map((name, index) => {
        // Normalize username
        const username = name
            .toLowerCase()
            .replace(/\s+/g, "_");

        return {
            username: username,
            email: `${username}@playwrightbatch.com`,
            role: roles[index]
        };
    });
}


const names = ["Amit Kumar", "Neha Singh"];
const roles = ["admin", "viewer"];

const users = buildUsers(names, roles);
console.log(users);