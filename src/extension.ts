import { commands, ExtensionContext } from "vscode";
import { ChatPanel } from "./panels/ChatPanel";

export function activate(context: ExtensionContext) {
  // Create the show hello world command
  const showChatCommand = commands.registerCommand("ai-ext-vite.helloWorld", () => {
    ChatPanel.render(context.extensionUri);
  });

  // Add command to the extension context
  context.subscriptions.push(showChatCommand);
}