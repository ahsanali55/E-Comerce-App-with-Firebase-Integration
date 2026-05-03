import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom';


// ✅ Props type
type ProtectedRouteProps = {
  children: ReactNode;
};

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const token: string | null = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />
  }
  return (
    <>
      {children}
    </>
  )
}

export default ProtectedRoute
