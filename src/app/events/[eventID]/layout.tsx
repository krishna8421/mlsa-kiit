import { ILayoutProps } from "@/types";
import EventRegistrationNavbar from "@/components/EventRegistrationNavbar";

export default function EventLayout({ children }: ILayoutProps) {
  return (
    <div className="">
      <EventRegistrationNavbar />
      {children}
    </div>
  );
}
