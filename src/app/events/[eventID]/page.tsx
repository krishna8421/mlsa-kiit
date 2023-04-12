import { EventProps } from "./types";

export default function Events({ params: { eventID } }: EventProps) {
  console.log(eventID);
  return <main className="">Form</main>;
}
