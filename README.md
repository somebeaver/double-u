# __ ("double-u")

`__` is a jQuery inspired library for DOM manipulations and
general helpers made for the web UI of Hydra clients. It accepts any
CSS3 seclector, Element (DOM Node), DocumentFragment, NodeList, or array of
NodeList's. It returns an instance of `__Object`, which is the class that
contains the helper methods.

By design, it does not accept other `__Object` instances as the selector. This
is to enforce certain chaining behaviours.

The `__Object` has two notable properties:

  - **`els`**: ("elements") property which contains an array of Element's that were
    found with the given selector. An empty `els` array means that the given
    selector did not match anything in the DOM (same as checking the `length'
    property of a jQuery object).

  - **`selector`**: The selector being used for this instance. Keep in mind that
    the `selector' can change when chaining methods.

Most helper methods will work as expected when the `__Object` has multiple
Elements in its `.els` array, but some are designed specifically for when there
is only a single Element in the array. Depending on the method, `__()` may throw a
warning, error, or remain silent. Other methods are designed to work with no
elements in the DOM. Each method specifies what is expects.

Examples:

Most methods expect some sort of selector: 
```javascript
// add multiple classes to any number of matches Elements
__('.foo').addClass('bar', 'baz')

// update an Element attribute
__('#foo.bar').attr('data-items', ['an', 'array', 'of', 'things'])

// working with Element references
__(el).find('.foo').each((el) => {})
__([el, el2]).parents('#foo').addClass('bar')

// some methods are designed to be used without a selector
__().convertSecondsToHHMMSS(125)
__().getHtmlFromFile('/path/on/local/disk.html')
__().randomStr()

// some take specfic data
__(['dog', 'cat']).shuffle()
```