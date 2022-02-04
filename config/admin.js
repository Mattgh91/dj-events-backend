module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '370badfa45fff1b5f8a9be90fe191712'),
  },
});
