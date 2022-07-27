import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import { useEffect } from 'react';
import PublicRoute from 'components/PublicRoute';
import PrivateRoute from 'components/PrivateRoute';
import createAsyncPage from 'utils/createAsyncPage';
import { useSelector, useDispatch } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

const HomePage = createAsyncPage('HomePage');
const RegisterPage = createAsyncPage('RegisterPage');
const LoginPage = createAsyncPage('LoginPage');
const PhoneBookPage = createAsyncPage('PhoneBookPage');
const NotFoundPage = createAsyncPage('NotFoundPage');

export default function App() {
  const dispatch = useDispatch();

  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute redirectTo="/" restricted>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute redirectTo="/contacts" restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login">
                <PhoneBookPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    )
  );
}