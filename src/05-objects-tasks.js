/* eslint-disable no-restricted-syntax */
/* ************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object        *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the rectangle object with width and height parameters and getArea() method
 *
 * @param {number} width
 * @param {number} height
 * @return {Object}
 *
 * @example
 *    const r = new Rectangle(10,20);
 *    console.log(r.width);       // => 10
 *    console.log(r.height);      // => 20
 *    console.log(r.getArea());   // => 200
 */
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  // eslint-disable-next-line func-names
  this.getArea = function () {
    return this.width * this.height;
  };
}


/**
 * Returns the JSON representation of specified object
 *
 * @param {object} obj
 * @return {string}
 *
 * @example
 *    [1,2,3]   =>  '[1,2,3]'
 *    { width: 10, height : 20 } => '{"height":10,"width":20}'
 */
function getJSON(obj) {
  return JSON.stringify(obj);
}


/**
 * Returns the object of specified type from JSON representation
 *
 * @param {Object} proto
 * @param {string} json
 * @return {object}
 *
 * @example
 *    const r = fromJSON(Circle.prototype, '{"radius":10}');
 *
 */
function fromJSON(proto, json) {
  const parsedJson = JSON.parse(json);
  const object = Object.create(proto);
  // eslint-disable-next-line guard-for-in
  for (const key in parsedJson) {
    object[key] = parsedJson[key];
  }
  return object;
}


/**
 * Css selectors builder
 *
 * Each complex selector can consists of type, id, class, attribute, pseudo-class
 * and pseudo-element selectors:
 *
 *    element#id.class[attr]:pseudoClass::pseudoElement
 *              \----/\----/\----------/
 *              Can be several occurrences
 *
 * All types of selectors can be combined using the combination ' ','+','~','>' .
 *
 * The task is to design a single class, independent classes or classes hierarchy
 * and implement the functionality to build the css selectors using the provided cssSelectorBuilder.
 * Each selector should have the stringify() method to output the string representation
 * according to css specification.
 *
 * Provided cssSelectorBuilder should be used as facade only to create your own classes,
 * for example the first method of cssSelectorBuilder can be like this:
 *   element: function(value) {
 *       return new MySuperBaseElementSelector(...)...
 *   },
 *
 * The design of class(es) is totally up to you, but try to make it as simple,
 * clear and readable as possible.
 *
 * @example
 *
 *  const builder = cssSelectorBuilder;
 *
 *  builder.id('main').class('container').class('editable').stringify()
 *    => '#main.container.editable'
 *
 *  builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify()
 *    => 'a[href$=".png"]:focus'
 *
 *  builder.combine(
 *      builder.element('div').id('main').class('container').class('draggable'),
 *      '+',
 *      builder.combine(
 *          builder.element('table').id('data'),
 *          '~',
 *           builder.combine(
 *               builder.element('tr').pseudoClass('nth-of-type(even)'),
 *               ' ',
 *               builder.element('td').pseudoClass('nth-of-type(even)')
 *           )
 *      )
 *  ).stringify()
 *    => 'div#main.container.draggable + table#data ~ tr:nth-of-type(even)   td:nth-of-type(even)'
 *
 *  For more examples see unit tests.
 */
const cssSelectorBuilder = {
  element(/* value */) {
    throw new Error('Not implemented');
  },

  id(/* value */) {
    throw new Error('Not implemented');
  },

  class(/* value */) {
    throw new Error('Not implemented');
  },

  attr(/* value */) {
    throw new Error('Not implemented');
  },

  pseudoClass(/* value */) {
    throw new Error('Not implemented');
  },

  pseudoElement(/* value */) {
    throw new Error('Not implemented');
  },

  combine(/* selector1, combinator, selector2 */) {
    throw new Error('Not implemented');
  },
};

// id: function(value) {
// return new IDSelector(value);
// },

// class: function(value) {
// return new ClassSelector(value);
// },

// attr: function(value) {
// return new AttributeSelector(value);
// },

// pseudoClass: function(value) {
// return new PseudoClassSelector(value);
// },

// pseudoElement: function(value) {
// return new PseudoElementSelector(value);
// },

// combine: function(selector1, combinator, selector2) {
// return new CombinedSelector(selector1, combinator, selector2);
// },
// };

// class Selector {
// constructor() {}

// stringify() {
// throw new Error('Not implemented');
// }
// }

// class ElementSelector extends Selector {
// constructor(element) {
// super();
// this.element = element;
// }

// stringify() {
// return this.element;
// }
// }

// class IDSelector extends Selector {
// constructor(id) {
// super();
// this.id = id;
// }

// stringify() {
// return "#" + this.id;
// }
// }

// class ClassSelector extends Selector {
// constructor(className) {
// super();
// this.className = className;
// }

// stringify() {
// return "." + this.className;
// }
// }

// class AttributeSelector extends Selector {
// constructor(attr) {
// super();
// this.attr
// class Selector {
//   constructor(value) {
//   this.value = value;
//   }

//   stringify() {
//   return this.value;
//   }
//   }

//   class ElementSelector extends Selector {
//   id(id) {
//   return new IDSelector(${this.value}#${id});
//   }

//   class(className) {
//   return new ClassSelector(${this.value}.${className});
//   }

//   attr(attr) {
//   return new AttributeSelector(${this.value}[${attr}]);
//   }

//   pseudoClass(pseudoClass) {
//   return new PseudoClassSelector(${this.value}:${pseudoClass});
//   }

//   pseudoElement(pseudoElement) {
//   return new PseudoElementSelector(${this.value}::${pseudoElement});
//   }
//   }

//   class IDSelector extends Selector {
//   class(className) {
//   return new ClassSelector(${this.value}.${className});
//   }

//   attr(attr) {
//   return new AttributeSelector(${this.value}[${attr}]);
//   }

//   pseudoClass(pseudoClass) {
//   return new PseudoClassSelector(${this.value}:${pseudoClass});
//   }

//   pseudoElement(pseudoElement) {
//   return new PseudoElementSelector(${this.value}::${pseudoElement});
//   }
//   }
//   class ClassSelector extends Selector {
//     constructor(className) {
//     super();
//     this.className = className;
//     }
//     stringify() {
//         return `.${this.className}`;
//     }
//     }

//     class AttributeSelector extends Selector {
//     constructor(attr) {
//     super();
//     this.attr = attr;
//     }
//     stringify() {
//         return `[${this.attr}]`;
//     }
//     }

//     class PseudoClassSelector extends Selector {
//     constructor(pseudoClass) {
//     super();
//     this.pseudoClass = pseudoClass;
//     }
//     stringify() {
//         return `:${this.pseudoClass}`;
//     }
//     }

//     class PseudoElementSelector extends Selector {
//     constructor(pseudoElement) {
//     super();
//     this.pseudoElement = pseudoElement;
//     }
//     stringify() {
//         return `::${this.pseudoElement}`;
//     }
//     }

//     class CombinedSelector extends Selector {
//     constructor(selector1, combinator, selector2) {
//     super();
//     this.selector1 = selector1;
//     this.combinator = combinator;
//     this.selector2 = selector2;
//     }
//     stringify() {
//         return `${this.selector1.stringify()} ${this.combinator} ${this.selector2.stringify()}`;
//     }
//     }

//     const cssSelectorBuilder = {
//     element: function(value) {
//     return new ElementSelector(value);
//     },
//     id: function(value) {
//     return new IDSelector(value);
//     },
//     class: function(value) {
//     return new ClassSelector(value);
//     },
//     attr: function(value) {
//     return new AttributeSelector(value);
//     },
//     pseudoClass: function(value) {
//     return new PseudoClassSelector(value);
//     },
//     pseudoElement: function(value) {
//     return new PseudoElementSelector(value);
//     },
//     combine: function(selector1, combinator, selector2) {
//     return new CombinedSelector(selector1, combinator, selector2);
//     },
//     };

module.exports = {
  Rectangle,
  getJSON,
  fromJSON,
  cssSelectorBuilder,
};
