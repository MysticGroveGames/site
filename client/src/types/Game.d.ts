import { ObjectId } from 'mongodb';

export type GameType = {
  name: string;
  displayName: string;
  description: string;
  summary: string;
  playTimePerPerson?: number;
  players?: {
    min: number;
    max: number;
  };
  _id: ObjectId;
  featured?: boolean;
  imageUrl?: string;
  imageUrlShort?: string;
  gameTags: string[];
}