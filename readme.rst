===============================================================================
dataDash
===============================================================================

dataDash is a micro library to provide an intuitive api for accessing
html5 dataset "data-" attributes.

Factory
=======

Including dataDash.js assigns the global DataDash to the factory
function for creating dataDash interfaces.  To create one you simply call
DataDash, optionally assign it to a variable in any scope, and
pass in options.  If opt is passed as a string
instead of an object, it is assumed that the string is meant to be used
as opt.prefix.

defaults
++++++++

If you call DataDash() without any arguments it defaults to
``{prefix: '', noMethods: false}``, which creates a function that operates on
'data-' attributes without a further prefix, and attaches a method named
dataDash to D3 and jQuery selection prototypes if they are available.

opt.prefix
++++++++++


Call DataDash with ``{prefix: 'string'}`` to create a dataDash interface with an
attribute prefix of 'data-string-' and method names 'dataDashString' instead of
the defaults 'data-' and 'dataDash' respectively.  This allows the entire
interface to only interact with prefixed attributes, so you could have a
'dataDashFoo' and a 'dataDashBar' that can save tagged information to the same
dom elements and never interact with each other.

opt.noMethods
+++++++++++++

Set ``{noMethods: true}`` to prevent dataDash from attaching methods to
D3 and jQuery.

Function Usage
==============

If you assign your DataDash to a variable name like the default usage
``dataDash = DataDash()`` you can then call the created function with up to three
arguments.

* [Required] Whichever dom elements you want to work on. This can be selected
  with a library like jQuery. When used as a method, the jQuery or D3 object is
  used as this argument.
* [Optional] Either an object of name: data pairs to be stored on the selected
  dom elements, or a string name.
* [Optional] Data to be stored if a string name was used.

If there is both a name and data the function sets the appropriate data
on the dom and returns the selected elements.  If a name is given but no data
then retrieve and return all of the data stored at that name.  If only the
elements argument is given then return all of the data from the elements.

Method Usage
============

Method works the same way, except that instead of passing in elements
it operates on ``this`` where it is called.

Example
=======

::

  var dataDash = DataDash();
  // set data-stuff to blah, and data-test to asdf
  $('body').dataDash({stuff: "blah", test: "asdf"});
  $('body').dataDash(); // return the object {stuff: "blah", test: "asdf"}
  dataDash(document.getElementsByTagName('body'), 'test'); // asdf
  DataDash('foo'); // creats methods for .dataDashFoo
  DataDash({prefix: 'bar'}); // creats methods for .dataDashBar
  d3.selector('html').dataDashFoo('hello', {junk: 'I want to save', stuff: 42});
  d3.selector('html').dataDashBar('hello', {junk: 'Bad junk', stuff: 12});
  d3.selector('html').dataDashFoo('hello');
  // {junk: 'I want to save', stuff: 42});
