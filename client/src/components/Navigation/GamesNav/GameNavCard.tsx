import { NavLink } from "react-router-dom";
import { 
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
 } from "@/components/ui/card";
 import ResponsiveImage from "../../Utilities/ResponsiveImage";

type GameNavProps = {
  urlString: string;
  name: string;
  summary: string;
  imageUrl?: string;
  imageUrlShort?: string;
}

const GameNavCard = ({urlString, name, summary, imageUrlShort}:GameNavProps) => {
  
  return ( 
    <NavLink 
      style={({isActive}) => {return isActive ? {color: 'teal'} : {}}}
      to={`/games/${urlString}`}
    >
      <Card >
        <CardHeader>
          <ResponsiveImage src={imageUrlShort} alt={summary}/>
        </CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{summary}</CardDescription>
        <CardFooter/>
      </Card>
    </NavLink>
   );
}
 
export default GameNavCard;