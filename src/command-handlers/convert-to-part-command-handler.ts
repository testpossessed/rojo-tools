import * as vscode from 'vscode';

export async function convertToPartCommandHandler(resourceUri: vscode.Uri): Promise<void> {
  const metaFileContent: string = `{
    "className": "Part",
    "ignoreUnknownInstances": true
  }`;
      
  let folderPath: string = resourceUri?.path;
  
  if (!folderPath) {
    await vscode.commands.executeCommand('copyFilePath');
    folderPath = await vscode.env.clipboard.readText();
    resourceUri = await vscode.Uri.file(folderPath);
  }

  const metaFileUri: vscode.Uri =  vscode.Uri.file(`${resourceUri.path}/init.meta.json`);
  const workspaceEdit: vscode.WorkspaceEdit = new vscode.WorkspaceEdit();
  workspaceEdit.createFile(metaFileUri);
  workspaceEdit.insert(metaFileUri, new vscode.Position(0,0), metaFileContent);
  await vscode.workspace.applyEdit(workspaceEdit);  
}