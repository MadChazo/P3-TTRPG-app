# P3-TTRPG-app

// const startApolloServer = async () => {
//   await server.start();
  
//   app.use(express.urlencoded({ extended: false }));
//   app.use(express.json());
  
//   app.use('/graphql', expressMiddleware(server));

//   db.once('open', () => {
//     app.listen(PORT, () => {
//       console.log(`API server running on port ${PORT}!`);
//       console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
//     });
//   });
// };