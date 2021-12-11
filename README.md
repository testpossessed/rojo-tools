# Rojo Tools

This extension adds several features that make working with Rojo projects in VS Code less reliant on understanding the metadata model of Rojo.  It works only with files in the Workspace so does not depend on the Rojo server running a project and does not depend on Roblox Studio being connected.

## Features

Rojo Tools adds the following features to VS Code:

### Rojo Tools context menu in Explorer
A new Rojo Tools menu will appear when you show the context menu in the built in Explorer window.  Selecting Rojo Tools in the menu will display a list of commands that are relevant to the selected resource (folder or file)

### Add Model command
This is available whenever a folder is the current context in the Explorer Window.  It can be executed via the Rojo Tools context menu or from the Command Pallette (Ctrl+Shift+P or Cmd+Shift+P) as **Rojo Tools: Add Model**.

The command prompts for a name via the built in Quick Input bar then creates a new folder below the current folder using the name provided and adds the appropriate *init.meta.json* file that defines the folder as a Model

### Add Part command
This is available whenever a folder is the current context in the Explorer Window.  It can be executed via the Rojo Tools context menu or from the Command Pallette (Ctrl+Shift+P or Cmd+Shift+P) as **Rojo Tools: Add Part**.

The command prompts for a name via the built in Quick Input bar then creates a new folder below the current folder using the name provided and adds the appropriate *init.meta.json* file that defines the folder as a Part

### Convert to Model command
This is available whenever a folder is the current context in the Explorer Window.  It can be executed via the Rojo Tools context menu or from the Command Pallette (Ctrl+Shift+P or Cmd+Shift+P) as **Rojo Tools: Convert to Model**.

The command adds the appropriate *init.meta.json* file that defines the folder as a Model

### Convert to Part command
This is available whenever a folder is the current context in the Explorer Window.  It can be executed via the Rojo Tools context menu or from the Command Pallette (Ctrl+Shift+P or Cmd+Shift+P) as **Rojo Tools: Convert to Part**.

The command adds the appropriate *init.meta.json* file that defines the folder as a Part

### Convert to Script command
This is available whenever a folder is the current context in the Explorer Window.  It can be executed via the Rojo Tools context menu or from the Command Pallette (Ctrl+Shift+P or Cmd+Shift+P) as **Rojo Tools: Convert to Script**.

The command prompts the type of script to conver to via the built in Quick Pick list offering two options *Client* or *Server*

The command adds the appropriate *init.meta.json* file that prevents Rojo from deleting unknown children of the script
The command adds either a *init.client.lua* or *init.server.lua* file depending on the response to the prompt mentioned above.

<!-- \!\[feature X\]\(images/feature-x.png\) -->

## Requirements

Rojo Tools has no dependencies although it won't be much use if you are not using [Rojo](https://marketplace.visualstudio.com/items?itemName=evaera.vscode-rojo)

<!-- ## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: enable/disable this extension
* `myExtension.thing`: set to `blah` to do something -->

## Known Issues

None at this point.

## Release Notes

Changes are documented in CHANGELOG

## Comments
Bear in mind that this extension (at least in it's initial state) is built to suit the way I work.  If you have any suggestions for improvement or find any issues please log an issue via the [GitHub Issues](https://github.com/testpossessed/rojo-tools/issues) page for the extension.
