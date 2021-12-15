import superFetch from "node-superfetch";

const getRequest = async (endpoint: string) => {
  const response: any = await superFetch.get(endpoint);
  if (response.ok) {
    return response;
  }

  throw new Error(`Failed to fetch ${endpoint}`);
};

/**
 * Get a random of a joke!
 *
 */
export const joke = async () => {
  return getRequest("https://sorrowapi.glitch.me/api/jokes").then((res) => res.body.joke);
};

/**
 * Get a random roast!
 *
 */
export const roast = async () => {
  return getRequest("https://sorrowapi.glitch.me/api/roasts").then(
    (res) => res.body.roast
  );
};

/**
 * Get a random image of a animegirl!
 *
 */
export const animegirl = async () => {
  return getRequest(
    "https://sorrowapi.glitch.me/api/animegirls"
  ).then((res) => res.body.animegirls);
};

/**
 * Get a random image of a animeboy!
 *
 */
export const animeboy = async () => {
  return getRequest("https://sorrowapi.glitch.me/api/animeboys").then(
    (res) => res.body.animeboys
  );
};

/**
 * Get a random image of a fox!
 *
 */
export const fox = async () => {
  return getRequest("https://randomfox.ca/floof/").then(
    (res) => res.body.image
  );
};

/**
 * Get a random image of a lizard!
 *
 */
export const lizard = async () => {
  return getRequest("https://nekos.life/api/v2/img/lizard").then(
    (res) => res.body.url
  );
};

/**
 * Get a random image of a shiba!
 *
 */
export const shiba = async () => {
  return getRequest("http://shibe.online/api/shibes").then(
    (res) => res.body[0]
  );
};

/**
 * Get a random image of a koala!
 *
 */
export const koala = async () => {
  return getRequest("https://some-random-api.ml/img/koala").then(
    (res) => res.body.link
  );
};

/**
 * Get a random image of a panda!
 *
 */
export const panda = async () => {
  return getRequest("https://some-random-api.ml/img/panda").then(
    (res) => res.body.link
  );
};
