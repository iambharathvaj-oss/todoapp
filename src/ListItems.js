import React from 'react';
import './ListItems.css'
import FlipMove from 'react-flip-move';

function ListItems(props){
   const items = props.items; //These Items will be received as props
   const listItems = items.map(item => 
   {
      return <div className = "list" key={item.key}>   
         <p> 
            <input type="text" id={item.key} value = {item.text} 
            onChange = {
               (e) => {
                  props.setUpdate(e.target.value, item.key)
               }
            }
            />
            <span className="Delete" 
            onClick={ () => props.deleteItem(item.key)

            }
            >X</span> 
                      
            
         </p>
            
      </div>
   }) //item.key has been set to uniquely identify them
   return( //Animation effects - FLipMove{item.text}

      <div> 
         <FlipMove duration={300} easing="ease-in-out">
         {listItems}
         </FlipMove>

         </div>
   )
}

export default ListItems;