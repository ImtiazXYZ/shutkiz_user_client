// "use client"
// import { useRouter } from 'next/navigation';
// import Cookies from "js-cookie";
function ProfileLayout({children}) {
    // const { push } = useRouter();
    // const token = Cookies.get("access_token");
    // if(!token){
    //     push('/');
    // }
    
    return (
      <main>
        {children}
      </main>
    )
  }
  
  export default ProfileLayout
  