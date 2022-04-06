import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import TestCss from './style.module.css'

const TestDiv = styled.div`
  color: ${props => props.theme.color};;
  font-size: 22px;
  background-color: #fff;
  .ces {
    color: black;
    font-size: 28px;
  }
`
const TestDive = styled(TestDiv)`
  background-color: green;
`
export class test extends Component {
  constructor(){
    super()
    this.state = {
      name: "",
      age: 23,
      imageUrl: "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
      nowTime: 0
    }
    this.h2Size = {
      fontSize: "50px",
      color: "red" ,
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({...this.state,
        nowTime: this.state.nowTime + 1,
        age: this.state.age + 1
      })
    }, 1111);
  }
  render() {
    return (
      <ThemeProvider theme={{color: "red"}}>
        <TestDiv>
          <div style={this.h2Size}>名字：{this.state.name}
          </div>
          <div className='ces'>测试</div>
          <div className={TestCss.title}>年铃：{this.state.age}</div>
          <div>名字：{this.showSome(this.state.name)}</div>
          <div>年龄：{this.showSome(this.state.age)}</div>
          <h1>当前时间： {this.state.nowTime}</h1>
          <TestDive>222</TestDive>
        </TestDiv>
      </ThemeProvider>
    )
  }
  showSome(val) {
    return val
  }
  getNextDate(date, day) { 
  　　var dd = new Date(date);
  　　dd.setDate(dd.getDate() + day);
  　　var y = dd.getFullYear();
  　　var m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
  　　var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
  　　return y + "-" + m + "-" + d;
  };
}

export default test