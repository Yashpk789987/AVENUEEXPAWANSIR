import React from 'react';
import { useSelector } from 'react-redux';

import EXEC2 from '../screens/EXEC2/EXEC2';
import EXEC3 from '../screens/EXEC3/EXEC3';
import EXEC6 from '../screens/EXEC6/EXEC6';
import EXEC61 from '../screens/EXEC61/EXEC61';
import EXEC62 from '../screens/EXEC62/EXEC62';

export default function SignUp() {
  const step = useSelector((state) => state.user.step);
  switch (step) {
    case 1:
      return <EXEC2 />;
    case 2:
      return <EXEC3 />;
    case 3:
      return <EXEC6 />;
    case 4:
      return <EXEC61 />;
    case 5:
      return <EXEC62 />;
    default:
      return null;
  }
}
