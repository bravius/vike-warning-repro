import { testlib } from "../lib/testlib.server";

export async function onGetData(): Promise<any> {
  return testlib();
}
