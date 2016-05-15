import {Component,Input} from '@angular/core';
import {SearchTagsComponent} from "./tags/searchTags.component";


@Component({
    selector:'select-tags',
    template:require('../../../views/search/searchTag.html'),
    providers:[SearchTagsComponent]
})
export class SearchComponent{
    key:string;
    
    @Input()
    isTagSearch:boolean;
    
    
    constructor(private searchTagComponent : SearchTagsComponent){}

    onSubmit(value:any){
        let searchkey = (value['searchParam']);
        console.log(searchkey);
        this.key = searchkey;
        if(this.isTagSearch){
            console.log("inside if condition");
            this.searchTagComponent.getResult(this.key);
        }
        else{
            
        }   
    }

    
    
    
}