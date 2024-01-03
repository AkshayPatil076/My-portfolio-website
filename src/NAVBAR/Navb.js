import "./Navbar.css"

var menu=[
    {
        'menuname':'Home',
        'link':''
    },
    {
        'menuname':'Projects',
        'link':''
    },
    {
        'menuname':'Contact Me',
        'link':''
    },
    {
        'menuname':'About Me',
        'link':''
    }
  
];
function Navb(){
    return(
        <>
            <nav className="nav-bar">
                <div className="Left-nav">
                </div>
                <div className="Right-nav">
                    <button id="meenubutt">Meenu</button>
                    <ul id="ulman">
                        {
                                //Here we call the object by using js //
                               menu.map((menu,index)=>(
                                <li className='menli' data-index={index}><a href={menu.link} className='menlink'>{menu.menuname}</a></li>
                              ))
                        }
                        
                        
                    </ul>
                   

                     <div className="m11">
                     <button className="m1" onClick={function as(){
                        alert("Hello Akki")
                     }}>
                            <b className="bb"> Downlode CV</b>
                        </button>
                      
                     </div>
                </div>
                
            </nav>
        </>
    );
}
export default  Navb;
