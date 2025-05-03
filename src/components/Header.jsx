import Menubar from "./Menubar";
import Topbar from "./Topbar";


const Header = () => {
    return (
        <div className="sticky top-0 z-50">
            <Topbar></Topbar>
            <Menubar></Menubar>
        </div>
    );
};

export default Header;