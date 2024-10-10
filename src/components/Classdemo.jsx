import React, { Component } from 'react'

export class Classdemo extends Component {
  constructor(){
    super()
    this.state={
        color:'pink',
        year:2015,
        show:true
    };
}
changeColor = ()=>{
    this.setState({color:'grey'})
}
delHeader = ()=>{
    this.setState({show:false})
}
componentDidMount(){
    console.log('componentDidMount is run');
}
componentDidUpdate(){
    console.log('componentDidUpdate is run');
}
getSnapshotBeforeUpdate(prevProp,prevState){
    alert('before change any components getSnapshotBeforeUpdate() method is run')
}
render() {
    let myheader;
    if(this.state.show){
        myheader=<Child/>
    }
    return (
      <div style={{backgroundColor:this.state.color}}>
        {myheader}
        <h4>I use {this.state.color} color in my website from {this.state.year}.</h4>
        <button className='btn btn-primary mt-3 mx-2' onClick={this.changeColor}>Change color</button>
        <button className='btn btn-primary mt-3' onClick={this.delHeader}>Delete header</button>
      </div>
    )
  }
}
class Child extends React.Component {
    componentWillUnmount() {
      alert("The component named Header is about to be unmounted.");
    }
    render() {
      return (
        <h1>Hello World!</h1>
      );
    }
  }
  
export default Classdemo
