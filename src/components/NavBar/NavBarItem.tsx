import "components/NavBar/NavBarItem.css";
import { Link } from "react-scroll";

type Props = { title: string; scrollTo: string };

const NavBarItem: React.FC<Props> = ({ title, scrollTo }: Props) => {
  const scrollConfig = {
    spy: true,
    smooth: true,
    offset: 50,
    duration: 1200,
  };

  return (
    <div className="level-item has-text-centered">
      <Link to={scrollTo} {...scrollConfig}>
        <h1 className="nav-link nav-heading">{title}</h1>
      </Link>
    </div>
  );
};

export default NavBarItem;
