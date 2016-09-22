/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _tree = __webpack_require__(2);

	console.log('empty: ' + _tree.empty);

	var leaf = _tree.empty.insert(15);
	console.log('leaf: ' + leaf);

	var tree = leaf.insert(29).insert(12).insert(5).insert(-3).insert(4).insert(9).insert(18);

	console.log('tree: ' + tree);

	console.log('tree (as list): ' + tree.toList());

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// [1, 2, 3]
	// (1, [2, 3])
	// (1, (2, (3, Nil)))
	// recursive list decomposition

	var List = function () {
	  function List() {
	    _classCallCheck(this, List);
	  }

	  _createClass(List, [{
	    key: 'insert',
	    value: function insert(elem) {
	      var i = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	      if (i < 0) {
	        return this;
	      } else if (i === 0) {
	        return cons(elem, this);
	      } else {
	        throw new TypeError('Cannot call `insert` with i > 0 on an abstract list');
	      }
	    }
	  }]);

	  return List;
	}();

	// non-empty list


	var Cons = exports.Cons = function (_List) {
	  _inherits(Cons, _List);

	  function Cons(_head, _tail) {
	    _classCallCheck(this, Cons);

	    var _this = _possibleConstructorReturn(this, (Cons.__proto__ || Object.getPrototypeOf(Cons)).call(this));

	    _this._head = _head;
	    _this._tail = _tail;
	    return _this;
	  }

	  _createClass(Cons, [{
	    key: 'atIndex',
	    value: function atIndex(i) {
	      if (i < 0) {
	        return undefined;
	      } else if (i > 0) {
	        return this.tail.atIndex(i - 1);
	      } else {
	        return this.head;
	      }
	    }
	  }, {
	    key: 'insert',
	    value: function insert(elem) {
	      var i = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	      if (i > 0) {
	        return cons(this.head, this.tail.insert(elem, i - 1));
	      } else {
	        return _get(Cons.prototype.__proto__ || Object.getPrototypeOf(Cons.prototype), 'insert', this).call(this, elem, i);
	      }
	    }
	  }, {
	    key: 'concat',
	    value: function concat(that) {
	      return cons(this.head, this.tail.concat(that));
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return '(' + this.head + ', ' + this.tail + ')';
	    }
	  }, {
	    key: 'head',
	    get: function get() {
	      return this._head;
	    }
	  }, {
	    key: 'tail',
	    get: function get() {
	      return this._tail;
	    }
	  }, {
	    key: 'length',
	    get: function get() {
	      return 1 + this.tail.length;
	    }
	  }]);

	  return Cons;
	}(List);

	// empty list


	var Nil = exports.Nil = function (_List2) {
	  _inherits(Nil, _List2);

	  function Nil() {
	    _classCallCheck(this, Nil);

	    return _possibleConstructorReturn(this, (Nil.__proto__ || Object.getPrototypeOf(Nil)).apply(this, arguments));
	  }

	  _createClass(Nil, [{
	    key: 'atIndex',
	    value: function atIndex(i) {
	      return undefined;
	    }
	  }, {
	    key: 'insert',
	    value: function insert(elem) {
	      var i = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	      if (i > 0) {
	        return cons(undefined, nil.insert(elem, i - 1));
	      } else {
	        return _get(Nil.prototype.__proto__ || Object.getPrototypeOf(Nil.prototype), 'insert', this).call(this, elem, i);
	      }
	    }
	  }, {
	    key: 'concat',
	    value: function concat(that) {
	      return that;
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return '∅';
	    }
	  }, {
	    key: 'head',
	    get: function get() {
	      throw new TypeError('Cannot call `head` on an empty list');
	    }
	  }, {
	    key: 'tail',
	    get: function get() {
	      throw new TypeError('Cannot call `tail` on an empty list');
	    }
	  }, {
	    key: 'length',
	    get: function get() {
	      return 0;
	    }
	  }]);

	  return Nil;
	}(List);

	var cons = exports.cons = function cons(head, tail) {
	  return new Cons(head, tail);
	};
	var nil = exports.nil = new Nil();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.empty = exports.node = exports.Node = exports.Empty = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _list = __webpack_require__(1);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Tree = function Tree() {
	  _classCallCheck(this, Tree);
	};

	var Empty = exports.Empty = function (_Tree) {
	  _inherits(Empty, _Tree);

	  function Empty() {
	    _classCallCheck(this, Empty);

	    return _possibleConstructorReturn(this, (Empty.__proto__ || Object.getPrototypeOf(Empty)).apply(this, arguments));
	  }

	  _createClass(Empty, [{
	    key: 'insert',
	    value: function insert(n) {
	      return node(n);
	    }
	  }, {
	    key: 'toList',
	    value: function toList() {
	      return _list.nil;
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return '∅';
	    }
	  }, {
	    key: 'value',
	    get: function get() {
	      throw new TypeError('Cannot call `value` on an empty tree');
	    }
	  }, {
	    key: 'left',
	    get: function get() {
	      throw new TypeError('Cannot call `left` on an empty tree');
	    }
	  }, {
	    key: 'right',
	    get: function get() {
	      throw new TypeError('Cannot call `right` on an empty tree');
	    }
	  }, {
	    key: 'size',
	    get: function get() {
	      return 0;
	    }
	  }]);

	  return Empty;
	}(Tree);

	var Node = exports.Node = function (_Tree2) {
	  _inherits(Node, _Tree2);

	  function Node(_value) {
	    var _left = arguments.length <= 1 || arguments[1] === undefined ? empty : arguments[1];

	    var _right = arguments.length <= 2 || arguments[2] === undefined ? empty : arguments[2];

	    _classCallCheck(this, Node);

	    var _this2 = _possibleConstructorReturn(this, (Node.__proto__ || Object.getPrototypeOf(Node)).call(this));

	    _this2._value = _value;
	    _this2._left = _left;
	    _this2._right = _right;
	    return _this2;
	  }

	  _createClass(Node, [{
	    key: 'insert',
	    value: function insert(n) {
	      if (n === this.value) {
	        return this;
	      } else if (n < this.value) {
	        return node(this.value, this.left.insert(n), this.right);
	      } else if (n > this.value) {
	        return node(this.value, this.left, this.right.insert(n));
	      }
	    }
	  }, {
	    key: 'toList',
	    value: function toList() {
	      return this.left.toList().concat((0, _list.cons)(this.value, this.right.toList()));
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return '(' + this.left + ', ' + this.value + ', ' + this.right + ')';
	    }
	  }, {
	    key: 'value',
	    get: function get() {
	      return this._value;
	    }
	  }, {
	    key: 'left',
	    get: function get() {
	      return this._left;
	    }
	  }, {
	    key: 'right',
	    get: function get() {
	      return this._right;
	    }
	  }, {
	    key: 'size',
	    get: function get() {
	      return 1 + this.left.size + this.right.size;
	    }
	  }]);

	  return Node;
	}(Tree);

	var node = exports.node = function node(value, left, right) {
	  return new Node(value, left, right);
	};
	var empty = exports.empty = new Empty();

/***/ }
/******/ ]);