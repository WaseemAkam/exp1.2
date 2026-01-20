let balance = 1000;

function deposit() {
    let amount = Number(document.getElementById("amount").value);
    let message = document.getElementById("message");

    if (amount <= 0) {
        message.style.color = "red";
        message.textContent = "Enter a valid amount";
        return;
    }

    balance += amount;
    document.getElementById("balance").textContent = balance;
    message.style.color = "green";
    message.textContent = "Amount Deposited Successfully";
    document.getElementById("amount").value = "";
}

function withdraw() {
    let amount = Number(document.getElementById("amount").value);
    let message = document.getElementById("message");

    if (amount <= 0) {
        message.style.color = "red";
        message.textContent = "Enter a valid amount";
        return;
    }

    if (amount > balance) {
        message.style.color = "red";
        message.textContent = "Insufficient Balance";
        return;
    }

    balance -= amount;
    document.getElementById("balance").textContent = balance;
    message.style.color = "green";
    message.textContent = "Amount Withdrawn Successfully";
    document.getElementById("amount").value = "";
}
