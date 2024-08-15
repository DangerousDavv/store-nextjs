import { VscCopilot } from "react-icons/vsc";
import { Button } from "../ui/button";
import Link from "next/link";

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <VscCopilot className="w-10 h-10" />
      </Link>
    </Button>
  );
}
export default Logo;
