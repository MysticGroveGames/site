import { useState, useEffect } from "react";
import { GameType } from "@/types/Game";
import GameNavCard from "./GameNavCard";

type GameNavProps = {
  currentPage: string | undefined;
} 
const GamesNav = ({currentPage}:GameNavProps) => {
  const [data, setData] = useState<GameType[] | null>(null);
  useEffect(() => {
    const callBackendAPI = async () => {
      try {
        const response = await fetch("/api/games/featured");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const body = await response.json();

        setData(body);
      } catch (error:unknown) {
        let message
        if (error instanceof Error) {
          message = error.message
        }  else {
          message = String(error)
        }
        console.error(message);
      }
    };
    callBackendAPI();
  }, []);

  return ( 
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-9/12 mx-auto max-w-screen-xl">
        {data!==null && data.map((d:GameType)=>{
          if(d.name !== currentPage) {            
            return(
              <GameNavCard
                key={d.name}
                summary={d.summary}
                name={d.displayName}
                imageUrl={d.imageUrl}
                imageUrlShort={d.imageUrlShort}
                urlString={d.name}
              />
            )
          }
          return null;
        })}
      </div>
    </>
   );
}
 
export default GamesNav;