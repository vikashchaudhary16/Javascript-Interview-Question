import { css, Global } from "@emotion/react";

export const GlobalStylesheet = () => (
  <Global
    styles={css`
      body,
      html {
        height: 100vh;
        width: 100%;
        margin: 0;
        padding: 0;
        -ms-overflow-style: none;
        scrollbar-width: none;
        ::-webkit-scrollbar {
          display: none;
        }
      }

      body {
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #fff;
        background: #171c24;
        font-size: 14px;
      }

      ::-moz-focus-inner {
        border: 0;
      }

      * {
        box-sizing: border-box;
      }
    `}
  />
);

export default GlobalStylesheet;
