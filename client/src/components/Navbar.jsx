import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className=" mt-4 h-15 mb-4">
      <div className="flex flex-row justify-between items-center size-full p-4 text-white pl-10 pr-10 relative">
        <Link
          to="/home"
          className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 text-bl text-slate-900"
        >
          Jobcard
        </Link>
        <ul className="flex flex-row space-x-10 absolute left-1/2 transform -translate-x-1/2 mt-1 text-slate-900 font-medium">
          <li>
            <Link to="/jobcards" className="hover:text-slate-600">
              Jobcards
            </Link>
          </li>
          <li>
            <Link to="/HowItWorks" className="hover:text-slate-600">
              How it Works
            </Link>
          </li>
          <li>
            <Link to="/Pricing" className="hover:text-slate-600">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/Blog" className="hover:text-slate-600">
              Blog
            </Link>
          </li>
        </ul>
        <div className="">
          <div className="">
            <Link to="/Login" className="mr-6">
              <Button variant="outline" className="text-black">
                Login
              </Button>
            </Link>
            <Link to="/GetStarted" className="">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
