import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  mDataArray:any[] = []

  // กระบวน DI คือ
  // เป็นเทคนิคหนึ่งในการ ป้องกันการสร้าง (class หรืออะไรก็ตาม) บ้างอย่างด้วยตัวเอง และจะใช้วิธีการรับสิ่งที่ต้องการเข้ามาผ่านทางใดทางหนึ่ง
  constructor(private http:HttpClient){

  }
// เมื่อกด Submit ทำการ alert ข้อมูล หรือ query ข้อมูลออกมาแสดง
onSubmit(data: any){
  // alert(JSON.stringify(data)); จะทำการ alert ค่าที่ได้เป็น JSON บน Brownser
  // let postData = {username: data.email, feedback: data.feedback}

  // .subscribe คือ การสั่ง run และดักฟังผลลัพธ์ที่จะส่ง call back ที่ชื่อว่า result
  this.http.post<any>('http://localhost:3000/api', data).subscribe(result=>{
  // alert(JSON.stringify(result));
  this.getFeedback();
  });
}

  getFeedback(){
    this.http.get<any>('http://localhost:3000/api').subscribe(result=>{
    // alert ข้อมูลใน Db เป็นค่า Json ทุกครั้งที่เข้ามาในเพจนี้
    // alert(JSON.stringify(result));

    // การนำข้อมูลใน db มาแสดงเป็น List ด้านล่าง
    // การนำ ผลลัพธ์ข้อมูล มาเก็บไว้ในตัวแปร array ที่ชื่อ mDataArray

    // ถ้าไม่มี --> จะไม่แสดงข้อมูลที่ทำการเพิ่มเข้า แต่ข้อมูลยังเพิ่มเข้า DB อยู่
    this.mDataArray = result.data;
    });
  }

  ngOnInit(): void {
    // let postData = {username: data.email, feedback: data.feedback}
    // this.http.post<any>('http://localhost:3000/api', data).subscribe(result=>{
    //    alert(JSON.stringify(result));
    //  });

    // this.getFeedback(); การนำข้อมูลจาก function getFeedback() มาแสดงเป็น List ด้านล่าง

    // ถ้าไม่มี --> this.getFeedback(); จะแสดงข้อมูล "เมื่อมีการ input ค่าใหม่เข้าไปใน DB" ถ้าเข้าเพจนี้ใหม่ หรือ refresh หน้านี้ข้อมูลก็จะไม่แสดงออกมา
    // ถ้ามี --> this.getFeedback(); จะแสดงข้่อมูลแบบ realtime "เมื่อมีการ input ค่าใหม่เข้าไปใน DB"

    this.getFeedback();
  }

}
