import { Header } from "../atoms/layout/Header";
import styled from "styled-components";

export const HeaderOnly = (props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

/**コンテンツの部分は、childrenで受け取る。というか、headerタグでコンテンツを囲むイメージ。 */
