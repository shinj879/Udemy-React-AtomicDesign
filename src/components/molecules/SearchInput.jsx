import styled from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/input";

export const SearchInput = () => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SbuttonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SbuttonWrapper>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SbuttonWrapper = styled.div`
  padding-left: 8px;
`;

/** SButtonWrapper → 検索ボックスとボタンの幅を少し開けたいので、デザインを適用した
 * SContainer → InputとSButtonWrapperでdivタグを追加したことになるので、改行が入ったから、横並びになるようにデザインを適用した。
 */
