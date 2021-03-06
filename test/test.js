const getNatType = require("nat-type-identifier");

const params = { logsEnabled: true, sampleCount: 20, stunHost: "stun.sipgate.net" };

const whatsMyNat = async () => {
  const result = await getNatType(params);
  console.log("Result: ", result); // Outputs NAT type
  return result;
};

whatsMyNat();
