describe('factory', function () {
  describe('#DataDash({noMethods: true})', function () {
    dataDash = DataDash({noMethods: true});
    it('should not add method to jQuery', function () {
      expect(window.jQuery.fn.dataDash).to.not.exist;
    });
  });
  describe('#DataDash()', function () {
    dataDash = DataDash();
    it('should be a function', function () {
      expect(dataDash).to.be.a('function');
    });
    it('should add method to jQuery', function () {
      expect(window.jQuery.fn.dataDash).to.be.a('function');
    });
  });
  describe('#DataDash({prefix: "foo"})', function () {
    dataDashFoo = DataDash({prefix: "foo"});
    it('should be a function', function () {
      expect(dataDashFoo).to.be.a('function');
    });
    it('should add method to jQuery', function () {
      expect(window.jQuery.fn.dataDashFoo).to.be.a('function');
    });
  });
});
