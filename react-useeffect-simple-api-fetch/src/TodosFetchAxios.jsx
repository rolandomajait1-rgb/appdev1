import { useState, useEffect } from "react";
import axios from "axios";

export default function TodosFetchAxios() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Axios fetch
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => {
        // Axios stores the actual data in response.data
        setTodos(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading todos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Todos List (Axios)</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ color: todo.completed ? "green" : "red" }}>
            {todo.title} — <strong>{todo.completed ? "Completed" : "Pending"}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}