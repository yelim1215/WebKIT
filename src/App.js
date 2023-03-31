import React from 'react';
import Todo from './Todo';
import {Paper, List} from "@material-ui/core";
import './App.css';

class App extends React.Component {
  constructor(props){ // 매개변수 props 생성자
    super(props); // 매개변수 props 초기화
    this.state = { // item에 item.id, item.title, item.done 매개변수 이름과 값 할당
      item :[
        {id: 0, title: "Hello World 1", done: false},
        {id: 1, title: "Hello World 2", done: false},
      ],
    };
  }
    render(){
      // 자바스크립트가 제공하는 map 함수를 이용해서 배열을 반복해 <Todo /> 컴포넌트를 여러개 생성한다.
      var todoItems = this.state.items.map((item, idx) => (
        <Todo item = {item} key = {item.id} />
      ));

      // 생성된 컴포넌트 JSX를 리턴한다.
        return <div className="App">{todoItems}</div>;
    }
}

export default App;