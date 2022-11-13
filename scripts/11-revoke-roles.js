import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    const token = await sdk.getContract(process.env.TOKEN_CONTRACT_ADDRESS, "token");
    // Log the current roles.
    const allRoles = await token.roles.getAll();

    console.log("👀 Roles that exist right now:", allRoles);

    // Revoke all the superpowers your wallet had over the ERC-20 contract.
    await token.roles.revoke("admin", process.env.WALLET_ADDRESS);
    await token.roles.revoke("minter", process.env.WALLET_ADDRESS);

    console.log(
      "🎉 Roles after revoking ourselves",
      await token.roles.getAll()
    );
    console.log("✅ Successfully revoked our superpowers from the ERC-20 contract");

  } catch (error) {
    console.error("Failed to revoke ourselves from the DAO treasury", error);
  }
})();
