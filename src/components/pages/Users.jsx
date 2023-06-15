import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../../components/organizm/user/UserCard";
import { useLocation } from "react-router-dom";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `じゃけえ${val}`,
    image: "https://source.unsplash.com/mou0S7ViElQ",
    email: "adfadfa.com",
    phone: "000-3434-4354",
    company: {
      name: "テスト株式会社"
    },
    website: "htttp://google.com"
  };
});

/**[...Array(10).keys()]で、1~10の整数が入った配列を作った。その配列に対し、map()を適用している。
 * スプレッド構文の復習になるが、「...配列」で配列内の要素を順番に展開する。配列.map(引数)で、アロー関数でreturnさせることで、
 * 配列の要素を引数に受けて、配列の要素の数だけ処理を繰り返し（引数に入ってくる要素と一緒に）、最終的に、配列として返す。
 * ここでは、ユーザーの情報の「オブジェクト」を要素として持つ「配列」（10人分）が返ってきている。
 */

export const Users = () => {
  const { state } = useLocation();
  const isAdmin = state ? state.isAdmin : false;
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      {users.map((user) => (
        <UserCard kye={user.id} user={user} isAdmin={isAdmin} />
      ))}
    </SContainer>
  );
};

/** users.mapの部分について、まずjsを書くので、{}でくくっている。
 *  mapを適応している配列「users」は↑で定義したユーザー情報のオブジェクトが入っている配列ね。
 * map()の引数にあるuserには、配列「users」の要素が一つずつ入ってくる。
 * mapのアロー関数内の処理について、別ファイルのUserCardを順番にインポートするとともに、
 * <UserCard　>のプロップス「user」に値（ユーザー情報）を渡している。
 * これは、別ファイルのUserCard内で使われる。
 * 簡単に言えば、情報を外枠に渡して、完成させるイメージ。
 * 疑問がある。map()のアロー関数でreturnすると、配列で返ってくるはず。なぜ、< >が配列に入った状態で、
 * 正常にレンダリングされるのか分からない。
 * 答えが分かった。というか、そもそもreturnしていないし、アロー関数も書いていない。
 * シンプルに、mapで順番に要素を取り出して展開しただけ。
 */

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(autp-fit, minmax(200ps, 1fr));
  grid-gap: 20px;
`;
