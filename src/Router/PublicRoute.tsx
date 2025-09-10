// src/Router/PublicRoute.tsx
'use client';

import { FC, ReactNode } from 'react';

interface PublicRouteProps {
  children: ReactNode;
}

const PublicRoute: FC<PublicRouteProps> = ({ children }) => {
  return <>{children}</>;
};

export default PublicRoute;
