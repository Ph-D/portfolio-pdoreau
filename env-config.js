const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod
    ? 'https://philippedoreau.herokuapp.com'
    : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://philippedoreau.herokuapp.com',
  'process.env.CLIENT_ID': 'Bye2XDc5GUm2YcQY5rmXfLgJD3OxVzyB',
};
