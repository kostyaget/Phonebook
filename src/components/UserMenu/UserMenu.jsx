import { useSelector, useDispatch } from "react-redux";
import { authSelectors, authOperations } from 'redux/auth';
import { FaMailchimp, FaSignOutAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import { UserMenuWrapper, Avatar, UseerName, LogOutBtn, } from "./UserMenu.styled";

export default function UserMenu() {
    const UseerName = useSelector(authSelectors.getUsername);
    const dispatch = useDispatch();

    return (
        <UserMenuWrapper>
            <Avatar>
                <IconContext.Provider value={{ size: '3.5em' }}>
                    <FaMailchimp />
                </IconContext.Provider>
            </Avatar>
            <UseerName>{UseerName}</UseerName>
            <LogOutBtn type="button" onClick={() => dispatch(authOperations.logOut())}>
                <IconContext.Provider value={{ size: '3em' }}>
                    <FaSignOutAlt />
                </IconContext.Provider>
            </LogOutBtn>
        </UserMenuWrapper>
    );
}