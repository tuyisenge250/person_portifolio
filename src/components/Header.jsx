import React from "react"

export default function Header(){
   // const [menu, setMenu] = React.useState(false)
   // function handleClick(){
   //    setMenu(prev => !prev)
   //    console.log(menu)
   // }
   return (
    <header>
        <h1>Benjamin T</h1>
          <ul>
            <a href="#top"><li><button>Home</button></li></a>
            <a href="#service"><li><button>Service</button></li></a>
            <a href="#education"><li><button>Education</button></li></a>
            <a href="#experience"><li><button>Experience</button></li></a>
            <a href="#contact"><li><button className="contact-btn" href="">Contact me</button></li></a>
         </ul>
         {/* <button onClick={handleClick}><FaAlignJustify className="Icon"/></button> */}
    </header>
   )
}