var env;

beforeEach(function() {
  env = sinon.sandbox.create();
});

afterEach((function() {
  env.restore();
}));