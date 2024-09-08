import Dashboard from "@/components/Dashboard";
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
