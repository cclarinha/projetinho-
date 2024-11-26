// Lógica do jogo
let storyText = document.getElementById('story');

function makeChoice(choice) {
    if (choice === 'go_north') {
        storyText.innerHTML = "Você segue para o norte e encontra uma caverna escura. Dentro, você ouve um som estranho. O que você faz?";
        updateChoices([
            { text: "Entrar na caverna", action: 'enter_cave' },
            { text: "Voltar e seguir para o sul", action: 'go_south' }
        ]);
    } else if (choice === 'go_south') {
        storyText.innerHTML = "Você vai para o sul e encontra uma clareira com uma árvore gigante. Há algo brilhando no chão. O que você faz?";
        updateChoices([
            { text: "Investigar o brilho", action: 'investigate_glow' },
            { text: "Voltar para o norte", action: 'go_north' }
        ]);
    } else if (choice === 'enter_cave') {
        storyText.innerHTML = "Você entra na caverna e encontra um dragão dormindo. O que você faz?";
        updateChoices([
            { text: "Tentar roubar o tesouro", action: 'steal_treasure' },
            { text: "Sair silenciosamente", action: 'leave_cave' }
        ]);
    } else if (choice === 'investigate_glow') {
        storyText.innerHTML = "Você se aproxima do brilho e encontra uma pedra mágica. Ao tocá-la, você sente uma energia estranha. O que você faz?";
        updateChoices([
            { text: "Usar a pedra mágica", action: 'use_stone' },
            { text: "Guardar a pedra e voltar", action: 'go_south' }
        ]);
    } else if (choice === 'steal_treasure') {
        storyText.innerHTML = "O dragão acorda e solta um rugido aterrorizante! Você tenta fugir, mas o dragão o pega. Fim de jogo!";
        resetGame();
    } else if (choice === 'leave_cave') {
        storyText.innerHTML = "Você sai da caverna e volta para a clareira. O dragão não te viu. O que você faz agora?";
        updateChoices([
            { text: "Ir para o norte", action: 'go_north' },
            { text: "Ir para o sul", action: 'go_south' }
        ]);
    } else if (choice === 'use_stone') {
        storyText.innerHTML = "Ao usar a pedra, você ganha poderes mágicos e pode atravessar a floresta com facilidade. Você se torna um herói! Fim da aventura!";
        resetGame();
    } else if (choice === 'go_north') {
        storyText.innerHTML = "Você volta para o norte e encontra um novo caminho! O que você faz agora?";
        updateChoices([
            { text: "Explorar mais", action: 'go_north' },
            { text: "Ir para o sul", action: 'go_south' }
        ]);
    }
}

// Atualiza as escolhas com base no contexto atual
function updateChoices(choices) {
    const buttons = document.querySelector('.choices');
    buttons.innerHTML = ''; // Limpa as escolhas anteriores
    choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = () => makeChoice(choice.action);
        buttons.appendChild(button);
    });
}

// Reinicia o jogo
function resetGame() {
    setTimeout(() => {
        storyText.innerHTML = "Você está em uma floresta misteriosa. O sol começa a se pôr e a escuridão começa a tomar conta do ambiente. O que você faz?";
        updateChoices([
            { text: "Ir para o norte", action: 'go_north' },
            { text: "Ir para o sul", action: 'go_south' }
        ]);
    }, 3000);
}