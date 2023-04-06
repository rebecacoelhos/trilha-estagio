import React from 'react';
import './App.css'

function creatingDate() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const dateCompleted = day + '/' + month + '/' + year;
  return dateCompleted;
}

function Hello(props) {
  const fullDate = creatingDate();

  return (
    <div className="body-hello">
      <div className='hellos'>
        <h2 className={props.helloClass}>{props.hello}</h2>
        <span className='date'>{fullDate}</span>
      </div>
    </div>
  )
}

function App() {
  let hello = "Hello World!"

  const hellos = [
    {
      id: 1,
      hello: hello
    },
    {
      id: 2,
      hello: hello.toUpperCase()
    },
    {
      id: 3,
      hello: hello.toLowerCase()
    },
    {
      id: 4,
      hello: hello.split("").reverse()
    },
    {
      id: 5,
      hello: hello.split('').join('.').replace(' ', ''),
    },
    {
      id: 6,
      hello: hello,
      helloClass: "bold"
    },
    {
      id: 7,
      hello: hello,
      helloClass: "transparent"
    },
    {
      id: 8,
      hello: hello,
      helloClass: "text-gradient"
    },
    {
      id: 9,
      hello: "你好世界"
    },
    {
      id: 10,
      hello: hello.split("").join("  ")
    }
  ]

  return (
    <div className="App">
      {
        hellos.map(hello => {
          return <Hello key={hello.id} {...hello}/>
        })
      }
    </div>
  )
}

export default App;