import Dashboard from "@/components/Dashboard";
import Loading from "@/components/Loading";
import Login from "@/components/Login";
import Main from "@/components/Main";


export const metadata = {
  title: "Moodl · Dashboard",
};

export default function page() {


  
  return (
    <Main>
      <Dashboard/>
    </Main>
  )
}
