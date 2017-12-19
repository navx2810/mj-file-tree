import Quill from 'quill';
const Emebed = Quill.import('blots/embed');

let whitelist: string[] = ['src', 'class', 'width', 'height', 'title', 'alt'];

export default class ImageBlot extends Emebed {
    static create(value) {
        let node = super.create();
        whitelist.forEach(o => { if (value[o])  node.setAttribute(o, value[o]); })
        return node;
    }

    static value(node) {
        let values: object = {}
        whitelist.forEach((o, i) => {  values[o] = node.getAttribute(o) })
        return values;
    }
}

ImageBlot.blotName = 'image';
ImageBlot.tagName = 'img';