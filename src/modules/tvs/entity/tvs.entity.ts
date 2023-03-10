import {
  ImageInterface,
  VideoInterface,
} from '../../../common/interfaces/append_to_response.interface';

export interface TV {
  poster_path?: string;
  popularity?: number;
  id?: number;
  backdrop_path?: string;
  vote_average?: number;
  overview?: string;
  first_air_date?: string;
  origin_country?: string[];
  genre_ids?: number[];
  original_language?: string;
  vote_count?: number;
  name?: string;
  original_name?: string;
  media_type?: string;
  videos?: { results: VideoInterface[] };
  images?: { backdrops: ImageInterface[] };
}
