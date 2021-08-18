const data = require("../data/projects.json");

module.exports = {
  test: (req, res) => {
    var { view } = req.query;

    if (view === "all") {
      return res.send(data);
    }

    if (view === "ecommerce") {
      var ecommerce = data.filter(
        (e) => e.type.toLowerCase() === view.toLowerCase()
      );
      return res.send(ecommerce);
    }

    if (view === "blog") {
      var blog = data.filter(
        (e) => e.type.toLowerCase() === view.toLowerCase()
      );
      return res.send(blog);
    }

    if (view === "social network") {
      var social_network = data.filter(
        (e) => e.type.toLowerCase() === view.toLowerCase()
      );
      return res.send(social_network);
    }

    if (view === "utility") {
      var utility = data.filter(
        (e) => e.type.toLowerCase() === view.toLowerCase()
      );
      return res.send(utility);
    }

    if (view === "music") {
      var music = data.filter(
        (e) => e.type.toLowerCase() === view.toLowerCase()
      );
      return res.send(music);
    }

    return res.send(data);
  },
};
