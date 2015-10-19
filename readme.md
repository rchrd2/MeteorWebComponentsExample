An attempt at integrating Meteor with Web Components.

It seems like this only works in Chrome, and so possibly it does not work with the polyfill. I found an issue regarding this here https://github.com/meteor/meteor/issues/4091

There's a workaround to make events work. The weird trick is to wrap the template include in a div. Example:

### Before (does not work)

```
<body>
    {{> hello}}
</body>
```

### After (works)

```
<body>
  <div>
    {{> hello}}
  </div>
</body>
```

Workaround source: https://github.com/pfafman/meteor-polymer-event-test
