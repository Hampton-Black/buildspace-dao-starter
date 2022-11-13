import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract(process.env.NFT_CONTRACT_ADDRESS, "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Mattereum Badge",
        description: "This NFT will give you access to MattereumDAO!",
        image: readFileSync("scripts/assets/mattereum_logo_gradient.svg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
