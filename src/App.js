import { Router } from "./router/Router";
import "./styles.css";

const user1 = {
  name: "じゃけえ",
  image: "https://source.unsplash.com/mou0S7ViElQ",
  email: "adfadfa.com",
  phone: "000-3434-4354",
  company: {
    name: "テスト株式会社"
  },
  website: "htttp://google.com"
};

export default function App() {
  return <Router />;
}

/** BrowserRouterタグについては、react-Routerのセクションを参照して。 */
