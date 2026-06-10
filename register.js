const axios = require('axios');
const fs = require('fs'); // File system module to save token directly

const BASE_URL = 'http://4.224.186.213'; 

const config = {
    email: "tushar.singh1_cs23@gla.ac.in", 
    name: "Tushar Singh",
    mobileNo: "7297812528",
    githubUsername: "tushar90450", 
    rollNo: "2315002330",          
    accessCode: "RPsgYt"                  
};

async function startRegistrationAndAuth() {
    try {
        console.log("⏳ Fetching fresh Bearer Access Token...");
        
        // Direct auth step kyunki registration already successfully ho chuka hai aapki details par
        const authResponse = await axios.post(`${BASE_URL}/evaluation-service/auth`, {
            email: config.email,
            name: config.name,
            rollNo: config.rollNo,
            accessCode: config.accessCode,
            clientID: "dcadcf16-ff11-4208-9f91-59482b6f3700", // Jo aapko pehle mil chuka hai
            clientSecret: "yyAtVsZnpKsJbtvR"
        });

        const { access_token } = authResponse.data;

        // Token ko direct fresh file me write kar rahe hain bina terminal truncation ke
        fs.writeFileSync('token.txt', access_token);
        
        console.log("\n=========================================");
        console.log("🚀 FRESH TOKEN SAVED SUCCESSFULLY!");
        console.log("👉 Apne VS Code me left side dekho, 'token.txt' naam ki file ban gayi hai.");
        console.log("Usko open karo aur poora token bina kisi space ke copy kar lo!");
        console.log("=========================================");

    } catch (error) {
        console.error("\n❌ Error occur ho gaya:", error.response ? error.response.data : error.message);
    }
}

startRegistrationAndAuth();