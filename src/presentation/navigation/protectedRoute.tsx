import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedProps {
  isSignedIn: boolean;
  children: ReactNode;
}

const Protected = ({ isSignedIn, children }: ProtectedProps): any => {
  if (!isSignedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default Protected;
