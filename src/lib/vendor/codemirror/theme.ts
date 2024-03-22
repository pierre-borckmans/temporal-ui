import { HighlightStyle } from '@codemirror/language';
import { EditorView } from '@codemirror/view';
import { tags } from '@lezer/highlight';
import colors from 'tailwindcss/colors';

export const TEMPORAL_THEME = EditorView.theme(
  {
    '&': {
      color: 'white',
      backgroundColor: colors.gray['900'],
      borderRadius: '0.75rem',
      borderWidth: '2px',
      borderColor: colors.slate['600'],
      padding: '0.5rem',
    },
    '.cm-matchingBracket': {
      backgroundColor: colors.gray['800'],
    },
    '.cm-scroller': {
      fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    },
    '.cm-content': {
      caretColor: colors.white,
      fontSize: '0.875em',
    },
    '.cm-editor&.cm-focused': {
      outline: `1px solid ${colors.blue['700']}`,
    },
    '&.cm-focused .cm-matchingBracket': {
      backgroundColor: colors.gray['700'],
    },
    '&.cm-focused .cm-cursor': {
      borderLeftColor: colors.white,
    },
    '&.cm-focused .cm-selectionBackground, ::selection': {
      backgroundColor: colors.gray['700'],
    },
    '.cm-gutters': {
      backgroundColor: colors.gray['900'],
      color: colors.white,
      borderRight: 'none',
    },
    '.cm-line': {
      color: '#ccc',
    },
  },
  { dark: false },
);

export const TEMPORAL_SYNTAX = HighlightStyle.define([
  { tag: tags.punctuation, color: colors.slate['200'] },
  { tag: tags.string, color: colors.slate['200'] },
  { tag: tags.propertyName, color: colors.indigo['600'] },
  { tag: tags.bool, color: colors.slate['200'] },
  { tag: tags.number, color: colors.slate['200'] },
  { tag: tags.operator, color: colors.pink['500'] },
  { tag: tags.comment, color: colors.green['600'] },
  { tag: tags.variableName, color: colors.pink['500'] },
]);
