Package.describe({
  summary: "Exposing Internal Meteor Apis to Hack Meteor Easily",
  version: "1.4.1",
  git: "https://github.com/lamhieu-vk/meteorx.git",
  name: "meteorhacks:meteorx"
});

Package.onUse(function(api) {
  configurePackage(api);
  api.export(["MeteorX"]);
});

Package.onTest(function(api) {
  configurePackage(api);
  api.use(["tinytest"], "server");
  api.add_files(["test/server.js"], "server");
});

function configurePackage(api) {
  api.versionsFrom("METEOR@1.0");
  api.use(["random", "mongo"], "server");
  api.add_files(["src/livedata.js", "src/mongo-livedata.js", "src/server.js"], "server");
}
