import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import fetchRepos from "./api/fetchRepos";

jest.mock('./api/fetchRepos');
jest.mock('./components/Repos');

describe('<App />', () => {
  const username = 'some test username';
  const mockedRepo = {
    name: 'some name',
    html_url: 'some html url'
  }

  beforeEach(() => {
    // @ts-ignore
    fetchRepos.mockResolvedValue(mockedRepo);
  })

  test('renders the app', () => {
    render(<App/>);
    expect(screen.getByTestId('test-app')).toBeInTheDocument();
  });

  test('searches for repos on username change', async () => {
    render(<App/>);
    fireEvent.change(screen.getByTestId('test-username'), {target: {value: username}})

    expect(fetchRepos).toHaveBeenCalledWith(username);
  });
})

