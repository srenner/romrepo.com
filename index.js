const form = document.querySelector("#apiForm");

async function sendData() {
    const formData = new FormData(form);
    //const data = new URLSearchParams(formData);
    try {
        const response = await fetch("https://api.romrepo.com/api/ApiKey/generate", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Object.fromEntries(formData)),
        });
        var obj = await response.json();
        document.querySelector("#key").innerHTML = obj.key;
    } catch (e) {
        console.error(e);
    }
}

// Take over form submission
form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendData();
});
