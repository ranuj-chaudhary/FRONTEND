import { act, use, useEffect, useRef, useState } from "react";
import "./App.css";
import Pill from "./components/Pill";
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedUsersSet, setSlectedUsersSet] = useState(new Set());
  const [error, setError] = useState("");
  const [activeSuggestion, setActiveSuggestion] = useState(0);

  const inputRef = useRef(null);

  useEffect(() => {
    if (!searchTerm) {
      inputRef.current.focus();
      return;
    }
    async function fetchUsers() {
      try {
        const res = await fetch(
          `https://dummyjson.com/users/search?q=${searchTerm}`
        );

        if (!res.ok) {
          throw new Error("Problem fetching data");
        }

        const data = await res.json();
        if (data && data.users.length > 0) {
          const users = data.users.filter(
            (user) => !selectedUsersSet.has(user.email)
          );
          setSuggestions(users);
        }
      } catch (err) {
        setError(err);
      }
    }
    fetchUsers();
  }, [searchTerm, selectedUsersSet]);

  function handleRemoveUser(selectedUser) {
    // remove user from selected users
    const updatedUser = selectedUsers.filter(
      (user) => selectedUser.id !== user.id
    );
    setSelectedUsers(updatedUser);

    // remove user from email list of added user
    const updateUsersSet = new Set([...selectedUsersSet]);
    updateUsersSet.delete(selectedUser.email);
    setSlectedUsersSet(updateUsersSet);
  }

  function handleSelectedUser(user) {
    setSuggestions([]);
    setSelectedUsers([...selectedUsers, user]);
    setSearchTerm("");

    const updatedUserSet = new Set([...selectedUsersSet, user.email]);
    setSlectedUsersSet(updatedUserSet);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && suggestions.length > 0) {
      handleSelectedUser(suggestions[activeSuggestion]);
    } else if (e.key === "ArrowDown") {
      setActiveSuggestion((prevVal) =>
        prevVal < suggestions.length - 1 ? prevVal + 1 : prevVal
      );
    } else if (e.key === "ArrowUp") {
      setActiveSuggestion((prevVal) => (prevVal > 0 ? prevVal - 1 : prevVal));
    } else if (e.key === "Backspace" && selectedUsers.length > 0) {
      const user = selectedUsers[selectedUsers.length - 1];
      handleRemoveUser(user);
    }
  }
  return (
    <div className="app">
      <div className="multi-search">
        {selectedUsers.length > 0 &&
          selectedUsers.map((user) => (
            <Pill
              key={user.email}
              email={user.firstName}
              onClick={() => handleRemoveUser(user)}
            />
          ))}
        <div className="multi-search__data">
          <input
            type="text"
            placeholder="select user from list"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="multi-search__input"
            ref={inputRef}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          {searchTerm.length > 0 && (
            <ul className={`multi-search__suggestions`}>
              {suggestions?.map((user, index) => {
                return (
                  <li
                    key={user.email}
                    className={`multi-search__suggestion ${
                      index === activeSuggestion ? "active" : ""
                    }`}
                    onClick={() => handleSelectedUser(user)}
                  >
                    {user.firstName} {user.lastName}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
