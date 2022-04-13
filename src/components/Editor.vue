<template>
  <editor-content :editor="editor" class="editor"/>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-3'
import Document from '@tiptap/extension-document'
import StarterKit from '@tiptap/starter-kit'
import BulletList from '@tiptap/extension-bullet-list'
import {Paragraph} from "@tiptap/extension-paragraph";

const CustomDocument = Document.extend({
  content: 'heading block*',
})

export default {
  name: "Editor",
  components: {
    EditorContent,
  },
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      editor: null
    }
  },



  mounted() {
    this.editor = new Editor({
      extensions: [
        CustomDocument,
        StarterKit.configure({
          document: false,
        }),
        BulletList.configure({
          HTMLAttributes: {
            class: 'list__item',
          },
          itemTypeName: 'listItem',
        }),
        Paragraph,
        Text
      ],
      content: this.value,
      onUpdate: () => {
        this.$emit('update', this.editor.getHTML(), this.editor.getText())
      },

    })

    this.emitter.on('toggle-list', (function () {
      this.editor.chain().focus().toggleBulletList().run()
    }).bind(this))
  },

}
</script>

<style lang="scss">

@import "../assets/css/var";
.editor, .editor > * {
  outline: none;
}
.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }
}

.ProseMirror {
  color: $text-color;
}

.ProseMirror > * + * {
  margin-top: 5px;
}

p {
  padding: 0;
  margin: 0;
}
.list__item {
  margin: 20px 15px;
}

.list__item li {
  margin-bottom: 5px;
}

</style>