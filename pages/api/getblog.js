//localhost:3000/api/getblog?slug=How-to-learn-node

import * as fs from "fs";

export default function handler(req, res) {
    fs.readFile(`blogpost/${req.query.slug}.json`, (err, data) => {

        if (err) {
            res.status(500).json({ error: "No such blog found" });
        }

        console.log(req.query.slug);
        res.status(200).json(JSON.parse(data));
    });
}
