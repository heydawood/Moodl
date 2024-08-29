import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";
import Main from "@/components/Main";

export const metadata = {
  title: "Moodl · Dashboard",
};

export default function page() {

  const isAuthenticated = true

  let children = (
    <Login />
  )

  if (isAuthenticated) {
    children = (
      <Dashboard />
    )
  }
  return (
    <Main>
      {children}
    </Main>
  )
}
