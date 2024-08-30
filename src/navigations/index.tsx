import React from 'react';
import { useAuth } from '../hooks/useAuth.hook';
import AppStackNavigation from './appStack.navigation';
import AuthStackNavigation from './authStack.navigation';

export default function RootNavigation() {
  const { user } = useAuth();

  console.log(user)

  return user ? <AppStackNavigation /> : <AuthStackNavigation />;
}