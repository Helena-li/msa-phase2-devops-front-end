export interface IUserInput {
  SearchName: string | null;
  Type: string | null;
}

export interface IRestaurantState {
  id: number | null;
  name: string | null;
  address: string | null;
  mapLink: string | null;
  pictureLink: string | null;
  rate: number | null;
}
