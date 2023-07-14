import {render, screen} from "@testing-library/react";
import Repo from "./Repo";

describe("<Repo />", () => {
    test('it renders the component', () => {
        render(<Repo/>);
        expect(screen.getByTestId('test-repo')).toBeInTheDocument();
    })

    test('it renders a title', () => {
        const title = 'some repo title';

        render(<Repo title={title}/>);
        expect(screen.getByTestId('test-repo-title')).toHaveTextContent(title);
    })

    test('it renders a link', () => {
        const link = 'some link';

        render(<Repo link={link}/>);
        expect(screen.getByTestId('test-repo-link')).toHaveAttribute('href', link)
    })
})
