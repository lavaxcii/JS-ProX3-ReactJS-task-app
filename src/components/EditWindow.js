import React, { Component } from 'react';
import { motion as m } from 'framer-motion';

export default class EditWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemForModNewContent: {text: '', id: ''}
    };
    this.setItemForModNewContent = this.setItemForModNewContent.bind(this);
  }

  setItemForModNewContent(value, idValue) {
    this.setState({
      itemForModNewContent: {text: value, id: idValue}
    })
  }

  render() {
    const { handleEditWindowSwitch, replaceItem, dataArrayToCarry, itemForModValue } = this.props;
    const { itemForModNewContent } = this.state;
    const { setItemForModNewContent } = this;

    return (
      <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.50, ease: "easeOut" }} className='absolute flex flex-col content-center items-center justify-center h-full w-full z-10 left-0 top-0'>
        {itemForModNewContent.text === '' ? setItemForModNewContent(dataArrayToCarry[itemForModValue].text, dataArrayToCarry[itemForModValue].id) : null}
        <form className='flex flex-col items-center bg-gradient-to-r from-blue-300 to-green-400 border-solid border-2 border-black text-xl w-full' action="" onSubmit={function (e) {
          e.target.checkValidity();
          e.preventDefault();
          handleEditWindowSwitch(false);
          replaceItem(itemForModValue, itemForModNewContent);
        }}>
          <label>Modify Item #{itemForModValue}</label>
          <input className='text-center text-ellipsis mb-2 w-3/4 text-xl border-outset border-2 border-black' onChange={e => setItemForModNewContent(e.target.value, dataArrayToCarry[itemForModValue].id)} value={itemForModNewContent.text} type="text" minLength={1} maxLength={13} pattern={'^[A-Za-z0-9]+$'} required />
          <button className='flex text-black hover:bg-gradient-to-r from-green-300 to-blue-400 border-black border-solid border-2 p-1 m-5 text-lg bg-slate-100 rounded-full'>Confirm change</button>
        </form>
      </m.div>
    )
  }
}
