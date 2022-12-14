// const App = () => {
//   return (
//     <div>Hello World</div>
//   )
// }
import Student from "./components/Student";


function App() {

  const name = "Mia Koluci";
  const age = 28;
  const toShow = true;
  const fruits = ['applje', 'android', 'banana'];

  const student = {
    name,
    age,
    fruits
  }

  return (<>
    <div>Hello World</div>
    <Student name={name} age={age} shouldTheComponentShow={toShow}/>
  </>
  );
}

export default App;
