const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

let queues = [
    {
        id: 1,
        service: "Hospital",
        location: "City Hospital",
        people: 12
    },
    {
        id: 2,
        service: "Bank",
        location: "Main Branch",
        people: 7
    },
    {
        id: 3,
        service: "Restaurant",
        location: "Food Court",
        people: 4
    }
];

app.get("/api/queues", (req, res) => {
    res.json(queues);
});

app.post("/api/join/:id", (req, res) => {
    const queue = queues.find(q => q.id === Number(req.params.id));

    if (!queue) {
        return res.status(404).json({
            message: "Queue not found"
        });
    }

    queue.people++;

    res.json({
        message: "Successfully joined the queue",
        queue: queue
    });
});

app.get("/api/health", (req, res) => {
    res.json({
        status: "OK",
        application: "Queueless"
    });
});

app.listen(PORT, () => {
    console.log(`Queueless server running at http://localhost:${PORT}`);
});
