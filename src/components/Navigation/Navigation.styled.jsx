import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const AppNav = styled.nav`
margin: 0 0 0 55px;
`;

export const AppNavLink = styled(NavLink)`
display: inline-block;
padding: 12px 20px;
text-transform: uppercase;
font-weight: 500;
font-size: 22px;
color: #dcdcdc;
transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover {
    text-shadow: 1px 0 11px rgba(255 255 255 / 80%);
}
&.active {
    color: #000000 ;
    text-shadow: 1px 0 11px rgb(52, 152, 219);
}
`;