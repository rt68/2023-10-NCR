import { Link } from "react-router-dom";

export default function Nav() {
return (
    <div className="bg-black text-white h-10 text-xl">
        <Link to="/">
            <div>Star Wars Starships</div>
        </Link>
    </div>
)
};