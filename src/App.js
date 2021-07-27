import ButtonComponent from './components/ButtonComponent'
import PostList from './components/PostList';
import PostListFunction from './components/PostListFunction';

function App() {
  return (
    <div className="App">
      <h1>Check Redux</h1>
      <ButtonComponent/><br></br>
      {/* <PostList/> */}
      <PostListFunction/>
    </div>
  );
}

export default App;
