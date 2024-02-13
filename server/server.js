const express = require("express");
<<<<<<< HEAD
const { ApolloServer } = require("apollo-server-express");
const { expressMiddleware } = require("@apollo/server/express4");
const path = require("path");
const { authMiddleware } = require("./utils/auth");
=======
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const { authMiddleware } = require("./utils/auth");

>>>>>>> d8ca56dec130e7f411888d1645824fdf5ac40068
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

const startServer = async () => {
  await server.start();
<<<<<<< HEAD
  server.applyMiddleware({ app, path: "/graphql" });

  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: authMiddleware,
    })
  );

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")));

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/dist/index.html"));
    });
  }
=======

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use("/graphql", expressMiddleware(server));
>>>>>>> d8ca56dec130e7f411888d1645824fdf5ac40068

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

startServer();
