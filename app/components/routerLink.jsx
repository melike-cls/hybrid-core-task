import { forwardRef } from 'react';
import Link from 'next/link';

export const RouterLink = forwardRef(function RouterLink(props , ref ) {
  return (
    <Link
      ref={ref}
      {...props}
    />
  );
});