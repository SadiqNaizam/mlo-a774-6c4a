import React from 'react';
import LoginCard from '@/components/Login/LoginCard';
import MainAppLayout from '@/components/layout/MainAppLayout';

/**
 * The main entry page for the application, which displays the login form.
 * It utilizes a central layout to position the login card in the middle of the screen.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginCard />
    </MainAppLayout>
  );
};

export default IndexPage;
