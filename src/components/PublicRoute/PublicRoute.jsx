import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { authSelectors } from 'redux/auth';
import PropTyes from 'prop-types';

export default function PrivateRoute({ children, redirectTo = '/' }) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return isLoggedIn ? children : <Navigate to={redirectTo} replace={true} />;
}

PrivateRoute.protoTypes = {
    children: PropTyes.node.isRequired,
    redirectTo: PropTyes.string,
    restricted: PropTyes.bool,
};