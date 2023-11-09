export default ({ router }) => {
  router.beforeEach((to, from, next) => {
    // to.path = encodeURI(to.path);
    // from.path = encodeURI(from.path);
    next();
  });
};
