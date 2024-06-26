import { EditorPlugin } from "@draft-js-plugins/editor";
import { Store } from "@draft-js-plugins/utils";
import { EditorState, SelectionState } from "draft-js";
import { ComponentType, FC } from "react";

import Separator from "./components/Separator";
import { ToolbarChildrenProps } from "./components/Toolbar";
import { InlineToolbarPluginTheme } from "./theme";
export interface InlineToolbarPluginConfig {
  theme?: InlineToolbarPluginTheme;
}
export interface ToolbarProps {
  children?: FC<ToolbarChildrenProps>;
  overrideContent?: ComponentType<ToolbarChildrenProps>;
}
export declare type InlineToolBarPlugin = EditorPlugin & {
  InlineToolbar: ComponentType<ToolbarProps>;
};
export interface StoreItemMap {
  selection?: SelectionState;
  getEditorState?(): EditorState;
  setEditorState?(state: EditorState): void;
  isVisible?: boolean;
  getEditorRef?(): {
    refs?: {
      editor: HTMLElement;
    };
    editor: HTMLElement;
  };
}
export declare type InlineToolbarPluginStore = Store<StoreItemMap>;
declare const _default: (
  config?: InlineToolbarPluginConfig
) => InlineToolBarPlugin;
export default _default;
export { Separator };
