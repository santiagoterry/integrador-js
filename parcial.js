let ticketsResumen = document.querySelector("#ticketsResumen");
ticketsResumen.addEventListener("click", ticketsPrice);

let ticketsBorrar = document.querySelector("#ticketsBorrar");
ticketsBorrar.addEventListener("click", borrarOutput);

let ticketsQuantity = document.querySelector(".ticketsQuantity");
ticketsQuantity.addEventListener("click", clearInput);

let ticketsCategory = document.querySelector(".ticketsCategory");
ticketsCategory.addEventListener("click", descuento);

let discountStudent = document.querySelector(".estudiante");
discountStudent.addEventListener("click", updateCategory);
let discountTrainee = document.querySelector(".trainee");
discountTrainee.addEventListener("click", updateCategory);
let discountJunior = document.querySelector(".junior");
discountJunior.addEventListener("click", updateCategory);

function ticketsPrice(evento) {
    evento.preventDefault();

    let ticketsQuantity = document.querySelector(".ticketsQuantity");

    if (Number(ticketsQuantity.value)) {
        let ticketsCategory = document.querySelector(".ticketsCategory");
        let totalPayment;

        switch (ticketsCategory.value) {
            case "Estudiante": {
                totalPayment = 200 * ticketsQuantity.value * 0.2;
                break;
            }
            case "Trainee": {
                totalPayment = 200 * ticketsQuantity.value * 0.5;
                break;
            }
            case "Junior": {
                totalPayment = 200 * ticketsQuantity.value * 0.85;
                break;
            }
        }

        document.querySelector(".ticketsOutput").textContent = `Total a pagar: $${totalPayment}`;
        let outputNode = document.querySelector(".ticketsOutput");
        let spanNode = document.createElement("span");
        spanNode.className = 'ticketsBuy';

        let ticketsBuy = document.querySelector(".ticketsBuy");
        ticketsBuy.addEventListener("click", ticketsSubmit);

    } else {
        document.querySelector(".ticketsQuantity").style.border = "2px solid red";
        ticketsQuantity.value = "";
        ticketsQuantity.placeholder = "Ingrese una cantidad";
    }

}