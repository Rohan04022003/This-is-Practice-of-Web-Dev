import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";

const App = () => {
  return (
    <div className="w-full h-full flex justify-center mx-2">
      <div className="lg:w-[70%] w-full">
      {/* <Login /> */}
      <EmployeeDashboard />
      </div>
    </div>
  )
}

export default App