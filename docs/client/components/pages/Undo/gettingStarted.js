// It is important to import the Editor which accepts plugins.
import Editor from 'draft-js-plugins-editor';
import createHistoryPlugin from 'draft-js-history-plugin';
import React from 'react';

// Creates an Instance. At this step, a configuration object can be passed in
// as an argument.
const historyPlugin = createHistoryPlugin();

// The Editor accepts an array of plugins. In this case, only the historyPlugin
// is passed in, although it is possible to pass in multiple plugins.
const MyEditor = ({ editorState, onChange }) => (
  <Editor
    editorState={ editorState }
    onChange={ onChange }
    plugins={ [historyPlugin] }
  />
);

export default MyEditor;
