import { useState, useEffect } from "react";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
 } from "@/components/ui/card";
import ResponsiveImage from "../Utilities/ResponsiveImage";
import { GameType } from "@/types/Game";
import NotFound from "@/pages/NotFound";

type GameDetailProps = {
  gameId: string | undefined;
}
const GameDetails = ({gameId}:GameDetailProps) => {
const [data, setData] = useState<GameType | null>(null);

useEffect(() => {
  const callBackendAPI = async () => {
    try {
      const response = await fetch(`/api/games/${gameId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const body = await response.json();

      setData(body);
    } catch (error:any) {
      console.error(error.message);
    }
  };
  callBackendAPI();
}, [gameId]);

  return ( 
    <>
      { data && (
        <>
          <ResponsiveImage src={data.imageUrlShort} aspectRatio={3.77} height={300} alt={data.name} />
          <h1 className="mt-3 text-3xl font-semibold leading-none tracking-tight">{data.displayName}</h1>
          <h2>{data.summary}</h2>
          <div className="w-full flex justify-center p-5 gap-4 flex-col-reverse sm:flex-row">
            <Card className="w-full sm:w-4/12 p-3">
              <CardHeader>
                <CardTitle>Details</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {data.players && ( 
                    <span className="block">
                      Players: {data.players.min} - {data.players.max}
                    </span>
                  )}
                  {data.playTimePerPerson && ( 
                    <span className="block">
                      Time: Approx. {data.playTimePerPerson} mins / player
                    </span>
                  )}
                  <span className="flex justify-center gap-x-4 flex-wrap mt-6 leading-tight">
                    {data.gameTags && data.gameTags.map((tag)=>(
                      <span key={`${data.name}-${tag}`}>{tag}</span>
                    ))}
                  </span>
                </CardDescription>
              </CardContent>
              <CardFooter/>
            </Card>
            <Card className="w-full sm:w-6/12 p-3">
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>               
              <CardDescription>
                {data.description}
              </CardDescription>
              </CardContent>
              <CardFooter/>
            </Card>
          </div>
        </>
      )}
      {!data && (<NotFound />)}
    </>
   );
}
 
export default GameDetails;