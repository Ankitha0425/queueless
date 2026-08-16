const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
        people: 8
    },
    {
        id: 3,
        service: "Government Office",
        location: "Citizen Service Center",
        people: 15
    },
    {
        id: 4,
        service: "Restaurant",
        location: "Food Court",
        people: 5
    }
];

app.get("/api/status", (req, res) => {
    res.json({
        status: "OK",
        application: "Queueless"
    });
});

app.get("/api/queues", (req, res) => {
    res.json(queues);
});

app.post("/api/join/:id", (req, res) => {
    const id = Number(req.params.id);

    const queue = queues.find(q => q.id === id);

    if (!queue) {
        return res.status(404).json({
            error: "Queue not found"
        });
    }

    queue.people++;

    res.json({
        message: "Successfully joined queue",
        queue: queue
    });
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Queueless server running on port ${PORT}`);
});
