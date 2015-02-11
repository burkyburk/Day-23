var expect = chai.expect;

describe('PieceView', function() {

	var myPiece = new PieceModel();

	it('should require a model', function() {
		expect(function() {
			var myPieceView = new PieceView();
		}).to.throw('PieceView requires a model.');
	});

	it('should have a render method', function() {
		var myPieceView = new PieceView({model: myPiece});
		expect(myPieceView.render).to.exist();
	});

	it('should render a piece of type=0 and rotation=0 correctly', function() {
		var myPieceModel = new PieceModel({
			type: 0,
			rotation: 0
		});
		var myPieceView = new PieceView({model: myPieceModel});
		myPieceView.render();

		var $box1 = myPieceView.$el.children().eq(0);

		expect($box1.css('top')).to.equal('60px');
		expect($box1.css('left')).to.equal('0px');

		var $box2 = myPieceView.$el.children().eq(1);

		expect($box2.css('top')).to.equal('60px');
		expect($box2.css('left')).to.equal('20px');
	});

	it('should render a piece of type=0 and rotation=1 correctly', function() {
		var myPieceModel = new PieceModel({
			type: 0,
			rotation: 1
		});
		var myPieceView = new PieceView({model: myPieceModel});
		myPieceView.render();

		var $box1 = myPieceView.$el.children().eq(0);

		expect($box1.css('top')).to.equal('0px');
		expect($box1.css('left')).to.equal('20px');

		var $box2 = myPieceView.$el.children().eq(1);

		expect($box2.css('top')).to.equal('20px');
		expect($box2.css('left')).to.equal('20px');
	});

	it('should render a piece of type=2 and rotation=1 correctly', function() {
		var myPieceModel = new PieceModel({
			type: 2,
			rotation: 1
		});
		var myPieceView = new PieceView({model: myPieceModel});
		myPieceView.render();

		var $box1 = myPieceView.$el.children().eq(0);

		expect($box1.css('top')).to.equal('0px');
		expect($box1.css('left')).to.equal('20px');

		var $box2 = myPieceView.$el.children().eq(1);

		expect($box2.css('top')).to.equal('20px');
		expect($box2.css('left')).to.equal('20px');
	});

	it('should render a piece of type=1 and rotation=0 correctly', function() {
		var myPieceModel = new PieceModel({
			type: 1,
			rotation: 0
		});
		var myPieceView = new PieceView({model: myPieceModel});
		myPieceView.render();

		var $box1 = myPieceView.$el.children().eq(0);

		expect($box1.css('top')).to.equal('0px');
		expect($box1.css('left')).to.equal('0px');

		var $box2 = myPieceView.$el.children().eq(1);

		expect($box2.css('top')).to.equal('0px');
		expect($box2.css('left')).to.equal('20px');
	});

	it('should render a piece of type=3 and rotation=0 correctly', function() {
		var myPieceModel = new PieceModel({
			type: 3,
			rotation: 0
		});
		var myPieceView = new PieceView({model: myPieceModel});
		myPieceView.render();

		var $box1 = myPieceView.$el.children().eq(0);

		expect($box1.css('top')).to.equal('20px');
		expect($box1.css('left')).to.equal('0px');

		var $box2 = myPieceView.$el.children().eq(1);

		expect($box2.css('top')).to.equal('40px');
		expect($box2.css('left')).to.equal('0px');
	});
});

describe('PieceView.$el', function() {

	var myPiece = new PieceModel();

	it('should have four elements inside', function() {
		var myPieceView = new PieceView({model: myPiece});
		expect(myPieceView.$el.children().length).to.equal(4);
	});

	it('should have four elements with a class of box inside', function() {
		var myPieceView = new PieceView({model: myPiece});
		expect(myPieceView.$el.children('.box').length).to.equal(4);
	});

	it('should have a class of piece', function() {
		var myPieceView = new PieceView({model: myPiece});
		expect(myPieceView.$el.hasClass('piece')).to.equal(true);
	});
});




describe('PieceModel', function() {

	var myPiece = new PieceModel();

	it('should be defined', function() {
		expect(PieceModel).to.exist();
	});

	it('should have a move method', function() {
		expect(myPiece.move).to.exist();
	});

	it('should have a width method', function() {
		expect(myPiece.width).to.exist();
	});

	it('should have a height method', function() {
		expect(myPiece.height).to.exist();
	});

	it('should have a rotate method', function() {
		expect(myPiece.rotate).to.exist();
	});

	it('should have a drop method', function() {
		expect(myPiece.drop).to.exist();
	});

	it('should have a left method', function() {
		expect(myPiece.left).to.exist();
	});

	it('should have a right method', function() {
		expect(myPiece.right).to.exist();
	});

	it('should have a top method', function() {
		expect(myPiece.top).to.exist();
	});

	it('should have a bottom method', function() {
		expect(myPiece.top).to.exist();
	});

	it('should have a iterateMatrix method', function() {
		expect(myPiece.iterateMatrix).to.exist();
	});

	it('should have a type property', function() {
		expect(myPiece.attributes.type).to.exist();
	});

	it('should have a rotation property', function() {
		expect(myPiece.attributes.rotation).to.exist();
	});

	it('should have a age property', function() {
		expect(myPiece.attributes.age).to.exist();
	});

	it('should have a left property', function() {
		expect(myPiece.attributes.left).to.exist();
	});

	it('should rotate correctly', function() {
		var myPieceToRotate = new PieceModel({
			age: 3,
			rotation: 1,
			left: 5,
			type: 2
		});
		myPieceToRotate.rotate();
		expect(myPieceToRotate.get('rotation')).to.equal(2);
		myPieceToRotate.rotate();
		expect(myPieceToRotate.get('rotation')).to.equal(3);
		myPieceToRotate.rotate();
		expect(myPieceToRotate.get('rotation')).to.equal(0);
		myPieceToRotate.rotate();
		expect(myPieceToRotate.get('rotation')).to.equal(1);
	});

	it('should rotate back to zero after reaching 3', function() {
		var myPieceToRotate = new PieceModel({
			age: 3,
			rotation: 3,
			left: 5,
			type: 2
		});
		myPieceToRotate.rotate();
		expect(myPieceToRotate.get('rotation')).to.equal(0);
	});

	it('should properly calculate the left value', function() {
		var piece1 = new PieceModel({
			type: 0,
			rotation: 0
		});
		expect(piece1.left()).to.equal(0);

		var piece2 = new PieceModel({
			type: 0,
			rotation: 1
		});
		expect(piece2.left()).to.equal(1);
	});

	it('should properly calculate the right value', function(){
		var piece1 = new PieceModel({
			type: 0,
			rotation: 2
		});

		expect(piece1.right()).to.equal(4);

		var piece1 = new PieceModel({
			type: 0,
			rotation: 1
		});

		expect(piece1.right()).to.equal(2);
	});

	it('should properly calulate the bottom value', function() {
		var peice1 = new PieceModel({
			type: 0,
			rotation: 3
		});

		expect(peice1.bottom()).to.equal(4);

		var peice1 = new PieceModel({
			type: 1,
			rotation: 3
		});

		expect(peice1.bottom()).to.equal(2);
	});

	it('should properly calculate the top value', function() {
		var piece1 = new PieceModel({
			type: 0,
			rotation: 1
		});
		expect(piece1.top()).to.equal(0);

		var piece1 = new PieceModel({
			type: 1,
			rotation: 1
		});
		expect(piece1.top()).to.equal(0);

		var piece1 = new PieceModel({
			type: 2,
			rotation: 0
		});
		expect(piece1.top()).to.equal(0);
	});


	it('should calculate width correctly', function() {
		expect(myPiece.width()).to.equal(4);

		var piece3 = new PieceModel({
			type: 1
		});

		expect(piece3.width()).to.equal(2);

		var piece4 = new PieceModel({
			type: 0,
			rotation: 2
		});

		expect(piece4.width()).to.equal(4);
	});

	it('should calculate height properly', function() {
		expect(myPiece.height()).to.equal(4);

		var piece5 = new PieceModel({
			type: 0,
			rotation: 1
		});
		expect(piece5.height()).to.equal(4);

		var piece6 = new PieceModel({
			type: 1,
			rotation: 1
		});
		expect(piece6.height()).to.equal(2);

	});

	it('should be able to calculate move properly', function(){
		var piece1 = new PieceModel({
			type: 0,
			rotation: 1
		});

		piece1.move(2);
		expect(piece1.attributes.left).to.equal(2);
		piece1.move(6);
		expect(piece1.attributes.left).to.equal(8);
		piece1.move(-4);
		expect(piece1.attributes.left).to.equal(4);
	});

	it('should calculate drop properly', function() {
		var piece1 = new PieceModel({
			type: 0,
			rotation: 0
		});

		expect(piece1.attributes.age).to.equal(0);
		piece1.drop();
		expect(piece1.attributes.age).to.equal(1);
		piece1.drop();
		expect(piece1.attributes.age).to.equal(2);
		piece1.drop();
	});

	it('should be able to iterative through the matrix properly', function(){
		myPiece.iterateMatrix(function(x,y) {
			expect(Constant.PIECES[0][0][y][x]).to.equal(1);
		});
	});
});

