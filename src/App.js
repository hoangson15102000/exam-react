// state useState()
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import Toggle from './Toggle';
// function App() {
//   // const [count, setCount] = useState(1);
//   const order = [100, 200, 300];
//   // const total = order.reduce((total, cur) => total + cur)
//   // const [count, setCount] = useState(total); // Tuy nhiên perfomance k cao vì re-render lại nhiều
//   const [count, setCount] = useState(() => {
//     const total = order.reduce((total, cur) => total + cur)
//     console.log(total);
//     return total;
//   });
//   // console.log(total)
//   const handleIncrease = () => {

//     // setCount(count + 1)
//     setCount(preState => preState + 1)

//   }
//   return (
//     <div style={{ padding: 50, fontSize: 60 }} className="App">
//       <h2 >{count}</h2>
//       <button onClick={handleIncrease}>Increase</button>

//     </div >
//   );
// }
// function App() {
//   const order = [100, 200, 300, 400, 500];
//   const total = order.reduce((total, cur) => total + cur);
//   const [count, setCount] = useState(() => total);




//   const handleIncrease = () => { setCount(count + 1) }

//   return (
//     <div style={{ padding: 50, fontSize: 60 }} className="App">
//       <h2 >{count}</h2>
//       <button onClick={handleIncrease}>Increase</button>

//     </div >
//   )
// }
// Set state bang gia tri moi

// function App() {
//   const [info, setInfo] = useState({
//     name: "Nguyen Van A",
//     age: 18,
//     address: "Ha Noi "
//   })
//   const handleUpdate = () => {
//     setInfo({
//       ...info,
//       bio: 'Yeu mau hong ghet su gia doi'
//     })
//   }
//   return (
//     <div style={{ padding: 50, fontSize: 20 }} className="App">
//       <h1>{JSON.stringify(info)}</h1>
//       <button onClick={handleUpdate}>Update</button>
//     </div >
//   );
// }
// export default App;

// const gifts = ['CPU i9', 'Ram 32db RGB', 'RGB keyboard', 'Mazda 3 2019',
//   'LandCruiser'];

// function App() {
//   // Khai bao state
//   const [gift, setGift] = useState()
//   const handleRandom = () => {
//     const index = Math.floor(Math.random() * gifts.length)
//     setGift(gifts[index]);
//   }
//   return (
//     <div style={{ padding: 32 }}>
//       <h1>{gift || "Chua co phan thuong"}</h1>
//       <button onClick={handleRandom}>Lay thuong</button>
//     </div>
//   )
// }
// export default App;
/// Rang buoc 2 chieu
// function App() {
//   const [name, setName] = useState('');
//   console.log(name);
//   return (
//     <div style={{ padding: 32 }}>
//       <input value={name} onChange={(e) => { setName(e.target.value) }}></input>
//       <button onClick={() => setName('Nguyen Hoang Son')}>Change</button>
//     </div>
//   )
// }


// radio two way binding
const courses = [
  {
    id: 1,
    name: 'HTML,CSS'
  },
  {
    id: 2,
    name: 'Javascript'
  },
  {
    id: 3,
    name: 'ReactJS'
  },
]
// function App() {
//   const [checked, setChecked] = useState(2);
//   const handleSubmit = () => {
//     console.log('id:', checked);
//   }

//   return (
//     <div style={{ padding: 32 }}>
//       {
//         courses.map(function (course) {
//           return (<div>
//             <input checked={checked === course.id} type="radio" onChange={() => setChecked(course.id)}></input>
//             {course.name}</div>)

//         })
//       }
//       <button onClick={handleSubmit}>Register</button>


//     </div>
//   )
// }
//checkbox
function App() {
  const [checked, setChecked] = useState([]);

  const handleSubmit = () => {
    console.log('id:', checked);
  }
  const handleCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if (isChecked) {

        return checked.filter(item => item !== id)
      } else {
        return [...prev, id]
      }
    })

  }
  const [show, setShow] = useState(false)

  return (
    <div style={{ padding: 32 }}>
      {
        courses.map(function (course) {
          return (<div key={course.id}>
            <input checked={checked.includes(course.id)}
              type="checkbox"
              onChange={() => handleCheck(course.id)}></input>
            {course.name}</div>)

        })
      }
      <button onClick={handleSubmit}>Register</button>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Toggle />}


    </div>
  )
}


///Todolist
export default App;
