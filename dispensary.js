import express from "express";
import bodyParser from "body-parser";
import fetch from "node-fetch";
import cors from "cors";
import { Octokit } from "@octokit/core";
const app = express();
const port = process.env.PORT || 4000;
// Enable CORS for all routes (you can configure it for specific routes if needed)
app.use(cors());
// Middleware to parse JSON requests
app.use(bodyParser.json());
// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    (async () => {
        const octokit = new Octokit({
            request: {
                fetch: fetch,
            }, auth: 'b983f415f31b2887cddeca515c7c670133eeccf9'
        }),
        owner = 'veranoweb',
        repo = 'dispensary-frontend',
        title = "Integrated Sentry into cheerio script",
        body = "Logged cloudfare errors into sentry when running cheerio script",
        base = 'main',
        head = 'menu-outages';
    
    
        const response = await octokit.request(
            `POST /repos/${owner}/${repo}/pulls`, { owner, repo, title, body, head, base }
        );
        console.log(response)
    })()
});