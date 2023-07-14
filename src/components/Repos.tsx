import Repo from "./Repo";
import PropTypes from 'prop-types';

type RepoType = {
    name: string;
    html_url: string;
}

const Repos = (props: { repos: RepoType[] }) => {
    const { repos } = props;

    return <div data-testid={'test-repos'}>
        {repos.map((repo, index) => {
            return <Repo key={index} title={repo.name} link={repo.html_url}/>
        })}
    </div>
}

Repos.propTypes = {
    repos: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        link: PropTypes.string
    }))
}

Repos.defaultProps = {
    repos: []
}

export default Repos;
