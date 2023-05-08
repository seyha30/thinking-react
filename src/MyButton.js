/******************************************************************************
 * @Author                : seyha30<sinseyha1x@gmail.com>                     *
 * @CreatedDate           : 2023-05-08 20:47:15                               *
 * @LastEditors           : seyha30<sinseyha1x@gmail.com>                     *
 * @LastEditDate          : 2023-05-08 21:16:28                               *
 * @FilePath              : thinking-react/src/MyButton.js                    *
 * @CopyRight             : SAMBAT FINANCE                                    *
 *****************************************************************************/

import React from "react";
export function MyButton({ count, onClick }) {
  return (
    <>
      <button onClick={onClick}>I'm a component {count} </button>
    </>
  );
}
