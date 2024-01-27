import { useParams } from "react-router-dom";
import GamesNav from "@/components/Navigation/GamesNav/GamesNav";
import GameDetails from "@/components/GameDetails/GameDetails";

const GameDetail = () => {
  const {id} = useParams();
  return ( 
    <div className="flex flex-col min-h-full w-full">
      <GameDetails gameId={id}/>
      <div className="mt-6">
        <GamesNav currentPage={id}/>
      </div>
    </div>

   );
}
 
export default GameDetail;