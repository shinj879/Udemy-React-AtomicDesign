import styled from "styled-components";

export const Input = (props) => {
  const { placeholder = "" } = props;
  return <SInput type="text" placeholder={placeholder} />;
};

const SInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 9999px;
  outline: none;
`;

/** propsでplaceholderを受け取って、それをInputの本当のplaceholderに設定できるようにした。
 * type="text"は型指定。規定値はtextだが、あえて書いているみたい。
 *
 */
