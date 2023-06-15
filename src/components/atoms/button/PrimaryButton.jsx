import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <Sbutton>{children}</Sbutton>;
};

const Sbutton = styled(BaseButton)`
  background-color: #40514e;
  }
`;

/**別ファイルで定義したBasebuttonというスタイルをインポートした。ボタンのスタイルで、バックグラウンドカラーだけ変えたいので、それ以外の同じ部分をBasebuttonで共通化した
 * バックグラウンドカラーを追加したい場合、styled(スタイルを定義した関数名)`●●`で、●●に追加したいスタイルを書ける。
 *
 */
