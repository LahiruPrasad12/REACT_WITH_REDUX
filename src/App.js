import ButtonComponent from './components/ButtonComponent'
import PostList from './components/PostList';
import PostListFunction from './components/PostListFunction';
import SelectedPost from './components/selctedPost';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'

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
