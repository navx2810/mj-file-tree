import { Input, Component, OnInit, ViewChild } from '@angular/core';
import { QuillEditorComponent } from 'ngx-quill';

import Quill from 'quill';
import ImageBlot from './blots/image.blot';

Quill.register(ImageBlot)

@Component({
    selector: 'mc-text-editor',
    template: `<quill-editor
                    #editor 
                    [ngModel]="ngModel" 
                    [modules]="modules"
                    [theme]="theme"
                ></quill-editor>`

})
export class McTextEditorComponent implements OnInit {

    @ViewChild('editor') editor: QuillEditorComponent
    @Input() ngModel: string;
    @Input() modules: object;

    theme: string = 'bubble';
    placeholder: string = 'Insert text here...';

    mouseDown: boolean = false;

    constructor() {
        this.modules = {
            toolbar: [
                [{ 'header': [2, 3, 4, 5, 6, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'indent': '-1' }, { 'indent': '+1' }],
                ['link']
            ]
        }
    }

    ngOnInit() {

        this.editor.onContentChanged
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe(data => {
                console.log('onContentChanged', data)
            });


        // this.editor.onSelectionChanged.subscribe(selection => {
        //     console.log('onSelectionChanged', selection)
        // });

        // this.editor.onEditorCreated.subscribe(e => {
        //     // console.log('onEditorCreated', e)
        // });

    }
}