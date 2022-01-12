/**
 *  学习目标：Todos 案例
 */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addActionCreator,
  changeTypeActionCreator,
  checkActionCreator,
  clearTypeActionCreator,
  delActionCreator,
} from './store/action/todo';
import { RootState } from './store/reducer';
import './styles/base.css';
import './styles/index.css';

import React from 'react';

export default function App() {
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

function Footer() {
  const dispatch = useDispatch();
  const list = useSelector((state: RootState) => state.todo.list);
  const type = useSelector((state: RootState) => state.todo.current);

  // 剩余长度
  const restVal = list.filter((item) => !item.isDone)?.length;
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{restVal}</strong> 剩余
      </span>
      <ul className="filters">
        <li
          onClick={() => {
            dispatch(changeTypeActionCreator('all'));
          }}
        >
          <a className={type === 'all' ? 'selected' : ''} href="#/">
            全部
          </a>
        </li>
        <li
          onClick={() => {
            dispatch(changeTypeActionCreator('active'));
          }}
        >
          <a className={type === 'active' ? 'selected' : ''} href="#/active">
            未完成
          </a>
        </li>
        <li
          onClick={() => {
            dispatch(changeTypeActionCreator('completed'));
          }}
        >
          <a
            className={type === 'completed' ? 'selected' : ''}
            href="#/completed"
          >
            已完成
          </a>
        </li>
      </ul>
      <button
        className="clear-completed"
        onClick={() => {
          dispatch(clearTypeActionCreator());
        }}
      >
        清除已完成
      </button>
    </footer>
  );
}

function Main() {
  const list = useSelector((state: RootState) => state.todo.list);
  const dispatch = useDispatch();
  // 根据type 定义一个显示列表
  const type = useSelector((state: RootState) => state.todo.current);
  const showList = list.filter((item) => {
    if (type === 'active') return !item.isDone;
    if (type === 'completed') return item.isDone;
    return item;
  });
  // 点击小选框
  const handleClickCheckbox = (id: number) => {
    dispatch(checkActionCreator(id));
  };
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">全选</label>
      <ul className="todo-list">
        {showList.map((item) => (
          <li className={item.isDone ? 'completed' : ''} key={item.id}>
            <div className="view">
              {/* 改造为受控组件 */}
              <input
                className="toggle"
                type="checkbox"
                checked={item.isDone}
                onChange={() => {
                  handleClickCheckbox(item.id);
                }}
              />
              <label>{item.task}</label>
              <button
                className="destroy"
                onClick={() => {
                  dispatch(delActionCreator(item.id));
                }}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Header() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  // 回车事件
  const handleEnterPress = (e: any) => {
    if (e.charCode === 13) {
      console.log('回车');
      // 调用action
      dispatch(addActionCreator(task));
      // 清空task
      setTask('');
    }
  };
  return (
    <header className="header">
      <h1>todos</h1>
      {/* 改为受控组件 */}
      <input
        className="new-todo"
        placeholder="需要做什么"
        autoFocus
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
        onKeyPress={(e) => {
          handleEnterPress(e);
        }}
      />
    </header>
  );
}
