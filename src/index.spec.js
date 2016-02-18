describe('hello', function() {
  var sut;
  var message;

  beforeEach(function() {
    sut = hello;
    message = 'hello';

    env.stub(console, 'log');
  });

  it('should log message to console', function() {
    sut(message);

    console.log.should.calledWith(message);
  });
});