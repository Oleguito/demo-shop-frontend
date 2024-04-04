'use client';

import React, { useContext } from 'react';
import DebugComponent from '@/app/components/DebugComponent';
import { GlobalContext } from '@/app/context/GlobalContext';
import { AccountTypes } from '@/types/accountTypes/AccountTypes.ts';
import AdminProfilePage from '@/app/(pages)/adminProfile/page.tsx';

const ProfilePage = () => {
  const context = useContext(GlobalContext);

  return (
    <>
      {(context.loggedInUserData.accountType === AccountTypes.ADMIN) &&
        <AdminProfilePage />
      }
      {(context.loggedInUserData.accountType === AccountTypes.USER) &&
        <ProfilePage />
      }

      <div>ProfilePage</div>
      <DebugComponent />
    </>
  );
};
export default ProfilePage;
