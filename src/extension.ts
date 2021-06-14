// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "code-runner" is now active!');

  context.subscriptions.push(
    vscode.commands.registerCommand("code-runner.helloWorld", () => {
      vscode.window.showInformationMessage("Hello World from Code Runner!");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("code-runner.newFile", async () => {
      const document = await vscode.workspace.openTextDocument({
        language: "javasript",
      });

      const showEditor = async (document: vscode.TextDocument) => {
        await vscode.window.showTextDocument(
          document,
          vscode.ViewColumn.Active
        );
      };

      if (document) {
        showEditor(document);
      }
    })
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
