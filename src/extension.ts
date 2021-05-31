import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('swappy.swap', () => {

		const editor = vscode.window.activeTextEditor;
		editor && editor.edit((selectedText) => {
			const text = editor.document.getText(editor.selection);
			const newText = text.replace(/ /g, '').split(',').reverse().join(', ');
			selectedText.replace(editor.selection, newText);
		});
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
