import { useState } from "react";
import { onGetData } from "./Page.telefunc";

export default function Page() {
  const [data, setData] = useState();
  async function onClick() {
    setData(await onGetData());
  }
  function onClear() {
    setData(undefined);
  }
  return (
    <>
      <button onClick={onClick}>getData</button>
      <button onClick={onClear}>clear</button>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </>
  );
}
