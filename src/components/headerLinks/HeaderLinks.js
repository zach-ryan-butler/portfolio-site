import React from 'react';
import { APP_LINKS } from '../../constants';

import AppLink from '../appLink/AppLink';

export default function HeaderLinks() {
  return (
    <>
      {APP_LINKS.map(({ path, title }, index) => (
        <AppLink key={index} path={path} title={title} />
      ))}
    </>
  );
}
