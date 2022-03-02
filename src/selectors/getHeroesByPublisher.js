import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  const validPublicher = ["DC Comics", "Marvel Comics"];

  if (!validPublicher.includes(publisher)) {
    throw new Error(`${publisher} is no a valid publisher`);
  }
  
  return heroes.filter((hero) => hero.publisher === publisher);
};
