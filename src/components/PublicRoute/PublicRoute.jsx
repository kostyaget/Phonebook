import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { authSelectors } from 'redux/auth';
import PropTyes from 'prop-types';

export default function PrivateRoute({ children, redirectTo = '/',restricted = false, }) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    
    const shouldRedirect = isLoggedIn && restricted;
    return shouldRedirect ? (
        <Navigate to={redirectTo} replace={true} />
    ) : (children);
} 

PrivateRoute.protoTypes = {
    children: PropTyes.node.isRequired,
    redirectTo: PropTyes.string,
    restricted: PropTyes.bool,
};