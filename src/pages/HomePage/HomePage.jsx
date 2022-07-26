import { useSelector } from "react-redux";
import { authSelectors } from 'redux/auth';
import { PhoneIcon, MainMassage} from './HomePage.styled';

export default function HomePage() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return (
        <>
            <PhoneIcon>☎️</PhoneIcon>
            {isLoggedIn ? (
                <MainMassage>Create a personal PhoneBook</MainMassage>
            ) : (
                    <>
                        <MainMassage>Welcome</MainMassage>
                    </>
            )}
        </>
    )
}