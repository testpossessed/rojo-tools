import { commands, ExtensionContext } from 'vscode';
import {
  addModelCommandHandler,
  addPartCommandHandler,
  convertToModelCommandHandler,
  convertToPartCommandHandler,
  convertToScriptCommandHandler,
} from './command-handlers';

export function activate(context: ExtensionContext) {
  console.log('Rojo Tools have been activated activated');

  context.subscriptions.push(
    commands.registerCommand('rojoTools.addModel', addModelCommandHandler)
  );
  context.subscriptions.push(commands.registerCommand('rojoTools.addPart', addPartCommandHandler));
  context.subscriptions.push(
    commands.registerCommand('rojoTools.convertToModel', convertToModelCommandHandler)
  );
  context.subscriptions.push(
    commands.registerCommand('rojoTools.convertToPart', convertToPartCommandHandler)
  );
  context.subscriptions.push(
    commands.registerCommand('rojoTools.convertToScript', convertToScriptCommandHandler)
  );
}

export function deactivate() {}
