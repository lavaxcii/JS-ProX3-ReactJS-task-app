import React, { Component } from 'react'
import EditWindow from './EditWindow';
import { motion as m } from 'framer-motion';

export default class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editWindowSwitch: false,
      itemForModValue: null
    };
    this.handleEditWindowSwitch = this.handleEditWindowSwitch.bind(this);
    this.handleItemForModValue = this.handleItemForModValue.bind(this);
  }

  handleEditWindowSwitch(bValue) {
    this.setState({
      editWindowSwitch: bValue
    })
  }

  handleItemForModValue(item) {
    this.setState({
      itemForModValue: parseInt(item.target.value)
    })
  }

  render() {
    const { dataArrayToCarry } = this.props;
    const { deleteItem, replaceItem } = this.props;
    const { handleEditWindowSwitch, handleItemForModValue } = this;
    const { editWindowSwitch, itemForModValue } = this.state;
    let rowNumber = 0; 
    let listNumbering = -1;

    return (
      <div className='relative'>
        <h1 className='headerStyle'>Input data</h1>
        <p className='paragraphStyle'>Render input data below:</p>
        <div className='border-solid border-2 border-black mb-5 w-80'>
          {dataArrayToCarry.map(function(data) {
            if (rowNumber % 2 === 0) {
              rowNumber += 1;
              listNumbering++;
              return (
                <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75, ease: "easeOut" }} className='flex flex-row grow content-start items-center justify-start bg-slate-100' key={data.id}>
                  <div className='flex flex-row grow space-x-2 content-start items-center justify-start'>
                    <p className='paragraphStyle flex flex-row items-center justify-center'>{listNumbering}.</p>
                    <p className='paragraphStyle flex flex-row items-center justify-center pr-8'>{data.text}</p>
                  </div>
                  <div className='flex flex-row grow content-ens items-end justify-end pb-1' >
                    <button className='flex text-white hover:text-red-700 hover:bg-slate-100 border-black border-solid border-2 p-1 m-1 text-lg bg-slate-500' value={listNumbering} onClick={ (e) => deleteItem(e) }>DEL</button>
                    <button className='flex text-white hover:text-green-700 hover:bg-slate-100 border-black border-solid border-2 p-1 m-1 text-lg bg-slate-500' value={listNumbering} onClick={function(e) {
                      handleEditWindowSwitch(true);
                      handleItemForModValue(e);
                    } }>MOD</button>
                  </div>
                </m.div>
              )
            } else {
              rowNumber += 1;
              listNumbering++;
              return (
                <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75, ease: "easeOut" }} className='flex flex-row grow content-start items-center justify-start bg-slate-500' key={data.id}>
                  <div className='flex flex-row grow space-x-2 content-start items-center justify-start'>
                    <p className='paragraphStyle flex flex-row items-center justify-center text-white'>{listNumbering}.</p>
                    <p className='paragraphStyle flex flex-row items-center justify-center text-white pr-8'>{data.text}</p>
                  </div>
                  <div className='flex flex-row grow content-ens items-end justify-end pb-1'>
                    <button className='flex text-black hover:text-red-700 hover:bg-white border-black border-solid border-2 p-1 m-1 text-lg bg-slate-100'value={listNumbering} onClick={ (e) => deleteItem(e) }>DEL</button>
                    <button className='flex text-black hover:text-green-700 hover:bg-white border-black border-solid border-2 p-1 m-1 text-lg bg-slate-100' value={listNumbering} onClick={function(e) {
                      handleEditWindowSwitch(true);
                      handleItemForModValue(e);
                    } }>MOD</button>
                  </div>
                </m.div>
              )
            }
          }
          )}
        </div>
        {editWindowSwitch === true ? <EditWindow handleEditWindowSwitch={handleEditWindowSwitch} replaceItem={replaceItem} dataArrayToCarry={dataArrayToCarry} itemForModValue={itemForModValue} /> : null}
      </div>
    )
  }
}
