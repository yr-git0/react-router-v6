import { Link, useSearchParams } from "react-router-dom";
import { users } from "../db";

function Home() {
  const [readSearchParams, setSearchParams] = useSearchParams();
  //   setTimeout(() => {
  //     setSearchParams({
  //       day: "today",
  //       tomorrows: "tired",
  //     });
  //   }, 3000);
  console.log(readSearchParams.get("useYn"));
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
