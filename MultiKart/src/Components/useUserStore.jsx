import { create } from "zustand";

const useUserStore = create((set) => ({
  users: [
    {
      id: 1,
      firstName: "Michael",
      lastName: "Jordan",
      email: "michael.jordan@example.com",
      status: "active",
      photo: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      firstName: "LeBron",
      lastName: "James",
      email: "lebron.james@example.com",
      status: "inactive",
      photo: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      firstName: "Kobe",
      lastName: "Bryant",
      email: "kobe.bryant@example.com",
      status: "active",
      photo: "https://via.placeholder.com/100",
    },
    {
      id: 4,
      firstName: "Stephen",
      lastName: "Curry",
      email: "stephen.curry@example.com",
      status: "inactive",
      photo: "https://via.placeholder.com/100",
    },
    {
      id: 5,
      firstName: "Kevin",
      lastName: "Durant",
      email: "kevin.durant@example.com",
      status: "active",
      photo: "https://via.placeholder.com/100",
    },
    {
      id: 6,
      firstName: "Tim",
      lastName: "Duncan",
      email: "tim.duncan@example.com",
      status: "inactive",
      photo: "https://via.placeholder.com/100",
    },
    {
      id: 7,
      firstName: "Shaquille",
      lastName: "O'Neal",
      email: "shaquille.oneal@example.com",
      status: "active",
      photo: "https://via.placeholder.com/100",
    },
    {
      id: 8,
      firstName: "Larry",
      lastName: "Bird",
      email: "larry.bird@example.com",
      status: "inactive",
      photo: "https://via.placeholder.com/100",
    },
    {
      id: 9,
      firstName: "Magic",
      lastName: "Johnson",
      email: "magic.johnson@example.com",
      status: "active",
      photo: "https://via.placeholder.com/100",
    },
    {
      id: 10,
      firstName: "Wilt",
      lastName: "Chamberlain",
      email: "wilt.chamberlain@example.com",
      status: "inactive",
      photo: "https://via.placeholder.com/100",
    },
  ],
}));

export default useUserStore;
