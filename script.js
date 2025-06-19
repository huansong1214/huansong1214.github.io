fetch('https://api.github.com/users/huansong1214/repos')
    .then(responses => responses.json())
    .then(repos => {
        const container = document.getElementById(`repo-container`)
        
        repos.forEach(repo => {
            const card = document.createElement('div');
            card.className = 'repo-card item';

            card.innerHTML = `
                <p>${repo.name}</p>
                <p><a href="${repo.html_url}" target="_blank">${repo.html_url}</a></p>
            `;

            container.appendChild(card);
        });
    })
    .catch(error => {
        console.error(`Error fetching repos:`, error);
    });