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
    content: `
    <h2>
    Hi there,
  </h2>
  <p>
    this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
  </p>
  <ul>
    <li>
      That's a bullet list with one …
    </li>
    <li>
      … or two list items.
    </li>
  </ul>
    <h1>It's showtime - </h1>
    <h3>Let's get started</h3>
    <p>but take your time </p>`,
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
        <button onClick={handleSubmit} id='submit'>Submit</button>
      </div>
  );
};

export default TipTap;