const baseDomain = 'https://3.126.51.235:5000/api/v1/resources';

const getCompozitori = `${baseDomain}/nume`;
const getCompozitorBio = `${baseDomain}/bioRo?nume=`;
const getOpereInstrumentUrl = `${baseDomain}/opera_instrument?instrument=`;
const getOpereStilUrl = `${baseDomain}/opera_stil?stil=`;
const findUrl = `${baseDomain}/list_findings?keyword=`;
const getStiluriMuzicaleUrl = `${baseDomain}/stiluri`;

export {
  getCompozitori,
  getCompozitorBio,
  getOpereInstrumentUrl,
  getOpereStilUrl,
  findUrl,
  getStiluriMuzicaleUrl,
};
