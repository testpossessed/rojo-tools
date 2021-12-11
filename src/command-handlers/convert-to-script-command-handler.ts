import { commands, Disposable, env, Position, Uri, window, workspace, WorkspaceEdit } from 'vscode';

import { ScriptTypeQuickPickItem } from '../models/script-type-quick-pick-item';

export async function convertToScriptCommandHandler(resourceUri: Uri): Promise<void> {
  const metaFileContent: string = `{
    "ignoreUnknownInstances": true
  }`;

  const clientScriptContent: string = `local parent = script.Parent
  local player = game.Players.LocalPlayer`;

  const serverScriptContent: string = `local Players = game:GetService("Players")
  local parent = script.Parent`;

  let folderPath: string = resourceUri?.path;

  if (!folderPath) {
    await commands.executeCommand('copyFilePath');
    folderPath = await env.clipboard.readText();
    resourceUri = await Uri.file(folderPath);
  }

  const quickPick = window.createQuickPick<ScriptTypeQuickPickItem>();
  quickPick.canSelectMany = false;
  quickPick.items = [
    {
      label: 'Client',
      description: 'A LocalScript to run in the Roblox client',
    },
    {
      label: 'Server',
      description: 'A Script to run on the current server',
    },
  ];
  quickPick.onDidChangeSelection(async (selectedItems) => {
    const selected = selectedItems[0];
    if (selected) {
      const metaFileUri: Uri = Uri.file(`${resourceUri.path}/init.meta.json`);
      const scriptFileUrl: Uri = Uri.file(
        `${resourceUri.path}/init.${selected.label.toLowerCase()}.lua`
      );
      const scriptFileContent: string =
        selected.label === 'Client' ? clientScriptContent : serverScriptContent;

      const workspaceEdit: WorkspaceEdit = new WorkspaceEdit();

      workspaceEdit.createFile(metaFileUri);
      workspaceEdit.insert(metaFileUri, new Position(0, 0), metaFileContent);

      workspaceEdit.createFile(scriptFileUrl);
      workspaceEdit.insert(scriptFileUrl, new Position(0, 0), scriptFileContent);

      await workspace.applyEdit(workspaceEdit);
    }
    quickPick.hide();
    quickPick.dispose();
  });

  quickPick.show();
}
