import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import PropTypes from "prop-types";

const Repo = (props: { title: string, link: string }) => {
    const { title, link } = props;
    return <Card data-testid={'test-repo'}>
        <CardContent>
            <Typography data-testid={'test-repo-title'} variant={'h4'} color="text.secondary">
                {title}
            </Typography>
        </CardContent>
        <CardActions>
            <Button data-testid={'test-repo-link'} size="small" target={"_blank"} href={link}>Learn More</Button>
        </CardActions>
    </Card>
}

Repo.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

Repo.defaultProps = {
    title: '',
    link: ''
}


export default Repo;
