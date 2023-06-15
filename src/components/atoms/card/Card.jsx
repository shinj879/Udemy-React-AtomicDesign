import styled from "styled-components";

export const Card = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};

const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 8px;
  padding: 16px;
`;

/** chidrenは親コンポーネントのタグで囲った部分をpropsとして受け取る
 * この場合は、UserCardファイルを見れば分かるよ。
 */
