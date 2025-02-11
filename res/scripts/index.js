document.addEventListener('DOMContentLoaded', async () => {
    const username = "xXxCLOTIxXx";


    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await reposResponse.json();
    const sortedRepos = repos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 5);

    const projectsList = document.getElementById('projects-list');
    sortedRepos.forEach(repo => {
        const li = document.createElement('li');
        li.innerHTML =         li.innerHTML = `<a href="${repo.html_url}"><img src="https://github-readme-stats.vercel.app/api/pin/?username=${username}&repo=${repo.name}&title_color=8eecf5&text_color=c9cacc&icon_color=2bbc8a&bg_color=1d1f21"></a>`;
        projectsList.appendChild(li);
    });


});
