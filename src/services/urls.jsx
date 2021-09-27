// http://3.126.51.235:5000/api/v1/resources/opera_instrument?instrument=pian
const baseDomain = 'http://3.126.51.235:5000/api/v1/resources';

const getCompozitori = `${baseDomain}/nume`;
const getOpereInstrumentUrl = `${baseDomain}/opera_instrument?instrument=`;
const getOpereStilUrl = `${baseDomain}/opera_stil?stil=`;

export { getCompozitori, getOpereInstrumentUrl, getOpereStilUrl };
