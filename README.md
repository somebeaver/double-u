# __ ("double-u")

*To see double-u in action, check out the
[Cardinal apps](https://cardinalapps.xyz).* 

`__` is a jQuery-inspired library for DOM manipulations and general helpers made
for the UI of Cardinal client apps. It accepts any CSS3 seclector, Element (DOM
Node), DocumentFragment, NodeList, or array of such things. It returns an
instance of `__Object` ("double-u object"), which is the class that contains the
helper methods.

## Notable Properties

There are two especially notable `__Object` properties:

  - **`els`**: ("elements") property which contains an array of Elements that were
    found with the given selector. An empty `els` array means that the given
    selector did not match anything in the DOM (same as checking the `length'
    property of a jQuery object).

  - **`selector`**: The selector being used for this instance. Keep in mind that
    `selector` can change when chaining methods.

Most helper methods will work as expected when the `__Object` has multiple
Elements in its `.els` array, but some are designed specifically for when there
is only a single Element in the array. Depending on the method, `__()` may throw a
warning, error, or remain silent. Other methods are designed to work with no
elements in the DOM. Each method specifies what is expects.

## Initializing

```javascript
// using a CSS selector
let items = __('.item')

if (items.els.length) {
  // Elements were found in the DOM
} else {
  // nothing was found in the DOM
}

// using a single Element
let app = document.querySelector('#app')
__(app).addClass('loaded')

// using multiple Elements
let thumbs = document.querySelectorAll('.thumb')
__(thumbs).addClass('show')

// using a DocumentFragment
let template = __('#app').getTemplate('.lock-screen')
__(template).find('.error-message').show()

// can also be initialized with nothing
let shuffled = __().shuffle(['dog', 'cat'])
```

## Chaining

All methods are chainable unless otherwise specified.

```javascript
__('.foo').find('.bar').addClass('loading').attr('data-message', msg).each((el) => {})
```

## DOM Interactions

Note that this is a summary; all methods have more detailed documentation
available to IDE's.

### `each()`

Iterate over all matched Elements.

```javascript
__('.items').each((item) => {})
```

### `el()`

Return the first matched Element. Warns when more than 1 Element was matched.

```javascript
let app = __('#app').el()
```

### `on()`

Register an event handler. If Elements are matched, the event handler will be set
directly on them, otherwise it will automatically be delegated.

*Tip:* Do not delegate to the `document`, you will thank yourself when you need
to reload components that register event handlers.

```javascript
// register on Element(s), or automatically delegate
__('.thumbnail').on('click', (event) => {})

// manually delegate to parentEl, even if .thumbnail is found
__('.thumbnail').on('click', parentEl, (event) => {})
```

### `off()`

Remove an event handler.

```javascript
const handler = (event) => {}
__('.thumbnail').on('click', handler)
__('.thumbnail').off('click', handler)
```

### `addClass()`

Add one or more classes to all matched Elements.

```javascript
__('.item').addClass('loading')
__('.box').addClass('red', 'large')
```

### `removeClass()`

Remove one or more classes from all matched Elements.

```javascript
__('.item').removeClass('loading')
__('.box').removeClass('red', 'large')
```

### `toggleClass()`

Toggle one or more classes on all matched Elements.

```javascript
__('.item').toggleClass('loading')
__('.box').toggleClass('red', 'large')
```

### `hasClass()`

Checks if *any* of the matched Elements have *any* the given classes.

```javascript
let isLoading = __('.item').hasClass('loading')
```

### `attr()`

Gets, sets, or updates any attribute on all matched Elements. Not chainable when
getting a value.

```javascript
__('.item').attr('data-message', 'Please wait...')
let message = __('.item').attr('data-message')

// will return an array when multiple Elements are matched
let multiple = __('div').attr('class')
```

### `hasAttr()`

Returns a boolean indicating whether *all* matched Elements have the given
attribute. Not chainable.

```javascript
let isDisabled = __('.item').hasAttr('disabled')
```

### `removeAttr()`

Removes an attribute from all matched Elements.

```javascript
__('.item').removeAttr('disabled')
```

### `watchAttrs()`

Creates a MutationObserver that watches one or more attributes on each of the
matched Elements.

```javascript
__('#app').watchAttrs(['disabled', 'data-message'], (mutations) => {
  // either of the two attributes was changed
})
```

### `value()`

Same as [attr](#attr) but for input values.

```javascript
let question = __('[name="question"]').value()
```

### `css()`

Get computed CSS styles, or set inline CSS on all matched Elements.

```javascript
// get a computed style
let width = __('.item').css('width')

// sets inline CSS
__('.item').css({
  'width': 100,
  'background-color': 'blue'
})
```

### `find()`

Returns a new `__Object` instance with the matched Elements.

```javascript
let children = __('.parent').find('.child')
```

### `firstChild()`

Returns the first child of each matched Element.

```javascript
let allFirstChildren = __('.parents').firstChild()
```

### `lastChild()`

Returns the last child of each matched Element.

```javascript
let allLastChildren = __('.parents').lastChild()
```

### `parents()`

Returns all parent Elements, optionally filtered by CSS selector.

```javascript
let parents = __('.child').parents('.parent')
```

### `hasParent()`

Returns a boolean indicating whether *any* of the matched Elements are children
of the given parent. Not chainable.

```javascript
let isChildOfApp = __('.child').hasParent('#app')
```

### `closest()`

Returns the nearest parent Element that matches the given selector.

```javascript
let parent = __('.child').closest('.item')
```

### `siblings()`

Returns siblings of all matched Elements. When using `prev` or `next`, the given
Element will not be included in the results (because you are not your own
sibling), but will be included when returning all siblings (because you are a
sibling among others).

```javascript
let prevSiblings = __(this).siblings('prev')
let nextSiblings = __(this).siblings('next')
let allSiblings = __(this).siblings() // includes this
```

### `remove()`

Remove all matched Elements from the DOM.

```javascript
let parent = __('.item').remove()
```

### `removeChildren()`

Remove the inner HTML of all matched Elements.

```javascript
let parent = __('.item').removeChildren()
```

### `html()`

Overwrite the inner HTML of all matched Elements.

```javascript
__('.item').html('<p>Hello world</p>')
```

### `text()`

Overwrite the inner HTML of all matched Elements with textual content.

```javascript
__('.item').text(`<script>alert("This won't run")</script>`)
```

### `prependHtml()`

Prepend an Element or DocumentFragment inside all matched Elements.

```javascript
// optionally also insert things into the fragment, obviously
let frag = new DocumentFragment()
__('.item').prependHtml(frag)
```

### `appendHtml()`

Append an Element or DocumentFragment inside all matched Elements.

```javascript
// optionally also insert things into the fragment, obviously
let frag = new DocumentFragment()
__('.item').appendHtml(frag)
```

### `before()`

Insert stringified HTML before all matched Elements, or return all Elements
before all matched Elements.

```javascript
__('.item').before('<i class="icon"></i>')
```

### `after()`

Insert stringified HTML after all matched Elements, or return all Elements
after all matched Elements.

```javascript
__('.item').after('<i class="icon"></i>')
```

### `moveTo()`

Moves all matched Elements to a destination Element.

```javascript
__('.last-slide').moveTo('.slider')
```

### `wrapInto()`

Wraps all matched Elements with the given HTML. Event handlers on matched
Elements are preserved.

```javascript
__('.item').wrapInto('<wrapper></wrapper>')
```

### `unwrap()`

Removes an Element from the DOM but preserves its children. Event handlers on
children are preserved.

```javascript
__('.parent').unwrap()
```