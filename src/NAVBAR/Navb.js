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
        'menuname':'Contact Us',
        'link':''
    },
    {
        'menuname':'Services',
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
                        <li className="manli"><a href="" className="menlink">Home</a></li>
                        <li className="manli"><a href="" className="menlink">Product</a></li>
                        <li className="manli"><a href="" className="menlink">Contac Us</a></li>
                        <li className="manli"><a href="" className="menlink">About</a></li>
                        <li className="manli"><a href="" className="menlink">Services</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
export default  Navb;