import UserSearchContainer from "../Components/UserSearchContainer";
import UserSearchResult from "../Components/UserSearchResult";

function Home() {
  return (
    <div className="h-full sm:mt-6 md:mt-14">
      <div className="flex flex-col items-center">
        <UserSearchContainer />
        <div className="w-full  md:mt-20 relative">
          <UserSearchResult />
        </div>
      </div>
    </div>
  );
}

export default Home;
