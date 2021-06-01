import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular Router';
  mDataArray:any[] = []

  constructor(private http:HttpClient){

  }
// เมื่อกด Submit ทำการ alert ข้อมูล หรือ query ข้อมูลออกมาให้เห็นแบบ realtime
  onSubmit(data: any){
    // alert(JSON.stringify(data)); จะทำการ alert ค่าที่ได้เป็น JSON บน Brownser
    // let postData = {username: data.email, feedback: data.feedback}
    this.http.post<any>('http://localhost:3000/api', data).subscribe(result=>{
    // alert(JSON.stringify(result));
    this.getFeedback();
    });
  }

  getFeedback(){
    this.http.get<any>('http://localhost:3000/api').subscribe(result=>{
    // alert(JSON.stringify(result));
    this.mDataArray = result.data;
    });
  }

  ngOnInit(): void {
    this.getFeedback();
  }
}
