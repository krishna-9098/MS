// withAuth.js
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const withAuth = (WrappedComponent) => {
  const AuthHOC = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
      const token = Cookies.get('adminToken');

      if (token) {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp < currentTime) {
          Cookies.remove('adminToken');
          navigate('/login');
        }
      } else {
        navigate('/login');
      }
    }, [navigate]);

    return <WrappedComponent {...props} />;
  };

  return AuthHOC;
};

export default withAuth;
