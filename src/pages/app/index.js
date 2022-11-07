import { Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import Bingocard from "./bingocard/Bingocard";
import Game from "./game/Game";
import Dashboard from "./dashboard";
import Menu from "./menu";
import Statistics from "./statistics"
import Player from "./player";
import User from "./user";
import ViewUser from "./user/ViewUser";
import Item from "./item/Item";
import Wallet from "./wallet/Wallet";
import Profile from "./profile/Profile";
import Question from "./question/Question";


export default function AppScreen(){
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Navigate to='dashboard' replace/>}></Route>
        {/* <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/users" element={<User />}></Route>
        <Route path='/users/:userId' element={<ViewUser />}></Route>
        <Route path="/players" element={<Player />}></Route>
        <Route path="/game" element={<Game />}></Route>
        <Route path="/bingocard" element={<Bingocard />}></Route>
        <Route path="/item" element={<Item />}></Route>
        <Route path="/question" element={<Question />}></Route>
        <Route path="/wallet" element={<Wallet />}></Route>
        <Route path="/profile" element={<Profile />}></Route> */}
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/statistics" element={<Statistics />}></Route>
        {/* <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route> */}
      </Routes>
    </DashboardLayout>
  );
}
