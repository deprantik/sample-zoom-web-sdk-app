const crypto = require('crypto');

const genarateSignature = () => {
  const role = 0;
  const timestamp = new Date().getTime() - 30000;
  const platformId = "<WebinarId>";   //webinarId
  const platformPassword = "<WebinarPassword>";  //webinarPassword
  const zoomApiKey = "<ZoomAPIKey>";  //Zoom api key
  const zoomApiSecret = '<ZoomAPISecret>';  //Zoom api secret
  const msg = Buffer.from(zoomApiKey + platformId + timestamp + role).toString('base64');
  const hash = crypto.createHmac('sha256', zoomApiSecret).update(msg).digest('base64');
  const signature = Buffer.from(`${zoomApiKey}.${platformId}.${timestamp}.${role}.${hash}`).toString('base64');

  return {
    signature,
    platformId,
    zoomApiKey,
    platformPassword,
  };
}

export default genarateSignature;