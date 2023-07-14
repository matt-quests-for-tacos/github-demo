import fetchRepos from "./fetchRepos";

describe('fetchRepos', () => {
    const username = 'some username';
    const mockedRepos = [{name: 'some name', html_url: 'some html url'}]

    beforeEach(() => {
        fetch.mockResolvedValue({json: jest.fn().mockResolvedValue(mockedRepos)});
    })

    test('fetches repos with given username', async () => {
        const response = await fetchRepos(username);
        expect(response).toEqual(mockedRepos);
        expect(fetch).toHaveBeenCalledWith(`https://api.github.com/users/${username}/repos`)
    })
})
