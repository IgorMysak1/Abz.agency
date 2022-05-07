import React, { FC } from "react";
import "../style/registeredUsers.scss";
import { Button } from "./Button";
const arr = [
  {
    id: "30",
    name: "Angel",
    email: "angel.williams@example.com",
    phone: "+380496540023",
    position: "Designer",
    position_id: "4",
    registration_timestamp: 1537777441,
    photo: "img/user1.jpg",
  },
  {
    id: "29",
    name: "Mattie",
    email: "mattie.lee@example.com",
    phone: "+380204819073",
    position: "Designer",
    position_id: "4",
    registration_timestamp: 1537691099,
    photo: "img/user2.jpg",
  },
  {
    id: "36",
    name: "Joshua",
    email: "joshua.dean@example.com",
    phone: "+380542161925",
    position: "Designer",
    position_id: "4",
    registration_timestamp: 1537661281,
    photo: "img/user3.jpg",
  },
  {
    id: "37",
    name: "Lisa",
    email: "lisa.medina@example.com",
    phone: "+380564753087",
    position: "Security",
    position_id: "3",
    registration_timestamp: 1537639019,
    photo: "img/user4.jpg",
  },
  {
    id: "42",
    name: "Lorraine",
    email: "lorraine.morris@example.com",
    phone: "+380945198009",
    position: "Designer",
    position_id: "4",
    registration_timestamp: 1537629182,
    photo: "img/user5.jpg",
  },
];
export const RegisteredUsers: FC = () => {
  return (
    <div className="registeredUsers">
      <h1 className="registeredUsers__title">Working with GET request</h1>
      <div className="registeredUsers__users">
        {arr.map(({ id, name, email, phone, position, photo }) => (
          <div key={id} className="registeredUsers__user user-registeredUsers">
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
        ))}
      </div>
      <Button text="Show more" handler={() => console.log("Show more")} />
    </div>
  );
};
