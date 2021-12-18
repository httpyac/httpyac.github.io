---
sidebarDepth: 3
---

# Plugin Development Guide

## Getting started

A httpYac plugin is an npm package that can add additional features to the project using httpYac. These features can include:

- provide additional environments
- remove sensitive information from logging
- provide additional variable substitution
- add new parser logic and actions

As an npm package, CLI plugin must have a `package.json` file. It's also recommended to have a plugin description in `README.md` to help others find your plugin on npm.

So, typical CLI plugin folder structure looks like the following:

```bash
.
├── README.md
├── index.js      # service plugin
├── package.json
```

## Naming and discoverability

For a plugin to be usable in a httpYac project, it must follow the name convention `httpyac-plugin-<name>` or `@scope/httpyac-plugin-<name>`. It allows your plugin to be:

- Discoverable by httpYac;
- Discoverable by other developers via searching;

:::warning Warning
Make sure to name the plugin correctly, otherwise it will be impossible to find it with httpYac plugins search!
:::

For better discoverability when a user searches for your plugin, put keywords describing your plugin in the `description` field of the plugin `package.json` file.

Example:

```json
{
  "name": "httpyac-plugin-keystore",
  "version": "0.7.7",
  "description": "httpyac plugin to add keystore support to variables"
}
```
`


## Service Plugin

Service plugin serves for extending hooks on every httpyac execution.

Service plugins are loaded automatically when a Service instance is created - i.e. every time the `httpyac` command is invoked inside a project. It's located in the `index.js` file in httpyac plugin root folder.

A service plugin should export a function which receives one arguments:

- A [PluginAPI](plugin-api.md) instance

The minimal required code in the service plugin file is the following:

```js
module.exports = () => {}
```


## Parsing FlowChart

<img src="/flows/parse_flow.svg">


## Sending FlowChart

<img src="/flows/send_flow.svg">


## Execute Http Region FlowChart

<img src="/flows/execute_flow.svg">
