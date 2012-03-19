describe('factory', function () {
  describe('#DataDash({noMethods: true})', function () {
    var dataDash = DataDash({noMethods: true});
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

describe('String as name', function () {
  describe('#$("#test").dataDash', function () {
    it('Should set/get strings', function () {
      $('#test').dataDash('asdf', 'qwert');
      expect($('#test').dataDash('asdf')[0]).to.equal('qwert');
    });
    it('Should set/get numbers', function () {
      $('#test').dataDash('num', 42);
      expect($('#test').dataDash('num')[0]).to.equal(42);
    });
    it('Should set/get objects', function () {
      $('#test').dataDash('obj', {foo: 'blah', bar: 123, nested: {asdf: 'test'}});
      expect($('#test').dataDash('obj')[0]).to.eql({
        foo: 'blah',
        bar: 123,
        nested: {asdf: 'test'}
      });
    });
    it('Should set/get arrays', function () {
      $('#test').dataDash('arr', ['asdf', 1234, ['netsted', 4321]]);
      expect($('#test').dataDash('arr')[0]).to.eql(['asdf', 1234, ['netsted', 4321]]);
    });
    it('Should get everything', function () {
      expect($('#test').dataDash()[0]).to.eql({
        asdf: 'qwert',
        num: 42,
        obj:{foo: 'blah', bar: 123, nested: {asdf: 'test'}},
        arr:['asdf', 1234, ['netsted', 4321]]
      });
    });
  });
});

describe('Setting objects', function () {
  describe('#$("#obj").dataDash()', function () {
    it('Should set an entire object', function () {
      var obj = {key: 'value', stuff: 3333, inside: ['blah', 16], hmm: {wee: 'asdf'}};
      $('#obj').dataDash(obj);
      expect($('#obj').dataDash()[0]).to.eql(obj);
    });
  });
});

describe('Setting by mapping', function () {
  describe('#$(".map").dataDash("str", function (ele, idx, array) {};)', function () {
    it('Should map a over a set of tags', function () {
      var maper = function (ele, idx, sel) {
        expect(ele).to.eql(sel[idx]);
        expect(ele).to.eql(this);
        return 'asdf' + idx;
      };
      $('.map').dataDash('asdf', maper);
      expect($('.map').dataDash('asdf')).to.eql([
        'asdf0',
        'asdf1'
        ]);
    });
  });
});

