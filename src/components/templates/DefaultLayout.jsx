import { Header } from "../atoms/layout/Header";
import styled from "styled-components";
import { Footer } from "../atoms/layout/Footer";

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

/**DefaulLayouは、フッターとヘッダーがセットになったレイアウト。
 * それに対して、HeaderOnlyはヘッダーだけのレイアウト。
 */
/** DefaulLayouに HeaderとFooterのコンポーネントを別々にインポートしている。これをAPPにしている。 */
