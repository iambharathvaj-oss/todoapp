import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems'

//Todo Application 
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    //Binding the handleInput and addItem methods with "this"
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

  handleInput(e){
    this.setState({
        currentItem:{
          text: e.target.value,
          key:Date.now()
        }
    })
  }

  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text!==""){
      const newItems=[...this.state.items, newItem];  //Destructuring assignment
      this.setState({
        items: newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  } //Deleting the items in the list
  deleteItem(key){
    const filteredItems = this.state.items.filter(item =>
      item.key!==key);

      this.setState({
        items: filteredItems
      })
  }
  setUpdate(text, key){
    const items = this.state.items;
    items.map(item =>{
      if(item.key == key){
        item.text=text;
      }      
    })
    this.setState({
      items: items
    })
  }
  render(){
    return(
      //Class Name "App" has been mentioned for the comfort of styling
            
      <div className="App">
        <header>
        <form id="to-do-form" onSubmit={this.addItem}> 
          <input id="geek" type="text" placeholder="Write Task..." value={this.state.currentItem.text} onChange={this.handleInput}></input>  
          <button type="submit" id="geekclick">+</button>
        </form>
      </header>
      <ListItems items = {this.state.items} 
      deleteItem ={this.deleteItem}
        setUpdate = {this.setUpdate}>
      </ListItems>

        

      </div>
     
    )
  }

  
}

export default App;
