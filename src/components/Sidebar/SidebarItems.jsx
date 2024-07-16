import CreatePost from "./CreatePost";
import Home from "./Home";
import ProfileLink from "./ProfileLink";
import Search from "./Search";

const SidebarItems = () => {
	return (
		<>  
            <ProfileLink />
			<Home />
			<Search />
			<CreatePost />		
		</>
	);
};

export default SidebarItems;