import React from 'react';
import { getAccessToken } from '../../apollo-client/cache/access-token';

export const Home: React.FC = () => {
    console.log(getAccessToken());
    return (
      <div>
        Home Page
      </div>
    );
};
