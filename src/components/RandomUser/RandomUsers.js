import React, { useState, useEffect } from "react";
import getApi from "../../api/commonApi";
import Spinner from "../../misc/Spinner";
import UserItem from "../../misc/UserItem";

export default function Users() {
  const [users, setUsers] = useState(null);
  const apiUrl = "https://randomuser.me/api/?results=20";

  useEffect(() => {
    getApi(apiUrl).then(setUsers);
  }, []);

  return (
    <>
      <div className="col-sm-12 users">
        <h2>
          Users:{" "}
          <small>
            <code>randomApi</code>
          </small>
        </h2>
        {users ? (
          users.results.map((user, i) => <UserItem key={i} item={user} />)
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
}
