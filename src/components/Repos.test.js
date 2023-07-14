import {render, screen} from "@testing-library/react";
import Repos from "./Repos";
import Repo from "./Repo";

jest.mock("./Repo");

describe("<Repos />", () => {
    test('it renders the component', () => {
        render(<Repos repos={[]}/>);
        expect(screen.getByTestId('test-repos')).toBeInTheDocument();
    })

    test('it renders a list of repos', () => {
        const repo = {
            name: 'some repo name',
            html_url: 'some html url'
        };
        const repoTwo = {
            name: 'some repo name',
            html_url: 'some html url'
        };
        const repos = [repo, repoTwo];

        render(<Repos repos={repos}/>);
        expect(Repo).toHaveBeenCalledWith({"link": repo.html_url, "title": repo.name}, {});
        expect(Repo).toHaveBeenCalledWith({"link": repoTwo.html_url, "title": repoTwo.name}, {});
    })
})
