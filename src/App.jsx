
import ProductList from "./Components/ProductList";
import StudentList from "./Components/StudentList";
import UserProfile from "./Components/UserProfile";
function App() {
     return (
    <>
     <UserProfile 
        name="Asitha" 
        email="asitha9613@gmail.com" 
        city="Chennai" 
        />
        <ProductList />
        <StudentList/>
    </>
  )
}

export default App;
