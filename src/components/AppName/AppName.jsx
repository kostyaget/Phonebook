import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import { MainTitle } from './AppName.styled';

export default function AppName({ title }) {
    return (
        <>
            {title && (
                <MainTitle>
                    <link>{title}</link>
                </MainTitle>
            )}
        </>
        );
        
};

AppName.propTypes = {
    title: PropTypes.string,
};