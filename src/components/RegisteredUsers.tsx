import React, { FC, useEffect, useState } from "react";
import { Button, getUsers } from "./index";
import "../style/registeredUsers.scss";

interface RegisteredUsersProps {
  successfullyRegistered: boolean;
}
export const RegisteredUsers: FC<RegisteredUsersProps> = ({
  successfullyRegistered,
}) => {
  const [listOfUsers, setListOfUsers] = useState({
    page: 1,
    total_pages: 1,
    total_users: 1,
    links: {
      next_url: "",
      prev_url: "",
    },
    users: [],
  });
  useEffect(() => {
    updateUser(1, 6);
  }, [successfullyRegistered]);
  const updateUser = async (page: number, count: number) => {
    const response = await getUsers(page, count);
    setListOfUsers(response);
  };
  return (
    <div className="registeredUsers">
      <h1 className="registeredUsers__title">Working with GET request</h1>
      <div className="registeredUsers__users">
        {listOfUsers.users.map(
          ({ id, name, email, phone, position, photo }) => (
            <div
              key={id}
              className="registeredUsers__user user-registeredUsers"
            >
              <img
                className="user-registeredUsers__image"
                src={photo}
                alt={name}
              />
              <h2 className="user-registeredUsers__name">{name}</h2>
              <div className="user-registeredUsers__info">
                <span>{position}</span>
                <span>{email}</span>
                <span>{phone}</span>
              </div>
            </div>
          )
        )}
      </div>
      <div className="registeredUsers__paginations">
        {new Array(listOfUsers.total_pages).fill(0).map((_, index) => (
          <span
            key={index + 1}
            className={`registeredUsers__pagination ${
              listOfUsers.page === index + 1 && "current"
            }`}
            onClick={() => updateUser(index + 1, 6)}
          >
            {index + 1}
          </span>
        ))}
      </div>
      <div className="registeredUsers__btns">
        <Button
          disabled={listOfUsers.links.prev_url === null}
          text="Prev"
          handler={() => updateUser(listOfUsers.page - 1, 6)}
        />
        <Button
          disabled={listOfUsers.links.next_url === null}
          text="Next"
          handler={() => updateUser(listOfUsers.page + 1, 6)}
        />
      </div>
    </div>
  );
};
