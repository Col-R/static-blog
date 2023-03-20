import React, { useState, useRef } from 'react';
import { useEditor, EditorContent} from '@tiptap/react';
import {History} from '@tiptap/extension-history'
import ListItem from '@tiptap/extension-list-item'
import StarterKit from '@tiptap/starter-kit';
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'

// example: https://tiptap.dev/examples/default

// components
import MenuBar from './MenuBar'

interface RichTextEditorProps {
    onSubmit: (content: string) => void;
  }

const TipTap: React.FC<RichTextEditorProps> = ({ onSubmit, ...rest }) => {
  const [editorContent, setEditorContent] = useState('');

  const editor = useEditor({
    extensions: [
    StarterKit,
    Color.configure({ types: [TextStyle.name, ListItem.name] }),
    ],
    editorProps: {
      attributes: {
        class: 'editor',
      },
    },
    content: `<h2>
    Hi there,
    </h2>`,
    onUpdate: ({ editor }) => {
      setEditorContent(editor?.getHTML() ?? '');
    },

  });

  const handleSubmit = () => {
    onSubmit(editorContent);
  };

  return (
    <div className = 'editor_wrapper'>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default TipTap;