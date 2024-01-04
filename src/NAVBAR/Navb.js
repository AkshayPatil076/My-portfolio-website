import "./Navbar.css";

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
                    <button id="meenubutt1"  onClick={
                          
                        function Show(){
                            
                            document.getElementById('ulman').style.display="block";
                            document.getElementById('meenubutt1').style.display='none';
                            document.getElementById('meenubutt2').style.display='block';
                            document.getElementById('m1').style.display='none';
                          
                    }}>Show</button>
                 <button id="meenubutt2"  onClick={
                          
                          function Hife(){
                
                            document.getElementById('ulman').style.display="none";
                            document.getElementById('meenubutt2').style.display='none';
                            document.getElementById('meenubutt1').style.display='block';
                            document.getElementById('m1').style.display='block';
                          
                            
                      }}>hide</button>
               
                    <ul id="ulman">
                        {
                               menu.map((menu,index)=>(
                                <li className='menli' data-index={index}><a href={menu.link} className='menlink'>{menu.menuname}</a></li>
                              ))
                        }
                        

                        {/* <li className="manli"><a href="" className="menlink">Home</a></li>
                        <li className="manli"><a href="" className="menlink">Product</a></li>
                        <li className="manli"><a href="" className="menlink">Contac Us</a></li>
                        <li className="manli"><a href="" className="menlink">About</a></li>
                        <li className="manli"><a href="" className="menlink">Services</a></li> */}
                    </ul>
                   

                     <button id="m1" >
                            <b className="bb"> Downlode CV</b>
                     
                        </button>
                       </div>
                
            </nav>
        </>
    );
}
export default  Navb;
