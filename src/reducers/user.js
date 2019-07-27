import { generateUser } from "../tests/static-data";

export default function user(state = generateUser(), action) {
  return state;
}