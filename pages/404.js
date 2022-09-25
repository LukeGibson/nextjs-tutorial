import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000)
    console.log('use effect ran');  
  }, [])

  return (
    <div className="not-found">
      <h1>Oooops...</h1>
      <h2>That page cannot be found.</h2>
    </div>
  );
}

export default NotFound;
