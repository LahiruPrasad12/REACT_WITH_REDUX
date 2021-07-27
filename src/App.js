import ButtonComponent from './components/ButtonComponent'
import PostList from './components/PostList';
import PostListFunction from './components/PostListFunction';
import SelectedPost from './components/selctedPost';

function App() {
  return (
    <div className="App">
      <h1>Check Redux</h1>
      <ButtonComponent/><br></br>
      {/* <PostList/> */}
      <PostListFunction/><br></br>
      <br></br>
      <SelectedPost/>
    </div>
  );
}

export default App;
