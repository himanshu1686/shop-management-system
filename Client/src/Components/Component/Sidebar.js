import React , {useState} from 'react'

const Sidebar = () => {
    const [open, setopen] = useState(true)
const toggleSidebar = (e)=>{
    e.preventDefault();
    console.log('toggle sidebar ');
    setopen(!open)
}
    return (
            <>
            <div className="sidebar-wrapper">
            <div 
            className={ (open===true)?  "sidebar sidebar-active" 
            : "sidebar sidebar-collapsed"
            }
            > 
                <div className="content"> 
                    sidebar 
                </div>    
            
            </div>
           
            <button className="btn btn-small btn-primary action" onClick={toggleSidebar} > 
                {'>>'}
            </button>
            </div>
            {
            (open) && 
            <div className="black-overlay-sheet">
                
            </div>
            }
            </>
        
    )
}

export default Sidebar
