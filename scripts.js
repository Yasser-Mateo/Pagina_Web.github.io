<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

function showAlert(event) {
    event.preventDefault(); 
    const email = document.getElementById('email').value;
    alert(`¡Gracias por suscribirte, ${email}! Estás en nuestra lista de boletín.`);
    document.getElementById('newsletterForm').reset(); 
}
function toggleChat() {
    const chatContainer = document.getElementById('chat-container');
    chatContainer.style.display = (chatContainer.style.display === 'none' || chatContainer.style.display === '') ? 'block' : 'none';
}

function sendMessage() {
    const input = document.getElementById('user-input');
    const userMessage = input.value.trim();
    if (userMessage) {
        addMessage(userMessage, 'user');
        input.value = '';
        getBotResponse(userMessage);
    }
}

function addMessage(message, type) {
    const chatBody = document.getElementById('chat-body');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', `${type}-message`);
    messageDiv.textContent = message;
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight; 
}

function getBotResponse(userMessage) {
    let response = "Lo siento, no tengo una respuesta para eso.";
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes("precio")) {
        response = "Los precios de los vehículos varían. ¿Te gustaría saber el precio de un modelo específico?";
    } else if (lowerMessage.includes("modelo")) {
        response = "Contamos con varios modelos. ¿Cuál te interesa?";
    } else if (lowerMessage.includes("financiamiento")) {
        response = "Ofrecemos opciones de financiamiento. ¿Te gustaría más información sobre eso?";
    } else if (lowerMessage.includes("garantía")) {
        response = "Nuestros vehículos vienen con garantía de 3 años. ¿Te gustaría saber más?";
    } else if (lowerMessage.includes("recomendación")) {
        response = "Claro, ¿qué tipo de vehículo buscas? Sedan, SUV, o algo más?";
    }

    setTimeout(() => {
        addMessage(response, 'bot');
    }, 1000); 
}


$(document).ready(function () {
    $('.collapse').on('show.bs.collapse', function () {
        $(this).parent().find('.card-header').addClass('active');
    });

    $('.collapse').on('hide.bs.collapse', function () {
        $(this).parent().find('.card-header').removeClass('active');
    });
});
