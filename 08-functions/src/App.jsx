import React from 'react'
import './index.css'

const App = () => {
  
  // function btnClicked(){
  //   console.log('Button clicked!')
  // }

  // function mouseEnter(){
  //   console.log('Mouse entered!')
  // }
  const pageScrolling  = (elem) => {
    console.log('Page is scrolling!....,elem')
  }
  return (

    <div onWheel= {(elem) => {
      console.log(elem.deltaY);
    }}>

      <div className = "page1"></div>
      <div className = "page2"></div>
      <div className = "page3"></div>
      {/* <h1>Hello Guys</h1>
      <button onDoubleClick={btnClicked} onMouseEnter={mouseEnter}>
        Click me
      </button>
      <button onClick ={btnClicked}>click ME</button>
      <button onMouseEnter={mouseEnter}>
        Hover over me
      </button> */}
    </div>
  )
}

export default App
