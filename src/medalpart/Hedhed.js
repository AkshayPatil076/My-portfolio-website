import './hed.css';
import Me from './img/IMG20231128184411-removebg-preview.png'

function Med(){
    return(
        <>
            <div className='meed'>
                <div className='left-med'></div>   
                <div className='right-med'>
                        <img src={Me} className='mepic'/>
                        
                        {/* <div className='cir2'></div>
                        <div className='cir3'></div> */}
                         
                </div> 
                <div className='cir1'>
              
                </div>
            
             </div>
        </>
    );
}

export default Med;