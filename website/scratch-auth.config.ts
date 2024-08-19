import { ScratchAuth_config } from "scratch-auth-react/src/dist/config";

// Perform necessary configurations within the setup file
const config: ScratchAuth_config = {
  redirect_url: `http://localhost:3000/api/auth`, // Required
  title: `Scratch Auth with TurboWarp`, // optional
  expiration: 30, // optional
};

export default config;
