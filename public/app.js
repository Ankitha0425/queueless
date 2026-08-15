async function loadQueues() {

    const container = document.getElementById("queueContainer");

    try {

        const response = await fetch("/api/queues");

        const queues = await response.json();

        container.innerHTML = "";

        queues.forEach(queue => {

            const estimatedTime = queue.people * 3;

            const card = document.createElement("div");

            card.className = "queue-card";

            card.innerHTML = `
                <h3>${queue.service}</h3>

                <p>
                    📍 ${queue.location}
                </p>

                <p>
                    👥 People Waiting:
                    <strong>${queue.people}</strong>
                </p>

                <p>
                    ⏱ Estimated Wait:
                    <strong>${estimatedTime} minutes</strong>
                </p>

                <button onclick="joinQueue(${queue.id})">
                    Join Queue
                </button>
            `;

            container.appendChild(card);

        });

    } catch (error) {

        container.innerHTML =
            "<p>Unable to load queues. Please check the server.</p>";

        console.error(error);
    }
}


async function joinQueue(id) {

    try {

        const response = await fetch(`/api/join/${id}`, {
            method: "POST"
        });

        const result = await response.json();

        alert(
            `You joined the ${result.queue.service} queue!\n\n` +
            `People currently waiting: ${result.queue.people}`
        );

        loadQueues();

    } catch (error) {

        alert("Unable to join queue.");

        console.error(error);
    }
}


loadQueues();
