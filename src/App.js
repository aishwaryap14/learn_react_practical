import React from 'react'
import ReactDOM  from 'react-dom/client'

const Title = () => {
return <h1>Welcome everyone</h1>
}

const title = (
  <div>
    <h2>This is react title element</h2>
  </div>
)

//React componenet
const HeadingComponent = () => {
  return (
    <div>
      <Title/>
      <h1>namaste everyone from functional componenet</h1>
    </div>

  )
};

const num = 100;

const HeadingComponent1 = () => (
  <div id = "container">
    {num}
    {title}
    {`called using HeadingComponent()`}
    {HeadingComponent()}
    {`called using <HeadingComponent/>`}
    <HeadingComponent/>
    <h1 className='heading'>This is called componenet composition</h1>
  </div>
);
//both the above syntax for HeadingComponent and HeadingComponent1 are works same 

// root.render(jsxHeading);
//we can render react component as below 
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent1/>)