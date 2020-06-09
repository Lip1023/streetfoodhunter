const convert = (from, to) => str => Buffer.from(str, from).toString(to);
const textToHex = convert('utf8', 'hex');
const enc_hex = require('crypto-js/enc-hex');
const hmac_sha256 = require('crypto-js/hmac-sha256');
require('dotenv').config();

module.exports = async (sso_obj, user_obj) => {
  let decodedSecret = await enc_hex.parse(process.env.COMMENTO_SSO_SECRET);
  let decodedToken = await enc_hex.parse(sso_obj.token);
  let expectedHMAC = hmac_sha256(decodedToken, decodedSecret);
  let stringHMAC = enc_hex.stringify(expectedHMAC);
  if (stringHMAC === sso_obj.hmac) {
    let payload = JSON.stringify({
        token: sso_obj.token,
        email: user_obj.email,
        name: user_obj.name,
    });
    let encodedHMAC = enc_hex.stringify(hmac_sha256(payload, decodedSecret));
    let encodedPayload = textToHex(payload);
    // res.status(302).redirect("https://commento.bouncingscout.com/api/oauth/sso/callback?payload=" + encodedPayload + "&hmac=" + encodedHMAC);
    return `https://commento.bouncingscout.com/api/oauth/sso/callback?payload=${encodedPayload}&hmac=${encodedHMAC}`;
  } else {
    throw new Error(400);
  }
}