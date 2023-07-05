import React, { Component } from 'react';
import './index.css'
import Overview from "./components/Overview";

// 1 tailwind +
// 2 stiliziraj malo +
// 3 napravi ređenje sa stateom 1/2+
// 4 napravi da se može svaki task obrisati +
// 5 ujedno onda se i redni brojevi ređenja isprave +
// 6 da se može editovati 1/2+
// 7 kada se klikne MOD treba utrniti sve ostale buttone 1/2+
//   7.1 ne mogu razvući i preko submit forme
// 8 kada se klikne MOD treba ciljati na klikani item +
// 9 - || - treba promjeniti i spremiti samo klikniti item +

class App extends Component {
  constructor() {
    super();
    this.state = {
      if1: {text: '', id: ''},
      if2: {text: '', id: ''},
      if3: {text: '', id: ''},
      dataArray: [],
      removedFromDataArray: [],
      replacedFromDataArray: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.setDataInput = this.setDataInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.replaceItem = this.replaceItem.bind(this);
  }

  setDataInput(key1, key2, value, key3, idValue) {
    this.setState({
      [key1]: {[key2]: value, [key3]: idValue}
    })
  }

  handleClick(data1, data2, data3) {
    this.setState({
      dataArray: this.state.dataArray.concat(data1),
      if1: {text: '', id: ''},
      if2: {text: '', id: ''},
      if3: {text: '', id: ''}
    });
  }

  deleteItem(e) {
    this.setState({
      removedFromDataArray: this.state.dataArray.splice(parseInt(e.target.value), 1)
    })
  }

  replaceItem(itemForModIndex, newContent) {
    this.setState({
      replacedFromDataArray: this.state.dataArray.splice(itemForModIndex, 1, newContent)
    })
  }

  // ovdje ide replace item
  // isto kao delete item samo što će biti zamjena sadržaja indexa
  // spustiti do editWindowa

  render() {
    const { if1, if2, if3, dataArray } = this.state;
    const { handleClick } = this;
    const dataArrayToCarry = dataArray;
    let idNumber = new Date().getTime();
    
    return (
      <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-200 to-slate-200">
        <form className='flex flex-col items-center border-solid border-2 border-black mb-5 mt-5 bg-blue-300 text-black text-xl' action="" onSubmit={ function(e) {
          e.target.checkValidity();
          e.preventDefault();
          handleClick(if1);
          } }>
          <label>Task 1</label>
          <input onChange={ e => this.setDataInput('if1', 'text', e.target.value, 'id', idNumber) } value={if1.text} type="text" minLength={1} maxLength={13} pattern={'^[A-Za-z0-9]+$'} required className='text-center text-ellipsis mb-2 w-3/4' />
          {/* <label>Task 2</label>
          <input onChange={ e => this.setDataInput('if2', 'text', e.target.value, 'id', idNumber) } value={if2.text}  type="text" minLength={1} maxLength={13} pattern={'^[A-Za-z0-9]+$'} required className='text-center text-ellipsis mb-2 w-3/4' />
          <label>Task 3</label>
          <input onChange={ e => this.setDataInput('if3', 'text', e.target.value, 'id', idNumber) } value={if3.text}  type="text" minLength={1} maxLength={13} pattern={'^[A-Za-z0-9]+$'} required className='text-center text-ellipsis mb-2 w-3/4' /> */}
          <button className='text-black text-xl hover:bg-white border-solid rounded-full p-2 border-2 border-black mt-2 mb-2 bg-slate-100'>Submit</button>
        </form>
        <Overview dataArrayToCarry={dataArrayToCarry} deleteItem={this.deleteItem} replaceItem={this.replaceItem} />
      </div>
    )
  };
}

export default App;
