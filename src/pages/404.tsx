import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push('/'), 5000);
  }, [router]);

  return (
    <h1>404 - Page Not Found</h1>
  )
};

export default Custom404;
