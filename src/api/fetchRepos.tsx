const fetchRepos = async (username: string) => {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    return await response.json();
}

export default fetchRepos;
