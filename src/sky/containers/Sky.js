import React, { Component } from 'react'
import SkyLayout from '../components/SkyLayout';

export class Sky extends Component {
  go = ()=>{
    let array = [];
    for(let a=0;a<20;a++){
      let star = 0;
      do{
        star = Math.floor(Math.random()*50)
      }while(a!=0&&array[a-1] == star)
      array.push(star);
    }
    return array;
  }
  change = ()=>{
    let tem = this.state.arrStar;
    let star = 0;
    do{
      star = Math.floor(Math.random()*50)
    }while(tem[tem.length-1]== star)
    
    tem.shift()
    tem.push(star)
    this.setState({
      arrStar: tem
    })
  }
  state={
    arrStar: this.go(),
    interval: setInterval(this.change,500)
  }
  row = ()=>this.state.arrStar.map((item,a)=><div className="row" key={a}>{this.col(item)}</div>)
  
  col = (star)=>{
    let array = [];
    for(let a=0;a<50;a++){
      array.push(<div className="star" key={a}>{star==a?'*':' '}</div>);
    }
    return array;
  }
  render() {
    
    return (
      
        <SkyLayout>
          {this.row()}
        </SkyLayout>
    )
  }

}

export default Sky
