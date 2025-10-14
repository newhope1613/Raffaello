import { MAIN_PAGE, PERSONAL_ACCOUNT } from "./utils/endPoints";
import MainPage from "./pages/game/MainPage/MainPage";
import PersonalAccount from "./pages/game/PersonalAccount/PersonalAccount";

export const routes = [
  {
    path: MAIN_PAGE,
    Component: MainPage,
  },
  {
    path: PERSONAL_ACCOUNT,
    Component: PersonalAccount,
  },
];
