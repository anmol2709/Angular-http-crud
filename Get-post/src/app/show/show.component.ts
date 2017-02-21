import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {Task} from "../task";
import {AppService} from "../app.service";

@Component({
  moduleId: module.id,
  selector: 'show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit{
  tasks:Task[]=[];
  constructor(private router: Router, private service: AppService) {}
  ngOnInit() {
    // this.tasks = this.service.tasks;


    this.service.getData().subscribe((data1: any) => {
        this.tasks = data1;
        // alert(JSON.stringify(data1))
      },
      (e: any) => {
        alert(e);

      }
    );
  }

  edit(i:number){
  //  alert("Editing task: "+this.tasks[i].title)
    this.router.navigate(['edit',i])
  }
  done(i:any){
//    alert("Deleting task: "+this.tasks[i]._id)
    this.service.delete(this.tasks[i]._id).subscribe((data1: any) => {
        // this.tasks = data1;
      },
      (e: any) => {
        alert(e);

      }
    );
    this.service.getData().subscribe((data1: any) => {
        this.tasks = data1;
        // alert(JSON.stringify(data1))
      },
      (e: any) => {
        alert(e);

      }
    );
  }
  goHome(){
    this.router.navigate(['home']);
  }
}
