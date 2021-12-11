import { QuickPickItem} from 'vscode';

export interface ScriptTypeQuickPickItem extends QuickPickItem {
  label: string;
  description: string
}