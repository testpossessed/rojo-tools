import { commands, env, Position, Uri, window, workspace, WorkspaceEdit } from 'vscode';

export async function addModelCommandHandler(resourceUri: Uri): Promise<void> {
  const metaFileContent: string = `{
    "className": "Model",
    "ignoreUnknownInstances": true
  }`;

  let folderPath: string = resourceUri?.path;

  if (!folderPath) {
    await commands.executeCommand('copyFilePath');
    folderPath = await env.clipboard.readText();
    resourceUri = await Uri.file(folderPath);
  }

  const name = await window.showInputBox({
    placeHolder: 'Enter name',
    prompt: 'Enter a name for the new model',
    value: 'Model',
  });

  if (!name) {
    return;
  }

  const metaFileUri: Uri = Uri.file(`${resourceUri.path}/${name}/init.meta.json`);
  const workspaceEdit: WorkspaceEdit = new WorkspaceEdit();
  workspaceEdit.createFile(metaFileUri);
  workspaceEdit.insert(metaFileUri, new Position(0, 0), metaFileContent);
  await workspace.applyEdit(workspaceEdit);
}
