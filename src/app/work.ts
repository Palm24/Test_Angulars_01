
export interface work {
    topic: string;
    sub_topic:string;
    content:string;
    img:string;
}

export const works: work[] = [
    { topic: 'Basic E-commerce Website', 
    sub_topic: 'Graduation Project (4th.)', 
    content: 'เป็นโปรเจคจบปี 4 ที่เกี่ยวกับเว็บไซต์ e-commerce หรือร้านค้าออนไลน์ซึ่งเกี่ยวกับการขายเครื่องกรองน้ำและอุปกรณ์ต่างๆ ซึ่งสามารถใช้งานได้จริง และมีหลังบ่านที่สามารถเก็บข้อมูลและตรวจสอบประวัติคำสั่งซื้อของลูกค้า รวมถึงการแสดงยอดขายรายวัน เดือนและปี ในรูปแบบกราฟ .......',
    img:'./assets/images/Grad Project.png'
    },
    { topic: 'Web Developer', 
    sub_topic: 'Intern (4th. University)', 
    content: 'ศึกษาการสร้างเว็บไซต์ e-commerce ด้วย Wordpress และ Plugin Woo-commerce รวมถึงการใช้ Plugin ของ Wordpress ในการสร้าง ตกแต่ง หรือแก้ไขในหน้าเพจต่างๆ และศึกษาเรื่องการสร้าง Line Chat bot จากเว็บไซต์ Line chat bot developer.....',
    img:'./assets/images/image.jpg'
    },
]