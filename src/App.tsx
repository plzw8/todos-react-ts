/**
 *  学习目标：Todos 案例
 */
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store/reducer';
import './styles/base.css';
import './styles/index.css';

export default class App extends React.Component {
  render() {
    return (
      <section className="todoapp">
        {/* 头部 */}
        <Header></Header>
        {/* 主体 */}
        <Main></Main>
        {/* 底部 */}
        <Footer></Footer>
      </section>
    );
  }
}
function Footer() {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>1</strong> 剩余
      </span>
      <ul className="filters">
        <li>
          <a className="all selected" href="#/">
            全部
          </a>
        </li>
        <li>
          <a className="active" href="#/active">
            未完成
          </a>
        </li>
        <li>
          <a className="completed" href="#/completed">
            已完成
          </a>
        </li>
      </ul>
      <button className="clear-completed">清除已完成</button>
    </footer>
  );
}

function Main() {
  const state = useSelector((state: RootState) => state.todo);
  console.log(state);

  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">全选</label>
      <ul className="todo-list">
        <li className="completed">
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>吃饭</label>
            <button className="destroy"></button>
          </div>
        </li>
        <li className="">
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>睡觉</label>
            <button className="destroy"></button>
          </div>
        </li>
      </ul>
    </section>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>todos</h1>
      <input className="new-todo" placeholder="需要做什么" autoFocus />
    </header>
  );
}
