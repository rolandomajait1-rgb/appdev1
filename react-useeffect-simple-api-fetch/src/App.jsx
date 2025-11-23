import UsersFetch from "./UsersFetch";
import PostsFetchAsync from "./PostsFetchAsync";
import TodosFetchAxios from "./TodosFetchAxios";

function App() {
  return (
    <div>
      <h1>React API Fetching Exercises</h1>
      <hr />
      
      {/* Task 1 */}
      <UsersFetch />

      {/* Task 2 (Uncomment to test) */}
      <PostsFetchAsync />

      {/* Task 3 (Uncomment to test) */}
      <TodosFetchAxios />
    </div>
  );
}

export default App;