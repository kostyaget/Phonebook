const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUserж

const authSelectors = {
    getIsLoggedIn,
    getUsername,
    getIsFetchingCurrentUser,
};
export default authSelectors;