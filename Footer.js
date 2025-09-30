import React from 'react'
import './footer.css'

// const Footer = () => {
//   return (
//     <div>
//       Footer works
//     </div>
//   )
// }

// export default Footer
// The above code is default export

// The below code is named export, because we have not written "export default" instead we have just written "export"

export const Footer = () => {
  // let footerStyle = {
  //   position: "absolute",
  //   top: "100vh",
  //   width: "100%",
  //   // backgroundColor: "red"
  //   border: '7px solid purple'
  // }


  return (
    // <div>
    //   {/* Footer works */}
    // </div>

    // <div className = " bg-dark text-light py-2" style={footerStyle} >
    //   <p className='text-center' >Copyright &copy: MyTodosList.Tejashwini.com</p>
    // </div>

    // backgroundColor: "red" if you specify in footerStyle then don't write bg-dark here in div tag because it'll override the red colour.
    // <div className = "light py-2" style={footerStyle} >
    //   <p className='text-center' >Copyright &copy: MyTodosList.Tejashwini.com</p>
    // </div>


    <div className = "footer" >
      <p className='text-center' >Copyright &copy: MyTodosList.Tejashwini.com</p>
    </div>
  )
}


// 