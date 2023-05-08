/******************************************************************************
 * @Author                : seyha30<sinseyha1x@gmail.com>                     *
 * @CreatedDate           : 2023-05-08 20:44:55                               *
 * @LastEditors           : seyha30<sinseyha1x@gmail.com>                     *
 * @LastEditDate          : 2023-05-08 20:45:18                               *
 * @FilePath              : thinking-react/src/App.test.js                    *
 * @CopyRight             : SAMBAT FINANCE                                    *
 *****************************************************************************/

import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
