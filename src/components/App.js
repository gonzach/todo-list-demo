import React from 'react';
import './App.css';
import { Layout, Icon } from 'antd';
import 'antd/dist/antd.css';
import TodoContainer from "../containers/TodoContainer";

const { Header, Footer, Content } = Layout;

function App() {
  return (
      <Layout>
          <Header><Icon type="left-circle" /> My To do List</Header>
          <Content>
               <div className="App">
                 <div>
                  <TodoContainer />
                 </div>
               </div>
          </Content>
          <Footer>Footer</Footer>
      </Layout>

  );
}

export default App;

