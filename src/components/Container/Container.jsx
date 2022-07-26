import { PropTypes } from "prop-types";
import { AppWrapper } from './Container.styled';

export default function Container({ children }) {
    return <AppWrapper>{children}</AppWrapper>;
}

Container.protoTypes = {
    children: PropTypes.node.isRequired,
};